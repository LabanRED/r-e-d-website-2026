<template>
  <div>
    <!-- Hero Banner Section -->
    <Hero @cta-click="openModal" />

    <!-- Stats Bar (Responsive Metrics) -->
    <StatsBar />

    <!-- Trusted by Clients Logo Carousel -->
    <LogoCarousel />

    <!-- Testimonials Section -->
    <Testimonials />

    <!-- Why Us / Comparison Section -->
    <WhyUs @cta-click="openModal" />

    <!-- Services Section -->
    <ServicesGrid @cta-click="openModal" />

    <!-- PostX Platform preview -->
    <TwoColumnAbout @cta-click="openModal" />

    <!-- R-E-D Process Section -->
    <RedProcess @cta-click="openModal" />

    <!-- Meta & Google Partnerships Section -->
    <Partnerships @cta-click="openModal" />

    <!-- Establish Digital Presence Center CTA Section -->
    <EstablishPresence @cta-click="openModal" />
  </div>
</template>

<script setup lang="ts">
const { openModal } = useModal();

useHead({
  title: 'R-E-D | Digital Marketing & Sales Solutions Specialist',
  meta: [
    {
      name: 'description',
      content: 'Empower your brand with R-E-D. We specialize in performance digital advertising, social media management, custom web development, online reputation, and AI-powered sales automation.'
    },
    { property: 'og:title', content: 'R-E-D | Digital Marketing & Sales Solutions Specialist' },
    { property: 'og:description', content: 'Empower your brand with R-E-D. We specialize in performance digital advertising, social media management, custom web development, online reputation, and AI-powered sales automation.' },
    { property: 'og:type', content: 'website' }
  ]
});
</script>
