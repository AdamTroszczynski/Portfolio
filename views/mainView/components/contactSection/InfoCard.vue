<template>
  <div
    class="bg-secondary-dark-white shadow-base-lg border-primary-dark-white flex max-w-[358px] flex-col items-center gap-[16px] rounded-xl border p-[33px] lg:w-[320px]"
  >
    <div
      class="mb-[8px] flex h-[64px] w-[64px] items-center justify-center rounded-xl"
      :class="isBlue ? 'bg-primary-blue' : 'bg-primary-green'"
    >
      <BaseIcon :name="icon" color="primary-white" />
    </div>
    <h3 class="text-primary-black d-header-sm">{{ header }}</h3>
    <p
      class="d-text-sm text-secondary-dark min-h-[40px] max-w-[255px] text-center"
    >
      <slot />
    </p>
    <span
      class="d-semibold-md"
      :class="isBlue ? 'text-primary-blue' : 'text-primary-green'"
    >
      {{ subHeader }}
    </span>
    <slot name="button" />
  </div>
</template>

<script setup lang="ts">
import type { IconsName } from '@/components/components.types';
import BaseIcon from '@/components/icons/BaseIcon.vue';

defineProps({
  isBlue: {
    type: Boolean,
    default: false,
  },
  isGreen: {
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
  subHeader: {
    type: String,
    required: true,
  },
});
</script>
