import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import heroBanner from '../images/r-e-d-social-media-management-dekstop-banner.webp';
import heroMobileBanner from '../images/r-e-d-social-media-management-mobile-banner.webp';
import phoneMockup from '../images/social-media-service-phone-mockup.webp';

interface ServicePageProps {
  onCtaClick: () => void;
}

export default function ServiceSocialMedia({ onCtaClick }: ServicePageProps) {
  const contentManagementPoints = [
    "Create and post relevant and engaging content",
    "Business updates and company culture insights",
    "Publish and pin important posts",
    "Create primary videos and images",
    "Post reviews"
  ];

  return (
    <div className="w-full bg-[#f8f9fa] min-h-screen relative font-sans overflow-x-hidden pt-8 sm:pt-16 pb-20 md:pb-0 lg:pb-0">
      {/* Back Breadcrumb */}
      <div className="mx-auto lg:w-[95%] max-w-[1600px] px-4 sm:px-6 lg:px-0 mb-6">
        <a
          href="#services"
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-[#1ca3c4] transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Services
        </a>
      </div>

      {/* Hero Section */}
      <section className="relative pb-12 lg:pb-0">
        <link rel="preload" as="image" href={heroBanner} fetchPriority="high" />
        <div className="mx-auto lg:w-[95%] max-w-[1600px] px-4 sm:px-6 lg:px-0">

          {/* DESKTOP LAYOUT (lg and up) */}
          <div className="hidden lg:flex relative w-full lg:h-175 items-center overflow-hidden">
            {/* Background Image Layer */}
            <div className="absolute inset-0 w-full h-full z-0 flex justify-end">
              <img
                src={heroBanner}
                alt="Social Media Management Banner"
                referrerPolicy="no-referrer"
                className="h-full w-auto object-contain justify-end object-right"
                fetchPriority="high"
                loading="eager"
              />
            </div>

            {/* Content Overlaid on Desktop */}
            <div className="relative z-10 w-full lg:w-175 lg:pl-25 flex flex-col justify-center items-start text-left">
              <span className="font-poppins font-medium text-base text-neutral-500 mb-6 tracking-wide">
                Social Media Management
              </span>
              <h1 className="font-poppins font-semibold text-6xl leading-[1.1] text-neutral-900 tracking-tight">
                Build Stronger <br /> Customer <br />
                <span className="text-[#1ca3c4]">Connections<br />Through Social<br />Media</span>
              </h1>
            </div>
          </div>

          {/* MOBILE LAYOUT (below lg) */}
          <div className="flex lg:hidden w-full flex-col items-center text-center px-4 pt-4 pb-0 overflow-hidden">
            <span className="font-poppins font-medium text-xs sm:text-sm text-neutral-500 mb-4 tracking-wide">
              Social Media Management
            </span>
            <h1 className="font-poppins font-semibold text-4xl sm:text-5xl leading-[1.15] text-neutral-900 tracking-tight mb-8">
              Build Stronger <br /> Customer <br />
              <span className="text-[#1ca3c4]">Connections Through Social Media</span>
            </h1>
            <div className="w-full relative mt-4 -mb-4 flex justify-end">
              <img
                src={heroMobileBanner}
                alt="Social Media Management Mobile Banner"
                referrerPolicy="no-referrer"
                className="w-full max-w-125 h-auto object-contain"
                fetchPriority="high"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Text Block */}
      <section className="px-6 sm:px-8 lg:px-12  max-w-350 mx-auto text-center space-y-8">
        <p className="font-poppins text-neutral-700 text-base sm:text-xl lg:text-xl leading-relaxed">
          Today having a social media presence is an absolute necessity for all businesses. In the past decade the majority of consumers have embraced social media as a primary means of communication. In response to this migration, businesses must be present on social media. Moreover, businesses need to ensure that they are initiating engagement with their target audiences and monitoring that engagement.
        </p>
        <p className="font-poppins text-neutral-700 text-[17px] sm:text-[19px] lg:text-[21px] leading-relaxed">
          At R-E-D we are all about social, and our social media experts understand how to get your business online. At R-E-D we not only strive to build meaningful relationships with our own clients but, to help your business build valuable connections with its customers through content, moderation, a great profile and instant real time assistance.
        </p>
      </section>

      {/* Content Management Section */}
      <section className="mx-auto lg:w-[95%] max-w-[1600px] px-6 sm:px-8 lg:px-0 py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Column: Phone Mockup */}
          <div className="w-full flex justify-center lg:justify-end pr-0 lg:pr-10 relative">
            <img
              src={phoneMockup}
              alt="Social Media Management Phone Mockup"
              className="w-full max-w-full h-auto object-contain hover:-translate-y-2 transition-transform duration-500 ease-out"
              loading="lazy"
            />
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col items-start text-left lg:pl-10">
            <h2 className="font-poppins font-bold text-4xl sm:text-[42px] lg:text-[48px] text-neutral-900 tracking-tight mb-12">
              Content management.
            </h2>

            <ul className="space-y-6 mb-16">
              {contentManagementPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#1ca3c4] flex-shrink-0 fill-[#1ca3c4]/10 mt-0.5" />
                  <span className="font-poppins text-neutral-700 font-medium text-[15px] sm:text-[17px]">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            <button
              onClick={onCtaClick}
              className="font-poppins font-medium text-xs sm:text-[13px] tracking-widest text-white bg-black hover:bg-[#1ca3c4] px-10 py-4 rounded-full lowercase transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 mb-16"
            >
              schedule a meeting today
            </button>

            {/* Circular Awareness Placeholders */}
            <div className="flex flex-wrap gap-8 sm:gap-12 lg:gap-16">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex flex-col items-center gap-4">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#e5e5e5]"></div>
                  <span className="font-poppins text-[11px] font-medium tracking-widest text-neutral-600 uppercase">
                    Awareness
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
