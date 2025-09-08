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

    <div
      class="gsapFadeIn flex flex-wrap justify-center gap-[24px] lg:gap-[34px]"
    >
      <SpotlightCard
        v-for="n in [0, 1]"
        :key="n"
        :header="mainStore.projects[n].name"
        :img-src="mainStore.projects[n].photos[n].imgSrc"
      >
        <template #default>
          {{ mainStore.projects[n].shortDesc }}
        </template>
        <template #techStack>
          <TechnologyLabel
            v-for="tech in mainStore.projects[n].mainTechStack"
            :key="tech"
            :is-blue="technologiesMap[tech].color === 'blue'"
            :is-green="technologiesMap[tech].color === 'green'"
            :is-yellow="technologiesMap[tech].color === 'yellow'"
            :is-purple="technologiesMap[tech].color === 'purple'"
            :is-red="technologiesMap[tech].color === 'red'"
            :is-orange="technologiesMap[tech].color === 'orange'"
            :is-black="technologiesMap[tech].color === 'black'"
          >
            {{ technologiesMap[tech].name }}
          </TechnologyLabel>
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
import { useMainStore } from '@/stores/mainStore';
import { technologiesMap } from '@/stores/mainStore.types';

const mainStore = useMainStore();
</script>
