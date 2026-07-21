<template>
  <section class="py-16 sm:py-24 bg-[#fafafa]" id="services">
    <div class="mx-auto max-w-[1600px] px-4 sm:px-12 lg:px-8">

      <!-- Header Section -->
      <div class="text-center mb-16">
        <span class="font-poppins text-sm sm:text-base font-normal text-[#1ca3c4] tracking-wide block mb-3">
          Services
        </span>
        <h2 v-motion :initial="{ opacity: 0, y: 30 }" :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins font-semibold text-3xl sm:text-4xl md:text-5xl text-neutral-900 tracking-tight leading-tight max-w-3xl mx-auto">
          Explore our wide range of services
        </h2>
      </div>

      <!-- Services Grid (3 Columns) -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">

        <!-- Left Column - Facebook and Paid Media -->
        <div class="flex flex-col gap-8 justify-between">
          <!-- Card 1: Facebook Marketing -->
          <NuxtLink
            to="/services/digital-advertising"
            v-motion
            :initial="{ opacity: 0, x: -30 }"
            :visible-once="{ opacity: 1, x: 0, transition: { duration: 600 } }"
            class="group bg-white rounded-4xl p-8 sm:p-10 border border-neutral-100/80 flex flex-col justify-between shadow-sm flex-1 hover:border-[#00a5c5] hover:bg-[#0785FB] transition-all duration-300 ease-in-out cursor-pointer"
            style="box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.01);"
          >
            <div class="">
              <!-- Icon Container -->
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-14 h-14 object-contain select-none mb-8">
                <rect width="64" height="64" rx="8" class="fill-[#00A5C5] group-hover:fill-white transition-all duration-300 ease-in-out"/>
                <path d="M49.9993 32.0661C49.9993 22.0886 41.9405 14 31.9996 14C22.0588 14 14 22.0886 14 32.0661C14 40.5384 19.8117 47.6478 27.6516 49.6004V37.5871H23.9401V32.0661H27.6516V29.6872C27.6516 23.5382 30.4243 20.6881 36.4391 20.6881C37.5795 20.6881 39.5472 20.9128 40.3522 21.1368V26.1412C39.9274 26.0964 39.1894 26.074 38.2729 26.074C35.3217 26.074 34.1812 27.1962 34.1812 30.1135V32.0661H40.0606L39.0505 37.5871H34.1812V50C43.0939 48.9196 49.9993 41.303 49.9993 32.0661Z" class="fill-white group-hover:fill-[#0785FB] transition-all duration-300 ease-in-out"/>
              </svg>
              <!-- Title -->
              <h3 v-motion :initial="{ opacity: 0, y: 30 }" :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins font-normal text-3xl sm:text-4xl text-neutral-900 group-hover:text-white transition-all duration-300 ease-in-out leading-tight mb-4">
                Facebook marketing
              </h3>
              <!-- Support Text -->
              <p class="font-poppins text-neutral-500 group-hover:text-white/90 transition-all duration-300 ease-in-out text-sm sm:text-base leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et porttitor leo. Sed ullamcorper gravida ligula, a venenatis risus feugiat a. Nam venenatis diam sit amet laoreet ultricies.
              </p>
            </div>
            <div class="mt-auto pt-4 flex items-center text-[#00a5c5] group-hover:text-white transition-all duration-300 ease-in-out font-poppins font-medium text-sm gap-2">
              Learn more <span class="text-lg leading-none">&rarr;</span>
            </div>
          </NuxtLink>

          <!-- Card 2: Paid Media & Social Media -->
          <NuxtLink
            to="/services/social-media"
            v-motion
            :initial="{ opacity: 0, x: -30 }"
            :visible-once="{ opacity: 1, x: 0, transition: { duration: 600, delay: 100 } }"
            class="group bg-white rounded-4xl p-8 sm:p-10 border border-neutral-100/80 flex flex-col justify-between shadow-sm flex-1 hover:border-[#00a5c5] hover:bg-[#0785FB] transition-all duration-300 ease-in-out cursor-pointer"
            style="box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.01);"
          >
            <div>
              <!-- Icon Container -->
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-14 h-14 object-contain select-none mb-8">
                <rect width="64" height="64" rx="8" class="fill-[#00A5C5] group-hover:fill-white transition-all duration-300 ease-in-out"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M32 14C30.5762 14 29.21 14.5652 28.202 15.5731L26.5946 17.1804C26.2605 17.5099 25.811 17.6959 25.3418 17.6988H23.072C22.3663 17.6986 21.6675 17.8374 21.0155 18.1073C20.3636 18.3772 19.7711 18.773 19.2722 19.2719C18.7732 19.7709 18.3774 20.3633 18.1075 21.0152C17.8376 21.6672 17.6987 22.3659 17.699 23.0716V25.343C17.6961 25.8122 17.5101 26.2617 17.1806 26.5958L15.5732 28.2031C14.5659 29.2103 14 30.5765 14 32.0009C14 33.4254 14.5659 34.7915 15.5732 35.7987L17.1806 37.406C17.5101 37.7401 17.6961 38.1896 17.699 38.6588V40.9303C17.699 42.3547 18.2649 43.7209 19.2722 44.7281C20.2795 45.7353 21.6457 46.3012 23.0702 46.3012H25.3418C25.8116 46.3012 26.2634 46.4884 26.5946 46.8196L28.202 48.4269C29.2093 49.4341 30.5755 50 32 50C33.4245 50 34.7907 49.4341 35.798 48.4269L37.4054 46.8196C37.7395 46.4901 38.189 46.3041 38.6582 46.3012H40.9298C42.3543 46.3012 43.7205 45.7353 44.7278 44.7281C45.7351 43.7209 46.301 42.3547 46.301 40.9303V38.6588C46.301 38.189 46.4882 37.7372 46.8194 37.406L48.4268 35.7987C49.4341 34.7915 50 33.4254 50 32.0009C50 30.5765 49.4341 29.2103 48.4268 28.2031L46.8194 26.5958C46.4899 26.2617 46.3039 25.8122 46.301 25.343V23.0716C46.301 21.6471 45.7351 20.281 44.7278 19.2737C43.7205 18.2665 42.3543 17.7006 40.9298 17.7006H38.6582C38.189 17.6977 37.7395 17.5117 37.4054 17.1822L35.798 15.5749C35.2996 15.0755 34.7076 14.6794 34.0559 14.4091C33.4042 14.1389 32.7055 13.9998 32 14ZM38.6294 27.9133C38.8052 27.7482 38.9461 27.5495 39.0436 27.3289C39.1411 27.1083 39.1933 26.8703 39.197 26.6292C39.2007 26.388 39.156 26.1486 39.0654 25.9251C38.9748 25.7016 38.8402 25.4985 38.6696 25.3281C38.499 25.1576 38.2958 25.0231 38.0722 24.9327C37.8486 24.8422 37.6092 24.7976 37.368 24.8016C37.1268 24.8055 36.8889 24.8578 36.6684 24.9555C36.4478 25.0531 36.2492 25.1941 36.0842 25.37L28.4288 33.0251L26.1302 30.7266C25.7927 30.3888 25.3348 30.199 24.8573 30.1988C24.3798 30.1987 23.9218 30.3882 23.5841 30.7257C23.2463 31.0632 23.0565 31.521 23.0563 31.9985C23.0562 32.4759 23.2457 32.9339 23.5832 33.2717L27.1562 36.8427C27.4937 37.1801 27.9515 37.3697 28.4288 37.3697C28.9061 37.3697 29.3638 37.1801 29.7014 36.8427L38.6294 27.9151V27.9133Z" class="fill-white group-hover:fill-[#0785FB] transition-all duration-300 ease-in-out"/>
              </svg>
              <!-- Title -->
              <h3 v-motion :initial="{ opacity: 0, y: 30 }" :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins font-normal text-3xl sm:text-4xl text-neutral-900 group-hover:text-white transition-all duration-300 ease-in-out leading-tight mb-4">
                Paid media & Social media
              </h3>
              <!-- Support Text -->
              <p class="font-poppins text-neutral-500 group-hover:text-white/90 transition-all duration-300 ease-in-out text-sm sm:text-base leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et porttitor leo. Sed ullamcorper gravida ligula, a venenatis risus feugiat a. Nam venenatis diam sit amet laoreet ultricies.
              </p>
            </div>
            <div class="mt-auto pt-4 flex items-center text-[#00a5c5] group-hover:text-white transition-all duration-300 ease-in-out font-poppins font-medium text-sm gap-2">
              Learn more <span class="text-lg leading-none">&rarr;</span>
            </div>
          </NuxtLink>
        </div>

        <!-- Middle Column - Large Image Card -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
          class="group relative rounded-4xl overflow-hidden min-h-87.5 lg:min-h-full shadow-sm"
        >
          <img
            :src="servicesImg"
            alt="Team collaborating on design and marketing plans"
            referrerpolicy="no-referrer"
            class="absolute inset-0 w-full h-full object-cover origin-center transform scale-100 transition-transform duration-1000 ease-in-out group-hover:scale-105 will-change-transform"
          />
        </div>

        <!-- Right Column - Google Advertising and Web Development -->
        <div class="flex flex-col gap-8 justify-between">
          <!-- Card 3: Google Advertising -->
          <NuxtLink
            to="/services/digital-advertising"
            v-motion
            :initial="{ opacity: 0, x: 30 }"
            :visible-once="{ opacity: 1, x: 0, transition: { duration: 600 } }"
            class="group bg-white rounded-4xl p-8 sm:p-10 border border-neutral-100/80 flex flex-col justify-between shadow-sm flex-1 hover:border-[#00a5c5] hover:bg-[#0785FB] transition-all duration-300 ease-in-out cursor-pointer"
            style="box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.01);"
          >
            <div>
              <!-- Icon Container -->
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-14 h-14 object-contain select-none mb-8">
                <rect width="64" height="64" rx="8" class="fill-[#00A5C5] group-hover:fill-white transition-all duration-300 ease-in-out"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M32.0673 49.9982C27.2138 49.9283 22.5812 47.9577 19.1645 44.5097C17.4946 42.8251 16.1778 40.824 15.2913 38.6238C14.4048 36.4236 13.9665 34.0685 14.002 31.6967C14.1143 26.9618 16.0974 22.4642 19.5174 19.1879C22.9801 15.8702 27.5868 14.0125 32.3823 14H32.6991C37.1002 14.0218 41.3388 15.665 44.6046 18.6154L40.0235 22.7844C37.9751 20.9636 35.3282 19.9602 32.5875 19.9655C29.3739 19.9537 26.2807 21.188 23.9581 23.4091C22.8221 24.4947 21.9121 25.7942 21.2803 27.2329C20.6486 28.6716 20.3076 30.2211 20.277 31.7921C20.2515 33.3628 20.5378 34.923 21.1193 36.3823C21.7008 37.8416 22.566 39.1711 23.6647 40.2939C25.9114 42.5889 28.9597 43.9244 32.1699 44.0201H32.4273C34.9654 44.1497 37.4674 43.3829 39.4781 41.86C41.479 40.3524 42.8675 38.1724 43.3878 35.7217L43.4652 35.5111H32.3967V29.3728H49.8176C49.9532 30.4852 50.0132 31.6007 49.9976 32.7191C49.8194 43.0535 42.7668 50 32.4543 50L32.0673 49.9982Z" class="fill-white group-hover:fill-[#0785FB] transition-all duration-300 ease-in-out"/>
              </svg>
              <!-- Title -->
              <h3 v-motion :initial="{ opacity: 0, y: 30 }" :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins font-normal text-3xl sm:text-4xl text-neutral-900 group-hover:text-white transition-all duration-300 ease-in-out leading-tight mb-4">
                Google advertising
              </h3>
              <!-- Support Text -->
              <p class="font-poppins text-neutral-500 group-hover:text-white/90 transition-all duration-300 ease-in-out text-sm sm:text-base leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et porttitor leo. Sed ullamcorper gravida ligula, a venenatis risus feugiat a. Nam venenatis diam sit amet laoreet ultricies.
              </p>
            </div>
            <div class="mt-auto pt-4 flex items-center text-[#00a5c5] group-hover:text-white transition-all duration-300 ease-in-out font-poppins font-medium text-sm gap-2">
              Learn more <span class="text-lg leading-none">&rarr;</span>
            </div>
          </NuxtLink>

          <!-- Card 4: Website Development -->
          <NuxtLink
            to="/services/website-dev"
            v-motion
            :initial="{ opacity: 0, x: 30 }"
            :visible-once="{ opacity: 1, x: 0, transition: { duration: 600, delay: 100 } }"
            class="group bg-white rounded-4xl p-8 sm:p-10 border border-neutral-100/80 flex flex-col justify-between shadow-sm flex-1 hover:border-[#00a5c5] hover:bg-[#0785FB] transition-all duration-300 ease-in-out cursor-pointer"
            style="box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.01);"
          >
            <div>
              <!-- Icon Container -->
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-14 h-14 object-contain select-none mb-8">
                <rect width="64" height="64" rx="8" class="fill-[#00A5C5] group-hover:fill-white transition-all duration-300 ease-in-out"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.6001 21.2148C17.6001 19.4562 19.0149 18 20.8005 18H43.1997C44.9853 18 46.4001 19.458 46.4001 21.2148V37.8H17.6001V21.2148ZM32.0001 32.4C32.0001 31.9226 32.1897 31.4648 32.5273 31.1272C32.8649 30.7896 33.3227 30.6 33.8001 30.6H37.4001C37.8775 30.6 38.3353 30.7896 38.6729 31.1272C39.0105 31.4648 39.2001 31.9226 39.2001 32.4C39.2001 32.8774 39.0105 33.3352 38.6729 33.6728C38.3353 34.0104 37.8775 34.2 37.4001 34.2H33.8001C33.3227 34.2 32.8649 34.0104 32.5273 33.6728C32.1897 33.3352 32.0001 32.8774 32.0001 32.4ZM25.2969 22.158C25.46 21.9868 25.6552 21.8495 25.8714 21.7538C26.0875 21.658 26.3205 21.6059 26.5568 21.6002C26.7932 21.5945 27.0283 21.6354 27.2489 21.7206C27.4694 21.8058 27.671 21.9337 27.8421 22.0968L32.5671 26.5968C32.7435 26.7649 32.884 26.9671 32.98 27.1911C33.076 27.4151 33.1255 27.6563 33.1255 27.9C33.1255 28.1437 33.076 28.3849 32.98 28.6089C32.884 28.8329 32.7435 29.0351 32.5671 29.2032L27.8421 33.7032C27.4965 34.0326 27.0341 34.2112 26.5568 34.1997C26.0795 34.1883 25.6263 33.9876 25.2969 33.642C24.9675 33.2964 24.7889 32.834 24.8004 32.3567C24.8118 31.8794 25.0125 31.4262 25.3581 31.0968L28.7151 27.9L25.3581 24.7032C25.1869 24.5401 25.0496 24.3449 24.9539 24.1287C24.8581 23.9125 24.8059 23.6796 24.8003 23.4433C24.7946 23.2069 24.8355 22.9718 24.9207 22.7512C25.0059 22.5307 25.1338 22.3291 25.2969 22.158Z" class="fill-white group-hover:fill-[#0785FB] transition-all duration-300 ease-in-out"/>
                <path d="M14 41.3999V43.1999C14 44.1547 14.3793 45.0704 15.0544 45.7455C15.7295 46.4206 16.6452 46.7999 17.6 46.7999H46.4C47.3548 46.7999 48.2705 46.4206 48.9456 45.7455C49.6207 45.0704 50 44.1547 50 43.1999V41.3999H14Z" class="fill-white group-hover:fill-[#0785FB] transition-all duration-300 ease-in-out"/>
              </svg>
              <!-- Title -->
              <h3 v-motion :initial="{ opacity: 0, y: 30 }" :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }" class="font-poppins font-normal text-3xl sm:text-4xl text-neutral-900 group-hover:text-white transition-all duration-300 ease-in-out leading-tight mb-4">
                Website development
              </h3>
              <!-- Support Text -->
              <p class="font-poppins text-neutral-500 group-hover:text-white/90 transition-all duration-300 ease-in-out text-sm sm:text-base leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et porttitor leo. Sed ullamcorper gravida ligula, a venenatis risus feugiat a. Nam venenatis diam sit amet laoreet ultricies.
              </p>
            </div>
            <div class="mt-auto pt-4 flex items-center text-[#00a5c5] group-hover:text-white transition-all duration-300 ease-in-out font-poppins font-medium text-sm gap-2">
              Learn more <span class="text-lg leading-none">&rarr;</span>
            </div>
          </NuxtLink>
        </div>

      </div>

      <!-- View All Services Button -->
      <div class="text-center mt-8">
        <NuxtLink
          to="/services"
          class="inline-block font-poppins text-xs tracking-widest text-white bg-black hover:bg-[#1ca3c4] rounded-full py-4 px-10 hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-sm font-medium lowercase"
        >
          View all services
        </NuxtLink>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import servicesImg from '~/assets/images/services-image.webp';
import facebookIcon from '~/assets/images/facebook-service-icon.svg';
import paidMediaIcon from '~/assets/images/paid-media-service-icon.svg';
import googleIcon from '~/assets/images/google-service-icon.svg';
import webDevIcon from '~/assets/images/website-development-icon.svg';

defineEmits(['cta-click']);
</script>
