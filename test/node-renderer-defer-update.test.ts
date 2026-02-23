import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { flushAll } from './setup/flush-all'

interface Entry { target: Element, isIntersecting: boolean, intersectionRatio: number }

class FakeIntersectionObserver {
  static instances: FakeIntersectionObserver[] = []
  callback: (entries: Entry[]) => void
  elements = new Set<Element>()

  constructor(cb: (entries: Entry[]) => void) {
    this.callback = cb
    FakeIntersectionObserver.instances.push(this)
  }

  observe(el: Element) {
    this.elements.add(el)
  }

  unobserve(el: Element) {
    this.elements.delete(el)
  }

  disconnect() {
    this.elements.clear()
  }

  trigger(el: Element, isIntersecting = true) {
    if (!this.elements.has(el))
      return
    this.callback([{ target: el, isIntersecting, intersectionRatio: isIntersecting ? 1 : 0 }])
  }
}

afterEach(() => {
  FakeIntersectionObserver.instances = []
})

describe('markdownRender deferNodesUntilVisible updates', () => {
  it('keeps already-visible deferred nodes rendered across content updates', async () => {
    const OriginalIO = globalThis.IntersectionObserver
    vi.stubGlobal('IntersectionObserver', FakeIntersectionObserver as any)

    let wrapper: ReturnType<typeof mount> | null = null
    try {
      const MarkdownRender = (await import('../src/components/NodeRenderer')).default
      const markdown = Array.from({ length: 60 }, (_, i) => `Paragraph ${i + 1}`).join('\n\n')

      wrapper = mount(MarkdownRender, {
        props: {
          content: markdown,
          deferNodesUntilVisible: true,
          viewportPriority: true,
          initialRenderBatchSize: 40,
        },
      })

      await flushAll()

      const deferredIndex = 45
      const before = wrapper.find(`[data-node-index="${deferredIndex}"]`)
      expect(before.exists()).toBe(true)
      expect(before.find('.node-placeholder').exists()).toBe(true)

      const io = FakeIntersectionObserver.instances[0]
      expect(io).toBeTruthy()
      io.trigger(before.element, true)

      await flushAll()

      const visible = wrapper.find(`[data-node-index="${deferredIndex}"]`)
      expect(visible.find('.node-placeholder').exists()).toBe(false)
      expect(visible.find('.node-content').exists()).toBe(true)

      await wrapper.setProps({
        content: markdown.replace('Paragraph 1', 'Paragraph 1 updated'),
      })
      await flushAll()

      const updated = wrapper.find(`[data-node-index="${deferredIndex}"]`)
      expect(updated.find('.node-placeholder').exists()).toBe(false)
      expect(updated.find('.node-content').exists()).toBe(true)
    }
    finally {
      wrapper?.unmount()
      vi.stubGlobal('IntersectionObserver', OriginalIO as any)
    }
  })
})
