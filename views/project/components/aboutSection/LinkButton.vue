<template>
  <button
    class="bg-primary-white/20 hover:bg-primary-white/30 flex w-full cursor-pointer items-center gap-[12px] rounded-lg p-[16px] transition-all duration-300 hover:scale-[105%]"
    :class="
      isDisabled
        ? 'hover:!bg-primary-white/20 !cursor-not-allowed opacity-60 hover:scale-none'
        : ''
    "
  >
    <div
      class="bg-primary-white/20 flex h-[40px] w-[40px] items-center justify-center rounded-md"
    >
      <BaseIcon :name="icon" color="primary-white" />
    </div>
    <div class="flex flex-col gap-[3px]">
      <h4 class="text-primary-white d-semibold-md">{{ header }}</h4>
      <p class="text-primary-light-blue d-text-sm"><slot /></p>
    </div>
  </button>
</template>

<script setup lang="ts">
import type { IconsName } from '@/components/components.types';
import BaseIcon from '@/components/icons/BaseIcon.vue';

defineProps({
  icon: {
    type: String as PropType<IconsName>,
    required: true,
  },
  header: {
    type: String,
    required: true,
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
});
</script>
