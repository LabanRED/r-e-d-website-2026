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
          class="mt-3 text-3xl sm:text-5xl lg:text-5xl font-semibold tracking-tight text-neutral-950 leading-[1.1]"
        >
          Smarter conversations.<br />
          Stronger conversions.
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
          <h3 class="font-sans text-2xl sm:text-[28px] lg:text-2xl font-semibold text-neutral-950 leading-snug tracking-tight">
            Turn every lead into a meaningful interaction with Post<span class="text-[#2ca8cb]">X</span>.
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
            <!-- Replace a with NuxtLink if it points to a route, but this is an anchor hash to #postx which acts like a link. We can keep it as an anchor or NuxtLink -->
            <NuxtLink
              to="#postx"
              class="inline-block text-center text-sm sm:text-base text-white bg-black hover:bg-[#1ca3c4] px-7 py-3.5 rounded-full active:scale-95 transition-all duration-300 font-poppins font-medium lowercase"
            >
              Explore PostX and see how it works.
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
