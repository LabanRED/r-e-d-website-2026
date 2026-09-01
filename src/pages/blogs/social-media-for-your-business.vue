<template>
  <div class="w-full bg-[#fafafa] min-h-screen relative font-sans overflow-x-hidden pt-8 pb-20">
    <Head>
      <Title>Social Media for Your Business: 5 Tips to Get It Right | R-E-D</Title>
    </Head>

    <!-- Back Breadcrumb -->
    <div class="mx-auto lg:w-[95%] max-w-[1600px] px-6 sm:px-8 lg:px-12 mb-8">
      <NuxtLink
        to="/blogs"
        class="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-primary transition-colors duration-200"
      >
        <ArrowLeft class="w-4 h-4" />
        Back To Blogs
      </NuxtLink>
    </div>

    <!-- Article Header -->
    <article class="max-w-[1600px] mx-auto px-6 sm:px-8">
      <header class="mb-10 text-center">
        <h1 v-motion :initial="{ opacity: 0, y: 20 }" :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }" class="w-full md:w-275 lg:w-275 mx-auto font-poppins text-4xl sm:text-5xl lg:text-6xl font-medium text-neutral-900 leading-tight tracking-tight mb-6">
          Social Media for Your Business:<br> 5 Tips to Get It Right.
        </h1>
      </header>

      <!-- Article Hero Image -->
      <div class="w-full bg-neutral-100 rounded-4xl overflow-hidden flex items-center justify-center mb-16 relative shadow-sm">
        <picture class="w-full">
          <source media="(max-width: 768px)" :srcset="heroMobile" />
          <img
            :src="heroDesktop"
            alt="Social Media for Your Business Hero"
            class="w-full h-auto object-cover"
            fetchpriority="high"
            loading="eager"
          />
        </picture>
      </div>

      <!-- Two Column Layout for Body -->
      <div class="flex flex-col lg:flex-row gap-12">
        <!-- Left Column: Author & Meta Info -->
        <aside class="w-full lg:w-62.5 flex-shrink-0">
          <div class="sticky top-8">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                <img loading="lazy" :src="redWhiteLogo" alt="R-E-D" class="w-6 h-6 object-contain" />
              </div>
              <div>
                <p class="font-poppins text-xs font-semibold text-neutral-900 uppercase">Author: R-E-D</p>
                <p class="font-poppins text-xs text-neutral-500">20 January 2023</p>
              </div>
            </div>
            <hr class="border-neutral-200 mb-6" />
            <div>
              <p class="font-poppins text-xs font-semibold text-neutral-900 uppercase">Reading time</p>
              <p class="font-poppins text-xs text-neutral-500">5 Minutes</p>
            </div>
          </div>
        </aside>

        <!-- Right Column: Article Content -->
        <div class="flex-1 min-w-0">
          <div class="prose prose-lg sm:prose-xl prose-neutral max-w-none font-poppins text-neutral-700 leading-relaxed mb-16 text-base sm:text-lg">
            <p class="mb-6">
              If for one second you think that social media is not for your business, you are grossly mistaken.
            </p>
            <p class="mb-10">
              Every business needs to establish a solid social media identity. We live in an internet-centric age, with platforms like Facebook and Instagram playing a huge role in the modern consumer's path to purchase.
            </p>
            <p class="mb-10">
              Here are five tips to help you effectively use social media for your business:
            </p>

            <h2 v-motion :initial="{ opacity: 0, y: 20 }" :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }" class="text-xl sm:text-2xl font-medium text-primary mt-12 mb-6">
              1. Choose the right social media platform for your business
            </h2>
            <ul class="list-disc pl-6 mb-6 space-y-4">
              <li>
                You should start with a small selection (two or three) of the social media platform... with the largest audiences are engaging your brand. Facebook is a great platform for your business...
              </li>
              <li>
                Instagram - there are 6.8 million users in South Africa, Instagram is a social media titan... This platform allows you to authentically build an engaged audience around your brand...
              </li>
              <li>
                LinkedIn with 7.66 million users in South Africa... LinkedIn is by far the largest professional network... allowing you to post content that places you as an industry thought leader in your field and allows you to manage your reputation...
              </li>
              <li>
                TikTok - TikTok has seen extensive growth... This exciting platform has given content a whole new avenue. TikTok is the place for creatives to shine, so if your business is leaning towards a younger audience, this app should be in the plans.
              </li>
              <li>
                YouTube - The second most-visited platform in the world! ... You are also able to capture this information seeking audience through targeted advertisements on YouTube and Google.
              </li>
            </ul>
            <p class="mb-10">
              When choosing your social media platform, ensure you research your customer base beforehand to get a clear idea on exactly where they are spending their time on social media. ...
            </p>

            <!-- Mid Article Image 1 -->
            <div class="w-full rounded-4xl overflow-hidden flex items-center justify-center my-12 relative shadow-sm">
              <img loading="lazy" :src="midBanner1"
                alt="Social Media Icons"
                class="w-full h-auto object-contain"
              />
            </div>

            <h2 v-motion :initial="{ opacity: 0, y: 20 }" :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }" class="text-xl sm:text-2xl font-medium text-primary mt-12 mb-6">
              2. Optimize Your Business Social Media Profile
            </h2>
            <p class="mb-6">
              Your business social media profile is an essential foundation to your success on social media and your business. Your audience evaluates your social media profiles just as they look at other reviews of your business. It is therefore very important that your profile contains as much information as possible and is up to date.
            </p>
            <p class="mb-6">
              Include the following on all your business social media profiles:
            </p>
            <ul class="list-disc pl-6 mb-10 space-y-4">
              <li>
                A high quality profile picture (a clear picture of your logo will do!) and an engaging cover photo (this could be a banner of your products or services)
              </li>
              <li>
                A brief bio for people to see what your business does and what to expect from your content. Always state exactly why you are better than your competitors
              </li>
              <li>
                All your basic information! Make sure you link your other business platforms on your social pages such as your website, contact numbers etc. Your audience will definitely need to have easy and direct ways to bypass the platform if they need to contact you directly!
              </li>
            </ul>

            <h2 v-motion :initial="{ opacity: 0, y: 20 }" :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }" class="text-xl sm:text-2xl font-medium text-primary mt-12 mb-6">
              3. Create Engaging Content
            </h2>
            <p class="mb-6">
              You must schedule types of content directly applicable to the exact individuals your business caters for on specific platforms. You should try to make an engaging social space. Keep your posts visually appealing and interesting content.
            </p>
            <p class="mb-6">
              For example, a short fun and interactive video (which TikTok is well known for) could increase engagement as short video content generally receives higher interaction rates from users rather than just photos and static content.
            </p>
            <p class="mb-10">
              High-quality images are also very important...
            </p>

            <!-- Mid Article Image 2 -->
            <div class="w-full rounded-4xl overflow-hidden flex items-center justify-center my-12 relative shadow-sm">
              <img loading="lazy" :src="midBanner2"
                alt="Engaging Content"
                class="w-full h-auto object-contain"
              />
            </div>

            <h2 v-motion :initial="{ opacity: 0, y: 20 }" :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }" class="text-xl sm:text-2xl font-medium text-primary mt-12 mb-6">
              4. Use Video
            </h2>
            <p class="mb-6">
              We all know that video marketing is becoming the preferred media for most brands engaging online. A good video can grab attention better than anything else and can generate more views and shares than regular text and static visual content.
            </p>
            <p class="mb-10">
              Although video takes slightly more time and a little bit more money than other types of posts, it is worth the effort! High quality and professional video content will rapidly increase your performance across social media channels and the internet itself.
            </p>

            <h2 v-motion :initial="{ opacity: 0, y: 20 }" :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }" class="text-xl sm:text-2xl font-medium text-primary mt-12 mb-6">
              5. Don't be afraid to get help!
            </h2>
            <p class="mb-6">
              All things social media are time-consuming and sometimes tricky if you don't know the ropes. You should use your time effectively on managing your business, and that is where R-E-D can help you!
            </p>
          </div>

          <!-- Share Section -->
          <div class="border-t border-neutral-300 pt-8 mb-20 flex flex-col items-start gap-4">
            <span class="font-poppins font-semibold text-neutral-900 text-sm sm:text-base">Share this article:</span>
            <div class="flex items-center gap-3 sm:gap-4 flex-wrap">
              <button
                v-for="(item, index) in sharePlatforms"
                :key="index"
                @click="shareTo(item.platform)"
                :aria-label="`Share on ${item.name}`"
                :title="`Share on ${item.name}`"
                class="hover:scale-110 hover:opacity-80 active:scale-95 transition-all duration-300 cursor-pointer flex items-center justify-center"
              >
                <img :src="item.icon" :alt="`Share on ${item.name}`" class="w-10 h-10 sm:w-11 sm:h-11 object-contain" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>

    <!-- Bottom CTA Banner -->
    <section class="px-6 sm:px-8 lg:px-12 max-w-[1600px] mx-auto">
      <div class="w-full rounded-4xl bg-gradient-to-r from-[#e6eef5] to-[#cddbea] py-20 px-6 flex flex-col items-center text-center">
        <img loading="lazy" :src="redLogo"
          alt="R-E-D Logo"
          class="h-10 sm:h-12 object-contain mb-8"
        />
        <h3 v-motion :initial="{ opacity: 0, y: 20 }" :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }" class="font-poppins text-2xl sm:text-4xl font-semibold text-neutral-800 mb-6 leading-tight max-w-2xl">
          Ready to establish your digital presences?
        </h3>
        <p class="font-poppins text-neutral-600 text-base max-w-xl mb-10 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu ex ultricies, ornare velit vel, rhoncus metus.
        </p>
        <button
          @click="openModal"
          class="bg-black text-white font-poppins font-medium px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:scale-105 active:scale-95 cursor-pointer btn-slide-in text-xs sm:text-base"
        >
          Schedule A Meeting Today
        </button>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { ArrowLeft } from 'lucide-vue-next';
import redLogo from '~/assets/images/r-e-d-dark-logo.svg';
import redWhiteLogo from '~/assets/images/r-e-d-white-logo.svg';
import heroDesktop from '~/assets/images/r-e-d-block-article-social-media-business-desktop-banner-tips.webp';
import heroMobile from '~/assets/images/r-e-d-block-article-social-media-business-mobile-tips.webp';
import midBanner1 from '~/assets/images/social-media-icons-business-tips.webp';
import midBanner2 from '~/assets/images/social-media-icons-business-tips-posting.webp';
import fbShareIcon from '~/assets/images/facebook-share-article-icon.svg';
import linkedinShareIcon from '~/assets/images/linkedin-share-article-icon.svg';
import xShareIcon from '~/assets/images/x-twitter-share-article-icon.svg';
import whatsappShareIcon from '~/assets/images/whatsapp-share-article-icon.svg';
import emailShareIcon from '~/assets/images/email-share-article-icon.svg';

const { openModal } = useModal();

const sharePlatforms = [
  { name: 'Facebook', platform: 'facebook', icon: fbShareIcon },
  { name: 'LinkedIn', platform: 'linkedin', icon: linkedinShareIcon },
  { name: 'X', platform: 'twitter', icon: xShareIcon },
  { name: 'WhatsApp', platform: 'whatsapp', icon: whatsappShareIcon },
  { name: 'Email', platform: 'email', icon: emailShareIcon },
];

const shareTo = (platform: string) => {
  const url = typeof window !== 'undefined' ? window.location.href : 'https://r-e-d.co.za/blogs/social-media-for-your-business';
  const title = typeof document !== 'undefined' && document.title ? document.title : 'Social Media for Your Business: 5 Tips to Get It Right';
  
  const summaryText = "Discover 5 essential tips for effectively using social media for your business.";
  const quoteText = `"${title}" — ${summaryText}`;

  let shareLink = '';
  switch (platform) {
    case 'facebook':
      shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(quoteText)}`;
      break;
    case 'linkedin':
      shareLink = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(summaryText)}&source=${encodeURIComponent('R-E-D')}`;
      break;
    case 'twitter':
      shareLink = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(`${quoteText}\n\nRead more:`)}`;
      break;
    case 'whatsapp': {
      const waMessage = `*${title}*\n\n${summaryText}\n\nRead the full article here:\n${url}`;
      shareLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(waMessage)}`;
      break;
    }
    case 'email': {
      const emailSubject = `Recommended Reading: ${title}`;
      const emailBody = `Hi,\n\nI thought you might find this article interesting!\n\nTitle: ${title}\n\nSummary:\n${summaryText}\n\nRead the full article here:\n${url}\n\nBest regards,`;
      shareLink = `mailto:?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      break;
    }
  }
  
  if (shareLink) {
    if (platform === 'email') {
      window.location.href = shareLink;
    } else {
      window.open(shareLink, '_blank', 'noopener,noreferrer,width=600,height=500');
    }
  }
};
</script>
