<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { Note } from '@/types/notes'
import { BxSolidPencil, BsStarFill, BsTrashFill, BsEyeFill } from '@kalimahapps/vue-icons'
import { useNotes } from '@/composables/useNotes'

const { note } = defineProps<{
  note: Note
}>()

const { updateNote } = useNotes()

const toggleFavorite = () => {
  updateNote(
    {
      ...note,
      isFavorite: !note.isFavorite
    },
    note.id
  )
}
</script>

<template>
  <div class="card">
    <div class="top">
      <h3>{{ note.title }}</h3>
      <button
        class="action-button"
        :class="{ favorite: note.isFavorite }"
        @click="toggleFavorite"
        :title="note.isFavorite ? 'Remove From Favorites' : 'Add To Favorites'"
      >
        <BsStarFill />
      </button>
    </div>
    <div class="bottom">
      <p>{{ note.createdAt }}</p>
      <div class="action-buttons">
        <RouterLink class="action-button" :to="`notes/edit/${note.id}`" title="View">
          <BsEyeFill />
        </RouterLink>
        <RouterLink class="action-button" :to="`notes/edit/${note.id}`" title="Edit">
          <BxSolidPencil />
        </RouterLink>
        <button class="action-button" @click="toggleFavorite" title="delete">
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
