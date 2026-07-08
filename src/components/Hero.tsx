import heroBanner from '../images/r-e-d-landing-page-hero-banner.webp';
import heroMobileBanner from '../images/r-e-d-landing-page-hero-mobile-banner.webp';

interface HeroProps {
  onCtaClick?: () => void;
}

export default function Hero({ onCtaClick }: HeroProps) {
  return (
    <section className="relative mt-8 lg:mt-12 pb-12 sm:pb-16" id="hero">
      <link rel="preload" as="image" href={heroBanner} media="(min-width: 1024px)" fetchPriority="high" />
      <link rel="preload" as="image" href={heroMobileBanner} media="(max-width: 1023px)" fetchPriority="high" />
      <div className="mx-auto lg:w-[95%] max-w-[1600px] px-4 sm:px-6 lg:px-0">

        {/* DESKTOP LAYOUT (lg and up) */}
        <div className="hidden lg:flex relative w-full lg:h-[720px] items-center overflow-hidden">
          {/* Background Image Layer */}
          <div className="absolute inset-0 w-full h-full z-0">
            <img
              src={heroBanner}
              alt="R-E-D Solutions Hero Banner"
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain object-right"
              fetchPriority="high"
              loading="eager"
            />
          </div>

          {/* Content Overlaid on Desktop with exactly 100px left spacing */}
          <div className="relative z-10 w-full lg:w-[600px] lg:pt-12 lg:pl-[100px] flex flex-col justify-center items-start text-left">
            <h1 className="font-poppins font-medium lg:text-[4rem] lg:leading-[70px] mb-6 text-neutral-900">
              Designed for businesses of all sizes.
            </h1>

            <p className="font-poppins font-medium text-neutral-800 text-[16px] leading-[1.5] max-w-2xl mb-8">
              From early stage start-ups to industry leading corporations, R-E-D is the choice of modern CEO's and CFO's. Make us your marketing partner and maximise your growth and results today!
            </p>

            <button
              onClick={onCtaClick}
              className="font-poppins font-medium text-[16px] text-white bg-black hover:bg-[#1ca3c4] rounded-full transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-md hover:shadow-lg lowercase"
              style={{ padding: '20px' }}
            >
              schedule a meeting today
            </button>
          </div>
        </div>

        {/* MOBILE & TABLET LAYOUT (below lg) - Stacked Vertically, Center-aligned */}
        <div className="block lg:hidden w-full flex flex-col items-center text-center px-4">
          {/* Mobile Heading with Conversion highlighted in cyan */}
          <h1 className="font-poppins font-medium text-3xl sm:text-[2.25rem] md:text-5xl leading-tight tracking-tight mb-4">
            <span className="text-[#1ca3c4]">Conversion</span> based,<br />
            results driven marketing
          </h1>

          {/* Mobile Description with 500+ highlighted */}
          <p className="font-poppins text-neutral-600 text-sm sm:text-base leading-relaxed max-w-xl mb-6">
            Over <span className="text-[#1ca3c4] font-semibold">500+</span> satisfied clients across South Africa trust us to manage their monthly lead generation and Ad spend.
          </p>

          {/* Mobile Button: outlined pill shape transitioning to filled cyan on hover/click */}
          <button
            onClick={onCtaClick}
            className="font-poppins text-xs sm:text-sm tracking-widest text-white border-none rounded-full py-4 px-8 bg-black hover:bg-[#1ca3c4] active:bg-[#1ca3c4] transition-all duration-300 hover:scale-[1.02] active:scale-95 mb-10 w-full sm:w-auto font-medium lowercase"
          >
            schedule a meeting today
          </button>

          {/* Mobile Image: object-contained, rounded corners, no unnecessary padding */}
          <div className="w-full max-w-lg sm:max-w-xl md:max-w-2xl overflow-hidden">
            <img
              src={heroMobileBanner}
              alt="R-E-D Solutions Hero Mobile Banner"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-contain mx-auto"
              fetchPriority="high"
              loading="eager"
            />
          </div>
        </div>

      </div>
    </section>
  );
}


