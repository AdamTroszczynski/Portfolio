<template>
  <div
    class="from-primary-blue via-primary-blue to-primary-green relative flex w-full max-w-[358px] flex-col gap-[12px] rounded-2xl bg-gradient-to-r p-[20px] lg:max-w-[716px] lg:gap-[16px] lg:p-[24px] 2xl:max-w-[467px]"
  >
    <span
      class="bg-primary-white/10 absolute bottom-[-20px] left-[-20px] block h-[48px] w-[48px] rounded-full lg:bottom-[-53px] lg:left-[-53px] lg:h-[96px] lg:w-[96px]"
    ></span>
    <span
      class="bg-primary-white/10 absolute top-[-20px] right-[-20px] block h-[48px] w-[48px] rounded-full lg:top-[-53px] lg:right-[-53px] lg:h-[96px] lg:w-[96px]"
    ></span>
    <div class="flex items-center gap-[12px]">
      <div
        class="bg-primary-white/20 flex h-[32px] w-[32px] items-center justify-center rounded-lg lg:h-[40px] lg:w-[40px]"
      >
        <BaseIcon :name="icon" color="primary-white" class="lg:scale-[130%]" />
      </div>
      <h3 class="text-primary-white d-header-xs lg:d-header-sm">
        {{ header }}
      </h3>
    </div>

    <div class="flex flex-col gap-[8px] lg:gap-[12px]">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseIcon from '@/components/icons/BaseIcon.vue';
import type { IconsName } from '~/components/components.types';

defineProps({
  header: {
    type: String,
    required: true,
  },
  icon: {
    type: String as PropType<IconsName>,
    required: true,
  },
});
</script>
