import React from 'react';
import { ArrowLeft } from 'lucide-react';
import heroDesktop from '../images/r-e-d-careers-hero-desktop-banner.webp';
import heroMobile from '../images/r-e-d-careers-hero-mobile-banner.webp';

interface CareersPageProps {
}

export default function CareersPage({ }: CareersPageProps) {
  return (
    <div className="w-full bg-[#fafafa] min-h-screen relative font-sans overflow-x-hidden pt-8 pb-20">
      <link rel="preload" as="image" href={heroDesktop} media="(min-width: 1024px)" fetchPriority="high" />
      <link rel="preload" as="image" href={heroMobile} media="(max-width: 1023px)" fetchPriority="high" />

      {/* Back Breadcrumb */}
      <div className="pl-8 mx-auto lg:w-[95%] max-w-[1600px] px-4 sm:px-6 lg:px-12 mb-6">
        <a
          href="#"
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-[#00a5c5] transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </a>
      </div>

      {/* Hero Section */}
      <section className="mx-auto lg:w-[95%] max-w-[1600px] px-4 sm:px-6 lg:px-12 mb-20">

        {/* DESKTOP LAYOUT (lg and up) */}
        <div className="hidden lg:flex relative w-full rounded-[2rem] overflow-hidden min-h-[400px] sm:min-h-[700px] items-center">

          {/* Background image */}
          <div className="absolute inset-0 w-full h-full z-0">
            <img
              src={heroDesktop}
              alt="Careers at R-E-D"
              className="w-full h-full object-contain object-center"
              fetchPriority="high"
              loading="eager"
            />
          </div>

          {/* Text Content overlay */}
          <div className="relative z-10 w-full md:w-[60%] m-0 md:pt-32 lg:pt-36 p-8 sm:p-12 lg:p-20">
            <p className="font-poppins text-neutral-600 text-xs sm:text-sm mb-4 tracking-wide font-medium uppercase">
              Our careers
            </p>
            <h1 className="font-poppins text-4xl sm:text-5xl lg:text-6xl font-semibold text-neutral-800 leading-[1.1] tracking-tight mb-6">
              Join the future of <br className="hidden sm:block" />
              <span className="text-[#00a5c5]">digital advertising.</span>
            </h1>
            <p className="font-poppins text-neutral-700 text-sm sm:text-base leading-relaxed max-w-lg font-medium">
              We're looking for visionaries, makers, and strategists to build what's next.
              At Digitalcraft, we don't just adapt to the future; we design it.
            </p>
          </div>
        </div>

        {/* MOBILE & TABLET LAYOUT (below lg) - Stacked Vertically */}
        <div className="block lg:hidden w-full flex flex-col items-center text-center">
          <div className="mb-8">
            <p className="font-poppins text-neutral-600 text-xs sm:text-sm mb-4 tracking-wide font-medium uppercase">
              Our careers
            </p>
            <h1 className="font-poppins text-4xl sm:text-5xl md:text-6xl font-semibold text-neutral-800 leading-tight tracking-tight mb-6">
              Join the future of <br />
              <span className="text-[#00a5c5]">digital advertising.</span>
            </h1>
            <p className="font-poppins text-neutral-700 text-sm sm:text-base leading-relaxed max-w-lg font-medium mx-auto">
              We're looking for visionaries, makers, and strategists to build what's next.
              At Digitalcraft, we don't just adapt to the future; we design it.
            </p>
          </div>

          <div className="w-full max-w-lg sm:max-w-xl md:max-w-2xl overflow-hidden rounded-[2rem]">
            <img
              src={heroMobile}
              alt="Careers at R-E-D Mobile Banner"
              className="w-full h-auto object-contain mx-auto"
              fetchPriority="high"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Open Roles Section */}
      <section className="mx-auto lg:w-[95%] max-w-[1600px] px-4 sm:px-6 lg:px-12 mb-24">
        <div className="mb-10">
          <h2 className="font-poppins text-3xl sm:text-4xl font-semibold text-neutral-800 mb-2">
            Open Roles
          </h2>
          <p className="font-poppins text-neutral-600 text-sm sm:text-base font-medium">
            Find your place among the best.
          </p>
        </div>

        <hr className="border-neutral-300 border-2 mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Role 1 */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm flex flex-col">
            <div className="mb-4 md:mb-4">
              <span className="bg-[#00a5c5] text-white font-poppins text-sm md:text-xs font-medium md:font-semibold px-4 py-1.5 rounded-full tracking-wide">
                Marketing
              </span>
            </div>
            <h3 className="font-poppins text-[32px] md:text-2xl font-semibold text-neutral-800 mb-4 md:mb-3 leading-tight">
              Head Of Social Media
            </h3>
            <p className="font-poppins text-base md:text-sm text-neutral-700 md:text-neutral-600 leading-relaxed mb-8 flex-1 font-medium md:font-normal">
              Lead social strategy to grow brand awareness, engagement, and conversions through impactful content and data-driven campaigns.
            </p>
            <hr className="border-neutral-800 md:border-neutral-200 mb-6" />
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-0">
              <span className="font-poppins text-neutral-800 md:text-neutral-500 text-[15px] md:text-xs font-medium">
                Facebook | Instagram | TikTok | X | LinkedIn
              </span>
              <a href="#career-detail" className="w-full md:w-auto bg-black hover:bg-[#00a5c5] text-white font-poppins text-base md:text-xs font-semibold px-6 py-3 md:py-2 rounded-full transition-colors shadow-sm text-center block md:inline-block">
                View Role
              </a>
            </div>
          </div>

          {/* Role 2 */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm flex flex-col">
            <div className="mb-4 md:mb-4">
              <span className="bg-[#00a5c5] text-white font-poppins text-sm md:text-xs font-medium md:font-semibold px-4 py-1.5 rounded-full tracking-wide">
                Marketing
              </span>
            </div>
            <h3 className="font-poppins text-[32px] md:text-2xl font-bold text-neutral-800 mb-4 md:mb-3 leading-tight">
              Head Of Search
            </h3>
            <p className="font-poppins text-base md:text-sm text-neutral-700 md:text-neutral-600 leading-relaxed mb-8 flex-1 font-medium md:font-normal">
              Lead SEO and paid search strategy to grow visibility, drive qualified traffic, and maximise conversions through data-driven optimization and performance marketing.
            </p>
            <hr className="border-neutral-800 md:border-neutral-200 mb-6" />
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-0">
              <span className="font-poppins text-neutral-800 md:text-neutral-500 text-[15px] md:text-xs font-medium">
                Facebook | Instagram | TikTok | X | LinkedIn
              </span>
              <a href="#career-detail-search" className="w-full md:w-auto bg-black hover:bg-[#00a5c5] text-white font-poppins text-base md:text-xs font-semibold px-6 py-3 md:py-2 rounded-full transition-colors shadow-sm text-center block md:inline-block">
                View Role
              </a>
            </div>
          </div>

          {/* Role 3 */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm flex flex-col">
            <div className="mb-4 md:mb-4">
              <span className="bg-[#00a5c5] text-white font-poppins text-sm md:text-xs font-medium md:font-semibold px-4 py-1.5 rounded-full tracking-wide">
                Marketing
              </span>
            </div>
            <h3 className="font-poppins text-[32px] md:text-2xl font-bold text-neutral-800 mb-4 md:mb-3 leading-tight">
              Digital Marketing Intern
            </h3>
            <p className="font-poppins text-base md:text-sm text-neutral-700 md:text-neutral-600 leading-relaxed mb-8 flex-1 font-medium md:font-normal">
              Support campaigns across SEO, social media, and paid ads while gaining hands-on experience in digital marketing and performance tracking.
            </p>
            <hr className="border-neutral-800 md:border-neutral-200 mb-6" />
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-0">
              <span className="font-poppins text-neutral-800 md:text-neutral-500 text-[15px] md:text-xs font-medium">
                Facebook | Instagram | TikTok | X | LinkedIn
              </span>
              <a href="#career-detail-intern" className="w-full md:w-auto bg-black hover:bg-[#00a5c5] text-white font-poppins text-base md:text-xs font-semibold px-6 py-3 md:py-2 rounded-full transition-colors shadow-sm text-center block md:inline-block">
                View Role
              </a>
            </div>
          </div>

          {/* Role 4 */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm flex flex-col">
            <div className="mb-4 md:mb-4">
              <span className="bg-[#00a5c5] text-white font-poppins text-sm md:text-xs font-medium md:font-semibold px-4 py-1.5 rounded-full tracking-wide">
                Marketing
              </span>
            </div>
            <h3 className="font-poppins text-[32px] md:text-2xl font-bold text-neutral-800 mb-4 md:mb-3 leading-tight">
              Digital Designer
            </h3>
            <p className="font-poppins text-base md:text-sm text-neutral-700 md:text-neutral-600 leading-relaxed mb-8 flex-1 font-medium md:font-normal">
              Create visually engaging digital assets and user experiences across web and marketing campaigns, combining creativity with brand consistency and UX best practices.
            </p>
            <hr className="border-neutral-800 md:border-neutral-200 mb-6" />
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-0">
              <span className="font-poppins text-neutral-800 md:text-neutral-500 text-[15px] md:text-xs font-medium">
                Facebook | Instagram | TikTok | X | LinkedIn
              </span>
              <a href="#career-detail-designer" className="w-full md:w-auto bg-black hover:bg-[#00a5c5] text-white font-poppins text-base md:text-xs font-semibold px-6 py-3 md:py-2 rounded-full transition-colors shadow-sm text-center block md:inline-block">
                View Role
              </a>
            </div>
          </div>
        </div>
      </section>



    </div>
  );
}
