<template>
  <section class="relative bg-white sm:pt-24 text-neutral-900 border-b border-neutral-100" id="postx">
    <div class="mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12">

      <!-- Centered Top Header -->
      <div class="text-center mb-16 md:mb-20">
        <span
          v-motion
          :initial="{ opacity: 0, y: 15 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
          class="block text-base font-semibold tracking-wider text-[#2ca8cb] uppercase"
        >
          PostX
        </span>
        <h2
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 100 } }"
          class="mt-3 font-poppins font-medium text-3xl sm:text-5xl lg:text-5xl tracking-tight text-neutral-950 leading-[1.1]"
        >
          Smarter Conversations.<br />
          Stronger Conversions.
        </h2>
      </div>

      <!-- Two Column Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        <!-- Left Column: Content -->
        <div
          v-motion
          :initial="{ opacity: 0, x: -30 }"
          :visible-once="{ opacity: 1, x: 0, transition: { duration: 700 } }"
          class="w-full md:w-175 lg:w-200 lg:col-span-5 space-y-6 flex flex-col items-start"
        >
          <h3 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins font-medium text-2xl sm:text-[28px] lg:text-2xl text-neutral-950 leading-snug tracking-tight">
            Turn Every Lead Into A Meaningful Interaction With Post<span class="text-[#2ca8cb]">X</span>.
          </h3>

          <p class="font-sans text-base sm:text-[17px] text-neutral-600 font-normal leading-relaxed">
            Your all-in-one inbox system powered by intelligent automation. Seamlessly manage, respond to, and nurture leads across platforms while scheduling content that keeps your brand consistently active.
          </p>

          <p class="font-sans text-base sm:text-[17px] text-neutral-600 font-normal leading-relaxed">
            With AI-driven insights and real-time engagement tools, Post<span class="text-[#2ca8cb]">X</span> helps you stay ahead, respond faster, and convert more.
          </p>

          <p class="font-sans text-base sm:text-[17px] font-bold text-neutral-900 tracking-tight">
            Ready to streamline your communication and boost results?
          </p>

          <div class="pt-2">
            <NuxtLink
              to="/postx"
              class="btn-primary text-xs sm:text-base px-8 py-3.5"
            >
              Explore PostX And See How It Works.
            </NuxtLink>
          </div>
        </div>

        <!-- Right Column: Interactive Mockup in a soft gradient card -->
        <div
          v-motion
          :initial="{ opacity: 0, x: 30 }"
          :visible-once="{ opacity: 1, x: 0, transition: { duration: 700, delay: 150 } }"
          class="lg:col-span-7 w-full flex justify-end"
        >
          <div class="relative w-full md:w-175 rounded-4xl flex items-right justify-right p-4 sm:p-8 lg:p-10 overflow-hidden">
            <div
              v-motion
              :hovered="{ y: -6, transition: { duration: 400, ease: 'easeOut' } }"
              class="w-full h-full flex items-center justify-center"
            >
              <img loading="lazy" :src="postXMockup"
                alt="PostX Platform Interface"
                class="w-full h-auto object-contain select-none scale-[1.03] md:scale-105"
                referrerpolicy="no-referrer"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import postXMockup from '~/assets/images/postx-laptop-mockup.webp';

defineEmits(['cta-click']);
</script>
