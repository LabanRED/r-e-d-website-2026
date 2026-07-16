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
import Hero from '~/components/Hero.vue';
import StatsBar from '~/components/StatsBar.vue';
import LogoCarousel from '~/components/LogoCarousel.vue';
import Testimonials from '~/components/Testimonials.vue';
import WhyUs from '~/components/WhyUs.vue';
import ServicesGrid from '~/components/ServicesGrid.vue';
import TwoColumnAbout from '~/components/TwoColumnAbout.vue';
import RedProcess from '~/components/RedProcess.vue';
import Partnerships from '~/components/Partnerships.vue';
import EstablishPresence from '~/components/EstablishPresence.vue';

const { openModal } = useModal();
</script>
