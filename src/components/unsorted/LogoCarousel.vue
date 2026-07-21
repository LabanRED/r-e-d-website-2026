<template>
  <section class="border-y border-neutral-100 py-10 md:py-12 overflow-hidden select-none">
    <div class="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
      <div class="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">

        <!-- Static Left Text -->
        <div class="shrink-0 text-center md:text-left">
          <span class="font-poppins font-medium text-neutral-500 text-sm md:text-base tracking-wide whitespace-nowrap">
            Trusted by the industry leaders
          </span>
        </div>

        <!-- Sliding Marquee Area -->
        <div class="relative grow w-full overflow-hidden">
          <!-- Left and right gradient overlays for faded edges -->
          <div class="absolute left-0 top-0 bottom-0 z-10 w-12 md:w-32 bg-linear-to-r from-[#fafafa] to-transparent pointer-events-none" />
          <div class="absolute right-0 top-0 bottom-0 z-10 w-12 md:w-32 bg-linear-to-l from-[#fafafa] to-transparent pointer-events-none" />

          <!-- Sliding Track -->
          <div class="flex gap-12 md:gap-16 items-center whitespace-nowrap py-2 animate-marquee">
            <div
              v-for="(logo, idx) in doubleLogos"
              :key="`${logo.name}-${idx}`"
              class="flex items-center justify-center min-w-27.5 md:min-w-35 px-2"
            >
              <img
                :src="logo.src"
                :alt="`${logo.name} logo`"
                class="h-6 md:h-8 w-auto object-contain opacity-50 hover:opacity-95 transition-opacity duration-300"
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
import audi from '~/assets/images/audi.svg';
import byd from '~/assets/images/byd.svg';
import chery from '~/assets/images/chery.svg';
import ford from '~/assets/images/ford.svg';
import honda from '~/assets/images/honda.svg';
import kia from '~/assets/images/kia.svg';
import mazda from '~/assets/images/mazda.svg';
import mitsubishi from '~/assets/images/mitsubishi.svg';
import renault from '~/assets/images/renault.svg';
import suzuki from '~/assets/images/suzuki.svg';
import volkswagen from '~/assets/images/volkswagen.svg';
import volvo from '~/assets/images/volvo.svg';

const logos = [
  { name: 'Audi', src: audi },
  { name: 'BYD', src: byd },
  { name: 'Chery', src: chery },
  { name: 'Ford', src: ford },
  { name: 'Honda', src: honda },
  { name: 'Kia', src: kia },
  { name: 'Mazda', src: mazda },
  { name: 'Mitsubishi', src: mitsubishi },
  { name: 'Renault', src: renault },
  { name: 'Suzuki', src: suzuki },
  { name: 'Volkswagen', src: volkswagen },
  { name: 'Volvo', src: volvo },
];

const doubleLogos = [...logos, ...logos];
</script>

<style scoped>
.animate-marquee {
  animation: marquee 5s linear infinite;
}

@keyframes marquee {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
}
</style>
