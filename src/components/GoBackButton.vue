<script setup lang="ts">
import { useRouter } from 'vue-router'
import { BsArrowLeft } from '@kalimahapps/vue-icons'

const { path, label } = defineProps<{ path?: string; label: string }>()

const router = useRouter()
</script>

<template>
  <button type="button" class="go-back-button" @click="path ? router.push(path) : router.back()">
    <BsArrowLeft class="btn-icon" />
    <span class="btn-text">{{ label }}</span>
  </button>
</template>

<style scoped>
.go-back-button {
  background-color: transparent;
  color: var(--foreground);
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.btn-icon {
  font-size: 1.4rem;
  font-weight: 700;
}

@media (max-width: 768px) {
  .go-back-button .btn-text {
    font-size: 0.9rem;
  }

  .go-back-button .btn-icon {
    font-size: 1.2rem;
  }
}
@media (max-width: 640px) {
  .go-back-button {
    display: none;
  }
}
</style>
