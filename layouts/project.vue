<template>
  <div>
    <TheProjectNavbar />
    <slot />
    <TheProjectFooter />
  </div>
</template>
<script setup lang="ts">
import TheProjectFooter from '@/widgets/TheProjectFooter.vue';
import TheProjectNavbar from '@/widgets/TheProjectNavbar.vue';
</script>
