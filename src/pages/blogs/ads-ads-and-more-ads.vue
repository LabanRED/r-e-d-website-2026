<template>
  <div class="w-full bg-[#fafafa] min-h-screen relative font-sans overflow-x-hidden pt-8 pb-20">
    <Head>
      <Title>Ads, ads and more ads | R-E-D</Title>
    </Head>

    <!-- Back Breadcrumb -->
    <div class="mx-auto lg:w-[95%] max-w-[1600px] px-6 sm:px-8 lg:px-12 mb-8">
      <NuxtLink
        to="/blogs"
        class="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-primary transition-colors duration-200"
      >
        <ArrowLeft class="w-4 h-4" />
        Back to blogs
      </NuxtLink>
    </div>

    <!-- Article Header -->
    <article class="max-w-[1600px] mx-auto px-6 sm:px-8">
      <header class="mb-10 text-center">
        <h1 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="w-full md:w-275 lg:w-275 mx-auto font-poppins text-4xl sm:text-5xl lg:text-6xl font-medium text-neutral-900 leading-tight tracking-tight mb-6">
          Ads, ads and more ads
        </h1>
      </header>

      <div class="flex flex-col lg:flex-row gap-12 mt-16">
        <!-- Left Column: Author & Meta Info -->
        <aside class="w-full lg:w-62.5 flex-shrink-0">
          <div class="sticky top-8">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                <img loading="lazy" :src="redWhiteLogo" alt="R-E-D" class="w-6 h-6 object-contain" />
              </div>
              <div>
                <p class="font-poppins text-xs font-semibold text-neutral-900 uppercase">Author: R-E-D</p>
                <p class="font-poppins text-xs text-neutral-500">2023</p>
              </div>
            </div>
            <hr class="border-neutral-200 mb-6" />
            <div>
              <p class="font-poppins text-xs font-semibold text-neutral-900 uppercase">Reading time</p>
              <p class="font-poppins text-xs text-neutral-500">5 Minutes</p>
            </div>
          </div>
        </aside>

        <!-- Right Column: Article Content -->
        <div class="flex-1 min-w-0">
          <div class="prose prose-lg sm:prose-xl prose-neutral max-w-none font-poppins text-neutral-700 leading-relaxed mb-16 text-base sm:text-lg">
            <p class="mb-6">
              Facebook ads work best when you're focused on what you want to achieve. Effect campaigns naturally link to your business goals. So, before you create an ad, consider what your business goals are. What do you want people to do when they see your ad?
            </p>
            <p class="mb-6">
              For example, do you want them to visit your website or your local shop? Do you want to reach these goals?
            </p>
            <p class="mb-10">
              Don't worry, there's a Facebook ad to match your exact goal... and then some!
            </p>

            <h2 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="text-xl sm:text-2xl font-medium text-neutral-900 mt-12 mb-6">
              Awareness:
            </h2>
            <p class="mb-6">
              These are objectives that generate interest in your product or service. Increasing brand awareness is about telling people what makes your business valuable.
            </p>
            <p class="mb-10">
              What do you want to achieve through awareness?
            </p>

            <!-- Awareness blocks -->
            <div class="flex flex-col gap-6 mb-12">
                <div v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="bg-[#f0f4f8] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-8 shadow-sm">
                    <img loading="lazy" :src="brandAwarenessImg" alt="Brand Awareness" class="w-full sm:w-1/3 object-contain rounded-xl mix-blend-multiply" />
                    <div>
                        <h3 class="text-lg font-semibold text-neutral-900 mb-2">Brand Awareness</h3>
                        <p class="text-base text-neutral-700">Tell people what makes your business valuable.</p>
                    </div>
                </div>
                <div v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="bg-[#f0f4f8] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row-reverse items-center gap-8 shadow-sm">
                    <img loading="lazy" :src="reachImg" alt="Reach" class="w-full sm:w-1/3 object-contain rounded-xl mix-blend-multiply" />
                    <div>
                        <h3 class="text-lg font-semibold text-neutral-900 mb-2">Reach</h3>
                        <p class="text-base text-neutral-700">Show your ad to the maximum number of people in your audience.</p>
                    </div>
                </div>
            </div>

            <h2 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="text-xl sm:text-2xl font-medium text-neutral-900 mt-12 mb-6">
              Considerations:
            </h2>
            <p class="mb-6">
              These are objectives that get people to start thinking about your business and look for more information about it.
            </p>
            <p class="mb-10">
              What objectives fall under the consideration umbrella? Here are a few to start thinking about:
            </p>

            <!-- Considerations blocks -->
            <div class="flex flex-col gap-6 mb-12">
                <div v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="bg-[#f0f4f8] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-8 shadow-sm">
                    <img loading="lazy" :src="trafficImg" alt="Traffic" class="w-full sm:w-1/3 object-contain rounded-xl mix-blend-multiply" />
                    <div>
                        <h3 class="text-lg font-semibold text-neutral-900 mb-2">Traffic</h3>
                        <p class="text-base text-neutral-700">Send people to a destination, like a website, app or Facebook event, or let them tap to call you.</p>
                    </div>
                </div>
                
                <div v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="bg-[#f0f4f8] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row-reverse items-center gap-8 shadow-sm">
                    <img loading="lazy" :src="engagementImg" alt="Engagement" class="w-full sm:w-1/3 object-contain rounded-xl mix-blend-multiply" />
                    <div>
                        <h3 class="text-lg font-semibold text-neutral-900 mb-2">Engagement</h3>
                        <p class="text-base text-neutral-700">Get more page likes, event responses, or post reacts, comments or shares.</p>
                    </div>
                </div>

                <div v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="bg-[#f0f4f8] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-8 shadow-sm">
                    <img loading="lazy" :src="appInstallsImg" alt="App Installs" class="w-full sm:w-1/3 object-contain rounded-xl mix-blend-multiply" />
                    <div>
                        <h3 class="text-lg font-semibold text-neutral-900 mb-2">App Installs</h3>
                        <p class="text-base text-neutral-700">Send people to the store where they can download your business's app.</p>
                    </div>
                </div>

                <!-- Using Engagement image as fallback for Video Views -->
                <div v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="bg-[#f0f4f8] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row-reverse items-center gap-8 shadow-sm">
                    <img loading="lazy" :src="engagementImg" alt="Video Views" class="w-full sm:w-1/3 object-contain rounded-xl mix-blend-multiply" />
                    <div>
                        <h3 class="text-lg font-semibold text-neutral-900 mb-2">Video Views</h3>
                        <p class="text-base text-neutral-700">Promote videos that show behind-the-scenes footage, product launches or customer stories to raise awareness about your brand.</p>
                    </div>
                </div>

                <div v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="bg-[#f0f4f8] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-8 shadow-sm">
                    <img loading="lazy" :src="leadGenImg" alt="Lead Generation" class="w-full sm:w-1/3 object-contain rounded-xl mix-blend-multiply" />
                    <div>
                        <h3 class="text-lg font-semibold text-neutral-900 mb-2">Lead Generation</h3>
                        <p class="text-base text-neutral-700">Collect leads for your business. Create ads that collect info from people interested in your product, such as sign-ups for newsletters.</p>
                    </div>
                </div>

                <div v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="bg-[#f0f4f8] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row-reverse items-center gap-8 shadow-sm">
                    <img loading="lazy" :src="messagesImg" alt="Messages" class="w-full sm:w-1/3 object-contain rounded-xl mix-blend-multiply" />
                    <div>
                        <h3 class="text-lg font-semibold text-neutral-900 mb-2">Messages</h3>
                        <p class="text-base text-neutral-700">Get more people to have conversations with your business in Messenger, WhatsApp or Instagram Direct to complete purchases, answer questions or offer support.</p>
                    </div>
                </div>
            </div>

            <h2 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="text-xl sm:text-2xl font-medium text-neutral-900 mt-12 mb-6">
              Conversions:
            </h2>
            <p class="mb-6">
              Objectives that encourage people interested in your business to buy or use your product or service. What do they cover?
            </p>

            <!-- Conversions blocks -->
            <div class="flex flex-col gap-6 mb-12">
                <div v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="bg-[#f0f4f8] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-8 shadow-sm">
                    <img loading="lazy" :src="conversionsImg" alt="Conversions" class="w-full sm:w-1/3 object-contain rounded-xl mix-blend-multiply" />
                    <div>
                        <h3 class="text-lg font-semibold text-neutral-900 mb-2">Conversions</h3>
                        <p class="text-base text-neutral-700">Encourage people to take a specific action on your business's site, such as having them add items to a cart, download your app, register for your site, or make a purchase.</p>
                    </div>
                </div>

                <div v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="bg-[#f0f4f8] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row-reverse items-center gap-8 shadow-sm">
                    <img loading="lazy" :src="catalogImg" alt="Catalog Sales" class="w-full sm:w-1/3 object-contain rounded-xl mix-blend-multiply" />
                    <div>
                        <h3 class="text-lg font-semibold text-neutral-900 mb-2">Catalog Sales</h3>
                        <p class="text-base text-neutral-700">Show products from your ecommerce store's catalog to generate sales.</p>
                    </div>
                </div>

                <div v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="bg-[#f0f4f8] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-8 shadow-sm">
                    <img loading="lazy" :src="storeTrafficImg" alt="Store Traffic" class="w-full sm:w-1/3 object-contain rounded-xl mix-blend-multiply" />
                    <div>
                        <h3 class="text-lg font-semibold text-neutral-900 mb-2">Store Traffic</h3>
                        <p class="text-base text-neutral-700">Promote your brick-and-mortar business locations to people that are nearby.</p>
                    </div>
                </div>
            </div>
            
            <p class="mb-10">
              It's amazing right? There's literally an ad for every business goal you may have. We bet right now, you are ready to get your ads going, well what are you waiting for? Get your social media on!
            </p>

          </div>

          <!-- Share Section -->
          <div class="border-t border-neutral-300 pt-8 mb-20 flex flex-col items-start gap-4">
            <span class="font-poppins font-semibold text-neutral-900 text-sm sm:text-base">Share this article:</span>
            <div class="flex items-center gap-3 sm:gap-4 flex-wrap">
              <button
                v-for="(item, index) in sharePlatforms"
                :key="index"
                @click="shareTo(item.platform)"
                :aria-label="`Share on ${item.name}`"
                :title="`Share on ${item.name}`"
                class="hover:scale-110 hover:opacity-80 active:scale-95 transition-all duration-300 cursor-pointer flex items-center justify-center"
              >
                <img :src="item.icon" :alt="`Share on ${item.name}`" class="w-10 h-10 sm:w-11 sm:h-11 object-contain" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>

    <!-- Bottom CTA Banner -->
    <section class="px-6 sm:px-8 lg:px-12 max-w-[1600px] mx-auto">
      <div class="w-full rounded-4xl bg-gradient-to-r from-[#e6eef5] to-[#cddbea] py-20 px-6 flex flex-col items-center text-center">
        <img loading="lazy" :src="redLogo"
          alt="R-E-D Logo"
          class="h-10 sm:h-12 object-contain mb-8"
        />
        <h3 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins text-2xl sm:text-4xl font-semibold text-neutral-800 mb-6 leading-tight max-w-2xl">
          Ready to establish your digital presences?
        </h3>
        <p class="font-poppins text-neutral-600 text-base max-w-xl mb-10 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu ex ultricies, ornare velit vel, rhoncus metus.
        </p>
        <button
          @click="openModal"
          class="bg-black text-white font-poppins font-medium px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:scale-105 active:scale-95 lowercase cursor-pointer btn-slide-in text-xs sm:text-base"
        >
          schedule a meeting today
        </button>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { ArrowLeft } from 'lucide-vue-next';
import redLogo from '~/assets/images/r-e-d-dark-logo.svg';
import redWhiteLogo from '~/assets/images/r-e-d-white-logo.svg';

import brandAwarenessImg from '~/assets/images/Brand_Awareness_Compressed.webp';
import reachImg from '~/assets/images/Reach_Compressed.webp';
import trafficImg from '~/assets/images/Traffic_Compressed.webp';
import engagementImg from '~/assets/images/Engagement_Compressed.webp';
import appInstallsImg from '~/assets/images/App_Installs_Compressed.webp';
import leadGenImg from '~/assets/images/Lead_Generation_Compressed.webp';
import messagesImg from '~/assets/images/Messages_Compressed.webp';
import conversionsImg from '~/assets/images/Lead_Conversions_Compressed.webp';
import catalogImg from '~/assets/images/Catalog_Compressed.webp';
import storeTrafficImg from '~/assets/images/Store_Traffic_Compressed.webp';

import fbShareIcon from '~/assets/images/facebook-share-article-icon.svg';
import linkedinShareIcon from '~/assets/images/linkedin-share-article-icon.svg';
import xShareIcon from '~/assets/images/x-twitter-share-article-icon.svg';
import whatsappShareIcon from '~/assets/images/whatsapp-share-article-icon.svg';
import emailShareIcon from '~/assets/images/email-share-article-icon.svg';

const { openModal } = useModal();

const sharePlatforms = [
  { name: 'Facebook', platform: 'facebook', icon: fbShareIcon },
  { name: 'LinkedIn', platform: 'linkedin', icon: linkedinShareIcon },
  { name: 'X', platform: 'twitter', icon: xShareIcon },
  { name: 'WhatsApp', platform: 'whatsapp', icon: whatsappShareIcon },
  { name: 'Email', platform: 'email', icon: emailShareIcon },
];

const shareTo = (platform: string) => {
  const url = typeof window !== 'undefined' ? window.location.href : 'https://r-e-d.co.za/blogs/ads-ads-and-more-ads';
  const title = typeof document !== 'undefined' && document.title ? document.title : 'Ads, ads and more ads';
  
  const summaryText = "Facebook ads work best when you're focused on what you want to achieve.";
  const quoteText = `"${title}" — ${summaryText}`;

  let shareLink = '';
  switch (platform) {
    case 'facebook':
      shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(quoteText)}`;
      break;
    case 'linkedin':
      shareLink = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(summaryText)}&source=${encodeURIComponent('R-E-D')}`;
      break;
    case 'twitter':
      shareLink = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(quoteText)}`;
      break;
    case 'whatsapp':
      shareLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(quoteText + ' ' + url)}`;
      break;
    case 'email':
      shareLink = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(summaryText + '\n\nRead more at: ' + url)}`;
      break;
  }
  
  if (shareLink && typeof window !== 'undefined') {
    window.open(shareLink, '_blank', 'noopener,noreferrer');
  }
};

useHead({
  title: 'Ads, ads and more ads | R-E-D',
  meta: [
    { name: 'description', content: "Facebook ads work best when you're focused on what you want to achieve." }
  ]
});
</script>
