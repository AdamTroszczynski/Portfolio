<template>
  <div class="flex items-center justify-between">
    <p class="text-secondary-dark d-text-md">{{ header }}</p>
    <span
      class="d-bold-xs"
      :class="textGreen ? 'text-primary-green' : 'text-primary-black'"
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
  textGreen: {
    type: Boolean,
    default: false,
  },
});
</script>
