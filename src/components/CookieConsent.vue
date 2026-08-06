<script setup lang="ts">
import { onMounted } from 'vue';
import { Cookie } from 'lucide-vue-next';

const isVisible = useState('isCookieBannerVisible', () => false);

onMounted(() => {
  // Check if user has already made a choice
  const consent = localStorage.getItem('cookie-consent');
  if (!consent) {
    // Small delay to allow page load before showing banner
    setTimeout(() => {
      isVisible.value = true;
    }, 1000);
  }
});

const acceptCookies = () => {
  localStorage.setItem('cookie-consent', 'accepted');
  isVisible.value = false;
  
  // Here you can initialize Google Analytics or other tracking scripts
  // window.dataLayer = window.dataLayer || [];
  // window.dataLayer.push({'event': 'cookie_consent_accepted'});
};

const declineCookies = () => {
  localStorage.setItem('cookie-consent', 'declined');
  isVisible.value = false;
};
</script>

<template>
  <Transition
    enter-active-class="transition duration-500 ease-out"
    enter-from-class="transform translate-y-full"
    enter-to-class="transform translate-y-0"
    leave-active-class="transition duration-300 ease-in"
    leave-from-class="transform translate-y-0"
    leave-to-class="transform translate-y-full"
  >
    <div 
      v-if="isVisible" 
      class="fixed bottom-0 left-0 w-full bg-white shadow-[0_-8px_30px_rgba(0,0,0,0.08)] border-t border-neutral-100 z-[100] p-4 sm:p-6"
    >
      <div class="max-w-[1600px] mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 lg:gap-8">
        
        <!-- Text & Icon -->
        <div class="flex items-start lg:items-center gap-4 flex-1">
          <div class="p-2.5 bg-primary/10 rounded-xl shrink-0 hidden sm:flex items-center justify-center">
            <Cookie class="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 class="text-neutral-900 font-bold text-base tracking-tight mb-1">We value your privacy</h3>
            <p class="text-neutral-500 text-sm leading-relaxed">
              We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. Please choose your preferences. Read our 
              <NuxtLink to="/privacy-policy" class="text-primary hover:underline font-medium">Privacy Policy</NuxtLink> and 
              <NuxtLink to="/cookie-policy" class="text-primary hover:underline font-medium">Cookie Policy</NuxtLink>.
            </p>
          </div>
        </div>
        
        <!-- Buttons -->
        <div class="flex items-center gap-3 w-full lg:w-auto shrink-0 mt-2 lg:mt-0">
          <button 
            @click="declineCookies"
            class="flex-1 lg:flex-none bg-neutral-100 hover:bg-neutral-200 text-neutral-700 text-[16px] font-semibold py-3 px-6 rounded-xl transition-colors duration-200 cursor-pointer"
          >
            Decline
          </button>
          <button 
            @click="acceptCookies"
            class="flex-1 lg:flex-none bg-black hover:bg-primary text-white text-[16px] font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-sm cursor-pointer"
          >
            Accept All
          </button>
        </div>

      </div>
    </div>
  </Transition>
</template>
