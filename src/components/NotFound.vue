<template>
  <div class="relative min-h-[62vh] w-full bg-white flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden font-poppins">
    
    <!-- Background Watermark 404 -->
    <div class="absolute inset-0 flex items-start justify-center pointer-events-none z-0 overflow-hidden">
      <span class="mt-15 md: text-[150px] sm:text-[480px] md:text-[600px] lg:text-[500px] font-black text-neutral-300 tracking-tighter leading-none select-none opacity-40 md:opacity-20 lg:opacity-20">
        404
      </span>
    </div>

    <!-- Foreground Content Card -->
    <div class="relative mt-56 md:mt-0 lg:mt-0  z-10 max-w-xl w-full flex flex-col items-center">
      
      <!-- Main Heading -->
      <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-900 mb-3 font-sans">
        Page not found
      </h1>

      <!-- Subtitle -->
      <p class="text-neutral-500 text-base sm:text-lg mb-8 max-w-md leading-relaxed font-sans">
        Lost, this page is. In another system, it may be.
      </p>

      <!-- Search Bar Form -->
      <form @submit.prevent="handleSearchSubmit" class="w-full max-w-md mb-4 relative z-30">
        <div class="flex flex-col sm:flex-row items-center gap-2.5 w-full">
          <!-- Input Box -->
          <div class="relative flex-1 w-full flex items-center rounded-full border border-neutral-200 bg-white px-3.5 py-2.5 focus-within:ring-2 focus-within:ring-neutral-900 focus-within:border-neutral-900 transition-all">
            <Search class="w-4 h-4 text-neutral-400 shrink-0 mr-2.5" />
            <input 
              v-model="searchQuery" 
              type="text" 
              placeholder="Search" 
              class="w-full bg-transparent text-sm text-neutral-900 placeholder-neutral-400 outline-none font-poppins"
              aria-label="Search website"
              @focus="isFocused = true"
            />
            <button 
              v-if="searchQuery" 
              type="button" 
              @click="searchQuery = ''"
              class="text-neutral-400 hover:text-neutral-600 transition-colors p-1"
            >
              <X class="w-3.5 h-3.5" />
            </button>
          </div>

          <!-- Search Button (Filled with Black) -->
          <button 
            type="submit" 
            class="w-full sm:w-auto px-6 py-2.5 rounded-full bg-black hover:bg-neutral-800 active:bg-neutral-900 text-sm font-medium text-white shadow-sm transition-colors cursor-pointer shrink-0"
          >
            Search
          </button>
        </div>

        <!-- Live Search Dropdown Results -->
        <transition
          enter-active-class="transition duration-150 ease-out"
          enter-from-class="transform opacity-0 -translate-y-1"
          enter-to-class="transform opacity-100 translate-y-0"
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="transform opacity-100 translate-y-0"
          leave-to-class="transform opacity-0 -translate-y-1"
        >
          <div 
            v-if="searchQuery.trim().length > 0 && (searchResults.length > 0 || hasSubmittedSearch)" 
            class="absolute left-0 right-0 mt-2 bg-white/95 backdrop-blur-md rounded-2xl border border-neutral-200 shadow-2xl p-3 text-left space-y-1 z-50 max-h-72 overflow-y-auto"
          >
            <div v-if="searchResults.length > 0">
              <div class="text-[11px] font-semibold tracking-wider text-neutral-400 uppercase px-3 py-1 mb-1">
                Suggested Results
              </div>
              <div 
                v-for="item in searchResults" 
                :key="item.url"
                @click="navigateToUrl(item.url)"
                class="flex items-start justify-between p-2.5 rounded-xl hover:bg-neutral-100/80 transition-colors cursor-pointer group"
              >
                <div class="flex flex-col gap-0.5">
                  <div class="flex items-center gap-2">
                    <span class="text-sm font-semibold text-neutral-900 group-hover:text-black">
                      {{ item.title }}
                    </span>
                    <span class="text-[10px] font-medium px-2 py-0.5 rounded-md bg-neutral-100 text-neutral-600 border border-neutral-200">
                      {{ item.category }}
                    </span>
                  </div>
                  <p class="text-xs text-neutral-500 line-clamp-1">
                    {{ item.description }}
                  </p>
                </div>
                <ArrowRight class="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-0.5 transition-all mt-1 shrink-0 ml-2" />
              </div>
            </div>

            <!-- No results found fallback -->
            <div v-else-if="hasSubmittedSearch" class="p-4 text-center">
              <p class="text-xs text-neutral-500 mb-2">
                No results found for "<span class="font-semibold text-neutral-800">{{ searchQuery }}</span>"
              </p>
              <p class="text-xs text-neutral-400 mb-3">Try searching for popular topics:</p>
              <div class="flex flex-wrap items-center justify-center gap-1.5">
                <button 
                  v-for="tag in popularTags" 
                  :key="tag.label"
                  type="button"
                  @click="searchQuery = tag.query; handleSearchSubmit()"
                  class="text-xs font-medium px-2.5 py-1 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-700 transition-colors"
                >
                  {{ tag.label }}
                </button>
              </div>
            </div>
          </div>
        </transition>
      </form>

      <!-- Action Buttons -->
      <div class="flex flex-col md:flex-row lg:flex-row items-center justify-center gap-3.5 w-full mt-4">
        <!-- Go Back Button -->
        <button 
          @click="goBack" 
          type="button"
          class="inline-flex items-center justify-center gap-2 px-5 py-2.5 w-full md:w-auto lg:w-auto rounded-full bg-neutral-100 hover:bg-neutral-200 active:bg-neutral-300 text-neutral-800 text-sm font-medium transition-colors cursor-pointer border border-neutral-200/50"
        >
          <ArrowLeft class="w-4 h-4" />
          <span>Go back</span>
        </button>

        <!-- Take Me Home Button -->
        <button
          @click="takeMeHome"
          type="button"
          class="inline-flex items-center justify-center px-6 py-2.5 w-full md:w-auto lg:w-auto rounded-full bg-neutral-900 hover:bg-black active:bg-neutral-800 text-white text-sm font-medium transition-colors cursor-pointer"
        >
          <span>Take me home</span>
        </button>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { Search, ArrowLeft, ArrowRight, X } from 'lucide-vue-next';

const props = defineProps<{
  error?: any;
}>();

const router = useRouter();
const searchQuery = ref('');
const isFocused = ref(false);
const hasSubmittedSearch = ref(false);

interface SearchItem {
  title: string;
  category: 'Service' | 'Product' | 'Career' | 'Blog' | 'Company';
  description: string;
  url: string;
  keywords: string[];
}

const searchItems: SearchItem[] = [
  // Products
  {
    title: 'PostX Platform',
    category: 'Product',
    description: 'Internal communication tool designed to streamline workflows and team collaboration.',
    url: '/postx',
    keywords: ['postx', 'product', 'communication', 'social', 'automation', 'tool', 'platform']
  },
  {
    title: 'Conexa Solutions',
    category: 'Product',
    description: 'Seamless connection and integration solutions for modern businesses.',
    url: '/conexa',
    keywords: ['conexa', 'product', 'integration', 'connection', 'solutions', 'platform']
  },

  // Services
  {
    title: 'Digital Advertising',
    category: 'Service',
    description: 'Data-driven digital advertising campaigns focused on lead generation and ROI.',
    url: '/services/digital-advertising',
    keywords: ['advertising', 'digital', 'ads', 'ppc', 'google ads', 'facebook ads', 'paid media', 'marketing', 'leads']
  },
  {
    title: 'Social Media Management',
    category: 'Service',
    description: 'Professional social media management tailored to engage your audience and build your brand.',
    url: '/services/social-media',
    keywords: ['social media', 'management', 'instagram', 'facebook', 'linkedin', 'tiktok', 'content', 'community', 'strategy']
  },
  {
    title: 'Website Development & Maintenance',
    category: 'Service',
    description: 'Custom website development and maintenance ensuring responsive, high-performing digital storefronts.',
    url: '/services/website-dev',
    keywords: ['website', 'development', 'web dev', 'design', 'maintenance', 'code', 'vue', 'nuxt', 'site', 'hosting']
  },
  {
    title: 'Online Reputation Management',
    category: 'Service',
    description: 'Protect and enhance your brand\'s digital image with proactive online reputation solutions.',
    url: '/services/online-reputation',
    keywords: ['reputation', 'online', 'reviews', 'branding', 'image', 'monitoring', 'pr', 'trust']
  },
  {
    title: 'Location Listing Solutions',
    category: 'Service',
    description: 'Optimize local search visibility and drive foot traffic with location listing management.',
    url: '/services/location-listing',
    keywords: ['location', 'listing', 'local seo', 'google maps', 'gmb', 'business profile', 'sandton', 'map']
  },

  // Careers
  {
    title: 'Careers Overview',
    category: 'Career',
    description: 'Join the R-E-D team. Explore our open positions and career opportunities.',
    url: '/careers',
    keywords: ['careers', 'jobs', 'hiring', 'openings', 'work', 'join us', 'employment', 'opportunities']
  },
  {
    title: 'Head of Search',
    category: 'Career',
    description: 'Lead paid media and digital marketing search strategies in Sandton.',
    url: '/careers/head-of-search',
    keywords: ['head of search', 'seo', 'sem', 'google ads', 'search lead', 'career', 'job', 'position']
  },
  {
    title: 'Head of Social Media',
    category: 'Career',
    description: 'Lead social media management and client digital strategies.',
    url: '/careers/head-of-social-media',
    keywords: ['head of social media', 'social media lead', 'manager', 'career', 'job', 'position']
  },
  {
    title: 'Digital Designer',
    category: 'Career',
    description: 'Create visual assets, UI/UX designs, and brand collateral for top clients.',
    url: '/careers/designer',
    keywords: ['designer', 'digital designer', 'ui/ux', 'graphic designer', 'career', 'job', 'design']
  },
  {
    title: 'Digital Marketing & Dev Intern',
    category: 'Career',
    description: 'Start your career with R-E-D as an Intern and learn from industry experts.',
    url: '/careers/intern',
    keywords: ['intern', 'internship', 'junior', 'student', 'graduate', 'career', 'job', 'learning']
  },

  // Company
  {
    title: 'About Us',
    category: 'Company',
    description: 'Learn about R-E-D\'s story, core team, values, and digital philosophy.',
    url: '/about',
    keywords: ['about', 'story', 'team', 'values', 'sandton', 'company', 'who we are', 'history']
  },
  {
    title: 'Contact Us',
    category: 'Company',
    description: 'Get in touch with the R-E-D team today. Tel: 010 025 3560, Sandton.',
    url: '/contact',
    keywords: ['contact', 'email', 'phone', 'address', 'location', 'sandton', 'touch', 'reach', 'telephone']
  },
  {
    title: 'Blogs & Insights',
    category: 'Blog',
    description: 'Read the latest insights, strategies, and news from the R-E-D team.',
    url: '/blogs',
    keywords: ['blogs', 'articles', 'news', 'insights', 'marketing tips', 'trends', 'read']
  },
  {
    title: 'Why Choose R-E-D',
    category: 'Company',
    description: 'Discover why leading brands partner with R-E-D for digital growth.',
    url: '/#why-us',
    keywords: ['why us', 'features', 'advantages', 'benefits', 'results', 'why choose us']
  }
];

const popularTags = [
  { label: 'PostX', query: 'postx' },
  { label: 'Digital Advertising', query: 'advertising' },
  { label: 'Website Dev', query: 'website' },
  { label: 'Careers', query: 'careers' },
  { label: 'Contact', query: 'contact' }
];

const searchResults = computed(() => {
  const q = searchQuery.value.trim().toLowerCase();
  if (!q) return [];
  return searchItems.filter(item => 
    item.title.toLowerCase().includes(q) ||
    item.description.toLowerCase().includes(q) ||
    item.category.toLowerCase().includes(q) ||
    item.keywords.some(k => k.toLowerCase().includes(q))
  ).slice(0, 5);
});

const handleSearchSubmit = () => {
  hasSubmittedSearch.value = true;
  const firstResult = searchResults.value[0];
  if (firstResult) {
    navigateToUrl(firstResult.url);
  }
};

const navigateToUrl = (url: string) => {
  if (props.error) {
    clearError({ redirect: url });
  } else {
    navigateTo(url);
  }
};

const goBack = () => {
  if (import.meta.client) {
    if (window.history.length > 1) {
      router.back();
    } else {
      navigateToUrl('/');
    }
  }
};

const takeMeHome = () => {
  navigateToUrl('/');
};
</script>
