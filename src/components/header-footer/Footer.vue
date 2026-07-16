<template>
  <footer class="w-full bg-transparent p-5 font-sans select-none" id="footer">
    <div class="mx-auto max-w-[1600px] rounded-[32px] bg-black text-white p-8 sm:p-12 md:p-16 lg:p-20 shadow-2xl">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 items-start w-full">
        
        <!-- Column 1: Our Services -->
        <div>
          <h3 class="font-poppins font-semibold text-2xl sm:text-3xl text-white mb-6">
            Our services
          </h3>
          <ul class="space-y-3 font-poppins text-neutral-400 text-sm sm:text-base">
            <li>
              <NuxtLink to="#service-digital-advertising" class="hover:text-white transition-colors duration-200">
                Digital advertising
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="#service-social-media" class="hover:text-white transition-colors duration-200">
                Social media management
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="#service-website-dev" class="hover:text-white transition-colors duration-200">
                Website development <br />& maintenance
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="#service-online-reputation" class="hover:text-white transition-colors duration-200">
                Online reputation solutions
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="#service-location-listing" class="hover:text-white transition-colors duration-200">
                Location listing and solutions
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Column 2: Our Products -->
        <div>
          <h3 class="font-poppins font-semibold text-2xl sm:text-3xl text-white mb-6">
            Our products
          </h3>
          <ul class="space-y-3 font-poppins text-neutral-400 text-sm sm:text-base">
            <li>
              <NuxtLink to="#postx" class="hover:text-white transition-colors duration-200 inline-block mt-1">
                <img loading="lazy" :src="postXWhiteLogo" alt="PostX Logo" class="h-6 object-contain" />
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Column 3: Our Socials -->
        <div>
          <h3 class="font-poppins font-semibold text-2xl sm:text-3xl text-white mb-6">
            Our socials
          </h3>
          <div class="flex items-center gap-5 mt-2">
            <a 
              href="https://www.facebook.com/ReachEngageDevelop" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="text-neutral-400 hover:text-white transition-colors duration-200"
              aria-label="Facebook"
            >
              <Facebook class="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/company/reach-engage-develop/posts/?feedView=all" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="text-neutral-400 hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin class="w-6 h-6" />
            </a>
          </div>
        </div>

        <!-- Column 4: Get in Touch & Logo -->
        <div class="flex flex-col justify-between h-full min-h-[220px]">
          <div>
            <h3 class="font-poppins font-semibold text-2xl sm:text-3xl text-white mb-6">
              Get in touch
            </h3>
            <ul class="space-y-3 font-poppins text-neutral-400 text-sm sm:text-base">
              <li>
                <NuxtLink to="#contact" class="hover:text-white transition-colors duration-200">
                  Contact us
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="#why-us" class="hover:text-white transition-colors duration-200">
                  About us
                </NuxtLink>
              </li>
              <li class="text-neutral-400">
                Tel: 010 025 3560
              </li>
              <li class="text-neutral-400 leading-relaxed">
                Address: 3 Polo Cres,<br />
                Woodmead, Sandton, 2191
              </li>
            </ul>
          </div>

          <!-- Logo container placed nicely underneath the Get in Touch section -->
          <div class="mt-8 pt-4">
            <a href="#">
              <img loading="lazy" :src="redWhiteLogo" 
                alt="R-E-D Logo" 
                class="h-auto w-36 object-contain select-none transition-opacity hover:opacity-80 duration-200"
                referrerpolicy="no-referrer"
              />
            </a>
          </div>
        </div>

      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Facebook, Linkedin } from 'lucide-vue-next';
import redWhiteLogo from '~/assets/images/r-e-d-white-logo.svg';
import postXWhiteLogo from '~/assets/images/PostX_Web_white_Logo.png';
</script>
