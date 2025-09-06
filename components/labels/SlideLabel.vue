<template>
  <div class="bg-secondary-grey-stroke h-[4px] w-full rounded-full lg:h-[6px]">
    <div
      class="h-[4px] rounded-full lg:h-[6px]"
      :class="bgColorMap[color]"
      :style="setLabelValue"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { bgColorMap, type Colors } from '../components.types';

const props = defineProps({
  color: {
    type: String as PropType<Colors>,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
});

const setLabelValue = computed<string>(() => {
  return `width: ${props.value}%`;
});
</script>
