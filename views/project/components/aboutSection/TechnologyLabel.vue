<template>
  <div
    class="d-medium-sm lg:d-medium-md flex items-center justify-center rounded-md border border-transparent p-[8px] transition-all duration-300 select-none hover:scale-[105%]"
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
    props.isBlue &&
      'text-primary-dark-blue bg-primary-light-blue hover:border-primary-dark-blue/50',
    props.isGreen &&
      'text-primary-dark-green bg-primary-light-green hover:border-primary-dark-green/50',
    props.isRed &&
      'text-primary-dark-red bg-primary-light-red hover:border-primary-dark-red/50',
    props.isPurple &&
      'text-primary-dark-purple bg-primary-light-purple hover:border-primary-dark-purple/50',
    props.isYellow &&
      'text-primary-dark-yellow bg-primary-light-yellow hover:border-primary-dark-yellow/50',
    props.isOrange &&
      'text-primary-dark-orange bg-primary-light-orange hover:border-primary-dark-orange/50',
    props.isBlack &&
      'text-primary-black bg-primary-dark/10 hover:border-primary-black/50',
  ]
    .filter(Boolean)
    .join(' ');
});
</script>
