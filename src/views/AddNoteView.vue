<script setup lang="ts">
import { ref } from 'vue'
import Editor from '@/components/Editor/Editor.vue'

import { BsArrowRight } from '@kalimahapps/vue-icons'

const title = ref('')
const content = ref('')

interface formData {
  title: string
  content: string
}

const validateData = (data: formData) => {
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

const onSubmit = () => {
  const data: formData = {
    title: title.value,
    content: content.value
  }

  if (validateData(data)) {
    //handle submit
    //reset form
    title.value = ''
    content.value = ''
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
      {{ content }}
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
