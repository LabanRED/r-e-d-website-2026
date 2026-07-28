<template>
  <div class="w-full bg-[#f8f9fa] min-h-screen relative font-sans overflow-x-hidden pt-8 sm:pt-16 pb-20 md:pb-0 lg:pb-0">
    <Head>
      <Link rel="preload" as="image" :href="heroBanner" fetchpriority="high" />
      <Title>Social Media Management | R-E-D</Title>
    </Head>

    <!-- Back Breadcrumb -->
    <div class="mx-auto lg:w-[95%] max-w-[1600px] px-4 sm:px-6 lg:px-0 mb-6">
      <NuxtLink
        to="/services"
        class="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-[#1ca3c4] transition-colors duration-200"
      >
        <ArrowLeft class="w-4 h-4" />
        Back to Services
      </NuxtLink>
    </div>

    <!-- Hero Section -->
    <section class="relative pb-12 lg:pb-0">
      <div class="mx-auto lg:w-[95%] max-w-[1600px] px-4 sm:px-6 lg:px-0">

        <!-- DESKTOP LAYOUT (lg and up) -->
        <div class="hidden lg:flex relative w-full lg:h-175 items-center overflow-hidden">
          <!-- Background Image Layer -->
          <div class="absolute inset-0 w-full h-full z-0 flex justify-end">
            <img
              :src="heroBanner"
              alt="Social Media Management Banner"
              referrerpolicy="no-referrer"
              class="h-full w-auto object-contain justify-end object-right"
              fetchpriority="high"
              loading="eager"
            />
          </div>

          <!-- Content Overlaid on Desktop -->
          <div class="relative z-10 w-full lg:w-175 lg:pl-25 flex flex-col justify-center items-start text-left">
            <span class="font-poppins font-medium text-base text-neutral-500 mb-6 tracking-wide">
              Social Media Management
            </span>
            <h1 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins font-semibold text-6xl leading-[1.1] text-neutral-900 tracking-tight">
              Build Stronger <br /> Customer <br />
              <span class="text-[#1ca3c4]">Connections<br />Through Social<br />Media</span>
            </h1>
          </div>
        </div>

        <!-- MOBILE LAYOUT (below lg) -->
        <div class="flex lg:hidden w-full flex-col items-center text-center px-4 pt-4 pb-0 overflow-hidden">
          <span class="font-poppins font-medium text-xs sm:text-sm text-neutral-500 mb-4 tracking-wide">
            Social Media Management
          </span>
          <h1 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins font-semibold text-4xl sm:text-5xl leading-[1.15] text-neutral-900 tracking-tight mb-8">
            Build Stronger <br /> Customer <br />
            <span class="text-[#1ca3c4]">Connections Through Social Media</span>
          </h1>
          <div class="w-full relative mt-4 -mb-4 flex justify-end">
            <img
              :src="heroMobileBanner"
              alt="Social Media Management Mobile Banner"
              referrerpolicy="no-referrer"
              class="w-full max-w-125 h-auto object-contain"
              fetchpriority="high"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Introduction Text Block -->
    <section class="px-6 sm:px-8 lg:px-12  max-w-350 mx-auto text-center space-y-8">
      <p class="font-poppins text-neutral-700 text-base sm:text-xl lg:text-xl leading-relaxed">
        Today having a social media presence is an absolute necessity for all businesses. In the past decade the majority of consumers have embraced social media as a primary means of communication. In response to this migration, businesses must be present on social media. Moreover, businesses need to ensure that they are initiating engagement with their target audiences and monitoring that engagement.
      </p>
      <p class="font-poppins text-neutral-700 text-[17px] sm:text-[19px] lg:text-[21px] leading-relaxed">
        At R-E-D we are all about social, and our social media experts understand how to get your business online. At R-E-D we not only strive to build meaningful relationships with our own clients but, to help your business build valuable connections with its customers through content, moderation, a great profile and instant real time assistance.
      </p>
    </section>

    <!-- Content Management Section -->
    <section id="content-management" class="mx-auto lg:w-[95%] max-w-[1600px] px-6 sm:px-8 lg:px-0 py-12 lg:py-24">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        <!-- Left Column: Phone Mockup -->
        <div class="w-full flex justify-center lg:justify-end pr-0 lg:pr-10 relative order-1">
          <img
            :src="phoneMockup"
            alt="Social Media Management Phone Mockup"
            class="w-full max-w-full h-auto object-contain hover:-translate-y-2 transition-transform duration-500 ease-out"
            loading="lazy"
          />
        </div>

        <!-- Right Column: Content -->
        <div class="flex flex-col items-start text-left lg:pl-10 order-2">
          <h2 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins font-medium text-4xl sm:text-[42px] lg:text-[48px] text-neutral-900 tracking-tight mb-12">
            Content management.
          </h2>

          <ul class="space-y-6 mb-16">
            <li v-for="(point, index) in contentManagementPoints" :key="index" class="flex items-start gap-4">
              <CheckCircle2 class="w-6 h-6 text-[#1ca3c4] flex-shrink-0 fill-[#1ca3c4]/10 mt-0.5" />
              <span class="font-poppins text-neutral-700 font-medium text-[15px] sm:text-[17px]">
                {{ point }}
              </span>
            </li>
          </ul>

          <button
            @click="openModal"
            class="font-poppins font-medium text-xs sm:text-[13px] tracking-widest text-white bg-black btn-slide-in px-10 py-4 rounded-full lowercase transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 mb-16 cursor-pointer"
          >
            schedule a meeting today
          </button>

          <!-- Circular Icons -->
          <div class="flex flex-wrap gap-8 sm:gap-12 lg:gap-16 items-center">
            <div v-for="(item, idx) in contentManagementIcons" :key="idx" class="flex flex-col items-center gap-4">
              <img
                :src="item.icon"
                :alt="item.label"
                class="w-20 h-20 sm:w-24 sm:h-24 object-contain hover:scale-110 transition-transform duration-300"
              />
              <span class="font-poppins text-[11px] font-medium tracking-widest text-neutral-600 uppercase text-center">
                {{ item.label }}
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- Social Media Moderation Section -->
    <section id="social-media-moderation" class="mx-auto lg:w-[95%] max-w-[1600px] px-6 sm:px-8 lg:px-0 py-12 lg:py-24">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        <!-- Left Column: Content -->
        <div class="flex flex-col items-start text-left lg:pr-10 order-2 lg:order-1">
          <h2 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins font-medium text-4xl sm:text-[42px] lg:text-[48px] text-neutral-900 tracking-tight mb-12">
            Social media moderation.
          </h2>

          <ul class="space-y-6 mb-16">
            <li v-for="(point, index) in moderationPoints" :key="index" class="flex items-start gap-4">
              <CheckCircle2 class="w-6 h-6 text-[#1ca3c4] flex-shrink-0 fill-[#1ca3c4]/10 mt-0.5" />
              <span class="font-poppins text-neutral-700 font-medium text-[15px] sm:text-[17px]">
                {{ point }}
              </span>
            </li>
          </ul>

          <button
            @click="openModal"
            class="font-poppins font-medium text-xs sm:text-[13px] tracking-widest text-white bg-black btn-slide-in px-10 py-4 rounded-full lowercase transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 mb-16 cursor-pointer"
          >
            schedule a meeting today
          </button>

          <!-- Circular Icons -->
          <div class="flex flex-wrap gap-8 sm:gap-12 lg:gap-16 items-center">
            <div v-for="(item, idx) in moderationIcons" :key="idx" class="flex flex-col items-center gap-4">
              <img
                :src="item.icon"
                :alt="item.label"
                class="w-20 h-20 sm:w-24 sm:h-24 object-contain hover:scale-110 transition-transform duration-300"
              />
              <span class="font-poppins text-[11px] font-medium tracking-widest text-neutral-600 uppercase text-center">
                {{ item.label }}
              </span>
            </div>
          </div>
        </div>

        <!-- Right Column: Image -->
        <div class="w-full flex justify-center lg:justify-start pl-0 lg:pl-10 relative order-1 lg:order-2">
          <img
            :src="moderationImg"
            alt="Social Media Moderation"
            class="w-full max-w-full h-auto object-contain rounded-[2rem] shadow-sm hover:-translate-y-2 transition-transform duration-500 ease-out"
            loading="lazy"
          />
        </div>

      </div>
    </section>

    <!-- Profile Management Section -->
    <section id="profile-management" class="mx-auto lg:w-[95%] max-w-[1600px] px-6 sm:px-8 lg:px-0 py-12 lg:py-24">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        <!-- Left Column: Image -->
        <div class="w-full flex justify-center lg:justify-end pr-0 lg:pr-10 relative order-1">
          <img
            :src="profileImg"
            alt="Profile Management"
            class="w-full max-w-full h-auto object-contain rounded-[2rem] shadow-sm hover:-translate-y-2 transition-transform duration-500 ease-out"
            loading="lazy"
          />
        </div>

        <!-- Right Column: Content -->
        <div class="flex flex-col items-start text-left lg:pl-10 order-2">
          <h2 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins font-medium text-4xl sm:text-[42px] lg:text-[48px] text-neutral-900 tracking-tight mb-12">
            Profile management.
          </h2>

          <ul class="space-y-6 mb-16">
            <li v-for="(point, index) in profileManagementPoints" :key="index" class="flex items-start gap-4">
              <CheckCircle2 class="w-6 h-6 text-[#1ca3c4] flex-shrink-0 fill-[#1ca3c4]/10 mt-0.5" />
              <span class="font-poppins text-neutral-700 font-medium text-[15px] sm:text-[17px]">
                {{ point }}
              </span>
            </li>
          </ul>

          <button
            @click="openModal"
            class="font-poppins font-medium text-xs sm:text-[13px] tracking-widest text-white bg-black btn-slide-in px-10 py-4 rounded-full lowercase transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 mb-16 cursor-pointer"
          >
            schedule a meeting today
          </button>

          <!-- Circular Icons -->
          <div class="flex flex-wrap gap-8 sm:gap-12 lg:gap-16 items-center">
            <div v-for="(item, idx) in profileManagementIcons" :key="idx" class="flex flex-col items-center gap-4">
              <img
                :src="item.icon"
                :alt="item.label"
                class="w-20 h-20 sm:w-24 sm:h-24 object-contain hover:scale-110 transition-transform duration-300"
              />
              <span class="font-poppins text-[11px] font-medium tracking-widest text-neutral-600 uppercase text-center">
                {{ item.label }}
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- AI Enabled Live Chat Section -->
    <section id="ai-enabled-live-chat" class="mx-auto lg:w-[95%] max-w-[1600px] px-6 sm:px-8 lg:px-0 py-12 lg:py-24">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        <!-- Left Column: Content -->
        <div class="flex flex-col items-start text-left lg:pr-10 order-2 lg:order-1">
          <h2 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins font-medium text-4xl sm:text-[42px] lg:text-[48px] text-neutral-900 tracking-tight mb-12">
            AI enabled Live Chat.
          </h2>

          <ul class="space-y-6 mb-16">
            <li v-for="(point, index) in liveChatPoints" :key="index" class="flex items-start gap-4">
              <CheckCircle2 class="w-6 h-6 text-[#1ca3c4] flex-shrink-0 fill-[#1ca3c4]/10 mt-0.5" />
              <span class="font-poppins text-neutral-700 font-medium text-[15px] sm:text-[17px]">
                {{ point }}
              </span>
            </li>
          </ul>

          <button
            @click="openModal"
            class="font-poppins font-medium text-xs sm:text-[13px] tracking-widest text-white bg-black btn-slide-in px-10 py-4 rounded-full lowercase transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 mb-16 cursor-pointer"
          >
            schedule a meeting today
          </button>

          <!-- Circular Icons -->
          <div class="flex flex-wrap gap-8 sm:gap-12 lg:gap-16 items-center">
            <div v-for="(item, idx) in liveChatIcons" :key="idx" class="flex flex-col items-center gap-4">
              <img
                :src="item.icon"
                :alt="item.label"
                class="w-20 h-20 sm:w-24 sm:h-24 object-contain hover:scale-110 transition-transform duration-300"
              />
              <span class="font-poppins text-[11px] font-medium tracking-widest text-neutral-600 uppercase text-center">
                {{ item.label }}
              </span>
            </div>
          </div>
        </div>

        <!-- Right Column: Image -->
        <div class="w-full flex justify-center lg:justify-start pl-0 lg:pl-10 relative order-1 lg:order-2">
          <img
            :src="liveChatImg"
            alt="AI enabled Live Chat"
            class="w-full max-w-full h-auto object-contain rounded-[2rem] shadow-sm hover:-translate-y-2 transition-transform duration-500 ease-out"
            loading="lazy"
          />
        </div>

      </div>
    </section>

    <!-- FAQ Section -->
    <section class="px-6 sm:px-8 lg:px-12 py-16 sm:py-24 max-w-[900px] mx-auto flex flex-col items-center">
      <h3 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins text-[#1ca3c4] text-lg sm:text-xl mb-2 text-center">
        Why us?
      </h3>
      <h2 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins text-4xl sm:text-5xl lg:text-6xl font-semibold text-neutral-800 mb-16 text-center tracking-tight">
        Frequently asked<br />questions
      </h2>

      <div class="w-full flex flex-col mb-16">
        <div v-for="(faq, index) in faqData" :key="index" class="w-full border-b border-neutral-200 overflow-hidden transition-all duration-300">
          <button @click="toggleFaq(index)" class="w-full flex items-center justify-between py-6 sm:py-8 text-left focus:outline-none group cursor-pointer">
            <span class="font-poppins text-lg sm:text-xl text-neutral-800 group-hover:text-[#1ca3c4] transition-colors pr-4">
              {{ faq.question }}
            </span>
            <div :class="['flex-shrink-0 text-[#1ca3c4] transition-transform duration-300', activeFaq === index ? 'rotate-180' : 'rotate-0']">
              <ChevronDown class="w-6 h-6" stroke-width="2" />
            </div>
          </button>
          <transition
            enter-active-class="transition-[grid-template-rows,opacity,margin] duration-300 ease-in-out"
            leave-active-class="transition-[grid-template-rows,opacity,margin] duration-300 ease-in-out"
            enter-from-class="grid-rows-[0fr] opacity-0 mb-0"
            enter-to-class="grid-rows-[1fr] opacity-100 mb-6"
            leave-from-class="grid-rows-[1fr] opacity-100 mb-6"
            leave-to-class="grid-rows-[0fr] opacity-0 mb-0"
          >
            <div v-show="activeFaq === index" class="grid">
              <div class="overflow-hidden">
                <p class="font-poppins text-neutral-600 text-base sm:text-lg leading-relaxed pr-8">
                  {{ faq.answer }}
                </p>
              </div>
            </div>
          </transition>
        </div>
      </div>

      <div class="text-center flex flex-col items-center">
        <p class="font-poppins text-neutral-600 text-lg sm:text-xl leading-relaxed mb-8 max-w-[600px]">
          If you'd like to know more about how R<span class="text-[#1ca3c4]">-</span>E<span class="text-[#1ca3c4]">-</span>D can help your business generate more leads.
        </p>
        <button
          @click="openModal"
          class="bg-black text-white font-poppins font-medium text-sm sm:text-base px-8 py-4 rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105 active:scale-95 lowercase cursor-pointer btn-slide-in"
        >
          schedule a meeting today
        </button>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ArrowLeft, CheckCircle2, ChevronDown } from 'lucide-vue-next';

// Hero and Service Images
import heroBanner from '~/assets/images/r-e-d-social-media-management-dekstop-banner.webp';
import heroMobileBanner from '~/assets/images/r-e-d-social-media-management-mobile-banner.webp';
import phoneMockup from '~/assets/images/social-media-service-phone-mockup.webp';
import moderationImg from '~/assets/images/r-e-d-social-media-moderation.webp';
import profileImg from '~/assets/images/r-e-d-social-media-profile-management.webp';
import liveChatImg from '~/assets/images/r-e-d-social-media-live-chat.webp';

// Icon Imports
import awarenessIcon from '~/assets/images/r-e-d-social-management-awareness-icon.svg';
import credibilityIcon from '~/assets/images/r-e-d-social-management-credibility-icon.svg';
import engagementIcon from '~/assets/images/r-e-d-social-management-engagement-icon.svg';
import leadsIcon from '~/assets/images/r-e-d-social-management-leads-icon.svg';
import reputationIcon from '~/assets/images/r-e-d-social-management-repuation-icon.svg';
import visibilityIcon from '~/assets/images/r-e-d-social-management-visibility-icon.svg';

const { openModal } = useModal();

const contentManagementPoints = [
  "Create and post relevant and engaging content",
  "Business updates and company culture insights",
  "Publish and pin important posts",
  "Create primary videos and images",
  "Post reviews"
];

const contentManagementIcons = [
  { icon: awarenessIcon, label: 'Awareness' },
  { icon: credibilityIcon, label: 'Credibility' },
  { icon: engagementIcon, label: 'Engagement' },
  { icon: visibilityIcon, label: 'Visibility' }
];

const moderationPoints = [
  "Filter through comments on your social pages",
  "Respond to inquiries and comments",
  "Delete inappropriate content",
  "Limit messages and spam comments",
  "Escalate issues to you",
  "Manage review pages"
];

const moderationIcons = [
  { icon: credibilityIcon, label: 'Credibility' },
  { icon: engagementIcon, label: 'Engagement' },
  { icon: reputationIcon, label: 'Reputation' }
];

const profileManagementPoints = [
  "Profile creation and optimization across all platforms",
  "Uniform brand image (profile photo, cover photo, bio description, links)",
  "Bio link management",
  "Establishing your brand",
  "Building trust & credibility"
];

const profileManagementIcons = [
  { icon: awarenessIcon, label: 'Awareness' },
  { icon: credibilityIcon, label: 'Credibility' },
  { icon: engagementIcon, label: 'Engagement' },
  { icon: reputationIcon, label: 'Reputation' }
];

const liveChatPoints = [
  "24/7 automated instant customer assistance",
  "Custom FAQ integration",
  "Lead qualification and contact information capture",
  "Instant routing to team",
  "Chat history and transcript delivery",
  "Online messaging"
];

const liveChatIcons = [
  { icon: credibilityIcon, label: 'Credibility' },
  { icon: engagementIcon, label: 'Engagement' },
  { icon: leadsIcon, label: 'Leads' },
  { icon: visibilityIcon, label: 'Visibility' }
];

const faqData = [
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary depending on the scope and complexity of your requirements. We'll work closely with you to establish a realistic schedule during our initial consultation."
  },
  {
    question: "How do you structure your pricing?",
    answer: "We offer custom pricing tailored to your specific needs and goals. Contact us for a detailed proposal and breakdown."
  },
  {
    question: "How often do you provide performance reports?",
    answer: "We provide detailed performance reports on a monthly basis, highlighting key metrics, insights, and actionable recommendations."
  },
  {
    question: "Do you work with businesses in my industry?",
    answer: "Yes! We work with a wide range of industries and take the time to understand the unique challenges and opportunities within your specific market."
  },
  {
    question: "What makes your agency different?",
    answer: "Our agency stands out through our data-driven approach, transparent communication, and commitment to delivering measurable results for every client."
  }
];

const activeFaq = ref<number | null>(null);

const toggleFaq = (index: number) => {
  activeFaq.value = activeFaq.value === index ? null : index;
};
</script>
