<template>
  <div class="w-full bg-[#f8f9fa] min-h-screen relative font-sans overflow-x-hidden pt-8 sm:pt-16 pb-0">
    <Head>
      <Link rel="preload" as="image" :href="heroBgImg" fetchpriority="high" />
      <Title>Online Reputation Solutions | R-E-D</Title>
      <Meta
        name="description"
        content="Keep your Google rating high. Everything else follows. Turn positive customer feedback into your strongest sales engine with R-E-D and PostX."
      />
    </Head>

    <!-- Back Breadcrumb -->
    <div class="mx-auto lg:w-[95%] max-w-[1600px] px-8 lg:px-0 mb-6">
      <NuxtLink
        to="/services"
        class="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-primary transition-colors duration-200"
      >
        <ArrowLeft class="w-4 h-4" />
        back to services
      </NuxtLink>
    </div>

    <!-- Hero Banner Section -->
    <section class="px-4 sm:px-8 lg:px-12 py-2 max-w-[1600px] mx-auto mb-16 sm:mb-12">
      <!-- MOBILE HERO LAYOUT (visible on small screens < lg) -->
      <div class="flex flex-col items-center text-center lg:hidden">
        <span class="font-poppins text-neutral-800 text-sm sm:text-base font-normal mb-3">
          Online Reputation Solutions
        </span>
        <h1
          v-motion
          :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }"
          :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }"
          class="font-poppins text-[2.1rem] sm:text-5xl font-medium text-neutral-900 leading-[1.15] tracking-tight mb-6"
        >
          <span class="text-primary font-medium">Keep Your Google Rating High.</span><br />
          Everything Else Follows.
        </h1>
        <p class="font-poppins text-neutral-700 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-8">
          Your star rating affects where you show up on Google, how your ads perform, what AI assistants say about you, and whether a customer chooses you or a competitor. R-E-D helps businesses earn more reviews, reply faster and protect their rating, with tools for your team or specialists who handle it for you.
        </p>
        <button
          @click="openModal('Online Reputation Solutions - Hero Mobile')"
          class="btn-primary w-full max-w-[340px] text-base mb-8 px-8 py-3.5"
        >
          Schedule A Meeting Today
        </button>
        <div class="w-full flex justify-center">
          <img
            :src="heroMobileImg"
            alt="Keep your Google rating high - Online Reputation Solutions"
            class="w-full max-w-[440px] h-auto object-contain"
            fetchpriority="high"
            loading="eager"
          />
        </div>
      </div>

      <!-- DESKTOP HERO LAYOUT (hidden on mobile, visible on lg and up) -->
      <div class="hidden lg:block relative w-full">
        <img
          :src="heroBgImg"
          alt="Keep your Google rating high - Online Reputation Solutions"
          class="w-full h-auto select-none pointer-events-none"
          fetchpriority="high"
          loading="eager"
        />

        <!-- Overlay Content positioned on the left side within the capsule area -->
        <div class="absolute inset-x-0 bottom-0 top-[14%] flex items-center z-10 px-8 xl:px-14 pb-4">
          <div class="w-full max-w-[560px] xl:max-w-[600px] flex flex-col items-start justify-center">
            <span class="font-poppins text-neutral-800 text-sm mb-4 font-normal">
              Online Reputation Solutions
            </span>
            <h1
              v-motion
              :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }"
              :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }"
              class="font-poppins text-3xl lg:text-[2.65rem] xl:text-[3.1rem] font-medium text-neutral-900 leading-[1.15] tracking-tight mb-6"
            >
              <span class="text-primary font-medium">Keep Your Google Rating High.</span> Everything Else Follows.
            </h1>
            <p class="font-poppins text-neutral-700 text-sm sm:text-base xl:text-lg leading-relaxed max-w-xl mb-8">
              Your star rating affects where you show up on Google, how your ads perform, what AI assistants say about you, and whether a customer chooses you or a competitor. R-E-D helps businesses earn more reviews, reply faster and protect their rating, with tools for your team or specialists who handle it for you.
            </p>
            <button
              @click="openModal('Online Reputation Solutions - Hero Desktop')"
              class="btn-primary text-[13px] sm:text-[14px] font-semibold px-8 py-3.5"
            >
              Schedule A Meeting Today
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Intro Headline Section -->
    <section class="py-4 px-6 sm:px-8 max-w-[1200px] mx-auto text-center mb-12 sm:mb-16">
      <h2
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="font-poppins text-3xl sm:text-4xl lg:text-5xl font-medium text-neutral-900 leading-tight mb-6 tracking-tight"
      >
        <span class="text-primary font-medium">Turn Customer Feedback</span> Into Your<br class="hidden sm:inline" />
        Strongest Sales Engine
      </h2>
      <p class="font-poppins text-neutral-700 text-base sm:text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto">
        In a web-first world, your 5-star rating dictates your bottom line. Seamlessly capture, manage, and amplify reviews across Google and Facebook powered by Post<span class="text-primary font-semibold">X</span>, the all-in-one platform built to convert trust into revenue.
      </p>
    </section>

    <!-- Brand Logo Carousel -->
    <div class="mb-20 sm:mb-28">
      <LogoCarousel />
    </div>

    <!-- 4 Benefits Cards with Background Image Section -->
    <section class="px-4 sm:px-8 lg:px-12 py-2 max-w-[1600px] mx-auto mb-20 sm:mb-28">
      <div class="text-center max-w-[1200px] mx-auto mb-12 sm:mb-16">
        <h2
          v-motion
          :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }"
          :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }"
          class="font-poppins text-3xl sm:text-4xl lg:text-[42px] font-medium text-neutral-900 leading-tight tracking-tight"
        >
          <span class="text-primary font-medium">Before Customers Call, Visit Or Buy, They Check Your Stars.</span><br />
          Here’s What A Strong, Current Rating Does For You.
        </h2>
      </div>

      <!-- Main Container with Background Image and Floating 4 Cards -->
      <div class="relative w-full rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-sm border border-neutral-200/50 bg-[#e4ebf0]">
        <!-- Background Image -->
        <img
          :src="bodyDesktopBgImg"
          alt="Happy colleagues checking ratings"
          class="w-full h-full min-h-[720px] object-cover object-center absolute inset-0 pointer-events-none select-none"
        />

        <!-- Gradient Tint Overlay for optimal card contrast -->
        <div class="absolute inset-0 bg-neutral-900/10 pointer-events-none"></div>

        <!-- 4 Cards Grid Layout -->
        <div class="relative z-10 p-6 sm:p-10 lg:p-14">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-[1280px] mx-auto justify-items-center">
            <!-- Card 1: Search engines -->
            <div
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
              class="w-full lg:w-[620px] min-h-[390px] lg:h-[390px] bg-[#e8eef8]/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 flex flex-col justify-between shadow-md border border-white/60 transition-transform duration-300 hover:-translate-y-1"
            >
              <div>
                <h3 class="font-poppins text-[24px] font-medium text-neutral-900 mb-4">
                  Search Engines
                </h3>
                <div class="w-full max-w-[580px] h-[200px] overflow-hidden rounded-xl sm:rounded-2xl mb-4 mx-auto">
                  <img
                    :src="searchEnginesImg"
                    alt="Search engines review stars ranking"
                    class="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
              </div>
              <p class="font-poppins text-[16px] text-neutral-700 leading-relaxed">
                More reviews and positive ratings help your local ranking, so you appear more often in Maps and “near me” searches.
              </p>
            </div>

            <!-- Card 2: Stronger ads -->
            <div
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 100 } }"
              class="w-full lg:w-[620px] min-h-[390px] lg:h-[390px] bg-[#ece9f6]/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 flex flex-col justify-between shadow-md border border-white/60 transition-transform duration-300 hover:-translate-y-1"
            >
              <div>
                <h3 class="font-poppins text-[24px] font-medium text-neutral-900 mb-4">
                  Stronger Ads
                </h3>
                <div class="w-full max-w-[580px] h-[200px] overflow-hidden rounded-xl sm:rounded-2xl mb-4 mx-auto">
                  <img
                    :src="strongerAdsImg"
                    alt="Stronger ads performance with review ratings"
                    class="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
              </div>
              <p class="font-poppins text-[16px] text-neutral-700 leading-relaxed">
                From supercharging your Google Search Ads to shaping AI recommendations like ‘best near me’, a strong star rating ensures your ad spend and reputation work together to win every customer.
              </p>
            </div>

            <!-- Card 3: Trusted before the first call -->
            <div
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 200 } }"
              class="w-full lg:w-[620px] min-h-[390px] lg:h-[390px] bg-[#f9ebeb]/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 flex flex-col justify-between shadow-md border border-white/60 transition-transform duration-300 hover:-translate-y-1"
            >
              <div>
                <h3 class="font-poppins text-[24px] font-medium text-neutral-900 mb-4">
                  Trusted Before The First Call
                </h3>
                <div class="w-full max-w-[580px] h-[200px] overflow-hidden rounded-xl sm:rounded-2xl mb-4 mx-auto">
                  <img
                    :src="trustedBeforeFirstCallImg"
                    alt="Trusted before the first call 5 star rating"
                    class="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
              </div>
              <p class="font-poppins text-[16px] text-neutral-700 leading-relaxed">
                The bigger the decision, the more people rely on what other customers say. More referrals and repeat business: Happy customers who are asked to share become your best salespeople and brand advocates.
              </p>
            </div>

            <!-- Card 4: More organic views -->
            <div
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 300 } }"
              class="w-full lg:w-[620px] min-h-[390px] lg:h-[390px] bg-[#e5f3f4]/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 flex flex-col justify-between shadow-md border border-white/60 transition-transform duration-300 hover:-translate-y-1"
            >
              <div>
                <h3 class="font-poppins text-[24px] font-medium text-neutral-900 mb-4">
                  More Organic Views
                </h3>
                <div class="w-full max-w-[580px] h-[200px] overflow-hidden rounded-xl sm:rounded-2xl mb-4 mx-auto">
                  <img
                    :src="moreOrganicViewsImg"
                    alt="More organic views on Google Business Profile"
                    class="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
              </div>
              <p class="font-poppins text-[16px] text-neutral-700 leading-relaxed">
                Regular new reviews keep your Google Business Profile active and visible without paying for each click. What's your current Google review?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Google & Facebook Review Management Section -->
    <section class="py-12 sm:py-20 px-6 sm:px-8 lg:px-12 max-w-[1600px] mx-auto text-center mb-16 sm:mb-24">
      <!-- Google & Facebook Icons -->
      <div class="flex items-center justify-center gap-6 mb-8">
        <div class="w-[100px] h-[100px] rounded-2xl bg-white shadow-lg flex items-center justify-center p-2 border border-neutral-100 transition-transform duration-300 hover:scale-110">
          <img :src="googleIcon" alt="Google Review Management" class="w-full h-full object-cover" />
        </div>
        <div class="w-[100px] h-[100px] rounded-2xl bg-white shadow-lg flex items-center justify-center p-2 border border-neutral-100 transition-transform duration-300 hover:scale-110">
          <img :src="facebookIcon" alt="Facebook Review Management" class="w-full h-full object-cover" />
        </div>
      </div>

      <h2 class="font-poppins text-3xl sm:text-4xl lg:text-5xl font-medium text-neutral-900 tracking-tight mb-2">
        Google &amp; Facebook Review Management
      </h2>
      <p class="font-poppins text-neutral-800 text-lg sm:text-xl font-normal mb-10">
        (Powered by Post<span class="text-primary font-semibold">X</span>)
      </p>

      <h3
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="font-poppins text-2xl sm:text-4xl lg:text-[44px] font-medium text-neutral-900 leading-tight mb-4 tracking-tight"
      >
        <span class="text-primary">Master The Digital Duopoly<br class="hidden sm:inline" /> With</span> Professional Oversight
      </h3>
      <p class="font-poppins text-neutral-600 text-base sm:text-lg max-w-2xl mx-auto mb-14 leading-relaxed">
        Take total control over your digital storefront. Post<span class="text-primary font-semibold">X</span> brings structure and expertise to every step of your customer review pipeline.
      </p>

      <!-- 3 Feature Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1400px] mx-auto mb-12 text-left">
        <!-- Card 1 -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
          class="bg-[#fceeed] rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-neutral-200/40 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
        >
          <div>
            <h4 class="font-poppins text-lg sm:text-xl font-medium text-neutral-900 mb-5 min-h-[56px] flex items-center">
              Master The Digital Duopoly With Professional Oversight
            </h4>
            <div class="w-full rounded-2xl overflow-hidden mb-6 aspect-[2/1]">
              <img
                :src="card1Img"
                alt="Targeted review requests via WhatsApp or SMS"
                class="w-full h-full object-cover object-center rounded-2xl"
                loading="lazy"
              />
            </div>
          </div>
          <p class="font-poppins text-neutral-700 text-sm sm:text-base leading-relaxed">
            Send targeted review requests via WhatsApp or SMS right after a purchase or service interaction.
          </p>
        </div>

        <!-- Card 2 -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 150 } }"
          class="bg-[#eeeef8] rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-neutral-200/40 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
        >
          <div>
            <h4 class="font-poppins text-lg sm:text-xl font-medium text-neutral-900 mb-5 min-h-[56px] flex items-center">
              24/7 Response Management
            </h4>
            <div class="w-full rounded-2xl overflow-hidden mb-6 aspect-[2/1]">
              <img
                :src="card2Img"
                alt="24/7 Response Management via PostX intelligent inbox"
                class="w-full h-full object-cover object-center rounded-2xl"
                loading="lazy"
              />
            </div>
          </div>
          <p class="font-poppins text-neutral-700 text-sm sm:text-base leading-relaxed">
            R-E-D’s dedicated specialists use PostX’s intelligent inbox to respond professionally to every single review across your platforms.
          </p>
        </div>

        <!-- Card 3 -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 300 } }"
          class="bg-[#e8effa] rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-neutral-200/40 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
        >
          <div>
            <h4 class="font-poppins text-lg sm:text-xl font-medium text-neutral-900 mb-5 min-h-[56px] flex items-center">
              Effective Complaint Resolution &amp; Feedback Management
            </h4>
            <div class="w-full rounded-2xl overflow-hidden mb-6 aspect-[2/1]">
              <img
                :src="card3Img"
                alt="Effective complaint resolution and customer feedback management"
                class="w-full h-full object-cover object-center rounded-2xl"
                loading="lazy"
              />
            </div>
          </div>
          <p class="font-poppins text-neutral-700 text-sm sm:text-base leading-relaxed">
            Turn negative experiences into brand wins through proactive, empathetic complaint resolution while amplifying positive feedback to build lasting consumer trust.
          </p>
        </div>
      </div>

      <!-- Action Button -->
      <button
        @click="openModal('Google & Facebook Review Management - Schedule')"
        class="btn-primary text-[14px] sm:text-[15px] font-semibold px-9 py-4"
      >
        Schedule A Meeting Today
      </button>
    </section>

    <!-- Omnichannel PostX Section -->
    <section class="w-full bg-[#f5f5f5] overflow-hidden relative mb-20 sm:mb-28">
      <!-- DESKTOP BANNER LAYOUT (lg and up) -->
      <div class="hidden lg:block relative w-full max-w-[1500px] mx-auto min-h-[580px] xl:min-h-[620px] px-6 sm:px-8 lg:px-12">
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
        <div class="relative z-10 ml-auto w-full lg:w-[52%] md:px-20 lg:px-20 xl:w-[52%] py-16 xl:py-20 flex flex-col items-start text-left">
          <h2 class="font-poppins text-2xl sm:text-3xl lg:text-[2.1rem] xl:text-[2.35rem] font-medium text-neutral-900 leading-[1.25] mb-3 sm:mb-4 max-w-2xl">
            Post<span class="text-primary font-medium">X</span> Is The Omnichannel Workhorse For Teams That Live In The Conversation.
          </h2>
          <h3 class="font-poppins text-xl sm:text-2xl lg:text-[1.45rem] xl:text-[1.65rem] font-medium text-primary leading-snug mb-5 sm:mb-6 max-w-2xl">
            Bring Google Ratings, Complaints, Reviews And More Into One Place.
          </h3>
          <p class="font-poppins text-neutral-700 text-sm sm:text-base lg:text-[16px] leading-relaxed mb-6 sm:mb-8 max-w-xl">
            Alongside WhatsApp, social media, live chat and internal conversations into one shared inbox - and let AI help you reply faster, capture leads and keep customers coming back.
          </p>

          <ul class="space-y-3 sm:space-y-3.5 mb-8 sm:mb-10 w-full">
            <li class="flex items-center gap-3">
              <span class="w-2 h-2 rounded-full bg-primary shrink-0"></span>
              <span class="font-poppins text-neutral-800 text-sm sm:text-base font-medium">
                Unified Review &amp; Message Inbox
              </span>
            </li>
            <li class="flex items-center gap-3">
              <span class="w-2 h-2 rounded-full bg-primary shrink-0"></span>
              <span class="font-poppins text-neutral-800 text-sm sm:text-base font-medium">
                AI-Assisted Responses
              </span>
            </li>
            <li class="flex items-center gap-3">
              <span class="w-2 h-2 rounded-full bg-primary shrink-0"></span>
              <span class="font-poppins text-neutral-800 text-sm sm:text-base font-medium">
                Instant Lead Capture &amp; Qualification
              </span>
            </li>
            <li class="flex items-center gap-3">
              <span class="w-2 h-2 rounded-full bg-primary shrink-0"></span>
              <span class="font-poppins text-neutral-800 text-sm sm:text-base font-medium">
                Service Booking &amp; Reminders
              </span>
            </li>
            <li class="flex items-center gap-3">
              <span class="w-2 h-2 rounded-full bg-primary shrink-0"></span>
              <span class="font-poppins text-neutral-800 text-sm sm:text-base font-medium">
                Unlimited users on every plan
              </span>
            </li>
          </ul>

          <NuxtLink
            to="/postx"
            class="bg-black hover:bg-primary text-white font-poppins text-sm sm:text-[15px] font-semibold px-9 py-3.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105 active:scale-95 cursor-pointer inline-block"
          >learn more</NuxtLink>
        </div>
      </div>

      <!-- MOBILE BANNER LAYOUT (below lg) -->
      <div class="lg:hidden w-full flex flex-col items-center">
        <!-- Mobile App Mockup Image -->
        <div class="w-full flex justify-center pt-10 px-6">
          <img
            loading="lazy"
            :src="postxMobileMockup"
            alt="PostX Mobile App Interface"
            class="w-full max-w-[340px] sm:max-w-[400px] h-auto object-contain select-none"
          />
        </div>

        <!-- Mobile Text Content -->
        <div class="w-full px-6 sm:px-8 py-10 flex flex-col items-start text-left max-w-xl mx-auto">
          <h2 class="font-poppins text-2xl sm:text-3xl font-medium text-neutral-900 leading-snug mb-3">
            Post<span class="text-primary font-medium">X</span> Is The Omnichannel Workhorse For Teams That Live In The Conversation.
          </h2>
          <h3 class="font-poppins text-xl sm:text-2xl font-medium text-primary leading-snug mb-5">
            Bring Google Ratings, Complaints, Reviews And More Into One Place.
          </h3>
          <p class="font-poppins text-neutral-700 text-sm sm:text-base leading-relaxed mb-6">
            Alongside WhatsApp, social media, live chat and internal conversations into one shared inbox - and let AI help you reply faster, capture leads and keep customers coming back.
          </p>

          <ul class="space-y-3 mb-8 w-full">
            <li class="flex items-center gap-3">
              <span class="w-2 h-2 rounded-full bg-primary shrink-0"></span>
              <span class="font-poppins text-neutral-800 text-sm sm:text-base font-medium">
                Unified Review &amp; Message Inbox
              </span>
            </li>
            <li class="flex items-center gap-3">
              <span class="w-2 h-2 rounded-full bg-primary shrink-0"></span>
              <span class="font-poppins text-neutral-800 text-sm sm:text-base font-medium">
                AI-Assisted Responses
              </span>
            </li>
            <li class="flex items-center gap-3">
              <span class="w-2 h-2 rounded-full bg-primary shrink-0"></span>
              <span class="font-poppins text-neutral-800 text-sm sm:text-base font-medium">
                Instant Lead Capture &amp; Qualification
              </span>
            </li>
            <li class="flex items-center gap-3">
              <span class="w-2 h-2 rounded-full bg-primary shrink-0"></span>
              <span class="font-poppins text-neutral-800 text-sm sm:text-base font-medium">
                Service Booking &amp; Reminders
              </span>
            </li>
            <li class="flex items-center gap-3">
              <span class="w-2 h-2 rounded-full bg-primary shrink-0"></span>
              <span class="font-poppins text-neutral-800 text-sm sm:text-base font-medium">
                Unlimited users on every plan
              </span>
            </li>
          </ul>

          <NuxtLink
            to="/postx"
            class="bg-black hover:bg-primary text-white font-poppins text-sm sm:text-[15px] font-semibold px-9 py-3.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105 active:scale-95 cursor-pointer inline-block"
          >learn more</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Get Your 5-Star Reputation Machine Running in Days Section -->
    <section class="px-6 sm:px-8 lg:px-12 py-4 max-w-[1400px] mx-auto mb-20 sm:mb-28 text-center">
      <h2
        v-motion
        :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }"
        :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }"
        class="font-poppins text-3xl sm:text-4xl lg:text-5xl font-medium text-neutral-900 tracking-tight mb-16"
      >
        <span class="text-primary font-medium">Get Your 5-Star Reputation</span> Machine<br class="hidden sm:inline" />
        Running In Days
      </h2>

      <div class="flex flex-col gap-10 items-center">
        <!-- Card 1: Connect & Integrate -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          class="w-full md:w-[900px] min-h-[460px] md:h-[500px] bg-[#e8effa] rounded-3xl sm:rounded-4xl overflow-hidden grid grid-cols-1 md:grid-cols-12 items-center border border-neutral-200/50 shadow-sm text-left transition-all duration-300 hover:shadow-md"
        >
          <div class="p-8 sm:p-10 lg:p-12 md:col-span-7 flex flex-col items-start justify-center">
            <h3 class="font-poppins text-2xl sm:text-3xl font-medium text-neutral-900 mb-4">
              Connect &amp; Integrate:
            </h3>
            <p class="font-poppins text-neutral-700 text-base sm:text-lg leading-relaxed max-w-sm">
              We link your business locations, social channels, and customer touchpoints directly into the Post<span class="text-primary font-semibold">X</span> platform.
            </p>
          </div>
          <div class="md:col-span-5 h-full flex justify-end items-center relative overflow-hidden">
            <img
              :src="connectIntegrateImg"
              alt="Connect and integrate with CMS and customer touchpoints"
              class="w-full h-full object-cover object-left"
              loading="lazy"
            />
          </div>
        </div>

        <!-- Card 2: Engage & Request -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          class="w-full md:w-[900px] min-h-[460px] md:h-[500px] bg-[#ececf8] rounded-3xl sm:rounded-4xl overflow-hidden grid grid-cols-1 md:grid-cols-12 items-center border border-neutral-200/50 shadow-sm text-left transition-all duration-300 hover:shadow-md"
        >
          <div class="md:col-span-5 h-full flex justify-start items-center relative overflow-hidden order-2 md:order-1">
            <img
              :src="engageRequestImg"
              alt="Tailored review workflows for satisfied buyers"
              class="w-full h-full object-cover object-right"
              loading="lazy"
            />
          </div>
          <div class="p-8 sm:p-10 lg:p-12 md:col-span-7 flex flex-col items-start justify-center order-1 md:order-2">
            <h3 class="font-poppins text-2xl sm:text-3xl font-medium text-neutral-900 mb-4">
              Engage &amp; Request:
            </h3>
            <p class="font-poppins text-neutral-700 text-base sm:text-lg leading-relaxed max-w-sm">
              Tailored workflows guide satisfied buyers to share their experiences on Google and Facebook.
            </p>
          </div>
        </div>

        <!-- Card 3: Monitor & Resolve -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          class="w-full md:w-[900px] min-h-[460px] md:h-[500px] bg-[#fceeed] rounded-3xl sm:rounded-4xl overflow-hidden grid grid-cols-1 md:grid-cols-12 items-center border border-neutral-200/50 shadow-sm text-left transition-all duration-300 hover:shadow-md"
        >
          <div class="p-8 sm:p-10 lg:p-12 md:col-span-7 flex flex-col items-start justify-center">
            <h3 class="font-poppins text-2xl sm:text-3xl font-medium text-neutral-900 mb-4">
              Monitor &amp; Resolve:
            </h3>
            <p class="font-poppins text-neutral-700 text-base sm:text-lg leading-relaxed max-w-sm">
              Every review resolving complaints discreetly and celebrating positive feedback to drive sales growth.
            </p>
          </div>
          <div class="md:col-span-5 h-full flex justify-end items-center relative overflow-hidden">
            <img
              :src="monitorResolveImg"
              alt="Monitor and resolve reviews and customer feedback"
              class="w-full h-full object-cover object-left"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Bottom CTA Banner Card -->
    <section class="mx-auto lg:w-[95%] max-w-[1600px] px-6 sm:px-8 lg:px-12 py-12 lg:py-20 mb-12 sm:mb-20">
      <div class="relative w-full rounded-3xl sm:rounded-[2.5rem] overflow-hidden min-h-[380px] sm:min-h-[460px] lg:min-h-[500px] flex items-center shadow-md border border-neutral-200/50">
        <!-- Background Image -->
        <img
          :src="ctaBannerImg"
          alt="Ready to Dominate Your Local Market Ratings?"
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
            Ready To Dominate Your Local Market Ratings?
          </h2>
          <p class="font-poppins text-neutral-700 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
            Let R-E-D audit your current digital footprint and show you how Post<span class="text-primary font-semibold">X</span> can elevate your reviews and lead generation.
          </p>
          <button
            @click="openModal('Ready to Dominate - CTA')"
            class="btn-primary text-[14px] sm:text-[15px] font-semibold px-9 py-3.5"
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
              @click="openModal('Online Reputation - FAQ Meeting')"
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
                <div class="px-6 pb-6 sm:px-8 sm:pb-8 pt-0 mx-6 sm:mx-8 font-poppins text-neutral-600 text-base sm:text-lg leading-relaxed border-t border-neutral-200">
                  <div class="pt-6">{{ faq.answer }}</div>
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
import { ArrowLeft, ChevronDown } from 'lucide-vue-next';
import LogoCarousel from '~/components/unsorted/LogoCarousel.vue';

// Image Imports
import heroBgImg from '~/assets/images/online-reputation-solutions-hero-background-desktop-image.webp';
import heroMobileImg from '~/assets/images/online-reputation-solutions-hero-background-mobile-image.webp';
import bodyDesktopBgImg from '~/assets/images/online-reputation-body-desktop-image.webp';
import searchEnginesImg from '~/assets/images/search-engines-image.webp';
import strongerAdsImg from '~/assets/images/stronger-ads-image.webp';
import trustedBeforeFirstCallImg from '~/assets/images/trusted-before-the-first-call-image.webp';
import moreOrganicViewsImg from '~/assets/images/more-organic-views-image.webp';

import googleIcon from '~/assets/images/r-e-d-online-reputation-google-icon.svg';
import facebookIcon from '~/assets/images/r-e-d-online-reputation-facebook-icon.svg';

import card1Img from '~/assets/images/review-management-realtime-monitoring.webp';
import card2Img from '~/assets/images/review-management-response-management.webp';
import card3Img from '~/assets/images/review-management-complaint-resolution.webp';

import postxMobileMockup from '~/assets/images/postx-mobile-login-screen-mockup.webp';
import postxDesktopBanner from '~/assets/images/postx-mobileapp-desktop-background-mockup.webp';

import connectIntegrateImg from '~/assets/images/r-e-d-connect-and-integrate.webp';
import engageRequestImg from '~/assets/images/r-e-d-engage-and-request.webp';
import monitorResolveImg from '~/assets/images/r-e-d-monitor-and-resolve.webp';

import ctaBannerImg from '~/assets/images/r-e-d-website-online-reputation-cta-banner-image.webp';

const { openModal } = useModal();

const faqData = [
  {
    question: "Can you remove negative reviews?",
    answer: "While Google and Facebook do not allow third-party platforms to unilaterally delete legitimate negative reviews, we help flag and dispute reviews that violate Google's Prohibited and Restricted Content policies (such as spam, hate speech, conflicts of interest, or fake accounts). For authentic customer complaints, our team helps de-escalate and resolve issues quickly to encourage reviewers to update or remove their rating."
  },
  {
    question: "Will AI replies sound robotic?",
    answer: "Not at all. PostX's AI-assisted response models are custom-trained on your brand voice, tone guidelines, and industry-specific context. Every draft generated by AI can either be reviewed by your team or vetted and personalized by R-E-D's dedicated community specialists before sending."
  },
  {
    question: "Is asking customers for reviews POPIA-compliant?",
    answer: "Yes, fully compliant. We ensure all automated and manual review request workflows adhere strictly to the Protection of Personal Information Act (POPIA), utilizing existing transactional consent, transparent opt-outs, and secure customer data handling."
  },
  {
    question: "Do you also manage our social media comments?",
    answer: "Yes. PostX integrates Facebook and Instagram comments, mentions, and direct messages into the same unified omnichannel inbox, allowing our specialists or your internal team to monitor and resolve comments in real time."
  },
  {
    question: "Do you only work with car dealerships?",
    answer: "While we have deep expertise and specialized workflows in the automotive sector, our online reputation solutions and PostX platform are trusted across retail, hospitality, healthcare, real estate, and professional services."
  },
  {
    question: "Can you manage multiple locations or brands?",
    answer: "Absolutely. PostX is designed specifically for multi-location enterprises, dealer groups, and franchises, giving you a bird's-eye view of all branch ratings while allowing location-specific management and reporting."
  },
  {
    question: "How quickly can we start?",
    answer: "Onboarding is fast and streamlined. We can integrate your Google Business Profiles, Facebook pages, and customer touchpoints within 48 to 72 hours, allowing review generation and active monitoring to begin right away."
  }
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
</script>
