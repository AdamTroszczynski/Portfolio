<template>
  <div class="flex items-center justify-between">
    <p class="text-secondary-dark d-text-md">{{ header }}</p>
    <span
      class="d-bold-xs"
      :class="textBlue ? 'text-primary-blue' : 'text-primary-green'"
      ><slot
    /></span>
  </div>
</template>

<script setup lang="ts">
defineProps({
  header: {
    type: String,
    required: true,
  },
  textBlue: {
    type: Boolean,
    default: false,
  },
});
</script>
