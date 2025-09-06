<template>
  <div class="flex gap-[12px]">
    <div
      class="bg-primary-blue text-primary-white d-bold-2xs flex h-[24px] min-w-[24px] items-center justify-center rounded-full"
    >
      {{ number }}
    </div>
    <div class="flex flex-col gap-[4px]">
      <h4 class="text-primary-black d-semibold-sm">{{ header }}</h4>
      <p class="text-secondary-dark d-text-sm">
        <slot />
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  number: {
    type: Number,
    required: true,
  },
  header: {
    type: String,
    required: true,
  },
});
</script>
