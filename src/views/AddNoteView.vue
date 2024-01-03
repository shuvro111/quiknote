<script setup lang="ts">
import { ref } from 'vue'
import { useNotes } from '@/composables/useNotes'
import { type Note } from '@/types/notes'

import Editor from '@/components/Editor/Editor.vue'

import { BsArrowRight, BxSolidStar } from '@kalimahapps/vue-icons'

const title = ref('')
const content = ref('')
const isFavorite = ref(false)

const { addNote } = useNotes()

//write a function to generate uuid

const generateUuid = () => {
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0
    const v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })

  return uuid
}

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
  title.value = ''
  content.value = ''
}

const onSubmit = () => {
  const data: Note = {
    id: generateUuid(),
    title: title.value,
    content: content.value,
    isFavorite: isFavorite.value,
    createdAt: new Date().toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    })
  }

  if (validateData(data)) {
    //handle submit
    resetForm()
    addNote(data)
  }
}
</script>

<template>
  <div class="container add-note">
    <form @submit.prevent="onSubmit" class="note-form">
      <div class="top">
        <div
          class="add-to-favorite"
          :class="{ favorite: isFavorite }"
          @click="isFavorite = !isFavorite"
        >
          <span class="favorite-text">{{
            isFavorite ? 'Remove From Favorites' : 'Add To Favorites'
          }}</span>
          <BxSolidStar class="favorite-icon" />
        </div>

        <button type="submit" class="button submit">Submit <BsArrowRight /></button>
      </div>
      <input type="text" v-model="title" placeholder="Enter a title" class="title-input" />

      <Editor v-model="content" />
    </form>
  </div>
</template>

<style scoped>
.add-note .note-form .top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
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
</style>
