<script setup lang="ts">
export interface ToolItemProps {
  icon: Function
  command(): void
  title: string
  disabled?: boolean
  class?: string
}

defineProps<ToolItemProps>()
</script>

<template>
  <button :title="title" @click="command" type="button">
    <icon></icon>
  </button>
</template>

<style scoped>
button {
  background: none;
  margin: 0;
  padding: 0;
  font-size: 1.2rem;
}
</style>
