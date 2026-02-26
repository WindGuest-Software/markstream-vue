import { describe, expect, it } from 'vitest'
import { getMarkdown, parseMarkdownToStructure } from '../src'

describe('html inline malformed custom-tag regression', () => {
  it('keeps malformed "<robot=...>" as literal text instead of dropping children', () => {
    const md = getMarkdown()
    const markdown = '<robot=翻转检测>尘盒搞定！'
    const nodes = parseMarkdownToStructure(markdown, md, { final: true })
    const para = nodes[0] as any

    expect(para.type).toBe('paragraph')
    expect(Array.isArray(para.children)).toBe(true)
    expect(para.children.length).toBeGreaterThan(0)

    const text = (para.children ?? [])
      .filter((c: any) => c.type === 'text')
      .map((c: any) => String(c.content ?? ''))
      .join('')

    expect(text).toContain('<robot=翻转检测>')
    expect(text).toContain('尘盒搞定！')
  })

  it('keeps valid custom-tag attributes working (e.g. <robot xxx="sa">)', () => {
    const md = getMarkdown('robot-attrs', { customHtmlTags: ['robot'] })
    const markdown = '<robot xxx="sa">维护中</robot>'
    const nodes = parseMarkdownToStructure(markdown, md, {
      customHtmlTags: ['robot'],
      final: true,
    })
    const para = nodes[0] as any
    const robot = (para.children ?? []).find((c: any) => c.type === 'robot')

    expect(robot).toBeDefined()
    expect(robot.attrs).toContainEqual(['xxx', 'sa'])
    expect(robot.children?.[0]?.type).toBe('text')
    expect(String(robot.children?.[0]?.content ?? '')).toContain('维护中')
  })

  it('does not affect normal html_inline parsing for standard tags', () => {
    const md = getMarkdown()
    const markdown = 'before <span data-x="1">ok</span> after'
    const nodes = parseMarkdownToStructure(markdown, md, { final: true })
    const para = nodes[0] as any
    const spanNode = (para.children ?? []).find((c: any) => c.type === 'html_inline' && c.tag === 'span')

    expect(spanNode).toBeDefined()
    expect(spanNode.children?.[0]?.type).toBe('text')
    expect(spanNode.children?.[0]?.content).toBe('ok')
  })
})
