<template>
  <div
    class="bg-secondary-dark-white flex w-[160px] items-center justify-center gap-[8px] rounded-md px-[24px] py-[12px] sm:w-[190px] sm:px-[48px] lg:w-fit lg:bg-transparent"
  >
    <BaseIcon :name="icon" :color="iconColor" />
    <h3 class="d-text-xs text-secondary-dark lg:d-text-sm"><slot /></h3>
  </div>
</template>

<script setup lang="ts">
import type { Colors, IconsName } from '@/components/components.types';
import BaseIcon from '@/components/icons/BaseIcon.vue';

defineProps({
  icon: {
    type: String as PropType<IconsName>,
    required: true,
  },
  iconColor: {
    type: String as PropType<Colors>,
    required: true,
  },
});
</script>
