import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import NodeRenderer from '../src/components/NodeRenderer'
import { flushAll } from './setup/flush-all'

describe('linkNode attrs passthrough', () => {
  it('binds node.attrs onto the rendered anchor element', async () => {
    const wrapper = mount(NodeRenderer, {
      props: {
        typewriter: false,
        batchRendering: false,
        nodes: [
          {
            type: 'paragraph',
            raw: '',
            children: [
              {
                type: 'link',
                href: 'https://example.com',
                title: null,
                text: 'Example',
                raw: '[Example](https://example.com)',
                attrs: [
                  ['target', '_self'],
                  ['rel', 'nofollow'],
                  ['data-track', 'cta'],
                ],
                children: [
                  {
                    type: 'text',
                    content: 'Example',
                    raw: 'Example',
                  },
                ],
              },
            ],
          },
        ],
      },
    })

    await flushAll()
    const a = wrapper.get('a.link-node')
    expect(a.attributes('target')).toBe('_self')
    expect(a.attributes('rel')).toBe('nofollow')
    expect(a.attributes('data-track')).toBe('cta')
  })

  it('sanitizes dangerous node.attrs before binding', async () => {
    const wrapper = mount(NodeRenderer, {
      props: {
        typewriter: false,
        batchRendering: false,
        nodes: [
          {
            type: 'paragraph',
            raw: '',
            children: [
              {
                type: 'link',
                href: 'https://example.com',
                title: null,
                text: 'Example',
                raw: '[Example](https://example.com)',
                attrs: [
                  ['onclick', 'alert(1)'],
                  ['href', 'javascript:alert(1)'],
                  ['data-safe', '1'],
                ],
                children: [
                  {
                    type: 'text',
                    content: 'Example',
                    raw: 'Example',
                  },
                ],
              },
            ],
          },
        ],
      },
    })

    await flushAll()
    const a = wrapper.get('a.link-node')
    expect(a.attributes('onclick')).toBeUndefined()
    expect(a.attributes('href')).toBe('https://example.com')
    expect(a.attributes('data-safe')).toBe('1')
  })
})
