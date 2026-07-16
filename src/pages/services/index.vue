<template>
  <div class="w-full bg-[#f8f9fa] min-h-screen relative font-sans overflow-x-hidden pt-8 sm:pt-16 pb-0">
    <!-- Back to Home Breadcrumb Indicator -->
    <div class="mx-auto lg:w-[95%] max-w-[1600px] px-8 lg:px-0 mb-6">
      <NuxtLink
        to="/"
        class="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-[#00a5c5] transition-colors duration-200"
      >
        <ArrowLeft class="w-4 h-4" />
        Back to R-E-D Home
      </NuxtLink>
    </div>

    <!-- Hero Banner Section -->
    <section class="relative px-8 lg:px-0 mb-16 lg:w-[95%] max-w-[1600px] mx-auto flex flex-col gap-4 sm:block">

      <!-- Mobile Heading -->
      <div class="flex flex-col sm:hidden pt-2">
        <span class="font-poppins text-[#2c2c2c] text-sm mb-2">Our services</span>
        <h1 class="font-poppins w-50 text-3xl leading-[1.3] text-[#2c2c2c] font-semibold tracking-tight">
          Driving real growth
          through <span class="text-[#00a5c5]">data-driven</span>
          <span class="text-[#00a5c5]"> digital advertising</span>
        </h1>
      </div>

      <div class="w-full relative overflow-hidden rounded-4xl sm:rounded-[3rem]">
        <!-- Desktop Banner Image -->
        <img
          :src="serviceDesktopBanner"
          alt="Driving real growth through data-driven digital advertising"
          class="w-full h-auto object-cover hidden sm:block"
          fetchpriority="high"
          loading="eager"
        />
        <!-- Mobile Banner Image -->
        <img
          :src="serviceMobileBanner"
          alt="Driving real growth through data-driven digital advertising"
          class="w-full h-auto object-cover block sm:hidden"
          fetchpriority="high"
          loading="eager"
        />

        <!-- Overlay Text -->
        <div class="absolute inset-0 hidden sm:flex flex-col justify-center px-8 sm:px-12 md:px-20 lg:px-32 xl:px-40 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[65%] z-10 pointer-events-none">
          <span class="font-poppins text-[#2c2c2c] text-sm sm:text-base lg:text-lg mb-2 sm:mb-4">Our services</span>
          <h1 class="font-poppins text-[2.5rem] sm:text-5xl md:text-6xl lg:text-6xl leading-[1.1] text-[#2c2c2c] font-semibold tracking-tight">
            Driving real growth <br class="hidden sm:block" />
            through <span class="text-[#00a5c5]">data-driven</span> <br />
            <span class="text-[#00a5c5]">digital advertising</span>
          </h1>
        </div>
      </div>
    </section>

    <!-- Intro Text Section -->
    <section class="px-6 sm:px-8 lg:px-12 py-12 sm:py-20 text-center max-w-[1600px] mx-auto">
      <h2
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="font-poppins text-3xl sm:text-4xl lg:text-5xl leading-[1.3] text-neutral-800 font-normal tracking-tight"
      >
        We turn attention into action with <span class="text-[#00a5c5] font-normal">performance-driven campaigns</span> that generate leads, maximise ROI, and scale your brand.
      </h2>
    </section>

    <!-- Services List -->
    <section class="px-6 sm:px-8 lg:px-12 pb-24 max-w-[1200px] mx-auto">
      <div class="flex flex-col">
        <div
          v-for="(service, index) in servicesList"
          :key="service.id"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: index * 100 } }"
          class="flex flex-col pt-12 pb-12 sm:pb-16 border-b border-neutral-300 last:border-b-0"
        >
          <div class="flex flex-col md:flex-row gap-8 md:gap-16 items-start">

            <!-- Left Column (Number & Title) -->
            <div class="flex-1 flex gap-6 items-start">
              <div class="bg-[#00a5c5] text-white text-[15px] sm:text-base font-semibold py-1.5 px-4 rounded-full mt-1 flex-shrink-0">
                {{ service.id }}
              </div>
              <h3 class="font-poppins text-2xl sm:text-3xl text-neutral-800 font-normal leading-tight">
                {{ service.title }}
              </h3>
            </div>

            <!-- Right Column (Description & Button) -->
            <div class="flex-1 flex flex-col items-start gap-6">
              <p class="font-poppins text-neutral-700 text-base sm:text-[1.1rem] leading-[1.7]" v-html="service.description">
              </p>
              <NuxtLink
                :to="service.link"
                class="inline-block bg-black hover:bg-[#00a5c5] text-white font-poppins font-semibold text-[13px] sm:text-[14px] px-8 py-3 rounded-full transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 tracking-wide text-center"
              >
                I'm interested
              </NuxtLink>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- Establish Presence Bottom CTA -->
    <EstablishPresence @cta-click="openModal" />

  </div>
</template>

<script setup lang="ts">
import { ArrowLeft } from 'lucide-vue-next';
import serviceDesktopBanner from '~/assets/images/service-page-hero-banner-desktop.webp';
import serviceMobileBanner from '~/assets/images/service-page-hero-banner-mobile.webp';

const { openModal } = useModal();

const servicesList = [
  {
    id: '01',
    title: 'Digital advertising',
    link: '/services/digital-advertising',
    description: `Integrated, multi-channel advertising solutions across all major digital platforms:<br /><span class="text-[#00a5c5] font-semibold">Facebook | Instagram | Google | LinkedIn | TikTok and X(Twitter)</span>`
  },
  {
    id: '02',
    title: 'Social media management',
    link: '/services/social-media',
    description: `Creating, monitoring and managing social interactions:<br /><span class="text-[#00a5c5] font-semibold">Content | Moderation | Profile management</span>`
  },
  {
    id: '03',
    title: 'Website development & maintenance',
    link: '/services/website-dev',
    description: `Fully responsive, integrated websites that compliment your objectives and drive value:<br /><span class="text-[#00a5c5] font-semibold">Building | Maintenance | Integration | SEO | Analytics</span>`
  },
  {
    id: '04',
    title: 'Online reputation solutions',
    link: '/services/online-reputation',
    description: `Review monitoring and response management across all digital platforms.<br /><span class="text-[#00a5c5] font-semibold">World class solutions to drive positive reviews.</span>`
  },
  {
    id: '05',
    title: 'Location listing & maintenance',
    link: '/services/location-listing',
    description: `Don't lose customers to competitors because you can't be found.<br /><span class="text-[#00a5c5] font-semibold">We ensure you project the right image of your business and all of your contact information is up to date.</span>`
  }
];

useHead({
  title: 'Services | R-E-D',
  meta: [
    { name: 'description', content: 'Explore our wide range of digital services including advertising, social media management, website development, and more.' }
  ]
});
</script>
