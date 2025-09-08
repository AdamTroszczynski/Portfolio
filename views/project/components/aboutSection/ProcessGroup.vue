<template>
  <div class="flex flex-col items-center gap-[32px] lg:gap-[48px]">
    <BaseCard :is-red="true" header="The Challenge" icon="danger">
      <p
        v-for="text in projectStore.project.challenge"
        :key="text"
        class="text-primary-dark d-text-md lg:d-text-xlg"
      >
        {{ text }}
      </p>
    </BaseCard>
    <BaseCard :is-green="true" header="The Solution" icon="idea">
      <p class="text-primary-dark d-text-md lg:d-text-xlg">
        {{ projectStore.project.solution.text }}
      </p>
      <div
        class="flex flex-col gap-[12px] lg:flex-row lg:flex-wrap lg:gap-[16px]"
      >
        <SolutionEntry
          v-for="tab in projectStore.project.solution.tabs"
          :key="tab.id"
          :icon="tab.icon"
        >
          {{ tab.text }}
        </SolutionEntry>
      </div>
    </BaseCard>

    <BaseCard :is-blue="true" header="Development Process" icon="settings">
      <ProcessEntry
        v-for="process in projectStore.project.developmentProcess"
        :key="process.id"
        :number="process.id"
        :header="process.header"
      >
        {{ process.text }}
      </ProcessEntry>
    </BaseCard>

    <BaseCard :is-yellow="true" header="Results & Impact" icon="reward">
      <p class="text-primary-dark d-text-md lg:d-text-xlg">
        {{ projectStore.project.result }}
      </p>
    </BaseCard>
  </div>
</template>

<script setup lang="ts">
import BaseCard from '@project/components/aboutSection/BaseCard.vue';
import ProcessEntry from '@project/components/aboutSection/ProcessEntry.vue';
import SolutionEntry from '@project/components/aboutSection/SolutionEntry.vue';
import { useProjectStore } from '@project/projectStore';

const projectStore = useProjectStore();
</script>
