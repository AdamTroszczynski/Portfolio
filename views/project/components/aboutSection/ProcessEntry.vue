<template>
  <div class="flex gap-[12px] lg:gap-[16px]">
    <div
      class="bg-primary-blue text-primary-white d-bold-2xs lg:d-bold-xxs flex h-[24px] min-w-[24px] items-center justify-center rounded-full lg:h-[32px] lg:min-w-[32px]"
    >
      {{ number }}
    </div>
    <div class="flex flex-col gap-[4px]">
      <h4 class="text-primary-black d-semibold-sm lg:d-semibold-md">
        {{ header }}
      </h4>
      <p class="text-secondary-dark d-text-sm lg:d-text-md">
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
