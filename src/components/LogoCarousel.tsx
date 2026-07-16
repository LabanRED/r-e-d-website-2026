import { motion } from 'motion/react';

// Import SVG brand logos from src/images
import audi from '../images/audi.svg';
import byd from '../images/byd.svg';
import chery from '../images/chery.svg';
import ford from '../images/ford.svg';
import honda from '../images/honda.svg';
import kia from '../images/kia.svg';
import mazda from '../images/mazda.svg';
import mitsubishi from '../images/mitsubishi.svg';
import renault from '../images/renault.svg';
import suzuki from '../images/suzuki.svg';
import volkswagen from '../images/volkswagen.svg';
import volvo from '../images/volvo.svg';

const logos = [
  { name: 'Audi', src: audi },
  { name: 'BYD', src: byd },
  { name: 'Chery', src: chery },
  { name: 'Ford', src: ford },
  { name: 'Honda', src: honda },
  { name: 'Kia', src: kia },
  { name: 'Mazda', src: mazda },
  { name: 'Mitsubishi', src: mitsubishi },
  { name: 'Renault', src: renault },
  { name: 'Suzuki', src: suzuki },
  { name: 'Volkswagen', src: volkswagen },
  { name: 'Volvo', src: volvo },
];

// Double the list to ensure a seamless infinite scroll
const doubleLogos = [...logos, ...logos];

export default function LogoCarousel() {

  return (
    <section className="border-y border-neutral-100 py-10 md:py-12 overflow-hidden select-none">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">

          {/* Static Left Text */}
          <div className="flex-shrink-0 text-center md:text-left">
            <span className="font-poppins font-medium text-neutral-500 text-sm md:text-base tracking-wide whitespace-nowrap">
              Trusted by the industry leaders
            </span>
          </div>

          {/* Sliding Marquee Area */}
          <div className="relative flex-grow w-full overflow-hidden">
            {/* Left and right gradient overlays for faded edges */}
            <div className="absolute left-0 top-0 bottom-0 z-10 w-12 md:w-32 bg-gradient-to-r from-[#fafafa] to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 z-10 w-12 md:w-32 bg-gradient-to-l from-[#fafafa] to-transparent pointer-events-none" />

            {/* Sliding Track */}
            <motion.div
              className="flex gap-12 md:gap-16 items-center whitespace-nowrap py-2"
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                repeat: Infinity,
                repeatType: 'loop',
                duration: 8,
                ease: 'linear',
              }}
            >
              {doubleLogos.map((logo, idx) => (
                <div
                  key={`${logo.name}-${idx}`}
                  className="flex items-center justify-center min-w-[110px] md:min-w-[140px] px-2"
                >
                  <img
                    src={logo.src}
                    alt={`${logo.name} logo`}
                    className="h-6 md:h-8 w-auto object-contain opacity-50 hover:opacity-95 transition-opacity duration-300 grayscale"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

