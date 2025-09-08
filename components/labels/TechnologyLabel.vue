<template>
  <div
    class="d-medium-sm lg:d-medium-md flex items-center justify-center rounded-sm px-[8px] py-[4px] lg:px-[12px] lg:py-[6px]"
    :class="setLabelClasses"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  isBlue: {
    type: Boolean,
    default: false,
  },
  isGreen: {
    type: Boolean,
    default: false,
  },
  isRed: {
    type: Boolean,
    default: false,
  },
  isPurple: {
    type: Boolean,
    default: false,
  },
  isYellow: {
    type: Boolean,
    default: false,
  },
  isOrange: {
    type: Boolean,
    default: false,
  },
  isBlack: {
    type: Boolean,
    default: false,
  },
});

const setLabelClasses = computed<string>(() => {
  return [
    props.isBlue && 'text-primary-dark-blue bg-primary-light-blue',
    props.isGreen && 'text-primary-dark-green bg-primary-light-green',
    props.isRed && 'text-primary-dark-red bg-primary-light-red',
    props.isPurple && 'text-primary-dark-purple bg-primary-light-purple',
    props.isYellow && 'text-primary-dark-yellow bg-primary-light-yellow',
    props.isOrange && 'text-primary-dark-orange bg-primary-light-orange',
    props.isBlack && 'text-primary-black bg-primary-dark/10',
  ]
    .filter(Boolean)
    .join(' ');
});
</script>
