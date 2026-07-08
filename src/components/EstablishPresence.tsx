import { motion } from 'motion/react';
import redDarkLogo from '../images/r-e-d-dark-logo.svg';

interface EstablishPresenceProps {
  onCtaClick?: () => void;
}

export default function EstablishPresence({ onCtaClick }: EstablishPresenceProps) {
  return (
    <section className="w-full bg-white py-[100px] px-4 sm:px-6 lg:px-8 border-t border-neutral-100" id="establish-presence">
      <div className="mx-auto max-w-4xl text-center flex flex-col items-center">
        
        {/* R-E-D Logo Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center mb-8"
        >
          <img loading="lazy" src={redDarkLogo} 
            alt="R-E-D Logo" 
            className="h-10 md:h-14 object-contain select-none"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-poppins font-normal text-3xl sm:text-4xl lg:text-5xl text-neutral-800 leading-[1.1] mb-6 tracking-tight max-w-3xl"
        >
          Ready to establish your <br className="hidden sm:inline" /> digital presences?
        </motion.h2>

        {/* Subheading Description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-poppins text-neutral-500 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mb-10"
        >
          Whether you're launching a new business or refreshing your brand, we'll help you create a digital presence that drives trust, engagement, and results.
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button
            onClick={onCtaClick}
            className="font-poppins text-sm sm:text-base text-white bg-black hover:bg-[#1ca3c4] px-8 py-4 sm:px-10 sm:py-5 rounded-full shadow-lg shadow-[#1ca3c4]/10 hover:shadow-xl hover:shadow-[#1ca3c4]/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 font-medium lowercase"
          >
            schedule a meeting today
          </button>
        </motion.div>

      </div>
    </section>
  );
}
