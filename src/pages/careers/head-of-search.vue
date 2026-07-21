<template>
  <div class="w-full bg-[#fafafa] min-h-screen relative font-sans overflow-x-hidden pt-8">
    <Head>
      <Title>Head of Search | Careers | R-E-D</Title>
    </Head>

    <!-- Main Content Container -->
    <div class="mx-auto lg:w-[85%] max-w-[1200px] px-4 sm:px-6 lg:px-12 mb-20">

      <!-- Back Breadcrumb -->
      <div class="mb-8">
        <NuxtLink
          to="/careers"
          class="inline-flex items-center mt-4 md:mt-12 gap-2 text-sm font-medium text-neutral-500 hover:text-[#00a5c5] transition-colors duration-200"
        >
          <ArrowLeft class="w-4 h-4" />
          Back to careers
        </NuxtLink>
      </div>

      <!-- Header Section -->
      <div class="mb-10">
        <h1 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins text-4xl sm:text-5xl md:text-6xl font-semibold text-neutral-800 leading-tight mb-4">
          Head of <span class="text-[#00a5c5]">search</span>
        </h1>
        <div class="flex items-center gap-3 mb-8">
          <span class="bg-[#00a5c5] text-white text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full tracking-wide">
            Full-Time
          </span>
          <span class="bg-[#00a5c5] text-white text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full tracking-wide">
            Marketing
          </span>
        </div>
        <p class="font-poppins text-neutral-700 text-sm sm:text-base leading-relaxed">
          R-E-D is a Google and Facebook Partner servicing approximately 300 active clients. We have experienced exponential growth over the past few years and market conditions indicate continued growth in the forthcoming years. We are a dynamic South African-based growing company with aspirations of expanding our services and products on a global scale. With the future growth and expansion we foresee, we have no doubt that there is ample opportunity for individual growth.
        </p>
      </div>

      <!-- Content Sections -->
      <div class="space-y-12 text-neutral-800">

        <section>
          <h2 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins text-2xl sm:text-3xl font-semibold mb-4">About the role</h2>
          <div class="space-y-4 font-poppins text-neutral-700 text-sm sm:text-base leading-relaxed">
            <p>We are looking for a data-driven, performance-focused Head of Search to lead our agency's paid search and Google ecosystem strategy. This role will oversee all aspects of PPC (Google & Bing Ads), Google Business Profiles, Map listings, and web analytics, ensuring our clients' digital presence is optimized for visibility, efficiency, and ROI.</p>
            <p>The ideal candidate combines technical expertise with strategic thinking and leadership capability, able to manage a highly performing team while developing and executing campaigns that deliver measurable results across platforms.</p>
          </div>
        </section>

        <section>
          <h2 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins text-2xl sm:text-3xl font-semibold mb-6">Key responsibilities</h2>

          <div class="space-y-8">
            <div>
              <h3 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins text-xl font-medium mb-3">Strategic & Performance Leadership</h3>
              <ul class="list-disc pl-5 space-y-2 font-poppins text-neutral-700 text-sm sm:text-base leading-relaxed">
                <li>Lead and optimize overall paid search strategies for multiple clients, driving ROI and targeted business performance.</li>
                <li>Develop and implement best-in-class approaches for local SEO, Map listings, and Google Business Profile optimization.</li>
                <li>Oversee account structure, bidding strategies, audience targeting, and creative testing for maximum ROI.</li>
              </ul>
            </div>

            <div>
              <h3 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins text-xl font-medium mb-3">Team & Campaign Management</h3>
              <ul class="list-disc pl-5 space-y-2 font-poppins text-neutral-700 text-sm sm:text-base leading-relaxed">
                <li>Manage and mentor a team of paid search specialists and analysts.</li>
                <li>Oversee the setup, tracking, and optimization of campaigns across search, display, YouTube, and shopping formats.</li>
                <li>Implement systems for campaign reviews, performance tracking, and improvement cycles.</li>
              </ul>
            </div>

            <div>
              <h3 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins text-xl font-medium mb-3">Analytics & Reporting</h3>
              <ul class="list-disc pl-5 space-y-2 font-poppins text-neutral-700 text-sm sm:text-base leading-relaxed">
                <li>Lead the setup, configuration, and optimization of Google Analytics (GA4) and Google Search Console for client sites.</li>
                <li>Define and monitor KPIs, building dashboards and custom reports to track performance.</li>
                <li>Translate complex data into actionable insights for clients and internal teams.</li>
              </ul>
            </div>

            <div>
              <h3 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins text-xl font-medium mb-3">Technical Oversight & Tools</h3>
              <ul class="list-disc pl-5 space-y-2 font-poppins text-neutral-700 text-sm sm:text-base leading-relaxed">
                <li>Ensure proper tagging, tracking, and integration setup across all Google platforms.</li>
                <li>Stay current with platform updates, algorithm changes, and industry best practices.</li>
                <li>Manage API connections, data studio (Looker Studio) reporting, and CRM integrations to ensure accurate tracking.</li>
              </ul>
            </div>

            <div>
              <h3 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins text-xl font-medium mb-3">Client Support & Collaboration</h3>
              <ul class="list-disc pl-5 space-y-2 font-poppins text-neutral-700 text-sm sm:text-base leading-relaxed">
                <li>Act as the senior point of contact for performance strategy and analytics conversations with clients.</li>
                <li>Present performance reviews, insights, and recommendations clearly and confidently.</li>
                <li>Collaborate closely with SEO, web development, and social media teams for holistic marketing integration.</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins text-2xl sm:text-3xl font-semibold mb-4">What we're looking for</h2>
          <ul class="list-disc pl-5 space-y-2 font-poppins text-neutral-700 text-sm sm:text-base leading-relaxed">
            <li>Expert-level knowledge of Google Ads, GA4, Google Business Profiles, and Google Search Console.</li>
            <li>Performance-driven mindset with a track record of scaling and optimizing high-ROI campaigns.</li>
            <li>Proficiency in tracking implementation and data analysis (GTM, Looker Studio, etc.).</li>
            <li>Strong leadership skills with experience managing and developing a team.</li>
            <li>Excellent communication skills, capable of translating complex data into clear strategic narratives.</li>
            <li>Deep understanding of search intent, bidding strategies, and local SEO dynamics.</li>
          </ul>
        </section>

        <section>
          <h2 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins text-2xl sm:text-3xl font-semibold mb-4">Required Qualifications / Experience</h2>
          <ul class="list-disc pl-5 space-y-2 font-poppins text-neutral-700 text-sm sm:text-base leading-relaxed">
            <li>Bachelor's degree in Digital Marketing, Business, Data Analytics, or related field.</li>
            <li>5+ years of hands-on experience in paid search and analytics, with at least 2 years in a leadership or senior role.</li>
            <li>Google Ads and Google Analytics certifications.</li>
          </ul>
        </section>

        <section>
          <h2 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins text-2xl sm:text-3xl font-semibold mb-4">Key Performance Indicators</h2>
          <ul class="list-disc pl-5 space-y-2 font-poppins text-neutral-700 text-sm sm:text-base leading-relaxed">
            <li>Campaign ROI, CPA, CTR, and conversion rate improvements.</li>
            <li>Client satisfaction and retention on paid search accounts.</li>
            <li>Accuracy and insightfulness of reporting and analytics.</li>
            <li>Quality and completeness of tagging, tracking, and platform setup.</li>
            <li>Local SEO visibility (e.g., map pack presence, GBP completeness).</li>
            <li>Team efficiency, knowledge development, and performance.</li>
          </ul>
        </section>

        <section>
          <h2 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins text-2xl sm:text-3xl font-semibold mb-4">Remuneration</h2>
          <p class="font-poppins text-neutral-700 text-sm sm:text-base leading-relaxed">
            Negotiable based on qualifications and experience.
          </p>
        </section>

      </div>
    </div>

    <!-- Application Form Section -->
    <div class="w-full bg-[#f2f2f2] py-20 px-4">
      <div class="mx-auto max-w-xl bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-neutral-100">
        <h2 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins text-2xl sm:text-3xl font-bold text-center text-neutral-800 mb-8">
          Apply for this role
        </h2>

        <CareerForm @success="handleSuccess" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ArrowLeft } from 'lucide-vue-next';
import CareerForm from '~/components/forms/CareerForm.vue';

const handleSuccess = (data: any) => {
  console.log('Application submitted:', data);
};
</script>
