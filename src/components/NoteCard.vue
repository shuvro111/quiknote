<script setup lang="ts">
import type { Note } from '@/types/notes'
import { BsStarFill } from '@kalimahapps/vue-icons'
import { useNotes } from '@/composables/useNotes'
import ActionButtons from './ActionButtons.vue'

const { onDelete } = defineProps<{
  // eslint-disable-next-line no-unused-vars
  onDelete: (id: string) => Note[]
  cardColor: string
}>()

const note = defineModel<Note>()

const { updateNote, deleteNote } = useNotes()

const toggleFavorite = (id: string) => {
  if (note.value) {
    updateNote(
      {
        ...note.value,
        isFavorite: !note.value.isFavorite
      },
      id
    )

    note.value.isFavorite = !note.value.isFavorite
  }
}

const removeNote = (id: string) => {
  if (window.confirm('Are you sure you want to delete this note?')) {
    deleteNote(id)
    //destroy the note
    onDelete(id)
  }
}
</script>

<template>
  <div class="card" :style="{ backgroundColor: cardColor }" v-if="note">
    <div class="top">
      <h3>{{ note.title }}</h3>
      <button
        class="action-button"
        :class="{ favorite: note.isFavorite }"
        @click="toggleFavorite(note.id)"
        :title="note.isFavorite ? 'Remove From Favorites' : 'Add To Favorites'"
      >
        <BsStarFill />
      </button>
    </div>
    <div class="bottom">
      <p>{{ note.createdAt }}</p>
      <ActionButtons :note="note" :removeNote="removeNote" :buttons="['view', 'edit', 'delete']" />
    </div>
  </div>
</template>

<style scoped>
.card {
  position: relative;
  width: 100%;
  min-height: 200px;
  /* background: #fea67e; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0px 0px 30px 0px #c7c7c7;
}

.top,
.bottom {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
}

.bottom {
  align-items: center;
}
</style>
