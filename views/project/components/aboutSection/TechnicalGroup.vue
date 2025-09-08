<template>
  <div class="flex flex-col items-center gap-[48px]">
    <SimpleCard icon="coding" :icon-with-bg="true" header="Technologies Used">
      <TechnologyCard header="Frontend">
        <TechnologyLabel
          v-for="tech in projectStore.project.techStack.frontend"
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
      </TechnologyCard>
      <TechnologyCard header="Backend">
        <TechnologyLabel
          v-for="tech in projectStore.project.techStack.backend"
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
      </TechnologyCard>
      <TechnologyCard header="Database & Tools">
        <TechnologyLabel
          v-for="tech in projectStore.project.techStack.database"
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
      </TechnologyCard>
      <TechnologyCard header="Cloud & DevOps">
        <TechnologyLabel
          v-for="tech in projectStore.project.techStack.devops"
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
      </TechnologyCard>
    </SimpleCard>

    <SimpleCard icon="chain" header="Project Links" :bg-colorfull="true">
      <div class="flex flex-col gap-[16px]">
        <LinkButton
          icon="share"
          header="Live Demo"
          :is-disabled="!projectStore.project.demoLink"
          @click="goTo(projectStore.project.demoLink)"
        >
          View the working application
        </LinkButton>
        <LinkButton
          icon="github"
          header="GitHub Repository"
          :is-disabled="!projectStore.project.githubLink"
          @click="goTo(projectStore.project.githubLink)"
        >
          Explore the source code
        </LinkButton>
      </div>
    </SimpleCard>

    <SimpleCard
      icon="chart"
      icon-color="primary-blue"
      header="Project Statistics"
    >
      <StatisticEntry header="Lines of Code">
        {{ projectStore.project.stats.linesOfCode }}
      </StatisticEntry>
      <StatisticEntry header="Components">
        {{ projectStore.project.stats.components }}
      </StatisticEntry>
      <StatisticEntry header="API Endpoints">
        {{ projectStore.project.stats.apiEndpoints }}
      </StatisticEntry>
      <StatisticEntry :text-green="true" header="Test Coverage">
        {{ projectStore.project.stats.testCoverage }}
      </StatisticEntry>
      <StatisticEntry :text-green="true" header="Performance Score">
        {{ projectStore.project.stats.performanceScore }}
      </StatisticEntry>
    </SimpleCard>
  </div>
</template>

<script setup lang="ts">
import SimpleCard from '@project/components/aboutSection/SimpleCard.vue';
import StatisticEntry from '@project/components/aboutSection/StatisticEntry.vue';
import TechnologyCard from '@project/components/aboutSection/TechnologyCard.vue';
import TechnologyLabel from '@project/components/aboutSection/TechnologyLabel.vue';
import { useProjectStore } from '@project/projectStore';

import { technologiesMap } from '@/stores/mainStore.types';
import LinkButton from '~/views/project/components/aboutSection/LinkButton.vue';

const projectStore = useProjectStore();

const goTo = async (link: string | null) => {
  if (!link) return;
  window.open(link, '_blank');
};
</script>
