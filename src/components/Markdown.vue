<template>
  <pre class="whitespace-pre-wrap p-10">
{{ JSON.stringify(markdownBlocks, null, 2) }}
  </pre>
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue'
import { Block, isTextBlock } from '@/utils/types'

const props = defineProps({
  page: {
    type: Object as PropType<{ name:string, blocks:Block[] }>,
    required: true,
  }
})

const markdownBlocks = computed(() => {
  return props.page.blocks.map(block => {
    if (isTextBlock(block.type)) {
      return {
        id: block.id,
        type: block.type,
        details: {
          value: (block.details.value as string)
            .replaceAll('<p>', '')
            .replaceAll('</p>', '')
            .replaceAll('<strong>', '**')
            .replaceAll('</strong>', '**')
            .replaceAll('<em>', '*')
            .replaceAll('</em>', '*')
            .replaceAll(/\<br.*?\>/g, '')
            .replaceAll(/\<ol>/g, '1. ')
            .replaceAll(/\<ol start="(\d+)"\>/g, '$1. ')
            .replaceAll('</ol>', '')
            .replaceAll(/\<li>/g, '')
            .replaceAll(/\<\/li>/g, ''),
        }
      }
    } else {
      return block
    }
  })
})
</script>
