import { motion } from 'motion/react';
import { X } from 'lucide-react';
import withoutAgencyImg from '../images/without-an-agency-cart-image.webp';
import withAgencyImg from '../images/lead-focused-agency-cart-image.webp';
import positiveIcon from '../images/positive-icon.svg';

interface WhyUsProps {
  onCtaClick?: () => void;
}

export default function WhyUs({ onCtaClick }: WhyUsProps) {
  const withoutAgency = [
    'Campaigns focus on impressions and clicks, not qualified leads',
    'No structured funnel prospects drop off before converting',
    'Limited data insights, making it hard to scale what actually works'
  ];

  const withAgency = [
    'Full-funnel strategy designed to attract, nurture, and convert leads',
    'Data-driven optimisation that continuously improves performance',
    'Higher-quality leads that translate into real sales and ROI'
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#F0F0F0]" id="why-us">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-12 lg:px-8">

        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="h-auto justify-center items-center mx-auto text-center w-3xs md:w-lg lg:w-lg">
            <span className="font-poppins text-sm sm:text-base font-normal text-[#1ca3c4] tracking-wide block mb-3">
              Why us?
            </span>
            <h2 className="font-poppins font-semibold text-2xl md:text-[3.5rem] lg:text-[3.5rem] tracking-tight leading-tight mx-auto">
              A better way to generate leads.
            </h2>
          </div>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">

          {/* Left Card: Without Specialised Lead Agency */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-[32px] p-8 sm:p-12 border border-neutral-100 flex flex-col justify-between"
            style={{ boxShadow: '0px 4px 50px rgba(0, 0, 0, 0.02)' }}
          >
            <div>
              {/* Badge */}
              <span className="inline-block bg-neutral-100 text-neutral-600 font-poppins text-xs font-semibold px-4 py-1.5 rounded-full mb-8">
                Others
              </span>

              {/* Title */}
              <h3 className="font-poppins font-semibold text-2xl sm:text-[32px] text-neutral-900 leading-tight mb-4">
                Without a Specialised Lead Agency
              </h3>

              {/* Subheading */}
              <p className="font-poppins text-neutral-500 text-sm sm:text-base mb-8">
                Working with a generalist often means activity without real outcomes.
              </p>

              {/* Negative List */}
              <ul className="space-y-5 mb-10 text-left">
                {withoutAgency.map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-neutral-100 flex items-center justify-center">
                      <X className="w-3.5 h-3.5 text-neutral-500" />
                    </div>
                    <span className="font-poppins text-neutral-600 text-xs sm:text-sm leading-relaxed">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Image: Without Specialised Lead Agency */}
            <div className="w-full overflow-hidden rounded-[24px]">
              <img loading="lazy" src={withoutAgencyImg}
                alt="Without a Specialised Lead Agency"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain mx-auto"
              />
            </div>
          </motion.div>

          {/* Right Card: With Lead-Focused Agency */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-black rounded-[32px] p-8 sm:p-12 text-white flex flex-col justify-between relative overflow-hidden"
          >
            <div>
              {/* Badge */}
              <span className="inline-block bg-[#1ca3c4] text-white font-poppins text-xs font-semibold px-4 py-1.5 rounded-full mb-8">
                With R-E-D
              </span>

              {/* Title */}
              <h3 className="font-poppins font-semibold text-2xl sm:text-[32px] text-white leading-tight mb-4">
                With a Lead-Focused Agency
              </h3>

              {/* Subheading */}
              <p className="font-poppins text-neutral-400 text-sm sm:text-base mb-8">
                A specialised approach turns strategy into measurable business growth.
              </p>

              {/* Positive List */}
              <ul className="space-y-5 mb-10 text-left">
                {withAgency.map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <img loading="lazy" src={positiveIcon}
                      alt="Check"
                      className="w-5 h-5 flex-shrink-0 mt-0.5 select-none"
                      referrerPolicy="no-referrer"
                    />
                    <span className="font-poppins text-neutral-300 text-xs sm:text-sm leading-relaxed">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Image: With Lead-Focused Agency */}
            <div className="w-full overflow-hidden rounded-[24px]">
              <img loading="lazy" src={withAgencyImg}
                alt="With a Lead-Focused Agency"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain mx-auto"
              />
            </div>
          </motion.div>

        </div>

        {/* Bottom Supporting Sentence & CTA */}
        <div className="flex flex-col items-center text-center mt-12 max-w-2xl mx-auto px-4">
          <p className="font-poppins text-neutral-600 text-sm sm:text-base leading-relaxed mb-8">
            Choosing the right agency isn't just about ads it's about whether your business actually converts attention into revenue.
          </p>

          <button
            onClick={onCtaClick}
            className="font-poppins text-xs tracking-widest text-white bg-black hover:bg-[#1ca3c4] rounded-full py-4 px-10 hover:scale-[1.02] active:scale-95 transition-all duration-300 font-medium lowercase"
          >
            schedule a meeting today
          </button>
        </div>

      </div>
    </section>
  );
}
