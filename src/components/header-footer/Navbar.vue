<template>
  <nav class="sticky top-4 z-50 w-full px-4 sm:px-6 lg:px-8 bg-transparent">
    <!-- Black Floating Capsule Container -->
    <div class="mx-auto max-w-[1600px] h-16 md:h-24 lg:h-24 rounded-full bg-black border px-6 sm:px-8 shadow-2xl flex items-center">
      <div class="flex items-center justify-between w-full">
        
        <!-- Logo: R-E-D White Logo -->
        <NuxtLink to="/" class="flex items-center group" @click="scrollToTop">
          <img 
            :src="redWhiteLogo" 
            alt="R-E-D Logo" 
            class="h-8 md:h-16 lg:h-10 object-contain select-none opacity-90 group-hover:opacity-100 transition-opacity"
            referrerpolicy="no-referrer"
          />
        </NuxtLink>

        <!-- Desktop Nav Links -->
        <div class="hidden md:flex items-center gap-10">
          <NuxtLink
            v-for="link in links"
            :key="link.label"
            :to="link.href"
            class="font-sans text-base font-normal tracking-wide text-neutral-300 transition-colors duration-200 hover:text-white flex items-center"
          >
            <template v-if="link.isImage">
              <img
                :src="link.imageSrc"
                :alt="link.label"
                :class="[link.imageClass || 'h-5 md:h-6', 'object-contain select-none opacity-85 hover:opacity-100 transition-opacity duration-200']"
                referrerpolicy="no-referrer"
              />
            </template>
            <template v-else>
              {{ link.label }}
            </template>
          </NuxtLink>
        </div>

        <!-- Right side: Dev Toggle & CTA -->
        <div class="hidden md:flex items-center gap-4">
          <!-- Dev Mode View Toggle -->
          <ClientOnly>
            <div v-if="isDev" class="flex items-center gap-1 bg-neutral-900/40 rounded-full p-1 border border-neutral-700/50 backdrop-blur-sm">
              <button @click="setPreviewMode('mobile')" :class="['p-1.5 rounded-full transition-colors', activePreviewMode === 'mobile' ? 'bg-neutral-700 text-white' : 'text-neutral-400 hover:text-white hover:bg-neutral-800']" title="Mobile View">
                <Smartphone class="w-4 h-4" />
              </button>
              <button @click="setPreviewMode('tablet')" :class="['p-1.5 rounded-full transition-colors', activePreviewMode === 'tablet' ? 'bg-neutral-700 text-white' : 'text-neutral-400 hover:text-white hover:bg-neutral-800']" title="Tablet View">
                <Tablet class="w-4 h-4" />
              </button>
              <button @click="setPreviewMode('desktop')" :class="['p-1.5 rounded-full transition-colors', activePreviewMode === 'desktop' ? 'bg-neutral-700 text-white' : 'text-neutral-400 hover:text-white hover:bg-neutral-800']" title="Desktop View">
                <Monitor class="w-4 h-4" />
              </button>
            </div>
          </ClientOnly>

          <!-- CTA (Desktop) - Vibrant Cyan Pill Button -->
          <NuxtLink
            to="/contact"
            class="h-10.5 inline-flex items-center justify-center rounded-full bg-[#00a2ca] hover:bg-[#00b5e2] px-7 text-sm text-white shadow-md shadow-cyan-500/10 transition-all duration-300 hover:scale-[1.02] active:scale-95 font-poppins font-medium lowercase"
          >
            Contact us
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <div class="flex md:hidden">
          <button
            @click="isOpen = !isOpen"
            class="inline-flex items-center justify-center rounded-full p-2 text-neutral-400 hover:bg-neutral-900 hover:text-white focus:outline-none transition-colors"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <X v-if="isOpen" class="block h-5 w-5" />
            <Menu v-else class="block h-5 w-5" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform opacity-0 -translate-y-2"
      enter-to-class="transform opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform opacity-100 translate-y-0"
      leave-to-class="transform opacity-0 -translate-y-2"
    >
      <div
        v-if="isOpen"
        class="md:hidden mt-3 mx-2 rounded-2xl border border-neutral-900 bg-black/95 backdrop-blur-md p-5 shadow-xl"
      >
        <div class="space-y-2 flex flex-col">
          <NuxtLink
            v-for="link in links"
            :key="link.label"
            :to="link.href"
            @click="isOpen = false"
            class="rounded-lg px-3 py-2 text-base font-normal text-neutral-300 hover:bg-neutral-900 hover:text-white transition-colors flex items-center"
          >
            <template v-if="link.isImage">
              <img
                :src="link.imageSrc"
                :alt="link.label"
                :class="[link.mobileImageClass || 'h-5', 'object-contain select-none']"
                referrerpolicy="no-referrer"
              />
            </template>
            <template v-else>
              {{ link.label }}
            </template>
          </NuxtLink>
          <div class="pt-4 border-t border-neutral-900 mt-2">
            <!-- Mobile Dev Mode Toggle -->
            <ClientOnly>
              <div v-if="isDev" class="flex items-center justify-center gap-2 mb-4 bg-neutral-900/40 rounded-xl p-2 border border-neutral-800">
                <button @click="setPreviewMode('mobile')" :class="['p-2 rounded-full transition-colors', activePreviewMode === 'mobile' ? 'bg-neutral-700 text-white' : 'text-neutral-400 hover:text-white']" title="Mobile View">
                  <Smartphone class="w-5 h-5" />
                </button>
                <button @click="setPreviewMode('tablet')" :class="['p-2 rounded-full transition-colors', activePreviewMode === 'tablet' ? 'bg-neutral-700 text-white' : 'text-neutral-400 hover:text-white']" title="Tablet View">
                  <Tablet class="w-5 h-5" />
                </button>
                <button @click="setPreviewMode('desktop')" :class="['p-2 rounded-full transition-colors', activePreviewMode === 'desktop' ? 'bg-neutral-700 text-white' : 'text-neutral-400 hover:text-white']" title="Desktop View">
                  <Monitor class="w-5 h-5" />
                </button>
              </div>
            </ClientOnly>

            <NuxtLink
              to="/contact"
              @click="isOpen = false"
              class="block w-full rounded-full bg-[#00a2ca] py-3 text-base font-semibold text-white text-center shadow-lg hover:bg-[#00b5e2] transition-colors"
            >
              Contact us
            </NuxtLink>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { Menu, X, Smartphone, Tablet, Monitor } from 'lucide-vue-next';
import redWhiteLogo from '~/assets/images/r-e-d-white-logo.svg';
import postXWhiteLogo from '~/assets/images/PostX_Web_white_Logo.png';
import conexaLogo from '~/assets/images/conexa-logo.svg';

const emit = defineEmits(['cta-click']);

const isOpen = ref(false);

const isDev = import.meta.env.DEV;
const previewMode = useState('previewMode', () => 'desktop');
const inIframe = ref(false);
const windowWidth = ref(1024);

onMounted(() => {
  if (window.self !== window.top) {
    inIframe.value = true;
    windowWidth.value = window.innerWidth;
    window.addEventListener('resize', () => {
      windowWidth.value = window.innerWidth;
    });
  }
});

const activePreviewMode = computed(() => {
  if (inIframe.value) {
    if (windowWidth.value <= 400) return 'mobile';
    if (windowWidth.value <= 800) return 'tablet';
    return 'desktop';
  }
  return previewMode.value;
});

const setPreviewMode = (mode: string) => {
  if (inIframe.value) {
    window.parent.postMessage({ type: 'set-preview-mode', mode }, '*');
  } else {
    previewMode.value = mode;
  }
};

const links = [
  { label: 'PostX', href: '/postx', isImage: true, imageSrc: postXWhiteLogo },
  { label: 'Conexa', href: '/conexa', isImage: true, imageSrc: conexaLogo, imageClass: 'h-[17px] md:h-[21px]', mobileImageClass: 'h-[17px]' },
  { label: 'Why Us', href: '/#why-us' },
  { label: 'Services', href: '/services' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Careers', href: '/careers' },
  { label: 'About', href: '/about' },
];

const handleMobileCta = () => {
  isOpen.value = false;
  emit('cta-click');
};

const scrollToTop = () => {
  if (import.meta.client) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};
</script>
