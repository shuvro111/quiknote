<script setup lang="ts">
import ToolItem from './ToolItem.vue'
import { type ToolItemProps } from './ToolItem.vue'

import {
  BsTypeBold,
  BsTypeItalic,
  BsTypeStrikethrough,
  BsCode,
  BxParagraph,
  BsTypeH1,
  BsTypeH2,
  BsTypeH3,
  BsListUl,
  BsListOl,
  BsCodeSquare,
  BxSolidQuoteAltLeft,
  BsPlus,
  BsArrowReturnLeft,
  BsArrow90degLeft,
  BsArrow90degRight
} from '@kalimahapps/vue-icons'

const { editor } = defineProps<ToolbarProps>()

const menutItems: ToolItemProps[] = [
  {
    icon: BsTypeBold,
    title: 'Bold',
    command: () => editor.chain().focus().toggleBold().run(),
    disabled: !editor.can().chain().focus().toggleBold().run(),
    class: !editor.isActive('bold') ? 'bold' : ''
  },

  {
    icon: BsTypeItalic,
    title: 'Italic',
    command: () => editor.chain().focus().toggleItalic().run(),
    disabled: !editor.can().chain().focus().toggleItalic().run(),
    class: !editor.isActive('italic') ? 'italic' : ''
  },
  {
    icon: BsTypeStrikethrough,
    title: 'Strike',
    command: () => editor.chain().focus().toggleStrike().run(),
    disabled: !editor.can().chain().focus().toggleStrike().run()
  },
  {
    icon: BsCode,
    title: 'Code',
    command: () => editor.chain().focus().toggleCode().run(),
    disabled: !editor.can().chain().focus().toggleCode().run()
  },
  {
    icon: BxParagraph,
    title: 'Paragraph',
    command: () => editor.chain().focus().setParagraph().run()
  },
  {
    icon: BsTypeH1,
    title: 'Heading 1',
    command: () => editor.chain().focus().toggleHeading({ level: 1 }).run()
  },
  {
    icon: BsTypeH2,
    title: 'Heading 2',
    command: () => editor.chain().focus().toggleHeading({ level: 2 }).run()
  },
  {
    icon: BsTypeH3,
    title: 'Heading 3',
    command: () => editor.chain().focus().toggleHeading({ level: 3 }).run()
  },
  {
    icon: BsListUl,
    title: 'Bullet List',
    command: () => editor.chain().focus().toggleBulletList().run()
  },
  {
    icon: BsListOl,
    title: 'Ordered List',
    command: () => editor.chain().focus().toggleOrderedList().run()
  },
  {
    icon: BsCodeSquare,
    title: 'Code Block',
    command: () => editor.chain().focus().toggleCodeBlock().run()
  },
  {
    icon: BxSolidQuoteAltLeft,
    title: 'Blockquote',
    command: () => editor.chain().focus().toggleBlockquote().run()
  },
  {
    icon: BsPlus,
    title: 'Horizontal Rule',
    command: () => editor.chain().focus().setHorizontalRule().run()
  },
  {
    icon: BsArrowReturnLeft,
    title: 'Line Break',
    command: () => editor.chain().focus().setHardBreak().run()
  },
  {
    icon: BsArrow90degLeft,
    title: 'Undo',
    command: () => editor.chain().focus().undo().run(),
    disabled: !editor.can().chain().focus().undo().run()
  },
  {
    icon: BsArrow90degRight,
    title: 'Redo',
    command: () => editor.chain().focus().redo().run(),
    disabled: !editor.can().chain().focus().redo().run()
  }
]

interface ToolbarProps {
  editor: any
}
</script>

<template>
  <div class="toolbar">
    <ToolItem
      v-for="item in menutItems"
      :key="item.title"
      :icon="item.icon"
      :title="item.title"
      :command="item.command"
      :disabled="item.disabled"
      :class="item.class"
    />
  </div>
</template>

<style scoped>
.toolbar {
  background-color: var(--foreground);
  padding: 1rem 2rem;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
}

@media (max-width: 1024px) {
  .toolbar {
    gap: 1rem;
  }
}

@media (max-width: 768px) {
  .toolbar {
    gap: 0.8rem;
  }
}
@media (max-width: 640px) {
  .toolbar {
    gap: 1rem;
  }
}
</style>
