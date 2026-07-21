<template>
  <section class="w-full py-16 sm:py-24 bg-[#fafafa]" id="red-process">
    <div class="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
      
      <!-- Top Header Block -->
      <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16">
        <!-- Left Title -->
        <div>
          <span class="font-poppins text-sm sm:text-base font-normal text-[#1ca3c4] tracking-wide block mb-3">
            Why us?
          </span>
          <h2 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins font-semibold text-4xl sm:text-5xl md:text-[3.5rem] text-neutral-900 tracking-tight leading-none">
            The R<span class="text-[#1ca3c4]">-</span>E<span class="text-[#1ca3c4]">-</span>D process
          </h2>
        </div>

        <!-- Right Text & CTA -->
        <div class="max-w-xl lg:mt-6">
          <p class="font-poppins text-neutral-600 text-sm sm:text-base leading-relaxed mb-6">
            So what separates R-E-D from the rest of the crowd? Besides our epic track record, vast expertise and our measurable results, it's the way we do things at R-E-D
          </p>
          <button
            @click="$emit('cta-click')"
            class="inline-block font-poppins text-xs tracking-widest text-white bg-black btn-slide-in rounded-full py-4 px-10 hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-md font-medium lowercase"
          >
            schedule a meeting today
          </button>
        </div>
      </div>

      <!-- 5-Step Process Cards Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-start">
        <div
          v-for="(step, index) in steps"
          :key="index"
          @mouseenter="hoveredIdx = index"
          @mouseleave="hoveredIdx = null"
          @click="hoveredIdx = hoveredIdx === index ? null : index"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: index * 50 } }"
          class="relative bg-white rounded-4xl transition-all duration-300 border border-neutral-100/50 cursor-pointer overflow-hidden flex flex-col"
          :class="hoveredIdx === index ? 'p-6 shadow-xl ring-1 ring-[#1ca3c4]/10 min-h-105' : 'p-8 min-h-70 justify-between shadow-sm hover:shadow-md'"
        >
          <transition
            mode="out-in"
            enter-active-class="transition duration-200 ease-out"
            leave-active-class="transition duration-150 ease-in"
            enter-from-class="opacity-0 translate-y-3"
            enter-to-class="opacity-100 translate-y-0"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-3"
          >
            <!-- Active State -->
            <div v-if="hoveredIdx === index" class="flex flex-col h-full">
              <!-- Top Image -->
              <div class="w-full h-36 sm:h-40 overflow-hidden rounded-2xl mb-5">
                <img loading="lazy" :src="step.image"
                  :alt="step.activeTitle"
                  referrerpolicy="no-referrer"
                  class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <!-- Active Title -->
              <h3 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins font-semibold text-neutral-900 text-lg sm:text-xl leading-snug mb-3 tracking-tight">
                {{ step.activeTitle }}
              </h3>

              <!-- Description Paragraph -->
              <p class="font-poppins text-neutral-600 text-xs sm:text-[13px] leading-relaxed">
                {{ step.description }}
              </p>
            </div>
            
            <!-- Inactive State -->
            <div v-else class="flex flex-col justify-between min-h-54">
              <!-- Top right large faint number -->
              <div class="absolute top-6 right-8 font-poppins font-medium text-4xl sm:text-5xl text-neutral-300 select-none">
                {{ step.number }}
              </div>

              <!-- Icon Container -->
              <div class="mt-8">
                <div class="w-12 h-12 rounded-xl bg-[#1ca3c4] flex items-center justify-center text-white shadow-sm select-none">
                  <Star class="w-5 h-5 fill-current text-white" />
                </div>
              </div>

              <!-- Card Label / Title -->
              <div class="mt-8">
                <h3 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins font-medium text-xl sm:text-2xl text-neutral-800 leading-tight">
                  {{ step.title }}
                </h3>
              </div>
            </div>
          </transition>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Star } from 'lucide-vue-next';

import respectImg from '~/assets/images/mutual-respect-is-key.webp';
import supportImg from '~/assets/images/support-where-you-need-it.webp';
import understandingImg from '~/assets/images/we-have-mutual-understanding.webp';
import strategyImg from '~/assets/images/what-works-best.webp';
import budgetsImg from '~/assets/images/flexible-budgets-available.webp';

defineEmits(['cta-click']);

const hoveredIdx = ref<number | null>(null);

const steps = [
  {
    number: '01.',
    title: 'Respect',
    activeTitle: 'Mutual respect is key',
    description: "Most agencies focus all their attention on the \"big shots\" and leave the smaller spenders in the dark. At R-E-D our attention is divided equally among all our clients. We treat all our clients with the respect they deserve.",
    image: respectImg,
  },
  {
    number: '02.',
    title: 'Support',
    activeTitle: 'Support where you need it',
    description: "At R-E-D you will have only one point of contact for all your digital needs. From strategy formulation to the leads rolling in, our DMM's will be your sole point of contact and support throughout the entire process.",
    image: supportImg,
  },
  {
    number: '03.',
    title: 'Understanding',
    activeTitle: 'We have a mutual understanding',
    description: "Once we partner up, we initiate an analysis of your businesses environment and needs in order to craft a fully tailored digital marketing plan. We do this so that we can fully understand your objectives and help you reach them.",
    image: understandingImg,
  },
  {
    number: '04.',
    title: 'What works best',
    activeTitle: 'What works best',
    description: "After we've crafted your strategy we will test various combinations, platforms and channels to discover what works best for your brand, your objectives and budget.",
    image: strategyImg,
  },
  {
    number: '05.',
    title: 'Flexible budgets',
    activeTitle: 'Flexible budgets available',
    description: "R-E-D is unique with its options of short burst campaigns. Most agencies will require you to use massive budgets over long periods of time, but at R-E-D we can run your campaigns on low budgets for short periods of time.",
    image: budgetsImg,
  },
];
</script>
