<template>
  <div class="w-full bg-[#f8f9fa] min-h-screen relative font-sans overflow-x-hidden pt-6 sm:pt-10 pb-20">
    <Head>
      <Link rel="preload" as="image" :href="heroDesktopBanner" media="(min-width: 1024px)" fetchpriority="high" />
      <Link rel="preload" as="image" :href="heroMobileBanner" media="(max-width: 1023px)" fetchpriority="high" />
      <Title>Location Listing & Solutions | R-E-D</Title>
      <Meta
        name="description"
        content="Ensure your brand is discoverable, verified, and consistent everywhere customers search. Location Listing and Maintenance solutions by R-E-D."
      />
    </Head>

    <!-- Back Breadcrumb -->
    <div class="mx-auto lg:w-[95%] max-w-[1600px] px-6 sm:px-8 lg:px-12 mb-6">
      <NuxtLink
        to="/services"
        class="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-primary transition-colors duration-200"
      >
        <ArrowLeft class="w-4 h-4" />
        back to services
      </NuxtLink>
    </div>

    <!-- Hero Banner Section -->
    <section class="px-4 sm:px-8 lg:px-12 py-2 max-w-[1600px] mx-auto mb-16 sm:mb-24">
      <!-- MOBILE HERO LAYOUT (visible on small screens < lg) -->
      <div class="flex flex-col items-center text-center lg:hidden bg-gradient-to-br from-[#e8f1f7] via-[#eff5f9] to-[#f7fafc] rounded-3xl p-6 sm:p-10 shadow-sm border border-neutral-200/50">
        <span class="font-poppins text-neutral-800 text-sm sm:text-base font-normal tracking-wide mb-3">
          Location Listing &amp; Maintenance
        </span>
        <h1
          v-motion
          :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }"
          :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }"
          class="font-poppins text-3xl sm:text-4xl font-medium text-neutral-900 leading-[1.2] tracking-tight mb-6"
        >
          <span class="text-primary font-medium">If They Can't Find You,</span><br />
          They'll Find Your Competitors.
        </h1>
        <button
          @click="openModal('Location Listing - Hero Mobile')"
          class="btn-primary w-full max-w-[340px] text-base mb-8 px-8 py-3.5"
        >
          Schedule A Meeting Today
        </button>
        <div class="w-full flex justify-center rounded-2xl overflow-hidden shadow-sm">
          <img
            :src="heroMobileBanner"
            alt="If They Can't Find You, They'll Find Your Competitors."
            class="w-full max-w-[500px] h-auto object-contain mx-auto"
            fetchpriority="high"
            loading="eager"
          />
        </div>
      </div>

      <!-- DESKTOP HERO LAYOUT (hidden on mobile, visible on lg and up) -->
      <div class="hidden lg:block relative w-full rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-sm">
        <img
          :src="heroDesktopBanner"
          alt="If They Can't Find You, They'll Find Your Competitors."
          class="w-full h-auto block select-none pointer-events-none"
          fetchpriority="high"
          loading="eager"
        />

        <!-- Overlay Content positioned on the left side -->
        <div class="absolute inset-y-0 left-0 w-[55%] flex flex-col justify-center items-start pl-10 xl:pl-16 pr-4 z-10 text-left">
          <div class="w-full max-w-[580px] xl:max-w-[620px] flex flex-col items-start justify-center">
            <span class="font-poppins text-neutral-800 text-sm xl:text-base font-normal tracking-wide mb-4">
              Location Listing &amp; Maintenance
            </span>
            <h1
              v-motion
              :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }"
              :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }"
              class="font-poppins text-3xl lg:text-[2.75rem] xl:text-[3.25rem] font-medium text-neutral-900 leading-[1.15] tracking-tight mb-8"
            >
              <span class="text-primary font-medium">If They Can't Find<br />You,</span> They'll Find<br />Your Competitors.
            </h1>
            <button
              @click="openModal('Location Listing - Hero Desktop')"
              class="btn-primary text-[14px] sm:text-[15px] px-9 py-3.5"
            >
              Schedule A Meeting Today
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Brand Logo Carousel -->
    <div class="w-full mb-16 sm:mb-24">
      <LogoCarousel />
    </div>

    <!-- Section 1: A Single Outdated Address Can Cost You Thousands in Lost Sales -->
    <section class="mx-auto lg:w-[95%] max-w-[1600px] px-6 sm:px-8 lg:px-12 mb-20 sm:mb-28">
      <!-- Section Heading -->
      <div class="text-center max-w-[1100px] mx-auto mb-12 sm:mb-16">
        <h2
          v-motion
          :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }"
          :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }"
          class="font-poppins text-3xl sm:text-4xl lg:text-[42px] font-medium text-neutral-900 leading-tight tracking-tight mb-5"
        >
          <span class="text-primary font-medium">A Single Outdated Address</span> Can<br />
          Cost You Thousands In Lost Sales
        </h2>
        <p class="font-poppins text-neutral-600 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">
          Today's consumers rely entirely on digital maps and local directories to find showrooms, service centers, and storefronts. If your operating hours are wrong, your phone number goes to voicemail, or your map pin lands a block away, you don't just lose a visitor you hand a high-intent buyer straight to your competitor.
        </p>
      </div>

      <!-- 3 Problem / Value Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-[1400px] mx-auto justify-items-center mb-12">
        <!-- Card 1: Instant Trust & Credibility -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
          class="w-full max-w-[620px] min-h-[390px] bg-white rounded-3xl sm:rounded-4xl p-6 sm:p-7 flex flex-col justify-between shadow-[0_10px_35px_rgba(0,0,0,0.06)] border border-neutral-100/80 transition-all duration-300 hover:shadow-[0_20px_45px_rgba(0,0,0,0.1)] hover:-translate-y-1"
        >
          <div>
            <h3 class="font-poppins text-[22px] sm:text-[24px] font-medium text-primary mb-4">
              Instant Trust &amp; Credibility
            </h3>
            <div class="w-full max-w-[580px] h-[200px] overflow-hidden rounded-xl sm:rounded-2xl mb-4 mx-auto">
              <img
                :src="instantTrustImg"
                alt="Instant Trust and Credibility"
                class="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>
          <p class="font-poppins text-[15px] sm:text-[16px] text-neutral-600 leading-relaxed">
            An unverified or inconsistent online profile signals an untrustworthy brand. Impeccable listing maintenance projects professional excellence.
          </p>
        </div>

        <!-- Card 2: Local Search Dominance -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 100 } }"
          class="w-full max-w-[620px] min-h-[390px] bg-white rounded-3xl sm:rounded-4xl p-6 sm:p-7 flex flex-col justify-between shadow-[0_10px_35px_rgba(0,0,0,0.06)] border border-neutral-100/80 transition-all duration-300 hover:shadow-[0_20px_45px_rgba(0,0,0,0.1)] hover:-translate-y-1"
        >
          <div>
            <h3 class="font-poppins text-[22px] sm:text-[24px] font-medium text-primary mb-4">
              Local Search Dominance
            </h3>
            <div class="w-full max-w-[580px] h-[200px] overflow-hidden rounded-xl sm:rounded-2xl mb-4 mx-auto">
              <img
                :src="localSearchDominanceImg"
                alt="Local Search Dominance"
                class="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>
          <p class="font-poppins text-[15px] sm:text-[16px] text-neutral-600 leading-relaxed">
            Search engines favor accuracy. Optimized, synchronized listings drive higher local SEO rankings and organic foot traffic.
          </p>
        </div>

        <!-- Card 3: Zero Friction for Buyers -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 200 } }"
          class="w-full max-w-[620px] min-h-[390px] bg-white rounded-3xl sm:rounded-4xl p-6 sm:p-7 flex flex-col justify-between shadow-[0_10px_35px_rgba(0,0,0,0.06)] border border-neutral-100/80 transition-all duration-300 hover:shadow-[0_20px_45px_rgba(0,0,0,0.1)] hover:-translate-y-1"
        >
          <div>
            <h3 class="font-poppins text-[22px] sm:text-[24px] font-medium text-primary mb-4">
              Zero Friction for Buyers
            </h3>
            <div class="w-full max-w-[580px] h-[200px] overflow-hidden rounded-xl sm:rounded-2xl mb-4 mx-auto">
              <img
                :src="zeroFrictionImg"
                alt="Zero Friction for Buyers"
                class="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>
          <p class="font-poppins text-[15px] sm:text-[16px] text-neutral-600 leading-relaxed">
            Make it effortless for prospective customers to call, navigate, or book an appointment with the exact branch closest to them.
          </p>
        </div>
      </div>

      <!-- Bottom Button for Section 1 -->
      <div class="flex justify-center">
        <button
          @click="openModal('Location Listing - Section 1 Button')"
          class="btn-primary text-[14px] sm:text-[15px] px-9 py-3.5"
        >
          Schedule A Meeting Today
        </button>
      </div>
    </section>

    <!-- Section 2: Complete Control Over Every Digital Storefront -->
    <section class="mx-auto lg:w-[95%] max-w-[1600px] px-6 sm:px-8 lg:px-12 mb-20 sm:mb-28 text-center">
      <div class="max-w-[1000px] mx-auto mb-12 sm:mb-16">
        <h2
          v-motion
          :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }"
          :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }"
          class="font-poppins text-3xl sm:text-4xl lg:text-[42px] font-medium text-neutral-900 leading-tight tracking-tight mb-4"
        >
          <span class="text-primary font-medium">Complete Control</span> Over Every<br />
          Digital Storefront
        </h2>
        <p class="font-poppins text-neutral-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
          We eliminate conflicting information across the web, ensuring every touchpoint projects the right image for your brand.
        </p>
      </div>

      <!-- 3 Alternating Cards (900px x 500px matching Online Reputation Process Cards) -->
      <div class="flex flex-col gap-10 sm:gap-14 items-center">
        <!-- Card 1: Unified Directory Sync: -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          class="w-full md:w-[900px] min-h-[460px] md:h-[500px] bg-white rounded-3xl sm:rounded-4xl overflow-hidden grid grid-cols-1 md:grid-cols-12 items-center border border-neutral-200/50 shadow-sm text-left transition-all duration-300 hover:shadow-md"
        >
          <div class="p-8 sm:p-10 lg:p-12 md:col-span-7 flex flex-col items-start justify-center">
            <h3 class="font-poppins text-2xl sm:text-3xl font-medium text-neutral-900 mb-4">
              Unified Directory Sync:
            </h3>
            <p class="font-poppins text-neutral-700 text-base sm:text-lg leading-relaxed mb-8 max-w-sm">
              Instantly update operational hours, contact details, promotional banners, and addresses across Google Business Profile, Apple Maps, Waze, and major navigation platforms.
            </p>
            <button
              @click="openModal('Unified Directory Sync')"
              class="btn-primary text-[13px] sm:text-[14px] px-8 py-3.5"
            >
              Schedule A Meeting Today
            </button>
          </div>
          <div class="md:col-span-5 h-full flex justify-end items-center relative overflow-hidden">
            <img
              :src="unifiedDirectorySyncImg"
              alt="Unified Directory Sync"
              class="w-full h-full object-cover object-left"
              loading="lazy"
            />
          </div>
        </div>

        <!-- Card 2: Brand Image Protection: -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          class="w-full md:w-[900px] min-h-[460px] md:h-[500px] bg-white rounded-3xl sm:rounded-4xl overflow-hidden grid grid-cols-1 md:grid-cols-12 items-center border border-neutral-200/50 shadow-sm text-left transition-all duration-300 hover:shadow-md"
        >
          <div class="md:col-span-5 h-full flex justify-start items-center relative overflow-hidden order-2 md:order-1">
            <img
              :src="brandImageProtectionImg"
              alt="Brand Image Protection"
              class="w-full h-full object-cover object-right"
              loading="lazy"
            />
          </div>
          <div class="p-8 sm:p-10 lg:p-12 md:col-span-7 flex flex-col items-start justify-center order-1 md:order-2">
            <h3 class="font-poppins text-2xl sm:text-3xl font-medium text-neutral-900 mb-4">
              Brand Image Protection:
            </h3>
            <p class="font-poppins text-neutral-700 text-base sm:text-lg leading-relaxed mb-8 max-w-sm">
              Prevent unauthorized edits, spam listings, or rogue duplicates from misleading your customers and diluting your brand identity.
            </p>
            <button
              @click="openModal('Brand Image Protection')"
              class="btn-primary text-[13px] sm:text-[14px] px-8 py-3.5"
            >
              Schedule A Meeting Today
            </button>
          </div>
        </div>

        <!-- Card 3: Proactive Monitoring & Maintenance: -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          class="w-full md:w-[900px] min-h-[460px] md:h-[500px] bg-white rounded-3xl sm:rounded-4xl overflow-hidden grid grid-cols-1 md:grid-cols-12 items-center border border-neutral-200/50 shadow-sm text-left transition-all duration-300 hover:shadow-md"
        >
          <div class="p-8 sm:p-10 lg:p-12 md:col-span-7 flex flex-col items-start justify-center">
            <h3 class="font-poppins text-2xl sm:text-3xl font-medium text-neutral-900 mb-4">
              Proactive Monitoring &amp;<br class="hidden sm:inline" />Maintenance:
            </h3>
            <p class="font-poppins text-neutral-700 text-base sm:text-lg leading-relaxed mb-8 max-w-sm">
              Our specialists continuously monitor your listings to catch sudden changes, holiday hour adjustments, or platform policy updates before they impact your business.
            </p>
            <button
              @click="openModal('Proactive Monitoring & Maintenance')"
              class="btn-primary text-[13px] sm:text-[14px] px-8 py-3.5"
            >
              Schedule A Meeting Today
            </button>
          </div>
          <div class="md:col-span-5 h-full flex justify-end items-center relative overflow-hidden">
            <img
              :src="proactiveMonitoringImg"
              alt="Proactive Monitoring and Maintenance"
              class="w-full h-full object-cover object-left"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Section 3: Built for Multi-Location Brands and Dealer Networks -->
    <section class="mx-auto lg:w-[95%] max-w-[1600px] px-6 sm:px-8 lg:px-12 mb-20 sm:mb-28">
      <div class="text-center max-w-[1000px] mx-auto mb-12 sm:mb-16">
        <h2
          v-motion
          :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }"
          :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }"
          class="font-poppins text-3xl sm:text-4xl lg:text-[42px] font-medium text-neutral-900 leading-tight tracking-tight mb-4"
        >
          <span class="text-primary font-medium">Built For Multi-Location Brands</span> And<br />
          Dealer Networks
        </h2>
        <p class="font-poppins text-neutral-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
          Managing one location is easy. Managing dozens or hundreds of regional nodes requires enterprise-grade structure. We scale your local presence seamlessly.
        </p>
      </div>

      <!-- Main Container with Multi-Location Background and 3 Foreground Cards -->
      <div class="relative w-full rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-sm border border-neutral-200/50 bg-[#2d1f1f]">
        <!-- Background Image -->
        <img
          :src="multiLocationBgImg"
          alt="Multi-Location Brands and Dealer Networks meeting"
          class="w-full h-full min-h-[620px] object-cover object-center absolute inset-0 pointer-events-none select-none opacity-90"
        />

        <!-- Dark/Blur Overlay for Contrast -->
        <div class="absolute inset-0 bg-black/40 pointer-events-none"></div>

        <!-- 3 Cards Layout -->
        <div class="relative z-10 p-6 sm:p-10 lg:p-14">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-[1360px] mx-auto justify-items-center">
            <!-- Card 1: Master-to-Regional Architecture -->
            <div
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
              class="w-full max-w-[420px] min-h-[380px] bg-[#EAFCFF] backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex flex-col justify-between shadow-lg border border-white/60 transition-transform duration-300 hover:-translate-y-1"
            >
              <div>
                <h3 class="font-poppins text-[22px] sm:text-[24px] font-medium text-[#002127] mb-4">
                  Master-To-Regional Architecture
                </h3>
                <div class="w-full h-[180px] overflow-hidden rounded-xl sm:rounded-2xl mb-4">
                  <img
                    :src="masterRegionalImg"
                    alt="Master-to-Regional Architecture"
                    class="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
              </div>
              <p class="font-poppins text-[15px] sm:text-[16px] text-neutral-700 leading-relaxed">
                Connect your primary corporate brand presence down to individual regional dealer nodes with unified governance.
              </p>
            </div>

            <!-- Card 2: Localised Performance Analytics -->
            <div
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 100 } }"
              class="w-full max-w-[420px] min-h-[380px] bg-[#EAFCFF] backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex flex-col justify-between shadow-lg border border-white/60 transition-transform duration-300 hover:-translate-y-1"
            >
              <div>
                <h3 class="font-poppins text-[22px] sm:text-[24px] font-medium text-[#002127] mb-4">
                  Localised Performance Analytics
                </h3>
                <div class="w-full h-[180px] overflow-hidden rounded-xl sm:rounded-2xl mb-4">
                  <img
                    :src="localisedAnalyticsImg"
                    alt="Localised Performance Analytics"
                    class="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
              </div>
              <p class="font-poppins text-[15px] sm:text-[16px] text-neutral-700 leading-relaxed">
                Track impression counts, search queries, direct map clicks, and call actions broken down by every individual branch or dealership.
              </p>
            </div>

            <!-- Card 3: Streamlined Campaign Rollouts -->
            <div
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 200 } }"
              class="w-full max-w-[420px] min-h-[380px] bg-[#EAFCFF] backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex flex-col justify-between shadow-lg border border-white/60 transition-transform duration-300 hover:-translate-y-1"
            >
              <div>
                <h3 class="font-poppins text-[22px] sm:text-[24px] font-medium text-[#002127] mb-4">
                  Streamlined Campaign Rollouts
                </h3>
                <div class="w-full h-[180px] overflow-hidden rounded-xl sm:rounded-2xl mb-4">
                  <img
                    :src="streamlinedCampaignImg"
                    alt="Streamlined Campaign Rollouts"
                    class="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
              </div>
              <p class="font-poppins text-[15px] sm:text-[16px] text-neutral-700 leading-relaxed">
                Push synchronized updates, seasonal promotions, or emergency announcements across your entire network in a single click.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 4: Secure Your Local Presence in Three Simple Steps -->
    <section class="mx-auto lg:w-[95%] max-w-[1600px] px-6 sm:px-8 lg:px-12 mb-20 sm:mb-28">
      <div class="mb-10 sm:mb-12">
        <h2
          v-motion
          :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }"
          :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }"
          class="font-poppins text-3xl sm:text-4xl lg:text-[42px] font-medium text-neutral-900 leading-tight tracking-tight"
        >
          Secure Your Local Presence In Three Simple Steps
        </h2>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <!-- Left: 3 Steps -->
        <div class="lg:col-span-6 flex flex-col gap-8">
          <!-- Step 1 -->
          <div class="flex items-start gap-4 sm:gap-5">
            <div class="shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mt-0.5 shadow-sm">
              <Check class="w-4 h-4 stroke-[3]" />
            </div>
            <div>
              <p class="font-poppins text-neutral-700 text-base sm:text-lg leading-relaxed">
                <strong class="font-semibold text-neutral-900">Comprehensive Audit:</strong> We analyse your current digital footprint across all major maps and directories to identify errors, duplicates, and missed opportunities.
              </p>
            </div>
          </div>

          <!-- Step 2 -->
          <div class="flex items-start gap-4 sm:gap-5">
            <div class="shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mt-0.5 shadow-sm">
              <Check class="w-4 h-4 stroke-[3]" />
            </div>
            <div>
              <p class="font-poppins text-neutral-700 text-base sm:text-lg leading-relaxed">
                <strong class="font-semibold text-neutral-900">Cleanse &amp; Optimise:</strong> Our experts claim, verify, and rebuild your listings with high-res brand assets, correct contact data, and optimised local keywords.
              </p>
            </div>
          </div>

          <!-- Step 3 -->
          <div class="flex items-start gap-4 sm:gap-5">
            <div class="shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mt-0.5 shadow-sm">
              <Check class="w-4 h-4 stroke-[3]" />
            </div>
            <div>
              <p class="font-poppins text-neutral-700 text-base sm:text-lg leading-relaxed">
                <strong class="font-semibold text-neutral-900">Maintain &amp; Grow:</strong> Enjoy ongoing active monitoring and routine maintenance so your business remains pristine, trustworthy, and fully visible 24/7.
              </p>
            </div>
          </div>

          <div class="pt-4">
            <button
              @click="openModal('Secure Local Presence - Steps')"
              class="btn-primary text-[14px] sm:text-[15px] px-9 py-3.5"
            >
              Schedule A Meeting Today
            </button>
          </div>
        </div>

        <!-- Right: Image -->
        <div class="lg:col-span-6 flex justify-center lg:justify-end">
          <div class="w-full max-w-[640px] rounded-3xl overflow-hidden shadow-md border border-neutral-200/50">
            <img
              :src="securePresenceImg"
              alt="Secure Your Local Presence in Three Simple Steps dashboard"
              class="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Bottom CTA Banner Card -->
    <section class="mx-auto lg:w-[95%] max-w-[1600px] px-6 sm:px-8 lg:px-12 py-8 lg:py-16 mb-16 sm:mb-24">
      <div class="relative w-full rounded-3xl sm:rounded-[2.5rem] overflow-hidden min-h-[380px] sm:min-h-[460px] lg:min-h-[500px] flex items-center shadow-md border border-neutral-200/50">
        <!-- Background Image -->
        <img
          :src="ctaBannerImg"
          alt="Are Your Locations Costing You Customers Right Now?"
          class="absolute inset-0 w-full h-full object-cover object-right z-0"
          loading="lazy"
        />

        <!-- Gradient Tint Overlay for text legibility -->
        <div class="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent z-10 w-full lg:w-[65%]"></div>

        <!-- Content Overlay -->
        <div class="relative z-20 p-8 sm:p-14 lg:p-20 max-w-2xl flex flex-col items-start">
          <h2
            v-motion
            :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }"
            :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }"
            class="font-poppins text-3xl sm:text-4xl lg:text-[42px] font-medium text-neutral-900 leading-[1.2] tracking-tight mb-5"
          >
            Are Your Locations Costing You Customers Right Now?
          </h2>
          <p class="font-poppins text-neutral-700 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
            Let R-E-D run a digital audit of your current maps and directory listings to uncover hidden gaps.
          </p>
          <button
            @click="openModal('Location Listing - CTA Banner')"
            class="btn-primary text-[14px] sm:text-[15px] px-9 py-3.5"
          >
            Schedule A Meeting Today
          </button>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section
      v-motion
      :initial="{ opacity: 0, y: 30 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      class="w-full bg-white py-20 sm:py-28 px-6 sm:px-8 lg:px-12 border-t border-neutral-200/50"
    >
      <div class="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">
        <!-- Left Side: Headings & CTA Card -->
        <div class="w-full lg:w-[40%] flex flex-col items-start">
          <span class="text-primary font-poppins text-lg font-medium mb-4">Why us?</span>
          <h2
            v-motion
            :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }"
            :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }"
            class="font-poppins text-4xl sm:text-5xl lg:text-[4rem] leading-[1.1] font-medium text-neutral-900 mb-10 tracking-tight"
          >
            Frequently Asked<br />Questions
          </h2>

          <!-- CTA Card -->
          <div class="w-full bg-[#e8f5f7] rounded-4xl p-8 sm:p-10 flex flex-col items-start mt-4">
            <h3
              v-motion
              :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }"
              :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }"
              class="font-poppins text-2xl font-medium text-neutral-900 mb-4"
            >
              Still Have A Question?
            </h3>
            <p class="font-poppins text-neutral-700 text-base sm:text-lg leading-relaxed mb-8">
              If you'd like to know more about how R-E-D can help your business generate more leads.
            </p>
            <button
              @click="openModal('Location Listing - FAQ Meeting')"
              class="btn-primary text-xs sm:text-[15px] px-8 py-4"
            >
              Schedule A Meeting Today
            </button>
          </div>
        </div>

        <!-- Right Side: Accordion -->
        <div class="w-full lg:w-[60%] flex flex-col gap-4">
          <div
            v-for="(faq, index) in faqData"
            :key="index"
            class="bg-[#fafafa] rounded-3xl overflow-hidden transition-all duration-300 border border-neutral-100"
          >
            <button
              @click="toggleFaq(index)"
              class="w-full flex items-center justify-between p-6 sm:px-8 sm:py-7 text-left focus:outline-none cursor-pointer"
            >
              <span class="font-poppins font-semibold text-lg sm:text-xl text-neutral-900 pr-4">
                {{ faq.question }}
              </span>
              <div
                class="flex-shrink-0 text-primary transition-transform duration-300"
                :class="{ 'rotate-180': activeFaq === index }"
              >
                <ChevronDown class="w-6 h-6" stroke-width="2.5" />
              </div>
            </button>
            <transition
              enter-active-class="transition-[height,opacity] duration-300 ease-in-out"
              leave-active-class="transition-[height,opacity] duration-300 ease-in-out"
              @enter="enter"
              @after-enter="afterEnter"
              @leave="leave"
            >
              <div v-show="activeFaq === index" class="overflow-hidden">
                <div class="px-6 pb-6 sm:px-8 sm:pb-8 pt-0 text-neutral-600 font-poppins text-base sm:text-lg leading-relaxed">
                  {{ faq.answer }}
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ArrowLeft, Check, ChevronDown } from 'lucide-vue-next';

// Shared Components
import LogoCarousel from '~/components/unsorted/LogoCarousel.vue';

// Assets
import heroDesktopBanner from '~/assets/images/r-e-d-location-and-listing-solutions-desktop-hero-banner.png';
import heroMobileBanner from '~/assets/images/r-e-d-location-and-listing-solutions-mobile-hero-banner.png';
import instantTrustImg from '~/assets/images/instant-trust-credibility-image.png';
import localSearchDominanceImg from '~/assets/images/local-search-dominance-image.png';
import zeroFrictionImg from '~/assets/images/zero-friction-for-buyers-image.png';
import unifiedDirectorySyncImg from '~/assets/images/unified-directory-sync-image.png';
import brandImageProtectionImg from '~/assets/images/brand-image-protection-image.png';
import proactiveMonitoringImg from '~/assets/images/proactive-monitor-and-maintenance-image.png';
import multiLocationBgImg from '~/assets/images/multi-location-brands-desktop-image.png';
import masterRegionalImg from '~/assets/images/master-regional-architecture-image.png';
import localisedAnalyticsImg from '~/assets/images/localised-performance-analytics-image.png';
import streamlinedCampaignImg from '~/assets/images/streamkined-campaign-image.png';
import securePresenceImg from '~/assets/images/secure-your-local-presence-image.png';
import ctaBannerImg from '~/assets/images/location listing-cta-banner-image.png';

const { openModal } = useModal();

// Accordion Logic
const activeFaq = ref<number | null>(null);

const toggleFaq = (index: number) => {
  activeFaq.value = activeFaq.value === index ? null : index;
};

const enter = (el: Element) => {
  const element = el as HTMLElement;
  element.style.height = 'auto';
  const height = element.getBoundingClientRect().height;
  element.style.height = '0px';
  element.offsetHeight; // trigger reflow
  element.style.height = `${height}px`;
};

const afterEnter = (el: Element) => {
  const element = el as HTMLElement;
  element.style.height = 'auto';
};

const leave = (el: Element) => {
  const element = el as HTMLElement;
  element.style.height = `${element.getBoundingClientRect().height}px`;
  element.offsetHeight; // trigger reflow
  element.style.height = '0px';
};

const faqData = [
  {
    question: "Why can't my team just update Google Maps ourselves?",
    answer: "While manual updates are possible for a single location, managing dozens of platforms and branches is time-consuming and error-prone. Additionally, Google frequently accepts suggested edits from third parties and users, which can overwrite your accurate details without warning. R-E-D provides automated sync, listing locking, and active monitoring to ensure your data stays protected 24/7."
  },
  {
    question: "Which platforms and directories do you manage?",
    answer: "We manage all primary and high-impact digital directories including Google Business Profile, Apple Maps, Waze, Bing Places, Facebook Locations, Here WeGo, TomTom, and major local automotive and business directories."
  },
  {
    question: "How quickly do changes go live?",
    answer: "Directly integrated platforms like Google Business Profile and Apple Maps typically update within minutes to hours. Secondary navigational networks and syndicated local directories typically sync within 24 to 48 hours."
  },
  {
    question: "Do you work with businesses in my industry?",
    answer: "Yes! While we have specialized depth in automotive dealer groups and multi-location franchises, our location listing solutions power retail chains, hospitality groups, medical centers, and professional service networks across the country."
  },
  {
    question: "What makes your agency different?",
    answer: "Unlike self-service software tools where your team still has to do the heavy lifting, R-E-D provides fully managed solutions backed by dedicated specialists who handle verification, dispute resolution, duplicate suppression, and ongoing maintenance for you."
  }
];
</script>
