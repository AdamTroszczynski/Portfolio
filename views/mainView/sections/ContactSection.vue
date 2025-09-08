<template>
  <section id="contact" class="flex flex-col gap-[64px] px-[16px] py-[80px]">
    <BaseHeader header="Let's Work Together">
      <template #label>
        <BaseLabel :is-pink="true" icon="letter"> Get In Touch </BaseLabel>
      </template>
      <template #default>
        Ready to bring your ideas to life? Let's discuss your project and create
        something amazing together.
      </template>
    </BaseHeader>

    <div
      class="flex flex-col items-center justify-center gap-[32px] lg:flex-row"
    >
      <InfoCard
        :is-blue="true"
        header="Email Me"
        icon="biggerLetter"
        sub-header="adamtroszczynski@outlook.com"
        class="gsapFadeIn"
      >
        <template #default>
          Drop me a line and I'll get back to you within 24 hours
        </template>

        <template #button>
          <BaseButton
            bg-color="primary-blue"
            icon="send"
            class="max-w-[161px]"
            @click="openMail"
          >
            Send Email
          </BaseButton>
        </template>
      </InfoCard>
      <InfoCard
        :is-green="true"
        header="Call Me"
        icon="phone"
        sub-header="+48 882 416 797"
        class="gsapFadeIn"
      >
        <template #default> Available for calls 24/7 </template>

        <template #button>
          <BaseButton
            bg-color="primary-green"
            icon="smallerPhone"
            class="max-w-[161px]"
            @click="openCall"
          >
            Call Now
          </BaseButton>
        </template>
      </InfoCard>
    </div>
  </section>
</template>

<script setup lang="ts">
import InfoCard from '@mainView/components/contactSection/InfoCard.vue';

import BaseButton from '@/components/buttons/BaseButton.vue';
import BaseHeader from '@/components/headers/BaseHeader.vue';
import BaseLabel from '@/components/labels/BaseLabel.vue';

const openMail = () => {
  window.location.href = 'mailto:adamtroszczynski@outlook.com';
};

const openCall = () => {
  window.location.href = 'tel:+48882416797';
};
</script>
