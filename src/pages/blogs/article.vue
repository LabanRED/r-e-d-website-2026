<template>
  <div class="w-full bg-[#fafafa] min-h-screen relative font-sans overflow-x-hidden pt-8 pb-20">
    <Head>
      <Title>3 Winning Social Media Strategies | R-E-D</Title>
    </Head>

    <!-- Back Breadcrumb -->
    <div class="mx-auto lg:w-[95%] max-w-[1600px] px-6 sm:px-8 lg:px-12 mb-8">
      <NuxtLink
        to="/blogs"
        class="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-[#00a5c5] transition-colors duration-200"
      >
        <ArrowLeft class="w-4 h-4" />
        Back to blogs
      </NuxtLink>
    </div>

    <!-- Article Header -->
    <article class="max-w-[1600px] mx-auto px-6 sm:px-8">
      <header class="mb-10 text-center">
        <h1 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="w-full md:w-[1100px] lg:w-[1100px] mx-auto font-poppins text-4xl sm:text-5xl lg:text-6xl font-medium text-neutral-900 leading-tight tracking-tight mb-6">
          3 Winning Social Media Strategies For South African Car Dealers
        </h1>
      </header>

      <!-- Article Hero Image -->
      <div class="w-full bg-neutral-100 rounded-[2rem] overflow-hidden flex items-center justify-center mb-16 relative shadow-sm">
        <picture class="w-full">
          <source media="(max-width: 768px)" :srcset="heroMobile" />
          <img
            :src="heroDesktop"
            alt="3 Winning Social Media Strategies Hero"
            class="w-full h-auto object-cover"
            fetchpriority="high"
            loading="eager"
          />
        </picture>
      </div>

      <!-- Two Column Layout for Body -->
      <div class="flex flex-col lg:flex-row gap-12">
        <!-- Left Column: Author & Meta Info -->
        <aside class="w-full lg:w-[250px] flex-shrink-0">
          <div class="sticky top-8">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                <img loading="lazy" :src="redWhiteLogo" alt="R-E-D" class="w-6 h-6 object-contain" />
              </div>
              <div>
                <p class="font-poppins text-xs font-semibold text-neutral-900 uppercase">Author: R-E-D</p>
                <p class="font-poppins text-xs text-neutral-500">19 May 2021</p>
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
              Many car shoppers are now turning to social media to begin their buying journeys. There are vast amounts of information customers can gather from social media, from basic contact information to recommendations.
            </p>
            <p class="mb-10">
              It is evident that social media is playing an increasingly important role in the purchase decisions of car buyers, and dealerships must respond to this shift. With recommendations and instant availability of information massively impacting car purchases, dealerships can leverage social media to improve their sales figures.
            </p>

            <h2 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="text-xl sm:text-2xl font-medium text-[#00a5c5] mt-12 mb-6">
              1. Facebook Advertising for Your Dealership
            </h2>
            <p class="mb-6">
              Facebook is the largest social media platform in the world (over 2 billion users) and in South Africa (over 29 million users), so it's a good bet that your target audience are on Facebook. Facebook has extremely accurate targeting options which would allow you to dive into the timelines of your target audience.
            </p>
            <p class="mb-6">
              Moreover, Facebook has several different advertising objectives and formats to best suite your dealerships current objectives. Objectives range from; lead generation, awareness, website traffic and much more. The advertising formats include; videos, images, slideshows and interactive dynamic layouts which can be delivered in single posts or carousels.
            </p>
            <p class="mb-10">
              This is only scratching the surface of what Facebook can do for your dealership, so it might be a good idea to look at Facebook advertising to leverage social media and increase your dealerships sales.
            </p>

            <!-- Mid Article Image -->
            <div class="w-full rounded-[2rem] overflow-hidden flex items-center justify-center my-12 relative shadow-sm">
              <picture class="w-full">
                <source media="(max-width: 768px)" :srcset="midBannerMobile" />
                <img loading="lazy" :src="midBannerDesktop"
                  alt="Social Media Strategy"
                  class="w-full h-auto object-cover"
                />
              </picture>
            </div>

            <h2 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="text-xl sm:text-2xl font-medium text-[#00a5c5] mt-12 mb-6">
              2. Instagram Stories for Your Dealership
            </h2>
            <p class="mb-6">
              With 6.8 Million users in South Africa, Instagram is a social media titan. Instagram has a relatively young user base and has superseded Snap Chat as the king of stories. Stories were originally developed by Snap Chat and are short videos or photos that last a maximum of 24 hours.
            </p>
            <p class="mb-6">
              Instagram's stories are a great place for your dealership to connect with its customers by posting stories of staff, happy customers or promotions. Using this strategy will give your dealership a more personal and trusting image.
            </p>
            <p class="mb-10">
              Instagram has enabled a function called highlights, which are albums where selected stories are kept after the 24-hour period. This could be a great way to display your inventory to your Instagram followers.
            </p>

            <h2 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="text-xl sm:text-2xl font-medium text-[#00a5c5] mt-12 mb-6">
              3. YouTube Videos for Your Dealership
            </h2>
            <p class="mb-10">
              YouTube is the go-to platform for reviews and recommendations from sources other than the buyer's family and friends. Therefore, YouTube is a great place to capture potential customers who are actively looking for information on which car to purchase. Your dealership could post comparison videos on vehicles you are currently stocking, or other kinds of information packed videos. You are also able to capture this information seeking audience through targeted advertisements on YouTube and Google.
            </p>

            <hr class="border-neutral-200 my-8" />

            <p class="text-[#00a5c5] font-medium">
              Social media marketing for car dealerships in South Africa can be challenging, so if you are ever looking for a partner to help you through the process don't hesitate to give R-E-D a call!
            </p>
          </div>

          <!-- Share Section -->
          <div class="border-t border-b border-neutral-200 py-8 mb-20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span class="font-poppins font-semibold text-neutral-800">Share this article:</span>
            <div class="flex items-center gap-4">
              <button class="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-black hover:text-[#00a5c5] transition-colors font-poppins font-medium lowercase cursor-pointer">
                <Facebook class="w-5 h-5" />
              </button>
              <button class="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-black hover:text-[#00a5c5] transition-colors font-poppins font-medium lowercase cursor-pointer">
                <Twitter class="w-5 h-5" />
              </button>
              <button class="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-black hover:text-[#00a5c5] transition-colors font-poppins font-medium lowercase cursor-pointer">
                <Linkedin class="w-5 h-5" />
              </button>
              <button class="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-black hover:text-[#00a5c5] transition-colors font-poppins font-medium lowercase cursor-pointer">
                <Link2 class="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>

    <!-- Bottom CTA Banner -->
    <section class="px-6 sm:px-8 lg:px-12 max-w-[1600px] mx-auto">
      <div class="w-full rounded-[2rem] bg-gradient-to-r from-[#e6eef5] to-[#cddbea] py-20 px-6 flex flex-col items-center text-center">
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
          class="bg-black text-white font-poppins font-medium px-8 py-4 rounded-full transition-all duration-300 shadow-md active:scale-95 text-sm lowercase cursor-pointer btn-slide-in"
        >
          schedule a meeting today
        </button>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { ArrowLeft, Facebook, Twitter, Linkedin, Link2 } from 'lucide-vue-next';
import redLogo from '~/assets/images/r-e-d-dark-logo.svg';
import redWhiteLogo from '~/assets/images/r-e-d-white-logo.svg';
import heroDesktop from '~/assets/images/article-3-winning-socila-media-strategies-hero-desktop-banner.webp';
import heroMobile from '~/assets/images/article-3-winning-socila-media-strategies-hero-mobile-banner.webp';
import midBannerDesktop from '~/assets/images/mid-article-social-media-strategy-banner-desktop-banner.webp';
import midBannerMobile from '~/assets/images/mid-article-social-media-strategy-banner-mobile-banner.webp';

const { openModal } = useModal();
</script>
