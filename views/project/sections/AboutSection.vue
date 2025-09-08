<template>
  <section
    id="about"
    class="flex flex-col gap-[96px] px-[16px] py-[48px] xl:flex-row xl:justify-center xl:gap-[32px] xl:px-[0xp] 2xl:gap-[48px]"
  >
    <ProcessGroup />
    <TechnicalGroup />
  </section>
</template>

<script setup lang="ts">
import ProcessGroup from '@project/components/aboutSection/ProcessGroup.vue';
import TechnicalGroup from '@project/components/aboutSection/TechnicalGroup.vue';
</script>
