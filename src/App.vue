<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

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
        <RouterLink class="button" to="/create-note">
          <HiSolidPlusCircle class="primary-btn-icon" />
          <span>Create Note</span>
        </RouterLink>
      </div>
    </template>
  </Header>
  <RouterView />
  <Footer />
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

@media (max-width: 640px) {
  .logo {
    gap: 0.2rem;
  }
  .logo img {
    width: 35px;
    height: 35px;
  }
  .brand-name {
    font-size: 1.5rem;
  }
  .buttons-group {
    gap: 0.5rem;
  }

  .button,
  .button-secondary {
    font-size: 0.8rem;
    padding: 0.8rem;
  }
  .primary-btn-icon,
  .secondary-btn-icon {
    display: none;
  }
}
</style>
