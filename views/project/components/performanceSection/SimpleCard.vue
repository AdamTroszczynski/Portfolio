<template>
  <div
    class="bg-primary-white border-secondary-grey-stroke shadow-base-lg gsapFadeIn flex w-full flex-col gap-[16px] rounded-lg border p-[25px] lg:max-w-[592px] lg:gap-[24px] lg:p-[33px]"
  >
    <div class="flex items-center gap-[8px] lg:gap-[12px]">
      <BaseIcon :name="icon" color="primary-blue" class="lg:scale-[130%]" />
      <h3 class="d-header-xs text-primary-black lg:d-header-sm">
        {{ header }}
      </h3>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import BaseIcon from '@/components/icons/BaseIcon.vue';
import type { IconsName } from '~/components/components.types';
defineProps({
  icon: {
    type: String as PropType<IconsName>,
    required: true,
  },
  header: {
    type: String,
    required: true,
  },
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
