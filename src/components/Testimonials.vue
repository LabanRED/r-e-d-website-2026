<template>
  <section class="py-16 sm:py-24 bg-[#fafafa]" id="testimonials">
    <div class="mx-auto max-w-[1600px] px-8 sm:px-8 lg:px-8">
      
      <!-- Header Section -->
      <div class="text-center mb-16">
        <span class="font-poppins text-sm sm:text-base font-regular text-[#1ca3c4] tracking-wide block mb-3">
          What our clients say
        </span>
        <h2 class="font-poppins font-semibold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight max-w-3xl md:w-[500px] lg:w-[500px] mx-auto">
          Honest feedback from valued clients
        </h2>
      </div>

      <!-- Testimonials Grid / Scrollable Row on Mobile -->
      <div 
        ref="scrollRef"
        @scroll="handleScroll"
        class="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 pb-8 md:pb-0 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden -mx-4 px-4 sm:-mx-8 sm:px-8 md:mx-0 md:px-0"
      >
        <div
          v-for="(item, idx) in testimonials"
          :key="idx"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: idx * 150 } }"
          :hovered="{ y: -6, transition: { duration: 300 } }"
          class="flex-shrink-0 w-[85vw] sm:w-[400px] md:w-auto snap-center bg-white rounded-[24px] p-8 sm:p-10 shadow-[0px_4px_30px_rgba(0,0,0,0.03)] border border-neutral-100 flex flex-col justify-between transition-all duration-300"
        >
          <div>
            <!-- Quotes Icon & Stars - Left Aligned -->
            <div class="flex flex-row items-start gap-4 mb-6">
              <img loading="lazy" :src="quotesTestimonial"
                alt="Quote Icon"
                class="h-4 w-auto opacity-90 object-contain select-none"
                referrerpolicy="no-referrer"
              />
              
              <!-- Star Rating -->
              <div class="flex gap-1">
                <Star v-for="i in 5" :key="i" class="w-[18px] h-[18px] fill-[#FBBF24] text-[#FBBF24]" />
              </div>
            </div>

            <!-- Supporting Text -->
            <p class="font-poppins text-neutral-700 text-sm sm:text-base leading-relaxed mb-8">
              {{ item.text }}
            </p>
          </div>

          <!-- Author Info -->
          <div class="flex items-center gap-4 border-t border-neutral-50 pt-6">
            <img loading="lazy" :src="item.avatar"
              :alt="item.name"
              referrerpolicy="no-referrer"
              class="w-12 h-12 rounded-full object-cover border-2 border-neutral-100"
            />
            <div class="flex flex-col text-left font-poppins">
              <span class="font-semibold text-neutral-900 text-sm sm:text-base">
                {{ item.name }}
              </span>
              <span class="text-neutral-500 text-xs sm:text-sm">
                {{ item.company }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile Scroller Controls -->
      <div class="flex md:hidden flex-col items-center gap-6 mt-4">
        <!-- Dots -->
        <div class="flex justify-center gap-2">
          <button
            v-for="(item, idx) in testimonials"
            :key="idx"
            @click="scrollTo(idx)"
            :class="[
              'w-3 h-3 rounded-full transition-colors',
              activeIndex === idx ? 'bg-[#00a5c5]' : 'bg-neutral-200'
            ]"
            :aria-label="`Go to slide ${idx + 1}`"
          ></button>
        </div>
        
        <!-- Arrows -->
        <div class="flex justify-center gap-8">
          <button
            @click="scrollPrev"
            :disabled="activeIndex === 0"
            :class="[
              'w-14 h-14 rounded-full flex items-center justify-center transition-all',
              activeIndex === 0 
                ? 'bg-neutral-200 text-neutral-400' 
                : 'bg-[#00a5c5] text-white hover:bg-[#0092af] active:scale-95 shadow-md'
            ]"
            aria-label="Previous testimonial"
          >
            <ChevronLeft class="w-8 h-8" />
          </button>
          <button
            @click="scrollNext"
            :disabled="activeIndex === testimonials.length - 1"
            :class="[
              'w-14 h-14 rounded-full flex items-center justify-center transition-all',
              activeIndex === testimonials.length - 1 
                ? 'bg-neutral-200 text-neutral-400' 
                : 'bg-[#00a5c5] text-white hover:bg-[#0092af] active:scale-95 shadow-md'
            ]"
            aria-label="Next testimonial"
          >
            <ChevronRight class="w-8 h-8" />
          </button>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Star, ChevronLeft, ChevronRight } from 'lucide-vue-next';
import quotesTestimonial from '~/assets/images/quotes-testimonial.webp';

const testimonials = [
  {
    text: "Before R-E-D, we had leads, but not the right ones. Now quality's improved, and we're closing more deals consistently than ever before.",
    name: "John Henderson",
    company: "Luxury Motors",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80"
  },
  {
    text: "R-E-D feels like part of our team, constantly improving our ads and content. You can see real progress week by week.",
    name: "Jessica Thomson",
    company: "Noble Motor Traders",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80"
  },
  {
    text: "There's a clear before and after. Stronger presence, steady enquiries, and real confidence in where our business is heading now.",
    name: "Fiona Anderson",
    company: "Prime Auto Group",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80"
  }
];

const scrollRef = ref<HTMLDivElement | null>(null);
const activeIndex = ref(0);

const handleScroll = () => {
  if (!scrollRef.value) return;
  const scrollLeft = scrollRef.value.scrollLeft;
  // Calculate the active index based on scroll position and item width
  const containerWidth = scrollRef.value.clientWidth;
  // We assume items are roughly 85vw on mobile
  const newIndex = Math.round(scrollLeft / containerWidth);
  if (newIndex !== activeIndex.value && newIndex >= 0 && newIndex < testimonials.length) {
    activeIndex.value = newIndex;
  }
};

const scrollTo = (index: number) => {
  if (!scrollRef.value) return;
  const child = scrollRef.value.children[index] as HTMLElement;
  if (child) {
    const scrollPos = child.offsetLeft - (scrollRef.value.clientWidth - child.clientWidth) / 2;
    scrollRef.value.scrollTo({ left: scrollPos, behavior: 'smooth' });
    activeIndex.value = index;
  }
};

const scrollNext = () => {
  if (activeIndex.value < testimonials.length - 1) {
    scrollTo(activeIndex.value + 1);
  }
};

const scrollPrev = () => {
  if (activeIndex.value > 0) {
    scrollTo(activeIndex.value - 1);
  }
};
</script>
