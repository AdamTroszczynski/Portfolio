<template>
  <div class="flex flex-col items-center gap-[32px]">
    <BaseCard :is-red="true" header="The Challenge" icon="danger">
      <p class="text-primary-dark d-text-md">
        E-commerce businesses were struggling with fragmented data across
        multiple platforms, making it difficult to gain actionable insights.
        Store owners needed a unified dashboard that could consolidate sales
        data, customer behavior, inventory levels, and marketing performance in
        real-time.
      </p>
      <p class="text-primary-dark d-text-md">
        The existing solutions were either too complex for small businesses or
        lacked the depth of analysis required for data-driven decision making.
        There was a clear need for an intuitive yet powerful analytics platform
        that could scale with business growth.
      </p>
    </BaseCard>
    <BaseCard :is-green="true" header="The Solution" icon="idea">
      <p class="text-primary-dark d-text-md">
        I developed a comprehensive analytics dashboard that integrates with
        major e- commerce platforms, payment gateways, and marketing tools. The
        solution provides real-time insights through interactive visualizations,
        automated reports, and predictive analytics.
      </p>
      <div class="flex flex-col gap-[12px]">
        <SolutionEntry icon="stats">
          Real-time Data Visualization
        </SolutionEntry>
        <SolutionEntry icon="bot">AI-Powered Insights</SolutionEntry>
        <SolutionEntry icon="mobile">Mobile-First Design</SolutionEntry>
        <SolutionEntry icon="refresh">
          Multi-Platform Integration
        </SolutionEntry>
      </div>
    </BaseCard>

    <BaseCard :is-blue="true" header="Development Process" icon="settings">
      <ProcessEntry :number="1" header="Research & Planning">
        Conducted user interviews with 50+ e- commerce business owners.
      </ProcessEntry>
      <ProcessEntry :number="2" header="Design & Prototyping">
        Created wireframes and interactive prototypes focusing on UX.
      </ProcessEntry>
      <ProcessEntry :number="3" header="Development & Testing">
        Built using agile methodology with continuous integration.
      </ProcessEntry>
      <ProcessEntry :number="4" header="Launch & Optimization">
        Deployed with monitoring and gathered user feedback.
      </ProcessEntry>
    </BaseCard>

    <BaseCard :is-yellow="true" header="Results & Impact" icon="reward">
      <p class="text-primary-dark d-text-md">
        The dashboard has been adopted by over 500 e-commerce businesses,
        resulting in an average 40% increase in sales through better data-driven
        decision making.
      </p>
    </BaseCard>
  </div>
</template>

<script setup lang="ts">
import BaseCard from '@projects/smoczePrawko/components/aboutSection/BaseCard.vue';
import ProcessEntry from '@projects/smoczePrawko/components/aboutSection/ProcessEntry.vue';
import SolutionEntry from '@projects/smoczePrawko/components/aboutSection/SolutionEntry.vue';
</script>
