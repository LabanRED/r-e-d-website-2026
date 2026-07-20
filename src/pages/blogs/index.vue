<template>
  <div class="w-full bg-[#fafafa] min-h-screen relative font-sans overflow-x-hidden pt-8 pb-20">
    <!-- Back Breadcrumb -->
    <div class="pl-8 mx-auto lg:w-[95%] max-w-[1600px] lg:px-12 mb-6">
      <NuxtLink
        to="/"
        class="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-[#00a5c5] transition-colors duration-200"
      >
        <ArrowLeft class="w-4 h-4" />
        Back to home
      </NuxtLink>
    </div>

    <!-- Hero Section -->
    <section class="mx-auto lg:w-[95%] max-w-[1600px] px-4 sm:px-6 lg:px-12 mb-16">

      <!-- DESKTOP LAYOUT (lg and up) -->
      <div class="hidden lg:flex relative w-full overflow-hidden min-h-[400px] sm:min-h-[700px] items-center">
        <!-- Background image -->
        <div class="absolute inset-0 w-full h-full z-0">
          <img
            :src="blogsHeroDesktop"
            alt="Blogs Hero Background"
            class="w-full h-full object-contain object-right md:object-center"
            fetchpriority="high"
            loading="eager"
          />
        </div>

        <!-- Text Content overlay -->
        <div class="relative z-10 w-full md:w-1/2 md:mt-16 lg:mt-16 p-8 sm:p-12 lg:p-20">
          <p class="font-poppins text-neutral-600 text-sm sm:text-base mb-4 tracking-wide font-medium">
            Our blogs
          </p>
          <h1 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins text-4xl sm:text-5xl lg:text-6xl font-semibold text-neutral-800 leading-[1.1] tracking-tight">
            Smarter Digital <br class="hidden sm:block" />
            Thinking for <span class="text-[#00a5c5]">Better <br class="hidden sm:block" />
              Conversions</span>
          </h1>
        </div>
      </div>

      <!-- MOBILE & TABLET LAYOUT (below lg) - Stacked Vertically -->
      <div class="block lg:hidden w-full flex flex-col items-center text-center">
        <div class="mb-8">
          <p class="font-poppins text-neutral-600 text-sm sm:text-base mb-4 tracking-wide font-medium">
            Our blogs
          </p>
          <h1 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins text-4xl sm:text-5xl md:text-6xl font-semibold text-neutral-800 leading-tight tracking-tight">
            Smarter Digital <br />
            Thinking for <span class="text-[#00a5c5]">Better <br />
              Conversions</span>
          </h1>
        </div>

        <div class="w-full max-w-lg sm:max-w-xl md:max-w-2xl overflow-hidden rounded-[2rem]">
          <img
            :src="blogsHeroMobile"
            alt="Blogs Hero Mobile Banner"
            class="w-full h-auto object-contain mx-auto"
            fetchpriority="high"
            loading="eager"
          />
        </div>
      </div>

    </section>

    <!-- All Articles Section -->
    <section class="px-6 sm:px-8 lg:px-12 max-w-[1600px] mx-auto mb-16">
      <h2 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins text-3xl sm:text-4xl font-semibold text-neutral-800 mb-6">
        All articles
      </h2>
      <p class="font-poppins text-neutral-600 text-lg leading-relaxed max-w-4xl mb-8">
        Explore our collection of insights, ideas, and updates across design, development, and digital strategy. From practical guides to industry perspectives, these articles are designed to keep you informed, inspired, and ahead of the curve in a fast-moving digital landscape.
      </p>

      <!-- Search Bar -->
      <div class="relative max-w-full">
        <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search class="h-5 w-5 text-neutral-400" />
        </div>
        <input
          type="text"
          placeholder="Search articles..."
          v-model="searchQuery"
          class="w-full pl-12 pr-32 py-4 bg-transparent border border-neutral-300 rounded-full focus:outline-none focus:border-[#00a5c5] font-poppins text-neutral-700"
        />
        <button class="absolute right-2 top-2 bottom-2 bg-black hover:bg-[#00a5c5] text-white px-6 rounded-full font-poppins font-medium transition-colors text-sm lowercase cursor-pointer">
          Search
        </button>
      </div>
    </section>

    <!-- Latest Blogs Section -->
    <section class="px-6 sm:px-8 lg:px-12 max-w-[1600px] mx-auto mb-20">
      <h2 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="w-full px-0 md:px-[186px] font-poppins text-3xl sm:text-4xl font-semibold text-neutral-800 mb-10">
        Latest blogs
      </h2>

      <div class="flex flex-wrap justify-center gap-8 lg:gap-10 mb-12">
        <template v-if="filteredBlogs.length > 0">
          <NuxtLink v-for="blog in filteredBlogs" :key="blog.id" to="/blogs/article" class="flex flex-col group cursor-pointer block w-full md:w-[350px]">
            <!-- Blog Image Placeholder -->
            <div class="w-full aspect-[4/3] bg-neutral-200 rounded-2xl mb-6 overflow-hidden flex items-center justify-center relative">
              <template v-if="blog.image">
                <img loading="lazy" :src="blog.image" :alt="blog.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </template>
              <template v-else>
                <span class="text-neutral-400 font-poppins text-sm">Image Placeholder</span>
              </template>
            </div>

            <div class="flex flex-col flex-1">
              <span class="font-poppins text-xs text-neutral-500 mb-3 uppercase tracking-wider font-medium">
                {{ blog.date }}
              </span>
              <h3 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins text-xl font-semibold text-neutral-800 mb-4 leading-snug group-hover:text-[#00a5c5] transition-colors line-clamp-2">
                {{ blog.title }}
              </h3>
              <p class="font-poppins text-neutral-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                {{ blog.excerpt }}
              </p>
              <div class="mt-auto">
                <button class="px-6 py-2 border border-[#00a5c5] text-[#00a5c5] rounded-full font-poppins text-xs hover:bg-black hover:text-[#00a5c5] transition-colors font-medium lowercase cursor-pointer">
                  Read article
                </button>
              </div>
            </div>
          </NuxtLink>
        </template>
        <template v-else>
          <div class="w-full text-center py-10 font-poppins text-neutral-500">
            No articles found matching "{{ searchQuery }}".
          </div>
        </template>
      </div>

      <div class="flex justify-center">
        <button class="bg-black hover:bg-[#00a5c5] text-white px-8 py-3 rounded-full font-poppins text-sm transition-colors shadow-sm font-medium lowercase cursor-pointer">
          Load more...
        </button>
      </div>
    </section>

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
import { ref, computed } from 'vue';
import { Search, ArrowLeft } from 'lucide-vue-next';

import blogsHeroDesktop from '~/assets/images/blogs-hero-desktop-banner.webp';
import blogsHeroMobile from '~/assets/images/blogs-hero-mobile-banner.webp';
import redLogo from '~/assets/images/r-e-d-dark-logo.svg';
import firstBlogImg from '~/assets/images/article-3-winning-socila-media-strategies-hero-mobile-banner.webp';
import secondBlogImg from '~/assets/images/article-social-media-for-your-business-mobile-banner.webp';
import thirdBlogImg from '~/assets/images/article-ads-ads-and-more-ads-mobile-banner.webp';
import fourthBlogImg from '~/assets/images/article-innovative-and-powerful-waysmobile-banner.webp';
import fifthBlogImg from '~/assets/images/article-get-more-bang-for-your-buck-mobile-banner.webp';
import sixthBlogImg from '~/assets/images/ai-driven-advertising-target-marketing.webp';

const { openModal } = useModal();

const searchQuery = ref('');

const blogsData = [
  {
    id: 1,
    title: "3 Winning Social Media Strategies For South African Car Dealers",
    date: "R-E-D | 12 May 2023",
    excerpt: "Many car shoppers are now turning to social media to begin their buying journey.",
    image: firstBlogImg,
  },
  {
    id: 2,
    title: "Social Media: For Your Business",
    date: "R-E-D | 20 January 2023",
    excerpt: "If for one second you think that social media is not for your business, you are grossly mistaken.",
    image: secondBlogImg,
  },
  {
    id: 3,
    title: "Ads, ads and more ads",
    date: "R-E-D | 2023",
    excerpt: "Facebook ads work best when you're focused on what you want to achieve.",
    image: thirdBlogImg,
  },
  {
    id: 4,
    title: "Innovative and powerful ways to tell your business story!",
    date: "R-E-D | 15 March 2023",
    excerpt: "With so many active users on Facebook and Instagram, it may be difficult for you to decide...",
    image: fourthBlogImg,
  },
  {
    id: 5,
    title: "Get more bang for your buck!",
    date: "R-E-D | 01 April 2023",
    excerpt: "Are you looking to reach & bring in new customers that are 100% interested in your products/services?",
    image: fifthBlogImg,
  },
  {
    id: 6,
    title: "AI-Driven Advertising for Smarter Targeting & Lead Generation",
    date: "R-E-D | 24 January 2025",
    excerpt: "Smarter targeting and automation driving better leads through machine learning.",
    image: sixthBlogImg,
  }
];

const filteredBlogs = computed(() => {
  const query = searchQuery.value.toLowerCase();
  return blogsData.filter(blog => 
    blog.title.toLowerCase().includes(query) ||
    blog.excerpt.toLowerCase().includes(query)
  );
});

useHead({
  title: 'Blogs | R-E-D',
  meta: [
    { name: 'description', content: 'Explore our collection of insights, ideas, and updates across design, development, and digital strategy.' }
  ]
});
</script>
