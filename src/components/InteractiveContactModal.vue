<template>
  <transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4">
      <!-- Backdrop -->
      <div
        @click="onClose"
        class="absolute inset-0 bg-neutral-900/60 backdrop-blur-md cursor-pointer"
      ></div>

      <!-- Modal Card -->
      <transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 scale-90 translate-y-4"
        enter-to-class="opacity-100 scale-100 translate-y-0"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 scale-100 translate-y-0"
        leave-to-class="opacity-0 scale-90 translate-y-4"
        appear
      >
        <div
          class="relative w-full max-w-lg overflow-hidden rounded-3xl border border-neutral-100 bg-white p-8 text-neutral-900 shadow-2xl z-10"
        >
          <!-- Close Button -->
          <button
            @click="onClose"
            class="absolute top-6 right-6 rounded-full p-1.5 text-neutral-400 hover:bg-neutral-50 hover:text-neutral-800 transition-colors duration-200 font-poppins font-medium lowercase"
          >
            <X class="h-5 w-5" />
          </button>

          <div v-if="!isSubmitted">
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div>
                <div class="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-[#1ca3c4] mb-3 select-none">
                  <Star class="h-3 w-3 fill-[#1ca3c4] text-[#1ca3c4]" />
                  <span>R-E-D LEAD DESK</span>
                </div>
                <h3 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-sans text-2xl font-semibold tracking-tight text-neutral-900">Get in touch with us</h3>
                <p class="font-sans text-sm text-neutral-500 mt-1.5">
                  Submit your details and we will formulate a tailor-made digital marketing roadmap for your brand.
                </p>
              </div>

              <div class="space-y-4">
                <!-- Name Input -->
                <div class="space-y-1.5">
                  <label class="block text-xs font-bold tracking-wider text-neutral-500 uppercase font-mono">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    v-model="name"
                    placeholder="e.g. Jane Doe"
                    class="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:border-[#1ca3c4] focus:outline-none focus:ring-1 focus:ring-[#1ca3c4] transition-colors duration-200"
                  />
                </div>

                <!-- Email Input -->
                <div class="space-y-1.5">
                  <label class="block text-xs font-bold tracking-wider text-neutral-500 uppercase font-mono">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    v-model="email"
                    placeholder="e.g. jane@company.com"
                    class="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:border-[#1ca3c4] focus:outline-none focus:ring-1 focus:ring-[#1ca3c4] transition-colors duration-200"
                  />
                </div>

                <!-- Project Type -->
                <div class="space-y-1.5">
                  <label class="block text-xs font-bold tracking-wider text-neutral-500 uppercase font-mono">
                    Core Objective
                  </label>
                  <select
                    v-model="projectType"
                    class="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 focus:border-[#1ca3c4] focus:outline-none focus:ring-1 focus:ring-[#1ca3c4] transition-colors duration-200"
                  >
                    <option>Lead Generation & Funnels</option>
                    <option>Social Media Marketing</option>
                    <option>Google Advertising</option>
                    <option>Website Development & Maintenance</option>
                    <option>Full Scale Marketing Support</option>
                    <option>PostX Platform</option>
                  </select>
                </div>

                <!-- Message -->
                <div class="space-y-1.5">
                  <label class="block text-xs font-bold tracking-wider text-neutral-500 uppercase font-mono">
                    Brief Description
                  </label>
                  <textarea
                    rows="3"
                    v-model="message"
                    placeholder="Tell us about your brand or requirements..."
                    class="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:border-[#1ca3c4] focus:outline-none focus:ring-1 focus:ring-[#1ca3c4] transition-colors duration-200 resize-none"
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                :disabled="isLoading"
                class="flex w-full items-center justify-center gap-2 rounded-xl bg-black hover:bg-[#1ca3c4] py-3.5 text-sm text-white shadow-lg shadow-[#1ca3c4]/10 active:scale-[0.98] transition-all duration-300 disabled:opacity-50 font-poppins font-medium lowercase"
              >
                <div v-if="isLoading" class="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                <template v-else>
                  <span>Submit Details</span>
                  <Send class="h-4 w-4" />
                </template>
              </button>
            </form>
          </div>

          <div v-else class="flex flex-col items-center text-center py-8 space-y-6">
            <div class="flex h-16 w-16 items-center justify-center rounded-full bg-[#1ca3c4]/10 text-[#1ca3c4] border border-[#1ca3c4]/20">
              <CheckCircle2 class="h-10 w-10" />
            </div>
            
            <div class="space-y-2">
              <h3 v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-sans text-2xl font-semibold tracking-tight text-neutral-900">Details Received!</h3>
              <p class="font-sans text-sm text-neutral-500 max-w-sm leading-relaxed">
                Thank you <span class="font-semibold text-neutral-900">{{ name }}</span>. Your enquiry for <span class="font-semibold text-neutral-900">{{ projectType }}</span> has been received. Our team will follow up at <span class="font-semibold text-neutral-900">{{ email }}</span>.
              </p>
            </div>

            <button
              @click="handleReset"
              class="rounded-full bg-black hover:bg-[#1ca3c4] px-8 py-3 text-sm text-white transition-all duration-300 shadow-md shadow-[#1ca3c4]/10 font-poppins font-medium lowercase"
            >
              Return to Site
            </button>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { X, Send, CheckCircle2, Star } from 'lucide-vue-next';

const props = defineProps<{ isOpen: boolean }>();
const emit = defineEmits(['close']);

const name = ref('');
const email = ref('');
const projectType = ref('Frontend Engineering');
const message = ref('');
const isSubmitted = ref(false);
const isLoading = ref(false);

const handleSubmit = () => {
  if (!name.value || !email.value) return;

  isLoading.value = true;
  // Simulate API request
  setTimeout(() => {
    isLoading.value = false;
    isSubmitted.value = true;
  }, 1000);
};

const handleReset = () => {
  name.value = '';
  email.value = '';
  projectType.value = 'Frontend Engineering';
  message.value = '';
  isSubmitted.value = false;
  emit('close');
};

const onClose = () => {
  emit('close');
};
</script>
