<script setup lang="ts">
import Footer from './Footer.vue'
import { BsGithub } from '@kalimahapps/vue-icons'
</script>

<template>
  <div class="container">
    <div class="badge">
      <span class="badge-text">Capture Ideas in a Flash!</span>
    </div>
    <div class="content">
      <h1 class="title">Elevate your productivity with</h1>
      <h1 class="highlighted-title">QuikNote</h1>
      <p class="description">
        Collaborate, manage projects, and reach new productivity peaks. From high rises to the home
        office, the way your team works is unique - accomplish it all with Taskify.
      </p>
      <div class="buttons-group">
        <RouterLink to="/notes" class="button">Start Using For Free!</RouterLink>
        <a href="https://github.com/shuvro111/quiknote" class="button secondary"
          >View On Github <BsGithub
        /></a>
      </div>
    </div>
  </div>

  <Footer />
</template>

<style scoped>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 32px;
  margin-top: 5rem;
}
.badge {
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: 2px solid var(--foreground);

  color: var(--foreground);
  border-radius: 50px;
  padding: 5px 20px;
  gap: 8px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
}
.badge-text {
  font-size: 0.9rem;
  font-weight: 700;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}
.title {
  font-size: 3.4rem;
  text-align: center;
}
.highlighted-title {
  position: relative;
  font-size: 40px;
  color: white;
  text-align: center;
  background: linear-gradient(to bottom right, #5500ff, #e92d9c);
  border-radius: 100px;
  padding: 1rem 2rem;
}

.highlighted-title::before,
.highlighted-title::after {
  content: '';
  position: absolute;
  background: linear-gradient(to bottom right, #5500ff, #e92d9c);
  border-radius: 50%;
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.2);
}

.highlighted-title::before {
  width: 30px;
  height: 30px;
  top: -1.3rem;
  right: -1.3rem;
}

.highlighted-title::after {
  width: 20px;
  height: 20px;
  bottom: -0.7rem;
  left: -0.7rem;
}

.description {
  color: #333;
  text-align: center;
  width: 100%;
  max-width: 600px;
}

.buttons-group {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.button.secondary {
  background-color: transparent;
  color: var(--foreground);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
</style>
