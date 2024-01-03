<script lang="ts" setup>
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Toolbar from './Toolbar.vue'
import { watch } from 'vue'

// interface EditorProps {
//   modelValue: string
// }
//define the props
// const { modelValue } = defineProps<EditorProps>()

const modelValue = defineModel<string>()

//define the emits
const emit = defineEmits(['update:modelValue'])

watch(modelValue, (value) => {
  if (editor.value?.isEmpty) {
    modelValue.value = ''
  }
  // editor.value?.commands.deleteNode('paragraph')
  const isSame = value === editor.value?.getHTML()
  if (!isSame) {
    editor.value?.commands.setContent(value as string)
  }
  console.log({ editorValue: editor.value?.getHTML(), value: value as string })
})

const editor = useEditor({
  content: modelValue.value as string,
  onUpdate: ({ editor }) => {
    emit('update:modelValue', editor.getHTML())
  },
  extensions: [StarterKit]
})
</script>

<template>
  <div v-if="editor" class="editor">
    <Toolbar :editor="editor" />
    <editor-content :editor="editor" class="editor-content" />
  </div>
</template>

<style>
.editor {
  display: flex;
  flex-wrap: wrap;
  border-radius: 5px;
  overflow: hidden;
}

.editor-content {
  width: 100%;
  padding: 2rem;
  background: #fff;
  font-size: inherit;
}

.editor-content div {
  outline: 0;
}

/* ul,
ol {
  padding: 0 1rem;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  line-height: 1.1;
}

strong {
  font-weight: 700;
}

code {
  background-color: rgba(#616161, 0.1);
  color: #616161;
  font-family: monospace;
}

pre {
  background: #0d0d0d;
  color: #fff;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;

  code {
    color: inherit;
    padding: 0;
    background: none;
    font-size: 0.8rem;
  }
}

img {
  max-width: 100%;
  height: auto;
}

blockquote {
  padding-left: 1rem;
  border-left: 2px solid rgba(#0d0d0d, 0.1);
}

hr {
  border: none;
  border-top: 2px solid rgba(#0d0d0d, 0.1);
  margin: 2rem 0;
} */
</style>
