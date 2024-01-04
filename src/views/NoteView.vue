<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useNotes } from '@/composables/useNotes'
import { type Note } from '@/types/notes'

import { BsArrowRight, BxSolidStar } from '@kalimahapps/vue-icons'

const note = ref<Note>({
  id: '',
  title: '',
  content: '',
  isFavorite: false,
  createdAt: ''
})

const route = useRoute()
const { getNote, updateNote } = useNotes()

onMounted(async () => {
  const id = route.params.id
  const data = await getNote(id as string)
  if (data) note.value = data
})

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
</script>

<template>
  <div class="container">
    <div class="top">
      <h2 type="text" class="title">
        {{ note.title }}
      </h2>
      <div
        class="add-to-favorite"
        :class="{ favorite: note.isFavorite }"
        @click="toggleFavorite(note.id)"
      >
        <span class="favorite-text">{{
          note.isFavorite ? 'Remove From Favorites' : 'Add To Favorites'
        }}</span>
        <BxSolidStar class="favorite-icon" />
      </div>
    </div>

    <div class="" v-html="note.content"></div>
  </div>
</template>

<style scoped>
.top {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  margin: 2rem 0;
  padding-bottom: 1rem;
  border-bottom: 2px solid #e3e3e3;
}

.title {
  font-size: 1.6rem;
}

.add-to-favorite {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 500;
}

.favorite-icon {
  font-size: 1.8rem;
}

.favorite .favorite-icon {
  color: #fed300 !important;
}
</style>
