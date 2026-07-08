import { motion } from 'motion/react';
import servicesImg from '../images/services-image.webp';
import facebookIcon from '../images/facebook-service-icon.svg';
import paidMediaIcon from '../images/paid-media-service-icon.svg';
import googleIcon from '../images/google-service-icon.svg';
import webDevIcon from '../images/website-development-icon.svg';

interface ServicesGridProps {
  onCtaClick?: () => void;
}

export default function ServicesGrid({ onCtaClick }: ServicesGridProps) {
  return (
    <section className="py-16 sm:py-24 bg-[#fafafa]" id="services">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-12 lg:px-8">

        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="font-poppins text-sm sm:text-base font-normal text-[#1ca3c4] tracking-wide block mb-3">
            Services
          </span>
          <h2 className="font-poppins font-semibold text-3xl sm:text-4xl md:text-5xl text-neutral-900 tracking-tight leading-tight max-w-3xl mx-auto">
            Explore our wide range of services
          </h2>
        </div>

        {/* Services Grid (3 Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">

          {/* Left Column - Facebook and Paid Media */}
          <div className="flex flex-col gap-8 justify-between">
            {/* Card 1: Facebook Marketing */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-[32px] p-8 sm:p-10 border border-neutral-100/80 flex flex-col justify-between shadow-sm flex-1"
              style={{ boxShadow: '0px 4px 50px rgba(0, 0, 0, 0.01)' }}
            >
              <div>
                {/* Icon Container */}
                <img loading="lazy" src={facebookIcon}
                  alt="Facebook Marketing Icon"
                  referrerPolicy="no-referrer"
                  className="w-14 h-14 object-contain select-none mb-8"
                />
                {/* Title */}
                <h3 className="font-poppins font-normal text-3xl sm:text-4xl text-neutral-900 leading-tight mb-4">
                  Facebook marketing
                </h3>
                {/* Support Text */}
                <p className="font-poppins text-neutral-500 text-sm sm:text-base leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et porttitor leo. Sed ullamcorper gravida ligula, a venenatis risus feugiat a. Nam venenatis diam sit amet laoreet ultricies.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Paid Media & Social Media */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-[32px] p-8 sm:p-10 border border-neutral-100/80 flex flex-col justify-between shadow-sm flex-1"
              style={{ boxShadow: '0px 4px 50px rgba(0, 0, 0, 0.01)' }}
            >
              <div>
                {/* Icon Container */}
                <img loading="lazy" src={paidMediaIcon}
                  alt="Paid Media & Social Media Icon"
                  referrerPolicy="no-referrer"
                  className="w-14 h-14 object-contain select-none mb-8"
                />
                {/* Title */}
                <h3 className="font-poppins font-normal text-3xl sm:text-4xl text-neutral-900 leading-tight mb-4">
                  Paid media & Social media
                </h3>
                {/* Support Text */}
                <p className="font-poppins text-neutral-500 text-sm sm:text-base leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et porttitor leo. Sed ullamcorper gravida ligula, a venenatis risus feugiat a. Nam venenatis diam sit amet laoreet ultricies.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Middle Column - Large Image Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative rounded-[32px] overflow-hidden min-h-[350px] lg:min-h-full shadow-sm"
          >
            <motion.img
              src={servicesImg}
              alt="Team collaborating on design and marketing plans"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover origin-center"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </motion.div>

          {/* Right Column - Google Advertising and Web Development */}
          <div className="flex flex-col gap-8 justify-between">
            {/* Card 3: Google Advertising */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-[32px] p-8 sm:p-10 border border-neutral-100/80 flex flex-col justify-between shadow-sm flex-1"
              style={{ boxShadow: '0px 4px 50px rgba(0, 0, 0, 0.01)' }}
            >
              <div>
                {/* Icon Container */}
                <img loading="lazy" src={googleIcon}
                  alt="Google Advertising Icon"
                  referrerPolicy="no-referrer"
                  className="w-14 h-14 object-contain select-none mb-8"
                />
                {/* Title */}
                <h3 className="font-poppins font-normal text-3xl sm:text-4xl text-neutral-900 leading-tight mb-4">
                  Google advertising
                </h3>
                {/* Support Text */}
                <p className="font-poppins text-neutral-500 text-sm sm:text-base leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et porttitor leo. Sed ullamcorper gravida ligula, a venenatis risus feugiat a. Nam venenatis diam sit amet laoreet ultricies.
                </p>
              </div>
            </motion.div>

            {/* Card 4: Website Development */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-[32px] p-8 sm:p-10 border border-neutral-100/80 flex flex-col justify-between shadow-sm flex-1"
              style={{ boxShadow: '0px 4px 50px rgba(0, 0, 0, 0.01)' }}
            >
              <div>
                {/* Icon Container */}
                <img loading="lazy" src={webDevIcon}
                  alt="Website Development Icon"
                  referrerPolicy="no-referrer"
                  className="w-14 h-14 object-contain select-none mb-8"
                />
                {/* Title */}
                <h3 className="font-poppins font-normal text-3xl sm:text-4xl text-neutral-900 leading-tight mb-4">
                  Website development
                </h3>
                {/* Support Text */}
                <p className="font-poppins text-neutral-500 text-sm sm:text-base leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et porttitor leo. Sed ullamcorper gravida ligula, a venenatis risus feugiat a. Nam venenatis diam sit amet laoreet ultricies.
                </p>
              </div>
            </motion.div>
          </div>

        </div>

        {/* View All Services Button */}
        <div className="text-center mt-8">
          <button
            onClick={onCtaClick}
            className="font-poppins text-xs tracking-widest text-white bg-black hover:bg-[#1ca3c4] rounded-full py-4 px-10 hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-sm font-medium lowercase"
          >
            View all services
          </button>
        </div>

      </div>
    </section>
  );
}
