<template>
  <div
    class="flex w-full max-w-[795px] flex-col gap-[16px] rounded-xl border bg-gradient-to-r p-[25px]"
    :class="setBgClasses"
  >
    <div class="flex items-center gap-[12px]">
      <div
        class="flex h-[40px] w-[40px] items-center justify-center rounded-lg"
        :class="setBgColor"
      >
        <BaseIcon :name="icon" color="primary-white" />
      </div>
      <div class="flex flex-col gap-[8px]">
        <h3 class="text-primary-black d-header-sm">{{ header }}</h3>
        <span
          class="block h-[4px] w-[48px] rounded-full"
          :class="setBgColor"
        ></span>
      </div>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { IconsName } from '@/components/components.types';
import BaseIcon from '@/components/icons/BaseIcon.vue';

const props = defineProps({
  isRed: {
    type: Boolean,
    default: false,
  },
  isGreen: {
    type: Boolean,
    default: false,
  },
  isBlue: {
    type: Boolean,
    default: false,
  },
  isYellow: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String as PropType<IconsName>,
    required: true,
  },
  header: {
    type: String,
    required: true,
  },
});

const setBgClasses = computed<string>(() => {
  return [
    props.isRed && 'from-[#FEF2F2] to-[#FFF7ED] border-primary-light-red',
    props.isGreen && 'from-[#F0FDF4] to-[#F0FDFA] border-primary-light-green',
    props.isBlue && 'from-[#EFF6FF] to-[#FAF5FF] border-primary-light-blue',
    props.isYellow && 'from-[#FEFCE8] to-[#FFF7ED] border-primary-light-yellow',
  ]
    .filter(Boolean)
    .join(' ');
});

const setBgColor = computed<string>(() => {
  return [
    props.isRed && 'bg-[#EF4444]',
    props.isGreen && 'bg-primary-green',
    props.isBlue && 'bg-primary-blue',
    props.isYellow && 'bg-[#EAB308]',
  ]
    .filter(Boolean)
    .join(' ');
});
</script>
