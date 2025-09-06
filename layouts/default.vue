<template>
  <div>
    <TheNavbar />
    <slot />
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import TheFooter from '@/widgets/TheFooter.vue';
import TheNavbar from '@/widgets/TheNavbar.vue';
</script>
