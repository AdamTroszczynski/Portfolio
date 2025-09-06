<template>
  <div
    class="flex items-center justify-center gap-[8px] rounded-full border px-[12px] py-[10px] xl:px-[18px]"
    :class="
      isGreen
        ? 'bg-primary-white border-secondary-grey-stroke text-primary-dark'
        : 'text-primary-blue border-[#BFDBFE] bg-[#EFF6FF]'
    "
  >
    <span
      class="h-[8px] w-[8px] rounded-full"
      :class="isGreen ? 'bg-primary-green' : 'bg-primary-blue'"
    ></span>
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps({
  isGreen: {
    type: Boolean,
    default: false,
  },
  isBlue: {
    type: Boolean,
    default: false,
  },
});
</script>
