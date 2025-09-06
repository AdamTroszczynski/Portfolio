<template>
  <component :is="iconComponent" :class="iconColor" />
</template>

<script setup lang="ts">
import { computed, type PropType } from 'vue';

import {
  type Colors,
  iconColorsMap,
  type IconsName,
} from '@/components/components.types';
const props = defineProps({
  name: {
    type: String as PropType<IconsName>,
    required: true,
  },
  color: {
    type: String as PropType<Colors>,
    default: 'primary',
  },
});

/** Import all .svg files */
const icons = import.meta.glob('@/assets/svg/*.svg', {
  eager: true,
  import: 'default',
});

/** Main icons map */
const iconsMap = Object.fromEntries(
  Object.entries(icons).map(([path, mod]) => {
    const name = path.split('/').pop()?.replace('.svg', '') ?? '';
    return [name, mod];
  }),
);

/** Set selected icon based on prop */
const iconComponent = computed(() => iconsMap[props.name]);

/**
 * Set icon color
 * @returns { string } Tailwind classes
 */
const iconColor = computed<string>(() => iconColorsMap[props.color]);
</script>
