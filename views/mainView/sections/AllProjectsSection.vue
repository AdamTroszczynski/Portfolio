<template>
  <section
    id="allProjects"
    class="bg-secondary-dark-white flex flex-col items-center gap-[48px] px-[16px] py-[64px] lg:gap-[64px] lg:py-[80px]"
  >
    <div class="flex flex-col gap-[24px] lg:gap-[32px]">
      <BaseHeader header="All Projects">
        <template #label>
          <BaseLabel :is-green="true" icon="folder">
            Complete Portfolio
          </BaseLabel>
        </template>
        <template #default>
          Explore my complete portfolio spanning web development, mobile
          applications, and more.
        </template>
      </BaseHeader>

      <div
        class="gsapFadeIn flex items-end justify-center gap-[8px] lg:gap-[16px]"
      >
        <BaseRadioButton
          v-model="mainViewStore.states.selectedFilter"
          radio-value="all"
          name="projFilter"
        >
          All
        </BaseRadioButton>
        <BaseRadioButton
          v-model="mainViewStore.states.selectedFilter"
          radio-value="webApp"
          name="projFilter"
        >
          Web dev
        </BaseRadioButton>
        <BaseRadioButton
          v-model="mainViewStore.states.selectedFilter"
          radio-value="website"
          name="projFilter"
        >
          Website
        </BaseRadioButton>
        <BaseRadioButton
          v-model="mainViewStore.states.selectedFilter"
          radio-value="mobileApp"
          name="projFilter"
        >
          Mobile app
        </BaseRadioButton>
      </div>
    </div>

    <Transition name="fade-list" mode="out-in">
      <div
        :key="mainViewStore.states.selectedFilter"
        class="gsapFadeIn flex flex-wrap justify-center gap-[25px] lg:max-w-[1216px] lg:gap-[33px] 2xl:justify-start"
      >
        <ProjectCard
          v-for="proj in filteredArray"
          :key="proj.id"
          :header="proj.name"
          :img-src="proj.photos[0].imgSrc"
          :button-color="proj.cardColor"
          :is-mobile="proj.type === 'mobileApp'"
          :link-git="proj.githubLink"
          :url="proj.url"
        >
          <template #techStack>
            <TechnologyLabel
              v-for="tech in proj.mainTechStack"
              :key="tech"
              :is-blue="technologiesMap[tech].color === 'blue'"
              :is-green="technologiesMap[tech].color === 'green'"
              :is-orange="technologiesMap[tech].color === 'orange'"
              :is-purple="technologiesMap[tech].color === 'purple'"
              :is-red="technologiesMap[tech].color === 'red'"
              :is-yellow="technologiesMap[tech].color === 'yellow'"
              :is-black="technologiesMap[tech].color === 'black'"
            >
              {{ technologiesMap[tech].name }}
            </TechnologyLabel>
          </template>
          <template #default>
            {{ proj.shortDesc }}
          </template>
        </ProjectCard>
      </div>
    </Transition>
  </section>
</template>

<script setup lang="ts">
import ProjectCard from '@mainView/components/allProjectsSection/ProjectCard.vue';
import { useMainViewStore } from '@mainView/mainView.store';

import BaseHeader from '@/components/headers/BaseHeader.vue';
import BaseRadioButton from '@/components/inputs/BaseRadioButton.vue';
import BaseLabel from '@/components/labels/BaseLabel.vue';
import TechnologyLabel from '@/components/labels/TechnologyLabel.vue';
import { useMainStore } from '@/stores/mainStore';
import { technologiesMap } from '@/stores/mainStore.types';

const mainStore = useMainStore();
const mainViewStore = useMainViewStore();

const filteredArray = computed(() => {
  if (mainViewStore.states.selectedFilter === 'all') return mainStore.projects;
  return mainStore.projects.filter(
    (el) => el.type === mainViewStore.states.selectedFilter,
  );
});
</script>
