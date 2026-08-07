<template>
  <div class="w-full bg-[#f4f4f4] min-h-screen relative font-sans overflow-x-hidden pt-8">
    <div class="mx-auto lg:w-[95%] max-w-[1000px] px-8 md:px-0 lg:px-0 pb-20">
      
      <!-- Back Breadcrumb -->
      <div class="mb-6 mt-4 md:mt-8">
        <NuxtLink
          to="/"
          class="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-primary transition-colors duration-200"
        >
          <ArrowLeft class="w-4 h-4" />
          Back to Home
        </NuxtLink>
      </div>

      <!-- Content -->
      <div class="bg-white rounded-3xl p-8 md:p-12 shadow-sm text-neutral-700 font-poppins text-sm md:text-base leading-relaxed space-y-6">
        <h1 class="text-3xl md:text-4xl font-semibold text-neutral-800 mb-8">Privacy Policy</h1>
        
        <p>Last updated: {{ new Date().toLocaleDateString() }}</p>

        <h2 class="text-xl font-semibold text-neutral-800 mt-8 mb-4">1. Introduction</h2>
        <p>Welcome to R-E-D. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>

        <h2 class="text-xl font-semibold text-neutral-800 mt-8 mb-4">2. The Data We Collect About You</h2>
        <p>Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
          <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
          <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
          <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
        </ul>

        <h2 class="text-xl font-semibold text-neutral-800 mt-8 mb-4">3. How We Use Your Personal Data</h2>
        <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
          <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
          <li>Where we need to comply with a legal obligation.</li>
        </ul>

        <h2 class="text-xl font-semibold text-neutral-800 mt-8 mb-4">4. Contact Us</h2>
        <p>If you have any questions about this privacy policy or our privacy practices, please contact us via our contact page.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowLeft } from 'lucide-vue-next';

useHead({
  title: 'Privacy Policy | R-E-D',
  meta: [
    { name: 'description', content: 'Read our Privacy Policy to understand how we protect your personal data.' }
  ]
});
</script>
