import { describe, expect, it } from 'vitest'
import { getMarkdown, parseMarkdownToStructure } from '../src'

describe('link attrs parsing', () => {
  it('preserves custom attrs injected on link_open tokens', () => {
    const md = getMarkdown('link-attrs')
    const nodes = parseMarkdownToStructure('[Example](https://example.com)', md, {
      preTransformTokens(tokens: any[]) {
        for (const token of tokens) {
          if (token?.type !== 'inline' || !Array.isArray(token.children))
            continue
          for (const child of token.children) {
            if (child?.type !== 'link_open')
              continue
            if (typeof child.attrSet === 'function') {
              child.attrSet('target', '_self')
              child.attrSet('data-track', 'cta')
            }
            else {
              child.attrs = [...(child.attrs ?? []), ['target', '_self'], ['data-track', 'cta']]
            }
          }
        }
        return tokens
      },
    })

    const para = nodes[0] as any
    const link = para.children.find((c: any) => c.type === 'link')
    expect(link).toBeDefined()
    expect(link.attrs).toEqual(expect.arrayContaining([
      ['href', 'https://example.com'],
      ['target', '_self'],
      ['data-track', 'cta'],
    ]))
  })
})
