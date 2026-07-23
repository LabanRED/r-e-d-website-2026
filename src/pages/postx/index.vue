<template>
  <div class="bg-[#fcfcfc] text-neutral-900 min-h-screen pt-12 pb-16">
    <!-- Back to Home Breadcrumb Indicator -->
    <div class="mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12 mb-6">
      <NuxtLink
        to="/"
        class="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-[#2ca8cb] transition-colors duration-200"
      >
        <ArrowLeft class="w-4 h-4" />
        Back to R-E-D Home
      </NuxtLink>
    </div>

    <!-- Hero Section -->
    <section class="relative mt-4 pb-12 sm:pb-16" id="hero">
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
          <div class="relative z-10 w-full lg:w-[760px] lg:pt-12 lg:pl-[100px] flex flex-col justify-center items-start text-left">
            <img loading="lazy" :src="postXLogo"
              alt="PostX Logo"
              class="h-10 w-auto mb-6 object-contain"
              referrerpolicy="no-referrer"
            />
            <h1 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins font-medium text-3xl md:text-4xl lg:text-4xl mb-6 text-neutral-900">
              From First Click to Final Sale.<br />
              <span class="text-[#2ca8cb]">One Platform for Every Conversation.</span>
            </h1>

            <p class="font-poppins font-regular text-neutral-800 text-base leading-6 max-w-2xl mb-8">
              PostX unifies WhatsApp, social media, live chat, and AI-powered assistants into a single command centre - purpose-built for motor dealerships and beyond. Publish content, manage every message, generate leads, and turn conversations into sales.
            </p>

            <div class="flex flex-wrap items-center gap-4">
              <button
                @click="openModal"
                class="font-poppins font-medium text-[16px] text-white bg-[#2ca8cb] hover:bg-[#209bbd] rounded-full transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-md hover:shadow-lg lowercase cursor-pointer"
                style="padding: 20px 40px"
              >
                Book your demo
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
            From First Click to Final Sale.<br />
            <span class="text-[#2ca8cb]">One Platform for Every Conversation.</span>
          </h1>

          <!-- Mobile Description -->
          <p class="font-poppins text-neutral-600 text-sm sm:text-base leading-relaxed max-w-xl mb-6">
            PostX unifies WhatsApp, social media, live chat, and AI-powered assistants into a single command centre - purpose-built for motor dealerships and beyond. Publish content, manage every message, generate leads, and turn conversations into sales.
          </p>

          <!-- Mobile Buttons -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 w-full sm:w-auto">
            <button
              @click="openModal"
              class="font-poppins text-xs sm:text-sm tracking-widest text-[#2ca8cb] border-2 border-[#2ca8cb] rounded-full py-4 px-8 bg-white hover:bg-[#2ca8cb] hover:text-white active:bg-[#209bbd] active:text-white transition-all duration-300 hover:scale-[1.02] active:scale-95 mb-10 w-full sm:w-auto font-medium lowercase cursor-pointer"
            >
              Book your demo
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

    <LogoCarousel />

    <!-- Control Every Conversation Section -->
    <section class="py-20 bg-white border-b border-neutral-100">
      <div class="mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-24">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <!-- Left Column (7 cols on large screens to give ample room for beautiful typography) -->
          <div class="lg:col-span-7">
            <h2 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-neutral-950 tracking-tight leading-[1.15]">
              Take control of<br />every conversation.
            </h2>
            <p class="font-poppins font-light text-xl sm:text-2xl md:text-3xl lg:text-[2.25rem] text-[#2ca8cb] italic mt-6 leading-tight">
              WhatsApp. Social media.<br />Live chat. One platform.
            </p>
          </div>

          <!-- Right Column (5 cols on large screens) -->
          <div class="lg:col-span-5 lg:pt-3">
            <p class="font-poppins font-regular text-neutral-800 text-base md:text-2xl lg:text-2xl leading-[2.25]">
              Post<span class="text-[#2ca8cb] font-semibold">X</span> brings every channel into one inbox - WhatsApp, social media, live chat, and Google reviews - so your team responds faster, never misses a lead, and delivers a seamless customer experience from first enquiry to aftersales.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Divider 1 -->
    <div class="w-full h-6 bg-[#F3F4F5]" />

    <!-- One Platform. Four Pillars. Section -->
    <section class="py-20 bg-white">
      <div class="mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-24">
        <!-- Header -->
        <div class="text-center mb-16">
          <h2 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins font-medium text-3xl sm:text-4xl lg:text-[2.75rem] tracking-tight text-neutral-950">
            <span class="text-[#2ca8cb] italic font-light">One platform.</span> Four Pillars.
          </h2>
          <p class="font-poppins font-regular text-neutral-500 text-sm sm:text-base mt-3">
            Every department. Every Conversation. Every post. One Place.
          </p>
        </div>

        <!-- Desktop & Tablet View (Hidden on mobile) -->
        <div class="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Card 1: Create -->
          <div
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 100 } }"
            class="bg-white rounded-[24px] p-8 border border-neutral-100 shadow-[6px_6px_0px_0px_#2ca8cb] flex flex-col justify-between transition-all duration-300 hover:scale-[1.01]"
          >
            <div>
              <div class="flex items-center gap-3 mb-6">
                <div class="w-10 h-10 rounded-xl flex items-center justify-center">
                  <img loading="lazy" :src="createIcon"
                    alt="Create Icon"
                    class="w-6 h-6 object-contain"
                    referrerpolicy="no-referrer"
                  />
                </div>
                <h3 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins font-semibold text-xl text-neutral-900">Create</h3>
              </div>
              <ul class="space-y-4">
                <li v-for="(bullet, i) in ['Controlled Access', 'Omni-channel Posting & Scheduling', 'Brand Frames & Delivery Photos', 'Content Approval', 'AI Post Polisher & Moderator']" :key="i" class="flex items-start gap-2.5 text-neutral-700 text-sm sm:text-base leading-relaxed">
                  <span class="w-2 h-2 rounded-full bg-[#2ca8cb] mt-2 flex-shrink-0" />
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
            class="bg-white rounded-[24px] p-8 border border-neutral-100 shadow-[6px_6px_0px_0px_#145d70] flex flex-col justify-between transition-all duration-300 hover:scale-[1.01]"
          >
            <div>
              <div class="flex items-center gap-3 mb-6">
                <div class="w-10 h-10 rounded-xl flex items-center justify-center">
                  <img loading="lazy" :src="connectIcon"
                    alt="Connect Icon"
                    class="w-6 h-6 object-contain"
                    referrerpolicy="no-referrer"
                  />
                </div>
                <h3 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins font-semibold text-xl text-neutral-900">Connect</h3>
              </div>
              <ul class="space-y-4">
                <li v-for="(bullet, i) in ['Website, Meta & Google ads integration', 'Omni-channel Posting & Scheduling', 'Offline Activations & Events', 'Reviews, Ratings & CSI', 'Internal Cross Department Communication.']" :key="i" class="flex items-start gap-2.5 text-neutral-700 text-sm sm:text-base leading-relaxed">
                  <span class="w-2 h-2 rounded-full bg-[#2ca8cb] mt-2 flex-shrink-0" />
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
            class="bg-white rounded-[24px] p-8 border border-neutral-100 shadow-[6px_6px_0px_0px_#2ca8cb] flex flex-col justify-between transition-all duration-300 hover:scale-[1.01]"
          >
            <div>
              <div class="flex items-center gap-3 mb-6">
                <div class="w-10 h-10 rounded-xl flex items-center justify-center">
                  <img loading="lazy" :src="commsIcon"
                    alt="Comms Icon"
                    class="w-6 h-6 object-contain"
                    referrerpolicy="no-referrer"
                  />
                </div>
                <h3 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins font-semibold text-xl text-neutral-900">Comms</h3>
              </div>
              <ul class="space-y-4">
                <li v-for="(bullet, i) in ['Customer communication via WhatsApp or Social Platforms', 'Leads via WhatsApp & 24/7 AI Lead Assistance', 'Omni-channel inbox', 'Smart Routing & SLA Monitoring', 'Service Bookings & Reminders']" :key="i" class="flex items-start gap-2.5 text-neutral-700 text-sm sm:text-base leading-relaxed">
                  <span class="w-2 h-2 rounded-full bg-[#2ca8cb] mt-2 flex-shrink-0" />
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
            class="bg-white rounded-[24px] p-8 border border-neutral-100 shadow-[6px_6px_0px_0px_#145d70] flex flex-col justify-between transition-all duration-300 hover:scale-[1.01]"
          >
            <div>
              <div class="flex items-center gap-3 mb-6">
                <div class="w-10 h-10 rounded-xl flex items-center justify-center">
                  <img loading="lazy" :src="controlIcon"
                    alt="Control Icon"
                    class="w-6 h-6 object-contain"
                    referrerpolicy="no-referrer"
                  />
                </div>
                <h3 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins font-semibold text-xl text-neutral-900">Control</h3>
              </div>
              <ul class="space-y-4">
                <li v-for="(bullet, i) in ['Lead Routing & Escalations', 'Reporting Dashboard', 'Team Activity', 'Leads integrated to CRM/CMS', 'Customer Data & Access Control']" :key="i" class="flex items-start gap-2.5 text-neutral-700 text-sm sm:text-base leading-relaxed">
                  <span class="w-2 h-2 rounded-full bg-[#2ca8cb] mt-2 flex-shrink-0" />
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
              <div class="bg-white rounded-[24px] p-8 border border-neutral-100 shadow-[6px_6px_0px_0px_#2ca8cb] min-h-[380px] flex flex-col justify-between">
                <div>
                  <div class="flex items-center gap-3 mb-6">
                    <div class="w-10 h-10 rounded-xl flex items-center justify-center">
                      <img loading="lazy" :src="createIcon"
                        alt="Create Icon"
                        class="w-6 h-6 object-contain"
                        referrerpolicy="no-referrer"
                      />
                    </div>
                    <h3 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins font-semibold text-xl text-neutral-900">Create</h3>
                  </div>
                  <ul class="space-y-4">
                    <li v-for="(bullet, i) in ['Controlled Access', 'Omni-channel Posting & Scheduling', 'Brand Frames & Delivery Photos', 'Content Approval', 'AI Post Polisher & Moderator']" :key="i" class="flex items-start gap-2.5 text-neutral-700 text-sm sm:text-base leading-relaxed">
                      <span class="w-2 h-2 rounded-full bg-[#2ca8cb] mt-2 flex-shrink-0" />
                      <span>{{ bullet }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Card 2: Connect -->
            <div class="w-full flex-shrink-0 snap-center px-1">
              <div class="bg-white rounded-[24px] p-8 border border-neutral-100 shadow-[6px_6px_0px_0px_#145d70] min-h-[380px] flex flex-col justify-between">
                <div>
                  <div class="flex items-center gap-3 mb-6">
                    <div class="w-10 h-10 rounded-xl flex items-center justify-center">
                      <img loading="lazy" :src="connectIcon"
                        alt="Connect Icon"
                        class="w-6 h-6 object-contain"
                        referrerpolicy="no-referrer"
                      />
                    </div>
                    <h3 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins font-semibold text-xl text-neutral-900">Connect</h3>
                  </div>
                  <ul class="space-y-4">
                    <li v-for="(bullet, i) in ['Website, Meta & Google ads integration', 'Omni-channel Posting & Scheduling', 'Offline Activations & Events', 'Reviews, Ratings & CSI', 'Internal Cross Department Communication.']" :key="i" class="flex items-start gap-2.5 text-neutral-700 text-sm sm:text-base leading-relaxed">
                      <span class="w-2 h-2 rounded-full bg-[#2ca8cb] mt-2 flex-shrink-0" />
                      <span>{{ bullet }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Card 3: Comms -->
            <div class="w-full flex-shrink-0 snap-center px-1">
              <div class="bg-white rounded-[24px] p-8 border border-neutral-100 shadow-[6px_6px_0px_0px_#2ca8cb] min-h-[380px] flex flex-col justify-between">
                <div>
                  <div class="flex items-center gap-3 mb-6">
                    <div class="w-10 h-10 rounded-xl flex items-center justify-center">
                      <img loading="lazy" :src="commsIcon"
                        alt="Comms Icon"
                        class="w-6 h-6 object-contain"
                        referrerpolicy="no-referrer"
                      />
                    </div>
                    <h3 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins font-semibold text-xl text-neutral-900">Comms</h3>
                  </div>
                  <ul class="space-y-4">
                    <li v-for="(bullet, i) in ['Customer communication via WhatsApp or Social Platforms', 'Leads via WhatsApp & 24/7 AI Lead Assistance', 'Omni-channel inbox', 'Smart Routing & SLA Monitoring', 'Service Bookings & Reminders']" :key="i" class="flex items-start gap-2.5 text-neutral-700 text-sm sm:text-base leading-relaxed">
                      <span class="w-2 h-2 rounded-full bg-[#2ca8cb] mt-2 flex-shrink-0" />
                      <span>{{ bullet }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Card 4: Control -->
            <div class="w-full flex-shrink-0 snap-center px-1">
              <div class="bg-white rounded-[24px] p-8 border border-neutral-100 shadow-[6px_6px_0px_0px_#145d70] min-h-[380px] flex flex-col justify-between">
                <div>
                  <div class="flex items-center gap-3 mb-6">
                    <div class="w-10 h-10 rounded-xl flex items-center justify-center">
                      <img loading="lazy" :src="controlIcon"
                        alt="Control Icon"
                        class="w-6 h-6 object-contain"
                        referrerpolicy="no-referrer"
                      />
                    </div>
                    <h3 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins font-semibold text-xl text-neutral-900">Control</h3>
                  </div>
                  <ul class="space-y-4">
                    <li v-for="(bullet, i) in ['Lead Routing & Escalations', 'Reporting Dashboard', 'Team Activity', 'Leads integrated to CRM/CMS', 'Customer Data & Access Control']" :key="i" class="flex items-start gap-2.5 text-neutral-700 text-sm sm:text-base leading-relaxed">
                      <span class="w-2 h-2 rounded-full bg-[#2ca8cb] mt-2 flex-shrink-0" />
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
            <div class="border border-[#00A5C5] text-[#00A5C5] rounded-full px-5 h-[34px] text-sm font-poppins font-medium flex items-center justify-center gap-1">
              <div class="relative w-3 h-5 overflow-hidden flex items-center justify-center">
                <transition name="pop">
                  <span :key="activePillar" class="absolute font-semibold text-[#00A5C5]">
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
                class="transition-transform active:scale-95 duration-200 font-poppins font-medium lowercase cursor-pointer"
                aria-label="Previous card"
              >
                <img loading="lazy" :src="cartLeftChevron"
                  alt="Previous"
                  class="w-[42px] h-[42px] object-contain"
                />
              </button>
              <button
                @click="nextPillar"
                class="transition-transform active:scale-95 duration-200 font-poppins font-medium lowercase cursor-pointer"
                aria-label="Next card"
              >
                <img loading="lazy" :src="cartRightChevron"
                  alt="Next"
                  class="w-[42px] h-[42px] object-contain"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Divider 2 -->
    <div class="w-full h-6 bg-[#F3F4F5]" />

    <!-- Meet your 24/7 Sales Team - Powered by AI Section -->
    <section class="py-20 bg-white">
      <div class="mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-24">
        <!-- Header & Intro -->
        <div class="mb-16">
          <h2 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins text-3xl sm:text-4xl lg:text-5xl leading-tight text-neutral-950">
            <span class="text-[#2ca8cb] italic font-light">Meet your 24/7 Sales Team</span><br />
            <span class="font-medium">- Powered by AI</span>
          </h2>
          <p class="font-poppins font-regular text-neutral-600 text-base sm:text-lg max-w-2xl mt-4 leading-relaxed">
            Have your team focus on what is important, SALES!<br />
            Our Chatbot focuses on automating the conversation for your convenience.
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
                  alt="Lead Qualification Icon"
                  class="w-12 h-12 object-contain transition-transform duration-300 hover:scale-105"
                  referrerpolicy="no-referrer"
                />
              </div>
              <h3 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins font-semibold text-xl text-neutral-900 mb-3">Lead Qualification:</h3>
              <p class="font-poppins font-regular text-neutral-700 text-sm sm:text-base leading-relaxed">
                AI assistants engage new enquiries on WhatsApp within seconds, qualify intent, directly integrate and route hot leads to the right department.
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
              <h3 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins font-semibold text-xl text-neutral-900 mb-3">Intelligent Conversations:</h3>
              <p class="font-poppins font-regular text-neutral-700 text-sm sm:text-base leading-relaxed">
                Trained on your stock, pricing, and dealership info. Handles FAQs, books test drives, and follows up on dormant leads - all on the customer's preferred platform.
              </p>
            </div>
          </div>

          <!-- Card 3 -->
          <div
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 300 } }"
            class="bg-[#f1fafc] rounded-[24px] p-8 sm:p-10 shadow-[0px_4px_30px_rgba(0,0,0,0.03)] flex flex-col justify-between transition-all duration-300 hover:scale-[1.01]"
          >
            <div>
              <div class="w-12 h-12 flex items-center justify-center mb-6">
                <img loading="lazy" :src="teamFocusIcon"
                  alt="Team Focus Icon"
                  class="w-12 h-12 object-contain transition-transform duration-300 hover:scale-105"
                  referrerpolicy="no-referrer"
                />
              </div>
              <h3 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins font-semibold text-xl text-neutral-900 mb-3">Your team can focus on conversions</h3>
              <p class="font-poppins font-regular text-neutral-700 text-sm sm:text-base leading-relaxed">
                With repetitive conversations automated, your sales team spends more time closing deals, not managing inboxes.
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
        @click="openModal"
      >
        <img loading="lazy" :src="desktopMidCta" alt="PostX Mid Page CTA" class="w-full h-auto object-contain transition-transform duration-300 group-hover:opacity-95" referrerpolicy="no-referrer" />
        <div class="absolute inset-y-0 left-[8%] md:left-[10%] lg:left-[12%] flex flex-col justify-center items-start text-left max-w-[500px]">
          <p class="font-poppins text-neutral-800 font-medium text-sm md:text-base lg:text-[18px] mb-2 tracking-wide">
            Increase your conversion rate today.
          </p>
          <h2 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins font-semibold text-3xl md:text-4xl lg:text-[3rem] leading-[1.1] text-neutral-950 mb-8 tracking-tight">
            Ready to simplify<br />your conversations?
          </h2>
          <div class="font-poppins font-medium text-sm md:text-[16px] text-white bg-[#2ca8cb] group-hover:bg-[#209bbd] rounded-full py-4 px-10 transition-all duration-300 shadow-md">
            Book your demo
          </div>
        </div>
      </div>

      <!-- Mobile Banner -->
      <div
        class="block sm:hidden w-full cursor-pointer relative transition-transform duration-300 active:opacity-95"
        @click="openModal"
      >
        <img loading="lazy" :src="mobileMidCta" alt="PostX Mid Page CTA" class="w-full h-auto object-contain" referrerpolicy="no-referrer" />
        <div class="absolute top-[5%] left-6 right-6 flex flex-col items-start text-left">
          <p class="font-poppins text-neutral-800 font-medium text-sm mb-2 tracking-wide">
            Increase your conversion rate today.
          </p>
          <h2 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins font-semibold text-3xl leading-[2.5rem] text-neutral-950 mb-2 tracking-tight">
            Ready to simplify<br />your conversations?
          </h2>
          <div class="font-poppins font-medium text-sm text-white bg-[#2ca8cb] rounded-full py-3 px-8 shadow-md">
            Book your demo
          </div>
        </div>
      </div>
    </section>

    <!-- PostX Insights Section -->
    <section v-motion :initial="{ opacity: 0, y: 30 }" :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }" class="w-full bg-[#f2fafc] py-20 sm:py-24 px-6 sm:px-8 lg:px-12">
      <div class="max-w-[1200px] mx-auto text-center">
        <!-- Header -->
        <h2 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins font-medium text-3xl md:text-4xl lg:text-5xl leading-tight text-neutral-950 mb-6 tracking-tight">
          Insight of <img loading="lazy" :src="postXLogo" alt="PostX" class="h-8 md:h-10 lg:h-12 inline-block align-middle mx-1 md:mx-2 -mt-2" /> Improving your<br />customer service
        </h2>
        <p class="font-poppins text-neutral-800 font-medium text-base md:text-lg max-w-6xl mx-auto mb-4 tracking-wide">
          Take control of your customer communication and meet them on their preferred communication platform.
        </p>
        <p class="font-poppins text-neutral-800 font-medium text-base md:text-lg max-w-2xl mx-auto mb-16 tracking-wide">
          From WhatsApp campaigns to social post scheduling, Post<span class="text-[#2ca8cb] font-semibold">X</span> gives your team full visibility and control.
        </p>

        <!-- Carousel Titles -->
        <div class="mb-2">
          <span class="font-poppins text-neutral-500 uppercase tracking-widest text-sm font-semibold">POSTX INBOX</span>
        </div>
        <h3 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins font-medium text-xl md:text-2xl text-neutral-900 mb-10 tracking-tight">
          All conversations funnel into one inbox
        </h3>

        <!-- Carousel Image Container -->
        <div class="relative w-full h-auto bg-white rounded-[24px] md:rounded-xl shadow-[0px_4px_30px_rgba(0,0,0,0.05)] border border-neutral-100 overflow-hidden mb-8">
          <transition name="fade" mode="out-in">
            <div
              :key="insightIndex"
              class="w-full h-full flex items-center justify-center bg-neutral-50"
            >
              <img loading="lazy" :src="insightIndex === 0 ? postxInboxScreenshot : `https://placehold.co/1200x800/e2e8f0/64748b?text=PostX+Insight+${insightIndex + 1}`"
                :alt="`PostX Insight ${insightIndex + 1}`"
                class="w-full h-full object-contain"
              />
            </div>
          </transition>
        </div>

        <!-- Carousel Controls -->
        <div class="flex items-center justify-center gap-4">
          <button
            @click="prevInsight"
            class="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#00a5c5] flex items-center justify-center hover:bg-[#008eb0] transition-colors shadow-md active:scale-95 font-poppins font-medium lowercase cursor-pointer"
          >
            <img loading="lazy" :src="cartLeftChevron" alt="Previous" class="w-5 h-5 md:w-6 md:h-6 object-contain" />
          </button>
          <button
            @click="nextInsight"
            class="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#00a5c5] flex items-center justify-center hover:bg-[#008eb0] transition-colors shadow-md active:scale-95 font-poppins font-medium lowercase cursor-pointer"
          >
            <img loading="lazy" :src="cartRightChevron" alt="Next" class="w-5 h-5 md:w-6 md:h-6 object-contain" />
          </button>
        </div>
      </div>
    </section>

    <!-- Mid Page Testimonial Section -->
    <section v-motion :initial="{ opacity: 0, y: 30 }" :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }" class="w-full bg-white py-24 sm:py-28 px-6 sm:px-8 lg:px-12">
      <div class="max-w-[1000px] mx-auto text-center flex flex-col items-center">

        <h2 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins font-medium text-[2rem] sm:text-4xl lg:text-[3.25rem] leading-[1.3] text-neutral-950 mb-10 tracking-tight">
          <img loading="lazy" :src="postXLogo" alt="PostX" class="h-8 sm:h-10 lg:h-[3.5rem] inline-block align-middle mx-2 sm:mx-3 -mt-2 sm:-mt-3" /> has proven itself time and time again that it is a crucial part of our business setup
        </h2>

        <div class="flex items-center gap-5 text-left mt-4">
          <img loading="lazy" :src="testimonialGuyImg"
            alt="John Farrenson"
            class="w-16 h-16 sm:w-[5.5rem] sm:h-[5.5rem] rounded-[1.25rem] object-cover shadow-sm"
          />
          <div class="flex flex-col justify-center">
            <span class="font-poppins font-bold text-lg sm:text-[1.35rem] text-[#2c2c2c] mb-1">
              John Farrenson
            </span>
            <span class="font-poppins font-medium text-neutral-600 text-sm sm:text-[1.05rem]">
              Business World Of Ergonomics
            </span>
          </div>
        </div>

      </div>
    </section>

    <!-- Omnichannel Workhorse Section -->
    <section v-motion :initial="{ opacity: 0, y: 30 }" :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }" class="w-full bg-[#F5F5F5] py-8 md:pb-12 sm:pt-16 lg:px-12 overflow-hidden border-t border-b border-neutral-100">
      <div class="max-w-350 mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">

          <!-- Image Column (Left on desktop) -->
          <div class="lg:col-span-6 flex items-end justify-center lg:justify-start self-end">
            <img
              loading="lazy"
              :src="postxMobileLoginMockup"
              alt="PostX Mobile App Login"
              class="w-full max-w-[550px] lg:max-w-none h-auto object-contain drop-shadow-xl"
            />
          </div>

          <!-- Content Column (Right on desktop) -->
          <div class="bg-[#F5F5F5] lg:col-span-6 flex flex-col items-start text-left">
            <h2 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins font-medium text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.25] text-neutral-950 mb-6 tracking-tight">
              Post<span class="text-[#00a5c5] font-semibold">X</span> is the omnichannel workhorse for teams that live in the conversation.
            </h2>

            <p class="font-poppins font-regular text-neutral-700 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              Bring WhatsApp, social media, live chat and Google reviews into one shared inbox - and let AI help you reply faster, capture leads and keep customers coming back.
            </p>

            <ul class="space-y-3.5 mb-8">
              <li v-for="(item, i) in ['Dedicated AI agents', 'Content posting & scheduling', 'Google Review Booster', 'Analytics & insights', 'Unlimited users on every plan']" :key="i" class="flex items-center gap-3 font-poppins text-neutral-800 font-medium text-sm sm:text-base">
                <span class="w-2 h-2 rounded-full bg-[#00a5c5] flex-shrink-0" />
                <span>{{ item }}</span>
              </li>
            </ul>

            <div class="mb-10">
              <button
                @click="openModal"
                class="font-poppins font-medium text-[16px] text-white bg-[#00a5c5] hover:bg-[#008eb0] rounded-full py-4 px-10 transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-md hover:shadow-lg lowercase cursor-pointer"
              >
                Book your demo
              </button>
            </div>

            <!-- Download App Links -->
            <div class="flex flex-col items-start gap-3">
              <span class="font-poppins font-medium text-neutral-800 text-sm sm:text-base">
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
      </div>
    </section>

    <!-- Automate Customer Journey Section -->
    <section v-motion :initial="{ opacity: 0, y: 30 }" :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }" ref="automateFeaturesRef" class="w-full bg-[#f4f9fa] py-12 sm:py-24 px-6 sm:px-8 lg:px-12">
      <div class="max-w-[1200px] mx-auto">
        <!-- Desktop Layout -->
        <div class="hidden lg:grid grid-cols-2 gap-12 items-center">
          <div class="flex flex-col items-start text-left">
            <h2 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins font-medium text-[#2ca8cb] text-[2.5rem] leading-[1.15] mb-4 tracking-tight">
              Automate Every<br />Step of the<br />Customer Journey
            </h2>
            <h3 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins font-medium text-neutral-900 text-[1.8rem] leading-tight mb-8 tracking-tight">
              From First Chat<br />to Final Deal
            </h3>
            <p class="font-poppins text-neutral-800 text-md font-regular leading-[1.6] mb-8 max-w-xl tracking-wide">
              Manage your customer lifecycle with outbound campaigns, automatic lead re-engagement, service, and appointment reminders.Capture24/7 leads, schedule test drives, and exchange secure documents - all while keeping your sales, service, and admin teams perfectly connected.
            </p>
            <button class="font-poppins font-medium text-[15px] text-white bg-black hover:bg-[#00a5c5] active:scale-95 px-9 py-3.5 rounded-full transition-all duration-300 shadow-md lowercase cursor-pointer">
              Read more
            </button>
          </div>
          <div class="flex justify-end">
            <img loading="lazy" :src="automateDesktop" alt="Automate Customer Journey" class="w-full max-w-[550px] h-auto object-contain" referrerpolicy="no-referrer" />
          </div>
        </div>

        <!-- Mobile Layout -->
        <div class="flex flex-col lg:hidden">
          <h2 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins font-medium text-[#2ca8cb] text-[2rem] sm:text-4xl leading-[1.15] mb-2 tracking-tight">
            Automate Every<br />Step of the<br />Customer Journey
          </h2>
          <h3 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins font-medium text-neutral-900 text-[1.5rem] sm:text-3xl leading-tight mb-8 tracking-tight">
            From First Chat<br />to Final Deal
          </h3>

          <div class="w-full mb-8 flex justify-center -mx-4 sm:mx-0">
            <img loading="lazy" :src="automateMobile" alt="Automate Customer Journey" class="w-[105%] sm:w-full max-w-none sm:max-w-full h-auto object-contain" referrerpolicy="no-referrer" />
          </div>

          <p class="font-poppins text-neutral-800 font-medium text-base sm:text-lg leading-[1.6] mb-8 tracking-wide">
            Capture 24/7 leads, schedule test drives, send automated reminders, and exchange secure documents, all while keeping your sales, service, and admin teams perfectly connected.
          </p>
          <div>
            <button class="font-poppins font-medium text-sm sm:text-base text-white bg-black hover:bg-[#00a5c5] active:bg-[#00a5c5] active:scale-95 px-8 py-3.5 rounded-full transition-all duration-300 shadow-md lowercase cursor-pointer">
              Read more
            </button>
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
                <div class="bg-white rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-12 mb-6 w-full">
                  <h3 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins text-[1.75rem] font-medium text-neutral-900 leading-[1.3] mb-4">
                    {{ feature.title }}
                  </h3>
                  <p class="font-poppins text-neutral-600 font-medium text-[1.05rem] leading-[1.6]">
                    {{ feature.desc }}
                  </p>
                </div>
                <button @click="openModal" class="ml-6 bg-black hover:bg-[#00a5c5] text-white font-poppins font-medium px-9 py-3.5 rounded-full transition-all duration-300 shadow-md active:scale-95 lowercase cursor-pointer">
                  Enquire today
                </button>
              </div>

            </div>
          </template>
        </div>

        <!-- Desktop View More / View Less Button -->
        <div class="hidden lg:flex mt-20 justify-center">
          <button v-if="!isFeaturesExpanded" @click="isFeaturesExpanded = true" class="bg-black hover:bg-[#00a5c5] text-white font-poppins font-medium px-10 py-4 rounded-full transition-all duration-300 shadow-lg active:scale-95 text-lg cursor-pointer">
            View more
          </button>
          <button v-else @click="collapseFeatures" class="bg-transparent border-2 border-[#00a5c5] text-[#00a5c5] hover:bg-black hover:text-[#00a5c5] font-poppins font-medium px-10 py-3.5 rounded-full transition-all duration-300 active:scale-95 text-lg cursor-pointer">
            View less
          </button>
        </div>

        <!-- Mobile Features Carousel -->
        <div class="flex flex-col lg:hidden mt-20 -mx-6 sm:-mx-8">
          <div
            ref="automateScrollContainerRef"
            @scroll="handleAutomateScroll"
            class="flex overflow-x-auto snap-x snap-mandatory no-scrollbar pb-6 px-6 sm:px-8"
          >
            <div v-for="(feature, idx) in automateFeaturesData" :key="idx" class="w-full flex-shrink-0 snap-center flex flex-col items-center">
              <div class="w-full flex justify-center mb-8 px-4">
                <img loading="lazy" :src="feature.img" :alt="feature.title" class="w-full max-w-[340px] object-contain drop-shadow-xl" />
              </div>
              <div class="w-full flex flex-col items-start px-2">
                <div class="bg-white rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 mb-6 w-full text-left">
                  <h3 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins text-2xl font-medium text-neutral-900 leading-[1.3] mb-4">
                    {{ feature.title }}
                  </h3>
                  <p class="font-poppins text-neutral-600 font-medium text-base leading-[1.6]">
                    {{ feature.desc }}
                  </p>
                </div>
                <button @click="openModal" class="ml-4 bg-black hover:bg-[#00a5c5] active:bg-[#00a5c5] text-white font-poppins font-medium px-8 py-3.5 rounded-full transition-all duration-300 shadow-md active:scale-95 lowercase cursor-pointer">
                  Enquire today
                </button>
              </div>
            </div>
          </div>

          <!-- Mobile Carousel Controls -->
          <div class="flex flex-col items-center gap-6">
            <div class="flex items-center justify-center gap-2">
              <div v-for="(_, i) in automateFeaturesData" :key="i"
                :class="`h-2 rounded-full transition-all duration-300 ${i === activeAutomateFeature ? 'w-4 bg-[#2ca8cb]' : 'w-2 bg-neutral-300'}`"
              ></div>
            </div>
            <div class="flex items-center gap-4">
              <button
                @click="scrollToAutomateFeature(Math.max(0, activeAutomateFeature - 1))"
                class="w-12 h-12 rounded-full bg-[#00a5c5] flex items-center justify-center hover:bg-[#008eb0] transition-colors shadow-md active:scale-95 cursor-pointer"
              >
                <img loading="lazy" :src="cartLeftChevron" alt="Previous" class="w-5 h-5 object-contain" />
              </button>
              <button
                @click="scrollToAutomateFeature(Math.min(automateFeaturesData.length - 1, activeAutomateFeature + 1))"
                class="w-12 h-12 rounded-full bg-[#00a5c5] flex items-center justify-center hover:bg-[#008eb0] transition-colors shadow-md active:scale-95 cursor-pointer"
              >
                <img loading="lazy" :src="cartRightChevron" alt="Next" class="w-5 h-5 object-contain" />
              </button>
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
          <h2 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins text-[2.5rem] md:text-[3.5rem] font-medium leading-[1.2] tracking-tight text-neutral-900 mb-6">
            Dynamic service, <span class="font-normal text-[#2aa6c4]">tailored</span> and <br class="hidden md:block" />
            ready <span class="font-semibold">to</span> action.
          </h2>
          <p class="font-poppins text-lg md:text-xl text-neutral-600 font-medium max-w-3xl">
            Built for Every Department in your Dealership <br class="hidden md:block" />
            Personalised onboarding â€“ curated to your needs & size.
          </p>
        </div>

        <!-- Desktop Layout (3 Columns) -->
        <div class="hidden lg:grid grid-cols-12 gap-8 items-center relative">
          <!-- Left Column Features -->
          <div class="col-span-3 flex flex-col gap-16 relative z-10">
            <div>
              <img loading="lazy" :src="builtNotLicensedIcon" alt="Built, not licensed" class="h-8 md:h-10 w-auto mb-5 transition-transform duration-300 hover:scale-105" />
              <h3 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins text-xl md:text-2xl font-semibold text-neutral-800 mb-3">Built, not licensed</h3>
              <p class="font-poppins text-neutral-600 text-sm md:text-base leading-[1.6]">
                Build from the ground up for dealer workflows and your local systems & compliance.
              </p>
            </div>
            <div>
              <img loading="lazy" :src="inhouseDevIcon" alt="Developed 100% in-house" class="h-8 md:h-10 w-auto mb-5 transition-transform duration-300 hover:scale-105" />
              <h3 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins text-xl md:text-2xl font-semibold text-neutral-800 mb-3">Developed 100% in-house</h3>
              <p class="font-poppins text-neutral-600 text-sm md:text-base leading-[1.6]">
                No Third-party dependencies. Every feature is built, owned, and evolved by our team.
              </p>
            </div>
          </div>

          <!-- Center Column Laptop Image -->
          <div class="col-span-6 flex justify-center relative z-0">
            <img loading="lazy" :src="dynamicLaptopImg" alt="PostX Dashboard on Laptop" class="w-[120%] max-w-[850px] object-contain drop-shadow-2xl" />
          </div>

          <!-- Right Column Features -->
          <div class="col-span-3 flex flex-col gap-16 relative z-10">
            <div>
              <img loading="lazy" :src="unlimitedUsersIcon" alt="Unlimited users" class="h-8 md:h-10 w-auto mb-5 transition-transform duration-300 hover:scale-105" />
              <h3 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins text-xl md:text-2xl font-semibold text-neutral-800 mb-3">Unlimited users</h3>
              <p class="font-poppins text-neutral-600 text-sm md:text-base leading-[1.6]">
                No per-seat pricing games. Your whole team gets access - sales, service, F&I, parts, everyone.
              </p>
            </div>
            <div>
              <img loading="lazy" :src="inhouseSupportIcon" alt="In-house support team" class="h-8 md:h-10 w-auto mb-5 transition-transform duration-300 hover:scale-105" />
              <h3 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins text-xl md:text-2xl font-semibold text-neutral-800 mb-3">In-house support team</h3>
              <p class="font-poppins text-neutral-600 text-sm md:text-base leading-[1.6]">
                Direct access to the people who built it, No tickets disappearing into a vendor's queue
              </p>
            </div>
          </div>
        </div>

        <!-- Mobile Layout (1 Column Stacked Features) -->
        <div class="flex flex-col lg:hidden gap-12 mt-8">
          <div>
            <img loading="lazy" :src="builtNotLicensedIcon" alt="Built, not licensed" class="h-9 w-auto mb-4 transition-transform duration-300 hover:scale-105" />
            <h3 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins text-[1.35rem] sm:text-2xl font-semibold text-neutral-800 mb-3">Built, not licensed</h3>
            <p class="font-poppins text-neutral-600 text-base sm:text-lg leading-[1.6]">
              Build from the ground up for dealer workflows and your local systems & compliance.
            </p>
          </div>
          <div>
            <img loading="lazy" :src="inhouseDevIcon" alt="Developed 100% in-house" class="h-9 w-auto mb-4 transition-transform duration-300 hover:scale-105" />
            <h3 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins text-[1.35rem] sm:text-2xl font-semibold text-neutral-800 mb-3">Developed 100% in-house</h3>
            <p class="font-poppins text-neutral-600 text-base sm:text-lg leading-[1.6]">
              No Third-party dependencies. Every feature is built, owned, and evolved by our team.
            </p>
          </div>
          <div>
            <img loading="lazy" :src="unlimitedUsersIcon" alt="Unlimited users" class="h-9 w-auto mb-4 transition-transform duration-300 hover:scale-105" />
            <h3 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins text-[1.35rem] sm:text-2xl font-semibold text-neutral-800 mb-3">Unlimited users</h3>
            <p class="font-poppins text-neutral-600 text-base sm:text-lg leading-[1.6]">
              No per-seat pricing games. Your whole team gets access - sales, service, F&I, parts, everyone.
            </p>
          </div>
          <div>
            <img loading="lazy" :src="inhouseSupportIcon" alt="In-house support team" class="h-9 w-auto mb-4 transition-transform duration-300 hover:scale-105" />
            <h3 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins text-[1.35rem] sm:text-2xl font-semibold text-neutral-800 mb-3">In-house support team</h3>
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
              alt="320+ Clients Trust PostX"
              class="w-full max-w-[500px] lg:max-w-none rounded-[32px] object-cover drop-shadow-lg"
            />
          </div>

          <!-- Text Column -->
          <div class="w-full lg:w-[55%] flex flex-col items-start text-left">
            <h2 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins text-5xl md:text-5xl font-semibold text-neutral-900 leading-[1.3] tracking-tight mb-8">
              <span class="text-[#00a5c5]">320+ Clients trusts</span> PostX to<br class="hidden xl:block" /> be part of their daily<br class="hidden xl:block" /> process.
            </h2>
            <p class="font-poppins text-lg md:text-xl text-neutral-800 font-medium leading-[1.7] max-w-2xl mb-12">
              From a small independent business to a multi-franchise motor
              group, PostX powers the customer communication engine behind
              South Africa's dealerships and beyond.
            </p>
            <button
              @click="openModal"
              class="bg-black hover:bg-[#00a5c5] text-white font-poppins font-medium px-10 py-4 rounded-full transition-all duration-300 shadow-lg active:scale-95 text-lg lowercase cursor-pointer"
            >
              Contact us today
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
      class="w-full bg-white py-20 sm:py-28 px-6 sm:px-8 lg:px-12 text-center overflow-hidden"
    >
      <div class="max-w-300 mx-auto flex flex-col items-center">

        <img loading="lazy" :src="postXLogo" alt="PostX" class="h-10 md:h-12 lg:h-13 mb-4 object-contain" />

        <h2 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins text-3xl md:text-5xl lg:text-5xl leading-[1.2] tracking-tight text-neutral-900 mb-8">
          <span class="text-[#00a5c5] font-semibold"> Capabilities shipping continuosly -</span> <span class="italic font-light">your PostX gets smarter over time.</span>
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
          <span class="text-[#00a5c5] font-poppins text-lg font-medium mb-4">Why us?</span>
          <h2 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins text-4xl sm:text-5xl lg:text-[4rem] leading-[1.1] font-medium text-neutral-900 mb-10 tracking-tight">
            Frequently asked<br />questions
          </h2>

          <!-- CTA Card -->
          <div class="w-full bg-[#f0f9fa] rounded-[32px] p-8 sm:p-10 flex flex-col items-start mt-4">
            <h3 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins text-2xl font-semibold text-neutral-900 mb-4">
              Still have a question?
            </h3>
            <p class="font-poppins text-neutral-700 text-base sm:text-lg leading-relaxed mb-8">
              If you'd like to know more about how<br />R-E-D can help your business generate more leads.
            </p>
            <button
              @click="openModal"
              class="bg-black text-white font-poppins px-8 py-4 rounded-full transition-all duration-300 shadow-md active:scale-95 text-[15px] font-medium lowercase cursor-pointer btn-slide-in"
            >
              schedule a meeting today
            </button>
          </div>
        </div>

        <!-- Right Side: Accordion -->
        <div class="w-full lg:w-[60%] flex flex-col gap-4">
          <div
            v-for="(faq, index) in faqData"
            :key="index"
            class="bg-[#fafafa] rounded-[24px] overflow-hidden transition-all duration-300"
          >
            <button
              @click="toggleFaq(index)"
              class="w-full flex items-center justify-between p-6 sm:px-8 sm:py-7 text-left focus:outline-none cursor-pointer"
            >
              <span class="font-poppins font-semibold text-lg sm:text-xl text-neutral-900 pr-4">
                {{ faq.question }}
              </span>
              <div class="flex-shrink-0 text-[#00a5c5] transition-transform duration-300" :class="{ 'rotate-180': activeFaq === index }">
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
          Ready to connect your<br class="hidden sm:block" /> Business?
        </h2>

        <p class="font-poppins text-neutral-500 text-lg sm:text-[1.3rem] font-medium leading-[1.6] max-w-2xl mx-auto mb-10">
          If you'd like to know more about how Post<span class="text-[#00a5c5]">X</span><br class="hidden sm:block" /> can help your business manage leads.
        </p>

        <button
          @click="openModal"
          class="bg-black text-white font-poppins px-10 py-4 rounded-full transition-all duration-300 shadow-md active:scale-95 text-base tracking-wide font-medium lowercase cursor-pointer btn-slide-in"
        >
          schedule a meeting today
        </button>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ChevronDown, ArrowLeft } from 'lucide-vue-next';

// Image Imports
import postXHeroBanner from '~/assets/images/hero-hanner-lady-desktop-banner.webp';
import postXLogo from '~/assets/images/PostX_Web_Dark_Logo.png';
import postXHeroMobileBanner from '~/assets/images/hero-hanner-lady-mobile-banner.webp';
import createIcon from '~/assets/images/create.svg';
import connectIcon from '~/assets/images/connect.svg';
import commsIcon from '~/assets/images/comms.svg';
import controlIcon from '~/assets/images/control.svg';
import leadQualIcon from '~/assets/images/lead-qualitification-icon.svg';
import intelConversationsIcon from '~/assets/images/intelligent-coversations.svg';
import teamFocusIcon from '~/assets/images/team-focus-conversation.svg';
import cartLeftChevron from '~/assets/images/cart-left-chevron.svg';
import cartRightChevron from '~/assets/images/cart-right-chevron.svg';
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
import testimonialGuyImg from '~/assets/images/testimonial-guy-image.webp';
import postxInboxScreenshot from '~/assets/images/postx-inbox-screenshot.webp';
import postxMobileLoginMockup from '~/assets/images/postx-mobile-login-screen-mockup.webp';
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
  { question: 'What is PostX?', answer: 'PostX is a communication, messaging, and automation platform built for the modern business. It helps your staff and systems engage customers, automate follow-ups, and convert more leads across your marketing and sales channels - tried and tested in the motor industry and tailored to your industry.' },
  { question: 'Does PostX use AI?', answer: 'Yes. PostX includes AI assistants that automate customer conversations, qualify leads, and speed up response times. The AI is trained and configured for your unique business, so replies stay relevant to how your clients and customers shop and enquire. More AI and automation features coming soon.' },
  { question: 'Which channels does PostX support?', answer: 'PostX supports WhatsApp, Meta, Facebook Messenger, Instagram, TikTok, Google, LinkedIn, and web chat, as well as custom integrations. The platform is continuously expanding and evolving, so new channels and capabilities are added over time.' },
  { question: 'Do you provide onboarding and training?', answer: 'Yes. Every PostX client gets structured onboarding, hands-on team training, and setup support built into activation. We make sure your sales, operations, and marketing teams are confident using the platform from day one, with ongoing support and resources available whenever you need them.' },
  { question: 'Can PostX integrate with our CRM or existing systems?', answer: 'Yes. PostX connects with the tools your business already runs, including CRM and lead-management systems. Integrations centralise your customer data and automate the flow between platforms - and we offer custom integration development and assistance where you need it.' },
  { question: 'How quickly can PostX be set up and ready to use?', answer: 'Most businesses are up and running within 48 hours. Once your account is activated, our team handles configuration and integration, then trains your staff so you start seeing value fast - not weeks of waiting.' },
  { question: 'How does PostX pricing work?', answer: 'PostX is priced on a flexible subscription model that scales with your business size and needs. Basic, Advanced, Enterprise and Custom are available. There are no hidden costs - you pay for the capabilities you use. Contact us for a tailored quote based on your team, volume, and the features that matter to you.' },
  { question: 'How often will I receive performance reports?', answer: 'You get ongoing, real-time access to your performance data through the PostX dashboard - engagement, leads, chat stats and campaign results, whenever you need them. Scheduled report summaries can also be set up for your team on request.' },
  { question: 'Do you work with businesses in my industry?', answer: 'PostX is purpose-built and battle-tested in motor retail, but widely used across many other industries. We work with businesses large and small around the world, adapting the platform to how your market actually buys and communicates.' },
  { question: 'What makes RED different from other agencies?', answer: 'RED combines software solutions and development with deep motor retail expertise and full-service digital marketing. Instead of buying tools and services from separate vendors, you get an integrated partner that builds the product, runs the campaigns, and understands your market end-to-end. PostX is built and maintained in-house.' }
];

const automateFeaturesData = [
  {
    title: "Capture Every Lead the Moment They Reach Out",
    desc: "Your next buyer just sent a WhatsApp message from a campaign on Google. PostX's AI assistant responds in seconds - greeting the customer, answering stock questions, and capturing their details before your competitor even sees the notification. No lead falls through the cracks, day or night.",
    img: captureLeadImg
  },
  {
    title: "Book Test Drives & Service Appointments via Chat",
    desc: "Forget phone queues and email forms. Customers book test drives, schedule services and confirm appointments directly in WhatsApp. PostX handles the load, sends reminders, and integrates the lead into your lead system - so your team focuses on selling, not admin.",
    img: serviceBookingImg
  },
  {
    title: "Automate Service & Appointment Reminders",
    desc: "PostX sends automated or bulk WhatsApp reminders before every booking - with a confirm or reschedule option. Reduce no-shows by up to 40% without your team lifting a finger.",
    img: serviceReminderImg
  },
  {
    title: "Nurture & Recycle Leads with AI",
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
const nextPillar = () => scrollToPillar((activePillar.value + 1) % 4);
const prevPillar = () => scrollToPillar((activePillar.value - 1 + 4) % 4);
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

// PostX Insights Carousel
const insightIndex = ref(0);
const totalInsights = 3;
const nextInsight = () => insightIndex.value = (insightIndex.value + 1) % totalInsights;
const prevInsight = () => insightIndex.value = (insightIndex.value - 1 + totalInsights) % totalInsights;

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
    const { clientWidth } = automateScrollContainerRef.value;
    if (clientWidth > 0) {
      automateScrollContainerRef.value.scrollTo({
        left: index * clientWidth,
        behavior: 'smooth'
      });
      activeAutomateFeature.value = index;
    }
  }
};
const handleAutomateScroll = () => {
  if (automateScrollContainerRef.value) {
    const scrollPosition = automateScrollContainerRef.value.scrollLeft;
    const itemWidth = automateScrollContainerRef.value.clientWidth;
    const newIndex = Math.round(scrollPosition / itemWidth);
    if (newIndex !== activeAutomateFeature.value) {
      activeAutomateFeature.value = newIndex;
    }
  }
};

useHead({
  title: 'PostX | R-E-D',
  meta: [
    { name: 'description', content: 'PostX unifies WhatsApp, social media, live chat, and AI-powered assistants into a single command centre.' }
  ]
});
</script>

<style scoped>
/* Optional: fade transition classes for Insights carousel */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

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
