<template>
  <div class="w-full bg-[#fafafa] min-h-screen relative font-sans overflow-x-hidden pt-8">
    <Head>
      <Title>Digital Marketing Intern | Careers | R-E-D</Title>
    </Head>

    <!-- Main Content Container -->
    <div class="mx-auto lg:w-[85%] max-w-[1200px] px-4 sm:px-6 lg:px-12 mb-20">

      <!-- Back Breadcrumb -->
      <div class="mb-8">
        <NuxtLink
          to="/careers"
          class="inline-flex items-center mt-4 md:mt-12 gap-2 text-sm font-medium text-neutral-500 hover:text-[#00a5c5] transition-colors duration-200"
        >
          <ArrowLeft class="w-4 h-4" />
          Back to careers
        </NuxtLink>
      </div>

      <!-- Header Section -->
      <div class="mb-10">
        <h1 class="font-poppins text-4xl sm:text-5xl md:text-6xl font-semibold text-neutral-800 leading-tight mb-4">
          Digital marketing <span class="text-[#00a5c5]">intern</span>
        </h1>
        <div class="flex items-center gap-3 mb-8">
          <span class="bg-[#00a5c5] text-white text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full tracking-wide">
            Part-Time
          </span>
          <span class="bg-[#00a5c5] text-white text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full tracking-wide">
            Marketing
          </span>
        </div>
        <p class="font-poppins text-neutral-700 text-sm sm:text-base leading-relaxed">
          R-E-D is a Google and Facebook Partner servicing approximately 500 active clients. We have experienced substantial growth over the past few years and market conditions indicate continued growth in the forthcoming years. We are a proudly South African home-grown company with aspirations of expanding our services and products on a global scale. With the future growth and expansion we foresee, we have no doubt that there will be plenty opportunity for individual growth.
        </p>
      </div>

      <!-- Content Sections -->
      <div class="space-y-12 text-neutral-800">

        <section>
          <h2 class="font-poppins text-2xl sm:text-3xl font-semibold mb-4">About the role</h2>
          <div class="space-y-4 font-poppins text-neutral-700 text-sm sm:text-base leading-relaxed">
            <p>This vacancy is for a Digital marketing intern. As a Digital Marketing intern, you will be trained across loading campaigns and creating content on Social Media, Search and Web platforms.</p>
            <p>The program is for 1 year and is aimed at providing sufficient experience to gain a full-time position, either at R-E-D or elsewhere thereafter. Top performers may be offered permanent positions as and when they become available.</p>
          </div>
        </section>

        <section>
          <h2 class="font-poppins text-2xl sm:text-3xl font-semibold mb-6">Key responsibilities</h2>
          <ul class="list-disc pl-5 space-y-2 font-poppins text-neutral-700 text-sm sm:text-base leading-relaxed">
            <li>Writing copy for campaigns and content</li>
            <li>Loading campaigns on social media and search platforms</li>
            <li>Loading content on websites</li>
            <li>Identifying non-performing campaigns</li>
            <li>Extracting and compiling reports from campaign tools and Google Analytics</li>
          </ul>
        </section>

        <section>
          <h2 class="font-poppins text-2xl sm:text-3xl font-semibold mb-4">What we're looking for</h2>
          <ul class="list-disc pl-5 space-y-2 font-poppins text-neutral-700 text-sm sm:text-base leading-relaxed">
            <li>Attention to detail</li>
            <li>Creative writing</li>
            <li>Strong English language proficiency</li>
            <li>Proficiency in Windows and Microsoft Office 365 Suite</li>
            <li>Ability to work under pressure</li>
            <li>Time management</li>
          </ul>
        </section>

        <section>
          <h2 class="font-poppins text-2xl sm:text-3xl font-semibold mb-4">Required Qualifications / Experience</h2>
          <ul class="list-disc pl-5 space-y-2 font-poppins text-neutral-700 text-sm sm:text-base leading-relaxed">
            <li>Minimum Grade 12</li>
            <li>No experience necessary, as long as you are prepared to learn</li>
          </ul>
        </section>

        <section>
          <h2 class="font-poppins text-2xl sm:text-3xl font-semibold mb-4">Preferred Qualifications</h2>
          <ul class="list-disc pl-5 space-y-2 font-poppins text-neutral-700 text-sm sm:text-base leading-relaxed">
            <li>Tertiary Qualification in Marketing or associated fields</li>
          </ul>
        </section>

        <section>
          <h2 class="font-poppins text-2xl sm:text-3xl font-semibold mb-4">Remuneration</h2>
          <p class="font-poppins text-neutral-700 text-sm sm:text-base leading-relaxed">
            Negotiable based on qualifications and experience
          </p>
        </section>

      </div>
    </div>

    <!-- Application Form Section -->
    <div class="w-full bg-[#f2f2f2] py-20 px-4">
      <div class="mx-auto max-w-xl bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-neutral-100">
        <h2 class="font-poppins text-2xl sm:text-3xl font-bold text-center text-neutral-800 mb-8">
          Apply for this role
        </h2>

        <form class="space-y-5" @submit.prevent>
          <div>
            <label for="name" class="block text-xs font-semibold text-neutral-700 mb-1.5 ml-1">Name</label>
            <input
              type="text"
              id="name"
              class="w-full bg-[#f8f8f8] border border-transparent rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-neutral-300 transition-colors"
              placeholder="Jane Doe"
            />
          </div>

          <div>
            <label for="email" class="block text-xs font-semibold text-neutral-700 mb-1.5 ml-1">Email</label>
            <input
              type="email"
              id="email"
              class="w-full bg-[#f8f8f8] border border-transparent rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-neutral-300 transition-colors"
              placeholder="jane@example.com"
            />
          </div>

          <div>
            <label for="portfolio" class="block text-xs font-semibold text-neutral-700 mb-1.5 ml-1">Portfolio / LinkedIn URL</label>
            <input
              type="url"
              id="portfolio"
              class="w-full bg-[#f8f8f8] border border-transparent rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-neutral-300 transition-colors"
              placeholder="https://"
            />
          </div>

          <div>
            <label for="motivation" class="block text-xs font-semibold text-neutral-700 mb-1.5 ml-1">Motivational letter</label>
            <textarea
              id="motivation"
              rows="4"
              class="w-full bg-[#f8f8f8] border border-transparent rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-neutral-300 transition-colors resize-none"
              placeholder="Tell us why you are a great fit..."
            ></textarea>
          </div>

          <div>
            <label class="block text-xs font-semibold text-neutral-700 mb-1.5 ml-1">Resume upload</label>
            <div class="relative w-full bg-[#f8f8f8] border-2 border-dashed border-neutral-200 rounded-xl p-6 hover:bg-neutral-50 transition-colors cursor-pointer group">
              <input
                type="file"
                class="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                @change="handleFileChange"
                accept=".pdf,.doc,.docx"
              />
              <div class="flex flex-col items-center justify-center text-center gap-2">
                <Upload class="w-5 h-5 text-neutral-400 group-hover:text-[#00a5c5] transition-colors" />
                <template v-if="fileName">
                  <span class="text-sm font-medium text-[#00a5c5] truncate max-w-full px-4">{{ fileName }}</span>
                </template>
                <template v-else>
                  <span class="text-sm font-medium text-neutral-600">
                    <span class="text-[#00a5c5]">Click to upload</span> or drag and drop
                  </span>
                  <span class="text-xs text-neutral-400">PDF, DOC up to 5MB</span>
                </template>
              </div>
            </div>
          </div>

          <div class="pt-4">
            <button
              type="submit"
              class="w-full bg-black hover:bg-[#00a5c5] text-white font-poppins text-sm py-3.5 rounded-full transition-colors shadow-sm font-medium lowercase cursor-pointer"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ArrowLeft, Upload } from 'lucide-vue-next';

const fileName = ref('');

const handleFileChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  if (target.files && target.files.length > 0) {
    fileName.value = target.files[0].name;
  }
};
</script>
