<template>
  <div class="w-full bg-[#f4f4f4] min-h-screen relative font-sans overflow-x-hidden pt-8">
    <div class="mx-auto lg:w-[95%] max-w-[1000px] px-8 md:px-0 lg:px-0 pb-20">
      
      <!-- Back Breadcrumb & CTA -->
      <div class="mb-6 mt-4 md:mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <NuxtLink
          to="/"
          class="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-primary transition-colors duration-200"
        >
          <ArrowLeft class="w-4 h-4" />
          Back to Home
        </NuxtLink>
        
        <button 
          @click="openPrivacyPopup" 
          class="bg-primary hover:bg-[#008ba6] text-white text-[16px] font-semibold py-2.5 px-6 rounded-full transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-sm cursor-pointer"
        >
          Change your cookie settings
        </button>
      </div>

      <!-- Content -->
      <div class="bg-white rounded-3xl p-8 md:p-12 shadow-sm text-neutral-700 font-poppins text-sm md:text-base leading-relaxed space-y-6">
        <h1 class="text-3xl md:text-4xl font-semibold text-neutral-800 mb-8">Cookie Policy</h1>
        
        <p>Last updated: {{ new Date().toLocaleDateString() }}</p>

        <h2 class="text-xl font-semibold text-neutral-800 mt-8 mb-4">Introduction</h2>
        <p>Reach Engage Develop (PTY) Ltd (“we” or “us” or “our”) may use cookies, web beacons, tracking pixels, and other tracking technologies when you visit our website www.reachengagedevelop.com, including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the “Site”) to help customize the Site and improve your experience.</p>
        <p>We reserve the right to make changes to this Cookie Policy at any time and for any reason. Any changes or modifications will be effective immediately upon posting the updated content on the site, and you waive the right to receive specific notice of each such change or modification.</p>
        <p>You are encouraged to periodically review this Cookie Policy to stay informed of updates. You will be deemed to have been made aware of, will be subject to, and will be deemed to have accepted the changes in any revised Cookie Policy by your continued use of the Site after the date such revised Cookie Policy is posted.</p>

        <h2 class="text-xl font-semibold text-neutral-800 mt-8 mb-4">USE OF COOKIES</h2>
        <p>A “cookie” is a string of information which assigns you a unique identifier that we store on your computer. Your browser then provides that unique identifier to use each time you submit a query to the Site. We use cookies on the Site to, among other things, keep track of services you have used, record registration information, record your user preferences, keep you logged into the Site, facilitate purchase procedures, and track the pages you visit. Cookies help us understand how the Site is being used and improve your user experience.</p>

        <h2 class="text-xl font-semibold text-neutral-800 mt-8 mb-4">TYPES OF COOKIES</h2>
        <p>The following types of cookies may be used when you visit the Site:</p>

        <h3 class="text-lg font-semibold text-neutral-800 mt-6 mb-2">Advertising Cookies</h3>
        <p>Advertising cookies are placed on your computer by advertisers and ad servers in order to display advertisements that are most likely to be of interest to you. These cookies allow advertisers and ad servers to gather information about your visits to the Site and other websites, alternate the ads sent to a specific computer, and track how often an ad has been viewed and by whom. These cookies are linked to a computer and do not gather any personal information about you.</p>

        <h3 class="text-lg font-semibold text-neutral-800 mt-6 mb-2">Analytics Cookies</h3>
        <p>Analytics cookies monitor how users reached the Site, and how they interact with and move around once on the Site. These cookies let us know what features on the Site are working the best and what features on the Site can be improved.</p>

        <h3 class="text-lg font-semibold text-neutral-800 mt-6 mb-2">Our Cookies</h3>
        <p>Our cookies are “first-party cookies”, and can be either permanent or temporary. These are necessary cookies, without which the Site won’t work properly or be able to provide certain features and functionalities. Some of these may be manually disabled in your browser, but may affect the functionality of the Site.</p>

        <h3 class="text-lg font-semibold text-neutral-800 mt-6 mb-2">Personalization Cookies</h3>
        <p>Personalization cookies are used to recognize repeat visitors to the Site. We use these cookies to record your browsing history, the pages you have visited, and your settings and preferences each time you visit the Site.</p>

        <h3 class="text-lg font-semibold text-neutral-800 mt-6 mb-2">Security Cookies</h3>
        <p>Security cookies help identify and prevent security risks. We use these cookies to authenticate users and protect user data from unauthorized parties.</p>

        <h3 class="text-lg font-semibold text-neutral-800 mt-6 mb-2">Site Management Cookies</h3>
        <p>Site management cookies are used to maintain your identity or session on the Site so that you are not logged off unexpectedly, and any information you enter is retained from page to page. These cookies cannot be turned off individually, but you can disable all cookies in your browser.</p>

        <h3 class="text-lg font-semibold text-neutral-800 mt-6 mb-2">Third-Party Cookies</h3>
        <p>Third-party cookies may be place on your computer when you visit the Site by companies that run certain services we offer. These cookies allow the third parties to gather and track certain information about you. These cookies can be manually disabled in your browser.</p>

        <h2 class="text-xl font-semibold text-neutral-800 mt-8 mb-4">CONTROL OF COOKIES</h2>
        <p>Most browsers are set to accept cookies by default. However, you can remove or reject cookies in your browser’s settings. Please be aware that such action could affect the availability and functionality of the Site.</p>
        <p>For more information on how to control cookies, check your browser or device’s settings for how you can control or reject cookies.</p>

        <h2 class="text-xl font-semibold text-neutral-800 mt-8 mb-4">OTHER TRACKING TECHNOLOGIES</h2>
        <p>In addition to cookies, we may use web beacons, pixel tags, and other tracking technologies on the Site to help customize the Site and improve your experience. A “web beacon” or “pixel tag” is tiny object or image embedded in a web page or email. They are used to track the number of users who have visited particular pages and viewed emails, and acquire other statistical data. They collect only a limited set of data, such as a cookie number, time and date of page or email view, and a description of the page or email on which they reside. Web beacons and pixel tags cannot be declined. However, you can limit their use by controlling the cookies that interact with them.</p>

        <h2 class="text-xl font-semibold text-neutral-800 mt-8 mb-4">PRIVACY POLICY</h2>
        <p>For more information about how we use information collected by cookies and other tracking technologies, please refer to our <NuxtLink to="/privacy-policy" class="text-primary hover:underline font-medium">Privacy Policy</NuxtLink> posted on the Site. This Cookie Policy is part of and is incorporated into our Privacy Policy. By using the Site, you agree to be bound by this Cookie Policy and our Privacy Policy.</p>

        <h2 class="text-xl font-semibold text-neutral-800 mt-8 mb-4">CONTACT US</h2>
        <p>If you have questions or comments about this Cookie Policy, please contact us at:</p>
        <address class="not-italic text-neutral-700 leading-relaxed mt-4">
          <strong>Reach engage Develop (PTY) Ltd</strong><br />
          7 Cedar Office Estate, Stinkwood Cl, Witkoppen, Sandton, 2191<br />
          Johannesburg, Gauteng<br />
          010 025 3560<br />
          <a href="mailto:chat@red-solutions.co.za" class="text-primary hover:underline">chat@red-solutions.co.za</a>
        </address>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useState } from '#app';
import { ArrowLeft } from 'lucide-vue-next';

const isPrivacyPopupOpen = useState('isPrivacyPopupOpen', () => false);

const openPrivacyPopup = () => {
  isPrivacyPopupOpen.value = true;
};

useHead({
  title: 'Cookie Policy | R-E-D',
  meta: [
    { name: 'description', content: 'Read our Cookie Policy to understand how we use cookies.' }
  ]
});
</script>
