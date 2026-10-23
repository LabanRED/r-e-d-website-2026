<template>
  <section class="w-full py-16 sm:py-24 bg-[#fafafa]" id="red-process">
    <div class="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
      
      <!-- Top Header Block -->
      <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16">
        <!-- Left Title -->
        <div>
          <span class="font-poppins text-sm sm:text-base font-normal text-primary tracking-wide block mb-3">
            Why us?
          </span>
          <h2 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins font-medium text-4xl sm:text-5xl md:text-[3.5rem] text-neutral-900 tracking-tight leading-none">
            The R<span class="text-primary">-</span>E<span class="text-primary">-</span>D Process
          </h2>
        </div>

        <!-- Right Text & CTA -->
        <div class="max-w-xl lg:mt-6">
          <p class="font-poppins text-neutral-600 text-sm sm:text-base leading-relaxed mb-6">
            So what separates R-E-D from the rest of the crowd? Besides our epic track record, vast expertise and our measurable results, it's the way we do things at R-E-D
          </p>
          <button
            @click="$emit('cta-click')"
            class="btn-primary tracking-widest py-4 px-10 text-xs sm:text-base"
          >
            Schedule A Meeting Today
          </button>
        </div>
      </div>

      <!-- 5-Step Process Cards Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6 items-start">
        <div
          v-for="(step, index) in steps"
          :key="index"
          @mouseenter="activeIdx = index"
          @mouseleave="activeIdx = null"
          @click="toggleCard(index)"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: index * 60 } }"
          class="group relative bg-white rounded-[22px] transition-all duration-300 ease-out cursor-pointer overflow-hidden border border-neutral-100/80 p-6 sm:p-7"
          :class="activeIdx === index
            ? 'shadow-[0_20px_45px_rgba(0,0,0,0.12)] ring-1 ring-primary/20 min-h-[510px] sm:min-h-[540px]'
            : 'shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_38px_rgba(0,0,0,0.09)] min-h-[250px] sm:min-h-[270px] hover:-translate-y-1'"
        >
          <!-- Inactive / Default View -->
          <div
            class="flex flex-col justify-between h-full min-h-[190px] sm:min-h-[200px] transition-all duration-200 ease-out"
            :class="activeIdx === index
              ? 'opacity-0 pointer-events-none absolute inset-x-6 top-6 sm:inset-x-7 sm:top-7 -translate-y-2'
              : 'opacity-100 translate-y-0'"
          >
            <div>
              <!-- Number -->
              <div class="font-poppins font-medium text-3xl sm:text-4xl text-neutral-300 select-none tracking-tight leading-none mb-7 sm:mb-8">
                {{ step.number }}
              </div>

              <!-- Icon Container -->
              <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-primary flex items-center justify-center text-white shadow-sm select-none transition-transform duration-300 group-hover:scale-105">
                <Star class="w-5 h-5 fill-current text-white" />
              </div>
            </div>

            <!-- Bottom Area: Title -->
            <div class="mt-8">
              <h3 class="font-poppins font-medium text-[17px] sm:text-[18px] text-neutral-800 leading-snug whitespace-pre-line">
                {{ step.title }}
              </h3>
            </div>
          </div>

          <!-- Active / Hovered View -->
          <div
            class="flex flex-col h-full transition-all duration-300 ease-out"
            :class="activeIdx === index
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 pointer-events-none absolute inset-x-6 top-6 sm:inset-x-7 sm:top-7 translate-y-2'"
          >
            <!-- Top Image -->
            <div class="w-full h-28 sm:h-30 overflow-hidden rounded-xl mb-4 shrink-0">
              <img
                loading="lazy"
                :src="step.image"
                :alt="step.title.replace('\n', ' ')"
                referrerpolicy="no-referrer"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <!-- Active Title -->
            <h3 class="font-poppins font-medium text-[17px] sm:text-[19px] text-neutral-900 leading-snug mb-3 tracking-tight whitespace-pre-line">
              {{ step.activeTitle }}
            </h3>

            <!-- Description Paragraphs -->
            <div class="space-y-2.5 font-poppins text-neutral-600 text-xs sm:text-[12px] leading-[1.6]">
              <p v-for="(p, pIdx) in step.paragraphs" :key="pIdx" class="whitespace-pre-line">
                {{ p }}
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Star } from 'lucide-vue-next';
import respectImg from '~/assets/images/mutual-respect-is-key.webp';

defineEmits(['cta-click']);

const activeIdx = ref<number | null>(null);

const toggleCard = (index: number) => {
  activeIdx.value = activeIdx.value === index ? null : index;
};

const steps = [
  {
    number: '01.',
    title: 'Turnaround\nTimes',
    activeTitle: 'Turnaround\nTimes',
    image: respectImg,
    paragraphs: [
      "Refined systems and disciplined processes allow R-E-D to operate outside industry norms when it comes to turnaround times. Brief it early, get it back the same day. From design to live, fast.",
      "Wherever possible, every R-E-D service and product is held to our turnaround standards not the industry's."
    ]
  },
  {
    number: '02.',
    title: 'Integrated\nSolutions',
    activeTitle: 'Integrated\nSolutions',
    image: respectImg,
    paragraphs: [
      "Your business doesn't need more systems, or more fragmentation. Every R-E-D service and product is designed to work together and integrate into your business.",
      "Leads generated flow directly into your preferred systems, reducing missed emails, disconnected processes and leads going cold. One connected ecosystem. From ours, into yours."
    ]
  },
  {
    number: '03.',
    title: 'Custom\nSLAs',
    activeTitle: 'Custom SLAs',
    image: respectImg,
    paragraphs: [
      "No two businesses operate exactly the same way. Your service agreement shouldn't pretend they do.\nWe're flexible where it matters and disciplined where it counts.",
      "Each package and client-specific agreement unlocks a defined set of SLAs, built around the operational requirements of your business. Clear expectations. Clear accountability. Built around how you work."
    ]
  },
  {
    number: '04.',
    title: 'Access to\nIndustry Experts',
    activeTitle: 'Access to\nIndustry Experts',
    image: respectImg,
    paragraphs: [
      "They say it takes 10,000 disciplined hours to become an expert in a field. You can spend those hours practising badly. We didn't. With more than 50,000 hours dedicated to what we do and how we do it you're working with people who understand the disciplines behind marketing, advertising, websites, lead management, creative and digital operations.",
      "Not just people who know the platforms. People who understand how the pieces work together."
    ]
  },
  {
    number: '05.',
    title: 'Operational\nTransparency',
    activeTitle: 'Operational\nTransparency',
    image: respectImg,
    paragraphs: [
      "In a world full of noise, excuses and broken accountability, we choose transparency. If we make a mistake, we tell you. If something isn't working, we don't hide it behind a report.",
      "We explain what happened, what it means and what we're doing about it. We operate as an extension of your business. You deserve to know when things aren't going to plan just as much as when they are. Accountability isn't something we report on. It's how we operate."
    ]
  },
];
</script>
