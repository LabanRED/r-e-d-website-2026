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
const { isModalOpen, openModal, closeModal } = useModal();
</script>
