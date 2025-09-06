<template>
  <SmoczePrawko />
</template>

<script setup lang="ts">
import SmoczePrawko from '@/views/projects/smoczePrawko/SmoczePrawko.vue';

definePageMeta({
  layout: 'project',
  layoutTransition: { name: 'layout', mode: 'out-in', appear: true },
  scrollToTop: false,
});
</script>
