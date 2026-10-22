<template>
  <div class="w-full bg-[#fafafa] min-h-screen relative font-sans overflow-x-hidden pt-8 pb-20">
    <Head>
      <Title>Innovative and powerful ways to tell your business story! | R-E-D</Title>
      <Meta
        name="description"
        content="With so many active users on Facebook and Instagram, learn which Ad Type to use to reach new customers and reengage with existing customers."
      />
    </Head>

    <!-- Back Breadcrumb -->
    <div class="mx-auto lg:w-[95%] max-w-[1600px] px-6 sm:px-8 lg:px-12 mb-8">
      <NuxtLink
        to="/blogs"
        class="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-primary transition-colors duration-200"
      >
        <ArrowLeft class="w-4 h-4" />
        back to blogs
      </NuxtLink>
    </div>

    <!-- Article Header -->
    <article class="max-w-[1600px] mx-auto px-6 sm:px-8">
      <header class="mb-10 text-center max-w-[1200px] mx-auto">
        <h1
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          class="font-poppins text-3xl sm:text-5xl lg:text-6xl font-medium text-neutral-900 leading-[1.18] tracking-tight mb-6"
        >
          Innovative And Powerful Ways To Tell Your Business Story!
        </h1>
        <p
          class="font-poppins text-neutral-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-4xl mx-auto"
        >
          With so many active users on Facebook and Instagram, it may be difficult for you to decide which Ad Type to use to reach new customers and reengage with existing customers. There are 1.6 billion people worldwide who are connected to a small business on Facebook, so you need to get yours on the map! Our team breaks down each Ad type to help you understand which is the best for your business.
        </p>
      </header>

      <!-- Article Hero Banner Image -->
      <div class="w-full rounded-[2rem] overflow-hidden mb-16 shadow-sm border border-neutral-200/40">
        <picture class="w-full">
          <source media="(max-width: 768px)" :srcset="heroMobileBanner" />
          <img
            :src="heroDesktopBanner"
            alt="Facebook Ad Types - Innovative and powerful ways to tell your business story"
            class="w-full h-auto object-cover select-none pointer-events-none block"
            fetchpriority="high"
            loading="eager"
          />
        </picture>
      </div>

      <!-- Two Column Layout for Body -->
      <div class="flex flex-col lg:flex-row gap-12 xl:gap-16">
        
        <!-- Left Column: Author & Meta Info -->
        <aside class="w-full lg:w-[250px] flex-shrink-0">
          <div class="sticky top-8">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                <img loading="lazy" :src="redWhiteLogo" alt="R-E-D" class="w-6 h-6 object-contain" />
              </div>
              <div>
                <p class="font-poppins text-xs font-semibold text-neutral-900 uppercase">Author: R-E-D</p>
                <p class="font-poppins text-xs text-neutral-500">25 March 2021</p>
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
        <div class="flex-1 min-w-0 max-w-[1050px]">
          <div class="font-poppins text-neutral-700 leading-relaxed text-base sm:text-lg">

            <!-- 1. PHOTO / IMAGE ADS SECTION -->
            <section class="mb-14">
              <!-- Alternating 2-Column Card: Media Left, Content Right -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mb-8">
                <!-- Media Card -->
                <div class="rounded-3xl overflow-hidden bg-[#8eafee] aspect-square flex items-center justify-center shadow-sm">
                  <video
                    :src="imageAdsVideo"
                    :poster="imageAdsImg"
                    autoplay
                    muted
                    loop
                    playsinline
                    class="w-full h-full object-contain"
                  />
                </div>

                <!-- Info Card -->
                <div class="bg-[#f0f4f8] rounded-3xl p-6 sm:p-8 flex flex-col justify-center shadow-sm border border-neutral-200/40">
                  <h3 class="font-poppins text-2xl sm:text-3xl font-medium text-neutral-900 mb-4">
                    Photo
                  </h3>
                  <p class="text-sm sm:text-base text-neutral-700 leading-relaxed mb-6">
                    Show your customers who you are or what you sell in one high quality picture and to the point copy.
                  </p>
                  <h4 class="font-poppins text-sm sm:text-base font-medium text-neutral-900 mb-3">
                    When Is This Your Best Option?
                  </h4>
                  <ul class="flex flex-col gap-2 text-sm sm:text-base text-neutral-700">
                    <li class="flex items-start gap-2">
                      <span class="text-neutral-500">•</span>
                      <span>You want to drive people to your website</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-neutral-500">•</span>
                      <span>You want to raise awareness of your products</span>
                    </li>
                  </ul>
                </div>
              </div>

              <!-- Top Tips for Photo Ads -->
              <div class="pt-2">
                <h3 class="font-poppins text-xl sm:text-2xl font-medium text-neutral-900 mb-4">
                  Top Tips For Photo Ads:
                </h3>
                <ol class="flex flex-col gap-3 text-sm sm:text-base text-neutral-700 list-decimal pl-5 leading-relaxed">
                  <li>
                    Make your ad feel familiar by showing people using your product rather than the product on its own. Your ad should feel native to your customers feed, amongst posts from their family and friends, making it feel a part of their social fabric.
                  </li>
                  <li>
                    Too much copy is distracting and can lead to your ad being shown to less people. So, remember: LESS TEXT IS MORE.
                  </li>
                  <li>
                    Have a single focal point.
                  </li>
                  <li>
                    Use high resolution images. You don’t need to be a professional photographer but pay attention to size and quality.
                  </li>
                  <li>
                    Experiment with different images and formats.
                  </li>
                </ol>
              </div>

              <hr class="border-neutral-200 my-12" />
            </section>

            <!-- 2. VIDEO ADS SECTION -->
            <section class="mb-14">
              <!-- Alternating 2-Column Card: Content Left, Media Right -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mb-8">
                <!-- Info Card -->
                <div class="bg-[#f0f4f8] rounded-3xl p-6 sm:p-8 flex flex-col justify-center shadow-sm border border-neutral-200/40 order-2 md:order-1">
                  <h3 class="font-poppins text-2xl sm:text-3xl font-medium text-neutral-900 mb-4">
                    Video
                  </h3>
                  <p class="text-sm sm:text-base text-neutral-700 leading-relaxed mb-4">
                    Tell your business story with sight, sound, and motion. Video ads are available in a variety of lengths and styles. Your video can appear in the feed, stories, and in-stream.
                  </p>
                  <h4 class="font-poppins text-sm sm:text-base font-medium text-neutral-900 mb-3">
                    What Video Formats Can You Use?
                  </h4>
                  <ul class="grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm sm:text-base text-neutral-700">
                    <li class="flex items-start gap-2">
                      <span class="text-neutral-500">•</span>
                      <span>Slideshow</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-neutral-500">•</span>
                      <span>Stories</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-neutral-500">•</span>
                      <span>Carousel</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-neutral-500">•</span>
                      <span>Collection</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-neutral-500">•</span>
                      <span>Messenger</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-neutral-500">•</span>
                      <span>Playables</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-neutral-500">•</span>
                      <span>Instant Experiences</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-neutral-500">•</span>
                      <span>Premium Video</span>
                    </li>
                  </ul>
                </div>

                <!-- Media Card -->
                <div class="rounded-3xl overflow-hidden bg-[#8eafee] aspect-square flex items-center justify-center shadow-sm order-1 md:order-2">
                  <video
                    :src="videoAdsVideo"
                    :poster="videoAdsImg"
                    autoplay
                    muted
                    loop
                    playsinline
                    class="w-full h-full object-contain"
                  />
                </div>
              </div>

              <!-- Top Tip for Video Ads -->
              <div class="pt-2">
                <h3 class="font-poppins text-xl sm:text-2xl font-medium text-neutral-900 mb-4">
                  Our Top Tip For Video Ads:
                </h3>
                <ol class="flex flex-col gap-3 text-sm sm:text-base text-neutral-700 list-decimal pl-5 leading-relaxed">
                  <li>
                    Make sure the first 3 seconds of your video grabs your customers attention.
                  </li>
                </ol>
              </div>

              <hr class="border-neutral-200 my-12" />
            </section>

            <!-- 3. INSTANT EXPERIENCES SECTION -->
            <section class="mb-14">
              <!-- Alternating 2-Column Card: Media Left, Content Right -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mb-8">
                <!-- Media Card -->
                <div class="rounded-3xl overflow-hidden bg-[#8eafee] aspect-square flex items-center justify-center shadow-sm">
                  <video
                    :src="instantExpVideo"
                    :poster="instantExpImg"
                    autoplay
                    muted
                    loop
                    playsinline
                    class="w-full h-full object-contain"
                  />
                </div>

                <!-- Info Card -->
                <div class="bg-[#f0f4f8] rounded-3xl p-6 sm:p-8 flex flex-col justify-center shadow-sm border border-neutral-200/40">
                  <h3 class="font-poppins text-2xl sm:text-3xl font-medium text-neutral-900 mb-4">
                    Instant Experiences
                  </h3>
                  <p class="text-sm sm:text-base text-neutral-700 leading-relaxed">
                    Think full screen ads that load instantly, are optimised for mobile and are designed to completely capture the attention of your customers. That’s an Instant Experience. You can make use of videos, photos, carousels, tilt to pan and lifestyle images with tagged products. All in one place.
                  </p>
                </div>
              </div>

              <!-- Stories, Messenger, Slideshows Content -->
              <div class="pt-4 flex flex-col gap-8">
                <div>
                  <h3 class="font-poppins text-xl sm:text-2xl font-medium text-neutral-900 mb-3">
                    Stories:
                  </h3>
                  <p class="text-sm sm:text-base text-neutral-700 leading-relaxed mb-4">
                    Stories enable you to create a customisable edge-to-edge experience, immersing people in your content. Stories can be created using existing video content or images, as long as they are the right dimensions for full-screen, vertical formats.
                  </p>
                  <h4 class="font-poppins text-sm sm:text-base font-medium text-neutral-900 mb-3">
                    Why Should Your Business Be Using Stories?
                  </h4>
                  <ul class="flex flex-col gap-2 text-sm sm:text-base text-neutral-700">
                    <li class="flex items-start gap-2">
                      <span class="text-neutral-500">•</span>
                      <span>They increase customer intent</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-neutral-500">•</span>
                      <span>They inspire action</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-neutral-500">•</span>
                      <span>They are fast, authentic, and helpful</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 class="font-poppins text-xl sm:text-2xl font-medium text-neutral-900 mb-3">
                    Messenger:
                  </h3>
                  <p class="text-sm sm:text-base text-neutral-700 leading-relaxed">
                    Start conversations with your customers through Messenger ads. Why Messenger? Well, an estimated 1.3 billion people use Messenger every month. Yep, that’s eight zeros after the 1.3! Depending on what your business goals are, you can use Messenger as an objective or as a placement.
                  </p>
                </div>

                <div>
                  <h3 class="font-poppins text-xl sm:text-2xl font-medium text-neutral-900 mb-3">
                    Slideshows:
                  </h3>
                  <p class="text-sm sm:text-base text-neutral-700 leading-relaxed">
                    Don’t have the budget to create videos? You can create a slideshow in minutes from your desktop or mobile using existing assets. Slideshow ads also use 5x less data than videos, allowing you to reach people with slower internet connections.
                  </p>
                </div>
              </div>

              <hr class="border-neutral-200 my-12" />
            </section>

            <!-- 4. CAROUSEL SECTION -->
            <section class="mb-14">
              <!-- Alternating 2-Column Card: Content Left, Media Right -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mb-8">
                <!-- Info Card -->
                <div class="bg-[#f0f4f8] rounded-3xl p-6 sm:p-8 flex flex-col justify-center shadow-sm border border-neutral-200/40 order-2 md:order-1">
                  <h3 class="font-poppins text-2xl sm:text-3xl font-medium text-neutral-900 mb-4">
                    Carousel
                  </h3>
                  <p class="text-sm sm:text-base text-neutral-700 leading-relaxed mb-6">
                    Carousels allow you to use 2 – 10 images or videos in a single ad. When should your business use carousel formats?
                  </p>
                  <ul class="flex flex-col gap-2.5 text-sm sm:text-base text-neutral-700">
                    <li class="flex items-start gap-2">
                      <span class="text-neutral-500">•</span>
                      <span>You want to show off multiple products</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-neutral-500">•</span>
                      <span>You want to highlight the features of a specific product</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-neutral-500">•</span>
                      <span>You want to explain a process</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-neutral-500">•</span>
                      <span>You want people to actively engage</span>
                    </li>
                  </ul>
                </div>

                <!-- Media Card -->
                <div class="rounded-3xl overflow-hidden bg-[#8eafee] aspect-square flex items-center justify-center shadow-sm order-1 md:order-2">
                  <video
                    :src="carouselVideo"
                    :poster="carouselImg"
                    autoplay
                    muted
                    loop
                    playsinline
                    class="w-full h-full object-contain"
                  />
                </div>
              </div>

              <hr class="border-neutral-200 my-12" />
            </section>

            <!-- 5. COLLECTION SECTION -->
            <section class="mb-14">
              <!-- Alternating 2-Column Card: Media Left, Content Right -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mb-8">
                <!-- Media Card -->
                <div class="rounded-3xl overflow-hidden bg-[#8eafee] aspect-square flex items-center justify-center shadow-sm">
                  <video
                    :src="collectionVideo"
                    :poster="collectionImg"
                    autoplay
                    muted
                    loop
                    playsinline
                    class="w-full h-full object-contain"
                  />
                </div>

                <!-- Info Card -->
                <div class="bg-[#f0f4f8] rounded-3xl p-6 sm:p-8 flex flex-col justify-center shadow-sm border border-neutral-200/40">
                  <h3 class="font-poppins text-2xl sm:text-3xl font-medium text-neutral-900 mb-4">
                    Collection
                  </h3>
                  <p class="text-sm sm:text-base text-neutral-700 leading-relaxed">
                    Collection ads make it easy for customers to browse your products and to then make a purchase. Collection ads feature a primary video or image with four smaller additional images below in a grid-like layout. Customers who tap on your collection ad to browse or learn more will be seamlessly taken to a fast-loading visual post-click experience powered by Instant Experience – all without leaving Facebook or Instagram. Cool right?!
                  </p>
                </div>
              </div>

              <hr class="border-neutral-200 my-12" />
            </section>

            <!-- CONCLUSION PARAGRAPH -->
            <div class="mb-12">
              <p class="text-base sm:text-lg text-neutral-700 leading-relaxed">
                Facebook provides endless opportunities for your business to tell its story and promote products. When selecting an ad format think of your business goals and how you want customers to see your brand. If you’re still unsure, reach out to our team and we will gladly help.
              </p>
            </div>

            <hr class="border-neutral-200 my-10" />

            <!-- Social Share Component -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-16">
              <span class="font-poppins text-sm font-semibold text-neutral-900">
                Share this article:
              </span>
              <div class="flex items-center gap-3">
                <button
                  v-for="item in sharePlatforms"
                  :key="item.platform"
                  @click="shareTo(item.platform)"
                  class="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center hover:border-black hover:bg-neutral-100 transition-all duration-200 cursor-pointer"
                  :aria-label="`Share on ${item.name}`"
                >
                  <img :src="item.icon" :alt="item.name" class="w-4 h-4 object-contain" />
                </button>
              </div>
            </div>

            <!-- Bottom CTA Banner Component -->
            <div class="mt-16">
              <div class="relative w-full rounded-3xl sm:rounded-[2.5rem] overflow-hidden bg-gradient-to-r from-[#d9e8f5] via-[#e2eef7] to-[#ccdff0] p-8 sm:p-12 lg:p-16 text-center shadow-sm border border-neutral-200/50">
                <div class="max-w-2xl mx-auto flex flex-col items-center">
                  <div class="mb-4">
                    <img :src="redDarkLogo" alt="R-E-D" class="h-8 w-auto object-contain mx-auto" />
                  </div>
                  <h2 class="font-poppins text-2xl sm:text-3xl lg:text-4xl font-medium text-neutral-900 leading-tight mb-6">
                    Tailored Digital<br />Marketing Solutions To<br />Drive Your Bottom Line
                  </h2>
                  <button
                    @click="openModal('Blog Article - Innovative Ways CTA')"
                    class="btn-primary px-9 py-3.5 text-sm sm:text-base"
                  >
                    Schedule A Meeting Today
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
import { ArrowLeft } from 'lucide-vue-next';
import { useHead } from '#imports';
import { useModal } from '~/composables/useModal';

// Logos & Shared Icons
import redWhiteLogo from '~/assets/images/r-e-d-white-logo.svg';
import redDarkLogo from '~/assets/images/r-e-d-dark-logo.svg';
import fbShareIcon from '~/assets/images/facebook-share-article-icon.svg';
import linkedinShareIcon from '~/assets/images/linkedin-share-article-icon.svg';
import xShareIcon from '~/assets/images/x-twitter-share-article-icon.svg';
import whatsappShareIcon from '~/assets/images/whatsapp-share-article-icon.svg';
import emailShareIcon from '~/assets/images/email-share-article-icon.svg';

// Hero Banners
import heroDesktopBanner from '~/assets/images/r-e-d-blog-facebook-ad-type-desktop-banner.png';
import heroMobileBanner from '~/assets/images/r-e-d-blog-facebook-ad-type-mobile-banner.png';

// Ad Section Assets: Videos & Posters
import imageAdsVideo from '~/assets/images/Image_Ads.mp4';
import imageAdsImg from '~/assets/images/Image_Ads.png';

import videoAdsVideo from '~/assets/images/Video_Ads.mp4';
import videoAdsImg from '~/assets/images/Video_Ads.png';

import instantExpVideo from '~/assets/images/Instant_Experience.mp4';
import instantExpImg from '~/assets/images/Instant_Experience.png';

import carouselVideo from '~/assets/images/Carousel.mp4';
import carouselImg from '~/assets/images/Carousel-blog.png';

import collectionVideo from '~/assets/images/Collection.mp4';
import collectionImg from '~/assets/images/Collection.png';

const { openModal } = useModal();

const sharePlatforms = [
  { name: 'Facebook', platform: 'facebook', icon: fbShareIcon },
  { name: 'LinkedIn', platform: 'linkedin', icon: linkedinShareIcon },
  { name: 'X', platform: 'twitter', icon: xShareIcon },
  { name: 'WhatsApp', platform: 'whatsapp', icon: whatsappShareIcon },
  { name: 'Email', platform: 'email', icon: emailShareIcon },
];

const shareTo = (platform: string) => {
  const url = typeof window !== 'undefined' ? window.location.href : 'https://r-e-d.co.za/blogs/innovative-and-powerful-ways';
  const title = typeof document !== 'undefined' && document.title ? document.title : 'Innovative and powerful ways to tell your business story!';
  const summaryText = "With so many active users on Facebook and Instagram, it may be difficult for you to decide which Ad Type to use to reach new customers.";
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
  title: 'Innovative and powerful ways to tell your business story! | R-E-D',
  meta: [
    {
      name: 'description',
      content: 'With so many active users on Facebook and Instagram, it may be difficult for you to decide which Ad Type to use to reach new customers and reengage with existing customers.'
    }
  ]
});
</script>
