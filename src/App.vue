<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
import Header from '@/components/Header.vue'
import { HiSolidPlusCircle, BsEyeFill } from '@kalimahapps/vue-icons'
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
      <div class="buttons-group">
        <RouterLink class="button button-secondary" to="/notes">
          <span>Browse Notes</span>
          <BsEyeFill class="secondary-btn-icon" />
        </RouterLink>
        <RouterLink class="button" to="/add-note">
          <HiSolidPlusCircle class="primary-btn-icon" />
          <span>Add Note</span>
        </RouterLink>
      </div>
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
  color: var(--foreground);
}

.buttons-group {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.button-secondary {
  background: none;
  color: var(--foreground);
}

.secondary-btn-icon {
  font-size: 1.4rem;
}
.primary-btn-icon {
  font-size: 1.6rem;
}
</style>
