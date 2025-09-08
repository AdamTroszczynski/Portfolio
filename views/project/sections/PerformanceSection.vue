<template>
  <section
    id="performance"
    class="bg-secondary-dark-white flex flex-col items-center gap-[32px] px-[16px] py-[48px]"
  >
    <BaseHeader header="Technical Performance">
      <template #label>
        <BaseLabel icon="performance" :is-purple="true">Performance</BaseLabel>
      </template>
      <template #default>
        Key performance indicators and technical achievements of the dashboard
        application.
      </template>
    </BaseHeader>
    <div class="flex w-full flex-wrap justify-center gap-[16px] lg:gap-[32px]">
      <BaseCard
        icon="rocket"
        :is-green="true"
        :header="projectStore.project.performance.performance"
        sub-header="Performance"
        :value="98"
      >
        Page Speed
      </BaseCard>
      <BaseCard
        icon="clock"
        :is-purple="true"
        :header="projectStore.project.performance.loadTime"
        sub-header="Load Time"
        :value="95"
      >
        First Paint
      </BaseCard>
      <BaseCard
        icon="shield"
        :is-orange="true"
        :header="projectStore.project.performance.accessibility"
        sub-header="Accessibility"
        :value="100"
      >
        SSL Labs
      </BaseCard>
      <BaseCard
        icon="people"
        :is-pink="true"
        :header="projectStore.project.performance.seo"
        sub-header="SEO"
        :value="100"
      >
        12 months
      </BaseCard>
      <SimpleCard
        icon="biggerCoding"
        header="Code Quality"
        class="mx-[22px] lg:mx-[0px]"
      >
        <MetricEntry header="Test Coverage">
          {{ projectStore.project.performance.codeQuality.testCoverage }}
        </MetricEntry>
        <MetricEntry header="Maintainability">
          {{ projectStore.project.performance.codeQuality.maintainability }}
        </MetricEntry>
        <MetricEntry header="Technical Debt">
          {{ projectStore.project.performance.codeQuality.technicalDebt }}
        </MetricEntry>
        <MetricEntry header="Documentation">
          {{ projectStore.project.performance.codeQuality.documentation }}
        </MetricEntry>
      </SimpleCard>
      <SimpleCard
        v-if="projectStore.project.performance.userMetrics"
        icon="chart"
        header="User Metrics"
        class="mx-[22px] lg:mx-[0px]"
      >
        <MetricEntry :text-blue="true" header="Daily Active Users">
          {{ projectStore.project.performance.userMetrics.dailyActiveUser }}
        </MetricEntry>
        <MetricEntry :text-blue="true" header="Session Duration">
          {{ projectStore.project.performance.userMetrics.sessionDuration }}
        </MetricEntry>
        <MetricEntry :text-blue="true" header="Bounce Rate">
          {{ projectStore.project.performance.userMetrics.bounceRate }}
        </MetricEntry>
        <MetricEntry :text-blue="true" header="User Satisfaction">
          {{ projectStore.project.performance.userMetrics.userSatisfaction }}
        </MetricEntry>
      </SimpleCard>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseCard from '@project/components/performanceSection/BaseCard.vue';
import MetricEntry from '@project/components/performanceSection/MetricEntry.vue';
import SimpleCard from '@project/components/performanceSection/SimpleCard.vue';
import { useProjectStore } from '@project/projectStore';

import BaseHeader from '@/components/headers/BaseHeader.vue';
import BaseLabel from '@/components/labels/BaseLabel.vue';

const projectStore = useProjectStore();
</script>
