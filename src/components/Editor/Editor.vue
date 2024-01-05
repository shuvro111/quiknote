<script lang="ts" setup>
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Toolbar from './Toolbar.vue'
import { watch } from 'vue'

const modelValue = defineModel<string>()

//define the emits
const emit = defineEmits(['update:modelValue'])

watch(modelValue, (value) => {
  if (editor.value?.isEmpty) {
    modelValue.value = ''
  }
  const isSame = value === editor.value?.getHTML()
  if (!isSame) {
    editor.value?.commands.setContent(value as string)
  }
})

const editor = useEditor({
  content: modelValue.value as string,
  onUpdate: ({ editor }) => {
    emit('update:modelValue', editor.getHTML())
  },
  extensions: [
    StarterKit.configure({
      dropcursor: false,
      gapcursor: false,

      heading: { levels: [1, 2, 3] }
    })
  ]
})
</script>

<template>
  <div v-if="editor" class="editor">
    <Toolbar :editor="editor" />
    <editor-content :editor="editor" class="content" />
  </div>
</template>

<style scoped>
.editor {
  display: flex;
  flex-wrap: wrap;
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid #111111;
  box-shadow: 0px 10px 50px 0px rgba(0, 0, 0, 0.2);
}

.content {
  width: 100%;
  padding: 2rem;
  background: #ffffff;
  font-size: inherit;
}
</style>
