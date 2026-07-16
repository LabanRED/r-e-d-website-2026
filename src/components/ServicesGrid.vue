<template>
  <section class="py-16 sm:py-24 bg-[#fafafa]" id="services">
    <div class="mx-auto max-w-[1600px] px-4 sm:px-12 lg:px-8">

      <!-- Header Section -->
      <div class="text-center mb-16">
        <span class="font-poppins text-sm sm:text-base font-normal text-[#1ca3c4] tracking-wide block mb-3">
          Services
        </span>
        <h2 class="font-poppins font-semibold text-3xl sm:text-4xl md:text-5xl text-neutral-900 tracking-tight leading-tight max-w-3xl mx-auto">
          Explore our wide range of services
        </h2>
      </div>

      <!-- Services Grid (3 Columns) -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">

        <!-- Left Column - Facebook and Paid Media -->
        <div class="flex flex-col gap-8 justify-between">
          <!-- Card 1: Facebook Marketing -->
          <div
            v-motion
            :initial="{ opacity: 0, x: -30 }"
            :visible-once="{ opacity: 1, x: 0, transition: { duration: 600 } }"
            class="bg-white rounded-4xl p-8 sm:p-10 border border-neutral-100/80 flex flex-col justify-between shadow-sm flex-1"
            style="box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.01);"
          >
            <div>
              <!-- Icon Container -->
              <img loading="lazy" :src="facebookIcon"
                alt="Facebook Marketing Icon"
                referrerpolicy="no-referrer"
                class="w-14 h-14 object-contain select-none mb-8"
              />
              <!-- Title -->
              <h3 class="font-poppins font-normal text-3xl sm:text-4xl text-neutral-900 leading-tight mb-4">
                Facebook marketing
              </h3>
              <!-- Support Text -->
              <p class="font-poppins text-neutral-500 text-sm sm:text-base leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et porttitor leo. Sed ullamcorper gravida ligula, a venenatis risus feugiat a. Nam venenatis diam sit amet laoreet ultricies.
              </p>
            </div>
          </div>

          <!-- Card 2: Paid Media & Social Media -->
          <div
            v-motion
            :initial="{ opacity: 0, x: -30 }"
            :visible-once="{ opacity: 1, x: 0, transition: { duration: 600, delay: 100 } }"
            class="bg-white rounded-4xl p-8 sm:p-10 border border-neutral-100/80 flex flex-col justify-between shadow-sm flex-1"
            style="box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.01);"
          >
            <div>
              <!-- Icon Container -->
              <img loading="lazy" :src="paidMediaIcon"
                alt="Paid Media & Social Media Icon"
                referrerpolicy="no-referrer"
                class="w-14 h-14 object-contain select-none mb-8"
              />
              <!-- Title -->
              <h3 class="font-poppins font-normal text-3xl sm:text-4xl text-neutral-900 leading-tight mb-4">
                Paid media & Social media
              </h3>
              <!-- Support Text -->
              <p class="font-poppins text-neutral-500 text-sm sm:text-base leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et porttitor leo. Sed ullamcorper gravida ligula, a venenatis risus feugiat a. Nam venenatis diam sit amet laoreet ultricies.
              </p>
            </div>
          </div>
        </div>

        <!-- Middle Column - Large Image Card -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
          class="group relative rounded-4xl overflow-hidden min-h-87.5 lg:min-h-full shadow-sm"
        >
          <img
            v-motion
            :hovered="{ scale: 1.1, transition: { duration: 800, ease: 'easeOut' } }"
            :src="servicesImg"
            alt="Team collaborating on design and marketing plans"
            referrerpolicy="no-referrer"
            class="absolute inset-0 w-full h-full object-cover origin-center"
          />
        </div>

        <!-- Right Column - Google Advertising and Web Development -->
        <div class="flex flex-col gap-8 justify-between">
          <!-- Card 3: Google Advertising -->
          <div
            v-motion
            :initial="{ opacity: 0, x: 30 }"
            :visible-once="{ opacity: 1, x: 0, transition: { duration: 600 } }"
            class="bg-white rounded-4xl p-8 sm:p-10 border border-neutral-100/80 flex flex-col justify-between shadow-sm flex-1"
            style="box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.01);"
          >
            <div>
              <!-- Icon Container -->
              <img loading="lazy" :src="googleIcon"
                alt="Google Advertising Icon"
                referrerpolicy="no-referrer"
                class="w-14 h-14 object-contain select-none mb-8"
              />
              <!-- Title -->
              <h3 class="font-poppins font-normal text-3xl sm:text-4xl text-neutral-900 leading-tight mb-4">
                Google advertising
              </h3>
              <!-- Support Text -->
              <p class="font-poppins text-neutral-500 text-sm sm:text-base leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et porttitor leo. Sed ullamcorper gravida ligula, a venenatis risus feugiat a. Nam venenatis diam sit amet laoreet ultricies.
              </p>
            </div>
          </div>

          <!-- Card 4: Website Development -->
          <div
            v-motion
            :initial="{ opacity: 0, x: 30 }"
            :visible-once="{ opacity: 1, x: 0, transition: { duration: 600, delay: 100 } }"
            class="bg-white rounded-4xl p-8 sm:p-10 border border-neutral-100/80 flex flex-col justify-between shadow-sm flex-1"
            style="box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.01);"
          >
            <div>
              <!-- Icon Container -->
              <img loading="lazy" :src="webDevIcon"
                alt="Website Development Icon"
                referrerpolicy="no-referrer"
                class="w-14 h-14 object-contain select-none mb-8"
              />
              <!-- Title -->
              <h3 class="font-poppins font-normal text-3xl sm:text-4xl text-neutral-900 leading-tight mb-4">
                Website development
              </h3>
              <!-- Support Text -->
              <p class="font-poppins text-neutral-500 text-sm sm:text-base leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et porttitor leo. Sed ullamcorper gravida ligula, a venenatis risus feugiat a. Nam venenatis diam sit amet laoreet ultricies.
              </p>
            </div>
          </div>
        </div>

      </div>

      <!-- View All Services Button -->
      <div class="text-center mt-8">
        <button
          @click="$emit('cta-click')"
          class="font-poppins text-xs tracking-widest text-white bg-black hover:bg-[#1ca3c4] rounded-full py-4 px-10 hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-sm font-medium lowercase"
        >
          View all services
        </button>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import servicesImg from '~/assets/images/services-image.webp';
import facebookIcon from '~/assets/images/facebook-service-icon.svg';
import paidMediaIcon from '~/assets/images/paid-media-service-icon.svg';
import googleIcon from '~/assets/images/google-service-icon.svg';
import webDevIcon from '~/assets/images/website-development-icon.svg';

defineEmits(['cta-click']);
</script>
