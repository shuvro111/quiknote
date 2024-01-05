<template>
  <Transition name="fade-in-down" appear>
    <slot>Content</slot>
  </Transition>
</template>

<style scoped>
.fade-in-down-leave-to,
.fade-in-down-enter-from {
  transform: translateY(-200px);
  opacity: 0;
  transition-delay: 3s;
}
.fade-in-down-leave-from,
.fade-in-down-enter-to {
  transform: translateY(0px);
  opacity: 1;
}
.fade-in-down-enter-active,
.fade-in-down-leave-active,
.fade-in-down-appear-active {
  position: relative;
  transition: transform 2000ms ease-in-out;
}
</style>
