<script setup lang="ts">
import { useNotes } from '@/composables/useNotes'
import NoteCard from '@/components/NoteCard.vue'
import GoBackButton from '@/components/GoBackButton.vue'
import { onMounted, ref, computed } from 'vue'
import type { Note } from '@/types/notes'
import Switch from '@/components/Switch.vue'

const { getAllNotes } = useNotes()

const onlyFavorites = ref(false)

const filterNotes = (data: Note[]) => {
  if (onlyFavorites.value) {
    return data.filter((item) => item.isFavorite)
  }
  return data
}

const notes = ref<Note[]>([])
const filteredNotes = computed(() => filterNotes(notes.value))

onMounted(async () => {
  const data = await getAllNotes()
  if (data) {
    notes.value = data
  }
})

const setCardColor = (index: number) => {
  const colors = ['#ffd07d', '#fea67e', '#e7f19a', '#bd9dfd', '#38e1ff', '#f79df7']
  index === colors.length ? (index = 0) : index
  return colors[index]
}

const onDelete = (id: string) => {
  const filteredNotes = notes.value.filter((item) => item.id !== id)
  notes.value = filteredNotes
  return notes.value
}
</script>

<template>
  <div class="container">
    <div class="top">
      <h2>Browse Your Notes</h2>
      <div class="right">
        <GoBackButton path="/" label="Back To Homepage" />
        <Switch label="Favorites Only" label-position="right" v-model="onlyFavorites" />
      </div>
    </div>

    {{ onlyFavorites }}

    <div class="all-notes" v-if="filterNotes.length !== 0">
      <NoteCard
        v-for="(note, index) in filteredNotes"
        :key="note.id"
        :modelValue="note"
        :on-delete="onDelete"
        :card-color="setCardColor(index)"
      />
    </div>
  </div>
</template>

<style scoped>
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
}
.top .right {
  display: flex;
  align-items: center;
  gap: 3rem;
}

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
