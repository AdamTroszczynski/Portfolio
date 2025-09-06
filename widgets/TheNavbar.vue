<template>
  <header
    class="bg-primary-white xl:border-secondary-grey-stroke sticky top-[0px] z-50 flex w-full justify-center xl:border-b"
  >
    <div
      class="bg-primary-white border-secondary-grey-stroke relative z-30 flex w-full max-w-[1440px] items-center justify-between border-b p-[16px] xl:border-none"
    >
      <button
        class="flex cursor-pointer items-center gap-[8px] lg:w-[206px]"
        @click="lenis?.scrollTo('#home')"
      >
        <div
          class="flex h-[32px] w-[32px] items-center justify-center rounded-md bg-linear-to-r from-[#2563EB] to-[#10B981]"
        >
          <BaseIcon name="coding" color="primary-white" />
        </div>
        <span class="d-bold-sm text-primary-black">Adam Troszczyński</span>
      </button>

      <nav
        aria-label="Desktop menu"
        class="hidden xl:flex xl:items-center xl:gap-[30px]"
      >
        <LinkButton
          :is-selected="selectedSection === '#home'"
          section-id="#home"
        >
          Home
        </LinkButton>
        <LinkButton
          :is-selected="selectedSection === '#spotlightProjects'"
          section-id="#spotlightProjects"
          >Projects
        </LinkButton>
        <LinkButton
          :is-selected="selectedSection === '#about'"
          section-id="#about"
        >
          About me
        </LinkButton>
        <LinkButton
          :is-selected="selectedSection === '#skills'"
          section-id="#skills"
        >
          Skills
        </LinkButton>
        <LinkButton
          :is-selected="selectedSection === '#experience'"
          section-id="#experience"
        >
          Experience
        </LinkButton>
        <LinkButton
          :is-selected="selectedSection === '#contact'"
          section-id="#contact"
        >
          Contact
        </LinkButton>
      </nav>

      <div class="flex items-center gap-[12px] lg:w-[206px]">
        <a
          href="https://github.com/AdamTroszczynski"
          target="_blank"
          class="hidden lg:block"
        >
          <BaseIcon name="github" color="secondary-dark" />
        </a>
        <BaseButton
          :is-small="true"
          class="hidden lg:flex"
          @click="lenis?.scrollTo('#contact')"
        >
          Contact Me
        </BaseButton>
        <button
          class="cursor-pointer duration-200 active:scale-95 xl:hidden"
          @click="isMenuOpen = !isMenuOpen"
        >
          <BaseIcon name="menu" color="secondary-dark" />
        </button>
      </div>
    </div>

    <nav
      aria-label="Mobile menu"
      class="bg-primary-white absolute left-[0px] z-20 flex w-full flex-col gap-[20px] p-[12px] transition-transform duration-500 xl:hidden"
      :class="isMenuOpen ? 'translate-y-[60px]' : '-translate-y-[300px]'"
    >
      <LinkButton
        :is-selected="selectedSection === '#home'"
        section-id="#home"
        @click="isMenuOpen = false"
      >
        Home
      </LinkButton>
      <LinkButton
        :is-selected="selectedSection === '#spotlightProjects'"
        section-id="#spotlightProjects"
        @click="isMenuOpen = false"
      >
        Projects
      </LinkButton>
      <LinkButton
        :is-selected="selectedSection === '#about'"
        section-id="#about"
        @click="isMenuOpen = false"
      >
        About me
      </LinkButton>
      <LinkButton
        :is-selected="selectedSection === '#skills'"
        section-id="#skills"
        @click="isMenuOpen = false"
      >
        Skills
      </LinkButton>
      <LinkButton
        :is-selected="selectedSection === '#experience'"
        section-id="#experience"
        @click="isMenuOpen = false"
      >
        Experience
      </LinkButton>
      <LinkButton
        :is-selected="selectedSection === '#contact'"
        section-id="#contact"
        @click="isMenuOpen = false"
      >
        Contact
      </LinkButton>
    </nav>
  </header>
</template>
<script setup lang="ts">
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import BaseButton from '@/components/buttons/BaseButton.vue';
import LinkButton from '@/components/buttons/LinkButton.vue';
import BaseIcon from '@/components/icons/BaseIcon.vue';

type Sections =
  | '#home'
  | '#spotlightProjects'
  | '#about'
  | '#skills'
  | '#experience'
  | '#contact';

const isMenuOpen: Ref<boolean> = ref(false);
const selectedSection: Ref<Sections> = ref('#home');

const lenis = useLenis();

const sections: Sections[] = [
  '#home',
  '#spotlightProjects',
  '#about',
  '#skills',
  '#experience',
  '#contact',
];

onMounted(() => {
  sections.forEach((el) => {
    ScrollTrigger.create({
      trigger: el,
      start: 'top center',
      onEnter: () => {
        selectedSection.value = el;
      },
      onEnterBack: () => {
        selectedSection.value = el;
      },
    });
  });
});
</script>
