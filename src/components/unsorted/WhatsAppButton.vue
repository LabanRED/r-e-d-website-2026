<template>
  <a
    href="https://wa.me/27720688509"
    target="_blank"
    rel="noopener noreferrer"
    class="fixed w-42 md:w-48 bottom-[2%] right-[2%] z-9999 group flex items-center justify-center transition-transform hover:scale-105"
    aria-label="Contact us on WhatsApp"
  >
    <div class="relative w-full drop-shadow-2xl">
      <!-- Make the first image relative so the container takes its natural height -->
      <img
        :src="defaultCta"
        alt="WhatsApp"
        class="w-full h-auto object-contain transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0"
      />
      <!-- The second image remains absolute, perfectly overlaying the first -->
      <img
        :src="hoverCta"
        alt="WhatsApp Hover"
        class="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
      />
    </div>
  </a>
</template>

<script setup lang="ts">
import defaultCta from '~/assets/images/whatsapp-cta.svg';
import hoverCta from '~/assets/images/whatsapp-hover-cta.svg';
</script>
