<template>
  <section class="w-full py-16 sm:py-24 bg-[#fafafa]" id="partnerships">
    <div class="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">

      <!-- Responsive Grid Layout for 2 Cards -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">

        <!-- Card 1: Meta Business Partner -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 35 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          :hovered="{ y: -6, boxShadow: '0px 10px 100px rgba(24, 39, 75, 0.14)', transition: { duration: 300 } }"
          class="group flex flex-col bg-white hover:bg-[#0866FF] rounded-4xl sm:rounded-[40px] overflow-hidden transition-colors duration-300 border border-neutral-100/40"
          style="box-shadow: 0px 2px 80px rgba(24, 39, 75, 0.08);"
        >
          <!-- Header Visual Image -->
          <div class="w-full h-64 sm:h-80 overflow-hidden bg-white">
            <img loading="lazy" :src="metaTopImg"
              alt="Meta Business Partner Workspace"
              referrerpolicy="no-referrer"
              class="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out select-none"
            />
          </div>

          <!-- Card Content -->
          <div class="p-8 sm:p-12 flex flex-col grow">
            <!-- Partner Logo -->
            <div class="mb-6 h-10 flex items-center">
              <img loading="lazy" :src="metaLogo"
                alt="Meta Business Partner Logo"
                referrerpolicy="no-referrer"
                class="h-full w-auto object-contain max-w-60 block group-hover:hidden"
              />
              <img loading="lazy" :src="metaLogoWhite"
                alt="Meta Business Partner Logo White"
                referrerpolicy="no-referrer"
                class="h-full w-auto object-contain max-w-60 hidden group-hover:block"
              />
            </div>

            <!-- Title -->
            <h3 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins font-normal text-3xl sm:text-[2.5rem] text-neutral-800 group-hover:text-white leading-tight mb-6 tracking-tight transition-colors duration-300">
              Growing your <br />business
            </h3>

            <!-- Description -->
            <p class="font-poppins text-neutral-600 group-hover:text-white text-sm sm:text-[15px] leading-relaxed mb-8 grow transition-colors duration-300">
              Your business is unique and so are your aspirations for the future. Our tools as a Meta Business Partner gives us access to exclusive technology and behind the scenes insights giving us the edge over our competitors.
            </p>

            <!-- Action Button -->
            <div>
              <NuxtLink
                to="/contact"
                class="inline-block font-poppins text-xs text-white border border-transparent group-hover:border-white bg-black group-hover:bg-transparent hover:bg-white! hover:text-[#0866FF]! px-6 py-3 rounded-full transition-all duration-300 font-medium lowercase"
              >
                Partner with us today
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Card 2: Google Partner -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 35 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 150 } }"
          :hovered="{ y: -6, boxShadow: '0px 10px 100px rgba(24, 39, 75, 0.14)', transition: { duration: 300 } }"
          class="group flex flex-col bg-white hover:bg-[#4F81BD] rounded-4xl sm:rounded-[40px] overflow-hidden transition-colors duration-300 border border-neutral-100/40"
          style="box-shadow: 0px 2px 80px rgba(24, 39, 75, 0.08);"
        >
          <!-- Header Visual Image -->
          <div class="w-full h-64 sm:h-80 overflow-hidden bg-white">
            <img loading="lazy" :src="googleTopImg"
              alt="Google Partner Workspace"
              referrerpolicy="no-referrer"
              class="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out select-none"
            />
          </div>

          <!-- Card Content -->
          <div class="p-8 sm:p-12 flex flex-col grow">
            <!-- Partner Logo -->
            <div class="mb-6 h-10 flex items-center">
              <img loading="lazy" :src="googleLogo"
                alt="Google Partner Logo"
                referrerpolicy="no-referrer"
                class="h-full w-auto object-contain max-w-60 block group-hover:hidden"
              />
              <img loading="lazy" :src="googleLogoWhite"
                alt="Google Partner Logo White"
                referrerpolicy="no-referrer"
                class="h-full w-auto object-contain max-w-60 hidden group-hover:block"
              />
            </div>

            <!-- Title -->
            <h3 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins font-normal text-3xl sm:text-[2.5rem] text-neutral-800 group-hover:text-white leading-tight mb-6 tracking-tight transition-colors duration-300">
              More than a <br />partnership.
            </h3>

            <!-- Description -->
            <p class="font-poppins text-neutral-600 group-hover:text-white text-sm sm:text-[15px] leading-relaxed mb-8 grow transition-colors duration-300">
              By joining R-E-D, you get access to advertising resources to set up your business to succeed and help your company grow and stand out in the industry.
            </p>

            <!-- Action Button -->
            <div>
              <NuxtLink
                to="/contact"
                class="inline-block font-poppins text-xs text-white border border-transparent group-hover:border-white bg-black group-hover:bg-transparent hover:bg-white! hover:text-[#4F81BD]! px-6 py-3 rounded-full transition-all duration-300 font-medium lowercase"
              >
                Partner with us today
              </NuxtLink>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import metaLogo from '~/assets/images/meta-partner.webp';
import metaLogoWhite from '~/assets/images/meta-partner-white.webp';
import googleLogo from '~/assets/images/google-partner.webp';
import googleLogoWhite from '~/assets/images/google-partner-white.webp';
import metaTopImg from '~/assets/images/Meta-Business-Partner-image.webp';
import googleTopImg from '~/assets/images/google-Business-Partner-image.webp';

defineEmits(['cta-click']);
</script>
