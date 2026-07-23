<template>
  <div class="w-full bg-[#fafafa] min-h-screen relative font-sans overflow-x-hidden pt-8">
    <!-- Back Breadcrumb -->
    <div class="pl-8 mx-auto lg:w-[95%] max-w-[1600px] px-4 sm:px-6 lg:px-12 mb-6">
      <NuxtLink
        to="/"
        class="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-[#00a5c5] transition-colors duration-200"
      >
        <ArrowLeft class="w-4 h-4" />
        Back to home
      </NuxtLink>
    </div>

    <!-- Hero Section -->
    <section class="mx-auto lg:w-[95%] max-w-[1600px] px-4 sm:px-6 lg:px-12 mb-20">

      <!-- DESKTOP LAYOUT (lg and up) -->
      <div class="hidden lg:flex relative w-full rounded-[2rem] overflow-hidden min-h-[400px] sm:min-h-[700px] items-center">

        <!-- Background image -->
        <div class="absolute inset-0 w-full h-full z-0">
          <img
            :src="heroDesktop"
            alt="Careers at R-E-D"
            class="w-full h-full object-contain object-center"
            fetchpriority="high"
            loading="eager"
          />
        </div>

        <!-- Text Content overlay -->
        <div class="relative z-10 w-full md:w-[60%] m-0 md:pt-32 lg:pt-36 p-8 sm:p-12 lg:p-20">
          <p class="font-poppins text-neutral-600 text-xs sm:text-sm mb-4 tracking-wide font-medium uppercase">
            Our careers
          </p>
          <h1 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins text-4xl sm:text-5xl lg:text-6xl font-semibold text-neutral-800 leading-[1.1] tracking-tight mb-6">
            Join the future of <br class="hidden sm:block" />
            <span class="text-[#00a5c5]">digital advertising.</span>
          </h1>
          <p class="font-poppins text-neutral-700 text-sm sm:text-base leading-relaxed max-w-lg font-medium">
            We're looking for visionaries, makers, and strategists to build what's next.
            At Digitalcraft, we don't just adapt to the future; we design it.
          </p>
        </div>
      </div>

      <!-- MOBILE & TABLET LAYOUT (below lg) - Stacked Vertically -->
      <div class="block lg:hidden w-full flex flex-col items-center text-center">
        <div class="mb-8">
          <p class="font-poppins text-neutral-600 text-xs sm:text-sm mb-4 tracking-wide font-medium uppercase">
            Our careers
          </p>
          <h1 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins text-4xl sm:text-5xl md:text-6xl font-semibold text-neutral-800 leading-tight tracking-tight mb-6">
            Join the future of <br />
            <span class="text-[#00a5c5]">digital advertising.</span>
          </h1>
          <p class="font-poppins text-neutral-700 text-sm sm:text-base leading-relaxed max-w-lg font-medium mx-auto">
            We're looking for visionaries, makers, and strategists to build what's next.
            At Digitalcraft, we don't just adapt to the future; we design it.
          </p>
        </div>

        <div class="w-full max-w-lg sm:max-w-xl md:max-w-2xl overflow-hidden rounded-[2rem]">
          <img
            :src="heroMobile"
            alt="Careers at R-E-D Mobile Banner"
            class="w-full h-auto object-contain mx-auto"
            fetchpriority="high"
            loading="eager"
          />
        </div>
      </div>
    </section>

    <!-- Open Roles Section -->
    <section class="mx-auto lg:w-[95%] max-w-[1600px] px-4 sm:px-6 lg:px-12 mb-24">
      <div class="mb-10">
        <h2 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins text-3xl sm:text-4xl font-semibold text-neutral-800 mb-2">
          Open Roles
        </h2>
        <p class="font-poppins text-neutral-600 text-sm sm:text-base font-medium">
          Find your place among the best.
        </p>
      </div>

      <hr class="border-neutral-300 border-2 mb-10" />

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Role 1 -->
        <div class="bg-white rounded-3xl p-6 md:p-8 shadow-sm flex flex-col">
          <div class="mb-4 md:mb-4">
            <span class="bg-[#00a5c5] text-white font-poppins text-sm md:text-xs font-medium md:font-semibold px-4 py-1.5 rounded-full tracking-wide">
              Marketing
            </span>
          </div>
          <h3 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins text-[32px] md:text-2xl font-semibold text-neutral-800 mb-4 md:mb-3 leading-tight">
            Head Of Social Media
          </h3>
          <p class="font-poppins text-base md:text-sm text-neutral-700 md:text-neutral-600 leading-relaxed mb-8 flex-1 font-medium md:font-normal">
            Lead social strategy to grow brand awareness, engagement, and conversions through impactful content and data-driven campaigns.
          </p>
          <hr class="border-neutral-800 md:border-neutral-200 mb-6" />
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-0">
            <span class="font-poppins text-neutral-800 md:text-neutral-500 text-[15px] md:text-xs font-medium">
              Facebook | Instagram | TikTok | X | LinkedIn
            </span>
            <NuxtLink to="/careers/head-of-social-media" class="w-full md:w-auto bg-black hover:bg-[#00a5c5] text-white font-poppins text-base md:text-xs font-semibold px-6 py-3 md:py-2 rounded-full transition-colors shadow-sm text-center block md:inline-block cursor-pointer">
              View Role
            </NuxtLink>
          </div>
        </div>

        <!-- Role 2 -->
        <div class="bg-white rounded-3xl p-6 md:p-8 shadow-sm flex flex-col">
          <div class="mb-4 md:mb-4">
            <span class="bg-[#00a5c5] text-white font-poppins text-sm md:text-xs font-medium md:font-semibold px-4 py-1.5 rounded-full tracking-wide">
              Marketing
            </span>
          </div>
          <h3 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins text-[32px] md:text-2xl font-bold text-neutral-800 mb-4 md:mb-3 leading-tight">
            Head Of Search
          </h3>
          <p class="font-poppins text-base md:text-sm text-neutral-700 md:text-neutral-600 leading-relaxed mb-8 flex-1 font-medium md:font-normal">
            Lead SEO and paid search strategy to grow visibility, drive qualified traffic, and maximise conversions through data-driven optimization and performance marketing.
          </p>
          <hr class="border-neutral-800 md:border-neutral-200 mb-6" />
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-0">
            <span class="font-poppins text-neutral-800 md:text-neutral-500 text-[15px] md:text-xs font-medium">
              Facebook | Instagram | TikTok | X | LinkedIn
            </span>
            <NuxtLink to="/careers/head-of-search" class="w-full md:w-auto bg-black hover:bg-[#00a5c5] text-white font-poppins text-base md:text-xs font-semibold px-6 py-3 md:py-2 rounded-full transition-colors shadow-sm text-center block md:inline-block cursor-pointer">
              View Role
            </NuxtLink>
          </div>
        </div>

        <!-- Role 3 -->
        <div class="bg-white rounded-3xl p-6 md:p-8 shadow-sm flex flex-col">
          <div class="mb-4 md:mb-4">
            <span class="bg-[#00a5c5] text-white font-poppins text-sm md:text-xs font-medium md:font-semibold px-4 py-1.5 rounded-full tracking-wide">
              Marketing
            </span>
          </div>
          <h3 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins text-[32px] md:text-2xl font-bold text-neutral-800 mb-4 md:mb-3 leading-tight">
            Digital Marketing Intern
          </h3>
          <p class="font-poppins text-base md:text-sm text-neutral-700 md:text-neutral-600 leading-relaxed mb-8 flex-1 font-medium md:font-normal">
            Support campaigns across SEO, social media, and paid ads while gaining hands-on experience in digital marketing and performance tracking.
          </p>
          <hr class="border-neutral-800 md:border-neutral-200 mb-6" />
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-0">
            <span class="font-poppins text-neutral-800 md:text-neutral-500 text-[15px] md:text-xs font-medium">
              Facebook | Instagram | TikTok | X | LinkedIn
            </span>
            <NuxtLink to="/careers/intern" class="w-full md:w-auto bg-black hover:bg-[#00a5c5] text-white font-poppins text-base md:text-xs font-semibold px-6 py-3 md:py-2 rounded-full transition-colors shadow-sm text-center block md:inline-block cursor-pointer">
              View Role
            </NuxtLink>
          </div>
        </div>

        <!-- Role 4 -->
        <div class="bg-white rounded-3xl p-6 md:p-8 shadow-sm flex flex-col">
          <div class="mb-4 md:mb-4">
            <span class="bg-[#00a5c5] text-white font-poppins text-sm md:text-xs font-medium md:font-semibold px-4 py-1.5 rounded-full tracking-wide">
              Marketing
            </span>
          </div>
          <h3 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins text-[32px] md:text-2xl font-bold text-neutral-800 mb-4 md:mb-3 leading-tight">
            Digital Designer
          </h3>
          <p class="font-poppins text-base md:text-sm text-neutral-700 md:text-neutral-600 leading-relaxed mb-8 flex-1 font-medium md:font-normal">
            Create visually engaging digital assets and user experiences across web and marketing campaigns, combining creativity with brand consistency and UX best practices.
          </p>
          <hr class="border-neutral-800 md:border-neutral-200 mb-6" />
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-0">
            <span class="font-poppins text-neutral-800 md:text-neutral-500 text-[15px] md:text-xs font-medium">
              Facebook | Instagram | TikTok | X | LinkedIn
            </span>
            <NuxtLink to="/careers/designer" class="w-full md:w-auto bg-black hover:bg-[#00a5c5] text-white font-poppins text-base md:text-xs font-semibold px-6 py-3 md:py-2 rounded-full transition-colors shadow-sm text-center block md:inline-block cursor-pointer">
              View Role
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Life at R-E-D Section -->
    <section class="flex justify-center items-center flex-col mx-auto lg:w-[95%] max-w-[1600px] px-4 sm:px-6 lg:px-12 mb-24">
      <!-- Section Header -->
      <div class="flex flex-col justify-center items-center text-center mb-12">
        <h2 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins text-3xl sm:text-4xl lg:text-5xl font-semibold text-neutral-900 tracking-tight">
          Life at R<span class="text-[#00a5c5]">-</span>E<span class="text-[#00a5c5]">-</span>D
        </h2>
        <p class="font-poppins text-neutral-600 text-base sm:text-lg mt-3 max-w-2xl mx-auto font-medium">
          We believe in hard work, big ideas, and taking care of the people who make it all happen.
        </p>
      </div>

      <!-- Bento Grid Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        <!-- Left Large Card (Creative Engine) -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          class="lg:col-span-7 flex flex-col rounded-3xl overflow-hidden shadow-sm bg-white transition-transform duration-300 hover:scale-[1.005]"
        >
          <!-- Image Top Half -->
          <div class="w-full sm:h-[482px] overflow-hidden bg-neutral-100">
            <img
              loading="lazy"
              :src="creativeEngineImg"
              alt="Creative Engine at R-E-D"
              class="w-full h-full object-cover object-center"
            />
          </div>
          <!-- Cyan Bottom Banner -->
          <div class="bg-[#00a5c5] p-6 sm:p-8 md:p-10 flex flex-col justify-center text-white">
            <h3 class="font-poppins text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight mb-2">
              Creative engine
            </h3>
            <p class="font-poppins text-sm sm:text-base lg:text-lg text-white/95 font-medium leading-relaxed">
              We give you the tools and trust to build your best work.
            </p>
          </div>
        </div>

        <!-- Right Column Stack -->
        <div class="w-full  md:w-125 lg:w-125 lg:col-span-5 flex flex-col gap-6 lg:gap-8">
          <!-- Top Right Teal Card (Innovation That Drives Results) -->
          <div
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 150 } }"
            class="bg-[#24889c] text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-center flex-1 h-auto md-min-h-[220px] shadow-sm transition-transform duration-300 hover:scale-[1.01]"
          >
            <h3 class="font-poppins text-xl sm:text-2xl font-semibold tracking-tight mb-3">
              Innovation That Drives Results
            </h3>
            <p class="font-poppins text-sm sm:text-base text-white leading-relaxed font-normal">
              Combining strategic thinking, technology, and creative execution to deliver measurable growth and long-term business success.
            </p>
          </div>

          <!-- Bottom Right Image Card (The craft) -->
          <div
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 300 } }"
            class="w-full md:w-125 lg:w-125 h-auto rounded-3xl overflow-hidden shadow-sm relative md-min-h-62 sm:min-h-74 flex-1 bg-neutral-900 transition-transform duration-300 hover:scale-[1.01]"
          >
            <img
              loading="lazy"
              :src="theCraftImg"
              alt="The Craft at R-E-D"
              class="w-full h-full object-contain object-center"
            />
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { ArrowLeft } from 'lucide-vue-next';
import heroDesktop from '~/assets/images/r-e-d-careers-hero-desktop-banner.webp';
import heroMobile from '~/assets/images/r-e-d-careers-hero-mobile-banner.webp';
import creativeEngineImg from '~/assets/images/life-at-r-e-d-creative-engine.webp';
import theCraftImg from '~/assets/images/the-craft-at-r-e-d.webp';

useHead({
  title: 'Careers | R-E-D',
  meta: [
    { name: 'description', content: 'Join the future of digital advertising. We are looking for visionaries to build what is next.' }
  ]
});
</script>
