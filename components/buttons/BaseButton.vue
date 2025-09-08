<template>
  <button
    class="flex h-full max-h-[46px] cursor-pointer items-center justify-center gap-[8px] px-[16px] duration-200 active:scale-95"
    :class="[
      setButtonClasses,
      setTextColor,
      setBgColor,
      slotHasContent ? '' : 'w-min',
      isDisabled ? '!cursor-not-allowed opacity-60 active:scale-none' : '',
    ]"
    :disabled="isDisabled"
  >
    <BaseIcon v-if="icon" :name="icon" :color="setIconColor" />
    <slot />
  </button>
</template>

<script setup lang="ts">
import { useSlots } from 'vue';

import {
  bgColorMap,
  type Colors,
  type IconsName,
} from '@/components/components.types';
import BaseIcon from '@/components/icons/BaseIcon.vue';

const slots = useSlots();

const props = defineProps({
  isTransparent: {
    type: Boolean,
    default: false,
  },
  isGrey: {
    type: Boolean,
    default: false,
  },
  bgColor: {
    type: String as PropType<Colors>,
    default: 'primary-blue',
  },
  icon: {
    type: String as PropType<IconsName>,
    default: undefined,
  },
  isSmall: {
    type: Boolean,
    default: false,
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
});

const setButtonClasses = computed<string>(() => {
  return [
    props.isTransparent && 'border-[2px] border-primary-grey-stroke',
    props.isSmall
      ? 'py-[10px] px-[16px] rounded-md d-medium-md'
      : 'py-[14px] w-full rounded-lg d-semibold-sm min-h-[46px]',
  ]
    .filter(Boolean)
    .join(' ');
});

const setIconColor = computed<Colors>(() => {
  return props.isTransparent || props.isGrey
    ? 'primary-black'
    : 'primary-white';
});

const setTextColor = computed<string>(() => {
  if (props.isGrey || props.isTransparent) return 'text-primary-black';
  return 'text-primary-white';
});

const setBgColor = computed<string>(() => {
  if (props.isGrey) return 'bg-primary-dark-white';
  if (props.isTransparent) return 'bg-transparent';
  return bgColorMap[props.bgColor];
});

const slotHasContent = computed<boolean>(() => {
  return !!(slots.default && slots.default().length);
});
</script>
