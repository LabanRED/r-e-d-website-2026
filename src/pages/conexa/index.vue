<template>
  <div class="min-h-screen bg-[#0a0a0a] text-white pt-24 lg:pt-32 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
    <div class="max-w-4xl mx-auto text-center">
      <img src="~/assets/images/conexa-logo.svg" alt="Conexa Logo" class="h-16 md:h-24 mx-auto mb-10 object-contain" />
      <h1 class="text-4xl md:text-6xl font-bold mb-6 font-poppins">Conexa</h1>
      <p class="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
        We are building something amazing here. Please check back soon to see how Conexa can transform your business.
      </p>
      
      <div class="mt-12">
        <NuxtLink to="/" class="inline-flex items-center justify-center rounded-full bg-white text-black hover:bg-neutral-200 px-8 py-3.5 text-sm font-semibold transition-colors duration-200">
          Return Home
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Conexa | R-E-D',
  meta: [
    { name: 'description', content: 'Discover Conexa services' }
  ]
})
</script>
