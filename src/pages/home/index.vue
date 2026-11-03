<template>
  <div>
    <!-- Hero Banner Section -->
    <Hero @cta-click="openModal" />

    <!-- Stats Bar (Responsive Metrics) -->
    <StatsBar />

    <!-- Trusted by 500+ Dealers Logo Carousel -->
    <LogoCarousel />

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
definePageMeta({
  alias: ['/']
});

const { openModal } = useModal();

useHead({
  title: 'Reach Engage Develop (R-E-D) | Digital Marketing & Sales Solutions',
  titleTemplate: '%s',
  meta: [
    {
      name: 'description',
      content: "Reach Engage Develop (R-E-D) is South Africa's premier digital solutions and performance marketing specialist. Powering brands through digital advertising, Conexa website platform, and PostX sales automation."
    },
    {
      name: 'keywords',
      content: 'Red, R-E-D, Reach Engage Develop, Reach Engage and Develop, Reach Enage Develop, RED marketing, RED agency, RED digital, automotive digital marketing'
    },
    { property: 'og:title', content: 'Reach Engage Develop (R-E-D) | Digital Marketing & Sales Solutions' },
    { property: 'og:description', content: "Reach Engage Develop (R-E-D) is South Africa's premier digital solutions and performance marketing specialist. Powering brands through digital advertising, Conexa website platform, and PostX sales automation." },
    { property: 'og:type', content: 'website' }
  ]
});
</script>
