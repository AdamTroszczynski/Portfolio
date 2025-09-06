<template>
  <div
    class="border-primary-dark-white from-secondary-dark-white relative flex w-full max-w-[358px] flex-col gap-[16px] overflow-hidden rounded-2xl border bg-gradient-to-r via-[#EFF6FF] to-[#F0FDF4] p-[25px] lg:max-w-[716px] lg:gap-[24px] lg:p-[33px]"
  >
    <span
      class="from-primary-blue/10 to-primary-green/10 absolute top-[-40px] right-[-40px] block h-[80px] w-[80px] rounded-full bg-gradient-to-r lg:top-[-60px] lg:right-[-60px] lg:h-[128px] lg:w-[128px]"
    ></span>
    <div class="flex items-center gap-[16px] lg:gap-[24px]">
      <div
        class="from-primary-blue to-primary-green flex h-[48px] w-[48px] items-center justify-center rounded-xl bg-gradient-to-r lg:h-[64px] lg:w-[64px]"
      >
        <BaseIcon :name="icon" color="primary-white" class="lg:scale-[160%]" />
      </div>
      <div class="flex flex-col gap-[8px]">
        <h3 class="text-primary-black d-header-sm lg:d-header-xl">
          {{ header }}
        </h3>
        <span
          class="from-primary-blue to-primary-green block h-[4px] w-[48px] rounded-full bg-gradient-to-r lg:w-[64px]"
        ></span>
      </div>
    </div>
    <div class="flex flex-col gap-[12px] lg:gap-[14px]">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IconsName } from '@/components/components.types';
import BaseIcon from '@/components/icons/BaseIcon.vue';

defineProps({
  icon: {
    type: String as PropType<IconsName>,
    required: true,
  },
  header: {
    type: String,
    required: true,
  },
});
</script>
