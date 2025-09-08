<template>
  <div
    class="from-primary-blue via-primary-blue to-primary-green flex w-full max-w-[358px] items-center justify-center rounded-2xl bg-gradient-to-r p-[4px] lg:max-w-[467px]"
  >
    <div
      class="bg-primary-white flex w-full flex-col items-center gap-[43px] rounded-2xl p-[24px] lg:gap-[56px] lg:p-[32px]"
    >
      <div class="flex flex-col items-center gap-[22px] lg:gap-[30px]">
        <div
          class="border-primary-white shadow-base-lg relative h-[96px] w-[96px] rounded-full border-[4px] bg-[url('/photos/ja.jpg')] bg-cover bg-[0px] lg:h-[128px] lg:w-[128px]"
        >
          <div
            class="shadow-base-lg lg:d-semibold-sm border-primary-dark-white bg-primary-white d-semibold-xs text-primary-dark absolute bottom-[-10px] left-1/2 flex -translate-x-1/2 transform items-center justify-center gap-[3px] rounded-full border px-[9px] py-[5px] lg:gap-[10px] lg:px-[13px]"
          >
            <span
              class="bg-primary-green min-h-[6px] min-w-[6px] rounded-full lg:min-h-[8px] lg:min-w-[8px]"
            ></span>
            Available
          </div>

          <div
            class="from-primary-green to-primary-blue absolute top-[-5px] right-[-5px] flex h-[32px] w-[32px] items-center justify-center rounded-full bg-gradient-to-r lg:h-[48px] lg:w-[48px]"
          >
            <BaseIcon
              name="coding"
              color="primary-white"
              class="lg:scale-[130%]"
            />
          </div>
        </div>
        <h3 class="d-header-sm text-primary-black lg:d-header-md">
          Adam Troszczyński
        </h3>
      </div>

      <div class="flex w-full flex-col gap-[16px] lg:gap-[30px]">
        <div class="flex w-full gap-[8px] lg:gap-[12px]">
          <div
            class="bg-secondary-dark-white flex w-full flex-col items-center justify-center gap-[2px] rounded-lg p-[8px] lg:gap-[4px] lg:p-[15px]"
          >
            <BaseIcon
              name="location"
              color="primary-blue"
              class="lg:scale-[130%]"
            />
            <h4 class="d-semibold-xs text-primary-black lg:d-semibold-sm">
              Walbrzych
            </h4>
            <p class="text-primary-grey d-text-xs lg:d-text-sm">Poland</p>
          </div>

          <div
            class="bg-secondary-dark-white flex w-full flex-col items-center justify-center gap-[2px] rounded-lg p-[8px] lg:gap-[4px] lg:p-[15px]"
          >
            <BaseIcon
              name="calendar"
              color="primary-green"
              class="lg:scale-[130%]"
            />
            <h4 class="d-semibold-xs text-primary-black lg:d-semibold-sm">
              2+ Years
            </h4>
            <p class="text-primary-grey d-text-xs lg:d-text-sm">Experience</p>
          </div>
        </div>
        <div class="flex justify-center gap-[8px] lg:gap-[12px]">
          <a
            href="https://github.com/AdamTroszczynski"
            target="_blank"
            class="from-primary-dark-white to-secondary-grey-stroke flex h-[32px] w-[32px] items-center justify-center rounded-lg bg-gradient-to-r lg:h-[40px] lg:w-[40px]"
          >
            <BaseIcon
              name="github"
              color="primary-black"
              class="lg:scale-[110%]"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseIcon from '@/components/icons/BaseIcon.vue';
</script>
