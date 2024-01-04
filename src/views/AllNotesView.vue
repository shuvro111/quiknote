<script setup lang="ts">
import { useNotes } from '@/composables/useNotes'
import NoteCard from '@/components/NoteCard.vue'
import { onMounted, ref } from 'vue'
import type { Note } from '@/types/notes'
const notes = ref<Note[]>([])
const { getAllNotes } = useNotes()

onMounted(() => {
  const data = getAllNotes()
  if (data) {
    notes.value = data
  }
})
</script>

<template>
  <div class="container">
    <h2>Browse Your Notes</h2>

    <div class="all-notes" v-if="notes">
      <NoteCard v-for="note in notes" :key="note.id" :note="note" />
    </div>
  </div>
</template>

<style scoped>
.all-notes {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  height: 100%;
  margin-top: 2rem;
}

.container {
  margin-top: 2rem;
}
</style>
