<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Cookie, ChevronDown, ChevronUp, ShieldCheck, SlidersHorizontal } from 'lucide-vue-next';

interface CookiePreferences {
  necessary: boolean;
  preferences: boolean;
  statistics: boolean;
  marketing: boolean;
}

const isVisible = useState('isCookieBannerVisible', () => false);
const showPreferences = useState('isCookiecustomiseOpen', () => false);

const cookieCategories = [
  {
    key: 'necessary' as const,
    title: 'Necessary',
    badge: 'Always active',
    description: 'Essential for the website to function securely and properly. Cannot be disabled.',
    disabled: true
  },
  {
    key: 'preferences' as const,
    title: 'Preferences',
    badge: 'Optional',
    description: 'Enable the website to remember information like your language or region settings.',
    disabled: false
  },
  {
    key: 'statistics' as const,
    title: 'Statistics',
    badge: 'Optional',
    description: 'Help us understand how visitors interact with the website through anonymous analytics.',
    disabled: false
  },
  {
    key: 'marketing' as const,
    title: 'Marketing',
    badge: 'Optional',
    description: 'Used to track visitors across websites to display relevant ads and campaigns.',
    disabled: false
  }
];

const preferences = ref<CookiePreferences>({
  necessary: true,
  preferences: false,
  statistics: false,
  marketing: false
});

onMounted(() => {
  // Check if user has already made a choice
  const consent = localStorage.getItem('cookie-consent');
  if (!consent) {
    // Small delay to allow page load before showing banner
    setTimeout(() => {
      isVisible.value = true;
    }, 1000);
  } else {
    try {
      const savedPrefs = localStorage.getItem('cookie-preferences');
      if (savedPrefs) {
        preferences.value = { ...preferences.value, ...JSON.parse(savedPrefs), necessary: true };
      }
    } catch (e) {
      // ignore JSON parse error
    }
  }
});

const toggleCategory = (key: keyof CookiePreferences) => {
  if (key === 'necessary') return; // Cannot toggle necessary
  preferences.value[key] = !preferences.value[key];
};

const savePreferences = (prefs: CookiePreferences, consentStatus: string) => {
  localStorage.setItem('cookie-consent', consentStatus);
  localStorage.setItem('cookie-preferences', JSON.stringify(prefs));
  isVisible.value = false;
  showPreferences.value = false;
};

const acceptAll = () => {
  preferences.value = {
    necessary: true,
    preferences: true,
    statistics: true,
    marketing: true
  };
  savePreferences(preferences.value, 'accepted_all');
};

const declineAll = () => {
  preferences.value = {
    necessary: true,
    preferences: false,
    statistics: false,
    marketing: false
  };
  savePreferences(preferences.value, 'declined');
};

const saveCustomPreferences = () => {
  savePreferences(preferences.value, 'custom');
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
      class="fixed bottom-0 left-0 w-full bg-white shadow-[0_-10px_35px_rgba(0,0,0,0.12)] border-t border-neutral-100 z-[100] p-4 sm:p-6 transition-all"
    >
      <div class="max-w-[1600px] mx-auto flex flex-col gap-5">
        
        <!-- Top Row: Icon, Information, & Primary Actions -->
        <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 lg:gap-8">
          
          <!-- Text & Icon -->
          <div class="flex items-start lg:items-center gap-4 flex-1">
            <div class="p-2.5 bg-primary/10 rounded-xl shrink-0 hidden sm:flex items-center justify-center">
              <Cookie class="w-6 h-6 text-primary" />
            </div>
            <div>
              <div class="flex items-center gap-2 mb-1 flex-wrap">
                <h3 class="text-neutral-900 font-bold text-base tracking-tight">We value your privacy</h3>
                <span class="inline-flex items-center gap-1 text-[11px] font-medium bg-neutral-100 text-neutral-600 px-2 py-0.5 rounded-full">
                  <ShieldCheck class="w-3 h-3 text-primary" /> Privacy Protected
                </span>
              </div>
              <p class="text-neutral-500 text-xs leading-relaxed">
                We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. customise your cookie settings below or accept all to continue. Read our 
                <NuxtLink to="/privacy-policy" class="text-primary hover:underline font-medium">Privacy Policy</NuxtLink> and 
                <NuxtLink to="/cookie-policy" class="text-primary hover:underline font-medium">Cookie Policy</NuxtLink>.
              </p>
            </div>
          </div>
          
          <!-- Action Buttons -->
          <div class="flex flex-wrap items-center gap-2.5 w-full lg:w-auto shrink-0 mt-1 lg:mt-0">
            <button 
              type="button"
              @click="showPreferences = !showPreferences"
              class="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 text-xs sm:text-sm font-semibold py-2.5 px-4 rounded-xl transition-colors duration-200 cursor-pointer"
            >
              <SlidersHorizontal class="w-3.5 h-3.5" />
              <span>{{ showPreferences ? 'Hide Options' : 'customise' }}</span>
              <component :is="showPreferences ? ChevronUp : ChevronDown" class="w-3.5 h-3.5" />
            </button>
            
            <button 
              type="button"
              @click="declineAll"
              class="flex-1 sm:flex-none bg-neutral-100 hover:bg-neutral-200 text-neutral-700 text-xs sm:text-sm font-semibold py-2.5 px-5 rounded-xl transition-colors duration-200 cursor-pointer"
            >
              Decline All
            </button>

            <button 
              v-if="showPreferences"
              type="button"
              @click="saveCustomPreferences"
              class="w-full sm:w-auto bg-neutral-800 hover:bg-black text-white text-xs sm:text-sm font-semibold py-2.5 px-5 rounded-xl transition-all duration-200 cursor-pointer shadow-sm"
            >
              Save Preferences
            </button>
            
            <button 
              type="button"
              @click="acceptAll"
              class="flex-1 sm:flex-none bg-black hover:bg-primary text-white text-xs sm:text-sm font-semibold py-2.5 px-6 rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-sm cursor-pointer"
            >
              Accept All
            </button>
          </div>

        </div>

        <!-- Collapsible / Expandable Options Grid for Categories -->
        <Transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 max-h-0"
          enter-to-class="opacity-100 max-h-[500px]"
          leave-active-class="transition-all duration-200 ease-in"
          leave-from-class="opacity-100 max-h-[500px]"
          leave-to-class="opacity-0 max-h-0"
        >
          <div v-if="showPreferences" class="overflow-hidden border-t border-neutral-100 pt-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div 
                v-for="category in cookieCategories" 
                :key="category.key"
                @click="!category.disabled && toggleCategory(category.key)"
                :class="[
                  'relative p-3.5 rounded-2xl border transition-all duration-200 flex flex-col justify-between select-none',
                  category.disabled 
                    ? 'bg-neutral-50/80 border-neutral-200 cursor-not-allowed' 
                    : preferences[category.key] 
                      ? 'bg-primary/5 border-primary/40 shadow-xs cursor-pointer hover:border-primary' 
                      : 'bg-white border-neutral-200 hover:border-neutral-300 cursor-pointer'
                ]"
              >
                <!-- Top Row inside category card -->
                <div class="flex items-center justify-between gap-2 mb-2">
                  <div class="flex items-center gap-2">
                    <span class="font-semibold text-xs sm:text-sm text-neutral-900">{{ category.title }}</span>
                    <span 
                      :class="[
                        'text-[10px] font-medium px-2 py-0.5 rounded-full',
                        category.disabled 
                          ? 'bg-neutral-200 text-neutral-700' 
                          : preferences[category.key] 
                            ? 'bg-primary/20 text-primary font-semibold' 
                            : 'bg-neutral-100 text-neutral-500'
                      ]"
                    >
                      {{ category.badge }}
                    </span>
                  </div>

                  <!-- Radio / Switch selector button -->
                  <div 
                    role="checkbox"
                    :aria-checked="category.disabled ? true : preferences[category.key]"
                    :aria-label="category.title"
                    class="relative inline-flex items-center"
                  >
                    <input 
                      type="checkbox"
                      :checked="category.disabled ? true : preferences[category.key]"
                      :disabled="category.disabled"
                      class="sr-only"
                      @click.stop
                      @change="toggleCategory(category.key)"
                    />
                    <!-- Styled Toggle Switch -->
                    <div 
                      :class="[
                        'w-9 h-5 rounded-full transition-colors duration-200 relative flex items-center p-0.5',
                        category.disabled || preferences[category.key] ? 'bg-primary' : 'bg-neutral-300'
                      ]"
                    >
                      <div 
                        :class="[
                          'w-4 h-4 rounded-full bg-white shadow-xs transform transition-transform duration-200',
                          (category.disabled || preferences[category.key]) ? 'translate-x-4' : 'translate-x-0'
                        ]"
                      />
                    </div>
                  </div>
                </div>

                <!-- Description -->
                <p class="text-[11px] text-neutral-500 leading-snug">
                  {{ category.description }}
                </p>
              </div>
            </div>

            <!-- Footer helper in options section -->
            <div class="flex items-center justify-between mt-3 text-[11px] text-neutral-400">
              <span>* Necessary cookies are mandatory for technical operation.</span>
              <button 
                type="button" 
                @click="saveCustomPreferences" 
                class="text-primary hover:underline font-medium cursor-pointer"
              >
                Apply selection
              </button>
            </div>
          </div>
        </Transition>

      </div>
    </div>
  </Transition>
</template>

