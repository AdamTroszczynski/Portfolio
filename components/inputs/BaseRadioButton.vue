<template>
  <label>
    <input
      v-model="value"
      type="radio"
      :name="name"
      :value="radioValue"
      class="peer hidden"
    />
    <div
      class="bg-primary-white lg:d-medium-lg border-secondary-grey-stroke text-primary-dark d-medium-md peer-checked:border-primary-blue peer-checked:text-primary-white peer-checked:bg-primary-blue flex w-max cursor-pointer items-center justify-center rounded-full border px-[16px] py-[10px] transition-colors duration-200 lg:px-[20px] lg:py-[12px]"
    >
      <slot />
    </div>
  </label>
</template>

<script setup lang="ts">
import { useVModel } from '@vueuse/core';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  radioValue: {
    type: String,
    required: true,
  },
  modelValue: {
    type: String,
    required: true,
  },
});

const emit = defineEmits<{ 'update:modelValue': [string] }>();

const value = useVModel(props, 'modelValue', emit);
</script>
