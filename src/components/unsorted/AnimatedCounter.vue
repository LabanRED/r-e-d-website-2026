<template>
  <span ref="el">
    {{ isNumber ? `${prefix}${Math.round(output)}${suffix}` : text }}
  </span>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useTransition, useIntersectionObserver, TransitionPresets } from '@vueuse/core';

const props = defineProps<{ text: string }>();

const match = computed(() => props.text.match(/^(\D*)(\d+)(\D*)$/));
const prefix = computed(() => match.value ? match.value[1] || '' : '');
const numStr = computed(() => match.value ? match.value[2] || '' : '');
const suffix = computed(() => match.value ? match.value[3] || '' : '');

const num = computed(() => parseInt(numStr.value, 10));
const isNumber = computed(() => !isNaN(num.value));

const el = ref(null);
const targetValue = ref(0);
const output = useTransition(targetValue, {
  duration: 3000,
  transition: TransitionPresets.easeOutCubic,
});

const { stop } = useIntersectionObserver(
  el,
  (entries) => {
    const entry = entries[0];
    if (entry && entry.isIntersecting && isNumber.value) {
      targetValue.value = num.value;
      stop();
    }
  },
  { threshold: 0.5 }
);
</script>
