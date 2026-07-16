<template>
  <div class="w-full bg-[#f4f4f4] min-h-screen relative font-sans overflow-x-hidden pt-8">
    <!-- Main Content Container -->
    <div class="mx-auto lg:w-[95%] max-w-[1600px] px-8 md:px-0 lg:px-0 pb-20">
      
      <!-- Back Breadcrumb -->
      <div class="mb-6 md:px-8 mt-4 md:mt-8">
        <NuxtLink
          to="/"
          class="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-[#00a5c5] transition-colors duration-200"
        >
          <ArrowLeft class="w-4 h-4" />
          Back to Home
        </NuxtLink>
      </div>

      <!-- Hero Section -->
      <div class="relative w-full rounded-3xl overflow-hidden shadow-sm mb-20 md:mb-32 h-[400px] md:h-[500px]">
        <!-- Desktop Background -->
        <div
          class="hidden md:block absolute inset-0 w-full h-full bg-cover bg-center"
          :style="{ backgroundImage: `url(${desktopBanner})` }"
        ></div>
        <!-- Mobile Background -->
        <div
          class="block md:hidden absolute inset-0 w-full h-full bg-cover bg-center"
          :style="{ backgroundImage: `url(${mobileBanner})` }"
        ></div>

        <!-- Text Overlay -->
        <div class="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <span class="font-poppins text-neutral-800 text-sm md:text-base font-medium mb-4">
            About us
          </span>
          <h1 class="font-poppins text-3xl sm:text-5xl md:text-[3.5rem] font-semibold text-neutral-800 leading-tight max-w-3xl">
            Tailored digital solutions <span class="text-[#00a5c5]">driving growth.</span>
          </h1>
        </div>
      </div>

      <!-- Our Story Section -->
      <div class="mb-20 md:mb-32">
        <h2 class="font-poppins text-3xl md:text-4xl font-semibold text-neutral-800 mb-6">
          Our story
        </h2>
        <p class="font-poppins text-neutral-700 text-sm md:text-base leading-relaxed max-w-full md:max-w-[95%]">
          Reach Engage Develop is a unique digital solutions provider. We are not a traditional digital marketing agency where all the attention is focused on the big spenders and everyone else gets the bare minimum. At R-E-D, we give every client the undivided attention they deserve. We provide tailor made digital solutions where our clients have access to our extensive expertise in digital advertising, website development and maintenance, social media management, online reputation management, location listing and much more. At R-E-D we specialise in the automotive, hospitality and restaurant industry where we have an impressive track record with our clients.
        </p>
      </div>

      <!-- Our Team Section -->
      <div class="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start mb-20 md:mb-32">
        <div class="w-full lg:w-1/2">
          <h2 class="font-poppins text-3xl md:text-4xl font-semibold text-neutral-800 mb-6">
            Our team
          </h2>
          <div class="space-y-6 font-poppins text-neutral-700 text-sm md:text-base leading-relaxed">
            <p>
              The Team at R-E-D stems from the corporate sector with many years of senior management experience, across multiple industries, with the past 10 years being within digital marketing and systems, both locally and internationally.
            </p>
            <p>
              The combined experience stretches across working with large corporates and SMEs at varying levels within the supply chain. With this experience, we have learnt the importance and relevance of customer engagement in driving revenue sustainment and growth.
            </p>
          </div>
        </div>
        <div class="w-full lg:w-1/2">
          <img loading="lazy" :src="teamImage"
            alt="Our team collaborating"
            class="w-full h-auto rounded-3xl object-cover shadow-sm"
          />
        </div>
      </div>

      <!-- Core Values & Philosophy Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-20 md:mb-32">

        <!-- Core Values Column -->
        <div>
          <div class="bg-[#00a5c5] text-white text-center py-4 rounded-xl mb-4">
            <h3 class="font-poppins text-2xl font-medium tracking-wide">Core values</h3>
          </div>
          <div class="space-y-2">
            <div v-for="item in coreValues" :key="item.id" class="bg-[#f0f0f0] border-b border-white rounded-lg overflow-hidden">
              <button
                @click="toggleValue(item.id)"
                class="w-full flex items-center justify-between px-6 py-4 text-left focus:outline-none"
              >
                <span class="font-poppins text-sm text-neutral-800 font-medium">{{ item.title }}</span>
                <ChevronDown class="w-4 h-4 text-[#00a5c5] transition-transform duration-300" :class="{ 'rotate-180': openValueId === item.id }" />
              </button>
              
              <!-- Vue transition for accordion -->
              <transition
                enter-active-class="transition-[max-height] duration-300 ease-in-out overflow-hidden"
                enter-from-class="max-h-0 opacity-0"
                enter-to-class="max-h-[500px] opacity-100"
                leave-active-class="transition-[max-height] duration-300 ease-in-out overflow-hidden"
                leave-from-class="max-h-[500px] opacity-100"
                leave-to-class="max-h-0 opacity-0"
              >
                <div v-show="openValueId === item.id">
                  <div class="px-6 pb-4 text-xs text-neutral-600 font-poppins">
                    {{ item.content }}
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>

        <!-- Our Philosophy Column -->
        <div>
          <div class="bg-[#00a5c5] text-white text-center py-4 rounded-xl mb-4">
            <h3 class="font-poppins text-2xl font-medium tracking-wide">Our Philosophy</h3>
          </div>
          <div class="space-y-2">
            <div v-for="item in philosophies" :key="item.id" class="bg-[#f0f0f0] border-b border-white rounded-lg overflow-hidden">
              <button
                @click="togglePhilosophy(item.id)"
                class="w-full flex items-center justify-between px-6 py-4 text-left focus:outline-none"
              >
                <span class="font-poppins text-sm text-neutral-800 font-medium">{{ item.title }}</span>
                <ChevronDown class="w-4 h-4 text-[#00a5c5] transition-transform duration-300" :class="{ 'rotate-180': openPhilosophyId === item.id }" />
              </button>
              
              <!-- Vue transition for accordion -->
              <transition
                enter-active-class="transition-[max-height] duration-300 ease-in-out overflow-hidden"
                enter-from-class="max-h-0 opacity-0"
                enter-to-class="max-h-[500px] opacity-100"
                leave-active-class="transition-[max-height] duration-300 ease-in-out overflow-hidden"
                leave-from-class="max-h-[500px] opacity-100"
                leave-to-class="max-h-0 opacity-0"
              >
                <div v-show="openPhilosophyId === item.id">
                  <div class="px-6 pb-4 text-xs text-neutral-600 font-poppins">
                    {{ item.content }}
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>

      </div>

      <!-- CTA Banner Section -->
      <div
        class="w-full rounded-3xl overflow-hidden relative flex flex-col items-center justify-center text-center py-20 px-6 shadow-sm"
        style="background: linear-gradient(135deg, #e6e9f0 0%, #eef1f5 100%)"
      >
        <img loading="lazy" :src="redLogo" alt="R-E-D Logo" class="h-8 mb-6" />
        <h2 class="font-poppins text-3xl md:text-4xl font-semibold text-neutral-800 mb-4">
          Ready to establish your<br />digital presences?
        </h2>
        <p class="font-poppins text-neutral-500 text-sm md:text-sm max-w-lg mb-8 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu ex ultricies, ornare velit vel, rhoncus metus.
        </p>
        <button
          @click="openModal"
          class="bg-black hover:bg-[#00a5c5] text-white font-poppins text-sm font-semibold px-8 py-3.5 rounded-full transition-colors shadow-sm cursor-pointer"
        >
          Schedule a meeting today
        </button>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ChevronDown, ArrowLeft } from 'lucide-vue-next';
import desktopBanner from '~/assets/images/r-e-d-about-us-desktop-banner.webp';
import mobileBanner from '~/assets/images/r-e-d-about-us-mobile-banner.webp';
import teamImage from '~/assets/images/r-e-d-about-us-our-team.webp';
import redLogo from '~/assets/images/r-e-d-dark-logo.svg';

const { openModal } = useModal();

const openValueId = ref<string | null>(null);
const openPhilosophyId = ref<string | null>(null);

const coreValues = [
  { id: 'v1', title: '1. Brave', content: 'To achieve great things, requires taking risks. The riskiest thing you can do is to take no risks at all. We encourage all our people to be brave and make bold decisions.' },
  { id: 'v2', title: '2. Agile', content: 'At R-E-D, being agile enables us to build more, learn more and grow more.' },
  { id: 'v3', title: '3. Impact', content: 'We focus on tackling the most important problems our clients face to maximize our impact.' },
  { id: 'v4', title: '4. Transparent', content: 'Informed people make the best decisions. We deliver honest and accurate feedback to our clients.' },
  { id: 'v5', title: '5. Build', content: 'We strive to build continuous value for our clients, our staff and our communities.' },
];

const philosophies = [
  { id: 'p1', title: '1. Delivering the right content', content: 'We believe successful marketing lies within the formula of delivering the right content, at the right time, to the right audience, using the most suitable communication channel.' },
  { id: 'p2', title: '2. Relatability & engagement', content: 'How your audience relates to your content directly influences the level of engagement you will achieve.' },
  { id: 'p3', title: '3. Timing', content: 'Timing is crucial - if you get it wrong you could miss the opportunity. We understand the importance of accurately forecasting and predicting customer needs and behaviour to ensure timely communication.' },
  { id: 'p4', title: '4. Accurate targeting', content: 'As for audience, yes the shotgun approach can sometimes work if you only consider the positive outcomes, but the damage that is done behind the scenes is unknown.' },
  { id: 'p5', title: '5. Data transparency', content: 'At the core of the R-E-D philosophy lies the importance of accurate data. Data should be the most valued asset within any business, across customer data, linked products and associated activities.' },
  { id: 'p6', title: '6. Conversions', content: 'Lead funnel... we prefer Conversions Tunnel. It is all versions: visitors into leads and leads into sales.' },
  { id: 'p7', title: '7. Integration', content: 'Systems and data need to flow seamlessly to enable improved turn-around times on enquiries and data insights' },
];

const toggleValue = (id: string) => {
  openValueId.value = openValueId.value === id ? null : id;
};

const togglePhilosophy = (id: string) => {
  openPhilosophyId.value = openPhilosophyId.value === id ? null : id;
};

useHead({
  title: 'About Us | R-E-D',
  meta: [
    { name: 'description', content: 'Learn more about R-E-D and our core values and philosophy.' }
  ]
});
</script>
