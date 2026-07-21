<template>
  <div>
    <!-- Main App Content -->
    <div v-show="previewMode === 'desktop' || inIframe">
      <Navbar @cta-click="openModal" />
      
      <main>
        <slot />
      </main>
      
      <Footer />
      
      <InteractiveContactModal :is-open="isModalOpen" @close="closeModal" />
      <WhatsAppButton />
    </div>

    <!-- Device Preview Overlay -->
    <ClientOnly>
      <div v-if="isDev && previewMode !== 'desktop' && !inIframe" class="fixed inset-0 z-[99999] bg-neutral-900 flex flex-col items-center justify-center p-4 sm:p-8 overflow-y-auto">
        <!-- Toolbar -->
        <div class="mb-6 flex-shrink-0 flex items-center gap-2 bg-neutral-800 p-1.5 rounded-full shadow-lg border border-neutral-700">
          <button @click="previewMode = 'mobile'" :class="['p-2 rounded-full transition-colors', previewMode === 'mobile' ? 'bg-neutral-600 text-white' : 'text-neutral-400 hover:text-white hover:bg-neutral-700']" title="Mobile">
            <Smartphone class="w-5 h-5" />
          </button>
          <button @click="previewMode = 'tablet'" :class="['p-2 rounded-full transition-colors', previewMode === 'tablet' ? 'bg-neutral-600 text-white' : 'text-neutral-400 hover:text-white hover:bg-neutral-700']" title="Tablet">
            <Tablet class="w-5 h-5" />
          </button>
          <div class="w-px h-6 bg-neutral-700 mx-1"></div>
          <button @click="previewMode = 'desktop'" class="px-4 py-1.5 rounded-full text-sm font-medium text-neutral-300 hover:text-white hover:bg-neutral-700 transition-colors">
            Exit Preview
          </button>
        </div>

        <!-- Iframe Container -->
        <div :class="[
          'relative bg-white overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] transition-all duration-300 flex-shrink-0',
          previewMode === 'mobile' ? 'w-[375px] h-[812px] rounded-[3rem] border-[12px] border-black' : 'w-[768px] h-[1024px] rounded-[2rem] border-[12px] border-black'
        ]">
          <iframe :src="currentUrl" class="w-full h-full border-0 bg-white"></iframe>
        </div>
      </div>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import Navbar from '~/components/header-footer/Navbar.vue';
import Footer from '~/components/header-footer/Footer.vue';
import { Smartphone, Tablet } from 'lucide-vue-next';

const { isModalOpen, openModal, closeModal } = useModal();

const isDev = import.meta.env.DEV;
const previewMode = useState('previewMode', () => 'desktop');
const inIframe = ref(false);

const currentUrl = computed(() => {
  if (typeof window === 'undefined') return '';
  return window.location.href;
});

onMounted(() => {
  if (window.self !== window.top) {
    inIframe.value = true;
  } else {
    window.addEventListener('message', (e) => {
      if (e.data?.type === 'set-preview-mode') {
        previewMode.value = e.data.mode;
      }
    });
  }
});
</script>
