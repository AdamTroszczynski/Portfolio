<template>
  <MainView />
</template>

<script setup lang="ts">
import MainView from '@/views/mainView/MainView.vue';

definePageMeta({
  layoutTransition: { name: 'layout', mode: 'out-in', appear: true },
  scrollToTop: false,
});
</script>
