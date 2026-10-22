<template>
  <section class="relative mt-8 lg:mt-12 pb-12 sm:pb-16" id="hero">
    <!-- Note: Nuxt automatically injects link rel="preload" if configured, but we can also use useHead for this -->
    <div class="mx-auto lg:w-[95%] max-w-[1600px] px-4 sm:px-6 lg:px-0">

      <!-- NEW DESKTOP HEADING (Above Banner) -->
      <div class="hidden lg:flex flex-col items-center text-center mt-4">
        <h1 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins font-medium text-[3.5rem] leading-[1.15] tracking-tight mb-4 text-neutral-900">
          <span class="text-primary">Conversion</span> Based,<br />
          Results Driven Marketing
        </h1>
        <p class="font-poppins text-neutral-500 text-lg leading-relaxed max-w-2xl mb-8">
          Over <span class="text-primary font-semibold">500+</span> satisfied clients across South Africa trust us to manage their monthly lead generation and Ad spend.
        </p>
        <button
          @click="$emit('cta-click')"
          class="btn-primary text-xs sm:text-[15px] px-8 py-3.5"
        >
          Schedule A Meeting Today
        </button>
      </div>

      <!-- DESKTOP LAYOUT (lg and up) -->
      <div class="hidden lg:block relative w-full rounded-[40px] overflow-hidden mt-8">
        <!-- Background Image Layer -->
        <img
          :src="heroBanner"
          alt="R-E-D Solutions Hero Banner"
          class="w-full h-auto block select-none pointer-events-none"
          fetchpriority="high"
          loading="eager"
        />

        <!-- Content Overlaid on Desktop with left spacing -->
        <div class="absolute inset-y-0 left-0 w-[46%] lg:w-[42%] max-w-[480px] xl:max-w-[520px] flex flex-col justify-center items-start pl-10 lg:pl-14 xl:pl-20 pr-2 z-10 text-left">
          <h1 class="font-poppins font-medium text-3xl lg:text-[2.25rem] xl:text-[3rem] lg:leading-[1.12] mb-4 text-neutral-900">
            <span v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut', delay: 800 } }" class="block">Designed For</span>
            <span v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut', delay: 1000 } }" class="block">Businesses Of</span>
            <span v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut', delay: 1200 } }" class="block">All Sizes.</span>
          </h1>

          <p class="font-poppins font-normal text-neutral-700 text-xs sm:text-sm lg:text-[14px] xl:text-[15px] leading-relaxed max-w-sm xl:max-w-md mb-6">
            From early stage start-ups to industry leading corporations, R-E-D is the choice of modern CEO's and CFO's. Make us your marketing partner and maximise your growth and results today!
          </p>

          <button
            @click="$emit('cta-click')"
            class="btn-primary text-xs sm:text-sm lg:text-[15px] py-3.5 px-8"
          >
            Schedule A Meeting Today
          </button>
        </div>
      </div>

      <!-- MOBILE & TABLET LAYOUT (below lg) - Stacked Vertically, Center-aligned -->
      <div class="flex lg:hidden w-full flex-col items-center text-center px-4">
        <!-- Mobile Heading with Conversion highlighted in cyan -->
        <h1 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins font-medium text-3xl sm:text-[2.25rem] md:text-5xl leading-tight tracking-tight mb-4">
          <span class="text-primary">Conversion</span> Based,<br />
          Results Driven Marketing
        </h1>

        <!-- Mobile Description with 500+ highlighted -->
        <p class="font-poppins text-neutral-600 text-sm sm:text-base leading-relaxed max-w-xl mb-6">
          Over <span class="text-primary font-semibold">500+</span> satisfied clients across South Africa trust us to manage their monthly lead generation and Ad spend.
        </p>

        <!-- Mobile Button: outlined pill shape transitioning to filled cyan on hover/click -->
        <button
          @click="$emit('cta-click')"
          class="btn-primary tracking-widest py-3.5 px-8 mb-10 w-full sm:w-auto text-xs sm:text-base"
        >
          Schedule A Meeting Today
        </button>

        <!-- Mobile Image: object-contained, rounded corners, no unnecessary padding -->
        <div class="w-full max-w-lg sm:max-w-xl md:max-w-2xl overflow-hidden">
          <img
            :src="heroMobileBanner"
            alt="R-E-D Solutions Hero Mobile Banner"
            referrerpolicy="no-referrer"
            class="w-full h-auto object-contain mx-auto"
            fetchpriority="high"
            loading="eager"
          />
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { useHead } from '#imports';
import heroBanner from '~/assets/images/r-e-d-landing-page-hero-banner.png';
import heroMobileBanner from '~/assets/images/r-e-d-landing-page-hero-mobile-banner.png';

useHead({
  link: [
    { rel: 'preload', as: 'image', href: heroBanner, media: '(min-width: 1024px)', fetchpriority: 'high' },
    { rel: 'preload', as: 'image', href: heroMobileBanner, media: '(max-width: 1023px)', fetchpriority: 'high' }
  ]
});

defineEmits(['cta-click']);
</script>
