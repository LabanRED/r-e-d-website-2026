<template>
  <div class="w-full px-8 mx-auto max-w-[1600px] mb-16 relative z-20">
    <div
      v-motion
      :initial="{ opacity: 0, y: 30 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      class="w-auto bg-white rounded-[24px] sm:rounded-[32px] py-8 px-6 md:px-16 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-4"
      style="box-shadow: 0px 2px 80px rgba(24, 39, 75, 0.12);"
    >
      <div v-for="(stat, idx) in stats" :key="idx" class="flex items-center gap-4 w-full md:w-auto justify-center md:justify-start">
        <!-- Number with Blue Plus -->
        <div class="flex items-baseline font-poppins">
          <span class="text-3xl sm:text-4xl lg:text-[42px] font-bold text-neutral-900 tracking-tight">
            <AnimatedCounter :text="stat.number" />
          </span>
          <span class="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#1ca3c4] ml-1">
            +
          </span>
        </div>

        <!-- Label text to the right -->
        <div class="flex flex-col text-left font-poppins">
          <span class="text-neutral-500 text-xs sm:text-sm font-medium leading-tight">
            {{ stat.labelLine1 }}
          </span>
          <span class="text-neutral-500 text-xs sm:text-sm font-medium leading-tight">
            {{ stat.labelLine2 }}
          </span>
        </div>

        <!-- Divider for desktop, only between items -->
        <div v-if="idx < stats.length - 1" class="hidden md:block h-12 w-[1px] bg-neutral-100 ml-8 lg:ml-12" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AnimatedCounter from './AnimatedCounter.vue';

const stats = [
  {
    number: '2Mil',
    labelLine1: 'Leads',
    labelLine2: 'generated',
  },
  {
    number: '500',
    labelLine1: 'Happy',
    labelLine2: 'customers',
  },
  {
    number: 'R4Mil',
    labelLine1: 'Monthly',
    labelLine2: 'ad spend',
  },
];
</script>
