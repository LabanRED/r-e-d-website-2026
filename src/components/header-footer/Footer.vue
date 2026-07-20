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
              class="group text-neutral-400 transition-all duration-200"
              aria-label="Facebook"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="transition-transform duration-200 group-hover:rotate-[-15deg]">
                <rect width="24" height="24" rx="12" class="fill-[#00A5C5] group-hover:fill-white transition-colors duration-200" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3681 6.53459H16V4H14.3681C13.4073 4.00112 12.4861 4.37016 11.8067 5.02619C11.1272 5.68222 10.745 6.57166 10.7439 7.49942V9.06917H9V11.6038H10.75V20H13.375V11.6038H15.1434L15.6614 9.06917H13.375V7.0339C13.377 6.90194 13.4323 6.77595 13.529 6.68271C13.6258 6.58947 13.7563 6.53633 13.893 6.53459H14.3681Z" class="fill-white group-hover:fill-[#00A5C5] transition-colors duration-200" />
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/company/reach-engage-develop/posts/?feedView=all" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="group text-neutral-400 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="transition-transform duration-200 group-hover:rotate-[-15deg]">
                <rect width="24" height="24" rx="12" class="fill-[#00A5C5] group-hover:fill-white transition-colors duration-200" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.8082 9.4368V10.7944C13.0925 10.3613 13.4844 10.0095 13.9455 9.77337C14.4066 9.53721 14.9211 9.42483 15.4386 9.4472C18.2026 9.4472 18.8002 11.1752 18.8002 13.4232V18H16.2402V13.9424C16.2402 12.9744 16.045 11.7296 14.5378 11.7296C13.0762 11.7296 12.8266 12.7832 12.8266 13.8704V18H10.2746V9.4368H12.8082ZM8.56024 7.2848C8.55992 7.5384 8.48475 7.78627 8.34414 7.99732C8.20353 8.20838 8.00375 8.37322 7.76984 8.4712C7.53602 8.56839 7.27857 8.59381 7.03027 8.54423C6.78196 8.49465 6.55401 8.37232 6.37544 8.1928C6.19653 8.01317 6.07473 7.78465 6.02535 7.53597C5.97597 7.2873 6.00122 7.02958 6.09793 6.79522C6.19463 6.56086 6.35847 6.36033 6.56884 6.21883C6.77921 6.07734 7.02671 6.0012 7.28024 6C7.44873 6 7.61557 6.03327 7.77118 6.09789C7.92679 6.16252 8.06811 6.25723 8.18704 6.3766C8.30596 6.49597 8.40014 6.63764 8.46418 6.79349C8.52823 6.94934 8.56087 7.1163 8.56024 7.2848Z" class="fill-white group-hover:fill-[#00A5C5] transition-colors duration-200" />
                <path d="M8.56 9.44727H6V18.0001H8.56V9.44727Z" class="fill-white group-hover:fill-[#00A5C5] transition-colors duration-200" />
              </svg>
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
