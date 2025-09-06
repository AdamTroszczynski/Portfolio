<template>
  <section
    id="about"
    class="bg-primary-white flex flex-col gap-[48px] px-[16px] py-[64px]"
  >
    <BaseHeader header="About Me">
      <template #label>
        <BaseLabel icon="user" :is-blue="true">Get to Know Me</BaseLabel>
      </template>
      <template #default>
        Passionate developer, creative problem- solver, and lifelong learner.
      </template>
    </BaseHeader>

    <div
      class="flex w-full flex-col items-center gap-[24px] 2xl:flex-row 2xl:justify-center"
    >
      <div
        class="flex w-full flex-col items-center gap-[24px] 2xl:max-w-[467px]"
      >
        <!-- Personal card -->
        <PersonalCard />

        <!-- Fun facts card-->
        <FactsGroup header="Fun Facts About Me" icon="star">
          <FactsCard icon="cup">Coffee enthusiast ☕ (3+ cups/day)</FactsCard>
          <FactsCard icon="game">Avid gamer in spare time 🎮</FactsCard>
          <FactsCard icon="mountain">Weekend hiking adventurer 🏔️</FactsCard>
          <FactsCard icon="book">Tech book collector 📚 </FactsCard>
        </FactsGroup>
      </div>

      <div class="flex flex-col gap-[24px]">
        <!-- Passion card-->
        <PassionCard header="My Journey & Passion" icon="heart">
          <p class="d-text-sm text-primary-dark lg:d-text-xlg max-w-[654px]">
            I'm a passionate full-stack developer with over 3 years of
            experience creating innovative web solutions that bridge design and
            functionality. I enjoy turning complex problems into elegant,
            user-friendly applications using modern technologies like Vue.js,
            Nuxt.js, and cloud platforms.
          </p>
          <p class="d-text-sm text-primary-dark lg:d-text-xlg max-w-[654px]">
            My approach to work is based on continuous learning and development.
            Since 2020, I have been constantly improving my programming skills,
            treating each project as an opportunity to gain new knowledge and
            experience. I am ready to take on challenges that will help me grow
            and make a meaningful impact in this field.
          </p>
        </PassionCard>

        <div class="flex flex-col gap-[16px] lg:flex-row lg:gap-[24px]">
          <AboutCard :is-blue="true" header="Clean Code" icon="codingBigger">
            Writing maintainable, scalable, and efficient code that stands the
            test of time and follows industry best practices.
          </AboutCard>
          <AboutCard :is-green="true" header="Team Player" icon="players">
            Collaborating effectively with cross-functional teams to deliver
            exceptional results and foster innovation.
          </AboutCard>
          <AboutCard :is-purple="true" header="Innovation" icon="innovation">
            Always exploring cutting-edge technologies and creative solutions to
            solve complex challenges.
          </AboutCard>
        </div>

        <div
          class="flex w-full max-w-[358px] flex-col gap-[12px] lg:max-w-none 2xl:flex-row"
        >
          <BaseButton
            bg-color="primary-blue"
            icon="download"
            class="2xl:max-w-[271px]"
            @click="downloadCV"
          >
            Download Resume
          </BaseButton>
          <BaseButton
            :is-transparent="true"
            icon="folder"
            class="2xl:max-w-[206px]"
            @click="lenis?.scrollTo('#spotlightProjects')"
          >
            Projects
          </BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import AboutCard from '@mainView/components/aboutSection/AboutItemCard.vue';
import FactsCard from '@mainView/components/aboutSection/FactsCard.vue';
import FactsGroup from '@mainView/components/aboutSection/FactsGroup.vue';
import PassionCard from '@mainView/components/aboutSection/PassionCard.vue';
import PersonalCard from '@mainView/components/aboutSection/PersonalCard.vue';

import BaseButton from '@/components/buttons/BaseButton.vue';
import BaseHeader from '@/components/headers/BaseHeader.vue';
import BaseLabel from '@/components/labels/BaseLabel.vue';
import { useDownload } from '@/composable/useDownload';

const lenis = useLenis();

const { downloadCV } = useDownload();
</script>
