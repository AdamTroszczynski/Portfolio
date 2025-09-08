<template>
  <section
    id="home"
    class="flex flex-col gap-[24px] px-[16px] py-[48px] lg:gap-[32px] lg:px-[80px] lg:pt-[80px] lg:pb-[128px]"
  >
    <div
      class="text-primary-grey d-text-xs lg:d-text-sm gsapOpacity flex items-center gap-[8px]"
    >
      Home
      <BaseIcon name="rightArrow" color="primary-grey" />
      Project
      <BaseIcon name="rightArrow" color="primary-grey" />
      <span class="d-medium-sm text-primary-black lg:d-medium-md">
        {{ projectStore.project.name }}
      </span>
    </div>
    <div
      class="gsapOpacity flex flex-col items-center justify-center gap-[24px]"
    >
      <div class="flex flex-col items-center gap-[32px]">
        <OnlineLabel class="w-fit" :is-blue="true">
          Featured Project
        </OnlineLabel>
        <h1 class="d-header-md text-primary-black lg:d-bold-2xl">
          {{ projectStore.project.name }}
        </h1>
        <p
          class="text-secondary-dark d-text-md lg:d-text-lg text-center lg:max-w-[876px]"
        >
          {{ projectStore.project.description }}
        </p>
      </div>

      <div
        class="gsapOpacity flex flex-wrap items-center justify-center gap-[16px]"
      >
        <HomeCard icon="calendar" icon-color="primary-blue">
          {{ projectStore.project.startDate }}
        </HomeCard>
        <HomeCard icon="clock" icon-color="primary-green">
          {{ projectStore.project.duration }}
        </HomeCard>
        <HomeCard icon="user" icon-color="primary-dark-purple">
          {{ projectStore.project.role }}
        </HomeCard>
        <HomeCard icon="people" icon-color="primary-orange">
          {{ projectStore.project.teamMembers }}
        </HomeCard>
      </div>

      <div
        class="gsapOpacity flex w-full max-w-[358px] flex-col gap-[12px] lg:mt-[12px] lg:max-w-none lg:flex-row lg:items-center lg:justify-center lg:gap-[24px]"
      >
        <BaseButton
          icon="rocket"
          bg-color="primary-blue"
          class="lg:max-w-[185px]"
          :is-disabled="!projectStore.project.demoLink"
          @click="goTo(projectStore.project.demoLink)"
        >
          Live Demo
        </BaseButton>
        <BaseButton
          icon="github"
          bg-color="primary-black"
          class="lg:max-w-[228px]"
          :is-disabled="!projectStore.project.githubLink"
          @click="goTo(projectStore.project.githubLink)"
        >
          View on GitHub
        </BaseButton>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import HomeCard from '@project/components/homeSection/HomeCard.vue';
import { useProjectStore } from '@project/projectStore';

import BaseButton from '@/components/buttons/BaseButton.vue';
import BaseIcon from '@/components/icons/BaseIcon.vue';
import OnlineLabel from '@/components/labels/OnlineLabel.vue';

const projectStore = useProjectStore();

const goTo = async (link: string | null) => {
  if (!link) return;
  window.open(link, '_blank');
};
</script>
