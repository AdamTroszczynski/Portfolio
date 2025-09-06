<template>
  <div
    class="d-medium-md lg:d-medium-lg flex items-center justify-center gap-[8px] rounded-full px-[12px] py-[8px] lg:px-[16px] lg:py-[10px]"
    :class="setLabelClasses"
  >
    <BaseIcon v-if="icon" :name="icon" :color="setIconColor" />
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { Colors, IconsName } from '@/components/components.types';
import BaseIcon from '@/components/icons/BaseIcon.vue';

const props = defineProps({
  icon: {
    type: String as PropType<IconsName>,
    default: undefined,
  },
  isBlue: {
    type: Boolean,
    default: false,
  },
  isGreen: {
    type: Boolean,
    default: false,
  },
  isPink: {
    type: Boolean,
    default: false,
  },
  isPurple: {
    type: Boolean,
    default: false,
  },
  isIndigo: {
    type: Boolean,
    default: false,
  },
});

const setLabelClasses = computed<string>(() => {
  return [
    props.isBlue && 'bg-primary-blue/10 text-primary-blue',
    props.isGreen && 'bg-primary-green/10 text-primary-green',
    props.isPurple && 'bg-primary-light-purple text-primary-purple',
    props.isIndigo && 'bg-primary-light-purple text-primary-indigo',
    props.isPink && 'text-primary-pink bg-primary-light-pink',
  ]
    .filter(Boolean)
    .join(' ');
});

const setIconColor = computed<Colors>(() => {
  const color =
    (props.isBlue && 'primary-blue') ||
    (props.isGreen && 'primary-green') ||
    (props.isPurple && 'primary-purple') ||
    (props.isIndigo && 'primary-indigo') ||
    (props.isPink && 'primary-pink');

  return color || 'primary-blue';
});
</script>
