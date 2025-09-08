<template>
  <div
    class="bg-primary-white flex items-center gap-[12px] rounded-md p-[12px] lg:w-full lg:max-w-[340px] xl:max-w-none 2xl:max-w-[340px]"
  >
    <BaseIcon :name="icon" color="primary-green" class="w-[20px]" />
    <h4 class="text-primary-black d-medium-md lg:d-medium-lg"><slot /></h4>
  </div>
</template>

<script setup lang="ts">
import type { IconsName } from '@/components/components.types';
import BaseIcon from '@/components/icons/BaseIcon.vue';

defineProps({
  icon: {
    type: String as PropType<IconsName>,
    required: true,
  },
});
</script>
