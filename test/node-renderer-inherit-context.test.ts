import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, it } from 'vitest'
import { defineComponent, h } from 'vue'
import { removeCustomComponents, setCustomComponents } from '../src/utils/nodeComponents'
import { flushAll } from './setup/flush-all'

const CUSTOM_ID = 'inherit-node-renderer-context'

const ProbeCodeBlock = defineComponent({
  name: 'ProbeCodeBlock',
  props: {
    node: { type: Object, required: true },
    darkTheme: { type: String, default: '' },
    lightTheme: { type: String, default: '' },
    isDark: { type: Boolean, default: false },
    stream: { type: Boolean, default: true },
    themes: { type: Array, default: () => [] },
    probe: { type: String, default: '' },
  },
  setup(props) {
    return () => h('div', {
      'class': 'probe-code-block',
      'data-dark-theme': props.darkTheme,
      'data-light-theme': props.lightTheme,
      'data-is-dark': String(props.isDark),
      'data-stream': String(props.stream),
      'data-themes': JSON.stringify(props.themes ?? []),
      'data-probe': props.probe,
    }, String((props.node as any)?.code ?? ''))
  },
})

afterEach(() => {
  try {
    removeCustomComponents(CUSTOM_ID)
  }
  catch {
  }
})

describe('node renderer inherited context', () => {
  it('keeps code block theme props inside nested renderers', async () => {
    const MarkdownRender = (await import('../src/components/NodeRenderer')).default

    setCustomComponents(CUSTOM_ID, { code_block: ProbeCodeBlock })

    const wrapper = mount(MarkdownRender, {
      props: {
        customId: CUSTOM_ID,
        typewriter: false,
        isDark: true,
        codeBlockStream: false,
        codeBlockDarkTheme: 'dark_plus',
        codeBlockLightTheme: 'light_plus',
        themes: ['dark_plus', 'light_plus'],
        codeBlockProps: { probe: 'from-parent' },
        nodes: [
          {
            type: 'list',
            ordered: false,
            items: [
              {
                type: 'list_item',
                raw: '',
                children: [
                  {
                    type: 'blockquote',
                    raw: '',
                    children: [
                      {
                        type: 'code_block',
                        language: '',
                        code: 'nested code',
                        raw: 'nested code',
                        loading: false,
                      },
                    ],
                  },
                ],
              },
            ],
            raw: '',
          },
        ] as any,
      },
    })

    try {
      await flushAll()

      const probe = wrapper.get('.probe-code-block')
      expect(probe.text()).toContain('nested code')
      expect(probe.attributes('data-dark-theme')).toBe('dark_plus')
      expect(probe.attributes('data-light-theme')).toBe('light_plus')
      expect(probe.attributes('data-is-dark')).toBe('true')
      expect(probe.attributes('data-stream')).toBe('false')
      expect(probe.attributes('data-themes')).toBe(JSON.stringify(['dark_plus', 'light_plus']))
      expect(probe.attributes('data-probe')).toBe('from-parent')
    }
    finally {
      wrapper.unmount()
    }
  })
})
