<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useNotes } from '@/composables/useNotes'
import { type Note } from '@/types/notes'

import Editor from '@/components/Editor/Editor.vue'
import GoBackButton from '@/components/GoBackButton.vue'

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

//validate form data
const validateData = (data: Note) => {
  if (data.title === '') {
    alert('Please enter a title')
    return false
  }

  if (data.content === '') {
    alert('Please enter a content')
    return false
  }

  return true
}

//reset form
const resetForm = () => {
  if (!note.value) return
  note.value.title = ''
  note.value.content = ''
}

const onSubmit = () => {
  const data: Note = {
    id: note.value.id as string,
    title: note.value.title,
    content: note.value.content,
    isFavorite: note.value.isFavorite,
    createdAt: new Date().toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    })
  }

  if (validateData(data)) {
    //handle submit
    resetForm()
    note.value && updateNote(data, note.value.id)
  }
}
</script>

<template>
  <div class="container add-note">
    <form @submit.prevent="onSubmit" class="note-form">
      <div class="top">
        <div
          class="add-to-favorite"
          :class="{ favorite: note.isFavorite }"
          @click="note.isFavorite = !note.isFavorite"
        >
          <span class="favorite-text">{{
            note.isFavorite ? 'Remove From Favorites' : 'Add To Favorites'
          }}</span>
          <BxSolidStar class="favorite-icon" />
        </div>

        <div class="buttons-group">
          <GoBackButton label="Go Back" />
          <button type="submit" class="button submit">Submit <BsArrowRight /></button>
        </div>
      </div>
      <input type="text" v-model="note.title" placeholder="Enter a title" class="title-input" />

      <Editor v-if="note.content !== ''" v-model="note.content" />
    </form>
  </div>
</template>

<style scoped>
.container {
  margin-top: 2rem;
}

.add-note .note-form .top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
}

.buttons-group {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.title-input {
  width: 100%;
  background: none;
  border: none;
  border-bottom: 2px solid #e3e3e3;
  padding-bottom: 0.5rem;
  margin-bottom: 2rem;
  outline: 0;
  font-size: 1.6rem;
  transition: border-color 0.2s ease-in-out;
}

.title-input:focus {
  border-color: var(--foreground);
}

.add-to-favorite {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 500;
}

.favorite-icon {
  font-size: 1.8rem;
}

.favorite .favorite-icon {
  color: #fed300 !important;
}

.submit {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
}

@media (max-width: 640px) {
  .title-input {
    font-size: 1.4rem;
  }

  .add-to-favorite {
    font-size: 1.1rem;
    gap: 0.3rem;
  }

  .favorite-icon {
    font-size: 1.3rem;
  }
}
</style>
