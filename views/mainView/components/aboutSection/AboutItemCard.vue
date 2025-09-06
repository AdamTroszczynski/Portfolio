<template>
  <div
    class="bg-primary-white shadow-base-lg relative flex w-full max-w-[358px] flex-col gap-[12px] overflow-hidden rounded-xl p-[22px] before:absolute before:top-[0px] before:left-[0px] before:h-[4px] before:w-full lg:max-w-[223px] lg:gap-[16px] lg:p-[26px]"
    :class="setBgColor"
  >
    <div
      class="flex h-[48px] w-[48px] items-center justify-center rounded-xl bg-gradient-to-r lg:h-[56px] lg:w-[56px]"
      :class="setIconBgColor"
    >
      <BaseIcon :name="icon" :color="setIconColor" class="lg:scale-[100%]" />
    </div>
    <div class="flex flex-col gap-[5px] lg:gap-[12px]">
      <h3 class="d-header-xs text-primary-black">{{ header }}</h3>
      <p class="text-secondary-dark d-text-sm lg:d-text-md"><slot /></p>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseIcon from '@/components/icons/BaseIcon.vue';
import type { Colors, IconsName } from '~/components/components.types';
const props = defineProps({
  header: {
    type: String,
    required: true,
  },
  icon: {
    type: String as PropType<IconsName>,
    required: true,
  },
  isBlue: {
    type: Boolean,
    default: false,
  },
  isGreen: {
    type: Boolean,
    default: false,
  },
  isPurple: {
    type: Boolean,
    default: false,
  },
});

const setIconBgColor = computed<string>(() => {
  return [
    props.isBlue && 'from-primary-light-blue to-[#BFDBFE]',
    props.isGreen && 'from-primary-light-green to-[#BBF7D0]',
    props.isPurple && 'from-primary-light-purple to-[#E9D5FF]',
  ]
    .filter(Boolean)
    .join(' ');
});

const setIconColor = computed<Colors>(() => {
  return props.isBlue
    ? 'primary-blue'
    : props.isGreen
      ? 'primary-green'
      : 'primary-purple';
});

const setBgColor = computed<string>(() => {
  return [
    props.isBlue && 'before:bg-primary-blue',
    props.isGreen && 'before:bg-primary-green',
    props.isPurple && 'before:bg-primary-purple',
  ]
    .filter(Boolean)
    .join(' ');
});
</script>
