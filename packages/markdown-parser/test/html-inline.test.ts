import { describe, expect, it } from 'vitest'
import { getMarkdown, parseMarkdownToStructure } from '../src'

describe('html_inline parsing', () => {
  it('parses <a> as link node with href and inner text', () => {
    const md = getMarkdown()
    const markdown = `This is a <a href="https://example.com">Example</a> link.`
    const nodes = parseMarkdownToStructure(markdown, md)
    expect(nodes.length).toBeGreaterThan(0)
    const para = nodes[0]
    expect(para.type).toBe('paragraph')
    const linkChild = (para as any).children.find((c: any) => c.type === 'link')
    expect(linkChild).toBeDefined()
    expect(linkChild.href).toBe('https://example.com')
    expect(linkChild.children[0].content).toBe('Example')
  })

  it('preserves custom <a> attributes on link node attrs', () => {
    const md = getMarkdown()
    const markdown = `<a href="https://example.com" target="_self" rel="nofollow" data-track="cta">Example</a>`
    const nodes = parseMarkdownToStructure(markdown, md)
    const para = nodes[0] as any
    const linkChild = para.children.find((c: any) => c.type === 'link')

    expect(linkChild).toBeDefined()
    expect(linkChild.href).toBe('https://example.com')
    expect(linkChild.attrs).toEqual(expect.arrayContaining([
      ['href', 'https://example.com'],
      ['target', '_self'],
      ['rel', 'nofollow'],
      ['data-track', 'cta'],
    ]))
  })

  it('creates html_inline nodes for generic inline html like <span>', () => {
    const md = getMarkdown()
    const markdown = `Before <span>inner span</span> After`
    const nodes = parseMarkdownToStructure(markdown, md)
    const para = nodes[0]
    const spanNode = (para as any).children.find((c: any) => c.type === 'html_inline')
    expect(spanNode).toBeDefined()
    expect(spanNode.content).toContain('<span')
    expect(spanNode.content).toContain('</span>')
    expect(spanNode.children?.[0]?.content).toBe('inner span')
  })

  it('handles attribute values that include ">" characters', () => {
    const md = getMarkdown()
    const markdown = `Value <a href="https://example.com?q=a>b&x=1">Here</a> end`
    const nodes = parseMarkdownToStructure(markdown, md)
    const para = nodes[0]
    const linkChild = (para as any).children.find((c: any) => c.type === 'link')
    expect(linkChild).toBeDefined()
    // href extraction should capture full quoted value including '>'
    expect(linkChild.href).toBe('https://example.com?q=a>b&x=1')
  })

  it('handles missing closing tag gracefully (unclosed <a>)', () => {
    const md = getMarkdown()
    const markdown = `Start <a href="https://example.com">Unclosed text`
    const nodes = parseMarkdownToStructure(markdown, md)
    // Should not throw; ensure raw input is preserved in some node
    const serialized = JSON.stringify(nodes)
    // JSON will escape quotes, so check for a less strict substring and for href URL
    expect(serialized).toContain('<a href')
    expect(serialized).toContain('https://example.com')
    expect(serialized).toContain('Unclosed text')
  })
})
