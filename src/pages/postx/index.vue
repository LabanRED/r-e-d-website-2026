<template>
  <div class="bg-[#fcfcfc] text-neutral-900 min-h-screen pt-12 pb-16">
    <!-- back to home Breadcrumb Indicator -->
    <div class="mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12 mb-6">
      <NuxtLink
        to="/"
        class="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-[#2ca8cb] transition-colors duration-200"
      >
        <ArrowLeft class="w-4 h-4" />
        back to r-e-d home
      </NuxtLink>
    </div>

    <!-- Hero Section -->
    <section class="relative mt-4 pb-6 sm:pb-8" id="hero">
      <div class="mx-auto lg:w-[95%] max-w-[1600px] px-4 sm:px-6 lg:px-0">

        <!-- DESKTOP LAYOUT (lg and up) -->
        <div class="hidden lg:flex relative w-full lg:h-[720px] items-center overflow-hidden">
          <!-- Background Image Layer -->
          <div class="absolute inset-0 w-full h-full z-0">
            <img
              :src="postXHeroBanner"
              alt="PostX Solutions Hero Banner"
              referrerpolicy="no-referrer"
              class="w-full h-full object-contain object-right"
              fetchpriority="high"
              loading="eager"
            />
          </div>

          <!-- Content Overlaid on Desktop with exactly 100px left spacing -->
          <div class="relative z-10 w-full lg:w-[760px] lg:pt-22 lg:pl-[100px] flex flex-col justify-center items-start text-left">
            <img loading="lazy" :src="postXLogo"
              alt="PostX Logo"
              class="h-10 w-auto mb-6 object-contain"
              referrerpolicy="no-referrer"
            />
            <h1 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins font-medium text-3xl md:text-5xl lg:text-5xl mb-6 text-neutral-900">
              Every conversation. <br />
              <span class="text-[#2ca8cb] text-3xl md:text-5xl">Every channel. One platform.</span>
            </h1>

            <p class="font-poppins font-regular text-neutral-800 text-base leading-6 max-w-2xl mb-8">
              PostX brings WhatsApp, Facebook, Instagram, LinkedIn, Google reviews and live chat into one inbox. AI assistants can reply in seconds, and content tools keep your brand consistent on every channel. Built in South Africa and proven in motor retail, where every lead counts.
            </p>

            <div class="flex flex-wrap items-center gap-4">
              <button
                @click="openModal('PostX - Demo')"
                class="btn-primary text-[16px] px-10 py-5"
              >
                Book a Demo
              </button>
            </div>
          </div>
        </div>

        <!-- MOBILE & TABLET LAYOUT (below lg) - Stacked Vertically, Center-aligned -->
        <div class="block lg:hidden w-full flex flex-col items-center text-center px-4">
          <img loading="lazy" :src="postXLogo"
            alt="PostX Logo"
            class="h-10 w-auto mb-6 object-contain mx-auto"
            referrerpolicy="no-referrer"
          />
          <!-- Mobile Heading -->
          <h1 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins font-medium text-3xl sm:text-[2.25rem] md:text-5xl leading-tight tracking-tight mb-4 text-neutral-950">
            From First Click To Final Sale.<br />
            <span class="text-[#2ca8cb]">One Platform For Every Conversation.</span>
          </h1>

          <!-- Mobile Description -->
          <p class="font-poppins text-neutral-600 text-sm sm:text-base leading-relaxed max-w-xl mb-6">
            PostX unifies WhatsApp, social media, live chat, and AI-powered assistants into a single command centre - purpose-built for motor dealerships and beyond. Publish content, manage every message, generate leads, and turn conversations into sales.
          </p>

          <!-- Mobile Buttons -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 w-full sm:w-auto">
            <button
              @click="openModal('PostX - Demo')"
              class="btn-primary tracking-widest py-4 px-8 mb-10 w-full sm:w-auto text-base"
            >
              Book a Demo
            </button>
          </div>

          <!-- Mobile Image: object-contained, rounded corners -->
          <div class="w-full max-w-lg sm:max-w-xl md:max-w-2xl overflow-hidden rounded-3xl sm:rounded-3xl">
            <img
              :src="postXHeroMobileBanner"
              alt="PostX Hero Mobile Banner"
              referrerpolicy="no-referrer"
              class="w-full h-auto object-contain mx-auto"
              fetchpriority="high"
              loading="eager"
            />
          </div>
        </div>

      </div>
    </section>

    <!-- In-House Proprietary Banner Section -->
    <section class="pb-12 sm:pb-16">
      <div class="mx-auto lg:w-[95%] max-w-[1600px] px-4 sm:px-6 lg:px-0">
        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          class="rounded-[28px] sm:rounded-[32px] py-7 px-6 sm:px-10 border border-white bg-gradient-to-b from-white via-white/95 to-[#E8F8FB] shadow-[0_10px_30px_rgba(0,0,0,0.04),0_1px_3px_rgba(0,0,0,0.02)]"
        >
          <!-- Heading (24px) -->
          <h2 class="font-poppins font-medium text-lg sm:text-xl lg:text-[24px] text-center text-neutral-900 mb-6 tracking-tight leading-snug">
            <span class="text-[#2ca8cb]">A proprietary R-E-D product.</span> Built, developed, maintained and supported in-house.
          </h2>

          <!-- Feature Points -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 lg:gap-16">
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
      </div>
    </section>

    <LogoCarousel />

    <!-- Control Every Conversation Section -->
    <section class="py-20 bg-white border-b border-neutral-100">
      <div class="mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-24">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <!-- Left Column (7 cols on large screens to give ample room for beautiful typography) -->
          <div class="lg:col-span-7">
            <h2 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins font-medium text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-neutral-950 tracking-tight leading-[1.15]">
              Take Control Of<br />Every Conversation.
            </h2>
            <p class="font-poppins font-light text-xl sm:text-2xl md:text-3xl lg:text-[2.25rem] text-[#2ca8cb] italic mt-6 leading-tight">
              Your customers choose the channel. PostX makes sure your team never misses the message.
            </p>
          </div>

          <!-- Right Column (5 cols on large screens) -->
          <div class="lg:col-span-5">
            <p class="font-poppins font-regular text-neutral-800 text-base md:text-xl lg:text-xl leading-[2.25]">
              Every enquiry, comment, review and chat lands in one shared inbox. Each one is routed to the right person, tracked against your response targets and kept on record. Add an optional AI assistant to reply instantly, answer routine questions and capture details, day or night. Your team replies faster, your managers see everything, and no lead slips through.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Divider 1 -->
    <div class="w-full h-6 bg-[#F3F4F5]" />

    <!-- One Platform. Four Pillars. Section -->
    <section class="py-20 bg-[#F5F6F8]">
      <div class="mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-24">
        <!-- Header -->
        <div class="text-center mb-16">
          <h2 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins font-medium text-3xl sm:text-4xl lg:text-[2.75rem] tracking-tight text-neutral-950">
            <span class="text-[#2ca8cb] italic font-light">One Platform.</span> Four Pillars.
          </h2>
          <p class="font-poppins font-regular text-neutral-500 max-w-3xl mx-auto text-sm sm:text-base mt-3">
            PostX is built around how a dealership actually runs, with sales, service, parts, F&I, receptionists, and marketing on a single system. It’s flexible enough for any business that talks to customers.
          </p>
        </div>

        <!-- Desktop & Tablet View (Hidden on mobile) -->
        <div class="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Card 1: Create -->
          <div
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 100 } }"
            class="rounded-[30px] p-[30px] border border-white bg-gradient-to-b from-white via-white/95 to-[#E8F8FB] shadow-[0_10px_30px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.02)] min-h-[460px] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(88,228,255,0.22),0_4px_12px_rgba(0,0,0,0.04)]"
          >
            <div>
              <div class="flex items-center gap-3.5 mb-3">
                <div class="w-12 h-12 rounded-full bg-[#D6EEF0] flex items-center justify-center flex-shrink-0">
                  <img loading="lazy" :src="createIcon"
                    alt="Create Icon"
                    class="w-6 h-6 object-contain"
                    referrerpolicy="no-referrer"
                  />
                </div>
                <h3 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins font-medium text-2xl text-neutral-900 tracking-tight">Create</h3>
              </div>
              <p class="text-neutral-500 text-sm font-poppins leading-relaxed mb-5 min-h-[42px]">
                Plan, polish, approve and publish from one place.
              </p>
              <ul class="space-y-3.5">
                <li v-for="(bullet, i) in ['Omni-channel social posting & scheduling', 'Brand frames & delivery photos', 'Content approval flow', 'AI caption polisher', 'AI comment moderation', 'Controlled Access']" :key="i" class="flex items-start gap-3 text-neutral-800 text-sm sm:text-[15px] leading-relaxed">
                  <span class="w-1.5 h-1.5 rounded-full bg-[#58E4FF] mt-2 flex-shrink-0" />
                  <span>{{ bullet }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Card 2: Connect -->
          <div
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 200 } }"
            class="rounded-[30px] p-[30px] border border-white bg-gradient-to-b from-white via-white/95 to-[#E8F8FB] shadow-[0_10px_30px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.02)] min-h-[460px] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(88,228,255,0.22),0_4px_12px_rgba(0,0,0,0.04)]"
          >
            <div>
              <div class="flex items-center gap-3.5 mb-3">
                <div class="w-12 h-12 rounded-full bg-[#D6EEF0] flex items-center justify-center flex-shrink-0">
                  <img loading="lazy" :src="connectIcon"
                    alt="Connect Icon"
                    class="w-6 h-6 object-contain"
                    referrerpolicy="no-referrer"
                  />
                </div>
                <h3 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins font-medium text-2xl text-neutral-900 tracking-tight">Connect</h3>
              </div>
              <p class="text-neutral-500 text-sm font-poppins leading-relaxed mb-5 min-h-[42px]">
                From ad click to lead system, in one connected pipeline.
              </p>
              <ul class="space-y-3.5">
                <li v-for="(bullet, i) in ['Click-to-WhatsApp ads', 'Official business WhatsApp', 'Lead system integration', 'Google Review Booster', 'WhatsApp catalogue', 'Offline Activations & Events']" :key="i" class="flex items-start gap-3 text-neutral-800 text-sm sm:text-[15px] leading-relaxed">
                  <span class="w-1.5 h-1.5 rounded-full bg-[#58E4FF] mt-2 flex-shrink-0" />
                  <span>{{ bullet }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Card 3: Comms -->
          <div
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 300 } }"
            class="rounded-[30px] p-[30px] border border-white bg-gradient-to-b from-white via-white/95 to-[#E8F8FB] shadow-[0_10px_30px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.02)] min-h-[460px] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(88,228,255,0.22),0_4px_12px_rgba(0,0,0,0.04)]"
          >
            <div>
              <div class="flex items-center gap-3.5 mb-3">
                <div class="w-12 h-12 rounded-full bg-[#D6EEF0] flex items-center justify-center flex-shrink-0">
                  <img loading="lazy" :src="commsIcon"
                    alt="Comms Icon"
                    class="w-6 h-6 object-contain"
                    referrerpolicy="no-referrer"
                  />
                </div>
                <h3 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins font-medium text-2xl text-neutral-900 tracking-tight">Comms</h3>
              </div>
              <p class="text-neutral-500 text-sm font-poppins leading-relaxed mb-5 min-h-[42px]">
                Talk to customers on the platform they prefer, with fewer calls.
              </p>
              <ul class="space-y-3.5">
                <li v-for="(bullet, i) in ['Omni-channel team inbox', '24/7 AI lead assistant', 'Bulk WhatsApp messaging & Campaigns', 'Media-rich messages & templates', 'Internal Communication tool']" :key="i" class="flex items-start gap-3 text-neutral-800 text-sm sm:text-[15px] leading-relaxed">
                  <span class="w-1.5 h-1.5 rounded-full bg-[#58E4FF] mt-2 flex-shrink-0" />
                  <span>{{ bullet }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Card 4: Control -->
          <div
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 400 } }"
            class="rounded-[30px] p-[30px] border border-white bg-gradient-to-b from-white via-white/95 to-[#E8F8FB] shadow-[0_10px_30px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.02)] min-h-[460px] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(88,228,255,0.22),0_4px_12px_rgba(0,0,0,0.04)]"
          >
            <div>
              <div class="flex items-center gap-3.5 mb-3">
                <div class="w-12 h-12 rounded-full bg-[#D6EEF0] flex items-center justify-center flex-shrink-0">
                  <img loading="lazy" :src="controlIcon"
                    alt="Control Icon"
                    class="w-6 h-6 object-contain"
                    referrerpolicy="no-referrer"
                  />
                </div>
                <h3 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins font-medium text-2xl text-neutral-900 tracking-tight">Control</h3>
              </div>
              <p class="text-neutral-500 text-sm font-poppins leading-relaxed mb-5 min-h-[42px]">
                The right access for every user. The full picture for managers.
              </p>
              <ul class="space-y-3.5">
                <li v-for="(bullet, i) in ['Role-based access', 'Reporting Dashboard', 'Manager view over conversations', 'Smart routing & SLA alerts', 'Multi-dealership/Brand structure', 'Leads integrated to CRM/LMS']" :key="i" class="flex items-start gap-3 text-neutral-800 text-sm sm:text-[15px] leading-relaxed">
                  <span class="w-1.5 h-1.5 rounded-full bg-[#58E4FF] mt-2 flex-shrink-0" />
                  <span>{{ bullet }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Mobile Carousel View (Visible only on mobile) -->
        <div class="block sm:hidden">
          <div
            ref="scrollContainerRef"
            @scroll="handleScroll"
            class="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-6 pb-4"
          >
            <!-- Card 1: Create -->
            <div class="w-full flex-shrink-0 snap-center px-1">
              <div class="rounded-[30px] p-[30px] border border-white bg-gradient-to-b from-white via-white/95 to-[#E8F8FB] shadow-[0_10px_30px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.02)] min-h-[460px] flex flex-col justify-between">
                <div>
                  <div class="flex items-center gap-3.5 mb-3">
                    <div class="w-12 h-12 rounded-full bg-[#D6EEF0] flex items-center justify-center flex-shrink-0">
                      <img loading="lazy" :src="createIcon"
                        alt="Create Icon"
                        class="w-6 h-6 object-contain"
                        referrerpolicy="no-referrer"
                      />
                    </div>
                    <h3 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins font-medium text-2xl text-neutral-900 tracking-tight">Create</h3>
                  </div>
                  <p class="text-neutral-500 text-sm font-poppins leading-relaxed mb-5 min-h-[42px]">
                    Plan, polish, approve and publish from one place.
                  </p>
                  <ul class="space-y-3.5">
                    <li v-for="(bullet, i) in ['Omni-channel social posting & scheduling', 'Brand frames & delivery photos', 'Content approval flow', 'AI caption polisher', 'AI comment moderation', 'Controlled Access']" :key="i" class="flex items-start gap-3 text-neutral-800 text-sm sm:text-[15px] leading-relaxed">
                      <span class="w-1.5 h-1.5 rounded-full bg-[#58E4FF] mt-2 flex-shrink-0" />
                      <span>{{ bullet }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Card 2: Connect -->
            <div class="w-full flex-shrink-0 snap-center px-1">
              <div class="rounded-[30px] p-[30px] border border-white bg-gradient-to-b from-white via-white/95 to-[#E8F8FB] shadow-[0_10px_30px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.02)] min-h-[460px] flex flex-col justify-between">
                <div>
                  <div class="flex items-center gap-3.5 mb-3">
                    <div class="w-12 h-12 rounded-full bg-[#D6EEF0] flex items-center justify-center flex-shrink-0">
                      <img loading="lazy" :src="connectIcon"
                        alt="Connect Icon"
                        class="w-6 h-6 object-contain"
                        referrerpolicy="no-referrer"
                      />
                    </div>
                    <h3 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins font-medium text-2xl text-neutral-900 tracking-tight">Connect</h3>
                  </div>
                  <p class="text-neutral-500 text-sm font-poppins leading-relaxed mb-5 min-h-[42px]">
                    From ad click to lead system, in one connected pipeline.
                  </p>
                  <ul class="space-y-3.5">
                    <li v-for="(bullet, i) in ['Click-to-WhatsApp ads', 'Official business WhatsApp', 'Lead system integration', 'Google Review Booster', 'WhatsApp catalogue', 'Offline Activations & Events']" :key="i" class="flex items-start gap-3 text-neutral-800 text-sm sm:text-[15px] leading-relaxed">
                      <span class="w-1.5 h-1.5 rounded-full bg-[#58E4FF] mt-2 flex-shrink-0" />
                      <span>{{ bullet }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Card 3: Comms -->
            <div class="w-full flex-shrink-0 snap-center px-1">
              <div class="rounded-[30px] p-[30px] border border-white bg-gradient-to-b from-white via-white/95 to-[#E8F8FB] shadow-[0_10px_30px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.02)] min-h-[460px] flex flex-col justify-between">
                <div>
                  <div class="flex items-center gap-3.5 mb-3">
                    <div class="w-12 h-12 rounded-full bg-[#D6EEF0] flex items-center justify-center flex-shrink-0">
                      <img loading="lazy" :src="commsIcon"
                        alt="Comms Icon"
                        class="w-6 h-6 object-contain"
                        referrerpolicy="no-referrer"
                      />
                    </div>
                    <h3 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins font-medium text-2xl text-neutral-900 tracking-tight">Comms</h3>
                  </div>
                  <p class="text-neutral-500 text-sm font-poppins leading-relaxed mb-5 min-h-[42px]">
                    Talk to customers on the platform they prefer, with fewer calls.
                  </p>
                  <ul class="space-y-3.5">
                    <li v-for="(bullet, i) in ['Omni-channel team inbox', '24/7 AI lead assistant', 'Bulk WhatsApp messaging & Campaigns', 'Media-rich messages & templates', 'Internal Communication tool']" :key="i" class="flex items-start gap-3 text-neutral-800 text-sm sm:text-[15px] leading-relaxed">
                      <span class="w-1.5 h-1.5 rounded-full bg-[#58E4FF] mt-2 flex-shrink-0" />
                      <span>{{ bullet }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Card 4: Control -->
            <div class="w-full flex-shrink-0 snap-center px-1">
              <div class="rounded-[30px] p-[30px] border border-white bg-gradient-to-b from-white via-white/95 to-[#E8F8FB] shadow-[0_10px_30px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.02)] min-h-[460px] flex flex-col justify-between">
                <div>
                  <div class="flex items-center gap-3.5 mb-3">
                    <div class="w-12 h-12 rounded-full bg-[#D6EEF0] flex items-center justify-center flex-shrink-0">
                      <img loading="lazy" :src="controlIcon"
                        alt="Control Icon"
                        class="w-6 h-6 object-contain"
                        referrerpolicy="no-referrer"
                      />
                    </div>
                    <h3 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins font-medium text-2xl text-neutral-900 tracking-tight">Control</h3>
                  </div>
                  <p class="text-neutral-500 text-sm font-poppins leading-relaxed mb-5 min-h-[42px]">
                    The right access for every user. The full picture for managers.
                  </p>
                  <ul class="space-y-3.5">
                    <li v-for="(bullet, i) in ['Role-based access', 'Reporting Dashboard', 'Manager view over conversations', 'Smart routing & SLA alerts', 'Multi-dealership/Brand structure', 'Leads integrated to CRM/LMS']" :key="i" class="flex items-start gap-3 text-neutral-800 text-sm sm:text-[15px] leading-relaxed">
                      <span class="w-1.5 h-1.5 rounded-full bg-[#58E4FF] mt-2 flex-shrink-0" />
                      <span>{{ bullet }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Pagination Controls -->
          <div class="flex justify-between items-center mt-6 px-1">
            <!-- Pagination Pill -->
            <div class="border border-black text-black rounded-full px-5 h-[34px] text-sm font-poppins font-medium flex items-center justify-center gap-1">
              <div class="relative w-3 h-5 overflow-hidden flex items-center justify-center">
                <transition name="pop">
                  <span :key="activePillar" class="absolute font-semibold text-black">
                    {{ activePillar + 1 }}
                  </span>
                </transition>
              </div>
              <span> - 4</span>
            </div>

            <!-- Navigation Chevrons -->
            <div class="flex items-center gap-3">
              <button
                @click="prevPillar"
                :disabled="activePillar === 0"
                :class="[
                  'w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200',
                  activePillar === 0
                    ? 'border border-neutral-300 text-neutral-400 opacity-60 cursor-not-allowed'
                    : 'border border-neutral-400 text-neutral-800 hover:border-neutral-900 active:scale-95 cursor-pointer'
                ]"
                aria-label="Previous card"
              >
                <ChevronLeft class="w-5 h-5" />
              </button>
              <button
                @click="nextPillar"
                :disabled="activePillar === 3"
                :class="[
                  'w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 shadow-sm',
                  activePillar === 3
                    ? 'bg-neutral-300 text-neutral-500 opacity-60 cursor-not-allowed'
                    : 'bg-black text-white hover:bg-neutral-800 active:scale-95 cursor-pointer'
                ]"
                aria-label="Next card"
              >
                <ChevronRight class="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Divider 2 -->
    <div class="w-full h-6 bg-[#F3F4F5]" />

    <!-- Meet your 24/7 Assistant - Powered by AI Section -->
    <section class="py-20 bg-white">
      <div class="mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-24">
        <!-- Header & Intro -->
        <div class="mb-16">
          <h2 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins font-medium text-3xl sm:text-4xl lg:text-5xl leading-tight text-neutral-950">
            <span class="text-[#2ca8cb] italic font-light">Meet your 24/7 assistant,</span><br />
            <span class="font-medium">- Powered By AI</span>
          </h2>
          <p class="font-poppins font-regular text-neutral-600 text-base sm:text-lg max-w-2xl mt-4 leading-relaxed">
            Let AI handle the first reply and the routine questions,<br />
            so your team can focus on the conversations that close.
          </p>
        </div>

        <!-- Three Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Card 1 -->
          <div
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 100 } }"
            class="bg-[#f1fafc] rounded-3xl p-8 sm:p-10 shadow-[0px_4px_30px_rgba(0,0,0,0.03)] flex flex-col justify-between transition-all duration-300 hover:scale-[1.01]"
          >
            <div>
              <div class="w-12 h-12 flex items-center justify-center mb-6">
                <img loading="lazy" :src="leadQualIcon"
                  alt="Replies in seconds, day or night Icon"
                  class="w-12 h-12 object-contain transition-transform duration-300 hover:scale-105"
                  referrerpolicy="no-referrer"
                />
              </div>
              <h3 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins font-medium text-xl text-neutral-900 mb-3">Replies in seconds, day or night.</h3>
              <p class="font-poppins font-regular text-neutral-700 text-sm sm:text-base leading-relaxed">
                The PostX AI Assistant greets every new WhatsApp enquiry instantly, works out what the customer needs and captures their details. Qualified leads go straight into your lead management system, even after hours.
              </p>
            </div>
          </div>

          <!-- Card 2 -->
          <div
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 200 } }"
            class="bg-[#f1fafc] rounded-3xl p-8 sm:p-10 shadow-[0px_4px_30px_rgba(0,0,0,0.03)] flex flex-col justify-between transition-all duration-300 hover:scale-[1.01]"
          >
            <div>
              <div class="w-12 h-12 flex items-center justify-center mb-6">
                <img loading="lazy" :src="intelConversationsIcon"
                  alt="Intelligent Conversations Icon"
                  class="w-12 h-12 object-contain transition-transform duration-300 hover:scale-105"
                  referrerpolicy="no-referrer"
                />
              </div>
              <h3 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins font-medium text-xl text-neutral-900 mb-3">Trained on your business.</h3>
              <p class="font-poppins font-regular text-neutral-700 text-sm sm:text-base leading-relaxed">
                It’s set up with your brand, stock, pricing, FAQs and processes, and it can show customers your WhatsApp catalogue right in the chat. Let it book appointments and follow up on leads that have gone quiet.
              </p>
            </div>
          </div>

          <!-- Card 3 -->
          <div
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 300 } }"
            class="bg-[#f1fafc] rounded-3xl p-8 sm:p-10 shadow-[0px_4px_30px_rgba(0,0,0,0.03)] flex flex-col justify-between transition-all duration-300 hover:scale-[1.01]"
          >
            <div>
              <div class="w-12 h-12 flex items-center justify-center mb-6">
                <img loading="lazy" :src="teamFocusIcon"
                  alt="Team Focus Icon"
                  class="w-12 h-12 object-contain transition-transform duration-300 hover:scale-105"
                  referrerpolicy="no-referrer"
                />
              </div>
              <h3 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins font-medium text-xl text-neutral-900 mb-3">Hands over at the right moment.</h3>
              <p class="font-poppins font-regular text-neutral-700 text-sm sm:text-base leading-relaxed">
                When a customer is ready, the chat moves to the right person with the full history, so nobody has to ask the same question twice. The right balance between AI and your people is what makes it work.

              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Divider 3 -->
    <div class="w-full h-6 bg-[#F3F4F5]" />

    <!-- Mid Page CTA Banners -->
    <section v-motion :initial="{ opacity: 0, y: 30 }" :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }" class="w-full bg-white py-20 px-8 relative">
      <!-- Desktop Banner -->
      <div
        class="hidden sm:block w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 cursor-pointer relative group"
        @click="openModal('PostX - Demo')"
      >
        <img loading="lazy" :src="desktopMidCta" alt="PostX Mid Page CTA" class="w-full h-auto object-contain transition-transform duration-300 group-hover:opacity-95" referrerpolicy="no-referrer" />
        <div class="absolute inset-y-0 left-[8%] md:left-[10%] lg:left-[12%] flex flex-col justify-center items-start text-left max-w-[500px]">
          <p class="font-poppins text-neutral-800 font-medium text-sm md:text-base lg:text-[18px] mb-2 tracking-wide">
            Increase your conversion rate today.
          </p>
          <h2 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins font-medium text-3xl md:text-4xl lg:text-[3rem] leading-[1.1] text-neutral-950 mb-8 tracking-tight">
            Ready To Simplify<br />Your Conversations?
          </h2>
          <div class="btn-primary py-4 px-10 text-base">
            Book a Demo
          </div>
        </div>
      </div>

      <!-- Mobile Banner -->
      <div
        class="block sm:hidden w-full cursor-pointer relative transition-transform duration-300 active:opacity-95"
        @click="openModal('PostX - Demo')"
      >
        <img loading="lazy" :src="mobileMidCta" alt="PostX Mid Page CTA" class="w-full h-auto object-contain" referrerpolicy="no-referrer" />
        <div class="absolute top-[4%] left-5 right-5 flex flex-col items-start text-left">
          <p class="font-poppins text-neutral-800 font-medium text-xs mb-1.5 tracking-wide">
            Increase your conversion rate today.
          </p>
          <h2 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins font-medium text-[1.35rem] min-[400px]:text-[1.5rem] leading-[1.2] text-neutral-950 mb-3 tracking-tight">
            Ready To Simplify<br />Your Conversations?
          </h2>
          <div class="btn-primary py-2.5 px-6 text-xs">
            Book a Demo
          </div>
        </div>
      </div>
    </section>

    <!-- Content Creation & Publishing Carousel Section -->
    <section v-motion :initial="{ opacity: 0, y: 30 }" :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }" class="w-full bg-[#f5f5f5] py-20 sm:py-24 px-6 sm:px-8 lg:px-12">
      <div class="max-w-[1600px] mx-auto">
        <!-- Section Header -->
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8 sm:mb-12">
          <div>
            <h2 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins text-3xl sm:text-4xl lg:text-[48px] leading-tight tracking-tight">
              <span class="italic font-light text-[#2ca8cb]">Create, approve and publish content</span><br />
              <span class="font-medium text-neutral-950">without the back-and-forth</span>
            </h2>
            <p class="font-poppins font-normal text-base text-neutral-600 mt-3 max-w-2xl">
              Keep every location on brand and every post signed off, from one place.
            </p>
          </div>

          <!-- Carousel Controls (Desktop) -->
          <div class="hidden sm:flex items-center gap-4 sm:self-auto flex-shrink-0">
            <!-- Pagination Pill (Desktop) -->
            <div class="border border-black text-black rounded-full px-5 h-[34px] text-sm font-poppins font-medium flex items-center justify-center gap-1">
              <div class="relative w-3.5 h-5 overflow-hidden flex items-center justify-center">
                <transition name="pop">
                  <span :key="activeContentCard" class="absolute font-semibold text-black">
                    {{ activeContentCard + 1 }}
                  </span>
                </transition>
              </div>
              <span> - {{ contentCardsData.length }}</span>
            </div>

            <!-- Navigation Chevrons -->
            <div class="flex items-center gap-3">
              <button
                @click="scrollCards('left')"
                :disabled="isAtStart"
                :class="[
                  'w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200',
                  isAtStart
                    ? 'border border-neutral-300 text-neutral-400 opacity-60 cursor-not-allowed'
                    : 'border border-neutral-400 text-neutral-800 hover:border-neutral-900 active:scale-95 cursor-pointer'
                ]"
                aria-label="Previous card"
              >
                <ChevronLeft class="w-5 h-5" />
              </button>
              <button
                @click="scrollCards('right')"
                :disabled="isAtEnd"
                :class="[
                  'w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 shadow-sm',
                  isAtEnd
                    ? 'bg-neutral-300 text-neutral-500 opacity-60 cursor-not-allowed'
                    : 'bg-black text-white hover:bg-neutral-800 active:scale-95 cursor-pointer'
                ]"
                aria-label="Next card"
              >
                <ChevronRight class="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <!-- Cards Carousel -->
        <div
          ref="contentScrollContainer"
          @scroll="updateScrollButtons"
          class="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-6 pt-2 px-1"
        >
          <div
            v-for="(card, index) in contentCardsData"
            :key="index"
            class="w-[280px] sm:w-[328px] flex-shrink-0 bg-white rounded-3xl p-6 sm:p-7 border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.02)] flex flex-col transition-all duration-300 hover:shadow-md hover:border-neutral-300"
          >
            <h3 class="font-poppins font-medium text-[20px] sm:text-[24px] text-neutral-950 leading-snug tracking-tight mb-4 min-h-[58px] sm:min-h-[72px]">
              {{ card.title }}
            </h3>
            <div class="w-full h-[180px] sm:h-[220px] rounded-2xl overflow-hidden mb-5 bg-neutral-100 flex-shrink-0">
              <img
                loading="lazy"
                :src="card.img"
                :alt="card.alt"
                class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <p class="font-poppins font-normal text-sm sm:text-base text-neutral-600 leading-relaxed">
              {{ card.desc }}
            </p>
          </div>
        </div>

        <!-- Carousel Controls (Mobile) -->
        <div class="flex sm:hidden justify-between items-center pt-2 px-1">
          <!-- Pagination Pill (Mobile) -->
          <div class="border border-black text-black rounded-full px-5 h-[34px] text-sm font-poppins font-medium flex items-center justify-center gap-1">
            <div class="relative w-3.5 h-5 overflow-hidden flex items-center justify-center">
              <transition name="pop">
                <span :key="activeContentCard" class="absolute font-semibold text-black">
                  {{ activeContentCard + 1 }}
                </span>
              </transition>
            </div>
            <span> - {{ contentCardsData.length }}</span>
          </div>

          <!-- Navigation Chevrons -->
          <div class="flex items-center gap-3">
            <button
              @click="scrollCards('left')"
              :disabled="isAtStart"
              :class="[
                'w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200',
                isAtStart
                  ? 'border border-neutral-300 text-neutral-400 opacity-60 cursor-not-allowed'
                  : 'border border-neutral-400 text-neutral-800 hover:border-neutral-900 active:scale-95 cursor-pointer'
              ]"
              aria-label="Previous card"
            >
              <ChevronLeft class="w-5 h-5" />
            </button>
            <button
              @click="scrollCards('right')"
              :disabled="isAtEnd"
              :class="[
                'w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 shadow-sm',
                isAtEnd
                  ? 'bg-neutral-300 text-neutral-500 opacity-60 cursor-not-allowed'
                  : 'bg-black text-white hover:bg-neutral-800 active:scale-95 cursor-pointer'
              ]"
              aria-label="Next card"
            >
              <ChevronRight class="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>


    <!-- Omnichannel Workhorse Section -->
    <section v-motion :initial="{ opacity: 0, y: 30 }" :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }" class="w-full border-t border-b border-neutral-200/60 overflow-hidden relative">
      <!-- DESKTOP BANNER LAYOUT (lg and up) -->
      <div class="hidden lg:block relative w-full max-w-[1600px] mx-auto min-h-[640px] px-6 sm:px-8 lg:px-12">
        <!-- Desktop Background Banner Image Layer -->
        <div class="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <img
            loading="lazy"
            :src="postxDesktopBanner"
            alt="PostX Mobile App Interface"
            class="w-full h-full object-cover object-left"
          />
        </div>

        <!-- Overlaid Desktop Content (Right-aligned over the background space) -->
        <div class="relative z-10 ml-auto w-full lg:w-[52%] xl:w-[48%] py-16 flex flex-col items-start text-left">
          <h2 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins font-medium text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.25] text-neutral-950 mb-6 tracking-tight">
            Post<span class="text-primary font-medium">X</span> inbox and your content, in your pocket
          </h2>

          <p class="font-poppins font-regular text-neutral-700 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
            The PostX mobile app gives your team the same control away from the desk. Reply to a customer from the floor, approve a post between meetings, or take a photo and send it for approval in under a minute.
          </p>

          <ul class="space-y-3.5 mb-8">
            <li v-for="(item, i) in ['Reply to, transfer and close chats from anywhere', 'Action your leads and customer chats after hours ', 'Set your online status, so out-of-office replies take over when you’re away', 'Take a photo, add your frame and send it for approval', 'Review and approve content with one tap']" :key="i" class="flex items-center gap-3 font-poppins text-neutral-800 font-medium text-sm sm:text-base">
              <span class="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              <span>{{ item }}</span>
            </li>
          </ul>

          <div class="mb-10">
            <button
              @click="openModal('PostX - Demo')"
              class="btn-primary py-4 px-10 text-base"
            >
              Book a Demo
            </button>
          </div>

          <!-- Download App Links -->
          <div class="flex flex-col items-start gap-3">
            <span class="font-poppins font-medium text-neutral-800 text-sm sm:text-base">
              PostX is available on Google Play and App Store
            </span>
            <div class="flex items-center gap-4 flex-wrap">
              <a
                href="https://play.google.com/store/apps/details?id=com.postx.app&hl=en_ZA"
                target="_blank"
                rel="noopener noreferrer"
                class="transition-transform duration-200 hover:scale-105"
              >
                <img
                  loading="lazy"
                  :src="postxGooglePlayBadge"
                  alt="Get it on Google Play"
                  class="h-12 w-auto object-contain"
                />
              </a>
              <a
                href="https://apps.apple.com/za/app/postx-app/id1606876660"
                target="_blank"
                rel="noopener noreferrer"
                class="transition-transform duration-200 hover:scale-105"
              >
                <img
                  loading="lazy"
                  :src="postxAppStoreBadge"
                  alt="Download on the App Store"
                  class="h-12 w-auto object-contain"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Mobile App Banner Image -->
      <div class="w-full flex justify-center">
        <img
          loading="lazy"
          :src="postxMobileBanner"
          alt="PostX Mobile App Interface"
          class="w-full max-w-md h-auto object-contain md:hidden lg:hidden"
        />
      </div>

      <!-- MOBILE BANNER LAYOUT (below lg) -->
      <div class="lg:hidden w-full px-6 py-12 flex flex-col items-center text-left">

        

        <!-- Content -->
        <div class="w-full max-w-xl flex flex-col items-start">
          <h2 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins font-medium text-3xl sm:text-4xl leading-[1.25] text-neutral-950 mb-6 tracking-tight">
            Post<span class="text-primary font-medium">X</span> inbox and your content, in your pocket
          </h2>

          <p class="font-poppins font-regular text-neutral-700 text-sm sm:text-base leading-relaxed mb-6">
            The PostX mobile app gives your team the same control away from the desk. Reply to a customer from the floor, approve a post between meetings, or take a photo and send it for approval in under a minute.
          </p>

          <ul class="space-y-3 mb-6">
            <li v-for="(item, i) in ['Reply to, transfer and close chats from anywhere', 'Action your leads and customer chats after hours ', 'Set your online status, so out-of-office replies take over when you’re away', 'Take a photo, add your frame and send it for approval', 'Review and approve content with one tap']" :key="i" class="flex items-center gap-3 font-poppins text-neutral-800 font-medium text-sm">
              <span class="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              <span>{{ item }}</span>
            </li>
          </ul>

          <div class="mb-8 w-full sm:w-auto">
            <button
              @click="openModal('PostX - Demo')"
              class="btn-primary py-3.5 px-8 w-full sm:w-auto text-base"
            >
              Book a Demo
            </button>
          </div>

          <!-- Download App Links -->
          <div class="flex flex-col items-start gap-3 w-full">
            <span class="font-poppins font-medium text-neutral-800 text-sm">
              Download the app today.
            </span>
            <div class="flex items-center gap-4 flex-wrap">
              <a
                href="https://play.google.com/store/apps/details?id=com.postx.app&hl=en_ZA"
                target="_blank"
                rel="noopener noreferrer"
                class="transition-transform duration-200 hover:scale-105"
              >
                <img
                  loading="lazy"
                  :src="postxGooglePlayBadge"
                  alt="Get it on Google Play"
                  class="h-11 w-auto object-contain"
                />
              </a>
              <a
                href="https://apps.apple.com/za/app/postx-app/id1606876660"
                target="_blank"
                rel="noopener noreferrer"
                class="transition-transform duration-200 hover:scale-105"
              >
                <img
                  loading="lazy"
                  :src="postxAppStoreBadge"
                  alt="Download on the App Store"
                  class="h-11 w-auto object-contain"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Automate Customer Journey Section -->
    <section v-motion :initial="{ opacity: 0, y: 30 }" :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }" ref="automateFeaturesRef" class="w-full bg-[#f4f9fa] py-12 sm:py-24 px-6 sm:px-8 lg:px-12">
      <div class="max-w-[1200px] mx-auto">
        <!-- Desktop Layout -->
        <div class="hidden lg:grid grid-cols-2 gap-12 items-center">
          <div class="flex flex-col items-start text-left">
            <h2 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins font-medium text-[#2ca8cb] text-[2.5rem] leading-[1.15] mb-4 tracking-tight">
              Talk to customers<br />where they already are
            </h2>
            <h3 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins font-medium text-neutral-900 text-[1.8rem] leading-tight mb-8 tracking-tight">
              From First Chat<br />To Final Deal
            </h3>
            <p class="font-poppins text-neutral-800 text-md font-regular leading-[1.6] mb-8 max-w-xl tracking-wide">
              Most customers would rather send a WhatsApp than wait on hold. PostX makes WhatsApp your team’s main way to talk to customers, with fewer calls, fewer back-and-forth emails, and conversations that are easy to manage even at high volume.
            </p>
            <button @click="openModal('PostX - Feature')" class="btn-primary text-[15px] px-9 py-3.5">Book a Demo</button>
          </div>
          <div class="flex justify-end">
            <img loading="lazy" :src="automateDesktop" alt="Automate Customer Journey" class="w-full max-w-[550px] h-auto object-contain" referrerpolicy="no-referrer" />
          </div>
        </div>

        <!-- Mobile Layout -->
        <div class="flex flex-col lg:hidden">
          <h2 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins font-medium text-[#2ca8cb] text-[2rem] sm:text-4xl leading-[1.15] mb-2 tracking-tight">
           Talk to customers <br />where they already are
          </h2>
          <h3 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins font-medium text-neutral-900 text-[1.5rem] sm:text-3xl leading-tight mb-8 tracking-tight">
            From First Chat<br />To Final Deal
          </h3>

          <div class="w-full mb-8 flex justify-center -mx-4 sm:mx-0">
            <img loading="lazy" :src="automateMobile" alt="Automate Customer Journey" class="w-[105%] sm:w-full max-w-none sm:max-w-full h-auto object-contain" referrerpolicy="no-referrer" />
          </div>

          <p class="font-poppins text-neutral-800 font-medium text-base sm:text-lg leading-[1.6] mb-8 tracking-wide">
            Capture 24/7 leads, schedule test drives, send automated reminders, and exchange secure documents, all while keeping your sales, service, and admin teams perfectly connected.
          </p>
          <div class="w-full">
            <button @click="openModal('PostX - Feature')" class="btn-primary text-base px-8 py-3.5 w-full sm:w-auto">Book a Demo</button>
          </div>
        </div>

        <!-- Desktop Expandable Features List -->
        <div class="hidden lg:flex flex-col gap-24 mt-24">
          <template v-for="(feature, idx) in automateFeaturesData" :key="idx">
            <div v-if="isFeaturesExpanded || idx === 0" :class="`flex ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center gap-20`">

              <div class="w-1/2 flex justify-center">
                <img loading="lazy" :src="feature.img" :alt="feature.title" class="w-full max-w-[400px] object-contain drop-shadow-xl" />
              </div>

              <div class="w-1/2 flex flex-col items-start">
                <div class="bg-white rounded-4xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-12 w-full">
                  <h3 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins text-[1.75rem] font-medium text-neutral-900 leading-[1.3] mb-4">
                    {{ feature.title }}
                  </h3>
                  <p class="font-poppins text-neutral-600 font-medium text-[1.05rem] leading-[1.6]">
                    {{ feature.desc }}
                  </p>
                </div>
              </div>

            </div>
          </template>
        </div>

        <!-- Desktop View More / View Less Button -->
        <div class="hidden lg:flex mt-20 justify-center">
          <button v-if="!isFeaturesExpanded" @click="isFeaturesExpanded = true" class="btn-primary px-10 py-4 text-base">View More</button>
          <button v-else @click="collapseFeatures" class="bg-transparent border-2 border-primary text-primary hover:bg-black hover:text-white hover:border-transparent hover:scale-105 font-poppins font-medium px-10 py-3.5 rounded-full transition-all duration-300 active:scale-95 cursor-pointer text-base">View Less</button>
        </div>

        <!-- Mobile Features Carousel -->
        <div class="flex flex-col lg:hidden mt-12 sm:mt-16 -mx-6 sm:-mx-8">
          <div
            ref="automateScrollContainerRef"
            @scroll="handleAutomateScroll"
            class="flex overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4 px-6 sm:px-8 [overscroll-behavior-x:contain]"
          >
            <div v-for="(feature, idx) in automateFeaturesData" :key="idx" class="w-full flex-shrink-0 snap-center flex flex-col items-center">
              <div class="w-full h-[210px] sm:h-[280px] flex items-center justify-center mb-4 px-4 flex-shrink-0">
                <img loading="lazy" :src="feature.img" :alt="feature.title" class="max-h-full w-auto max-w-85 object-contain drop-shadow-xl" />
              </div>
              <div class="w-full flex flex-col items-start px-1 sm:px-2 flex-1">
                <div class="bg-white rounded-3xl sm:rounded-4xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 sm:p-8 w-full text-left min-h-[330px] sm:min-h-[300px] flex flex-col justify-start">
                  <h3 class="font-poppins text-xl sm:text-2xl font-medium text-neutral-900 leading-[1.3] mb-3 min-h-[54px] sm:min-h-[62px]">
                    {{ feature.title }}
                  </h3>
                  <p class="font-poppins text-neutral-600 font-medium text-sm sm:text-base leading-[1.6]">
                    {{ feature.desc }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Mobile Carousel Controls & Single Enquire Button -->
          <div class="flex flex-col gap-6 mt-6 px-6 sm:px-8">
            <div class="w-full">
              <button @click="openModal('PostX - Enquire')" class="btn-primary text-base px-8 py-3.5 w-full sm:w-auto">
                Enquire Today
              </button>
            </div>

            <!-- Pagination Pill & Navigation Chevrons -->
            <div class="flex justify-between items-center px-1">
              <!-- Pagination Pill -->
              <div class="border border-black text-black rounded-full px-5 h-[34px] text-sm font-poppins font-medium flex items-center justify-center gap-1">
                <div class="relative w-3.5 h-5 overflow-hidden flex items-center justify-center">
                  <transition name="pop">
                    <span :key="activeAutomateFeature" class="absolute font-semibold text-black">
                      {{ activeAutomateFeature + 1 }}
                    </span>
                  </transition>
                </div>
                <span> - {{ automateFeaturesData.length }}</span>
              </div>

              <!-- Navigation Chevrons -->
              <div class="flex items-center gap-3">
                <button
                  @click="scrollToAutomateFeature(Math.max(0, activeAutomateFeature - 1))"
                  :disabled="activeAutomateFeature === 0"
                  :class="[
                    'w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200',
                    activeAutomateFeature === 0
                      ? 'border border-neutral-300 text-neutral-400 opacity-60 cursor-not-allowed'
                      : 'border border-neutral-400 text-neutral-800 hover:border-neutral-900 active:scale-95 cursor-pointer'
                  ]"
                  aria-label="Previous feature"
                >
                  <ChevronLeft class="w-5 h-5" />
                </button>
                <button
                  @click="scrollToAutomateFeature(Math.min(automateFeaturesData.length - 1, activeAutomateFeature + 1))"
                  :disabled="activeAutomateFeature === automateFeaturesData.length - 1"
                  :class="[
                    'w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 shadow-sm',
                    activeAutomateFeature === automateFeaturesData.length - 1
                      ? 'bg-neutral-300 text-neutral-500 opacity-60 cursor-not-allowed'
                      : 'bg-black text-white hover:bg-neutral-800 active:scale-95 cursor-pointer'
                  ]"
                  aria-label="Next feature"
                >
                  <ChevronRight class="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- Dynamic Service Section -->
    <section v-motion :initial="{ opacity: 0, y: 30 }" :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }" class="w-full bg-white py-20 sm:py-28 px-6 sm:px-8 lg:px-12 overflow-hidden">
      <div class="max-w-350 mx-auto">

        <!-- Header -->
        <div class="mb-16 md:mb-20 text-left">
          <h2 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins text-[2.5rem] md:text-[3.5rem] md:w-[70%] lg:w-[50%] font-medium leading-[1.2] tracking-tight text-neutral-900 mb-6">
            Set up around how your business works
          </h2>
          <p class="font-poppins text-lg md:text-xl text-neutral-600 font-medium max-w-3xl">
            Personalised onboarding, sized to your team, your locations and your goals.
          </p>
        </div>

        <!-- Desktop Layout (3 Columns) -->
        <div class="hidden lg:grid grid-cols-12 gap-8 items-center relative">
          <!-- Left Column Features -->
          <div class="col-span-3 flex flex-col gap-16 relative z-10">
            <div>
              <img loading="lazy" :src="builtNotLicensedIcon" alt="Built, not licensed" class="h-8 md:h-10 w-auto mb-5 transition-transform duration-300 hover:scale-105" />
              <h3 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins text-xl md:text-2xl font-medium text-neutral-800 mb-3">Built for real workflows.</h3>
              <p class="font-poppins text-neutral-600 text-sm md:text-base leading-[1.6]">
                Designed with South African businesses, from single sites to national groups, and refined in demanding motor retail environments.
              </p>
            </div>
            <div>
              <img loading="lazy" :src="inhouseDevIcon" alt="Developed 100% in-house" class="h-8 md:h-10 w-auto mb-5 transition-transform duration-300 hover:scale-105" />
              <h3 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins text-xl md:text-2xl font-medium text-neutral-800 mb-3">Built and owned by R-E-D.</h3>
              <p class="font-poppins text-neutral-600 text-sm md:text-base leading-[1.6]">
                Every feature is designed and improved by our own developers, so your feedback shapes the roadmap.
              </p>
            </div>
          </div>

          <!-- Center Column Laptop Image -->
          <div class="col-span-6 flex justify-center relative z-0">
            <img loading="lazy" :src="dynamicLaptopImg" alt="PostX Dashboard on Laptop" class="w-[120%] max-w-212.5 object-contain drop-shadow-2xl" />
          </div>

          <!-- Right Column Features -->
          <div class="col-span-3 flex flex-col gap-16 relative z-10">
            <div>
              <img loading="lazy" :src="unlimitedUsersIcon" alt="Unlimited users" class="h-8 md:h-10 w-auto mb-5 transition-transform duration-300 hover:scale-105" />
              <h3 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins text-xl md:text-2xl font-medium text-neutral-800 mb-3">Unlimited users.</h3>
              <p class="font-poppins text-neutral-600 text-sm md:text-base leading-[1.6]">
                No per-seat pricing. Everyone who talks to customers can use PostX.
              </p>
            </div>
            <div>
              <img loading="lazy" :src="inhouseSupportIcon" alt="In-house support team" class="h-8 md:h-10 w-auto mb-5 transition-transform duration-300 hover:scale-105" />
              <h3 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins text-xl md:text-2xl font-medium text-neutral-800 mb-3">Support from the people who built it.</h3>
              <p class="font-poppins text-neutral-600 text-sm md:text-base leading-[1.6]">
                Talk to our in-house team directly, not a ticket queue.
              </p>
            </div>
          </div>
        </div>

        <!-- Mobile Layout (1 Column Stacked Features) -->
        <div class="flex flex-col lg:hidden gap-12 mt-8">
          <div>
            <img loading="lazy" :src="builtNotLicensedIcon" alt="Built, not licensed" class="h-9 w-auto mb-4 transition-transform duration-300 hover:scale-105" />
            <h3 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins text-[1.35rem] sm:text-2xl font-medium text-neutral-800 mb-3">Built, Not Licensed</h3>
            <p class="font-poppins text-neutral-600 text-base sm:text-lg leading-[1.6]">
              Build from the ground up for dealer workflows and your local systems & compliance.
            </p>
          </div>
          <div>
            <img loading="lazy" :src="inhouseDevIcon" alt="Developed 100% in-house" class="h-9 w-auto mb-4 transition-transform duration-300 hover:scale-105" />
            <h3 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins text-[1.35rem] sm:text-2xl font-medium text-neutral-800 mb-3">Developed 100% In-House</h3>
            <p class="font-poppins text-neutral-600 text-base sm:text-lg leading-[1.6]">
              No Third-party dependencies. Every feature is built, owned, and evolved by our team.
            </p>
          </div>
          <div>
            <img loading="lazy" :src="unlimitedUsersIcon" alt="Unlimited users" class="h-9 w-auto mb-4 transition-transform duration-300 hover:scale-105" />
            <h3 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins text-[1.35rem] sm:text-2xl font-medium text-neutral-800 mb-3">Unlimited Users</h3>
            <p class="font-poppins text-neutral-600 text-base sm:text-lg leading-[1.6]">
              No per-seat pricing games. Your whole team gets access - sales, service, F&I, parts, everyone.
            </p>
          </div>
          <div>
            <img loading="lazy" :src="inhouseSupportIcon" alt="In-house support team" class="h-9 w-auto mb-4 transition-transform duration-300 hover:scale-105" />
            <h3 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins text-[1.35rem] sm:text-2xl font-medium text-neutral-800 mb-3">In-House Support Team</h3>
            <p class="font-poppins text-neutral-600 text-base sm:text-lg leading-[1.6]">
              Direct access to the people who built it, No tickets disappearing into a vendor's queue
            </p>
          </div>

          <!-- Mobile Laptop Image -->
          <div class="w-full flex justify-center mt-6">
            <img loading="lazy" :src="dynamicLaptopImg" alt="PostX Dashboard on Laptop" class="w-screen max-w-125 object-contain drop-shadow-2xl" />
          </div>
        </div>

      </div>
    </section>

    <!-- Divider 4 -->
    <div class="w-full h-6 bg-[#F3F4F5]" />

    <!-- Clients Who Trust PostX Section -->
    <section v-motion :initial="{ opacity: 0, y: 30 }" :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }" class="w-full bg-white py-16 sm:py-24 px-6 sm:px-8 lg:px-12 overflow-hidden">
      <div class="max-w-[1400px] mx-auto">
        <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

          <!-- Image Column -->
          <div class="w-full lg:w-[45%] flex justify-center lg:justify-start">
            <img loading="lazy" :src="clientsTrustImg"
              alt="Hundreds of South African motor dealers and groups trust PostX"
              class="w-full max-w-[500px] lg:max-w-none rounded-4xl object-cover drop-shadow-lg"
            />
          </div>

          <!-- Text Column -->
          <div class="w-full lg:w-[55%] flex flex-col items-start text-left">
            <h2 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins text-3xl md:text-5xl font-medium text-neutral-900 leading-[1.3] tracking-tight mb-8">
              <span class="text-primary font-medium">Hundreds of South African</span> motor dealers and groups run their customer conversations on Post<span class="text-primary font-medium">X</span> every day.
            </h2>
            <p class="font-poppins text-md md:text-xl text-neutral-800 font-medium leading-[1.7] max-w-2xl mb-12">
              From single-site independents to multi-franchise groups, and a growing list of businesses beyond motor retail.
            </p>
            <button
              @click="openModal"
              class="btn-primary text-base px-10 py-4 w-full sm:w-auto"
            >
              Enquire Today
            </button>
          </div>

        </div>
      </div>
    </section>

    <!-- Divider 5 -->
    <div class="w-full h-6 bg-[#F3F4F5]" />

    <!-- Continuously Updating Section -->
    <section
      v-motion
      :initial="{ opacity: 0, y: 30 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      class="w-full bg-white py-20 sm:py-28 px-4 sm:px-8 lg:px-12 text-center overflow-hidden"
    >
      <div class="max-w-300 mx-auto flex flex-col items-center">

        <img loading="lazy" :src="postXLogo" alt="PostX" class="h-10 md:h-12 lg:h-13 mb-4 object-contain" />

        <h2 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins font-medium text-2xl md:text-5xl lg:text-5xl leading-[1.2] tracking-tight text-neutral-900 mb-8">
          <span class="text-primary font-medium"> Capabilities Shipping Continuously -</span> <span class="italic font-light">Your PostX Gets Smarter Over Time.</span>
        </h2>

        <p class="font-poppins text-base sm:text-lg md:text-xl text-neutral-700 font-medium leading-[1.7] max-w-4xl mx-auto mb-16 px-4">
          Our recent update improved analytics, insights and general speed.
        </p>

        <div class="w-full flex justify-center">
          <img loading="lazy" :src="continouslyUpdatingImg"
            alt="Post Performance Analysis"
            class="w-full h-auto object-contain rounded-2xl md:rounded-4xl drop-shadow-2xl"
          />
        </div>

      </div>
    </section>

    <!-- Divider 6 -->
    <div class="w-full h-6 bg-[#F3F4F5]" />

    <!-- FAQ Section -->
    <section
      v-motion
      :initial="{ opacity: 0, y: 30 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      class="w-full bg-white py-20 sm:py-28 px-6 sm:px-8 lg:px-12"
    >
      <div class="max-w-350 mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">

        <!-- Left Side: Headings & CTA Card -->
        <div class="w-full lg:w-[40%] flex flex-col items-start">
          <span class="text-primary font-poppins text-lg font-medium mb-4">Why us?</span>
          <h2 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins text-4xl sm:text-5xl lg:text-[4rem] leading-[1.1] font-medium text-neutral-900 mb-10 tracking-tight">
            Frequently Asked<br />Questions
          </h2>

          <!-- CTA Card -->
          <div class="w-full bg-[#f0f9fa] rounded-4xl p-8 sm:p-10 flex flex-col items-start mt-4">
            <h3 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins text-2xl font-medium text-neutral-900 mb-4">
              Still Have A Question?
            </h3>
            <p class="font-poppins text-neutral-700 text-base sm:text-lg leading-relaxed mb-8">
              If you'd like to know more about how<br />R-E-D can help your business generate more leads.
            </p>
            <button
              @click="openModal"
              class="btn-primary text-xs sm:text-[15px] px-8 py-4 w-full sm:w-auto"
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
            class="bg-[#fafafa] rounded-3xl overflow-hidden transition-all duration-300"
          >
            <button
              @click="toggleFaq(index)"
              class="w-full flex items-center justify-between p-6 sm:px-8 sm:py-7 text-left focus:outline-none cursor-pointer"
            >
              <span class="font-poppins font-semibold text-lg sm:text-xl text-neutral-900 pr-4">
                {{ faq.question }}
              </span>
              <div class="flex-shrink-0 text-primary transition-transform duration-300" :class="{ 'rotate-180': activeFaq === index }">
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

    <!-- Simple CTA Footer Section -->
    <section
      v-motion
      :initial="{ opacity: 0, y: 30 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      class="w-full bg-white py-24 sm:py-32 px-6 sm:px-8 lg:px-12 flex flex-col items-center text-center"
    >
      <div class="max-w-3xl mx-auto flex flex-col items-center">
        <img loading="lazy" :src="postXLogo" alt="PostX" class="h-12 md:h-16 lg:h-18 mb-6 object-contain" />

        <h2 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins text-3xl sm:text-5xl lg:text-5xl leading-[1.15] font-medium text-[#2c2c2c] mb-6 tracking-tight">
          Ready To Connect Your<br class="hidden sm:block" /> Business?
        </h2>

        <p class="font-poppins text-neutral-500 text-lg sm:text-[1.3rem] font-medium leading-[1.6] max-w-2xl mx-auto mb-10">
          If you'd like to know more about how Post<span class="text-primary">X</span><br class="hidden sm:block" /> can help your business manage leads.
        </p>

        <button
          @click="openModal"
          class="btn-primary tracking-wide text-xs sm:text-base px-10 py-4 w-full sm:w-auto"
        >
          Schedule A Meeting Today
        </button>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { ChevronDown, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-vue-next';

// Image Imports
import contentCreationDeskImg from '~/assets/images/postx-content-creation-desk.jpg';
import postXHeroBanner from '~/assets/images/hero-hanner-lady-desktop-banner.webp';
import postXLogo from '~/assets/images/PostX_Web_Dark_Logo.png';
import postXHeroMobileBanner from '~/assets/images/hero-hanner-lady-mobile-banner.webp';
import builtByDevelopersIcon from '~/assets/images/postx-built-by-our-developers-icon.svg';
import supportWhoBuiltItIcon from '~/assets/images/postx-support-who-built-it-icon.svg';
import newFeaturesShippedIcon from '~/assets/images/postx-new-features-shipped-icon.svg';
import createIcon from '~/assets/images/create.svg';
import connectIcon from '~/assets/images/connect.svg';
import commsIcon from '~/assets/images/comms.svg';
import controlIcon from '~/assets/images/control.svg';
import leadQualIcon from '~/assets/images/lead-qualitification-icon.svg';
import intelConversationsIcon from '~/assets/images/intelligent-coversations.svg';
import teamFocusIcon from '~/assets/images/team-focus-conversation.svg';
import desktopMidCta from '~/assets/images/desktop-mid-page-cta.webp';
import mobileMidCta from '~/assets/images/mobile-mid-page-cta.webp';
import automateDesktop from '~/assets/images/automate-customer-journey-desktop-image.webp';
import automateMobile from '~/assets/images/automate-customer-journey-mobile-image.webp';

import captureLeadImg from '~/assets/images/capture-lead.webp';
import serviceBookingImg from '~/assets/images/customer-makes-service-booking .webp';
import serviceReminderImg from '~/assets/images/automate-service-reminder.webp';
import recycleLeadsImg from '~/assets/images/recycle-leads.webp';
import secureDocImg from '~/assets/images/secure-document-sharing.webp';
import internalCommImg from '~/assets/images/internal-communication-tool.webp';

import dynamicLaptopImg from '~/assets/images/hand-holding-laptop.webp';
import builtNotLicensedIcon from '~/assets/images/built-not-licensed.svg';
import inhouseDevIcon from '~/assets/images/inhouse-developers-icon.svg';
import unlimitedUsersIcon from '~/assets/images/unlimited-users-icon.svg';
import inhouseSupportIcon from '~/assets/images/in-house-support-team.svg';
import clientsTrustImg from '~/assets/images/clients-who-trust-postx.webp';
import continouslyUpdatingImg from '~/assets/images/postx-analytics-screenshot.webp';
import postxMobileLoginMockup from '~/assets/images/postx-mobile-login-screen-mockup.webp';
import postxDesktopBanner from '~/assets/images/postx-mobileapp-desktop-background-mockup.webp';
import postxMobileBanner from '~/assets/images/postx-mobileapp-mobile-background-mockup.webp';
import postxAppStoreBadge from '~/assets/images/postx-download-on-the-appstore_badge.webp';
import postxGooglePlayBadge from '~/assets/images/postx-getitongoogleplay_badge.webp';

const { openModal } = useModal();

// Accordion Transition Methods
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
    question: "What is PostX?",
    answer: "PostX is R-E-D’s customer communication platform. It brings messaging, social media content, reviews and optional AI assistants into one place, so your team responds faster and manages your brand with more control. It’s proven in motor retail and used across many industries."
  },
  {
    question: "Does PostX use AI?",
    answer: "Yes, and it’s your choice how much. AI assistants can answer and qualify enquiries 24/7 and send leads to your lead system. The AI caption polisher tidies up social posts, and AI moderation responds to comments on your Facebook page. Each assistant is configured for your business, and your team stays in control."
  },
  {
    question: "Which channels does PostX support?",
    answer: "WhatsApp, Facebook DMs and comments, Instagram DMs and comments, LinkedIn, Google reviews, website live chat and internal team chat, all in one inbox. You can also publish content to your social channels from PostX, and we offer custom integrations."
  },
  {
    question: "Is there a mobile app?",
    answer: "Yes. Your team gets access to the PostX mobile app during onboarding, so they can manage chats, create posts and approve content from anywhere."
  },
  {
    question: "Can I control who sees what?",
    answer: "Yes. Role-based access means every user only sees the locations, departments and tools they need."
  },
  {
    question: "Can PostX integrate with our CRM?",
    answer: "Yes. Leads captured in chat, by your team or by AI, go straight to your CRM or lead management system. We build custom integrations where you need them."
  },
  {
    question: "How quickly can we start?",
    answer: "Most businesses are up and running within days. Our team handles setup and integration, and trains your staff."
  },
  {
    question: "How does pricing work?",
    answer: "PostX runs on a flexible subscription that grows with your business. We offer Basic, Standard and Custom setups, shaped around your team size, the channels you use and the features that matter to you. Every business is different, so we’ll recommend the right fit and give you a tailored quote, with no surprises."
  },
  {
    question: "What reporting do I get?",
    answer: "Live dashboards for messaging and content, including response times, conversation volumes, leads and reports per user."
  },
  {
    question: "Do you work with businesses in my industry?",
    answer: "Most likely. PostX was proven in motor retail and works for any business that talks to customers on WhatsApp and social media."
  },
  {
    question: "What makes R-E-D different?",
    answer: "We build the software and run the marketing. You get one partner that owns the product, understands your market and supports you directly."
  }
];

const automateFeaturesData = [
  {
    title: "Capture Every Lead The Moment They Reach Out",
    desc: "Your next buyer just sent a WhatsApp message from a campaign on Google. PostX's AI assistant responds in seconds - greeting the customer, answering stock questions, and capturing their details before your competitor even sees the notification. No lead falls through the cracks, day or night.",
    img: captureLeadImg
  },
  {
    title: "Book Test Drives & Service Appointments Via Chat",
    desc: "Forget phone queues and email forms. Customers book test drives, schedule services and confirm appointments directly in WhatsApp. PostX handles the load, sends reminders, and integrates the lead into your lead system - so your team focuses on selling, not admin.",
    img: serviceBookingImg
  },
  {
    title: "Automate Service & Appointment Reminders",
    desc: "PostX sends automated or bulk WhatsApp reminders before every booking - with a confirm or reschedule option. Reduce no-shows by up to 40% without your team lifting a finger.",
    img: serviceReminderImg
  },
  {
    title: "Nurture & Recycle Leads With AI",
    desc: "Not every lead buys today. PostX's AI keeps dormant leads warm with personalized follow-ups. When they're ready, your salesperson gets a hot handover with full conversation history.",
    img: recycleLeadsImg
  },
  {
    title: "Secure Document Sharing & Digital Verification",
    desc: "Close deals faster by sending and receiving documents securely over WhatsApp. Finance applications, trade-in valuations, proof of residence, and contract summaries - all exchanged in an encrypted chat. No more email attachments lost in spam folders.",
    img: secureDocImg
  },
  {
    title: "Internal Communication Tool",
    desc: "Assign chats, escalate texts, transfer conversations, get your entire team connected to the customer and journey. Receptionists, accounts, managers and more...",
    img: internalCommImg
  }
];

const activeFaq = ref<number | null>(null);
const toggleFaq = (index: number) => {
  activeFaq.value = activeFaq.value === index ? null : index;
};

// Four Pillars Carousel
const activePillar = ref(0);
const scrollContainerRef = ref<HTMLDivElement | null>(null);
const scrollToPillar = (index: number) => {
  if (scrollContainerRef.value) {
    const { clientWidth } = scrollContainerRef.value;
    if (clientWidth > 0) {
      scrollContainerRef.value.scrollTo({
        left: index * clientWidth,
        behavior: 'smooth'
      });
      activePillar.value = index;
    }
  }
};
const nextPillar = () => {
  if (activePillar.value < 3) {
    scrollToPillar(activePillar.value + 1);
  }
};
const prevPillar = () => {
  if (activePillar.value > 0) {
    scrollToPillar(activePillar.value - 1);
  }
};
const handleScroll = () => {
  if (scrollContainerRef.value) {
    const { scrollLeft, clientWidth } = scrollContainerRef.value;
    if (clientWidth > 0) {
      const newIndex = Math.round(scrollLeft / clientWidth);
      if (newIndex !== activePillar.value && newIndex >= 0 && newIndex < 4) {
        activePillar.value = newIndex;
      }
    }
  }
};


// Automate Features Expand
const isFeaturesExpanded = ref(false);
const automateFeaturesRef = ref<HTMLElement | null>(null);
const collapseFeatures = () => {
  isFeaturesExpanded.value = false;
  automateFeaturesRef.value?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

// Automate Features Carousel (Mobile)
const activeAutomateFeature = ref(0);
const automateScrollContainerRef = ref<HTMLDivElement | null>(null);
const scrollToAutomateFeature = (index: number) => {
  if (automateScrollContainerRef.value) {
    const container = automateScrollContainerRef.value;
    const slides = container.children;
    if (slides && slides[index]) {
      const slide = slides[index] as HTMLElement;
      // Scroll strictly horizontally within the carousel container - completely avoids window vertical jumping
      const targetLeft = slide.offsetLeft - (container.clientWidth - slide.offsetWidth) / 2;
      container.scrollTo({
        left: Math.max(0, targetLeft),
        behavior: 'smooth'
      });
      activeAutomateFeature.value = index;
    }
  }
};
const handleAutomateScroll = () => {
  if (automateScrollContainerRef.value) {
    const container = automateScrollContainerRef.value;
    const scrollPosition = container.scrollLeft;
    const itemWidth = container.firstElementChild ? (container.firstElementChild as HTMLElement).offsetWidth : container.clientWidth;
    if (itemWidth > 0) {
      const newIndex = Math.round(scrollPosition / itemWidth);
      if (newIndex >= 0 && newIndex < automateFeaturesData.length && newIndex !== activeAutomateFeature.value) {
        activeAutomateFeature.value = newIndex;
      }
    }
  }
};

// Content Creation & Publishing Carousel (7 Cards)
const contentScrollContainer = ref<HTMLDivElement | null>(null);
const isAtStart = ref(true);
const isAtEnd = ref(false);
const activeContentCard = ref(0);

const updateScrollButtons = () => {
  if (contentScrollContainer.value) {
    const { scrollLeft, scrollWidth, clientWidth } = contentScrollContainer.value;
    isAtStart.value = scrollLeft <= 10;
    isAtEnd.value = scrollLeft + clientWidth >= scrollWidth - 10;

    const firstCard = contentScrollContainer.value.querySelector<HTMLElement>(':scope > div');
    const cardStep = firstCard ? firstCard.offsetWidth + 24 : 352;
    if (cardStep > 0) {
      if (isAtEnd.value && clientWidth < 640) {
        activeContentCard.value = contentCardsData.length - 1;
      } else {
        const rawIndex = Math.round(scrollLeft / cardStep);
        activeContentCard.value = Math.max(0, Math.min(contentCardsData.length - 1, rawIndex));
      }
    }
  }
};

const scrollCards = (direction: 'left' | 'right') => {
  if (contentScrollContainer.value) {
    const firstCard = contentScrollContainer.value.querySelector<HTMLElement>(':scope > div');
    const cardWidth = firstCard ? firstCard.offsetWidth + 24 : 352;
    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
    contentScrollContainer.value.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }
};

onMounted(() => {
  updateScrollButtons();
});

const contentCardsData = [
  {
    title: 'Create once, post everywhere',
    img: contentCreationDeskImg,
    alt: 'Create once, post everywhere',
    desc: 'Pick your channels, write a caption, upload images or video and see a live preview. Post templates with pre-set captions speed up the posts you make often.'
  },
  {
    title: 'Polish with AI.',
    img: contentCreationDeskImg,
    alt: 'Polish with AI',
    desc: 'The AI caption polisher fixes spelling, grammar and punctuation before anything goes out.'
  },
  {
    title: 'A branded frame on every photo.',
    img: contentCreationDeskImg,
    alt: 'A branded frame on every photo',
    desc: 'Delivery and handover posts let your team photograph a happy customer, add your frame and request a Google review in the same step. The customer gives consent with a one-time PIN (OTP) before anything is published.'
  },
  {
    title: 'Approve before it goes live.',
    img: contentCreationDeskImg,
    alt: 'Approve before it goes live',
    desc: 'Managers approve or reject the image, caption and schedule separately, and send feedback in one click. Posts can also require customer approval.'
  },
  {
    title: 'Controlled access.',
    img: contentCreationDeskImg,
    alt: 'Controlled access',
    desc: 'Set role-based permissions for dealership staff, agencies, and regional managers so everyone creates safely within brand guidelines.'
  },
  {
    title: 'AI moderation on Facebook.',
    img: contentCreationDeskImg,
    alt: 'AI moderation on Facebook.',
    desc: 'PostX’s moderation AI responds to customer comments on your Facebook page, so nobody is left waiting for an answer.'
  },
  {
    title: 'A full audit trail.',
    img: contentCreationDeskImg,
    alt: 'A full audit trail.',
    desc: 'See who created, edited and approved every post, and when.'
  }
];

useHead({
  title: 'PostX | R-E-D',
  meta: [
    { name: 'description', content: 'PostX unifies WhatsApp, social media, live chat, and AI-powered assistants into a single command centre.' }
  ]
});
</script>

<style scoped>

/* Optional: pop transition for pagination numbers */
.pop-enter-active,
.pop-leave-active {
  transition: all 0.2s ease-in-out;
  position: absolute;
}
.pop-enter-from {
  opacity: 0;
  transform: translateY(8px);
}
.pop-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
