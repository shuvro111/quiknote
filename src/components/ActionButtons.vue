<!-- eslint-disable no-unused-vars -->
<script setup lang="ts">
import { BxSolidPencil, BsTrashFill, BsEyeFill, BsStarFill } from '@kalimahapps/vue-icons'
import type { Note } from '@/types/notes'

defineProps<{
  note: Note
  toggleFavorite?: (id: string) => void
  removeNote?: (id: string) => void
  buttons: Array<'favorite' | 'view' | 'edit' | 'delete'>
}>()
</script>

<template>
  <div class="action-buttons">
    <button
      class="action-button"
      :class="{ favorite: note.isFavorite }"
      v-if="buttons.includes('favorite')"
      @click="toggleFavorite && toggleFavorite(note.id)"
      title="Favorite"
    >
      <BsStarFill />
    </button>
    <RouterLink
      class="action-button"
      v-if="buttons.includes('view')"
      :to="`/notes/${note.id}`"
      title="View"
    >
      <BsEyeFill />
    </RouterLink>
    <RouterLink
      class="action-button"
      v-if="buttons.includes('edit')"
      :to="`/notes/edit/${note.id}`"
      title="Edit"
    >
      <BxSolidPencil />
    </RouterLink>
    <button
      class="action-button"
      v-if="buttons.includes('delete')"
      @click="removeNote && removeNote(note.id)"
      title="delete"
    >
      <BsTrashFill />
    </button>
  </div>
</template>
