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
                :src="postXWhiteLogo"
                :alt="link.label"
                class="h-5 md:h-6 object-contain select-none opacity-85 hover:opacity-100 transition-opacity duration-200"
                referrerpolicy="no-referrer"
              />
            </template>
            <template v-else>
              {{ link.label }}
            </template>
          </NuxtLink>
        </div>

        <!-- CTA (Desktop) - Vibrant Cyan Pill Button -->
        <div class="hidden md:flex items-center">
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
                :src="postXWhiteLogo"
                :alt="link.label"
                class="h-5 object-contain select-none"
                referrerpolicy="no-referrer"
              />
            </template>
            <template v-else>
              {{ link.label }}
            </template>
          </NuxtLink>
          <div class="pt-4 border-t border-neutral-900 mt-2">
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
import { ref } from 'vue';
import { Menu, X } from 'lucide-vue-next';
import redWhiteLogo from '~/assets/images/r-e-d-white-logo.svg';
import postXWhiteLogo from '~/assets/images/PostX_Web_white_Logo.png';

const emit = defineEmits(['cta-click']);

const isOpen = ref(false);

const links = [
  { label: 'PostX', href: '/postx', isImage: true },
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
