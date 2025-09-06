<template>
  <button
    class="d-medium-lg cursor-pointer text-start transition-colors duration-200 ease-linear"
    :class="setLinkClasses"
    @click="lenis?.scrollTo(props.sectionId)"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  isSelected: {
    type: Boolean,
    default: false,
  },
  sectionId: {
    type: String,
    required: true,
  },
});

const setLinkClasses = computed<string>(() => {
  return props.isSelected
    ? 'text-primary-blue'
    : 'text-secondary-dark hover:text-primary-black';
});

const lenis = useLenis();
</script>
