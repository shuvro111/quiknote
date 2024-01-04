<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { Note } from '@/types/notes'
import { BxSolidPencil, BsStarFill, BsTrashFill, BsEyeFill } from '@kalimahapps/vue-icons'
import { useNotes } from '@/composables/useNotes'

const { filterNotes } = defineProps<{
  // eslint-disable-next-line no-unused-vars
  filterNotes: (id: string) => Note[]
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
    filterNotes(id)
  }
}
</script>

<template>
  <div class="card" v-if="note">
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
      <div class="action-buttons">
        <RouterLink class="action-button" :to="`notes/${note.id}`" title="View">
          <BsEyeFill />
        </RouterLink>
        <RouterLink class="action-button" :to="`notes/edit/${note.id}`" title="Edit">
          <BxSolidPencil />
        </RouterLink>
        <button class="action-button" @click="removeNote(note.id)" title="delete">
          <BsTrashFill />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  position: relative;
  width: 100%;
  min-height: 200px;
  background: #fea67e;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0px 0px 30px 0px #a4ccb9;
}

.action-button {
  cursor: pointer;
  background-color: #000000;
  color: #ffffff;
  width: 2rem;
  height: 2rem;
  font-size: 1.8rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
}

.favorite {
  background-color: #000000;
  color: #fed300;
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

.action-buttons {
  display: flex;
  gap: 0.5rem;
}
</style>
