<template>
  <div
    class="shadow-base-lg gsapFadeIn flex w-full max-w-[160px] flex-col items-center gap-[12px] rounded-lg border border-transparent p-[17px] transition-all duration-300 hover:-translate-y-[10px] sm:max-w-[45%] lg:max-w-[280px] lg:gap-[24px] lg:p-[33px]"
    :class="setBgHover"
  >
    <div
      class="flex h-[48px] w-[48px] items-center justify-center rounded-lg bg-gradient-to-r lg:h-[64px] lg:w-[64px] lg:rounded-xl"
      :class="setIconBg"
    >
      <BaseIcon :name="icon" color="primary-white" class="lg:scale-[150%]" />
    </div>
    <div class="flex w-full flex-col items-center gap-[4px] lg:gap-[8px]">
      <h3 class="d-header-md text-primary-black lg:d-header-xl">
        {{ header }}
      </h3>
      <h4 class="d-semibold-sm text-primary-black lg:d-semibold-lg">
        {{ subHeader }}
      </h4>
      <p class="text-secondary-dark d-text-xs lg:d-text-sm"><slot /></p>
      <SlideLabel :value="value" :color="setSliderColor" />
    </div>
  </div>
</template>
<script setup lang="ts">
import type { Colors, IconsName } from '@/components/components.types';
import BaseIcon from '@/components/icons/BaseIcon.vue';
import SlideLabel from '@/components/labels/SlideLabel.vue';

const props = defineProps({
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
  isGreen: {
    type: Boolean,
    default: false,
  },
  isOrange: {
    type: Boolean,
    default: false,
  },
  isPurple: {
    type: Boolean,
    default: false,
  },
  isPink: {
    type: Boolean,
    default: false,
  },
  value: {
    type: Number,
    default: 0,
  },
});

const setIconBg = computed<string>(() => {
  return [
    props.isGreen && 'from-[#22C55E] to-[#0D9488]',
    props.isOrange && 'from-primary-orange to-[#DC2626]',
    props.isPurple && 'from-[#3B82F6] to-primary-purple',
    props.isPink && 'from-[#A855F7] to-primary-pink',
  ]
    .filter(Boolean)
    .join(' ');
});

const setSliderColor = computed<Colors>(() => {
  return props.isGreen
    ? 'primary-green'
    : props.isOrange
      ? 'primary-orange'
      : props.isPurple
        ? 'primary-blue'
        : 'primary-purple';
});

const setBgHover = computed<string>(() => {
  return [
    props.isGreen && 'hover:border-primary-green',
    props.isOrange && 'hover:border-primary-orange',
    props.isPurple && 'hover:border-primary-blue',
    props.isPink && 'hover:border-primary-purple',
  ]
    .filter(Boolean)
    .join(' ');
});
</script>
