<template>
  <div class="w-full bg-[#fafafa] min-h-screen relative font-sans overflow-x-hidden pt-8">
    <Head>
      <Title>Digital Designer | Careers | R-E-D</Title>
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
          Digital <span class="text-[#00a5c5]">Designer</span>
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
          R-E-D is a Google and Facebook Partner servicing approximately 500 active clients. We have experienced substantial growth over the past few years and market conditions indicate continued growth in the forthcoming years. We are a proudly South African home-grown company with aspirations of expanding our services and products on a global scale. With the future growth and expansion we foresee, we have no doubt that there will be plenty opportunity for individual growth.
        </p>
      </div>

      <!-- Content Sections -->
      <div class="space-y-12 text-neutral-800">

        <section>
          <h2 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins text-2xl sm:text-3xl font-semibold mb-4">About the role</h2>
          <div class="space-y-4 font-poppins text-neutral-700 text-sm sm:text-base leading-relaxed">
            <p>This vacancy is for a Mid-Weight Digital Designer. As a Digital Designer, you will be responsible for designing still and animated images for use across digital and print.</p>
          </div>
        </section>

        <section>
          <h2 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins text-2xl sm:text-3xl font-semibold mb-6">Key responsibilities</h2>
          <ul class="list-disc pl-5 space-y-2 font-poppins text-neutral-700 text-sm sm:text-base leading-relaxed">
            <li>Creating stills or animated pieces in accordance with the brief and CI</li>
            <li>Artwork used for Social Media, Google Ads, Websites, Emailers, Flyers, Print Media</li>
            <li>Maintaining asset libraries</li>
            <li>Ensuring all activities are tracked and billed accordingly</li>
          </ul>
        </section>

        <section>
          <h2 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins text-2xl sm:text-3xl font-semibold mb-4">What we're looking for</h2>
          <ul class="list-disc pl-5 space-y-2 font-poppins text-neutral-700 text-sm sm:text-base leading-relaxed">
            <li>Attention to detail</li>
            <li>Photoshop and Illustrator</li>
            <li>Proficiency in Microsoft Office 365 Suite</li>
            <li>Ability to work under pressure - average of 2 briefs per hour</li>
            <li>Time management</li>
          </ul>
        </section>

        <section>
          <h2 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins text-2xl sm:text-3xl font-semibold mb-4">Required Qualifications / Experience</h2>
          <ul class="list-disc pl-5 space-y-2 font-poppins text-neutral-700 text-sm sm:text-base leading-relaxed">
            <li>Minimum of 2 years' experience in digital design</li>
            <li>Experience in Adobe Creative Cloud, particularly Photoshop and Illustrator</li>
          </ul>
        </section>

        <section>
          <h2 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins text-2xl sm:text-3xl font-semibold mb-4">Preferred Qualifications</h2>
          <ul class="list-disc pl-5 space-y-2 font-poppins text-neutral-700 text-sm sm:text-base leading-relaxed">
            <li>Tertiary Qualification in Design or Marketing</li>
          </ul>
        </section>

        <section>
          <h2 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins text-2xl sm:text-3xl font-semibold mb-4">Remuneration</h2>
          <p class="font-poppins text-neutral-700 text-sm sm:text-base leading-relaxed">
            Negotiable based on qualifications and experience
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
