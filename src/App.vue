<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
import Header from '@/components/Header.vue'
import { HiSolidPlusCircle } from '@kalimahapps/vue-icons'
</script>

<template>
  <Header>
    <template #title>
      <RouterLink class="logo" to="/">
        <img src="./assets/logo.svg" alt="logo" width="40px" height="40px" />
        <h1 class="brand-name">QuikNote</h1>
      </RouterLink>
    </template>

    <template #button>
      <RouterLink class="button" to="/add-note">
        <HiSolidPlusCircle class="btn-icon" />
        <span>Add Note</span>
      </RouterLink>
    </template>
  </Header>
  <RouterView />
</template>

<style scoped>
.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.brand-name {
  font-weight: 700;
  font-size: 2rem;
}

.button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-icon {
  font-size: 1.8rem;
}
</style>
