import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import EstablishPresence from '../components/EstablishPresence';
import serviceDesktopBanner from '../images/service-page-hero-banner-desktop.webp';
import serviceMobileBanner from '../images/service-page-hero-banner-mobile.webp';

interface ServicesPageProps {
  onCtaClick: () => void;
}

const servicesList = [
  {
    id: '01',
    title: 'Digital advertising',
    link: '#service-digital-advertising',
    description: (
      <>
        Integrated, multi-channel advertising solutions across all major digital platforms:
        <br />
        <span className="text-[#00a5c5] font-semibold">
          Facebook | Instagram | Google | LinkedIn | TikTok and X(Twitter)
        </span>
      </>
    )
  },
  {
    id: '02',
    title: 'Social media management',
    link: '#service-social-media',
    description: (
      <>
        Creating, monitoring and managing social interactions:
        <br />
        <span className="text-[#00a5c5] font-semibold">
          Content | Moderation | Profile management
        </span>
      </>
    )
  },
  {
    id: '03',
    title: 'Website development & maintenance',
    link: '#service-website-dev',
    description: (
      <>
        Fully responsive, integrated websites that compliment your objectives and drive value:
        <br />
        <span className="text-[#00a5c5] font-semibold">
          Building | Maintenance | Integration | SEO | Analytics
        </span>
      </>
    )
  },
  {
    id: '04',
    title: 'Online reputation solutions',
    link: '#service-online-reputation',
    description: (
      <>
        Review monitoring and response management across all digital platforms.
        <br />
        <span className="text-[#00a5c5] font-semibold">
          World class solutions to drive positive reviews.
        </span>
      </>
    )
  },
  {
    id: '05',
    title: 'Location listing & maintenance',
    link: '#service-location-listing',
    description: (
      <>
        Don't lose customers to competitors because you can't be found.
        <br />
        <span className="text-[#00a5c5] font-semibold">
          We ensure you project the right image of your business and all of your contact information is up to date.
        </span>
      </>
    )
  }
];

export default function ServicesPage({ onCtaClick }: ServicesPageProps) {
  return (
    <div className="w-full bg-[#f8f9fa] min-h-screen relative font-sans overflow-x-hidden pt-8 sm:pt-16 pb-0">
      <link rel="preload" as="image" href={serviceDesktopBanner} media="(min-width: 640px)" fetchPriority="high" />
      <link rel="preload" as="image" href={serviceMobileBanner} media="(max-width: 639px)" fetchPriority="high" />

      {/* Back to Home Breadcrumb Indicator */}
      <div className="mx-auto lg:w-[95%] max-w-[1600px] px-8 lg:px-0 mb-6">
        <a
          href="#"
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-[#00a5c5] transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to R-E-D Home
        </a>
      </div>

      {/* Hero Banner Section */}
      <section className="relative px-8 lg:px-0 mb-16 lg:w-[95%] max-w-[1600px] mx-auto flex flex-col gap-4 sm:block">

        {/* Mobile Heading */}
        <div className="flex flex-col sm:hidden pt-2">
          <span className="font-poppins text-[#2c2c2c] text-sm mb-2">Our services</span>
          <h1 className="font-poppins w-50 text-3xl leading-[1.3] text-[#2c2c2c] font-semibold tracking-tight">
            Driving real growth
            through <span className="text-[#00a5c5]">data-driven</span>
            <span className="text-[#00a5c5]"> digital advertising</span>
          </h1>
        </div>

        <div className="w-full relative overflow-hidden rounded-4xl sm:rounded-[3rem]">
          {/* Desktop Banner Image */}
          <img
            src={serviceDesktopBanner}
            alt="Driving real growth through data-driven digital advertising"
            className="w-full h-auto object-cover hidden sm:block"
            fetchPriority="high"
            loading="eager"
          />
          {/* Mobile Banner Image */}
          <img
            src={serviceMobileBanner}
            alt="Driving real growth through data-driven digital advertising"
            className="w-full h-auto object-cover block sm:hidden"
            fetchPriority="high"
            loading="eager"
          />

          {/* Overlay Text */}
          <div className="absolute inset-0 hidden sm:flex flex-col justify-center px-8 sm:px-12 md:px-20 lg:px-32 xl:px-40 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[65%] z-10 pointer-events-none">
            <span className="font-poppins text-[#2c2c2c] text-sm sm:text-base lg:text-lg mb-2 sm:mb-4">Our services</span>
            <h1 className="font-poppins text-[2.5rem] sm:text-5xl md:text-6xl lg:text-6xl leading-[1.1] text-[#2c2c2c] font-semibold tracking-tight">
              Driving real growth <br className="hidden sm:block" />
              through <span className="text-[#00a5c5]">data-driven</span> <br />
              <span className="text-[#00a5c5]">digital advertising</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Intro Text Section */}
      <section className="px-6 sm:px-8 lg:px-12 py-12 sm:py-20 text-center max-w-[1600px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-poppins text-3xl sm:text-4xl lg:text-5xl leading-[1.3] text-neutral-800 font-normal tracking-tight"
        >
          We turn attention into action with <span className="text-[#00a5c5] font-normal">performance-driven campaigns</span> that generate leads, maximise ROI, and scale your brand.
        </motion.h2>
      </section>

      {/* Services List */}
      <section className="px-6 sm:px-8 lg:px-12 pb-24 max-w-300 mx-auto">
        <div className="flex flex-col">
          {servicesList.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col pt-12 pb-12 sm:pb-16 border-b border-neutral-300 last:border-b-0"
            >
              <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">

                {/* Left Column (Number & Title) */}
                <div className="flex-1 flex gap-6 items-start">
                  <div className="bg-[#00a5c5] text-white text-[15px] sm:text-base font-semibold py-1.5 px-4 rounded-full mt-1 flex-shrink-0">
                    {service.id}
                  </div>
                  <h3 className="font-poppins text-2xl sm:text-3xl text-neutral-800 font-normal leading-tight">
                    {service.title}
                  </h3>
                </div>

                {/* Right Column (Description & Button) */}
                <div className="flex-1 flex flex-col items-start gap-6">
                  <p className="font-poppins text-neutral-700 text-base sm:text-[1.1rem] leading-[1.7]">
                    {service.description}
                  </p>
                  <a
                    href={service.link}
                    className="inline-block bg-black hover:bg-[#00a5c5] text-white font-poppins font-semibold text-[13px] sm:text-[14px] px-8 py-3 rounded-full transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 tracking-wide text-center"
                  >
                    I'm interested
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Establish Presence Bottom CTA */}
      <EstablishPresence onCtaClick={onCtaClick} />

    </div>
  );
}
