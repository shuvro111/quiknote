<script setup lang="ts">
import { ref } from 'vue'
import { useNotes } from '@/composables/useNotes'
import { type Note } from '@/types/notes'

import Editor from '@/components/Editor/Editor.vue'

import { BsArrowRight } from '@kalimahapps/vue-icons'

const title = ref('')
const content = ref('')

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
    content: content.value
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
        <input type="text" v-model="title" placeholder="Enter a title" class="title-input" />
        <button type="submit" class="button submit">Submit <BsArrowRight /></button>
      </div>
      <Editor v-model="content" />
    </form>
  </div>
</template>

<style scoped>
.add-note {
  padding-top: 2rem;
}

.add-note .note-form .top {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 2rem;
}

.title-input {
  flex: 1;
  background: none;
  border: none;
  border-bottom: 2px solid var(--foreground);
  outline: 0;
  font-size: 1.6rem;
  transition: border-color 0.2s ease-in-out;
}

.title-input:focus {
  border-color: var(--accent);
}

.submit {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
}
</style>
