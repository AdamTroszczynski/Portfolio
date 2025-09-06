<template>
  <footer
    class="bg-primary-black flex flex-col gap-[32px] px-[16px] py-[48px] lg:gap-[48px] lg:px-[60px] lg:py-[64px] lg:pb-[33px] xl:px-[80px]"
  >
    <div class="flex flex-col gap-[32px] lg:flex-row">
      <div
        class="flex flex-col gap-[16px] lg:w-[500px] lg:gap-[24px] xl:w-[592px]"
      >
        <div class="flex items-center gap-[8px] lg:gap-[12px]">
          <div
            class="from-primary-blue to-primary-green flex h-[32px] w-[32px] items-center justify-center rounded-md bg-gradient-to-r lg:h-[40px] lg:w-[40px]"
          >
            <BaseIcon
              name="coding"
              color="primary-white"
              class="lg:scale-[120%]"
            />
          </div>
          <span class="d-header-xs text-primary-white lg:d-header-md">
            Adam Troszczyński
          </span>
        </div>
        <p
          class="text-primary-grey-stroke d-text-sm lg:d-text-md max-w-[442px]"
        >
          Passionate full-stack developer creating innovative web solutions with
          modern technologies. Specializing in Vue, Nuxt, and cloud-based
          applications.
        </p>
      </div>

      <div class="flex gap-[64px] lg:gap-[128px]">
        <div class="flex flex-col gap-[12px] lg:gap-[16px]">
          <span class="text-primary-white d-bold-xs lg:d-bold-sm">
            Quick Links
          </span>
          <ul class="flex flex-col gap-[8px] lg:gap-[12px]">
            <li class="text-primary-grey-stroke d-text-sm lg:d-text-md">
              <button class="cursor-pointer" @click="lenis?.scrollTo('#home')">
                Home
              </button>
            </li>
            <li class="text-primary-grey-stroke d-text-sm lg:d-text-md">
              <button
                class="cursor-pointer"
                @click="lenis?.scrollTo('#spotlightProjects')"
              >
                Projects
              </button>
            </li>
            <li class="text-primary-grey-stroke d-text-sm lg:d-text-md">
              <button
                class="cursor-pointer"
                @click="lenis?.scrollTo('#skills')"
              >
                Skills
              </button>
            </li>
            <li class="text-primary-grey-stroke d-text-sm lg:d-text-md">
              <button
                class="cursor-pointer"
                @click="lenis?.scrollTo('#experience')"
              >
                Experience
              </button>
            </li>
            <li class="text-primary-grey-stroke d-text-sm lg:d-text-md">
              <button
                class="cursor-pointer"
                @click="lenis?.scrollTo('#contact')"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>

        <div class="flex flex-col gap-[12px] lg:gap-[16px]">
          <span class="text-primary-white d-bold-xs lg:d-bold-sm">
            External Links
          </span>
          <ul class="flex flex-col gap-[8px] lg:gap-[12px]">
            <li class="text-primary-grey-stroke d-text-sm lg:d-text-md">
              <a
                href="https://github.com/AdamTroszczynski"
                target="_blank"
                class="flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-md bg-[#1F2937] lg:h-[40px] lg:w-[40px]"
              >
                <BaseIcon name="github" color="primary-white" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div
      class="border-primary-dark flex items-center justify-center border-t px-[12px] py-[25px] lg:justify-start lg:px-[0px] lg:py-[33px] lg:pb-[0px]"
    >
      <p class="text-primary-grey-stroke d-text-xs lg:d-text-sm">
        © 2025 Adam Troszczyński. All rights reserved. Built with passion and
        modern web technologies.
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import BaseIcon from '@/components/icons/BaseIcon.vue';

const lenis = useLenis();
</script>
