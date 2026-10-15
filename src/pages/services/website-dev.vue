<template>
  <div class="w-full bg-[#f8f9fa] min-h-screen relative font-sans overflow-x-hidden pt-8 sm:pt-16 pb-0">
    <Head>
      <Link rel="preload" as="image" :href="laptopHeroBanner" fetchpriority="high" />
      <Title>Website Development & Maintenance | R-E-D</Title>
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
    <section class="px-4 sm:px-8 lg:px-12 py-2 max-w-[1600px] mx-auto mb-16 sm:mb-24">
      <!-- MOBILE HERO LAYOUT (visible on small screens < lg) -->
      <div class="flex flex-col items-center text-center lg:hidden">
        <span class="font-poppins text-neutral-800 text-sm sm:text-base font-normal mb-3">
          Website Development and Maintenance
        </span>
        <h1
          v-motion
          :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }"
          :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }"
          class="font-poppins text-[2rem] sm:text-5xl font-medium text-neutral-900 leading-[1.15] tracking-tight mb-6"
        >
          Build, Maintain &amp;<br />
          Scale <span class="text-primary font-medium">Your Digital<br />Presence With<br />Purpose</span>
        </h1>
        <button
          @click="openModal('Website Development & Maintenance')"
          class="w-full max-w-[340px] bg-black hover:bg-primary text-white font-poppins text-base font-medium py-3.5 px-8 rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105 active:scale-95 cursor-pointer btn-slide-in mb-8"
        >
          i want a website
        </button>
        <div class="w-full flex justify-center">
          <img
            :src="laptopMobileHeroBanner"
            alt="Website Development and Maintenance Mockup"
            class="w-full max-w-[420px] h-auto object-contain"
            fetchpriority="high"
            loading="eager"
          />
        </div>
      </div>

      <!-- DESKTOP HERO LAYOUT (hidden on mobile, visible on lg and up) -->
      <div class="hidden lg:flex relative w-full rounded-3xl sm:rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[#ebf5fa] via-[#e2f0f8] to-[#d8ecf6] min-h-[520px] items-center shadow-sm border border-neutral-200/50">
        <div class="grid grid-cols-12 w-full h-full p-12 lg:p-16 items-center gap-8 relative z-10">
          <!-- Text Content -->
          <div class="col-span-6 flex flex-col items-start justify-center">
            <span class="font-poppins text-neutral-800 text-sm mb-4 font-normal">
              Website Development and Maintenance
            </span>
            <h1
              v-motion
              :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }"
              :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }"
              class="font-poppins text-4xl lg:text-[3.5rem] font-medium text-neutral-900 leading-[1.15] tracking-tight mb-8"
            >
              Build, Maintain &amp;<br />
              Scale <span class="text-primary font-medium">Your Digital<br />Presence With<br />
              Purpose</span>
            </h1>
            <button
              @click="openModal('Website Development & Maintenance')"
              class="bg-black hover:bg-primary text-white font-poppins text-[13px] sm:text-[14px] font-semibold px-8 py-3.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105 active:scale-95 cursor-pointer btn-slide-in"
            >
              i want a website
            </button>
          </div>

          <!-- Hero Image Mockup (Laptop & Mobile Showcase) -->
          <div class="col-span-6 flex justify-end items-center relative">
            <img
              :src="laptopHeroBanner"
              alt="Build, Maintain and Scale Your Digital Presence with Purpose"
              class="w-full max-w-[620px] h-auto object-contain drop-shadow-2xl"
              fetchpriority="high"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Intro Text Section -->
    <section class="py-2 px-6 sm:px-8 max-w-[1200px] mx-auto text-center mb-16 sm:mb-24">
      <h2
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="font-poppins text-3xl sm:text-4xl lg:text-5xl font-medium text-neutral-900 leading-tight mb-8 tracking-tight"
      >
        <span class="text-primary">Your Website</span> Is Your Most Crucial Digital Asset.<br class="hidden sm:inline" />
        We Make Sure It Delivers Maximum Value.
      </h2>
      <p class="font-poppins text-neutral-700 text-base sm:text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto">
        Today having a website is an absolute essential for any business. Your businesses website
        is a central hub for your customers to interact with your business. Having a website is all
        about direct contact to potential customers, through your website you can provide
        interested clients the information they need to make a purchase decision. Website
        maintenance is important to keep your website current, accurate and user-friendly. R-E-D
        can assist you in website development and maintenance.
      </p>
    </section>

    <!-- Section 1: Building -->
    <section id="building" class="mx-auto lg:w-[95%] max-w-[1600px] px-6 sm:px-8 lg:px-12 py-12 lg:py-16 border-t border-neutral-200/60">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <!-- Content -->
        <div class="flex flex-col items-start text-left order-2 lg:order-1">
          <h2
            v-motion
            :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }"
            :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }"
            class="font-poppins text-3xl sm:text-4xl lg:text-[42px] font-medium text-neutral-900 mb-6 tracking-tight"
          >
            1. Building
          </h2>
          <p class="font-poppins text-neutral-700 text-base sm:text-lg mb-8 leading-relaxed">
            Our team focuses on user-centric design and high performance. We create websites that are tailored to your business needs, scalable, secure, and optimised for conversions, ensuring your digital presence is built to succeed from day one.
          </p>
          <ul class="space-y-5 mb-10 w-full">
            <li class="flex items-start gap-4">
              <div class="mt-1 bg-primary rounded-full p-1 text-white shrink-0">
                <Check class="w-4 h-4 stroke-[3]" />
              </div>
              <p class="font-poppins text-neutral-800 text-base sm:text-lg leading-relaxed font-normal">
                <strong>Custom website development</strong> suited to your business needs and objectives.
              </p>
            </li>
            <li class="flex items-start gap-4">
              <div class="mt-1 bg-primary rounded-full p-1 text-white shrink-0">
                <Check class="w-4 h-4 stroke-[3]" />
              </div>
              <p class="font-poppins text-neutral-800 text-base sm:text-lg leading-relaxed font-normal">
                <strong>Responsive, mobile-friendly design</strong> ensuring seamless performance across desktop, tablet, and mobile devices.
              </p>
            </li>
            <li class="flex items-start gap-4">
              <div class="mt-1 bg-primary rounded-full p-1 text-white shrink-0">
                <Check class="w-4 h-4 stroke-[3]" />
              </div>
              <p class="font-poppins text-neutral-800 text-base sm:text-lg leading-relaxed font-normal">
                <strong>Optimised user journey</strong> to drive conversions, sales, and user engagement.
              </p>
            </li>
          </ul>
          <button
            @click="openModal('Website Development & Maintenance - Building')"
            class="bg-black hover:bg-primary text-white font-poppins font-medium text-[13px] sm:text-[14px] px-8 py-3.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105 active:scale-95 cursor-pointer btn-slide-in"
          >
            i'm interested
          </button>
        </div>
        <!-- Image -->
        <div class="w-full flex justify-center order-1 lg:order-2">
          <img
            :src="buildingImg"
            alt="Website Development Building"
            class="w-full max-w-[650px] h-auto object-cover rounded-[2rem] shadow-sm hover:-translate-y-1 transition-transform duration-500 ease-out"
            loading="lazy"
          />
        </div>
      </div>
    </section>

    <!-- Section 2: Maintenance -->
    <section id="maintenance" class="mx-auto lg:w-[95%] max-w-[1600px] px-6 sm:px-8 lg:px-12 py-12 lg:py-16 border-t border-neutral-200/60">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <!-- Image -->
        <div class="w-full flex justify-center order-1">
          <img
            :src="maintenanceImg"
            alt="Website Maintenance"
            class="w-full max-w-[650px] h-auto object-cover rounded-[2rem] shadow-sm hover:-translate-y-1 transition-transform duration-500 ease-out"
            loading="lazy"
          />
        </div>
        <!-- Content -->
        <div class="flex flex-col items-start text-left order-2">
          <h2
            v-motion
            :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }"
            :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }"
            class="font-poppins text-3xl sm:text-4xl lg:text-[42px] font-medium text-neutral-900 mb-6 tracking-tight"
          >
            2. Maintenance
          </h2>
          <p class="font-poppins text-neutral-700 text-base sm:text-lg mb-8 leading-relaxed">
            Keep your website running smoothly and securely with continuous updates, security monitoring, and regular backups so you never have to worry about downtime or technical disruptions.
          </p>
          <ul class="space-y-5 mb-10 w-full">
            <li class="flex items-start gap-4">
              <div class="mt-1 bg-primary rounded-full p-1 text-white shrink-0">
                <Check class="w-4 h-4 stroke-[3]" />
              </div>
              <p class="font-poppins text-neutral-800 text-base sm:text-lg leading-relaxed font-normal">
                <strong>Continuous updates and patches</strong> to ensure peak security, compatibility, and speed at all times.
              </p>
            </li>
            <li class="flex items-start gap-4">
              <div class="mt-1 bg-primary rounded-full p-1 text-white shrink-0">
                <Check class="w-4 h-4 stroke-[3]" />
              </div>
              <p class="font-poppins text-neutral-800 text-base sm:text-lg leading-relaxed font-normal">
                <strong>Proactive backup solutions</strong> with real-time disaster recovery to keep your valuable business data safe.
              </p>
            </li>
            <li class="flex items-start gap-4">
              <div class="mt-1 bg-primary rounded-full p-1 text-white shrink-0">
                <Check class="w-4 h-4 stroke-[3]" />
              </div>
              <p class="font-poppins text-neutral-800 text-base sm:text-lg leading-relaxed font-normal">
                <strong>Rapid troubleshooting and technical assistance</strong> whenever you need it, ensuring zero disruption to your daily operations.
              </p>
            </li>
          </ul>
          <button
            @click="openModal('Website Development & Maintenance - Maintenance')"
            class="bg-black hover:bg-primary text-white font-poppins font-medium text-[13px] sm:text-[14px] px-8 py-3.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105 active:scale-95 cursor-pointer btn-slide-in"
          >
            i'm interested
          </button>
        </div>
      </div>
    </section>

    <!-- Section 3: Integration -->
    <section id="integration" class="mx-auto lg:w-[95%] max-w-[1600px] px-6 sm:px-8 lg:px-12 py-12 lg:py-16 border-t border-neutral-200/60">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <!-- Content -->
        <div class="flex flex-col items-start text-left order-2 lg:order-1">
          <h2
            v-motion
            :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }"
            :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }"
            class="font-poppins text-3xl sm:text-4xl lg:text-[42px] font-medium text-neutral-900 mb-6 tracking-tight"
          >
            3. Integration
          </h2>
          <p class="font-poppins text-neutral-700 text-base sm:text-lg mb-8 leading-relaxed">
            Connect your website with your existing workflows and tools. We integrate CMS, CRM, payment systems, and marketing platforms to create an efficient and unified operational environment.
          </p>
          <ul class="space-y-5 mb-10 w-full">
            <li class="flex items-start gap-4">
              <div class="mt-1 bg-primary rounded-full p-1 text-white shrink-0">
                <Check class="w-4 h-4 stroke-[3]" />
              </div>
              <p class="font-poppins text-neutral-800 text-base sm:text-lg leading-relaxed font-normal">
                <strong>Seamless compatibility</strong> with Content Management Systems (CMS), CRM tools, and enterprise databases.
              </p>
            </li>
            <li class="flex items-start gap-4">
              <div class="mt-1 bg-primary rounded-full p-1 text-white shrink-0">
                <Check class="w-4 h-4 stroke-[3]" />
              </div>
              <p class="font-poppins text-neutral-800 text-base sm:text-lg leading-relaxed font-normal">
                <strong>Third-party tool integrations</strong> including payment gateways, live chat services, and automated marketing workflows.
              </p>
            </li>
            <li class="flex items-start gap-4">
              <div class="mt-1 bg-primary rounded-full p-1 text-white shrink-0">
                <Check class="w-4 h-4 stroke-[3]" />
              </div>
              <p class="font-poppins text-neutral-800 text-base sm:text-lg leading-relaxed font-normal">
                <strong>Custom API development</strong> to connect proprietary software and streamline your internal operations.
              </p>
            </li>
          </ul>
          <button
            @click="openModal('Website Development & Maintenance - Integration')"
            class="bg-black hover:bg-primary text-white font-poppins font-medium text-[13px] sm:text-[14px] px-8 py-3.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105 active:scale-95 cursor-pointer btn-slide-in"
          >
            i'm interested
          </button>
        </div>
        <!-- Image -->
        <div class="w-full flex justify-center order-1 lg:order-2">
          <img
            :src="integrationImg"
            alt="Website Integration CMS"
            class="w-full max-w-[650px] h-auto object-cover rounded-[2rem] shadow-sm hover:-translate-y-1 transition-transform duration-500 ease-out"
            loading="lazy"
          />
        </div>
      </div>
    </section>

    <!-- Section 4: Search Engine Optimisation (SEO) -->
    <section id="seo" class="mx-auto lg:w-[95%] max-w-[1600px] px-6 sm:px-8 lg:px-12 py-12 lg:py-16 border-t border-neutral-200/60">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <!-- Image -->
        <div class="w-full flex justify-center order-1">
          <img
            :src="seoImg"
            alt="Search Engine Optimisation SEO"
            class="w-full max-w-[650px] h-auto object-cover rounded-[2rem] shadow-sm hover:-translate-y-1 transition-transform duration-500 ease-out"
            loading="lazy"
          />
        </div>
        <!-- Content -->
        <div class="flex flex-col items-start text-left order-2">
          <h2
            v-motion
            :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }"
            :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }"
            class="font-poppins text-3xl sm:text-4xl lg:text-[42px] font-medium text-neutral-900 mb-6 tracking-tight"
          >
            4. Search Engine Optimisation (SEO)
          </h2>
          <p class="font-poppins text-neutral-700 text-base sm:text-lg mb-8 leading-relaxed">
            Enhance your organic ranking and visibility with our structured on-page and technical SEO strategies designed to bring qualified traffic directly to your website.
          </p>
          <ul class="space-y-5 mb-10 w-full">
            <li class="flex items-start gap-4">
              <div class="mt-1 bg-primary rounded-full p-1 text-white shrink-0">
                <Check class="w-4 h-4 stroke-[3]" />
              </div>
              <p class="font-poppins text-neutral-800 text-base sm:text-lg leading-relaxed font-normal">
                <strong>Technical SEO audit &amp; on-page fixes</strong> for site speed, structured data, indexability, and clean mobile responsiveness.
              </p>
            </li>
            <li class="flex items-start gap-4">
              <div class="mt-1 bg-primary rounded-full p-1 text-white shrink-0">
                <Check class="w-4 h-4 stroke-[3]" />
              </div>
              <p class="font-poppins text-neutral-800 text-base sm:text-lg leading-relaxed font-normal">
                <strong>Keyword research and content strategy</strong> that attracts high-intent visitors and matches search engine ranking requirements.
              </p>
            </li>
            <li class="flex items-start gap-4">
              <div class="mt-1 bg-primary rounded-full p-1 text-white shrink-0">
                <Check class="w-4 h-4 stroke-[3]" />
              </div>
              <p class="font-poppins text-neutral-800 text-base sm:text-lg leading-relaxed font-normal">
                <strong>Continuous monitoring and ranking improvements</strong> to maintain sustainable organic growth and authority.
              </p>
            </li>
          </ul>
          <button
            @click="openModal('Website Development & Maintenance - SEO')"
            class="bg-black hover:bg-primary text-white font-poppins font-semibold text-[13px] sm:text-[14px] px-8 py-3.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105 active:scale-95 cursor-pointer btn-slide-in"
          >
            i'm interested
          </button>
        </div>
      </div>
    </section>

    <!-- Section 5: Analytics & Performance Tracking -->
    <section id="analytics" class="mx-auto lg:w-[95%] max-w-[1600px] px-6 sm:px-8 lg:px-12 py-12 lg:py-16 border-t border-neutral-200/60">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <!-- Content -->
        <div class="flex flex-col items-start text-left order-2 lg:order-1">
          <h2
            v-motion
            :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }"
            :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }"
            class="font-poppins text-3xl sm:text-4xl lg:text-[42px] font-medium text-neutral-900 mb-6 tracking-tight"
          >
            5. Analytics &amp; Performance Tracking
          </h2>
          <p class="font-poppins text-neutral-700 text-base sm:text-lg mb-8 leading-relaxed">
            Gain transparent insight into how visitors interact with your site. We configure accurate tracking and analytics dashboards so you can measure ROI and make informed decisions.
          </p>
          <ul class="space-y-5 mb-10 w-full">
            <li class="flex items-start gap-4">
              <div class="mt-1 bg-primary rounded-full p-1 text-white shrink-0">
                <Check class="w-4 h-4 stroke-[3]" />
              </div>
              <p class="font-poppins text-neutral-800 text-base sm:text-lg leading-relaxed font-normal">
                <strong>Real-time tracking of visitor traffic &amp; behavior</strong> to measure accurate user engagement via Google Analytics and dashboard tools.
              </p>
            </li>
            <li class="flex items-start gap-4">
              <div class="mt-1 bg-primary rounded-full p-1 text-white shrink-0">
                <Check class="w-4 h-4 stroke-[3]" />
              </div>
              <p class="font-poppins text-neutral-800 text-base sm:text-lg leading-relaxed font-normal">
                <strong>Conversion and lead event setup</strong> to measure sales inquiries, form fills, and e-commerce transactions.
              </p>
            </li>
            <li class="flex items-start gap-4">
              <div class="mt-1 bg-primary rounded-full p-1 text-white shrink-0">
                <Check class="w-4 h-4 stroke-[3]" />
              </div>
              <p class="font-poppins text-neutral-800 text-base sm:text-lg leading-relaxed font-normal">
                <strong>Actionable reporting &amp; insights</strong> that highlight growth opportunities, user drop-offs, and conversion bottlenecks.
              </p>
            </li>
          </ul>
          <button
            @click="openModal('Website Development & Maintenance - Analytics')"
            class="bg-black hover:bg-primary text-white font-poppins font-semibold text-[13px] sm:text-[14px] px-8 py-3.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105 active:scale-95 cursor-pointer btn-slide-in"
          >
            i'm interested
          </button>
        </div>
        <!-- Image -->
        <div class="w-full flex justify-center order-1 lg:order-2">
          <img
            :src="analyticsImg"
            alt="Analytics and Performance Tracking"
            class="w-full max-w-[650px] h-auto object-cover rounded-[2rem] shadow-sm hover:-translate-y-1 transition-transform duration-500 ease-out"
            loading="lazy"
          />
        </div>
      </div>
    </section>

    <!-- Mid-Page Call To Action Banner -->
    <section class="mx-auto lg:w-[95%] max-w-[1600px] px-6 sm:px-8 lg:px-12 py-16 lg:py-24">
      <div class="relative w-full rounded-3xl sm:rounded-[2.5rem] overflow-hidden min-h-[380px] sm:min-h-[440px] flex items-center shadow-lg">
        <!-- Background Image -->
        <img
          :src="ctaBannerImg"
          alt="Ready to Transform Your Business's Digital Hub?"
          class="absolute inset-0 w-full h-full object-cover object-center z-0"
          loading="lazy"
        />
        <!-- Dark/Gradient Tint Overlay for readability -->
        <div class="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent z-10 w-full lg:w-[65%]"></div>

        <!-- Content Overlay -->
        <div class="relative z-20 p-8 sm:p-14 lg:p-20 max-w-2xl flex flex-col items-start">
          <span class="font-poppins text-neutral-600 text-xs sm:text-sm font-semiboldst mb-3">
            Build the Foundation for Your Brand's Growth
          </span>
          <h2
            v-motion
            :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }"
            :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }"
            class="font-poppins text-3xl sm:text-4xl lg:text-5xl font-medium text-neutral-900 leading-[1.15] tracking-tight mb-8"
          >
            Ready To Transform Your Business's Digital Hub?
          </h2>
          <button
            @click="openModal('Website Development & Maintenance - CTA')"
            class="bg-black hover:bg-primary text-white font-poppins font-semibold text-[13px] sm:text-[14px] px-10 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 cursor-pointer btn-slide-in"
          >
            i'm interested
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
          <div class="w-full bg-[#f0f9fa] rounded-4xl p-8 sm:p-10 flex flex-col items-start mt-4">
            <h3
              v-motion
              :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }"
              :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }"
              class="font-poppins text-2xl font-medium text-neutral-900 mb-4"
            >
              Still Have A Question?
            </h3>
            <p class="font-poppins text-neutral-700 text-base sm:text-lg leading-relaxed mb-8">
              If you'd like to know more about how R-E-D can help develop, maintain, and scale your website.
            </p>
            <button
              @click="openModal('Website Development & Maintenance - FAQ')"
              class="bg-black hover:bg-primary text-white font-poppins px-8 py-4 rounded-full transition-all duration-300 shadow-md active:scale-95 text-xs sm:text-[15px] font-medium cursor-pointer btn-slide-in"
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
            class="bg-[#fafafa] rounded-3xl overflow-hidden transition-all duration-300 border border-neutral-100"
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
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ArrowLeft, Check, ChevronDown } from 'lucide-vue-next';

// Image Imports
import laptopHeroBanner from '~/assets/images/r-e-d-website-development-maintenance-laptop-hero-banner.webp';
import laptopMobileHeroBanner from '~/assets/images/r-e-d-website-development-maintenance-laptop-mobile-hero-banner.webp';
import buildingImg from '~/assets/images/r-e-d-website-development-maintenance-building-image.webp';
import maintenanceImg from '~/assets/images/r-e-d-website-development-maintenance-maintenance-image.webp';
import integrationImg from '~/assets/images/r-e-d-website-development-maintenance-integration-image.webp';
import seoImg from '~/assets/images/r-e-d-website-development-maintenance-seo-image.webp';
import analyticsImg from '~/assets/images/r-e-d-website-development-maintenance-analytics-tracking-image.webp';
import ctaBannerImg from '~/assets/images/r-e-d-website-development-maintenance-cta-banner-image.webp';

const { openModal } = useModal();

const faqData = [
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary depending on scope and complexity. A custom corporate or showroom website typically takes between 4 to 8 weeks from initial discovery and wireframing through to deployment."
  },
  {
    question: "How do you structure your pricing?",
    answer: "We offer tailored packages for both initial builds and ongoing retainer maintenance based on your specific requirements, integrations, and operational goals."
  },
  {
    question: "How often do you provide performance reports?",
    answer: "We deliver detailed monthly reports tracking core metrics such as organic traffic, page load speed, search engine rankings, bounce rates, and lead conversion points."
  },
  {
    question: "Do you work with businesses in my industry?",
    answer: "Yes! We specialize in automotive dealerships, e-commerce, real estate, and B2B sectors, developing tailored digital solutions optimized for each unique market."
  },
  {
    question: "What makes your agency different?",
    answer: "We build fully bespoke, lightning-fast web applications integrated directly with your inventory and CRM systems, supported by proactive ongoing maintenance and measurable ROI."
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
