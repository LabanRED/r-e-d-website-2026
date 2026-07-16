<template>
  <div>
    <Navbar @cta-click="openModal" />
    
    <main>
      <slot />
    </main>
    
    <Footer />
    
    <InteractiveContactModal :is-open="isModalOpen" @close="closeModal" />
    <WhatsAppButton />
  </div>
</template>

<script setup lang="ts">
import Navbar from '~/components/header-footer/Navbar.vue';
import Footer from '~/components/header-footer/Footer.vue';
import InteractiveContactModal from '~/components/InteractiveContactModal.vue';
import WhatsAppButton from '~/components/WhatsAppButton.vue';

const { isModalOpen, openModal, closeModal } = useModal();
</script>
