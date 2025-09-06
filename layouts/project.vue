<template>
  <div>
    <TheProjectNavbar />
    <slot />
    <TheFooter />
  </div>
</template>
<script setup lang="ts">
import TheFooter from '@/widgets/TheFooter.vue';
import TheProjectNavbar from '@/widgets/TheProjectNavbar.vue';
</script>
