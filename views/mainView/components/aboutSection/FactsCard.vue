<template>
  <div
    class="bg-primary-white/10 before:bg-primary-white/10 flex items-center gap-[12px] rounded-lg p-[8px] lg:p-[12px]"
  >
    <div
      class="bg-primary-white/20 flex h-[24px] w-[24px] items-center justify-center rounded-[8px] lg:h-[32px] lg:w-[32px]"
    >
      <BaseIcon :name="icon" color="primary-white" class="lg:scale-[130%]" />
    </div>
    <h4 class="text-primary-white d-medium-md">
      <slot />
    </h4>
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
});
</script>
