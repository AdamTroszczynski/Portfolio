<template>
  <main>
    <HomeSection />
    <ShowcaseSection />
    <AboutSection />
    <PerformanceSection />
  </main>
</template>

<script setup lang="ts">
import { useProjectStore } from '@project/projectStore';
import AboutSection from '@project/sections/AboutSection.vue';
import HomeSection from '@project/sections/HomeSection.vue';
import PerformanceSection from '@project/sections/PerformanceSection.vue';
import ShowcaseSection from '@project/sections/ShowcaseSection.vue';
import { useRoute } from 'vue-router';

import { useAnimations } from '@/composable/useAnimations';

const { initFadeIn, initOpacity } = useAnimations();
const route = useRoute();
const lenis = useLenis();
const projectStore = useProjectStore();

projectStore.setProject(route.params.name as string);

onMounted(async () => {
  initFadeIn();
  initOpacity();
  lenis.value?.scrollTo(0, { immediate: true });
});
</script>
