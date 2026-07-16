<template>
  <footer class="w-full bg-transparent p-5 font-sans select-none" id="footer">
    <div class="mx-auto max-w-[1600px] rounded-4xl bg-black text-white p-8 sm:p-12 md:p-16 lg:p-20 shadow-2xl">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 items-start w-full">
        
        <!-- Column 1: Our Services -->
        <div>
          <h3 class="font-poppins font-semibold text-2xl sm:text-3xl text-white mb-6">
            Our services
          </h3>
          <ul class="space-y-3 font-poppins text-neutral-400 text-sm sm:text-base">
            <li>
              <NuxtLink to="/services/digital-advertising" class="hover:text-white transition-colors duration-200">
                Digital advertising
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/services/social-media" class="hover:text-white transition-colors duration-200">
                Social media management
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/services/website-dev" class="hover:text-white transition-colors duration-200">
                Website development <br />& maintenance
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/services/online-reputation" class="hover:text-white transition-colors duration-200">
                Online reputation solutions
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/services/location-listing" class="hover:text-white transition-colors duration-200">
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
              <NuxtLink to="/postx" class="hover:text-white transition-colors duration-200 inline-block mt-1">
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
              class="text-neutral-400 hover:opacity-80 transition-opacity duration-200"
              aria-label="Facebook"
            >
              <img :src="facebookIcon" alt="Facebook" class="w-6 h-6 object-contain" />
            </a>
            <a 
              href="https://www.linkedin.com/company/reach-engage-develop/posts/?feedView=all" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="text-neutral-400 hover:opacity-80 transition-opacity duration-200"
              aria-label="LinkedIn"
            >
              <img :src="linkedinIcon" alt="LinkedIn" class="w-6 h-6 object-contain" />
            </a>
          </div>
        </div>

        <!-- Column 4: Get in Touch & Logo -->
        <div class="flex flex-col justify-between h-full min-h-55">
          <div>
            <h3 class="font-poppins font-semibold text-2xl sm:text-3xl text-white mb-6">
              Get in touch
            </h3>
            <ul class="space-y-3 font-poppins text-neutral-400 text-sm sm:text-base">
              <li>
                <NuxtLink to="/contact" class="hover:text-white transition-colors duration-200">
                  Contact us
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/about" class="hover:text-white transition-colors duration-200">
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
            <NuxtLink to="/">
              <img loading="lazy" :src="redWhiteLogo" 
                alt="R-E-D Logo" 
                class="h-auto w-36 object-contain select-none transition-opacity hover:opacity-80 duration-200"
                referrerpolicy="no-referrer"
              />
            </NuxtLink>
          </div>
        </div>

      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import redWhiteLogo from '~/assets/images/r-e-d-white-logo.svg';
import postXWhiteLogo from '~/assets/images/PostX_Web_white_Logo.png';
import facebookIcon from '~/assets/images/facebook-social-icon.svg';
import linkedinIcon from '~/assets/images/linkedin-social-icon.svg';
import xIcon from '~/assets/images/x-social-icon.svg';
</script>
