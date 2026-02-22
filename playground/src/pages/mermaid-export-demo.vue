<script setup lang="ts">
import {h, ref} from 'vue'
import MermaidBlockNode from '../../../src/components/MermaidBlockNode'
import MarkdownRender from '../../../src/components/NodeRenderer'
import {setCustomComponents} from '../../../src/utils/nodeComponents'
import MermaidWorker from '../../../src/workers/mermaidParser.worker?worker&inline'
import {setMermaidWorker} from '../../../src/workers/mermaidWorkerClient'

// Ensure mermaid worker is registered (playground environment)
setMermaidWorker(new MermaidWorker())

const uploaded = ref<string | null>(null)
const uploading = ref(false)

function fakeUpload(_svg: string) {
  uploading.value = true
  // Simulate an async upload and return a fake URL
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      uploading.value = false
      resolve(`https://example.com/uploads/mermaid-${Date.now()}.svg`)
    }, 700)
  })
}

async function handleExport(ev: any) {
  // Prevent default export (component would otherwise download)
  ev.preventDefault()
  const svgString = ev.svgString ?? (ev.svgElement ? new XMLSerializer().serializeToString(ev.svgElement) : null)
  if (!svgString) {
    console.warn('No svg payload available on export event')
    return
  }
  const url = await fakeUpload(svgString)
  uploaded.value = url
}

// Register a scoped override so MarkdownRender will use our custom onExport handler
setCustomComponents('playground-demo-export', {
  mermaid: (props: any) => h(MermaidBlockNode, {
    ...props,
    onExport: handleExport,
  }),
})

// small mermaid block content (note: use a normal JS string here)
const md = ref('```mermaid\ngraph LR\n  A[User] --> B[Server]\n  B --> C[Storage]\n```')

// reference MarkdownRender to satisfy linters that may require script usage
void MarkdownRender
</script>

<template>
  <div class="p-6 max-w-3xl mx-auto">
    <h2 class="text-xl font-semibold mb-4">
      Mermaid export override demo
    </h2>

    <p class="mb-3 text-sm text-gray-600">
      This demo overrides the internal Mermaid renderer inside MarkdownRender and intercepts the <code>export</code>
      event. The example uses <code>ev.svgString</code> (provided by the component) and simulates uploading it to a
      server.
    </p>

    <MarkdownRender custom-id="playground-demo-export" :content="md" :is-dark="true"/>

    <div class="space-y-2 text-sm">
      <div v-if="uploading" class="text-blue-700">
        Uploading SVG…
      </div>
      <div v-else-if="uploaded">
        Uploaded → <a :href="uploaded" target="_blank" class="text-indigo-600 hover:underline">{{ uploaded }}</a>
      </div>
      <div v-else class="text-gray-500">
        Try the 'Export' button in the block's header to upload (intercepted).
      </div>
    </div>
  </div>
</template>

<style scoped>
pre {
  white-space: pre-wrap
}
</style>
