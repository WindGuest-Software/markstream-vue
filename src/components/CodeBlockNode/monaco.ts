import { preload } from '../NodeRenderer/preloadMonaco'

let mod: any = null
let importAttempted = false

async function warmupShikiTokenizer(m: any) {
  const getOrCreateHighlighter = m?.getOrCreateHighlighter
  if (typeof getOrCreateHighlighter !== 'function')
    return true

  try {
    const highlighter = await getOrCreateHighlighter(
      ['dark-plus', 'light-plus'],
      ['plaintext', 'text', 'javascript'],
    )

    if (highlighter && typeof highlighter.codeToTokens === 'function') {
      highlighter.codeToTokens('const a = 1', { lang: 'javascript', theme: 'dark-plus' })
    }
    return true
  }
  catch (err) {
    console.warn('[markstream-vue] Failed to warm up Shiki tokenizer; disabling stream-monaco for this session.', err)
    return false
  }
}

export async function getUseMonaco() {
  if (mod)
    return mod
  if (importAttempted)
    return null

  try {
    mod = await import('stream-monaco')
    await preload(mod)
    const ok = await warmupShikiTokenizer(mod)
    if (!ok) {
      mod = null
      importAttempted = true
      return null
    }
    return mod
  }
  catch {
    importAttempted = true
    // Return null to indicate the module is not available
    // The caller should handle the fallback gracefully
    return null
  }
}
