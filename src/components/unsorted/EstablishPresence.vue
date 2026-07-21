<template>
  <section class="w-full bg-white py-25 px-4 sm:px-6 lg:px-8 border-t border-neutral-100" id="establish-presence">
    <div class="mx-auto max-w-4xl text-center flex flex-col items-center">
      
      <!-- R-E-D Logo Image -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
        class="flex items-center justify-center mb-8"
      >
        <img loading="lazy" :src="redDarkLogo" 
          alt="R-E-D Logo" 
          class="h-10 md:h-14 object-contain select-none"
          referrerpolicy="no-referrer"
        />
      </div>

      <!-- Heading -->
      <h2
        v-motion
        :initial="{ opacity: 0, y: 25 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 100 } }"
        class="font-poppins font-normal text-3xl sm:text-4xl lg:text-5xl text-neutral-800 leading-[1.1] mb-6 tracking-tight max-w-3xl"
      >
        Ready to establish your <br class="hidden sm:inline" /> digital presences?
      </h2>

      <!-- Subheading Description -->
      <p
        v-motion
        :initial="{ opacity: 0, y: 25 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
        class="font-poppins text-neutral-500 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mb-10"
      >
        Whether you're launching a new business or refreshing your brand, we'll help you create a digital presence that drives trust, engagement, and results.
      </p>

      <!-- Action Button -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 25 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 300 } }"
      >
        <button
          @click="$emit('cta-click')"
          class="font-poppins text-sm sm:text-base text-white bg-black btn-slide-in px-8 py-4 sm:px-10 sm:py-5 rounded-full shadow-lg shadow-[#1ca3c4]/10 hover:shadow-xl hover:shadow-[#1ca3c4]/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 font-medium lowercase"
        >
          schedule a meeting today
        </button>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import redDarkLogo from '~/assets/images/r-e-d-dark-logo.svg';

defineEmits(['cta-click']);
</script>
