<template>
  <div
    class="bg-primary-white shadow-base-lg flex w-full max-w-[517px] cursor-pointer flex-col overflow-hidden rounded-lg xl:max-w-[384px]"
  >
    <NuxtImg :src="imgSrc" :alt="header" class="aspect-[16/9] w-full" />
    <div class="flex flex-col gap-[4px] p-[16px] xl:gap-[8px] xl:p-[24px]">
      <h3 class="text-primary-black d-bold-xs">{{ header }}</h3>
      <p class="text-secondary-dark d-text-sm h-[42px]"><slot /></p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  imgSrc: {
    type: String,
    required: true,
  },
  header: {
    type: String,
    required: true,
  },
});
</script>
