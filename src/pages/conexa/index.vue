<template>
  <div class="bg-[#fafbfc] text-neutral-900 min-h-screen pt-6 sm:pt-10 pb-20 overflow-x-hidden font-sans">
    
    <!-- Top Back Breadcrumb -->
    <div class="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8 mb-6">
      <NuxtLink
        to="/"
        class="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-primary transition-colors duration-200"
      >
        <ArrowLeft class="w-4 h-4" />
        back to home
      </NuxtLink>
    </div>

    <!-- 1. Hero Section -->
    <section class="px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto mb-16 sm:mb-24">
      <!-- Desktop Hero Layout (lg and up) -->
      <div class="hidden lg:block relative w-full rounded-[2.5rem] overflow-hidden border border-neutral-200/60 shadow-sm">
        <!-- Background Banner Graphic with Laptop & Truck -->
        <img
          :src="heroBannerImg"
          alt="Conexa - Take Control. Convert More."
          class="w-full h-auto block select-none pointer-events-none"
          fetchpriority="high"
          loading="eager"
        />

        <!-- Overlaid Content on Left -->
        <div class="absolute inset-y-0 left-0 w-[52%] flex flex-col justify-center items-start pl-12 lg:pl-16 xl:pl-24 pr-4 z-10 text-left">
          <img
            :src="conexaLogo"
            alt="Conexa"
            class="h-6 sm:h-7 lg:h-7.5 xl:h-8 w-auto mb-5 xl:mb-6 object-contain"
          />
          
          <h1
            v-motion
            :initial="{ opacity: 0, y: 25 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
            class="font-poppins text-3xl lg:text-[2.6rem] xl:text-[3.5rem] font-medium tracking-tight text-neutral-900 leading-[1.12] mb-5"
          >
            Take Control.<br />
            <span class="text-primary">Convert More.</span>
          </h1>

          <p class="font-poppins text-neutral-700 text-xs sm:text-sm lg:text-[0.95rem] xl:text-base leading-relaxed max-w-md lg:max-w-lg mb-3 font-normal">
            The website content management platform built to convert and built for you to control.
          </p>

          <p class="font-poppins text-neutral-600 text-xs sm:text-sm lg:text-[0.95rem] xl:text-base leading-relaxed max-w-md lg:max-w-lg mb-7 xl:mb-8 font-normal">
            Manage it yourself, let R-E-D manage it, or both.
          </p>

          <button
            @click="openModal('Conexa')"
            class="btn-primary text-xs sm:text-sm lg:text-base px-8 lg:px-9 py-3 lg:py-3.5"
          >
            Schedule A Meeting Today
          </button>
        </div>
      </div>

      <!-- Mobile & Tablet Hero Layout (< lg) -->
      <div class="block lg:hidden relative w-full rounded-3xl overflow-hidden bg-gradient-to-br from-[#dfeef8] via-[#e8f1f8] to-[#eee5f5] border border-neutral-200/60 p-6 sm:p-10 text-center">
        <div class="flex flex-col items-center">
          <img
            :src="conexaLogo"
            alt="Conexa"
            class="h-6 sm:h-7 w-auto mb-4 object-contain"
          />
          
          <h1
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
            class="font-poppins text-3xl sm:text-4xl font-medium tracking-tight text-neutral-900 leading-[1.15] mb-4"
          >
            Take Control.<br />
            <span class="text-primary">Convert More.</span>
          </h1>

          <p class="font-poppins text-neutral-700 text-sm sm:text-base leading-relaxed max-w-md mb-2">
            The website content management platform built to convert and built for you to control.
          </p>

          <p class="font-poppins text-neutral-600 text-xs sm:text-sm leading-relaxed max-w-md mb-6">
            Manage it yourself, let R-E-D manage it, or both.
          </p>

          <button
            @click="openModal('Conexa')"
            class="btn-primary text-sm px-8 py-3 mb-6"
          >
            Schedule A Meeting Today
          </button>

          <div class="w-full flex justify-center">
            <img
              :src="heroBannerImg"
              alt="Conexa - Take Control. Convert More."
              class="w-full max-w-[500px] h-auto object-contain"
              fetchpriority="high"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- 2. Brands Trust Bar -->
    <section class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-28 text-center">
      <p class="font-poppins text-xs sm:text-sm font-medium text-neutral-400 uppercase tracking-widest mb-8">
        Trusted By 500+ dealers Country Wide
      </p>
      
      <div class="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-14 opacity-75 grayscale hover:grayscale-0 transition-all duration-500">
        <img v-for="brand in brandLogos" :key="brand.name" :src="brand.src" :alt="brand.name" class="h-6 sm:h-8 w-auto max-w-[90px] sm:max-w-[110px] object-contain transition-transform duration-200 hover:scale-110" />
      </div>
    </section>

    <!-- 3. Section: Take Your Digital Showroom To The Next Level -->
    <section class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 mb-24 sm:mb-32">
      <div class="text-center max-w-4xl mx-auto mb-14">
        <h2
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
          class="font-poppins text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-neutral-900 leading-tight mb-3"
        >
          <span class="text-primary">Take Your Digital Showroom</span><br />
          To The Next Level.
        </h2>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
        <!-- Left Featured Card -->
        <div class="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200/70 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
          <div class="w-full overflow-hidden rounded-2xl mb-6 bg-neutral-100">
            <img
              :src="outdatedStaleImg"
              alt="If your website is outdated or stale"
              class="w-full h-auto object-cover hover:scale-102 transition-transform duration-500"
              loading="lazy"
            />
          </div>
          <div>
            <h3 class="font-poppins text-xl sm:text-2xl font-medium text-neutral-900 mb-3 leading-snug">
              <span class="text-primary">If Your Website Is Outdated Or Stale,</span><br />
              The Visit Ends Before It Starts.
            </h3>
            <p class="font-poppins text-neutral-600 text-sm sm:text-base leading-relaxed">
              Your website is your busiest showroom – and most are underperforming.
            </p>
          </div>
        </div>

        <!-- Right 2x2 Stats Grid -->
        <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
          <!-- Stat 1 (Highlighted Cyan Card) -->
          <div class="bg-[#dff1f7] rounded-3xl p-8 border border-[#c1e5f0] flex flex-col justify-center items-center text-center shadow-sm">
            <div class="font-poppins text-5xl sm:text-6xl font-bold text-primary mb-3 tracking-tight">
              92%
            </div>
            <p class="font-poppins text-neutral-700 text-sm sm:text-base font-normal max-w-[220px]">
              of car buyers research online before they ever visit.
            </p>
          </div>

          <!-- Stat 2 -->
          <div class="bg-white rounded-3xl p-8 border border-neutral-200/70 flex flex-col justify-center items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300">
            <div class="font-poppins text-5xl sm:text-6xl font-bold text-[#1f7e96] mb-3 tracking-tight">
              70+%
            </div>
            <p class="font-poppins text-neutral-600 text-sm sm:text-base font-normal max-w-[200px]">
              research on mobile
            </p>
          </div>

          <!-- Stat 3 -->
          <div class="bg-white rounded-3xl p-8 border border-neutral-200/70 flex flex-col justify-center items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300">
            <div class="font-poppins text-5xl sm:text-6xl font-bold text-[#1f7e96] mb-3 tracking-tight">
              53+%
            </div>
            <p class="font-poppins text-neutral-600 text-sm sm:text-base font-normal max-w-[220px]">
              abandon when product info is out of date
            </p>
          </div>

          <!-- Stat 4 -->
          <div class="bg-white rounded-3xl p-8 border border-neutral-200/70 flex flex-col justify-center items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300">
            <div class="font-poppins text-5xl sm:text-6xl font-bold text-[#1f7e96] mb-3 tracking-tight">
              92%
            </div>
            <p class="font-poppins text-neutral-600 text-sm sm:text-base font-normal max-w-[220px]">
              of car buyers research online before they ever visit.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. Section: How Quickly Can You Update Your Website? -->
    <section class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 mb-24 sm:mb-32">
      <div class="text-center max-w-4xl mx-auto mb-16">
        <h2
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
          class="font-poppins text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-neutral-900 leading-tight mb-3"
        >
          <span class="text-primary">How Quickly Can You Update Your Website?</span><br />
          Need A Technical Team Or Support Ticket...
        </h2>
      </div>

      <!-- Center Laptop with 4 Surrounding Cards -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
        <!-- Left 2 Callouts -->
        <div class="lg:col-span-3 flex flex-col gap-10 sm:gap-14 text-left">
          <!-- Item 1: Ticket & wait -->
          <div class="flex flex-col items-start">
            <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
              <Ticket class="w-6 h-6" />
            </div>
            <h3 class="font-poppins text-xl font-medium text-neutral-900 mb-2">
              Ticket &amp; Wait
            </h3>
            <p class="font-poppins text-neutral-600 text-sm sm:text-base leading-relaxed">
              A price change or a typo means logging a ticket. Days to go live. Your offer is late or wrong.
            </p>
          </div>

          <!-- Item 2: Locked out -->
          <div class="flex flex-col items-start">
            <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
              <Lock class="w-6 h-6" />
            </div>
            <h3 class="font-poppins text-xl font-medium text-neutral-900 mb-2">
              Locked Out
            </h3>
            <p class="font-poppins text-neutral-600 text-sm sm:text-base leading-relaxed">
              Nobody knows your brand, stock and locations better than you - yet you can’t customise your own site.
            </p>
          </div>
        </div>

        <!-- Center Laptop Graphic -->
        <div class="lg:col-span-6 flex justify-center items-center">
          <img
            :src="howQuicklyImg"
            alt="Conexa CMS Dashboard on Laptop"
            class="w-full max-w-[650px] h-auto object-contain drop-shadow-2xl"
            loading="lazy"
          />
        </div>

        <!-- Right 2 Callouts -->
        <div class="lg:col-span-3 flex flex-col gap-10 sm:gap-14 text-left">
          <!-- Item 3: Teams left waiting -->
          <div class="flex flex-col items-start">
            <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
              <Users class="w-6 h-6" />
            </div>
            <h3 class="font-poppins text-xl font-medium text-neutral-900 mb-2">
              Teams Left Waiting
            </h3>
            <p class="font-poppins text-neutral-600 text-sm sm:text-base leading-relaxed">
              Marketing, digital and social wait on developers for the simplest content change before a campaign can go live.
            </p>
          </div>

          <!-- Item 4: Scattered & blind -->
          <div class="flex flex-col items-start">
            <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
              <BarChart3 class="w-6 h-6" />
            </div>
            <h3 class="font-poppins text-xl font-medium text-neutral-900 mb-2">
              Scattered &amp; Blind
            </h3>
            <p class="font-poppins text-neutral-600 text-sm sm:text-base leading-relaxed">
              Performance hides across Analytics, Meta, complex systems and lead tools. Managers out of the loop.
            </p>
          </div>
        </div>
      </div>

      <!-- Quote under section -->
      <div class="text-center max-w-4xl mx-auto pt-4">
        <p class="font-poppins italic text-neutral-600 text-base sm:text-lg font-normal">
          “Adding new offers, location, brand or models? Today that means a costly rebuild – and sales lost while you wait.”
        </p>
      </div>
    </section>

    <!-- 5. Section: One Ecosystem. Four pillars. -->
    <section class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 mb-24 sm:mb-32">
      <div class="max-w-4xl mb-12">
        <h2
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
          class="font-poppins text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-neutral-900 mb-3"
        >
          One Ecosystem. Four Pillars.
        </h2>
        <p class="font-poppins text-neutral-600 text-base sm:text-lg">
          Build it, wire it in, control who touches it, and see what converts - all in one place.<br class="hidden sm:inline" />
          <span class="text-primary italic font-medium">Self-managed, RED-managed, or hybrid - your choice.</span>
        </p>
      </div>

      <!-- 4 Pillars Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        <!-- Convert -->
        <div class="bg-white rounded-3xl p-6 sm:p-7 border border-neutral-200/70 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
          <div>
            <h3 class="font-poppins text-2xl font-medium text-neutral-800 mb-4">
              Convert
            </h3>
            <div class="rounded-2xl overflow-hidden bg-neutral-100 mb-6">
              <img :src="convertImg1" alt="Convert" class="w-full h-auto object-cover hover:scale-103 transition-transform duration-300" loading="lazy" />
            </div>
          </div>
          <div class="flex items-start gap-2.5">
            <span class="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
            <p class="font-poppins text-neutral-600 text-sm sm:text-base leading-relaxed">
              See what sells - every lead, page and offer in one view.
            </p>
          </div>
        </div>

        <!-- Create -->
        <div class="bg-white rounded-3xl p-6 sm:p-7 border border-neutral-200/70 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
          <div>
            <h3 class="font-poppins text-2xl font-medium text-neutral-800 mb-4">
              Create
            </h3>
            <div class="rounded-2xl overflow-hidden bg-neutral-100 mb-6">
              <img :src="createImg1" alt="Create" class="w-full h-auto object-cover hover:scale-103 transition-transform duration-300" loading="lazy" />
            </div>
          </div>
          <div class="flex items-start gap-2.5">
            <span class="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
            <p class="font-poppins text-neutral-600 text-sm sm:text-base leading-relaxed">
              Edit and manage pages, offers, stock, banners and more - yourself, no code.
            </p>
          </div>
        </div>

        <!-- Connect -->
        <div class="bg-white rounded-3xl p-6 sm:p-7 border border-neutral-200/70 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
          <div>
            <h3 class="font-poppins text-2xl font-medium text-neutral-800 mb-4">
              Connect
            </h3>
            <div class="rounded-2xl overflow-hidden bg-neutral-100 mb-6">
              <img :src="connectImg1" alt="Connect" class="w-full h-auto object-cover hover:scale-103 transition-transform duration-300" loading="lazy" />
            </div>
          </div>
          <div class="flex items-start gap-2.5">
            <span class="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
            <p class="font-poppins text-neutral-600 text-sm sm:text-base leading-relaxed">
              OEM data, stock feeds, lead routing, analytics, WhatsApp, and more...
            </p>
          </div>
        </div>

        <!-- Control -->
        <div class="bg-white rounded-3xl p-6 sm:p-7 border border-neutral-200/70 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
          <div>
            <h3 class="font-poppins text-2xl font-medium text-neutral-800 mb-4">
              Control
            </h3>
            <div class="rounded-2xl overflow-hidden bg-neutral-100 mb-6">
              <img :src="controlImg1" alt="Control" class="w-full h-auto object-cover hover:scale-103 transition-transform duration-300" loading="lazy" />
            </div>
          </div>
          <div class="flex items-start gap-2.5">
            <span class="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
            <p class="font-poppins text-neutral-600 text-sm sm:text-base leading-relaxed">
              Role-based access. One hub, every dealership, brand and showroom.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. Section: See Everything. In One place. -->
    <section class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 mb-24 sm:mb-32">
      <div class="mb-12">
        <h2
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
          class="font-poppins text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-neutral-900"
        >
          See Everything. In One Place.
        </h2>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <!-- 4 Bullet Features on Left -->
        <div class="lg:col-span-5 flex flex-col gap-8">
          <!-- 1 -->
          <div class="flex items-start gap-4">
            <div class="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0 mt-1 shadow-sm">
              <Check class="w-4 h-4 stroke-[3]" />
            </div>
            <div>
              <h3 class="font-poppins text-xl font-medium text-neutral-900 mb-1.5">
                Live Performance
              </h3>
              <p class="font-poppins text-neutral-600 text-sm sm:text-base leading-relaxed">
                Bounce to conversion, page by page - what works, and what’s viewed but never converts.
              </p>
            </div>
          </div>

          <!-- 2 -->
          <div class="flex items-start gap-4">
            <div class="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0 mt-1 shadow-sm">
              <Check class="w-4 h-4 stroke-[3]" />
            </div>
            <div>
              <h3 class="font-poppins text-xl font-medium text-neutral-900 mb-1.5">
                Your Data, Imported
              </h3>
              <p class="font-poppins text-neutral-600 text-sm sm:text-base leading-relaxed">
                Google Analytics and Google Ads in one view - no more separate logins.
              </p>
            </div>
          </div>

          <!-- 3 -->
          <div class="flex items-start gap-4">
            <div class="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0 mt-1 shadow-sm">
              <Check class="w-4 h-4 stroke-[3]" />
            </div>
            <div>
              <h3 class="font-poppins text-xl font-medium text-neutral-900 mb-1.5">
                Every Lead, Attributed
              </h3>
              <p class="font-poppins text-neutral-600 text-sm sm:text-base leading-relaxed">
                Test drives, finance, parts, service, specials - plus WhatsApp clicks &amp; phone-call clicks. One funnel, attributed.
              </p>
            </div>
          </div>

          <!-- 4 -->
          <div class="flex items-start gap-4">
            <div class="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0 mt-1 shadow-sm">
              <Check class="w-4 h-4 stroke-[3]" />
            </div>
            <div>
              <h3 class="font-poppins text-xl font-medium text-neutral-900 mb-1.5">
                Visibility For Managers
              </h3>
              <p class="font-poppins text-neutral-600 text-sm sm:text-base leading-relaxed">
                Non-technical managers see demand and performance without an extra login or training.
              </p>
            </div>
          </div>
        </div>

        <!-- Right Side: Showroom Tablet Image -->
        <div class="lg:col-span-7 flex justify-center lg:justify-end">
          <div class="w-full overflow-hidden rounded-3xl shadow-lg border border-neutral-200/60">
            <img
              :src="everythingOnePlaceImg"
              alt="Conexa CMS in Dealership Showroom"
              class="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- 7. Section: Update Anything. No ticket. No code. -->
    <section class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 mb-24 sm:mb-32">
      <div class="mb-12">
        <h2
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
          class="font-poppins text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-tight mb-2"
        >
          <span class="text-primary">Update Anything.</span><br />
          <span class="text-neutral-900">No Ticket.</span> No Code.
        </h2>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-10">
        <!-- Left Pale Blue Container -->
        <div class="lg:col-span-5 bg-[#e3ecf7] rounded-3xl p-8 sm:p-12 flex flex-col justify-center border border-[#d2e2f3] shadow-sm">
          <h3 class="font-poppins text-2xl sm:text-3xl font-medium text-neutral-900 mb-4">
            Built For Your Teams
          </h3>
          <p class="font-poppins text-neutral-700 text-sm sm:text-base leading-relaxed mb-6 font-normal">
            A simple interface so your marketing, digital and social teams get content live themselves - no technical training, no back-and-forth on email or tickets, no explaining the basics.
          </p>
          <p class="font-poppins text-neutral-800 text-sm sm:text-base font-medium">
            Manage the content that matters - we handle the rest
          </p>
        </div>

        <!-- Right Features List -->
        <div class="lg:col-span-7 flex flex-col justify-center gap-6 bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200/70 shadow-sm">
          <!-- 1 -->
          <div class="flex items-start gap-4">
            <div class="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0 mt-1 shadow-sm">
              <Check class="w-3.5 h-3.5 stroke-[3]" />
            </div>
            <div>
              <h4 class="font-poppins text-lg sm:text-xl font-medium text-neutral-900 mb-1">
                Edit Every Element
              </h4>
              <p class="font-poppins text-neutral-600 text-sm sm:text-base leading-relaxed">
                Specials, CTAs, banners, logos &amp; CI, staff, products - add, change or remove in minutes.
              </p>
            </div>
          </div>

          <!-- 2 -->
          <div class="flex items-start gap-4">
            <div class="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0 mt-1 shadow-sm">
              <Check class="w-3.5 h-3.5 stroke-[3]" />
            </div>
            <div>
              <h4 class="font-poppins text-lg sm:text-xl font-medium text-neutral-900 mb-1">
                Stock, Your Way
              </h4>
              <p class="font-poppins text-neutral-600 text-sm sm:text-base leading-relaxed">
                Enrich stock-feed listings or load custom products that aren’t on the feed.
              </p>
            </div>
          </div>

          <!-- 3 -->
          <div class="flex items-start gap-4">
            <div class="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0 mt-1 shadow-sm">
              <Check class="w-3.5 h-3.5 stroke-[3]" />
            </div>
            <div>
              <h4 class="font-poppins text-lg sm:text-xl font-medium text-neutral-900 mb-1">
                SEO &amp; GEO In Your Hands
              </h4>
              <p class="font-poppins text-neutral-600 text-sm sm:text-base leading-relaxed">
                Page-, product- and meta-level SEO editing - tuned for Google and AI search.
              </p>
            </div>
          </div>

          <!-- 4 -->
          <div class="flex items-start gap-4">
            <div class="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0 mt-1 shadow-sm">
              <Check class="w-3.5 h-3.5 stroke-[3]" />
            </div>
            <div>
              <h4 class="font-poppins text-lg sm:text-xl font-medium text-neutral-900 mb-1">
                AI-Assisted Polisher &amp; Checker
              </h4>
              <p class="font-poppins text-neutral-600 text-sm sm:text-base leading-relaxed">
                On most text fields - captions, headings, promos, blogs - reviewed and sharpened for you.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="text-left pt-2">
        <p class="font-poppins text-neutral-800 text-base sm:text-lg">
          <span class="italic font-semibold">Template</span>
          <span class="italic text-primary font-semibold"> or </span>
          <span class="italic font-semibold">personalised website,</span>
          <span class="font-normal text-neutral-600 ml-2">OEM-approved templates fast, or fully custom builds.</span>
        </p>
      </div>
    </section>

    <!-- 8. Mid-page CTA Banner -->
    <section class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 mb-24 sm:mb-32">
      <!-- DESKTOP BANNER (lg and up) -->
      <div class="hidden lg:block relative w-full rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-sm">
        <img
          :src="ctaBannerImg"
          alt="Ready To Simplify Your Conversations?"
          class="w-full h-auto block select-none pointer-events-none"
          loading="lazy"
        />

        <!-- Overlay Content -->
        <div class="absolute inset-y-0 left-0 w-[50%] flex flex-col justify-center items-start pl-10 lg:pl-14 xl:pl-20 pr-4 z-10 text-left">
          <span class="font-poppins text-neutral-800 text-sm xl:text-[15px] font-normal tracking-normal mb-3">
            Increase your sales rate today.
          </span>
          <h2
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
            class="font-poppins text-3xl lg:text-[2.25rem] xl:text-[2.85rem] font-medium text-neutral-900 leading-[1.18] tracking-tight mb-7"
          >
            Ready To Simplify<br />Your Conversations?
          </h2>
          <button
            @click="openModal('Conexa')"
            class="btn-primary text-xs sm:text-sm lg:text-[14px] px-8 py-3.5"
          >
            Schedule A Meeting
          </button>
        </div>
      </div>

      <!-- MOBILE & TABLET LAYOUT (below lg) -->
      <div class="flex flex-col items-start lg:hidden bg-gradient-to-br from-[#eff6fa] via-[#e8f1f7] to-[#dfecf5] rounded-3xl p-6 sm:p-10 shadow-sm border border-neutral-200/60 overflow-hidden">
        <span class="font-poppins text-neutral-800 text-xs sm:text-sm font-normal mb-2">
          Increase your sales rate today.
        </span>
        <h2
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
          class="font-poppins text-2xl sm:text-3xl font-medium text-neutral-900 leading-tight mb-5"
        >
          Ready To Simplify<br />Your Conversations?
        </h2>
        <button
          @click="openModal('Conexa')"
          class="btn-primary text-xs sm:text-sm px-8 py-3.5 mb-8"
        >
          Schedule A Meeting
        </button>
        <div class="w-full rounded-2xl overflow-hidden shadow-sm">
          <img
            :src="ctaBannerImg"
            alt="Ready To Simplify Your Conversations?"
            class="w-full h-auto object-cover object-right"
            loading="lazy"
          />
        </div>
      </div>
    </section>

    <!-- 9. Section: Your Whole Stack, Wired In. -->
    <section class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 mb-24 sm:mb-32">
      <div class="text-center max-w-4xl mx-auto mb-16">
        <h2
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
          class="font-poppins text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-neutral-900 mb-3"
        >
          <span class="text-primary">Your Whole Stack,</span> Wired In.
        </h2>
      </div>

      <!-- 6 Cards Grid (1 Image Card + 5 Features) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <!-- Card 1: Laptop Screen Mockup -->
        <div class="bg-gradient-to-br from-[#dfeef8] via-[#e6f1f8] to-[#eedef7] rounded-3xl p-6 sm:p-8 flex items-center justify-center border border-neutral-200/50 shadow-sm">
          <img
            :src="wholeStackImg"
            alt="Conexa CMS Stack"
            class="w-full h-auto object-contain drop-shadow-md hover:scale-103 transition-transform duration-300"
            loading="lazy"
          />
        </div>

        <!-- Card 2: Stock feeds & custom products -->
        <div class="bg-white rounded-3xl p-8 border border-neutral-200/70 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
          <div>
            <div class="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
              <ClipboardList class="w-6 h-6" />
            </div>
            <h3 class="font-poppins text-xl font-medium text-neutral-900 mb-2">
              Stock Feeds &amp; Custom Products
            </h3>
            <p class="font-poppins text-neutral-600 text-sm sm:text-base leading-relaxed">
              Live inventory, plus the stock that isn’t on the feed.
            </p>
          </div>
        </div>

        <!-- Card 3: OEM content & pricing -->
        <div class="bg-white rounded-3xl p-8 border border-neutral-200/70 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
          <div>
            <div class="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
              <Tag class="w-6 h-6" />
            </div>
            <h3 class="font-poppins text-xl font-medium text-neutral-900 mb-2">
              OEM Content &amp; Pricing
            </h3>
            <p class="font-poppins text-neutral-600 text-sm sm:text-base leading-relaxed">
              Brand assets, CI and automated pricing, globally fed and consistent.
            </p>
          </div>
        </div>

        <!-- Card 4: CRM, CMS & LMS -->
        <div class="bg-white rounded-3xl p-8 border border-neutral-200/70 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
          <div>
            <div class="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
              <Layers class="w-6 h-6" />
            </div>
            <h3 class="font-poppins text-xl font-medium text-neutral-900 mb-2">
              CRM, CMS &amp; LMS
            </h3>
            <p class="font-poppins text-neutral-600 text-sm sm:text-base leading-relaxed">
              Leads flow straight into the systems you already run.
            </p>
          </div>
        </div>

        <!-- Card 5: WhatsApp & Web Chat -->
        <div class="bg-white rounded-3xl p-8 border border-neutral-200/70 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
          <div>
            <div class="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
              <MessageSquare class="w-6 h-6" />
            </div>
            <h3 class="font-poppins text-xl font-medium text-neutral-900 mb-2">
              WhatsApp &amp; Web Chat
            </h3>
            <p class="font-poppins text-neutral-600 text-sm sm:text-base leading-relaxed">
              Chats &amp; conversations captured directly from your site.
            </p>
          </div>
        </div>

        <!-- Card 6: Meta & Google advertising -->
        <div class="bg-white rounded-3xl p-8 border border-neutral-200/70 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
          <div>
            <div class="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
              <Megaphone class="w-6 h-6" />
            </div>
            <h3 class="font-poppins text-xl font-medium text-neutral-900 mb-2">
              Meta &amp; Google Advertising
            </h3>
            <p class="font-poppins text-neutral-600 text-sm sm:text-base leading-relaxed">
              Inventory &amp; special-offer feeds for Meta, plus campaigns managed inside Conexa.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 10. Section: Add a Location, Brand or Model – In Minutes, Not a Rebuild. -->
    <section class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 mb-24 sm:mb-32">
      <div class="text-left mb-14">
        <h2
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
          class="font-poppins text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-neutral-900 leading-tight mb-3"
        >
          <span class="text-primary">Add A Location, Brand Or Model</span> – In Minutes, Not A Rebuild.
        </h2>
        <p class="font-poppins text-neutral-600 text-base sm:text-lg">
          Going live and growing never means starting over.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <!-- Left Column (Expand Without The Rebuild) -->
        <div class="lg:col-span-4 flex flex-col justify-between gap-6">
          <span class="font-poppins text-primary font-semibold text-base sm:text-lg">
            Expand Without The Rebuild
          </span>

          <div class="bg-white rounded-3xl p-8 border border-neutral-200/70 shadow-sm hover:shadow-md transition-shadow duration-300 flex-1 flex flex-col justify-center">
            <div class="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
              <TrendingUp class="w-6 h-6" />
            </div>
            <h3 class="font-poppins text-xl font-medium text-neutral-900 mb-2">
              New Outlet, Instantly
            </h3>
            <p class="font-poppins text-neutral-600 text-sm sm:text-base leading-relaxed">
              Add pages, brands, locations and dealerships as you grow.
            </p>
          </div>

          <div class="bg-white rounded-3xl p-8 border border-neutral-200/70 shadow-sm hover:shadow-md transition-shadow duration-300 flex-1 flex flex-col justify-center">
            <div class="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
              <Settings class="w-6 h-6" />
            </div>
            <h3 class="font-poppins text-xl font-medium text-neutral-900 mb-2">
              Continuity By Default
            </h3>
            <p class="font-poppins text-neutral-600 text-sm sm:text-base leading-relaxed">
              No costly rebuilds, no broken consistency across the network.
            </p>
          </div>
        </div>

        <!-- Center Image: Hands Typing on Laptop -->
        <div class="lg:col-span-4 flex items-center justify-center">
          <div class="w-full h-full min-h-[380px] overflow-hidden rounded-3xl shadow-sm border border-neutral-200/70">
            <img
              :src="addLocationImg"
              alt="Add Location, Brand or Model in minutes"
              class="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <!-- Right Column (Live In Days, not weeks) -->
        <div class="lg:col-span-4 flex flex-col justify-between gap-6">
          <span class="font-poppins text-primary font-semibold text-base sm:text-lg">
            Live In Days, not weeks
          </span>

          <div class="bg-white rounded-3xl p-8 border border-neutral-200/70 shadow-sm hover:shadow-md transition-shadow duration-300 flex-1 flex flex-col justify-center">
            <div class="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
              <LayoutTemplate class="w-6 h-6" />
            </div>
            <h3 class="font-poppins text-xl font-medium text-neutral-900 mb-2">
              Pre-Configured Templates
            </h3>
            <p class="font-poppins text-neutral-600 text-sm sm:text-base leading-relaxed">
              Brand and OEM templates tuned to your CI - no starting from scratch.
            </p>
          </div>

          <div class="bg-white rounded-3xl p-8 border border-neutral-200/70 shadow-sm hover:shadow-md transition-shadow duration-300 flex-1 flex flex-col justify-center">
            <div class="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
              <UploadCloud class="w-6 h-6" />
            </div>
            <h3 class="font-poppins text-xl font-medium text-neutral-900 mb-2">
              Publish Instantly
            </h3>
            <p class="font-poppins text-neutral-600 text-sm sm:text-base leading-relaxed">
              Edits and new pages go live the moment you hit publish - no waiting.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 11. Section: Drastically Faster. Secure By Design. -->
    <section class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 mb-24 sm:mb-32">
      <div class="text-center max-w-4xl mx-auto mb-14">
        <h2
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
          class="font-poppins text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-neutral-900 leading-tight mb-3"
        >
          <span class="text-primary">Drastically Faster. Secure By Design.</span><br />
          Found By Google – And By AI Tools.
        </h2>
        <p class="font-poppins text-neutral-600 text-base sm:text-lg">
          Speed sells. Every Conexa site is built to load fast, stay secure and get found.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <!-- Left Photo: Browsing Car on Laptop -->
        <div class="lg:col-span-6 overflow-hidden rounded-3xl shadow-sm border border-neutral-200/70">
          <img
            :src="drasticallyFasterImg"
            alt="Drastically Faster, Secure By Design"
            class="w-full h-auto object-cover hover:scale-102 transition-transform duration-500"
            loading="lazy"
          />
        </div>

        <!-- Right 2 Feature Sub-blocks -->
        <div class="lg:col-span-6 flex flex-col gap-8">
          <!-- Fast and Secure -->
          <div class="flex flex-col gap-4">
            <span class="font-poppins text-primary font-semibold text-lg">
              Fast and Secure
            </span>

            <div class="flex items-start gap-3.5">
              <div class="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0 mt-1 shadow-sm">
                <Check class="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <div>
                <h3 class="font-poppins text-lg sm:text-xl font-medium text-neutral-900 mb-1">
                  Drastically Faster Browsing
                </h3>
                <p class="font-poppins text-neutral-600 text-sm sm:text-base leading-relaxed">
                  General site speed, dramatically improved in the browser - pages load in a blink.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-3.5">
              <div class="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0 mt-1 shadow-sm">
                <Check class="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <div>
                <h3 class="font-poppins text-lg sm:text-xl font-medium text-neutral-900 mb-1">
                  Secure By Default
                </h3>
                <p class="font-poppins text-neutral-600 text-sm sm:text-base leading-relaxed">
                  SSL, hardened hosting, controlled access - stable sites that protect your spend.
                </p>
              </div>
            </div>
          </div>

          <div class="h-px bg-neutral-200/70 w-full my-1"></div>

          <!-- SEO and GEO (AI) Optimised -->
          <div class="flex flex-col gap-4">
            <span class="font-poppins text-primary font-semibold text-lg">
              SEO and GEO (AI) Optimised
            </span>

            <div class="flex items-start gap-3.5">
              <div class="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0 mt-1 shadow-sm">
                <Check class="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <div>
                <h3 class="font-poppins text-lg sm:text-xl font-medium text-neutral-900 mb-1">
                  Ranked And Recommended
                </h3>
                <p class="font-poppins text-neutral-600 text-sm sm:text-base leading-relaxed">
                  Structured data, sitemaps and meta control - built for Google and AI engines.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-3.5">
              <div class="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0 mt-1 shadow-sm">
                <Check class="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <div>
                <h3 class="font-poppins text-lg sm:text-xl font-medium text-neutral-900 mb-1">
                  Content Recommendations
                </h3>
                <p class="font-poppins text-neutral-600 text-sm sm:text-base leading-relaxed">
                  Conexa recommends content to add or improve - growing your GEO listings and exposure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 12. Section: Your Site And Your Campaigns – Never Out Of Step. -->
    <section class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 mb-24 sm:mb-32">
      <div class="text-center max-w-4xl mx-auto mb-14">
        <h2
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
          class="font-poppins text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-neutral-900 leading-tight mb-3"
        >
          <span class="text-primary">Your Site And Your Campaigns –</span><br />
          Never Out Of Step.
        </h2>
        <p class="font-poppins text-neutral-600 text-base sm:text-lg">
          Content, campaigns and marketing teams – automatically aligned.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <!-- Left Features Blocks -->
        <div class="lg:col-span-6 flex flex-col gap-8 order-2 lg:order-1">
          <!-- Block 1 -->
          <div class="flex flex-col gap-4">
            <span class="font-poppins text-primary font-semibold text-lg">
              Website Change Notifications
            </span>

            <div class="flex items-start gap-3.5">
              <div class="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0 mt-1 shadow-sm">
                <Check class="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <div>
                <h3 class="font-poppins text-lg sm:text-xl font-medium text-neutral-900 mb-1">
                  Marketing, Alerted Instantly
                </h3>
                <p class="font-poppins text-neutral-600 text-sm sm:text-base leading-relaxed">
                  The moment site content changes, an email fires to your marketing team.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-3.5">
              <div class="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0 mt-1 shadow-sm">
                <Check class="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <div>
                <h3 class="font-poppins text-lg sm:text-xl font-medium text-neutral-900 mb-1">
                  Campaigns Stay Current
                </h3>
                <p class="font-poppins text-neutral-600 text-sm sm:text-base leading-relaxed">
                  Live campaigns get updated the moment the site does – no stale offers.
                </p>
              </div>
            </div>
          </div>

          <div class="h-px bg-neutral-200/70 w-full my-1"></div>

          <!-- Block 2 -->
          <div class="flex flex-col gap-4">
            <span class="font-poppins text-primary font-semibold text-lg">
              Campaign Libraries
            </span>

            <div class="flex items-start gap-3.5">
              <div class="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0 mt-1 shadow-sm">
                <Check class="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <div>
                <h3 class="font-poppins text-lg sm:text-xl font-medium text-neutral-900 mb-1">
                  Ready-Made Campaigns
                </h3>
                <p class="font-poppins text-neutral-600 text-sm sm:text-base leading-relaxed">
                  Browse OEM-compliant campaign templates and apply them in a click.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-3.5">
              <div class="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0 mt-1 shadow-sm">
                <Check class="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <div>
                <h3 class="font-poppins text-lg sm:text-xl font-medium text-neutral-900 mb-1">
                  Order In The Same Motion
                </h3>
                <p class="font-poppins text-neutral-600 text-sm sm:text-base leading-relaxed">
                  Update your site and order the media campaign from R-E-D in one motion.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Laptop Photo (Mazda Dealer Portal) -->
        <div class="lg:col-span-6 overflow-hidden rounded-3xl shadow-sm border border-neutral-200/70 order-1 lg:order-2">
          <img
            :src="campaignsImg"
            alt="Mazda Dealer Portal on Conexa"
            class="w-full h-auto object-cover hover:scale-102 transition-transform duration-500"
            loading="lazy"
          />
        </div>
      </div>
    </section>

    <!-- 13. Section: Built Different. -->
    <section class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 mb-24 sm:mb-32">
      <div class="mb-12">
        <h2
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
          class="font-poppins text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-primary mb-3"
        >
          Built Different.
        </h2>
        <p class="font-poppins text-neutral-600 text-base sm:text-lg">
          Conexa isn’t licensed or assembled from plugins.<br class="hidden sm:inline" />
          It’s engineered in-house and supported by the people who built it.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-8">
        <!-- Left Pale Blue Container -->
        <div class="lg:col-span-5 bg-[#e3ecf7] rounded-3xl p-8 sm:p-12 flex flex-col justify-center border border-[#d2e2f3] shadow-sm">
          <h3 class="font-poppins text-2xl sm:text-3xl font-medium text-neutral-900 mb-4 leading-snug">
            Conexa Prides Itself On Its Customisability
          </h3>
          <p class="font-poppins text-neutral-700 text-sm sm:text-base leading-relaxed font-normal">
            From Franchise-approved template websites to bespoke custom solutions with endless brand nuances – we’ve got you covered.
          </p>
        </div>

        <!-- Right Bullet Features -->
        <div class="lg:col-span-7 flex flex-col justify-center gap-6 bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200/70 shadow-sm">
          <!-- 1 -->
          <div class="flex items-start gap-4">
            <div class="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0 mt-1 shadow-sm">
              <Check class="w-3.5 h-3.5 stroke-[3]" />
            </div>
            <div>
              <h4 class="font-poppins text-lg sm:text-xl font-medium text-neutral-900 mb-1">
                <span class="text-primary font-medium">Built,</span> Not Licensed
              </h4>
              <p class="font-poppins text-neutral-600 text-sm sm:text-base leading-relaxed">
                Engineered from the ground up for real dealer and business workflows.
              </p>
            </div>
          </div>

          <!-- 2 -->
          <div class="flex items-start gap-4">
            <div class="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0 mt-1 shadow-sm">
              <Check class="w-3.5 h-3.5 stroke-[3]" />
            </div>
            <div>
              <h4 class="font-poppins text-lg sm:text-xl font-medium text-neutral-900 mb-1">
                <span class="text-primary font-medium">Developed 100%</span> In-House
              </h4>
              <p class="font-poppins text-neutral-600 text-sm sm:text-base leading-relaxed">
                Every feature owned and evolved by our team - and always expanding.
              </p>
            </div>
          </div>

          <!-- 3 -->
          <div class="flex items-start gap-4">
            <div class="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0 mt-1 shadow-sm">
              <Check class="w-3.5 h-3.5 stroke-[3]" />
            </div>
            <div>
              <h4 class="font-poppins text-lg sm:text-xl font-medium text-neutral-900 mb-1">
                <span class="text-primary font-medium">Dedicated Support</span> &amp; Training
              </h4>
              <p class="font-poppins text-neutral-600 text-sm sm:text-base leading-relaxed">
                Self-managed, RED-managed or hybrid. Custom onboarding, direct access - no vendor queue.
              </p>
            </div>
          </div>

          <!-- 4 -->
          <div class="flex items-start gap-4">
            <div class="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0 mt-1 shadow-sm">
              <Check class="w-3.5 h-3.5 stroke-[3]" />
            </div>
            <div>
              <h4 class="font-poppins text-lg sm:text-xl font-medium text-neutral-900 mb-1">
                <span class="text-primary font-medium">Unlimited</span> Users
              </h4>
              <p class="font-poppins text-neutral-600 text-sm sm:text-base leading-relaxed">
                No per-seat pricing games. Your whole team gets access.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="text-left pt-2">
        <p class="font-poppins text-neutral-800 text-base sm:text-lg">
          <span class="italic font-semibold">Your systems, your compliance</span>
          <span class="font-normal text-neutral-600 ml-2">Built to fit your local systems and compliance, not the reverse.</span>
        </p>
      </div>
    </section>

    <!-- 14. Section: Capabilities Shipping Continuously -->
    <section class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 mb-24 sm:mb-32">
      <div class="text-center max-w-4xl mx-auto mb-14">
        <h2
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
          class="font-poppins text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-neutral-900 leading-tight mb-3"
        >
          <span class="text-primary">Capabilities Shipping</span> Continuously
        </h2>
        <p class="font-poppins text-neutral-600 text-base sm:text-lg">
          Your Conexa gets smarter over time.
        </p>
      </div>

      <!-- 4 Columns Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        <!-- Convert -->
        <div class="bg-[#e4ecf7] rounded-3xl p-6 sm:p-7 border border-[#d3e2f2] shadow-sm flex flex-col justify-start hover:shadow-md transition-shadow duration-300">
          <h3 class="font-poppins text-2xl font-medium text-neutral-800 mb-4">
            Convert
          </h3>
          <div class="rounded-2xl overflow-hidden bg-white mb-6">
            <img :src="convertImg2" alt="Convert capabilities" class="w-full h-auto object-cover hover:scale-103 transition-transform duration-300" loading="lazy" />
          </div>
          <ul class="flex flex-col gap-2.5 font-poppins text-xs sm:text-sm text-neutral-700">
            <li class="flex items-start gap-2"><span class="text-neutral-400">•</span> Live lead dashboard</li>
            <li class="flex items-start gap-2"><span class="text-neutral-400">•</span> Leads by type &amp; period</li>
            <li class="flex items-start gap-2"><span class="text-neutral-400">•</span> Period comparisons</li>
            <li class="flex items-start gap-2"><span class="text-neutral-400">•</span> Multi-field lead search</li>
            <li class="flex items-start gap-2"><span class="text-neutral-400">•</span> Interactive graphs</li>
            <li class="flex items-start gap-2"><span class="text-neutral-400">•</span> Manager visibility</li>
            <li class="flex items-start gap-2"><span class="text-neutral-400">•</span> WhatsApp &amp; call-click tracking</li>
          </ul>
        </div>

        <!-- Create -->
        <div class="bg-[#e4ecf7] rounded-3xl p-6 sm:p-7 border border-[#d3e2f2] shadow-sm flex flex-col justify-start hover:shadow-md transition-shadow duration-300">
          <h3 class="font-poppins text-2xl font-medium text-neutral-800 mb-4">
            Create
          </h3>
          <div class="rounded-2xl overflow-hidden bg-white mb-6">
            <img :src="createImg2" alt="Create capabilities" class="w-full h-auto object-cover hover:scale-103 transition-transform duration-300" loading="lazy" />
          </div>
          <ul class="flex flex-col gap-2.5 font-poppins text-xs sm:text-sm text-neutral-700">
            <li class="flex items-start gap-2"><span class="text-neutral-400">•</span> Blogs &amp; articles</li>
            <li class="flex items-start gap-2"><span class="text-neutral-400">•</span> Offers linked to make/model</li>
            <li class="flex items-start gap-2"><span class="text-neutral-400">•</span> Banners &amp; slides (video)</li>
            <li class="flex items-start gap-2"><span class="text-neutral-400">•</span> Products, VAPS &amp; accessories</li>
            <li class="flex items-start gap-2"><span class="text-neutral-400">•</span> PDF brochures</li>
            <li class="flex items-start gap-2"><span class="text-neutral-400">•</span> New-vehicle content</li>
            <li class="flex items-start gap-2"><span class="text-neutral-400">•</span> AI polishing tool</li>
            <li class="flex items-start gap-2"><span class="text-neutral-400">•</span> SEO: sitemaps, meta, structured data</li>
            <li class="flex items-start gap-2"><span class="text-neutral-400">•</span> GEO content recommendations</li>
          </ul>
        </div>

        <!-- Connect -->
        <div class="bg-[#e4ecf7] rounded-3xl p-6 sm:p-7 border border-[#d3e2f2] shadow-sm flex flex-col justify-start hover:shadow-md transition-shadow duration-300">
          <h3 class="font-poppins text-2xl font-medium text-neutral-800 mb-4">
            Connect
          </h3>
          <div class="rounded-2xl overflow-hidden bg-white mb-6">
            <img :src="connectImg2" alt="Connect capabilities" class="w-full h-auto object-cover hover:scale-103 transition-transform duration-300" loading="lazy" />
          </div>
          <ul class="flex flex-col gap-2.5 font-poppins text-xs sm:text-sm text-neutral-700">
            <li class="flex items-start gap-2"><span class="text-neutral-400">•</span> Live stock feeds + override</li>
            <li class="flex items-start gap-2"><span class="text-neutral-400">•</span> Stock import mapping</li>
            <li class="flex items-start gap-2"><span class="text-neutral-400">•</span> Lead routing (webhooks/CRM)</li>
            <li class="flex items-start gap-2"><span class="text-neutral-400">•</span> Automated pricing, globally fed</li>
            <li class="flex items-start gap-2"><span class="text-neutral-400">•</span> Global content library</li>
            <li class="flex items-start gap-2"><span class="text-neutral-400">•</span> PostX add-on (WhatsApp, chats)</li>
            <li class="flex items-start gap-2"><span class="text-neutral-400">•</span> Google Ads &amp; Catalogues</li>
            <li class="flex items-start gap-2"><span class="text-neutral-400">•</span> Meta inventory &amp; offer feeds</li>
          </ul>
        </div>

        <!-- Control -->
        <div class="bg-[#e4ecf7] rounded-3xl p-6 sm:p-7 border border-[#d3e2f2] shadow-sm flex flex-col justify-start hover:shadow-md transition-shadow duration-300">
          <h3 class="font-poppins text-2xl font-medium text-neutral-800 mb-4">
            Control
          </h3>
          <div class="rounded-2xl overflow-hidden bg-white mb-6">
            <img :src="controlImg2" alt="Control capabilities" class="w-full h-auto object-cover hover:scale-103 transition-transform duration-300" loading="lazy" />
          </div>
          <ul class="flex flex-col gap-2.5 font-poppins text-xs sm:text-sm text-neutral-700">
            <li class="flex items-start gap-2"><span class="text-neutral-400">•</span> Tenanted multi-dealer data</li>
            <li class="flex items-start gap-2"><span class="text-neutral-400">•</span> Add &amp; manage dealers</li>
            <li class="flex items-start gap-2"><span class="text-neutral-400">•</span> Dealer profiles (hours, staff)</li>
            <li class="flex items-start gap-2"><span class="text-neutral-400">•</span> Role-based access</li>
            <li class="flex items-start gap-2"><span class="text-neutral-400">•</span> Central offers across dealers</li>
            <li class="flex items-start gap-2"><span class="text-neutral-400">•</span> One hub, every dealership</li>
            <li class="flex items-start gap-2"><span class="text-neutral-400">•</span> Website change notifications</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 15. FAQ Section -->
    <section class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 mb-24 sm:mb-32">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        <!-- Left Side: Header & Still Have Questions Card -->
        <div class="lg:col-span-5 flex flex-col items-start text-left">
          <span class="font-poppins text-primary font-semibold text-base mb-2">
            Why us?
          </span>

          <img :src="conexaLogo" alt="Conexa" class="h-6 sm:h-7 w-auto mb-4 object-contain" />

          <h2 class="font-poppins text-3xl sm:text-4xl lg:text-5xl font-medium text-neutral-900 tracking-tight leading-tight mb-8">
            Frequently Asked<br />Questions
          </h2>

          <div class="w-full bg-[#dff0f6] rounded-3xl p-8 border border-[#c4e5f0] shadow-sm">
            <h3 class="font-poppins text-xl font-medium text-neutral-900 mb-3">
              Still Have A Question?
            </h3>
            <p class="font-poppins text-neutral-700 text-sm sm:text-base leading-relaxed mb-6">
              If you’d like to know more about how R-E-D can help your business generate more leads.
            </p>
            <button
              @click="openModal('Conexa')"
              class="btn-primary text-sm px-8 py-3.5"
            >
              Schedule A Meeting Today
            </button>
          </div>
        </div>

        <!-- Right Side: Accordion -->
        <div class="lg:col-span-7 flex flex-col gap-4">
          <div
            v-for="(faq, index) in faqData"
            :key="index"
            class="bg-white rounded-2xl border border-neutral-200/80 shadow-sm overflow-hidden transition-all duration-200"
          >
            <button
              @click="toggleFaq(index)"
              class="w-full px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between text-left font-poppins text-base sm:text-lg font-medium text-neutral-900 hover:text-primary transition-colors cursor-pointer"
            >
              <span>{{ faq.question }}</span>
              <ChevronDown
                :class="[
                  'w-5 h-5 text-neutral-400 transition-transform duration-300 flex-shrink-0 ml-4',
                  activeFaq === index ? 'rotate-180 text-primary' : ''
                ]"
              />
            </button>

            <transition
              @enter="enter"
              @after-enter="afterEnter"
              @leave="leave"
            >
              <div v-show="activeFaq === index" class="overflow-hidden">
                <div class="px-6 sm:px-8 pb-6 pt-0 font-poppins text-neutral-600 text-sm sm:text-base leading-relaxed border-t border-neutral-100">
                  <div class="pt-4">{{ faq.answer }}</div>
                </div>
              </div>
            </transition>
          </div>
        </div>

      </div>
    </section>

    <!-- 16. Bottom CTA Section -->
    <section class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
      <div class="flex flex-col items-center justify-center">
        <!-- R-E-D Logo with Cyan Dash -->
        <div class="mb-4">
          <img :src="redDarkLogo" alt="R-E-D" class="h-8 sm:h-10 w-auto object-contain mx-auto" />
        </div>

        <h2 class="font-poppins text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-neutral-900 leading-tight mb-4">
          Ready To Build Your<br />
          Business With Cone<span class="text-primary">x</span>a?
        </h2>

        <p class="font-poppins text-neutral-600 text-sm sm:text-base max-w-xl mx-auto mb-8 font-normal">
          If you’d like to know more about how Conexa can help your business increase leads.
        </p>

        <button
          @click="openModal('Conexa')"
          class="btn-primary text-sm sm:text-base px-10 py-4"
        >
          Schedule A Meeting Today
        </button>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {
  ArrowLeft,
  ChevronDown,
  Check,
  Ticket,
  Lock,
  Users,
  BarChart3,
  ClipboardList,
  Tag,
  Layers,
  MessageSquare,
  Megaphone,
  TrendingUp,
  Settings,
  LayoutTemplate,
  UploadCloud
} from 'lucide-vue-next';

// Brand & Logo Imports
import conexaLogo from '~/assets/images/conexa-dark-logo.svg';
import redDarkLogo from '~/assets/images/r-e-d-dark-logo.svg';

// Car Brand Logos
import audiLogo from '~/assets/images/audi.svg';
import bydLogo from '~/assets/images/byd.svg';
import cheryLogo from '~/assets/images/chery.svg';
import fordLogo from '~/assets/images/ford.svg';
import hondaLogo from '~/assets/images/honda.svg';
import kiaLogo from '~/assets/images/kia.svg';
import mazdaLogo from '~/assets/images/mazda.svg';
import mitsubishiLogo from '~/assets/images/mitsubishi.svg';
import renaultLogo from '~/assets/images/renault.svg';
import suzukiLogo from '~/assets/images/suzuki.svg';
import volkswagenLogo from '~/assets/images/volkswagen.svg';
import volvoLogo from '~/assets/images/volvo.svg';

// Conexa Section Images
import heroBannerImg from '~/assets/images/r-e-d-conexa-desktop-hero-banner.png';
import outdatedStaleImg from '~/assets/images/r-e-d-conexa-outdated-stale-image.png';
import howQuicklyImg from '~/assets/images/r-e-d-conexa-how-quickly-can-you-update-your-website-image.png';
import convertImg1 from '~/assets/images/r-e-d-conexa-convert-image-1.png';
import createImg1 from '~/assets/images/r-e-d-conexa-create-image-1.png';
import connectImg1 from '~/assets/images/r-e-d-conexa-connect-image-1.png';
import controlImg1 from '~/assets/images/r-e-d-conexa-control-image-1.png';
import everythingOnePlaceImg from '~/assets/images/r-e-d-conexa-everything-one-place-image.png';
import ctaBannerImg from '~/assets/images/r-e-d-conexa-cta-banner-image.png';
import wholeStackImg from '~/assets/images/r-e-d-conexa-whole-stack-wired-in-image.png';
import addLocationImg from '~/assets/images/r-e-d-conexa-add-a-location-image.png';
import drasticallyFasterImg from '~/assets/images/r-e-d-conexa-drastically-faster-image.png';
import campaignsImg from '~/assets/images/r-e-d-conexa-your-site-and-your-campaigns-image.png';
import convertImg2 from '~/assets/images/r-e-d-conexa-convert-image-2.png';
import createImg2 from '~/assets/images/r-e-d-conexa-create-image-2.png';
import connectImg2 from '~/assets/images/r-e-d-conexa-connect-image-2.png';
import controlImg2 from '~/assets/images/r-e-d-conexa-control-image-2.png';

const { openModal } = useModal();

const brandLogos = [
  { name: 'Audi', src: audiLogo },
  { name: 'BYD', src: bydLogo },
  { name: 'Chery', src: cheryLogo },
  { name: 'Ford', src: fordLogo },
  { name: 'Honda', src: hondaLogo },
  { name: 'Kia', src: kiaLogo },
  { name: 'Mazda', src: mazdaLogo },
  { name: 'Mitsubishi', src: mitsubishiLogo },
  { name: 'Renault', src: renaultLogo },
  { name: 'Suzuki', src: suzukiLogo },
  { name: 'Volkswagen', src: volkswagenLogo },
  { name: 'Volvo', src: volvoLogo },
];

const activeFaq = ref<number | null>(null);
const toggleFaq = (index: number) => {
  activeFaq.value = activeFaq.value === index ? null : index;
};

// Accordion Animation Handlers
const enter = (el: Element) => {
  (el as HTMLElement).style.height = 'auto';
  const height = getComputedStyle(el).height;
  (el as HTMLElement).style.height = '0px';
  getComputedStyle(el).height; // Force reflow
  (el as HTMLElement).style.height = height;
  (el as HTMLElement).style.opacity = '1';
};

const afterEnter = (el: Element) => {
  (el as HTMLElement).style.height = 'auto';
};

const leave = (el: Element) => {
  (el as HTMLElement).style.height = getComputedStyle(el).height;
  getComputedStyle(el).height; // Force reflow
  (el as HTMLElement).style.height = '0px';
  (el as HTMLElement).style.opacity = '0';
};

const faqData = [
  {
    question: 'How fast can my website be setup and ready to use?',
    answer: 'Most Conexa sites are deployed within 2 to 4 weeks, including stock-feed integration and CI customization. For bespoke multi-franchise setups or custom feature development, timelines typically range from 4 to 8 weeks with dedicated onboarding.'
  },
  {
    question: 'How do you structure your pricing?',
    answer: 'Conexa offers transparent, flexible pricing tailored to your dealership scale - whether single-rooftop, multi-brand, or regional group. We don’t charge per-seat fees, meaning your entire sales, service, and marketing teams get unlimited access.'
  },
  {
    question: 'How often do you provide performance reports?',
    answer: 'You have real-time visibility into your leads, traffic, and conversion metrics directly inside your Conexa dashboard 24/7. In addition, our team provides comprehensive monthly executive summaries and strategic recommendations.'
  },
  {
    question: 'Do you work with businesses in my industry?',
    answer: 'Conexa is purpose-built and battle-tested for automotive dealerships, OEM franchises, and dealer groups. However, its modular architecture also powers high-converting showrooms and catalogue sites across related asset-heavy retail industries.'
  },
  {
    question: 'What makes your agency different?',
    answer: 'Unlike agencies that lock you into rigid third-party website builders or charge for every minor text change, Conexa gives you full content control with zero developer dependencies, backed by our in-house engineering and performance marketing team.'
  }
];

useHead({
  title: 'Conexa | R-E-D',
  meta: [
    {
      name: 'description',
      content: 'Conexa - The website content management platform built to convert and built for you to control.'
    }
  ]
});
</script>
