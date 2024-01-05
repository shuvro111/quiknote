<script setup lang="ts">
interface SwitchProps {
  label: string
  labelPosition: 'left' | 'right'
  disabled?: boolean
}
const modelValue = defineModel<boolean>()
const { label, labelPosition } = defineProps<SwitchProps>()
</script>

<template>
  <!-- Switch Component -->
  <div class="switch-container">
    <label
      class="switch"
      :style="{ flexDirection: labelPosition === 'left' ? 'row' : 'row-reverse' }"
      :class="{ disabled: disabled }"
    >
      <input type="checkbox" v-model="modelValue" :disabled="disabled" />
      <span class="slider"></span>
      <span class="label">{{ label }}</span>
    </label>
  </div>
</template>

<style scoped>
.switch-container {
  position: relative;
  display: flex;
  align-items: center;
}

.switch {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  margin-top: 0.2rem;
}

.switch .label {
  font-weight: 600;
  color: #111111;
}

.switch.disabled,
.switch.disabled .slider {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.switch .slider {
  position: relative;
  display: block;
  cursor: pointer;
  height: 1.5rem;
  width: 3rem;
  border-radius: 1rem;
  background-color: #ccc;
  transition: 0.4s;
}

.switch .slider:before {
  position: absolute;
  content: '';
  height: 1rem;
  width: 1rem;
  left: 0.25rem;
  bottom: 0.25rem;
  border-radius: 50%;
  background-color: white;
  transition: 0.4s;
}

.switch input:checked + .slider {
  background-color: #111111;
}

.switch input:checked + .slider:before {
  transform: translateX(1.5rem);
}
</style>
