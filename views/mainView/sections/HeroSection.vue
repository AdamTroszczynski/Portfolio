<template>
  <section
    id="home"
    class="relative flex flex-col items-center justify-center gap-[24px] bg-[linear-gradient(to_right,#2563EB0D,#10B9810D),linear-gradient(to_right,#ffffff,#F9FAFB,#EFF6FF)] px-[32px] py-[64px] lg:gap-[32px]"
  >
    <div class="relative w-full max-w-[1440px]">
      <span
        class="bg-primary-blue/10 absolute top-[60px] left-[-10px] h-[48px] w-[48px] rounded-full lg:left-[50px] lg:h-[80px] lg:w-[80px]"
      ></span>
      <span
        class="bg-primary-green/10 absolute top-[450px] right-[-20px] h-[40px] w-[40px] rounded-full md:top-[340px] md:right-[50px] lg:top-[450px] lg:h-[60px] lg:w-[60px] xl:top-[400px]"
      ></span>
      <span
        class="hidden lg:absolute lg:top-[200px] lg:right-[100px] lg:block lg:h-[48px] lg:w-[48px] lg:rounded-full lg:bg-[#A855F7]/10"
      ></span>
    </div>
    <OnlineLabel :is-green="true" class="gsapOpacity"
      >Available for opportunities</OnlineLabel
    >
    <div class="gsapOpacity flex flex-col gap-[16px] lg:gap-[24px]">
      <h1
        class="d-header-2xl text-primary-black md:d-header-2xl lg:d-header-3xl text-center"
      >
        My <span class="text-[#3977E7]">P</span>
        <span class="text-[#3880DB]">r</span>
        <span class="text-[#318ACC]">o</span>
        <span class="text-[#3798C2]">j</span>
        <span class="text-[#2F9FB4]">e</span>
        <span class="text-[#2EABA8]">c</span>
        <span class="text-[#25B398]">t</span>
        <span class="text-[#28BC91]">s</span>
      </h1>
      <p
        class="d-text-md text-secondary-dark lg:d-text-lg max-w-[600px] text-center lg:max-w-[744px]"
      >
        Showcasing innovative solutions built with modern technologies. Each
        project represents a unique challenge solved with creativity.
      </p>
    </div>

    <div
      class="gsapOpacity flex w-full flex-col justify-center gap-[12px] md:flex-row lg:gap-[24px]"
    >
      <div class="w-full md:max-w-[235px]">
        <BaseButton
          icon="rocket"
          @click="lenis?.scrollTo('#spotlightProjects')"
        >
          Explore Projects
        </BaseButton>
      </div>
      <div class="w-full md:max-w-[260px]">
        <BaseButton icon="download" :is-transparent="true" @click="downloadCV">
          Download Resume
        </BaseButton>
      </div>
    </div>
    <div
      class="text-primary-grey d-text-xs lg:d-text-sm gsapOpacity flex items-center justify-center gap-[24px]"
    >
      <div class="flex flex-col items-center justify-center">
        <span class="text-primary-blue d-bold-lg lg:d-bold-xl">10+</span>
        <span>Projects</span>
      </div>
      <div class="flex flex-col items-center justify-center">
        <span class="text-primary-green d-bold-lg lg:d-bold-xl">25+</span>
        <span>Technologies</span>
      </div>
      <div class="flex flex-col items-center justify-center">
        <span class="text-primary-purple d-bold-lg lg:d-bold-xl">100%</span>
        <span>Positive Feedback</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseButton from '@/components/buttons/BaseButton.vue';
import OnlineLabel from '@/components/labels/OnlineLabel.vue';
import { useDownload } from '@/composable/useDownload';

const lenis = useLenis();
const { downloadCV } = useDownload();
</script>
