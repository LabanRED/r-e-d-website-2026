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
    <section class="px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto mb-8 sm:mb-12">
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
            Conexa is the website platform that keeps your stock, offers, and content current, gets every lead to the right place, and shows you what’s working.
          </p>

          <p class="font-poppins text-neutral-600 text-xs sm:text-sm lg:text-[0.95rem] xl:text-base leading-relaxed max-w-md lg:max-w-lg mb-7 xl:mb-8 font-normal">
          Manage it yourself, let R-E-D manage it, or do both.
          </p>

          <button
            @click="openModal('Conexa - General Enquiry')"
            class="btn-primary text-xs sm:text-sm lg:text-base px-8 lg:px-9 py-3 lg:py-3.5"
          >
            Book a Demo
          </button>
        </div>
      </div>

      <!-- Mobile & Tablet Hero Layout (< lg) -->
      <div class="block lg:hidden w-full text-center pt-2 sm:pt-4">
        <div class="flex flex-col items-center">
          <img
            :src="conexaLogo"
            alt="Conexa"
            class="h-7 sm:h-8 w-auto mb-4 object-contain"
          />
          
          <h1
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
            class="font-poppins text-3xl sm:text-4xl font-medium tracking-tight text-neutral-900 leading-[1.18] mb-4"
          >
            Take Control.<br />
            <span class="text-primary">Convert More.</span>
          </h1>

          <p class="font-poppins text-neutral-600 text-sm sm:text-base leading-relaxed max-w-md mx-auto mb-4 font-normal">
            Conexa is the website platform that keeps your stock, offers, and content current, gets every lead to the right place, and shows you what’s working.
          </p>

          <p class="font-poppins text-neutral-600 text-sm sm:text-base leading-relaxed max-w-xs sm:max-w-sm mx-auto mb-6 sm:mb-8 font-normal">
            Manage it yourself, let R-E-D<br /> manage it, or do both.
          </p>

          <button
            @click="openModal('Conexa - General Enquiry')"
            class="w-full max-w-xs sm:max-w-sm mx-auto bg-black hover:bg-neutral-800 text-white font-medium text-sm sm:text-base py-3.5 sm:py-4 px-8 rounded-full transition-colors duration-200 mb-8 sm:mb-10 shadow-sm"
          >
            Book a Demo
          </button>

          <div class="w-full max-w-md mx-auto flex justify-center">
            <img
              :src="heroMobileBannerImg"
              alt="Conexa - Take Control. Convert More."
              class="w-full h-auto object-contain rounded-3xl"
              fetchpriority="high"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- In-House Proprietary Banner Section -->
    <section class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="rounded-[28px] sm:rounded-[32px] py-7 px-6 sm:px-10 border border-white bg-gradient-to-b from-white via-white/95 to-[#E8F8FB] shadow-[0_10px_30px_rgba(0,0,0,0.04),0_1px_3px_rgba(0,0,0,0.02)]"
      >
        <!-- Heading -->
        <h2 class="font-poppins font-medium text-lg sm:text-xl lg:text-[24px] text-center text-neutral-900 mb-6 tracking-tight leading-snug">
          <span class="text-primary font-medium">A proprietary R-E-D product.</span> Built, developed, maintained and supported in-house.
        </h2>

        <!-- Feature Points -->
        <div class="flex flex-col sm:flex-row items-start justify-start gap-6 sm:gap-10 lg:gap-16">
          <div class="flex items-center gap-3">
            <img
              loading="lazy"
              :src="builtByDevelopersIcon"
              alt="Built by our own developers"
              class="w-7 h-7 sm:w-8 sm:h-8 object-contain flex-shrink-0"
            />
            <span class="font-poppins text-xs sm:text-sm font-medium text-neutral-800">
              Built by our own developers
            </span>
          </div>

          <div class="flex items-center gap-3">
            <img
              loading="lazy"
              :src="supportWhoBuiltItIcon"
              alt="Support from the people who build it"
              class="w-7 h-7 sm:w-8 sm:h-8 object-contain flex-shrink-0"
            />
            <span class="font-poppins text-xs sm:text-sm font-medium text-neutral-800">
              Support from the people who build it
            </span>
          </div>

          <div class="flex items-center gap-3">
            <img
              loading="lazy"
              :src="newFeaturesShippedIcon"
              alt="New features shipped continuously"
              class="w-7 h-7 sm:w-8 sm:h-8 object-contain flex-shrink-0"
            />
            <span class="font-poppins text-xs sm:text-sm font-medium text-neutral-800">
              New features shipped continuously
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. Brands Trust Bar (Matching PostX) -->
    <LogoCarousel class="mb-20 sm:mb-28" />

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

      <!-- 2-Card Grid (Image + Content) -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        <!-- Left: Image Card -->
        <div class="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200/70 shadow-sm flex items-center justify-center hover:shadow-md transition-shadow duration-300">
          <div class="w-full h-full min-h-[300px] sm:min-h-[380px] lg:min-h-[440px] overflow-hidden rounded-2xl">
            <img
              :src="outdatedStaleImg"
              alt="If your website is out of date"
              class="w-full h-full object-cover rounded-2xl hover:scale-102 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        </div>

        <!-- Right: Content & CTA Card -->
        <div class="bg-white rounded-3xl p-4 sm:p-10 lg:p-12 xl:p-14 border border-neutral-200/70 shadow-sm flex flex-col justify-center items-start text-left hover:shadow-md transition-shadow duration-300">
          <h3 class="font-poppins text-2xl sm:text-3xl lg:text-[34px] xl:text-[36px] font-medium leading-snug sm:leading-tight mb-4 sm:mb-6">
            <span class="text-primary">If your website is out of date,</span><br class="hidden sm:inline" />
            <span class="text-neutral-900"> the visit ends before it starts.</span>
          </h3>
          <p class="font-poppins text-neutral-600 text-base sm:text-lg lg:text-[20px] xl:text-[22px] font-normal leading-relaxed mb-8 sm:mb-10">
            Buyers check prices, stock and offers online long before they walk in. When a price is wrong, a car has already sold or an offer has expired, they don't call to ask. They move on to the next site.
          </p>
          <button
            @click="openModal('Conexa - General Enquiry')"
            class="btn-primary text-sm sm:text-base px-8 py-3.5"
          >
            Schedule a Meeting Today
          </button>
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
             A price change shouldn’t need a support ticket and a three-day wait.
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
              It’s your site, but you can’t change it yourself.
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
              Marketing has the campaign ready, and the developer doesn’t have the time.
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
              Traffic in one tool, leads in another, and no clear view of what’s selling.
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
              See what sells. Every visitor, offer, vehicle and lead in one system.
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
              Change pages, offers, stock, banners and forms yourself, with no code.
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
              Stock feeds, OEM vehicle data, catalogue feeds and lead delivery to your CRM.
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
              One hub for every dealership, brand and site, with approvals, roles and a full audit trail.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. Section: See Everything. In One place. -->
    <section class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 mb-24 sm:mb-32">
      <div class="mb-10 sm:mb-12">
        <h2
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
          class="font-poppins text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-neutral-900 mb-2 sm:mb-3"
        >
          See Everything. In One place.
        </h2>
        <p class="font-poppins text-neutral-600 text-base sm:text-lg lg:text-xl">
          Site traffic and leads in one view, with no extra logins.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <!-- 5 Bullet Features on Left -->
        <div class="lg:col-span-5 flex flex-col gap-6 sm:gap-7">
          <!-- 1 -->
          <div class="flex items-start gap-3.5 sm:gap-4">
            <div class="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0 mt-0.5 sm:mt-1 shadow-sm">
              <Check class="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]" />
            </div>
            <div>
              <h3 class="font-poppins text-lg sm:text-xl font-medium text-neutral-900 mb-1">
                Live performance:
              </h3>
              <p class="font-poppins text-neutral-600 text-sm sm:text-base leading-relaxed">
                Visitors right now, today and over the last 7 days, with your top pages, referrers and traffic channels, including Google, Facebook, TikTok and catalogue traffic.
              </p>
            </div>
          </div>

          <!-- 2 -->
          <div class="flex items-start gap-3.5 sm:gap-4">
            <div class="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0 mt-0.5 sm:mt-1 shadow-sm">
              <Check class="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]" />
            </div>
            <div>
              <h3 class="font-poppins text-lg sm:text-xl font-medium text-neutral-900 mb-1">
                Every offer and vehicle, measured:
              </h3>
              <p class="font-poppins text-neutral-600 text-sm sm:text-base leading-relaxed">
                Google Analytics and Google Ads in one view - no more separate logins.
              </p>
            </div>
          </div>

          <!-- 3 -->
          <div class="flex items-start gap-3.5 sm:gap-4">
            <div class="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0 mt-0.5 sm:mt-1 shadow-sm">
              <Check class="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]" />
            </div>
            <div>
              <h3 class="font-poppins text-lg sm:text-xl font-medium text-neutral-900 mb-1">
                Every lead, every type:
              </h3>
              <p class="font-poppins text-neutral-600 text-sm sm:text-base leading-relaxed">
                Test drives, finance, service, parts, specials, trade-ins and your own custom forms, filtered by type and period.
              </p>
            </div>
          </div>

          <!-- 4 -->
          <div class="flex items-start gap-3.5 sm:gap-4">
            <div class="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0 mt-0.5 sm:mt-1 shadow-sm">
              <Check class="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]" />
            </div>
            <div>
              <h3 class="font-poppins text-lg sm:text-xl font-medium text-neutral-900 mb-1">
                No lead gets lost:
              </h3>
              <p class="font-poppins text-neutral-600 text-sm sm:text-base leading-relaxed">
                Conexa tracks every lead through to your CRM. If one doesn’t arrive, our team sees it, follows up and resolves it.
              </p>
            </div>
          </div>

          <!-- 5 -->
          <div class="flex items-start gap-3.5 sm:gap-4">
            <div class="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0 mt-0.5 sm:mt-1 shadow-sm">
              <Check class="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]" />
            </div>
            <div>
              <h3 class="font-poppins text-lg sm:text-xl font-medium text-neutral-900 mb-1">
                Visibility for managers:
              </h3>
              <p class="font-poppins text-neutral-600 text-sm sm:text-base leading-relaxed">
                Non-technical managers see demand and performance without extra training or logins.
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
      <!-- Section Header with Title & Carousel Controls -->
      <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8 sm:mb-12">
        <div>
          <h2
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
            class="font-poppins text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-tight"
          >
            <span class="text-primary">Update Anything.</span><br />
            <span class="text-neutral-900">No Ticket. No Code.</span>
          </h2>
        </div>

        <!-- Carousel Controls (Desktop) -->
        <div class="hidden sm:flex items-center gap-3 sm:gap-4 flex-shrink-0 self-end sm:self-auto mb-2 sm:mb-0">
          <!-- Pagination Pill -->
          <div class="border border-neutral-300 sm:border-black text-neutral-800 rounded-full px-4 sm:px-5 h-[34px] text-xs sm:text-sm font-poppins font-medium flex items-center justify-center gap-1">
            <div class="relative w-3.5 h-5 overflow-hidden flex items-center justify-center">
              <transition name="pop">
                <span :key="activeUpdateCard" class="absolute font-semibold text-black">
                  {{ activeUpdateCard + 1 }}
                </span>
              </transition>
            </div>
            <span> - {{ updateCardsData.length }}</span>
          </div>

          <!-- Navigation Chevrons -->
          <div class="flex items-center gap-2 sm:gap-3">
            <button
              @click="scrollUpdateCards('left')"
              :disabled="isUpdateAtStart"
              :class="[
                'w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200',
                isUpdateAtStart
                  ? 'border border-neutral-200 text-neutral-300 opacity-60 cursor-not-allowed'
                  : 'border border-neutral-400 text-neutral-800 hover:border-neutral-900 active:scale-95 cursor-pointer'
              ]"
              aria-label="Previous card"
            >
              <ChevronLeft class="w-5 h-5" />
            </button>
            <button
              @click="scrollUpdateCards('right')"
              :disabled="isUpdateAtEnd"
              :class="[
                'w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 shadow-sm',
                isUpdateAtEnd
                  ? 'bg-neutral-200 text-neutral-400 opacity-60 cursor-not-allowed'
                  : 'bg-black text-white hover:bg-neutral-800 active:scale-95 cursor-pointer'
              ]"
              aria-label="Next card"
            >
              <ChevronRight class="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <!-- Horizontal Cards Carousel -->
      <div
        ref="updateScrollContainer"
        @scroll="updateScrollStatus"
        class="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-8 pt-2 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
      >
        <div
          v-for="(card, index) in updateCardsData"
          :key="index"
          class="w-[280px] sm:w-[330px] lg:w-[365px] flex-shrink-0 bg-white rounded-3xl p-7 sm:p-8 border border-neutral-200/80 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-start min-h-[220px] sm:min-h-[240px]"
        >
          <h3 class="font-poppins text-lg sm:text-xl font-medium text-neutral-900 mb-3 leading-snug">
            {{ card.title }}
          </h3>
          <p class="font-poppins text-neutral-600 text-sm sm:text-base leading-relaxed">
            {{ card.description }}
          </p>
        </div>
      </div>

      <!-- Carousel Controls (Mobile) -->
      <div class="flex sm:hidden items-center justify-between mt-2 mb-6">
        <!-- Pagination Pill -->
        <div class="border border-neutral-300 sm:border-black text-neutral-800 rounded-full px-4 sm:px-5 h-[34px] text-xs sm:text-sm font-poppins font-medium flex items-center justify-center gap-1">
          <div class="relative w-3.5 h-5 overflow-hidden flex items-center justify-center">
            <transition name="pop">
              <span :key="activeUpdateCard" class="absolute font-semibold text-black">
                {{ activeUpdateCard + 1 }}
              </span>
            </transition>
          </div>
          <span> - {{ updateCardsData.length }}</span>
        </div>

        <!-- Navigation Chevrons -->
        <div class="flex items-center gap-2">
          <button
            @click="scrollUpdateCards('left')"
            :disabled="isUpdateAtStart"
            :class="[
              'w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200',
              isUpdateAtStart
                ? 'border border-neutral-200 text-neutral-300 opacity-60 cursor-not-allowed'
                : 'border border-neutral-400 text-neutral-800 hover:border-neutral-900 active:scale-95 cursor-pointer'
            ]"
            aria-label="Previous card"
          >
            <ChevronLeft class="w-5 h-5" />
          </button>
          <button
            @click="scrollUpdateCards('right')"
            :disabled="isUpdateAtEnd"
            :class="[
              'w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 shadow-sm',
              isUpdateAtEnd
                ? 'bg-neutral-200 text-neutral-400 opacity-60 cursor-not-allowed'
                : 'bg-black text-white hover:bg-neutral-800 active:scale-95 cursor-pointer'
            ]"
            aria-label="Next card"
          >
            <ChevronRight class="w-5 h-5" />
          </button>
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
            @click="openModal('Conexa - General Enquiry')"
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
          @click="openModal('Conexa - General Enquiry')"
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

      <!-- 5 Integration Feature Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <!-- Card 1: Stock feeds & custom products -->
        <div class="bg-white rounded-3xl p-8 border border-neutral-200/70 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
          <div>
            <div class="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
              <ClipboardList class="w-6 h-6" />
            </div>
            <h3 class="font-poppins text-xl font-medium text-neutral-900 mb-2">
              Stock feeds:
            </h3>
            <p class="font-poppins text-neutral-600 text-sm sm:text-base leading-relaxed">
              11 feed integrations, including AutoTrader, AutoHub, CMS, DealersOnline and Motus, plus products that aren’t on any feed.
            </p>
          </div>
        </div>

        <!-- Card 2: OEM vehicle data -->
        <div class="bg-white rounded-3xl p-8 border border-neutral-200/70 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
          <div>
            <div class="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
              <Tag class="w-6 h-6" />
            </div>
            <h3 class="font-poppins text-xl font-medium text-neutral-900 mb-2">
              OEM vehicle data:
            </h3>
            <p class="font-poppins text-neutral-600 text-sm sm:text-base leading-relaxed">
              New models, variants, pricing and brochures, fed in automatically and consistent across every site.
            </p>
          </div>
        </div>

        <!-- Card 3: Catalogue feeds -->
        <div class="bg-white rounded-3xl p-8 border border-neutral-200/70 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
          <div>
            <div class="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
              <Layers class="w-6 h-6" />
            </div>
            <h3 class="font-poppins text-xl font-medium text-neutral-900 mb-2">
              Catalogue feeds:
            </h3>
            <p class="font-poppins text-neutral-600 text-sm sm:text-base leading-relaxed">
              Your stock pushed as catalogue feeds to Meta, TikTok and WhatsApp.
            </p>
          </div>
        </div>

        <!-- Card 4: Lead delivery -->
        <div class="bg-white rounded-3xl p-8 border border-neutral-200/70 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
          <div>
            <div class="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
              <MessageSquare class="w-6 h-6" />
            </div>
            <h3 class="font-poppins text-xl font-medium text-neutral-900 mb-2">
              Lead delivery:
            </h3>
            <p class="font-poppins text-neutral-600 text-sm sm:text-base leading-relaxed">
              Leads go straight to your CRM or lead management system, and every delivery is tracked.
            </p>
          </div>
        </div>

        <!-- Card 5: WhatsApp and web chat -->
        <div class="bg-white rounded-3xl p-8 border border-neutral-200/70 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
          <div>
            <div class="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
              <Megaphone class="w-6 h-6" />
            </div>
            <h3 class="font-poppins text-xl font-medium text-neutral-900 mb-2">
              WhatsApp and web chat (with PostX):
            </h3>
            <p class="font-poppins text-neutral-600 text-sm sm:text-base leading-relaxed">
              Capture chats and conversations directly from your site.
            </p>
          </div>
        </div>

         <!-- Card 6: Google Business Profile (with PostX) -->
        <div class="bg-white rounded-3xl p-8 border border-neutral-200/70 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
          <div>
            <div class="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
              <img :src="googleBusinessProfileIcon" alt="Google Business Profile" class="w-6 h-6 object-contain" />
            </div>
            <h3 class="font-poppins text-xl font-medium text-neutral-900 mb-2">
              Google Business Profile (with PostX)
            </h3>
            <p class="font-poppins text-neutral-600 text-sm sm:text-base leading-relaxed">
              Your offers post to your Google Business Profile automatically.
            </p>
          </div>
        </div>

      </div>
    </section>

    <!-- 10. Section: Add a Location, Brand or Model – In Minutes, Not a Rebuild. -->
    <section class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 mb-24 sm:mb-32">
      <div class="text-center mb-10 sm:mb-14">
        <h2
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
          class="font-poppins text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-neutral-900 leading-tight"
        >
          <span class="text-primary">Add a Location, Brand or Model in Minutes,</span> <br> Not a Rebuild.
        </h2>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <!-- Left Column -->
        <div class="lg:col-span-4 flex flex-col justify-between gap-6">
          <div class="bg-white rounded-3xl p-8 border border-neutral-200/70 shadow-sm hover:shadow-md transition-shadow duration-300 flex-1 flex flex-col justify-center">
            <div class="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
              <TrendingUp class="w-6 h-6" />
            </div>
            <h3 class="font-poppins text-xl font-medium text-neutral-900 mb-2">
              New outlet, fast:
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
              Group and master sites
            </h3>
            <p class="font-poppins text-neutral-600 text-sm sm:text-base leading-relaxed">
              One group site for the whole network, with every lead routed to the right branch.
            </p>
          </div>
        </div>

        <!-- Center Column: Write once, publish everywhere + Laptop image -->
        <div class="lg:col-span-4 flex flex-col">
          <div class="bg-white rounded-3xl p-8 border border-neutral-200/70 shadow-sm hover:shadow-md transition-shadow duration-300 flex-1 flex flex-col justify-between">
            <div>
              <div class="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                <LayoutTemplate class="w-6 h-6" />
              </div>
              <h3 class="font-poppins text-xl font-medium text-neutral-900 mb-2">
                Write once, publish everywhere:
              </h3>
              <p class="font-poppins text-neutral-600 text-sm sm:text-base leading-relaxed">
                Write a model FAQ once and push it to every dealer that sells the brand, with FAQ schema built in for Google and AI search.
              </p>
            </div>

            <div class="mt-6 overflow-hidden rounded-2xl w-full">
              <img
                :src="addLocationImg"
                alt="Write once, publish everywhere"
                class="w-full h-48 sm:h-56 md:h-64 object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <!-- Right Column -->
        <div class="lg:col-span-4 flex flex-col justify-between gap-6">
          <div class="bg-white rounded-3xl p-8 border border-neutral-200/70 shadow-sm hover:shadow-md transition-shadow duration-300 flex-1 flex flex-col justify-center">
            <div class="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
              <LayoutTemplate class="w-6 h-6" />
            </div>
            <h3 class="font-poppins text-xl font-medium text-neutral-900 mb-2">
              Pre-configured templates
            </h3>
            <p class="font-poppins text-neutral-600 text-sm sm:text-base leading-relaxed">
              Brand templates tuned to your CI, so you never start from scratch.
            </p>
          </div>

          <div class="bg-white rounded-3xl p-8 border border-neutral-200/70 shadow-sm hover:shadow-md transition-shadow duration-300 flex-1 flex flex-col justify-center">
            <div class="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
              <UploadCloud class="w-6 h-6" />
            </div>
            <h3 class="font-poppins text-xl font-medium text-neutral-900 mb-2">
              Live within minutes:
            </h3>
            <p class="font-poppins text-neutral-600 text-sm sm:text-base leading-relaxed">
              Edits and new pages go live automatically within minutes.
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
          class="font-poppins text-3xl sm:text-4xl md:lg:text-5xl lg:text-5xl font-medium tracking-tight text-neutral-900 leading-tight mb-3"
        >
          <span class="text-black md:text-4xl">Fast. Secure. Found by Google, and by AI..</span>
        </h2>
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
            

            <div class="flex items-start gap-3.5">
              <div class="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0 mt-1 shadow-sm">
                <Check class="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <div>
                <h3 class="font-poppins text-lg sm:text-xl font-medium text-neutral-900 mb-1">
                  Built for speed:
                </h3>
                <p class="font-poppins text-neutral-600 text-sm sm:text-base leading-relaxed">
                  Fast, mobile-first browsing on the phones most buyers use.
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
            <li class="flex items-start gap-2"><span class="text-neutral-400">•</span> Live site stats</li>
            <li class="flex items-start gap-2"><span class="text-neutral-400">•</span> Traffic channels and referrers</li>
            <li class="flex items-start gap-2"><span class="text-neutral-400">•</span> Views and leads per offer and vehicle</li>
            <li class="flex items-start gap-2"><span class="text-neutral-400">•</span> Leads by type and period</li>
            <li class="flex items-start gap-2"><span class="text-neutral-400">•</span> Period comparisons</li>
            <li class="flex items-start gap-2"><span class="text-neutral-400">•</span> Multi-field lead search</li>
            <li class="flex items-start gap-2"><span class="text-neutral-400">•</span> Lead delivery tracking</li>
            <li class="flex items-start gap-2"><span class="text-neutral-400">•</span> Manager visibility</li>
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
            <li class="flex items-start gap-2"><span class="text-neutral-400">•</span> Pages, blogs and articles</li>
            <li class="flex items-start gap-2"><span class="text-neutral-400">•</span> Offers linked to make and model</li>
            <li class="flex items-start gap-2"><span class="text-neutral-400">•</span> Banners and slides (incl. video)</li>
            <li class="flex items-start gap-2"><span class="text-neutral-400">•</span> Products, VAPS and accessories</li>
            <li class="flex items-start gap-2"><span class="text-neutral-400">•</span> Custom forms and lead types</li>
            <li class="flex items-start gap-2"><span class="text-neutral-400">•</span> “Sell your car” form with photos</li>
            <li class="flex items-start gap-2"><span class="text-neutral-400">•</span> AI polishing tool</li>
            <li class="flex items-start gap-2"><span class="text-neutral-400">•</span> SEO tool</li>
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
            <li class="flex items-start gap-2"><span class="text-neutral-400">•</span> 11 stock feed integrations</li>
            <li class="flex items-start gap-2"><span class="text-neutral-400">•</span> Stock import mapping and overrides</li>
            <li class="flex items-start gap-2"><span class="text-neutral-400">•</span> New vehicle catalogue from the feed</li>
            <li class="flex items-start gap-2"><span class="text-neutral-400">•</span> Catalogue feeds: Meta, TikTok, WhatsApp</li>
            <li class="flex items-start gap-2"><span class="text-neutral-400">•</span> CRM and LMS lead delivery</li>
            <li class="flex items-start gap-2"><span class="text-neutral-400">•</span> Offers to Google Business Profile (with PostX)</li>
            <li class="flex items-start gap-2"><span class="text-neutral-400">•</span> PostX add-on (WhatsApp, web chat)</li>
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
            <li class="flex items-start gap-2"><span class="text-neutral-400">•</span> Group and master sites</li>
            <li class="flex items-start gap-2"><span class="text-neutral-400">•</span> Lead routing to the right branch</li>
            <li class="flex items-start gap-2"><span class="text-neutral-400">•</span> Central offer approvals</li>
            <li class="flex items-start gap-2"><span class="text-neutral-400">•</span> Role-based access</li>
            <li class="flex items-start gap-2"><span class="text-neutral-400">•</span> Audit trail</li>
            <li class="flex items-start gap-2"><span class="text-neutral-400">•</span> Dealer profiles (hours, staff)</li>
            <li class="flex items-start gap-2"><span class="text-neutral-400">•</span> Model FAQs pushed to all dealers</li>
            <li class="flex items-start gap-2"><span class="text-neutral-400">•</span> Uptime and SSL monitoring</li>
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

          <!-- CTA Card -->
          <div class="w-full bg-[#f0f9fa] rounded-4xl p-8 sm:p-10 flex flex-col items-start mt-4">
            <h3 class="font-poppins text-2xl font-medium text-neutral-900 mb-4">
              Still Have A Question?
            </h3>
            <p class="font-poppins text-neutral-700 text-base sm:text-lg leading-relaxed mb-8">
              If you’d like to know more about how<br class="hidden sm:inline" />R-E-D can help your business generate more leads.
            </p>
            <button
              @click="openModal('Conexa - General Enquiry')"
              class="btn-primary text-xs sm:text-[15px] px-8 py-4 w-full sm:w-auto"
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
            class="bg-[#fafafa] rounded-3xl overflow-hidden transition-all duration-300"
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
                <div class="px-6 pb-6 sm:px-8 sm:pb-8 pt-0 mx-6 sm:mx-8 font-poppins text-neutral-600 text-base sm:text-lg leading-relaxed border-t border-neutral-200">
                  <div class="pt-6">{{ faq.answer }}</div>
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
          @click="openModal('Conexa - General Enquiry')"
          class="btn-primary text-sm sm:text-base px-10 py-4"
        >
          Schedule A Meeting Today
        </button>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import {
  ArrowLeft,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
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

// Feature Icons
import builtByDevelopersIcon from '~/assets/images/postx-built-by-our-developers-icon.svg';
import supportWhoBuiltItIcon from '~/assets/images/postx-support-who-built-it-icon.svg';
import newFeaturesShippedIcon from '~/assets/images/postx-new-features-shipped-icon.svg';
import googleBusinessProfileIcon from '~/assets/images/google-business-profile-icon.svg';

// Conexa Section Images
import heroBannerImg from '~/assets/images/r-e-d-conexa-desktop-hero-banner.png';
import heroMobileBannerImg from '~/assets/images/r-e-d-conexa-landing-page-mobile-banner.webp';
import outdatedStaleImg from '~/assets/images/r-e-d-conexa-outdated-stale-image.webp';
import howQuicklyImg from '~/assets/images/r-e-d-conexa-how-quickly-can-you-update-your-website-image.png';
import convertImg1 from '~/assets/images/r-e-d-conexa-convert-image-1.png';
import createImg1 from '~/assets/images/r-e-d-conexa-create-image-1.png';
import connectImg1 from '~/assets/images/r-e-d-conexa-connect-image-1.png';
import controlImg1 from '~/assets/images/r-e-d-conexa-control-image-1.png';
import everythingOnePlaceImg from '~/assets/images/r-e-d-conexa-everything-one-place-image.png';
import ctaBannerImg from '~/assets/images/r-e-d-conexa-cta-banner-image.png';
import addLocationImg from '~/assets/images/r-e-d-conexa-add-a-location-image.png';
import drasticallyFasterImg from '~/assets/images/r-e-d-conexa-drastically-faster-image.png';
import campaignsImg from '~/assets/images/r-e-d-conexa-your-site-and-your-campaigns-image.png';
import convertImg2 from '~/assets/images/r-e-d-conexa-convert-image-2.png';
import createImg2 from '~/assets/images/r-e-d-conexa-create-image-2.png';
import connectImg2 from '~/assets/images/r-e-d-conexa-connect-image-2.png';
import controlImg2 from '~/assets/images/r-e-d-conexa-control-image-2.png';

const { openModal } = useModal();

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
    question: 'How fast can my website be live?',
    answer: 'Template sites go live within days. Fully custom builds take 4 to 8 weeks. Our team handles setup, your domain and SSL, and onboards your team.'
  },
  {
    question: 'Can I manage the website myself?',
    answer: 'Yes. Your team can update content, offers and stock without code. Or R-E-D can manage it for you, or you can split it between us.'
  },
  {
    question: 'How does pricing work?',
    answer: 'Pricing is tailored to the size of your business, the number of sites and the features you need. We’ll scope it with you and give you a clear quote.'
  },
  {
    question: 'What reporting do I get?',
    answer: 'Live site stats and lead data in your Conexa dashboard: visitors, top pages, traffic channels, and views and leads for every offer and vehicle, available whenever you need them.'
  },
  {
    question: 'What happens if a lead doesn’t reach our CRM?',
    answer: 'Conexa tracks every lead delivery. If one fails, our team picks it up and resolves it, so no lead is lost.'
  },
  {
    question: 'Do you handle domains and security?',
    answer: 'Yes. We set up your domain and SSL, and we monitor every site for downtime and certificate expiry.'
  },
  {
    question: 'Do you work with businesses in my industry?',
    answer: 'Conexa is built for automotive dealers and groups, and its modular design suits other businesses and industries.'
  },
  {
    question: 'What makes R-E-D different?',
    answer: 'Full control of your content without depending on developers, backed by an in-house team that builds the platform and runs digital marketing.'
  }
];

// Update Anything Carousel (7 Cards)
const updateCardsData = [
  {
    title: 'Edit Every Element:',
    description: 'Specials, banners, logos, staff, products and pages. Add, change or remove them in minutes.'
  },
  {
    title: 'Stock, Your Way:',
    description: "Enrich feed listings or add products that aren't on the feed."
  },
  {
    title: 'SEO & GEO In Your Hands',
    description: 'Page-, product- and meta-level SEO editing - tuned for Google and AI search.'
  },
  {
    title: 'New vehicle catalogue:',
    description: 'Models, variants and prices come through automatically from the feed, along with colours, highlights and comments. You can adjust anything.'
  },
  {
    title: 'Forms that fit your business:',
    description: 'Custom forms and lead types for each group, plus a “Sell your car” form where customers upload photos of their trade-in.'
  },
  {
    title: 'AI polisher and checker:',
    description: 'Polish headings, promos, blogs and descriptions with AI before they go live.'
  },
  {
    title: 'Built for your teams:',
    description: 'A simple interface, so marketing, digital and social teams can put content live themselves.'
  }
];

const updateScrollContainer = ref<HTMLDivElement | null>(null);
const isUpdateAtStart = ref(true);
const isUpdateAtEnd = ref(false);
const activeUpdateCard = ref(0);

const updateScrollStatus = () => {
  if (updateScrollContainer.value) {
    const { scrollLeft, scrollWidth, clientWidth } = updateScrollContainer.value;
    isUpdateAtStart.value = scrollLeft <= 10;
    isUpdateAtEnd.value = scrollLeft + clientWidth >= scrollWidth - 10;

    const firstCard = updateScrollContainer.value.querySelector<HTMLElement>(':scope > div');
    const cardStep = firstCard ? firstCard.offsetWidth + 24 : 365;
    if (cardStep > 0) {
      if (isUpdateAtEnd.value) {
        activeUpdateCard.value = updateCardsData.length - 1;
      } else {
        const rawIndex = Math.round(scrollLeft / cardStep);
        activeUpdateCard.value = Math.max(0, Math.min(updateCardsData.length - 1, rawIndex));
      }
    }
  }
};

const scrollUpdateCards = (direction: 'left' | 'right') => {
  if (updateScrollContainer.value) {
    const firstCard = updateScrollContainer.value.querySelector<HTMLElement>(':scope > div');
    const cardWidth = firstCard ? firstCard.offsetWidth + 24 : 365;
    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
    updateScrollContainer.value.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }
};

onMounted(() => {
  updateScrollStatus();
});

useHead({
  title: 'Conexa Website Platform',
  meta: [
    {
      name: 'description',
      content: 'Conexa by Reach Engage Develop (R-E-D) is the proprietary automotive dealership website and content management platform built to convert leads and give you total control without coding.'
    },
    {
      name: 'keywords',
      content: 'Conexa, R-E-D Conexa, Red Conexa, Reach Engage Develop Conexa, dealership website platform, automotive CMS'
    },
    { property: 'og:title', content: 'Conexa Website Platform | Reach Engage Develop (R-E-D)' },
    { property: 'og:description', content: 'Conexa by Reach Engage Develop (R-E-D) is the proprietary automotive dealership website and content management platform built to convert leads and give you total control without coding.' }
  ]
});
</script>

<style scoped>
.pop-enter-active,
.pop-leave-active {
  transition: all 0.2s ease-in-out;
  position: absolute;
}
.pop-enter-from {
  opacity: 0;
  transform: translateY(6px);
}
.pop-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
