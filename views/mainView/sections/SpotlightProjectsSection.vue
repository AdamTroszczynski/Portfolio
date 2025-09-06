<template>
  <section
    id="spotlightProjects"
    class="bg-primary-white flex flex-col items-center justify-center gap-[48px] px-[16px] py-[64px] lg:gap-[64px] lg:pt-[80px] lg:pb-[128px]"
  >
    <BaseHeader header="Spotlight Projects">
      <template #label>
        <BaseLabel :is-blue="true" icon="star">Featured Work</BaseLabel>
      </template>
      <template #default>
        A curated selection of my most impactful and innovative projects that
        demonstrate technical excellence and creative problem-solving.
      </template>
    </BaseHeader>

    <div class="flex flex-wrap justify-center gap-[24px] lg:gap-[34px]">
      <SpotlightCard
        header="Smocze Prawko"
        img-src="/photos/smoczePrawko/main.png"
      >
        <template #default>
          A web app for practicing theoretical driving exam questions, featuring
          learning and exam modes, user statistics, premium account support, and
          profile customization.
        </template>
        <template #techStack>
          <TechnologyLabel :is-green="true">Nuxt.js</TechnologyLabel>
          <TechnologyLabel :is-blue="true">Nest.js</TechnologyLabel>
          <TechnologyLabel :is-red="true">Redis</TechnologyLabel>
          <TechnologyLabel :is-blue="true">TypeScript</TechnologyLabel>
        </template>
      </SpotlightCard>

      <SpotlightCard
        header="AI Customer Support Bot"
        img-src="/photos/img.png"
        button-color="primary-green"
      >
        <template #default>
          An intelligent chatbot powered by machine learning with natural
          language processing and sentiment analysis.
        </template>
        <template #techStack>
          <TechnologyLabel :is-blue="true">Python</TechnologyLabel>
          <TechnologyLabel :is-green="true">TensorFlow</TechnologyLabel>
          <TechnologyLabel :is-purple="true">FastAPI</TechnologyLabel>
        </template>
      </SpotlightCard>
    </div>
  </section>
</template>

<script setup lang="ts">
import SpotlightCard from '@mainView/components/spotlightProjectsSection/SpotlightCard.vue';

import BaseHeader from '@/components/headers/BaseHeader.vue';
import BaseLabel from '@/components/labels/BaseLabel.vue';
import TechnologyLabel from '@/components/labels/TechnologyLabel.vue';
</script>
