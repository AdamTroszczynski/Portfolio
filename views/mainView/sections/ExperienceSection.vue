<template>
  <section
    id="experience"
    class="bg-secondary-dark-white flex flex-col gap-[48px] px-[16px] py-[64px] lg:gap-[64px] lg:py-[80px]"
  >
    <BaseHeader header="Work Experience">
      <template #label>
        <BaseLabel icon="work" :is-indigo="true">
          Professional Journey
        </BaseLabel>
      </template>
      <template #default>
        My professional journey through various roles and companies.
      </template>
    </BaseHeader>

    <div class="relative flex flex-col items-center gap-[32px]">
      <div
        class="bg-primary-grey-stroke absolute top-0 left-1/2 hidden h-full w-[2px] -translate-x-1/2 transform 2xl:block"
      ></div>

      <ExperienceCard
        header="Software Engineer"
        icon="coding"
        color="primary-blue"
        company="Volvo group IT"
        start-date="2024"
        :is-reverse="true"
        class="gsapFadeIn"
      >
        <template #default>
          Development and maintenance of internal applications supporting
          critical company processes. Creator of a custom software based on a
          per-view architecture using Vue. This became the foundation for the
          team's second most important product offering
        </template>
        <template #technologies>
          <TechnologyLabel :is-green="true">Vue.js</TechnologyLabel>
          <TechnologyLabel :is-blue="true">TypeScript</TechnologyLabel>
          <TechnologyLabel :is-yellow="true">Tailwind</TechnologyLabel>
          <TechnologyLabel :is-red="true">AngularJS</TechnologyLabel>
        </template>
      </ExperienceCard>

      <ExperienceCard
        header="Fullstack Developer"
        icon="rocket"
        color="primary-orange"
        company="Mandala software house"
        start-date="2022"
        end-date="2024"
        class="gsapFadeIn"
      >
        <template #default>
          Full development of various projects — from simple websites to
          advanced web applications. Handled the entire development process,
          from interface design to system architecture
        </template>
        <template #technologies>
          <TechnologyLabel :is-green="true">Vue.js</TechnologyLabel>
          <TechnologyLabel :is-purple="true">Nuxt.js</TechnologyLabel>
          <TechnologyLabel :is-blue="true">React</TechnologyLabel>
          <TechnologyLabel :is-yellow="true">Next.js</TechnologyLabel>
        </template>
      </ExperienceCard>
    </div>
  </section>
</template>

<script setup lang="ts">
import ExperienceCard from '@mainView/components/experienceSection/ExperienceCard.vue';

import BaseHeader from '@/components/headers/BaseHeader.vue';
import BaseLabel from '@/components/labels/BaseLabel.vue';
import TechnologyLabel from '@/components/labels/TechnologyLabel.vue';
</script>
