<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useNotes } from '@/composables/useNotes'
import { type Note } from '@/types/notes'

import ActionButtons from '@/components/ActionButtons.vue'
import GoBackButton from '@/components/GoBackButton.vue'

const note = ref<Note>({
  id: '',
  title: '',
  content: '',
  isFavorite: false,
  createdAt: ''
})

const route = useRoute()
const router = useRouter()
const { getNote, updateNote, deleteNote } = useNotes()

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

const removeNote = (id: string) => {
  if (window.confirm('Are you sure you want to delete this note?')) {
    deleteNote(id)
    router.push('/notes')
  }
}
</script>

<template>
  <div class="container main">
    <div class="top">
      <h2 type="text" class="title">
        {{ note.title }}
      </h2>
      <div class="buttons-group">
        <GoBackButton path="/notes" label="Back to Notes" />
        <ActionButtons
          :note="note"
          :remove-note="removeNote"
          :buttons="['favorite', 'edit', 'delete']"
          :toggle-favorite="toggleFavorite"
        />
      </div>
    </div>

    <div class="content" v-html="note.content"></div>
  </div>
</template>

<style scoped>
.container {
  margin-top: 2rem;
}
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

.buttons-group {
  display: flex;
  align-items: center;
  gap: 1rem;
}

@media (max-width: 768px) {
  .top {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
  .buttons-group {
    margin-top: 1rem;
  }
}
</style>
