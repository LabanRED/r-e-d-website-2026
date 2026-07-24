<template>
  <NotFound />
</template>

<script setup lang="ts">
import NotFound from '~/components/NotFound.vue';

useHead({
  title: '404 - Page Not Found | R-E-D',
  meta: [
    { name: 'description', content: 'Lost, this page is. In another system, it may be.' }
  ]
});
</script>
