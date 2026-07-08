import { motion } from 'motion/react';
import metaLogo from '../images/meta-partner.webp';
import metaLogoWhite from '../images/meta-partner-white.webp';
import googleLogo from '../images/google-partner.webp';
import googleLogoWhite from '../images/google-partner-white.webp';
import metaTopImg from '../images/Meta-Business-Partner-image.webp';
import googleTopImg from '../images/google-Business-Partner-image.webp';

interface PartnershipsProps {
  onCtaClick?: () => void;
}

export default function Partnerships({ onCtaClick }: PartnershipsProps) {
  return (
    <section className="w-full py-16 sm:py-24 bg-[#fafafa]" id="partnerships">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">

        {/* Responsive Grid Layout for 2 Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">

          {/* Card 1: Meta Business Partner */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6, boxShadow: '0px 10px 100px rgba(24, 39, 75, 0.14)' }}
            className="group flex flex-col bg-white hover:bg-[#0866FF] rounded-[32px] sm:rounded-[40px] overflow-hidden transition-colors duration-300 border border-neutral-100/40"
            style={{ boxShadow: '0px 2px 80px rgba(24, 39, 75, 0.08)' }}
          >
            {/* Header Visual Image */}
            <div className="w-full h-64 sm:h-80 overflow-hidden bg-white">
              <img loading="lazy" src={metaTopImg}
                alt="Meta Business Partner Workspace"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out select-none"
              />
            </div>

            {/* Card Content */}
            <div className="p-8 sm:p-12 flex flex-col flex-grow">
              {/* Partner Logo */}
              <div className="mb-6 h-10 flex items-center">
                <img loading="lazy" src={metaLogo}
                  alt="Meta Business Partner Logo"
                  referrerPolicy="no-referrer"
                  className="h-full w-auto object-contain max-w-[240px] block group-hover:hidden"
                />
                <img loading="lazy" src={metaLogoWhite}
                  alt="Meta Business Partner Logo White"
                  referrerPolicy="no-referrer"
                  className="h-full w-auto object-contain max-w-[240px] hidden group-hover:block"
                />
              </div>

              {/* Title */}
              <h3 className="font-poppins font-normal text-3xl sm:text-[2.5rem] text-neutral-800 group-hover:text-white leading-tight mb-6 tracking-tight transition-colors duration-300">
                Growing your <br />business
              </h3>

              {/* Description */}
              <p className="font-poppins text-neutral-600 group-hover:text-white text-sm sm:text-[15px] leading-relaxed mb-8 flex-grow transition-colors duration-300">
                Your business is unique and so are your aspirations for the future. Our tools as a Meta Business Partner gives us access to exclusive technology and behind the scenes insights giving us the edge over our competitors.
              </p>

              {/* Action Button */}
              <div>
                <button
                  onClick={onCtaClick}
                  className="font-poppins text-xs text-white border border-transparent group-hover:border-white bg-black group-hover:bg-transparent hover:!bg-white hover:!text-[#0866FF] px-6 py-3 rounded-full transition-all duration-300 font-medium lowercase"
                >
                  Partner with us today
                </button>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Google Partner */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            whileHover={{ y: -6, boxShadow: '0px 10px 100px rgba(24, 39, 75, 0.14)' }}
            className="group flex flex-col bg-white hover:bg-[#4F81BD] rounded-[32px] sm:rounded-[40px] overflow-hidden transition-colors duration-300 border border-neutral-100/40"
            style={{ boxShadow: '0px 2px 80px rgba(24, 39, 75, 0.08)' }}
          >
            {/* Header Visual Image */}
            <div className="w-full h-64 sm:h-80 overflow-hidden bg-white">
              <img loading="lazy" src={googleTopImg}
                alt="Google Partner Workspace"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out select-none"
              />
            </div>

            {/* Card Content */}
            <div className="p-8 sm:p-12 flex flex-col flex-grow">
              {/* Partner Logo */}
              <div className="mb-6 h-10 flex items-center">
                <img loading="lazy" src={googleLogo}
                  alt="Google Partner Logo"
                  referrerPolicy="no-referrer"
                  className="h-full w-auto object-contain max-w-[240px] block group-hover:hidden"
                />
                <img loading="lazy" src={googleLogoWhite}
                  alt="Google Partner Logo White"
                  referrerPolicy="no-referrer"
                  className="h-full w-auto object-contain max-w-[240px] hidden group-hover:block"
                />
              </div>

              {/* Title */}
              <h3 className="font-poppins font-normal text-3xl sm:text-[2.5rem] text-neutral-800 group-hover:text-white leading-tight mb-6 tracking-tight transition-colors duration-300">
                More than a <br />partnership.
              </h3>

              {/* Description */}
              <p className="font-poppins text-neutral-600 group-hover:text-white text-sm sm:text-[15px] leading-relaxed mb-8 flex-grow transition-colors duration-300">
                By joining R-E-D, you get access to advertising resources to set up your business to succeed and help your company grow and stand out in the industry.
              </p>

              {/* Action Button */}
              <div>
                <button
                  onClick={onCtaClick}
                  className="font-poppins text-xs text-white border border-transparent group-hover:border-white bg-black group-hover:bg-transparent hover:!bg-white hover:!text-[#4F81BD] px-6 py-3 rounded-full transition-all duration-300 font-medium lowercase"
                >
                  Partner with us today
                </button>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
