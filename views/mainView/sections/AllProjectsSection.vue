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

      <div class="flex items-end justify-center gap-[8px] lg:gap-[16px]">
        <BaseRadioButton
          v-model="mainViewStore.states.selectedFilter"
          radio-value="All"
          name="projFilter"
        >
          All
        </BaseRadioButton>
        <BaseRadioButton
          v-model="mainViewStore.states.selectedFilter"
          radio-value="Web app"
          name="projFilter"
        >
          Web dev
        </BaseRadioButton>
        <BaseRadioButton
          v-model="mainViewStore.states.selectedFilter"
          radio-value="Website"
          name="projFilter"
        >
          Website
        </BaseRadioButton>
        <BaseRadioButton
          v-model="mainViewStore.states.selectedFilter"
          radio-value="Mobile app"
          name="projFilter"
        >
          Mobile app
        </BaseRadioButton>
      </div>
    </div>

    <Transition name="fade-list" mode="out-in">
      <div
        :key="mainViewStore.states.selectedFilter"
        class="flex flex-wrap justify-center gap-[25px] lg:max-w-[1216px] lg:gap-[33px] 2xl:justify-start"
      >
        <ProjectCard
          v-for="proj in filteredArray"
          :key="proj.id"
          :header="proj.header"
          :img-src="proj.imgSrc"
          :button-color="proj.buttonColor"
          :is-mobile="proj.type === 'Mobile app'"
          :link-git="proj.linkGit"
        >
          <template #techStack>
            <LabelsTechnologyLabel
              v-for="tech in proj.techStack"
              :key="tech.name"
              :is-blue="tech.color === 'blue'"
              :is-green="tech.color === 'green'"
              :is-orange="tech.color === 'orange'"
              :is-purple="tech.color === 'purple'"
              :is-red="tech.color === 'red'"
              :is-yellow="tech.color === 'yellow'"
            >
              {{ tech.name }}
            </LabelsTechnologyLabel>
          </template>
          <template #default>
            {{ proj.desc }}
          </template>
        </ProjectCard>
      </div>
    </Transition>
  </section>
</template>

<script setup lang="ts">
import ProjectCard from '@mainView/components/allProjectsSection/ProjectCard.vue';
import { useMainViewStore } from '@mainView/mainView.store';
import { useProjectsStore } from '@mainView/ProjectsStore';

import BaseHeader from '@/components/headers/BaseHeader.vue';
import BaseRadioButton from '@/components/inputs/BaseRadioButton.vue';
import BaseLabel from '@/components/labels/BaseLabel.vue';

const projectsStore = useProjectsStore();
const mainViewStore = useMainViewStore();

const filteredArray = computed(() => {
  if (mainViewStore.states.selectedFilter === 'All')
    return projectsStore.projects;
  return projectsStore.projects.filter(
    (el) => el.type === mainViewStore.states.selectedFilter,
  );
});
</script>
