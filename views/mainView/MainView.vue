<template>
  <main>
    <HeroSection />
    <SpotlightProjectsSection />
    <AllProjectsSection />
    <AboutSection />
    <SkillsSection />
    <ExperienceSection />
    <NumbersSection />
    <ContactSection />
  </main>
</template>

<script setup lang="ts">
import { useMainViewStore } from '@mainView/mainView.store';
import AboutSection from '@mainView/sections/AboutSection.vue';
import AllProjectsSection from '@mainView/sections/AllProjectsSection.vue';
import ContactSection from '@mainView/sections/ContactSection.vue';
import ExperienceSection from '@mainView/sections/ExperienceSection.vue';
import HeroSection from '@mainView/sections/HeroSection.vue';
import NumbersSection from '@mainView/sections/NumbersSection.vue';
import SkillsSection from '@mainView/sections/SkillsSection.vue';
import SpotlightProjectsSection from '@mainView/sections/SpotlightProjectsSection.vue';

import { useAnimations } from '@/composable/useAnimations';

const mainViewStore = useMainViewStore();
const lenis = useLenis();

const { initFadeIn, initOpacity } = useAnimations();

onMounted(async () => {
  initFadeIn();
  initOpacity();
  lenis.value?.stop();
  await refreshNuxtData();
  window.scrollTo({ top: mainViewStore.states.scroll });
  lenis.value?.start();
});

onBeforeRouteLeave(() => {
  mainViewStore.actions.saveScrollFromLenis();
});
</script>
