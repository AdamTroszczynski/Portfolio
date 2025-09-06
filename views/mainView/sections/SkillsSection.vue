<template>
  <section
    id="skills"
    class="flex flex-col items-center gap-[48px] px-[16px] py-[64px] lg:px-[30px] xl:px-[80px]"
  >
    <BaseHeader header="Skills & Technologies">
      <template #label>
        <BaseLabel :is-purple="true" icon="technology">
          Technical Expertise
        </BaseLabel>
      </template>
      <template #default>
        Technologies, frameworks, and tools I use to bring ideas to life.
      </template>
    </BaseHeader>

    <div class="flex w-full flex-col items-center gap-[32px] lg:gap-[48px]">
      <SkilsGroup
        header="Frontend Development"
        icon="coding"
        color="primary-blue"
      >
        <SkillCard
          icon="vue"
          label="Vue.js"
          color="primary-green"
          :slider-value="100"
        />
        <SkillCard
          icon="nuxt"
          label="Nuxt.js"
          color="primary-dark-green"
          :slider-value="90"
        /><SkillCard
          icon="react"
          label="React"
          color="primary-blue"
          :slider-value="55"
        />
        <SkillCard
          icon="next"
          label="Next.js"
          color="primary-dark-blue"
          :slider-value="50"
        />
        <SkillCard
          icon="typescript"
          label="TypeScript"
          color="primary-blue-hover"
          :slider-value="90"
        />
      </SkilsGroup>

      <SkilsGroup header="Styling" icon="pen" color="primary-green">
        <SkillCard
          icon="tailwind"
          label="Tailwind"
          color="primary-blue"
          :slider-value="95"
        />
        <SkillCard
          icon="sass"
          label="Sass"
          color="primary-pink"
          :slider-value="80"
        />
        <SkillCard
          icon="primevue"
          label="PrimeVue"
          color="primary-green"
          :slider-value="85"
        />
      </SkilsGroup>

      <SkilsGroup
        header="Backend Development"
        icon="storage"
        color="primary-purple"
      >
        <SkillCard
          icon="express"
          label="Express.js"
          color="primary-dark"
          :slider-value="75"
        />
        <SkillCard
          icon="postgresql"
          label="PostgreSQL"
          color="primary-blue"
          :slider-value="80"
        />
        <SkillCard
          icon="mongodb"
          label="MongoDB"
          color="primary-green"
          :slider-value="90"
        />
        <SkillCard
          icon="prisma"
          label="Prisma"
          color="primary-indigo"
          :slider-value="75"
        />
        <SkillCard
          icon="sqlserver"
          label="Sql Server"
          color="primary-orange"
          :slider-value="60"
        />
      </SkilsGroup>

      <SkilsGroup
        header="DevOps & Tools"
        icon="toolbox"
        color="primary-dark-red"
      >
        <SkillCard
          icon="git"
          label="Git"
          color="primary-orange"
          :slider-value="90"
        />
        <SkillCard
          icon="github"
          label="GitHub"
          color="primary-dark"
          :slider-value="85"
        />
        <SkillCard
          icon="confluence"
          label="Confluence"
          color="primary-blue-hover"
          :slider-value="70"
        />
        <SkillCard
          icon="azure"
          label="Azure"
          color="primary-blue"
          :slider-value="60"
        />
      </SkilsGroup>
    </div>
  </section>
</template>

<script setup lang="ts">
import SkillCard from '@mainView/components/skillsSection/SkillCard.vue';
import SkilsGroup from '@mainView/components/skillsSection/SkilsGroup.vue';

import BaseHeader from '@/components/headers/BaseHeader.vue';
import BaseLabel from '@/components/labels/BaseLabel.vue';
</script>
