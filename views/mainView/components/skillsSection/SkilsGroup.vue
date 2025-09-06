<template>
  <div
    class="flex max-w-[358px] flex-col gap-[16px] lg:w-full lg:max-w-[1216px] lg:gap-[24px]"
  >
    <div class="flex items-center gap-[12px] lg:gap-[16px]">
      <div
        class="flex h-[40px] w-[40px] items-center justify-center rounded-md lg:h-[48px] lg:w-[48px]"
        :class="bgColorMap[color]"
      >
        <BaseIcon :name="icon" color="primary-white" class="lg:scale-[120%]" />
      </div>
      <h3 class="d-header-sm text-primary-black lg:d-header-md">
        {{ header }}
      </h3>
    </div>
    <div
      class="flex flex-wrap justify-center gap-[12px] lg:gap-[16px] xl:flex-nowrap"
    >
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
import {
  bgColorMap,
  type Colors,
  type IconsName,
} from '@/components/components.types';
import BaseIcon from '@/components/icons/BaseIcon.vue';

defineProps({
  color: {
    type: String as PropType<Colors>,
    required: true,
  },
  header: {
    type: String,
    required: true,
  },
  icon: {
    type: String as PropType<IconsName>,
    required: true,
  },
});
</script>
