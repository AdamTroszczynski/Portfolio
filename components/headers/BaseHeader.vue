<template>
  <div class="flex flex-col items-center gap-[14px] lg:gap-[16px]">
    <slot name="label" />
    <h2 class="d-header-xl text-primary-black lg:d-header-2xl">
      {{ header }}
    </h2>
    <p
      class="text-secondary-dark d-text-md lg:d-text-lg max-w-[659px] text-center"
    >
      <slot />
    </p>
  </div>
</template>
<script setup lang="ts">
defineProps({
  header: {
    type: String,
    required: true,
  },
});
</script>
