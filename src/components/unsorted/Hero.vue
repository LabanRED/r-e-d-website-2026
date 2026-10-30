<template>
  <section class="relative mt-8 lg:mt-12 pb-12 sm:pb-16" id="hero">
    <div class="mx-auto lg:w-[95%] max-w-[1600px] px-4 sm:px-6 lg:px-0">

      <!-- DESKTOP TOP HEADING (Above Banner) -->
      <div class="hidden lg:flex items-center justify-between gap-12 mt-6 mb-[30px] px-2">
        <!-- Left Column: Headline -->
        <h1
          class="hero-main-heading font-poppins font-normal text-4xl lg:text-[2.85rem] xl:text-[3.35rem] leading-[1.18] tracking-tight text-left text-neutral-950"
        >
          <span class="text-[#2ca8cb] block">One Connected Ecosystem</span>
          <span class="block">to Scale Your Growth</span>
        </h1>

        <!-- Right Column: Description & Animated CTA -->
        <div class="flex flex-col items-start text-left w-full lg:w-[625px] max-w-[625px]">
          <p class="hero-supporting-text font-poppins font-light text-neutral-600 text-[14px] xl:text-[15px] leading-[1.65] mb-5 w-full max-w-[625px]">
            Driven by high-impact advertising and our in-house Conexa and PostX tools, R-E-D captures attention and converts leads across one connected ecosystem. Built to Reach, Engage, and Develop.
          </p>

          <button
            @click="$emit('cta-click')"
            class="hero-cta-btn group relative inline-flex items-center justify-between w-[268px] h-[50px] bg-black hover:bg-[#2ca8cb] text-white rounded-full pl-[20px] pr-[5px] py-[5px] transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] shadow-[0_4px_14px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_24px_rgba(44,168,203,0.28)] cursor-pointer overflow-hidden"
          >
            <span class="hero-cta-text font-poppins font-normal text-[13px] tracking-wide whitespace-nowrap">
              Schedule A Meeting Today
            </span>
            <!-- Spacer matching the 40x40 badge width -->
            <span class="w-[40px] h-[40px] flex-shrink-0 opacity-0 pointer-events-none" aria-hidden="true" />
            <!-- Sliding Chevron Circle Badge -->
            <span class="hero-cta-chevron absolute top-[5px] bottom-[5px] w-[40px] h-[40px] rounded-full bg-white text-black flex items-center justify-center shadow-sm">
              <ChevronRight class="w-4 h-4 stroke-[2] transition-transform duration-300 group-hover:translate-x-0.5" />
            </span>
          </button>
        </div>
      </div>

      <!-- DESKTOP 3-SLIDE EXPANDING ACCORDION LAYOUT (lg and up) -->
      <div class="hidden lg:flex items-stretch gap-[24px] xl:gap-[28px] w-full h-[500px] mt-[84px] relative">

        <!-- ==================== SLIDE 0: ABOUT ==================== -->
        <div
          @click="activeSlide !== 0 && setActiveSlide(0)"
          class="hero-slide-panel hero-slide-stagger-1 group/card relative h-[500px] rounded-[30px] select-none"
          :class="activeSlide === 0 ? 'hero-slide-expanded cursor-default z-20' : 'hero-slide-collapsed cursor-pointer z-10'"
        >
          <!-- Card Rounded Background Clip Layer -->
          <div
            class="absolute inset-0 rounded-[30px] overflow-hidden transition-colors duration-700"
            :class="activeSlide === 0
              ? 'bg-gradient-to-r from-[#eef1f6] via-[#e5ecf7] to-[#c7d6ee]'
              : 'bg-[linear-gradient(155deg,#fae0e4_0%,#d4e0f5_52%,#e4edf7_100%)]'"
          ></div>

          <!-- Hover Primary Blue Border Overlay (Collapsed Only) -->
          <div
            class="pointer-events-none absolute inset-0 rounded-[30px] border-[1.5px] transition-colors duration-300 z-20"
            :class="activeSlide !== 0 ? 'border-transparent group-hover/card:border-primary' : 'border-transparent'"
          ></div>

          <!-- Expanded State Content & Pop-out Image (Always mounted for zero-jank transitions) -->
          <div
            class="absolute inset-0 pointer-events-none"
            :class="activeSlide === 0 ? 'z-10' : 'z-0'"
          >
            <!-- Main 500px Card Clipped with Native 30px Rounded Corners -->
            <div class="absolute inset-0 rounded-[30px] overflow-hidden">
              <img
                :src="heroBanner"
                alt="R-E-D Solutions Hero Banner"
                class="hero-slide-art absolute bottom-0 right-0 w-full h-[549px] object-cover object-right-bottom select-none pointer-events-none"
                :class="activeSlide === 0 ? 'is-active' : 'is-inactive'"
                fetchpriority="high"
                loading="eager"
              />
            </div>

            <!-- Head Pop-out Above the 500px Card Top Edge -->
            <div class="absolute inset-x-0 bottom-0 h-[549px] pointer-events-none hero-head-popout-clip">
              <img
                :src="heroBanner"
                alt=""
                aria-hidden="true"
                class="hero-slide-art absolute bottom-0 right-0 w-full h-[549px] object-cover object-right-bottom select-none pointer-events-none"
                :class="activeSlide === 0 ? 'is-active' : 'is-inactive'"
              />
            </div>

            <!-- Left Overlaid Copy (Fixed width inside overflow-hidden so text never reflows during resize) -->
            <div class="absolute inset-0 rounded-[30px] overflow-hidden">
              <div
                class="hero-slide-copy relative z-10 h-full w-[460px] xl:w-[520px] flex flex-col justify-center items-start pl-10 xl:pl-14 pr-4 text-left"
                :class="activeSlide === 0 ? 'is-active pointer-events-auto' : 'is-inactive pointer-events-none'"
              >
                <span class="font-poppins font-normal text-lg xl:text-[21px] tracking-[0.26em] text-neutral-800 uppercase mb-2.5">
                  ABOUT
                </span>

                <h2 class="font-poppins font-medium text-2xl lg:text-[2rem] xl:text-[2.35rem] leading-[1.18] tracking-tight text-neutral-900 mb-4">
                  Designed for<br />
                  <span class="text-[#2ca8cb] whitespace-nowrap">businesses of all sizes.</span>
                </h2>

                <p class="font-poppins font-normal text-neutral-600 text-xs xl:text-[13px] leading-[1.65] max-w-[380px] mb-7">
                  From early stage start-ups to industry leading corporations, R-E-D is the choice of modern CEO's and CFO's. Make us your marketing partner and maximise your growth and results today!
                </p>

                <button
                  @click.stop="$emit('cta-click')"
                  class="inline-flex items-center justify-center bg-white text-neutral-900 hover:bg-black hover:text-white font-poppins font-medium text-xs px-6 py-3 rounded-full shadow-[0_4px_14px_rgba(0,0,0,0.06)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] cursor-pointer"
                >
                  Schedule A Meeting Today
                </button>
              </div>
            </div>
          </div>

          <!-- Collapsed Vertical Label -->
          <div
            class="hero-collapsed-label absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
            :class="activeSlide !== 0 ? 'is-visible' : 'is-hidden'"
          >
            <span class="font-poppins font-normal text-[21px] tracking-[0.28em] text-neutral-900 uppercase -rotate-90 whitespace-nowrap">
              ABOUT
            </span>
          </div>

          <!-- Floating Next Arrow Button on Right Edge when Active -->
          <button
            @click.stop="nextSlide"
            aria-label="Next slide"
            class="hero-edge-btn group absolute -right-[23px] top-1/2 -translate-y-1/2 z-30 w-[46px] h-[46px] rounded-full bg-white flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.1)] cursor-pointer"
            :class="activeSlide === 0 ? 'is-visible' : 'is-hidden'"
          >
            <svg
              v-if="activeSlide === 0"
              :key="progressKey"
              class="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
              viewBox="0 0 46 46"
            >
              <circle
                cx="23"
                cy="23"
                r="22"
                fill="none"
                stroke="#2ca8cb"
                stroke-width="2"
                stroke-linecap="round"
                class="hero-progress-circle"
              />
            </svg>
            <span class="relative z-10 w-[28px] h-[28px] rounded-full bg-black group-hover:bg-[#2ca8cb] text-white flex items-center justify-center transition-colors duration-300">
              <ChevronRight class="w-4 h-4 stroke-[2.2] translate-x-[0.5px]" />
            </span>
          </button>
        </div>

        <!-- ==================== SLIDE 1: POSTX ==================== -->
        <div
          @click="activeSlide !== 1 && setActiveSlide(1)"
          class="hero-slide-panel hero-slide-stagger-2 group/card relative h-[500px] rounded-[30px] select-none"
          :class="activeSlide === 1 ? 'hero-slide-expanded cursor-default z-20' : 'hero-slide-collapsed cursor-pointer z-10'"
        >
          <!-- Card Rounded Background Clip Layer -->
          <div
            class="absolute inset-0 rounded-[30px] overflow-hidden transition-colors duration-700"
            :class="activeSlide === 1
              ? 'bg-gradient-to-r from-[#d6e4f6] via-[#eff1f8] to-[#f7d8e8]'
              : 'bg-[linear-gradient(180deg,#faf0f6_0%,#eef2f9_55%,#c5d9ed_100%)]'"
          ></div>

          <!-- Hover Primary Blue Border Overlay (Collapsed Only) -->
          <div
            class="pointer-events-none absolute inset-0 rounded-[30px] border-[1.5px] transition-colors duration-300 z-20"
            :class="activeSlide !== 1 ? 'border-transparent group-hover/card:border-primary' : 'border-transparent'"
          ></div>

          <!-- Expanded State Content & Pop-out Image -->
          <div
            class="absolute inset-0 pointer-events-none"
            :class="activeSlide === 1 ? 'z-10' : 'z-0'"
          >
            <!-- Main 500px Card Clipped with Native 30px Rounded Corners -->
            <div class="absolute inset-0 rounded-[30px] overflow-hidden">
              <img
                :src="postXHeroBanner"
                alt="PostX Solutions Hero Banner"
                class="hero-slide-art absolute bottom-0 right-0 w-full h-[584px] object-cover object-right-bottom select-none pointer-events-none"
                :class="activeSlide === 1 ? 'is-active' : 'is-inactive'"
                fetchpriority="high"
                loading="eager"
              />
            </div>

            <!-- Head Pop-out Above the 500px Card Top Edge -->
            <div class="absolute inset-x-0 bottom-0 h-[584px] pointer-events-none hero-head-popout-clip">
              <img
                :src="postXHeroBanner"
                alt=""
                aria-hidden="true"
                class="hero-slide-art absolute bottom-0 right-0 w-full h-[584px] object-cover object-right-bottom select-none pointer-events-none"
                :class="activeSlide === 1 ? 'is-active' : 'is-inactive'"
              />
            </div>

            <!-- Left Overlaid Copy -->
            <div class="absolute inset-0 rounded-[30px] overflow-hidden">
              <div
                class="hero-slide-copy relative z-10 h-full w-[480px] xl:w-[540px] flex flex-col justify-center items-start pl-10 xl:pl-14 pr-4 text-left"
                :class="activeSlide === 1 ? 'is-active pointer-events-auto' : 'is-inactive pointer-events-none'"
              >
                <img
                  :src="postXLogo"
                  alt="PostX"
                  class="h-8 xl:h-9 w-auto object-contain mb-3.5"
                />

                <h2 class="font-poppins font-medium text-2xl lg:text-[1.9rem] xl:text-[2.25rem] leading-[1.18] tracking-tight text-neutral-900 mb-3.5">
                  Every conversation.<br />
                  <span class="text-[#2ca8cb] whitespace-nowrap">Every channel. One platform.</span>
                </h2>

                <p class="font-poppins font-normal text-neutral-600 text-xs xl:text-[13px] leading-[1.65] max-w-[420px] mb-7">
                  PostX unifies your WhatsApp, social media, Google reviews, and live chat into one powerful platform. Powered by instant AI assistance and proudly built in South Africa, it keeps your brand consistent and customer responses immediate.
                </p>

                <NuxtLink
                  to="/postx"
                  @click.stop
                  class="inline-flex items-center justify-center bg-white text-neutral-900 hover:bg-black hover:text-white font-poppins font-medium text-xs px-7 py-3 rounded-full shadow-[0_4px_14px_rgba(0,0,0,0.06)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] cursor-pointer"
                >
                  See How It Works
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- Collapsed Vertical Logo -->
          <div
            class="hero-collapsed-label absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
            :class="activeSlide !== 1 ? 'is-visible' : 'is-hidden'"
          >
            <img
              :src="postXLogo"
              alt="PostX"
              class="h-9 xl:h-10 w-auto max-w-none -rotate-90 object-contain select-none pointer-events-none"
            />
          </div>

          <!-- Floating Next Arrow Button on Right Edge when Active -->
          <button
            @click.stop="nextSlide"
            aria-label="Next slide"
            class="hero-edge-btn group absolute -right-[23px] top-1/2 -translate-y-1/2 z-30 w-[46px] h-[46px] rounded-full bg-white flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.1)] cursor-pointer"
            :class="activeSlide === 1 ? 'is-visible' : 'is-hidden'"
          >
            <svg
              v-if="activeSlide === 1"
              :key="progressKey"
              class="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
              viewBox="0 0 46 46"
            >
              <circle
                cx="23"
                cy="23"
                r="22"
                fill="none"
                stroke="#2ca8cb"
                stroke-width="2"
                stroke-linecap="round"
                class="hero-progress-circle"
              />
            </svg>
            <span class="relative z-10 w-[28px] h-[28px] rounded-full bg-black group-hover:bg-[#2ca8cb] text-white flex items-center justify-center transition-colors duration-300">
              <ChevronRight class="w-4 h-4 stroke-[2.2] translate-x-[0.5px]" />
            </span>
          </button>
        </div>

        <!-- ==================== SLIDE 2: CONEXA ==================== -->
        <div
          @click="activeSlide !== 2 && setActiveSlide(2)"
          class="hero-slide-panel hero-slide-stagger-3 group/card relative h-[500px] rounded-[30px] select-none"
          :class="activeSlide === 2 ? 'hero-slide-expanded cursor-default z-20' : 'hero-slide-collapsed cursor-pointer z-10'"
        >
          <!-- Card Rounded Background Clip Layer -->
          <div
            class="absolute inset-0 rounded-[30px] overflow-hidden transition-colors duration-700"
            :class="activeSlide === 2
              ? 'bg-gradient-to-r from-[#d4e3f6] via-[#eff1f8] to-[#dcd3ee]'
              : 'bg-[linear-gradient(180deg,#daf0f7_0%,#f2f5fb_50%,#dfdcf4_100%)]'"
          ></div>

          <!-- Hover Primary Blue Border Overlay (Collapsed Only) -->
          <div
            class="pointer-events-none absolute inset-0 rounded-[30px] border-[1.5px] transition-colors duration-300 z-20"
            :class="activeSlide !== 2 ? 'border-transparent group-hover/card:border-primary' : 'border-transparent'"
          ></div>

          <!-- Expanded State Content & Image -->
          <div
            class="absolute inset-0 pointer-events-none"
            :class="activeSlide === 2 ? 'z-10' : 'z-0'"
          >
            <!-- Conexa Banner inside 500px card -->
            <div class="absolute inset-0 rounded-[30px] overflow-hidden">
              <img
                :src="conexaHeroBanner"
                alt="Conexa - Take Control. Convert More."
                class="hero-slide-art absolute bottom-0 right-0 w-full h-[500px] object-cover object-right-bottom select-none pointer-events-none"
                :class="activeSlide === 2 ? 'is-active' : 'is-inactive'"
                loading="eager"
              />
            </div>

            <!-- Left Overlaid Copy (From Conexa Page Hero Section) -->
            <div class="absolute inset-0 rounded-[30px] overflow-hidden">
              <div
                class="hero-slide-copy relative z-10 h-full w-[460px] xl:w-[500px] flex flex-col justify-center items-start pl-10 xl:pl-14 pr-4 text-left"
                :class="activeSlide === 2 ? 'is-active pointer-events-auto' : 'is-inactive pointer-events-none'"
              >
                <img
                  :src="conexaLogo"
                  alt="Conexa"
                  class="h-6 xl:h-7 w-auto object-contain mb-4"
                />

                <h2 class="font-poppins font-medium text-2xl lg:text-[2rem] xl:text-[2.35rem] leading-[1.15] tracking-tight text-neutral-900 mb-4">
                  Take Control.<br />
                  <span class="text-[#2ca8cb] whitespace-nowrap">Convert More.</span>
                </h2>

                <p class="font-poppins font-normal text-neutral-700 text-xs xl:text-[13.5px] leading-[1.65] max-w-[400px] mb-2.5">
                  The website content management platform built to convert and built for you to control.
                </p>

                <p class="font-poppins font-normal text-neutral-600 text-xs xl:text-[13.5px] leading-[1.65] max-w-[400px] mb-7">
                  Manage it yourself, let R-E-D manage it, or both.
                </p>

                <NuxtLink
                  to="/conexa"
                  @click.stop
                  class="inline-flex items-center justify-center bg-white text-neutral-900 hover:bg-black hover:text-white font-poppins font-medium text-xs px-7 py-3 rounded-full shadow-[0_4px_14px_rgba(0,0,0,0.06)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] cursor-pointer"
                >
                  See How It Works
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- Collapsed Vertical Logo -->
          <div
            class="hero-collapsed-label absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
            :class="activeSlide !== 2 ? 'is-visible' : 'is-hidden'"
          >
            <img
              :src="conexaLogo"
              alt="Conexa"
              class="h-6 xl:h-7 w-auto max-w-none -rotate-90 object-contain select-none pointer-events-none"
            />
          </div>

          <!-- Floating Arrow Button on Left Edge when Conexa (Slide 2) is Active -->
          <button
            @click.stop="nextSlide"
            aria-label="Back to first slide"
            class="hero-edge-btn group absolute -left-[23px] top-1/2 -translate-y-1/2 z-30 w-[46px] h-[46px] rounded-full bg-white flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.1)] cursor-pointer"
            :class="activeSlide === 2 ? 'is-visible' : 'is-hidden'"
          >
            <svg
              v-if="activeSlide === 2"
              :key="progressKey"
              class="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
              viewBox="0 0 46 46"
            >
              <circle
                cx="23"
                cy="23"
                r="22"
                fill="none"
                stroke="#2ca8cb"
                stroke-width="2"
                stroke-linecap="round"
                class="hero-progress-circle"
              />
            </svg>
            <span class="relative z-10 w-[28px] h-[28px] rounded-full bg-black group-hover:bg-[#2ca8cb] text-white flex items-center justify-center transition-colors duration-300">
              <ChevronRight class="w-4 h-4 stroke-[2.2] rotate-180 -translate-x-[0.5px]" />
            </span>
          </button>
        </div>

      </div>

      <!-- MOBILE & TABLET LAYOUT (below lg) - Stacked Vertically, Center-aligned -->
      <div class="flex lg:hidden w-full flex-col items-center text-center px-4">
        <!-- Mobile Heading -->
        <h1 class="hero-main-heading font-poppins font-normal text-3xl sm:text-[2.25rem] md:text-5xl leading-tight tracking-tight mb-4 text-neutral-950">
          <span class="text-[#2ca8cb] block">One Connected Ecosystem</span>
          <span class="block">to Scale Your Growth</span>
        </h1>

        <!-- Mobile Description -->
        <p class="hero-supporting-text font-poppins font-light text-neutral-600 text-sm sm:text-base leading-relaxed max-w-xl mb-6">
          Driven by high-impact advertising and our in-house Conexa and PostX tools, R-E-D captures attention and converts leads across one connected ecosystem. Built to Reach, Engage, and Develop.
        </p>

        <!-- Mobile Button with Fade-In, Sliding Chevron & Text Reveal -->
        <button
          @click="$emit('cta-click')"
          class="hero-cta-btn group relative inline-flex items-center justify-between w-[268px] h-[50px] bg-black hover:bg-[#2ca8cb] text-white rounded-full pl-[20px] pr-[5px] py-[5px] mb-8 transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] shadow-[0_4px_14px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_24px_rgba(44,168,203,0.28)] cursor-pointer overflow-hidden"
        >
          <span class="hero-cta-text font-poppins font-normal text-xs sm:text-[13px] tracking-wide whitespace-nowrap">
            Schedule A Meeting Today
          </span>
          <!-- Spacer matching the 40x40 badge width -->
          <span class="w-[40px] h-[40px] flex-shrink-0 opacity-0 pointer-events-none" aria-hidden="true" />
          <!-- Sliding Chevron Circle Badge -->
          <span class="hero-cta-chevron absolute top-[5px] bottom-[5px] w-[40px] h-[40px] rounded-full bg-white text-black flex items-center justify-center shadow-sm">
            <ChevronRight class="w-4 h-4 stroke-[2] transition-transform duration-300 group-hover:translate-x-0.5" />
          </span>
        </button>

        <!-- Mobile Slide Selector Pills -->
        <div class="hero-banner-reveal flex items-center justify-center gap-2.5 mb-6">
          <button
            v-for="(label, idx) in ['ABOUT', 'POSTX', 'CONEXA']"
            :key="label"
            @click="setActiveSlide(idx)"
            class="relative inline-flex items-center justify-center w-[96px] h-[36px] rounded-full text-xs font-poppins font-medium tracking-wider transition-all duration-300 cursor-pointer"
            :class="activeSlide === idx
              ? 'bg-black text-white shadow-sm'
              : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'"
          >
            <svg
              v-if="activeSlide === idx"
              :key="progressKey"
              class="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
              viewBox="0 0 96 36"
            >
              <rect
                x="1"
                y="1"
                width="94"
                height="34"
                rx="17"
                ry="17"
                fill="none"
                stroke="#2ca8cb"
                stroke-width="2"
                stroke-linecap="round"
                pathLength="100"
                class="hero-pill-progress-rect"
              />
            </svg>
            <span class="relative z-10">{{ label }}</span>
          </button>
        </div>

        <!-- Mobile Active Slide Card -->
        <div class="hero-banner-reveal w-full max-w-lg sm:max-w-xl md:max-w-2xl">
          <!-- Mobile Slide 0: ABOUT -->
          <div v-if="activeSlide === 0" class="flex flex-col items-center text-center">
            <span class="font-poppins font-normal text-sm tracking-[0.26em] text-neutral-800 uppercase mb-2">
              ABOUT
            </span>
            <h2 class="font-poppins font-medium text-2xl sm:text-3xl leading-tight text-neutral-900 mb-3">
              Designed for<br />
              <span class="text-[#2ca8cb]">businesses of all sizes.</span>
            </h2>
            <p class="font-poppins text-neutral-600 text-xs sm:text-sm leading-relaxed max-w-md mb-5">
              From early stage start-ups to industry leading corporations, R-E-D is the choice of modern CEO's and CFO's. Make us your marketing partner and maximise your growth and results today!
            </p>
            <button
              @click="$emit('cta-click')"
              class="btn-primary w-full text-sm py-3.5 mb-6"
            >
              Schedule A Meeting Today
            </button>
            <img
              :src="heroMobileBanner"
              alt="R-E-D Solutions Hero Mobile Banner"
              referrerpolicy="no-referrer"
              class="w-full max-w-[400px] h-auto object-contain mx-auto"
              fetchpriority="high"
              loading="eager"
            />
          </div>

          <!-- Mobile Slide 1: POSTX -->
          <div v-else-if="activeSlide === 1" class="flex flex-col items-center text-center">
            <img :src="postXLogo" alt="PostX" class="h-8 w-auto object-contain mb-3" />
            <h2 class="font-poppins font-medium text-2xl sm:text-3xl leading-tight text-neutral-900 mb-3">
              Every conversation.<br />
              <span class="text-[#2ca8cb]">Every channel. One platform.</span>
            </h2>
            <p class="font-poppins text-neutral-600 text-xs sm:text-sm leading-relaxed max-w-md mb-5">
              PostX unifies your WhatsApp, social media, Google reviews, and live chat into one powerful platform. Powered by instant AI assistance and proudly built in South Africa, it keeps your brand consistent and customer responses immediate.
            </p>
            <NuxtLink
              to="/postx"
              class="btn-primary w-full text-sm py-3.5 mb-6"
            >
              See How It Works
            </NuxtLink>
            <img
              :src="postXHeroMobileBanner"
              alt="PostX Hero Mobile Banner"
              referrerpolicy="no-referrer"
              class="w-full max-w-[400px] h-auto object-contain mx-auto"
            />
          </div>

          <!-- Mobile Slide 2: CONEXA -->
          <div v-else class="flex flex-col items-center text-center">
            <img :src="conexaLogo" alt="Conexa" class="h-6 w-auto object-contain mb-3" />
            <h2 class="font-poppins font-medium text-2xl sm:text-3xl leading-tight text-neutral-900 mb-3">
              Take Control.<br />
              <span class="text-[#2ca8cb]">Convert More.</span>
            </h2>
            <p class="font-poppins text-neutral-700 text-xs sm:text-sm leading-relaxed max-w-md mb-2">
              The website content management platform built to convert and built for you to control.
            </p>
            <p class="font-poppins text-neutral-600 text-xs sm:text-sm leading-relaxed max-w-md mb-5">
              Manage it yourself, let R-E-D manage it, or both.
            </p>
            <NuxtLink
              to="/conexa"
              class="btn-primary w-full text-sm py-3.5 mb-6"
            >
              See How It Works
            </NuxtLink>
            <img
              :src="conexaHeroMobileBanner"
              alt="Conexa Hero Mobile Banner"
              referrerpolicy="no-referrer"
              class="w-full max-w-[400px] h-auto object-contain mx-auto"
            />
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useHead } from '#imports';
import { ChevronRight } from 'lucide-vue-next';
import heroBanner from '~/assets/images/r-e-d-landing-page-hero-banner.webp';
import heroMobileBanner from '~/assets/images/r-e-d-landing-page-hero-mobile-banner.webp';
import postXHeroBanner from '~/assets/images/hero-hanner-lady-desktop-banner.webp';
import postXHeroMobileBanner from '~/assets/images/r-e-d-postx-landing-page-mobile-banner.webp';
import postXLogo from '~/assets/images/PostX_Web_Dark_Logo.png';
import conexaHeroBanner from '~/assets/images/r-e-d-conexa-desktop-hero-banner.png';
import conexaHeroMobileBanner from '~/assets/images/r-e-d-conexa-landing-page-mobile-banner.webp';
import conexaLogo from '~/assets/images/conexa-dark-logo.svg';

const activeSlide = ref(0);
const progressKey = ref(0);
let autoSlideInterval: ReturnType<typeof setInterval> | null = null;

const startAutoSlide = () => {
  if (autoSlideInterval) clearInterval(autoSlideInterval);
  progressKey.value++;
  autoSlideInterval = setInterval(() => {
    activeSlide.value = (activeSlide.value + 1) % 3;
    progressKey.value++;
  }, 5000);
};

const setActiveSlide = (index: number) => {
  activeSlide.value = index;
  startAutoSlide();
};

const nextSlide = () => {
  activeSlide.value = (activeSlide.value + 1) % 3;
  startAutoSlide();
};

onMounted(() => {
  startAutoSlide();
});

onBeforeUnmount(() => {
  if (autoSlideInterval) clearInterval(autoSlideInterval);
});

useHead({
  link: [
    { rel: 'preload', as: 'image', href: heroBanner, media: '(min-width: 1024px)', fetchpriority: 'high' },
    { rel: 'preload', as: 'image', href: heroMobileBanner, media: '(max-width: 1023px)', fetchpriority: 'high' }
  ]
});

defineEmits(['cta-click']);
</script>

<style scoped>
.hero-main-heading {
  opacity: 0;
  transform: translateY(20px);
  filter: blur(8px);
  animation: heroMainHeadingFadeIn 0.55s cubic-bezier(0.22, 1, 0.36, 1) 0.05s forwards;
}

.hero-supporting-text {
  opacity: 0;
  transform: translateY(16px);
  filter: blur(6px);
  animation: heroSupportTextFadeIn 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.55s forwards;
}

.hero-cta-btn {
  opacity: 0;
  animation: heroBtnFadeIn 0.45s cubic-bezier(0.22, 1, 0.36, 1) 0.6s forwards;
}

.hero-cta-chevron {
  left: 5px;
  animation: heroChevronSlideRight 0.6s cubic-bezier(0.22, 1, 0.36, 1) 1s forwards;
}

.hero-cta-text {
  opacity: 0;
  clip-path: inset(0 100% 0 0);
  transform: translateX(-6px);
  animation: heroTextRevealAfterSlide 0.45s cubic-bezier(0.22, 1, 0.36, 1) 1.55s forwards;
}

.hero-banner-reveal {
  opacity: 0;
  transform: translateY(64px);
  filter: blur(8px);
  animation: heroBannerFadeIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) 2s forwards;
}

.hero-slide-stagger-1,
.hero-slide-stagger-2,
.hero-slide-stagger-3 {
  opacity: 0;
  transform: translateY(64px);
  filter: blur(8px);
}

.hero-slide-stagger-1 {
  animation: heroBannerFadeIn 0.7s cubic-bezier(0.22, 1, 0.36, 1) 2s forwards;
}

.hero-slide-stagger-2 {
  animation: heroBannerFadeIn 0.7s cubic-bezier(0.22, 1, 0.36, 1) 2.25s forwards;
}

.hero-slide-stagger-3 {
  animation: heroBannerFadeIn 0.7s cubic-bezier(0.22, 1, 0.36, 1) 2.5s forwards;
}

/* Smooth 60fps horizontal accordion geometry using explicit pixel/calc flex-basis */
.hero-slide-panel {
  will-change: width, flex-basis, box-shadow;
  transition:
    width 0.75s cubic-bezier(0.22, 1, 0.36, 1),
    flex-basis 0.75s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}

.hero-slide-collapsed {
  width: 170px;
  flex: 0 0 170px;
}

.hero-slide-expanded {
  width: calc(100% - 388px);
  flex: 1 0 calc(100% - 388px);
}

@media (min-width: 1280px) {
  .hero-slide-collapsed {
    width: 200px;
    flex: 0 0 200px;
  }

  .hero-slide-expanded {
    width: calc(100% - 456px);
    flex: 1 0 calc(100% - 456px);
  }
}

.hero-slide-collapsed:hover {
  box-shadow: 0 12px 32px rgba(0, 165, 197, 0.14), 0 4px 12px rgba(0, 0, 0, 0.04);
}

/* Smooth inner artwork & copy transitions without DOM unmount jank */
.hero-slide-art {
  will-change: opacity, transform;
  transition:
    opacity 0.55s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.75s cubic-bezier(0.22, 1, 0.36, 1);
}

.hero-slide-art.is-active {
  opacity: 1;
  transform: translateX(0) scale(1);
  transition-delay: 0.12s;
}

.hero-slide-art.is-inactive {
  opacity: 0;
  transform: translateX(24px) scale(0.98);
  transition-duration: 0.25s;
  transition-delay: 0s;
}

.hero-slide-copy {
  will-change: opacity, transform;
  transition:
    opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}

.hero-slide-copy.is-active {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.18s;
}

.hero-slide-copy.is-inactive {
  opacity: 0;
  transform: translateY(10px);
  transition-duration: 0.2s;
  transition-delay: 0s;
}

.hero-collapsed-label {
  will-change: opacity, transform;
  transition:
    opacity 0.45s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
}

.hero-collapsed-label.is-visible {
  opacity: 1;
  transform: scale(1);
  transition-delay: 0.2s;
}

.hero-collapsed-label.is-hidden {
  opacity: 0;
  transform: scale(0.92);
  transition-duration: 0.18s;
  transition-delay: 0s;
}

.hero-edge-btn {
  transition:
    opacity 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}

.hero-edge-btn.is-visible {
  opacity: 1;
  transform: translateY(-50%) scale(1);
  pointer-events: auto;
  transition-delay: 0.25s;
}

.hero-edge-btn.is-visible:hover {
  transform: translateY(-50%) scale(1.06);
}

.hero-edge-btn.is-visible:active {
  transform: translateY(-50%) scale(0.95);
}

.hero-edge-btn.is-hidden {
  opacity: 0;
  transform: translateY(-50%) scale(0.75);
  pointer-events: none;
  transition-duration: 0.15s;
  transition-delay: 0s;
}

.hero-progress-circle {
  stroke-dasharray: 138.23;
  stroke-dashoffset: 138.23;
  animation: heroCircleProgress 5s linear forwards;
}

.hero-pill-progress-rect {
  stroke-dasharray: 100;
  stroke-dashoffset: 100;
  animation: heroPillProgress 5s linear forwards;
}

@keyframes heroCircleProgress {
  0% {
    stroke-dashoffset: 138.23;
  }
  100% {
    stroke-dashoffset: 0;
  }
}

@keyframes heroPillProgress {
  0% {
    stroke-dashoffset: 100;
  }
  100% {
    stroke-dashoffset: 0;
  }
}

/* Clips only the upper head pop-out region while preserving 30px rounded corners on the 500px card below */
.hero-head-popout-clip {
  clip-path: inset(0 60px 496px 260px);
}

@keyframes heroMainHeadingFadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
    filter: blur(8px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0px);
  }
}

@keyframes heroSupportTextFadeIn {
  0% {
    opacity: 0;
    transform: translateY(16px);
    filter: blur(6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0px);
  }
}

@keyframes heroBtnFadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes heroChevronSlideRight {
  0% {
    left: 5px;
  }
  100% {
    left: calc(100% - 45px);
  }
}

@keyframes heroTextRevealAfterSlide {
  0% {
    opacity: 0;
    clip-path: inset(0 100% 0 0);
    transform: translateX(-6px);
  }
  100% {
    opacity: 1;
    clip-path: inset(0 0% 0 0);
    transform: translateX(0);
  }
}

@keyframes heroBannerFadeIn {
  0% {
    opacity: 0;
    transform: translateY(64px);
    filter: blur(8px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0px);
  }
}
</style>
