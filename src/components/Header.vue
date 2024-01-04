<script lang="ts" setup>
import FadeInDown from './transitions/FadeInDown.vue'
</script>

<template>
  <header class="container header">
    <FadeInDown><slot name="title" /></FadeInDown>
    <FadeInDown><slot name="button" /></FadeInDown>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.fade-in-down-enter-from {
  position: relative;
  transform: translateY(-200px);
  opacity: 0;
}
.fade-in-down-enter-to {
  transform: translateY(0px);
  opacity: 1;
}
.fade-in-down-enter-active {
  transition: transform 0.5s ease-in-out;
}
.fade-in-down-leave-from {
  position: relative;
  transform: translateY(0px);
  opacity: 1;
}
.fade-in-down-leave-to {
  transform: translateY(-200px);
  opacity: 0;
}
.fade-in-down-leave-active {
  transition: transform 0.5s ease-in-out;
}
</style>
