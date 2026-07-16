<template>
  <div class="w-full bg-[#f8f9fa] min-h-screen relative font-sans overflow-x-hidden pt-8 sm:pt-16 pb-20">
    <Head>
      <Link rel="preload" as="image" :href="heroDesktop" fetchpriority="high" />
      <Title>Digital Advertising | R-E-D</Title>
    </Head>

    <!-- Back Breadcrumb -->
    <div class="mx-auto lg:w-[95%] max-w-[1600px] px-8 lg:px-0 mb-6">
      <NuxtLink
        to="/services"
        class="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-[#00a5c5] transition-colors duration-200"
      >
        <ArrowLeft class="w-4 h-4" />
        Back to Services
      </NuxtLink>
    </div>

    <!-- Hero Section -->
    <section class="px-6 sm:px-8 lg:px-12 py-2 max-w-[1600px] mx-auto">
      <div class="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        <!-- Text Content -->
        <div class="flex-1">
          <p class="text-neutral-500 font-poppins text-sm sm:text-base mb-4 tracking-wide">
            Digital Advertising
          </p>
          <h1 class="font-poppins text-4xl sm:text-6xl lg:text-6xl text-neutral-800 font-semibold leading-[1.1] tracking-tight">
            Driving real <br class="hidden sm:block" />
            growth through <br class="hidden sm:block" />
            <span class="text-[#00a5c5]">data-driven</span> <br class="hidden sm:block" />
            <span class="text-[#00a5c5]">digital advertising</span>
          </h1>
        </div>

        <!-- Hero Image -->
        <div class="flex-1 w-full">
          <img
            :src="heroDesktop"
            alt="Digital Advertising"
            class="w-full h-auto object-contain"
            fetchpriority="high"
            loading="eager"
          />
        </div>
      </div>
    </section>

    <!-- Text Description Section -->
    <section class="py-2 px-4 max-w-[1600px] mx-auto text-center mt-8">
      <p class="font-poppins text-neutral-800 text-lg sm:text-xl lg:text-2xl leading-relaxed mb-16 sm:mb-24">
        Digital advertising is redefining how businesses grow. At R-E-D, we create
        performance-driven, multi-channel strategies that reach your audience, build trust,
        and drive results. From Facebook, Instagram, and Google to LinkedIn X and TikTok, we
        tailor campaigns around your goals to maximise impact and long-term success.
      </p>

      <h2 class="font-poppins text-4xl sm:text-5xl lg:text-6xl font-medium text-neutral-800 leading-tight mb-16">
        <span class="text-[#00a5c5]">Select</span> a relevant advertising <br class="hidden sm:block" />
        platform for more information
      </h2>

      <!-- Platform Cards Section -->
      <div class="flex flex-col items-center gap-6">
        <div class="flex flex-wrap justify-center gap-4 sm:gap-6 max-w-[1600px]">
          <a v-for="platform in socialPlatforms" :key="platform.name" :href="`#${platform.id}`" @click.prevent="scrollToPlatform(platform.id)" class="relative cursor-pointer group w-[160px] h-[100px] sm:w-[200px] sm:h-[130px] flex-shrink-0">
            <img loading="lazy" :src="platform.defaultImg"
              :alt="platform.name"
              class="absolute inset-0 m-auto w-[90%] h-[85%] object-contain transition-all duration-500 ease-in-out opacity-100 group-hover:opacity-0"
            />
            <img loading="lazy" :src="platform.hoverImg"
              :alt="`${platform.name} Hover`"
              class="absolute inset-0 m-auto w-full h-full object-contain transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100"
            />
          </a>
        </div>
        <div class="flex flex-wrap justify-center gap-4 sm:gap-6">
          <a v-for="platform in communicationPlatforms" :key="platform.name" :href="`#${platform.id}`" @click.prevent="scrollToPlatform(platform.id)" class="relative cursor-pointer group w-[160px] h-[100px] sm:w-[200px] sm:h-[130px] flex-shrink-0">
            <img loading="lazy" :src="platform.defaultImg"
              :alt="platform.name"
              class="absolute inset-0 m-auto w-[90%] h-[85%] object-contain transition-all duration-500 ease-in-out opacity-100 group-hover:opacity-0"
            />
            <img loading="lazy" :src="platform.hoverImg"
              :alt="`${platform.name} Hover`"
              class="absolute inset-0 m-auto w-full h-full object-contain transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100"
            />
          </a>
        </div>
      </div>
    </section>

    <!-- Divider -->
    <div class="w-full h-px bg-neutral-200 my-16 max-w-[1600px] mx-auto px-6 sm:px-8"></div>

    <!-- Facebook & Instagram Section -->
    <section id="facebook-instagram" class="px-6 sm:px-8 lg:px-12 py-2 max-w-[1600px] mx-auto">
      <h2 class="font-poppins text-4xl sm:text-5xl lg:text-5xl font-semibold text-neutral-800 mb-6 tracking-tight">
        Facebook <span class="text-[#00a5c5]">&</span> Instagram advertising
      </h2>

      <p class="font-poppins text-neutral-800 text-lg mb-6 leading-relaxed max-w-[1600px]">
        <strong>R-E-D specialises in high-performance Facebook and Instagram advertising</strong>, managing hundreds of accounts with a results-driven approach. We handle the full funnel—from strategy and creative to campaign execution and conversion optimisation.
      </p>

      <p class="font-poppins text-neutral-800 text-lg mb-16 leading-relaxed max-w-[1600px]">
        Our team manages ad design, audience targeting, media buying, performance tracking, and continuous optimisation, delivering clear reporting and measurable growth for your business.
      </p>

      <div class="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
        <div class="flex-1">
          <h3 class="font-poppins text-xl sm:text-2xl font-semibold text-neutral-800 mb-8">
            Through Facebook and Instagram our specialists can<span class="text-[#00a5c5]">:</span>
          </h3>

          <ul class="space-y-6">
            <li class="flex items-start gap-4">
              <div class="mt-1 bg-[#00a5c5] rounded-full p-1 text-white shrink-0">
                <Check class="w-4 h-4 stroke-[3]" />
              </div>
              <p class="font-poppins text-neutral-700 text-lg leading-relaxed">
                <strong>Boost your brand awareness</strong> and get your business, offers and deals to reach as many people as possible.
              </p>
            </li>
            <li class="flex items-start gap-4">
              <div class="mt-1 bg-[#00a5c5] rounded-full p-1 text-white shrink-0">
                <Check class="w-4 h-4 stroke-[3]" />
              </div>
              <p class="font-poppins text-neutral-700 text-lg leading-relaxed">
                <strong>Drive traffic to your website</strong> and send potential clients to find out more about your business, see all your product catalogues, request quotes all while building a custom database of hot leads.
              </p>
            </li>
            <li class="flex items-start gap-4">
              <div class="mt-1 bg-[#00a5c5] rounded-full p-1 text-white shrink-0">
                <Check class="w-4 h-4 stroke-[3]" />
              </div>
              <p class="font-poppins text-neutral-700 text-lg leading-relaxed">
                <strong>Generate leads</strong> for your products and services.
              </p>
            </li>
            <li class="flex items-start gap-4">
              <div class="mt-1 bg-[#00a5c5] rounded-full p-1 text-white shrink-0">
                <Check class="w-4 h-4 stroke-[3]" />
              </div>
              <p class="font-poppins text-neutral-700 text-lg leading-relaxed">
                <strong>Encourage prospects</strong> to communicate with your brand through messenger
              </p>
            </li>
            <li class="flex items-start gap-4">
              <div class="mt-1 bg-[#00a5c5] rounded-full p-1 text-white shrink-0">
                <Check class="w-4 h-4 stroke-[3]" />
              </div>
              <p class="font-poppins text-neutral-700 text-lg leading-relaxed">
                <strong>We can also boost engagement</strong>, maximise video views, drive foot traffic and much more.
              </p>
            </li>
          </ul>

          <button
            @click="openModal"
            class="mt-12 bg-black hover:bg-[#00a5c5] text-white font-poppins font-medium text-sm sm:text-base px-8 py-4 rounded-full transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 lowercase cursor-pointer"
          >
            schedule a meeting today
          </button>
        </div>

        <div class="flex-1 w-full lg:mt-[-4rem]">
          <img loading="lazy" :src="fbIgStats"
            alt="Facebook and Instagram Stats"
            class="w-full h-auto object-contain max-w-[650px] ml-auto"
          />
        </div>
      </div>
    </section>

    <!-- Google Advertising Section -->
    <div class="w-full h-px bg-neutral-200 my-16 max-w-[1600px] mx-auto px-6 sm:px-8"></div>
    <section id="google" class="px-6 sm:px-8 lg:px-12 py-2 max-w-[1600px] mx-auto">
      <h2 class="font-poppins text-4xl sm:text-5xl lg:text-5xl font-semibold text-neutral-800 mb-6 tracking-tight">
        Google advertising
      </h2>
      <p class="font-poppins text-neutral-800 text-lg mb-6 leading-relaxed max-w-[1600px]">
        Google has a massive user base and is one of the largest digital advertising mediums in existence. Google AdWords is Google's digital advertising programme which allows businesses to target their campaigns to very specific audiences. Google AdWords is an extremely powerful marketing tool for any business, that is if it's done right. AdWords can be tricky, but at R-E-D we have perfected the art and science that is Google AdWords.
      </p>
      <p class="font-poppins text-neutral-800 text-lg font-semibold mb-16 pb-12 leading-relaxed max-w-[1600px]">
        Our AdWords specialists will help you create and deliver the most effective campaigns.
      </p>
      <div class="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
        <div class="flex-1 w-full lg:mt-[-4rem]">
          <img loading="lazy" :src="googleServiceImg"
            alt="Google Advertising"
            class="w-full h-auto object-cover max-w-[650px] mr-auto rounded-[2rem] shadow-sm"
          />
        </div>
        <div class="flex-1">
          <img loading="lazy" :src="googleStatsImg"
            alt="Google Stats"
            class="w-screen md:w-[476px] lg-w-[476px] h-auto object-contain mb-10"
          />
          <h3 class="font-poppins text-xl sm:text-2xl font-semibold text-neutral-800 mb-8">
            Through Google our specialists can<span class="text-[#00a5c5]">:</span>
          </h3>
          <ul class="space-y-6">
            <li class="flex items-start gap-4">
              <div class="mt-1 bg-[#00a5c5] rounded-full p-1 text-white shrink-0">
                <Check class="w-4 h-4 stroke-[3]" />
              </div>
              <p class="font-poppins text-neutral-700 text-lg leading-relaxed">
                <strong>Generate immediate traffic</strong> targeting high-intent search queries.
              </p>
            </li>
            <li class="flex items-start gap-4">
              <div class="mt-1 bg-[#00a5c5] rounded-full p-1 text-white shrink-0">
                <Check class="w-4 h-4 stroke-[3]" />
              </div>
              <p class="font-poppins text-neutral-700 text-lg leading-relaxed">
                <strong>Increase conversion rates</strong> through precise audience targeting and compelling ad copy.
              </p>
            </li>
          </ul>
          <button
            @click="openModal"
            class="mt-12 bg-black hover:bg-[#00a5c5] text-white font-poppins font-medium text-sm sm:text-base px-8 py-4 rounded-full transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 lowercase cursor-pointer"
          >
            schedule a meeting today
          </button>
        </div>
      </div>
    </section>

    <!-- LinkedIn Advertising Section -->
    <div class="w-full h-px bg-neutral-200 my-16 max-w-[1600px] mx-auto px-6 sm:px-8"></div>
    <section id="linkedin" class="px-6 sm:px-8 lg:px-12 py-2 max-w-[1600px] mx-auto">
      <h2 class="font-poppins text-4xl sm:text-5xl lg:text-5xl font-semibold text-neutral-800 mb-6 tracking-tight">
        LinkedIn advertising
      </h2>
      <p class="font-poppins text-neutral-800 text-lg mb-16 pb-12 leading-relaxed max-w-[1600px]">
        LinkedIn is a platform which supplies a unique audience of business professionals. Our specialists can use LinkedIn to target your ads to <strong>highly specific audiences</strong>, where we can target <strong>decision makers, income brackets</strong> and <strong>various industries</strong>. LinkedIn is great for B2B marketing; however, our specialists can also move beyond B2B to highly specific B2C audiences.
      </p>
      <div class="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
        <div class="flex-1">
          <img loading="lazy" :src="linkedinStatsImg"
            alt="LinkedIn Stats"
            class="w-screen md:w-[476px] lg-w-[476px] h-auto object-contain mb-10"
          />
          <h3 class="font-poppins text-xl sm:text-2xl font-semibold text-neutral-800 mb-8">
            Through LinkedIn our specialists can<span class="text-[#00a5c5]">:</span>
          </h3>
          <ul class="space-y-6">
            <li class="flex items-start gap-4">
              <div class="mt-1 bg-[#00a5c5] rounded-full p-1 text-white shrink-0">
                <Check class="w-4 h-4 stroke-[3]" />
              </div>
              <p class="font-poppins text-neutral-700 text-lg leading-relaxed">
                Generate your <strong>leads</strong> for your business, <strong>drive website traffic</strong> and <strong>increase brand awareness</strong> through targeted text or video ads.
              </p>
            </li>
            <li class="flex items-start gap-4">
              <div class="mt-1 bg-[#00a5c5] rounded-full p-1 text-white shrink-0">
                <Check class="w-4 h-4 stroke-[3]" />
              </div>
              <p class="font-poppins text-neutral-700 text-lg leading-relaxed">
                Deliver <strong>personalised message ads</strong> directly to prospects inboxes.
              </p>
            </li>
          </ul>
          <button
            @click="openModal"
            class="mt-12 bg-black hover:bg-[#00a5c5] text-white font-poppins font-medium text-sm sm:text-base px-8 py-4 rounded-full transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 lowercase cursor-pointer"
          >
            schedule a meeting today
          </button>
        </div>
        <div class="flex-1 w-full lg:mt-[-4rem]">
          <img loading="lazy" :src="linkedinServiceImg"
            alt="LinkedIn Advertising"
            class="w-full h-auto object-cover max-w-[650px] ml-auto rounded-[2rem] shadow-sm"
          />
        </div>
      </div>
    </section>

    <!-- TikTok Advertising Section -->
    <div class="w-full h-px bg-neutral-200 my-16 max-w-[1600px] mx-auto px-6 sm:px-8"></div>
    <section id="tiktok" class="px-6 sm:px-8 lg:px-12 py-2 max-w-[1600px] mx-auto">
      <h2 class="font-poppins text-4xl sm:text-5xl lg:text-5xl font-semibold text-neutral-800 mb-6 tracking-tight">
        TikTok advertising
      </h2>
      <p class="font-poppins text-neutral-800 text-lg mb-6 leading-relaxed max-w-[1600px]">
        TikTok is a platform which supplies a unique audience of highly engaged users. Our specialists can use TikTok to target your ads to <strong>highly specific audiences</strong>, creating viral content that resonates with modern consumers. TikTok is great for B2C marketing; however, our specialists can also move beyond B2C to highly specific B2B audiences.
      </p>
      <p class="font-poppins text-neutral-800 text-lg font-semibold mb-16 pb-12 leading-relaxed max-w-[1600px]">
        Our TikTok specialists will help you create and deliver the most effective campaigns.
      </p>
      <div class="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
        <div class="flex-1 w-full lg:mt-[-4rem]">
          <img loading="lazy" :src="tiktokServiceImg"
            alt="TikTok Advertising"
            class="w-full h-auto object-cover max-w-[650px] mr-auto rounded-[2rem] shadow-sm"
          />
        </div>
        <div class="flex-1">
          <img loading="lazy" :src="tiktokStatsImg"
            alt="TikTok Stats"
            class="w-screen md:w-[476px] lg-w-[476px] h-auto object-contain mb-10"
          />
          <h3 class="font-poppins text-xl sm:text-2xl font-semibold text-neutral-800 mb-8">
            Through TikTok our specialists can<span class="text-[#00a5c5]">:</span>
          </h3>
          <ul class="space-y-6">
            <li class="flex items-start gap-4">
              <div class="mt-1 bg-[#00a5c5] rounded-full p-1 text-white shrink-0">
                <Check class="w-4 h-4 stroke-[3]" />
              </div>
              <p class="font-poppins text-neutral-700 text-lg leading-relaxed">
                <strong>Data-sriven TikTok campaign strategy</strong> Reach the right audience with precise targeting, trend insights, and performance-focused planning.
              </p>
            </li>
            <li class="flex items-start gap-4">
              <div class="mt-1 bg-[#00a5c5] rounded-full p-1 text-white shrink-0">
                <Check class="w-4 h-4 stroke-[3]" />
              </div>
              <p class="font-poppins text-neutral-700 text-lg leading-relaxed">
                <strong>High-conversion creative & video production.</strong> Stand out with scroll-stopping content designed to engage, convert, and align with TikTok trends.
              </p>
            </li>
            <li class="flex items-start gap-4">
              <div class="mt-1 bg-[#00a5c5] rounded-full p-1 text-white shrink-0">
                <Check class="w-4 h-4 stroke-[3]" />
              </div>
              <p class="font-poppins text-neutral-700 text-lg leading-relaxed">
                <strong>Continuous optimisation & performance</strong> Scaling maximise ROI through real-time tracking, A/B testing, and ongoing campaign refinement.
              </p>
            </li>
          </ul>
          <button
            @click="openModal"
            class="mt-12 bg-black hover:bg-[#00a5c5] text-white font-poppins font-medium text-sm sm:text-base px-8 py-4 rounded-full transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 lowercase cursor-pointer"
          >
            schedule a meeting today
          </button>
        </div>
      </div>
    </section>

    <!-- SMS Campaigns Section -->
    <div class="w-full h-px bg-neutral-200 my-16 max-w-[1600px] mx-auto px-6 sm:px-8"></div>
    <section id="sms" class="px-6 sm:px-8 lg:px-12 py-2 max-w-[1600px] mx-auto">
      <h2 class="font-poppins text-4xl sm:text-5xl lg:text-5xl font-semibold text-neutral-800 mb-6 tracking-tight">
        SMS campaigns
      </h2>
      <p class="font-poppins text-neutral-800 text-lg mb-16 pb-12 leading-relaxed max-w-[1600px]">
        SMS marketing campaigns are a giant in the digital marketing space with its massive reach and high engagement rates. The SMS open rates are far higher than other digital platforms with an astonishing 98% open rate. SMS campaigns can have immediate results with 95% of text messages are red within 3 minutes. At R-E-D our digital specialists can get your businesses message in front of thousands of prospect clients in a matter of hours.
      </p>
      <div class="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
        <div class="flex-1 w-full lg:mt-[-4rem]">
          <img loading="lazy" :src="smsServiceImg"
            alt="SMS Campaigns"
            class="w-full h-auto object-cover max-w-[650px] mr-auto rounded-[2rem] shadow-sm"
          />
        </div>
        <div class="flex-1">
          <img loading="lazy" :src="smsStatsImg"
            alt="SMS Stats"
            class="w-screen md:w-[476px] lg-w-[476px] h-auto object-contain mb-10"
          />
          <h3 class="font-poppins text-xl sm:text-2xl font-semibold text-neutral-800 mb-8">
            Through SMS campaigns our specialists can<span class="text-[#00a5c5]">:</span>
          </h3>
          <ul class="space-y-6">
            <li class="flex items-start gap-4">
              <div class="mt-1 bg-[#00a5c5] rounded-full p-1 text-white shrink-0">
                <Check class="w-4 h-4 stroke-[3]" />
              </div>
              <p class="font-poppins text-neutral-700 text-lg leading-relaxed">
                <strong>Create distinctive</strong>, unique call to actions for your campaigns
              </p>
            </li>
            <li class="flex items-start gap-4">
              <div class="mt-1 bg-[#00a5c5] rounded-full p-1 text-white shrink-0">
                <Check class="w-4 h-4 stroke-[3]" />
              </div>
              <p class="font-poppins text-neutral-700 text-lg leading-relaxed">
                <strong>Launch click to web campaigns</strong> to drive traffic to your businesses website
              </p>
            </li>
            <li class="flex items-start gap-4">
              <div class="mt-1 bg-[#00a5c5] rounded-full p-1 text-white shrink-0">
                <Check class="w-4 h-4 stroke-[3]" />
              </div>
              <p class="font-poppins text-neutral-700 text-lg leading-relaxed">
                <strong>Spread your businesses</strong> message rapidly
              </p>
            </li>
            <li class="flex items-start gap-4">
              <div class="mt-1 bg-[#00a5c5] rounded-full p-1 text-white shrink-0">
                <Check class="w-4 h-4 stroke-[3]" />
              </div>
              <p class="font-poppins text-neutral-700 text-lg leading-relaxed">
                <strong>Retarget</strong> your current clients
              </p>
            </li>
            <li class="flex items-start gap-4">
              <div class="mt-1 bg-[#00a5c5] rounded-full p-1 text-white shrink-0">
                <Check class="w-4 h-4 stroke-[3]" />
              </div>
              <p class="font-poppins text-neutral-700 text-lg leading-relaxed">
                <strong>Reach thousands</strong> of prospect clients
              </p>
            </li>
          </ul>
          <button
            @click="openModal"
            class="mt-12 bg-black hover:bg-[#00a5c5] text-white font-poppins font-medium text-sm sm:text-base px-8 py-4 rounded-full transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 lowercase cursor-pointer"
          >
            schedule a meeting today
          </button>
        </div>
      </div>
    </section>

    <!-- Email Marketing Section -->
    <div class="w-full h-px bg-neutral-200 my-16 max-w-[1600px] mx-auto px-6 sm:px-8"></div>
    <section id="email" class="px-6 sm:px-8 lg:px-12 py-2 max-w-[1600px] mx-auto">
      <h2 class="font-poppins text-4xl sm:text-5xl lg:text-5xl font-semibold text-neutral-800 mb-6 tracking-tight">
        Email marketing
      </h2>
      <p class="font-poppins text-neutral-800 text-lg mb-16 pb-12 leading-relaxed max-w-[1600px]">
        Email marketing campaigns are highly effective tools for nurturing leads and maintaining customer engagement. With personalized content and targeted messaging, email campaigns can drive conversions and build brand loyalty. At R-E-D, our specialists use data-driven strategies to ensure your emails reach the right inbox at the perfect time.
      </p>
      <div class="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
        <div class="flex-1">
          <img loading="lazy" :src="emailStatsImg"
            alt="Email Stats"
            class="w-screen md:w-[690px] lg-w-[690px] h-auto object-contain mb-10"
          />
          <h3 class="font-poppins text-xl sm:text-2xl font-semibold text-neutral-800 mb-8">
            Through email marketing campaigns our specialists can<span class="text-[#00a5c5]">:</span>
          </h3>
          <ul class="space-y-6">
            <li class="flex items-start gap-4">
              <div class="mt-1 bg-[#00a5c5] rounded-full p-1 text-white shrink-0">
                <Check class="w-4 h-4 stroke-[3]" />
              </div>
              <p class="font-poppins text-neutral-700 text-lg leading-relaxed">
                <strong>Drive traffic</strong> to your website
              </p>
            </li>
            <li class="flex items-start gap-4">
              <div class="mt-1 bg-[#00a5c5] rounded-full p-1 text-white shrink-0">
                <Check class="w-4 h-4 stroke-[3]" />
              </div>
              <p class="font-poppins text-neutral-700 text-lg leading-relaxed">
                <strong>Mass market your events</strong>, offers, specials and more
              </p>
            </li>
            <li class="flex items-start gap-4">
              <div class="mt-1 bg-[#00a5c5] rounded-full p-1 text-white shrink-0">
                <Check class="w-4 h-4 stroke-[3]" />
              </div>
              <p class="font-poppins text-neutral-700 text-lg leading-relaxed">
                <strong>Re-target</strong> to previous <strong>customers</strong> and interested prospects
              </p>
            </li>
          </ul>
          <button
            @click="openModal"
            class="mt-12 bg-black hover:bg-[#00a5c5] text-white font-poppins font-medium text-sm sm:text-base px-8 py-4 rounded-full transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 lowercase cursor-pointer"
          >
            schedule a meeting today
          </button>
        </div>
        <div class="flex-1 w-full lg:mt-[-4rem]">
          <img loading="lazy" :src="emailServiceImg"
            alt="Email Marketing"
            class="w-full h-auto object-cover max-w-[650px] ml-auto rounded-[2rem] shadow-sm"
          />
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="px-6 sm:px-8 lg:px-12 py-16 sm:py-24 max-w-[900px] mx-auto flex flex-col items-center">
      <h3 class="font-poppins text-[#00a5c5] text-lg sm:text-xl mb-2 text-center">
        Why us?
      </h3>
      <h2 class="font-poppins text-4xl sm:text-5xl lg:text-6xl font-semibold text-neutral-800 mb-16 text-center tracking-tight">
        Frequently asked<br />questions
      </h2>

      <div class="w-full flex flex-col mb-16">
        <div v-for="(faq, index) in faqData" :key="index" class="w-full border-b border-neutral-200 overflow-hidden transition-all duration-300">
          <button @click="toggleFaq(index)" class="w-full flex items-center justify-between py-6 sm:py-8 text-left focus:outline-none group cursor-pointer">
            <span class="font-poppins text-lg sm:text-xl text-neutral-800 group-hover:text-[#00a5c5] transition-colors pr-4">
              {{ faq.question }}
            </span>
            <div :class="['flex-shrink-0 text-[#00a5c5] transition-transform duration-300', activeFaq === index ? 'rotate-180' : 'rotate-0']">
              <ChevronDown class="w-6 h-6" stroke-width="2" />
            </div>
          </button>
          <transition
            enter-active-class="transition-[grid-template-rows,opacity,margin] duration-300 ease-in-out"
            leave-active-class="transition-[grid-template-rows,opacity,margin] duration-300 ease-in-out"
            enter-from-class="grid-rows-[0fr] opacity-0 mb-0"
            enter-to-class="grid-rows-[1fr] opacity-100 mb-6"
            leave-from-class="grid-rows-[1fr] opacity-100 mb-6"
            leave-to-class="grid-rows-[0fr] opacity-0 mb-0"
          >
            <div v-show="activeFaq === index" class="grid">
              <div class="overflow-hidden">
                <p class="font-poppins text-neutral-600 text-base sm:text-lg leading-relaxed pr-8">
                  {{ faq.answer }}
                </p>
              </div>
            </div>
          </transition>
        </div>
      </div>

      <div class="text-center flex flex-col items-center">
        <p class="font-poppins text-neutral-600 text-lg sm:text-xl leading-relaxed mb-8 max-w-[600px]">
          If you'd like to know more about how R<span class="text-[#00a5c5]">-</span>E<span class="text-[#00a5c5]">-</span>D can help your business generate more leads.
        </p>
        <button
          @click="openModal"
          class="bg-black hover:bg-[#00a5c5] text-white font-poppins font-medium text-sm sm:text-base px-8 py-4 rounded-full transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 lowercase cursor-pointer"
        >
          schedule a meeting today
        </button>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ArrowLeft, Check, ChevronDown } from 'lucide-vue-next';

// Image Imports
import heroDesktop from '~/assets/images/digital-advertising-hero-banner.webp';
import fbIgStats from '~/assets/images/facebook-instagram-advertising-stats.webp';

// New Section Images
import googleServiceImg from '~/assets/images/google-service-image.webp';
import googleStatsImg from '~/assets/images/google-stats.webp';
import linkedinServiceImg from '~/assets/images/linkedin-service-image.webp';
import linkedinStatsImg from '~/assets/images/linkedin-stats.webp';
import tiktokServiceImg from '~/assets/images/tiktok-service-image.webp';
import tiktokStatsImg from '~/assets/images/tiktok-stats.webp';
import emailServiceImg from '~/assets/images/email-marketing-image.webp';
import emailStatsImg from '~/assets/images/email-marketing-stats.webp';
import smsServiceImg from '~/assets/images/sms-service-image.webp';
import smsStatsImg from '~/assets/images/sms-stats.webp';

// Social Icon Imports
import fbDefault from '~/assets/images/social-service-facebook-default.webp';
import fbHover from '~/assets/images/social-service-facebook-hover.webp';
import igDefault from '~/assets/images/social-service-instagram-default.webp';
import igHover from '~/assets/images/social-service-instagram-hover.webp';
import googleDefault from '~/assets/images/social-service-google-default.webp';
import googleHover from '~/assets/images/social-service-google-hover.webp';
import linkedinDefault from '~/assets/images/social-service-linkedin-default.webp';
import linkedinHover from '~/assets/images/social-service-linkedin-hover.webp';
import tiktokDefault from '~/assets/images/social-service-tiktok-default.webp';
import tiktokHover from '~/assets/images/social-service-tiktok-hover.webp';
import smsDefault from '~/assets/images/social-service-sms-default.webp';
import smsHover from '~/assets/images/social-service-sms-hover.webp';
import emailDefault from '~/assets/images/social-service-email-default.webp';
import emailHover from '~/assets/images/social-service-email-hover.webp';

const { openModal } = useModal();

const socialPlatforms = [
  { name: 'Facebook', defaultImg: fbDefault, hoverImg: fbHover, id: 'facebook-instagram' },
  { name: 'Instagram', defaultImg: igDefault, hoverImg: igHover, id: 'facebook-instagram' },
  { name: 'Google', defaultImg: googleDefault, hoverImg: googleHover, id: 'google' },
  { name: 'LinkedIn', defaultImg: linkedinDefault, hoverImg: linkedinHover, id: 'linkedin' },
  { name: 'TikTok', defaultImg: tiktokDefault, hoverImg: tiktokHover, id: 'tiktok' },
];

const communicationPlatforms = [
  { name: 'SMS', defaultImg: smsDefault, hoverImg: smsHover, id: 'sms' },
  { name: 'Email', defaultImg: emailDefault, hoverImg: emailHover, id: 'email' },
];

const faqData = [
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary depending on the scope and complexity of your requirements. We'll work closely with you to establish a realistic schedule during our initial consultation."
  },
  {
    question: "How do you structure your pricing?",
    answer: "We offer custom pricing tailored to your specific needs and goals. Contact us for a detailed proposal and breakdown."
  },
  {
    question: "How often do you provide performance reports?",
    answer: "We provide detailed performance reports on a monthly basis, highlighting key metrics, insights, and actionable recommendations."
  },
  {
    question: "Do you work with businesses in my industry?",
    answer: "Yes! We work with a wide range of industries and take the time to understand the unique challenges and opportunities within your specific market."
  },
  {
    question: "What makes your agency different?",
    answer: "Our agency stands out through our data-driven approach, transparent communication, and commitment to delivering measurable results for every client."
  }
];

const activeFaq = ref<number | null>(null);

const toggleFaq = (index: number) => {
  activeFaq.value = activeFaq.value === index ? null : index;
};

const scrollToPlatform = (id: string) => {
  const target = document.getElementById(id);
  if (target) {
    const headerOffset = 100;
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  }
};
</script>
