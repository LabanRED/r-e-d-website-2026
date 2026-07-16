<template>
  <section class="relative mt-8 lg:mt-12 pb-12 sm:pb-16" id="hero">
    <!-- Note: Nuxt automatically injects link rel="preload" if configured, but we can also use useHead for this -->
    <div class="mx-auto lg:w-[95%] max-w-[1600px] px-4 sm:px-6 lg:px-0">

      <!-- NEW DESKTOP HEADING (Above Banner) -->
      <div class="hidden lg:flex flex-col items-center text-center mt-4">
        <h1 class="font-poppins font-semibold text-[3.5rem] leading-[1.15] tracking-tight mb-4 text-neutral-900">
          <span class="text-[#1ca3c4]">Conversion</span> based,<br />
          results driven marketing
        </h1>
        <p class="font-poppins text-neutral-500 text-lg leading-relaxed max-w-2xl mb-8">
          Over <span class="text-[#1ca3c4] font-semibold">500+</span> satisfied clients across South Africa trust us to manage their monthly lead generation and Ad spend.
        </p>
        <button
          @click="$emit('cta-click')"
          class="font-poppins font-medium text-[15px] text-white bg-black hover:bg-[#1ca3c4] rounded-full px-8 py-3 transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-md lowercase"
        >
          schedule a meeting today
        </button>
      </div>

      <!-- DESKTOP LAYOUT (lg and up) -->
      <div class="hidden lg:flex relative w-full lg:h-180 items-center overflow-hidden rounded-[40px]">
        <!-- Background Image Layer -->
        <div class="absolute inset-0 w-full h-full z-0">
          <img
            :src="heroBanner"
            alt="R-E-D Solutions Hero Banner"
            referrerpolicy="no-referrer"
            class="w-full h-full object-contain object-right"
            fetchpriority="high"
            loading="eager"
          />
        </div>

        <!-- Content Overlaid on Desktop with exactly 100px left spacing -->
        <div class="relative z-10 w-full lg:w-150 lg:pt-12 lg:pl-25 flex flex-col justify-center items-start text-left">
          <h1 class="font-poppins font-medium lg:text-[4rem] lg:leading-17.5 mb-6 text-neutral-900">
            Designed for businesses of all sizes.
          </h1>

          <p class="font-poppins font-medium text-neutral-800 text-[16px] leading-normal max-w-2xl mb-8">
            From early stage start-ups to industry leading corporations, R-E-D is the choice of modern CEO's and CFO's. Make us your marketing partner and maximise your growth and results today!
          </p>

          <button
            @click="$emit('cta-click')"
            class="font-poppins font-medium text-[16px] text-white bg-black hover:bg-[#1ca3c4] rounded-full transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-md hover:shadow-lg lowercase"
            style="padding: 20px"
          >
            schedule a meeting today
          </button>
        </div>
      </div>

      <!-- MOBILE & TABLET LAYOUT (below lg) - Stacked Vertically, Center-aligned -->
      <div class="flex lg:hidden w-full flex-col items-center text-center px-4">
        <!-- Mobile Heading with Conversion highlighted in cyan -->
        <h1 class="font-poppins font-medium text-3xl sm:text-[2.25rem] md:text-5xl leading-tight tracking-tight mb-4">
          <span class="text-[#1ca3c4]">Conversion</span> based,<br />
          results driven marketing
        </h1>

        <!-- Mobile Description with 500+ highlighted -->
        <p class="font-poppins text-neutral-600 text-sm sm:text-base leading-relaxed max-w-xl mb-6">
          Over <span class="text-[#1ca3c4] font-semibold">500+</span> satisfied clients across South Africa trust us to manage their monthly lead generation and Ad spend.
        </p>

        <!-- Mobile Button: outlined pill shape transitioning to filled cyan on hover/click -->
        <button
          @click="$emit('cta-click')"
          class="font-poppins text-xs sm:text-sm tracking-widest text-white border-none rounded-full py-4 px-8 bg-black hover:bg-[#1ca3c4] active:bg-[#1ca3c4] transition-all duration-300 hover:scale-[1.02] active:scale-95 mb-10 w-full sm:w-auto font-medium lowercase"
        >
          schedule a meeting today
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
import heroBanner from '~/assets/images/r-e-d-landing-page-hero-banner.webp';
import heroMobileBanner from '~/assets/images/r-e-d-landing-page-hero-mobile-banner.webp';

useHead({
  link: [
    { rel: 'preload', as: 'image', href: heroBanner, media: '(min-width: 1024px)', fetchpriority: 'high' },
    { rel: 'preload', as: 'image', href: heroMobileBanner, media: '(max-width: 1023px)', fetchpriority: 'high' }
  ]
});

defineEmits(['cta-click']);
</script>
