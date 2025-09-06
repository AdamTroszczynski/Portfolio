<template>
  <div
    class="bg-secondary-dark-white border-secondary-grey-stroke flex min-w-[150px] flex-col items-center justify-center gap-[10px] rounded-lg border p-[13px] sm:min-w-[173px] lg:max-w-none lg:gap-[12px] lg:p-[17px] xl:w-full"
  >
    <div
      class="flex h-[24px] w-[24px] items-center justify-center rounded-md lg:h-[32px] lg:w-[32px]"
      :class="bgColorMap[color]"
    >
      <BaseIcon :name="icon" color="primary-white" class="lg:scale-[130%]" />
    </div>
    <div class="flex w-full flex-col gap-[4px]">
      <span class="text-primary-black d-semibold-sm text-center">
        {{ label }}
      </span>
      <SlideLabel :color="color" :value="sliderValue" />
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
import SlideLabel from '@/components/labels/SlideLabel.vue';

defineProps({
  icon: {
    type: String as PropType<IconsName>,
    required: true,
  },
  color: {
    type: String as PropType<Colors>,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  sliderValue: {
    type: Number,
    required: true,
  },
});
</script>
