import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star } from 'lucide-react';

import respectImg from '../assets/images/mutual-respect-is-key.webp';
import supportImg from '../assets/images/support-where-you-need-it.webp';
import understandingImg from '../assets/images/we-have-mutual-understanding.webp';
import strategyImg from '../assets/images/what-works-best.webp';
import budgetsImg from '../assets/images/flexible-budgets-available.webp';

interface RedProcessProps {
  onCtaClick?: () => void;
}

export default function RedProcess({ onCtaClick }: RedProcessProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const steps = [
    {
      number: '01.',
      title: 'Respect',
      activeTitle: 'Mutual respect is key',
      description: "Most agencies focus all their attention on the \"big shots\" and leave the smaller spenders in the dark. At R-E-D our attention is divided equally among all our clients. We treat all our clients with the respect they deserve.",
      image: respectImg,
    },
    {
      number: '02.',
      title: 'Support',
      activeTitle: 'Support where you need it',
      description: "At R-E-D you will have only one point of contact for all your digital needs. From strategy formulation to the leads rolling in, our DMM's will be your sole point of contact and support throughout the entire process.",
      image: supportImg,
    },
    {
      number: '03.',
      title: 'Understanding',
      activeTitle: 'We have a mutual understanding',
      description: "Once we partner up, we initiate an analysis of your businesses environment and needs in order to craft a fully tailored digital marketing plan. We do this so that we can fully understand your objectives and help you reach them.",
      image: understandingImg,
    },
    {
      number: '04.',
      title: 'What works best',
      activeTitle: 'What works best',
      description: "After we've crafted your strategy we will test various combinations, platforms and channels to discover what works best for your brand, your objectives and budget.",
      image: strategyImg,
    },
    {
      number: '05.',
      title: 'Flexible budgets',
      activeTitle: 'Flexible budgets available',
      description: "R-E-D is unique with its options of short burst campaigns. Most agencies will require you to use massive budgets over long periods of time, but at R-E-D we can run your campaigns on low budgets for short periods of time.",
      image: budgetsImg,
    },
  ];

  return (
    <section className="w-full py-16 sm:py-24 bg-[#fafafa]" id="red-process">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16">
          {/* Left Title */}
          <div>
            <span className="font-poppins text-sm sm:text-base font-normal text-[#1ca3c4] tracking-wide block mb-3">
              Why us?
            </span>
            <h2 className="font-poppins font-semibold text-4xl sm:text-5xl md:text-[3.5rem] text-neutral-900 tracking-tight leading-none">
              The R<span className="text-[#1ca3c4]">-</span>E<span className="text-[#1ca3c4]">-</span>D process
            </h2>
          </div>

          {/* Right Text & CTA */}
          <div className="max-w-xl lg:mt-6">
            <p className="font-poppins text-neutral-600 text-sm sm:text-base leading-relaxed mb-6">
              So what separates R-E-D from the rest of the crowd? Besides our epic track record, vast expertise and our measurable results, it's the way we do things at R-E-D
            </p>
            <button
              onClick={onCtaClick}
              className="inline-block font-poppins text-xs tracking-widest text-white bg-black hover:bg-[#1ca3c4] rounded-full py-4 px-10 hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-md font-medium lowercase"
            >
              schedule a meeting today
            </button>
          </div>
        </div>

        {/* 5-Step Process Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-start">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              layout
              onMouseEnter={() => setHoveredIdx(index)}
              onMouseLeave={() => setHoveredIdx(null)}
              onClick={() => setHoveredIdx(hoveredIdx === index ? null : index)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`relative bg-white rounded-[32px] transition-all duration-300 border border-neutral-100/50 cursor-pointer overflow-hidden flex flex-col ${
                hoveredIdx === index 
                  ? 'p-6 shadow-xl ring-1 ring-[#1ca3c4]/10 min-h-[420px]' 
                  : 'p-8 min-h-[280px] justify-between shadow-sm hover:shadow-md'
              }`}
            >
              <AnimatePresence mode="wait">
                {hoveredIdx === index ? (
                  <motion.div
                    key="active"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25 }}
                    className="flex flex-col h-full"
                  >
                    {/* Top Image */}
                    <div className="w-full h-36 sm:h-40 overflow-hidden rounded-2xl mb-5">
                      <img loading="lazy" src={step.image}
                        alt={step.activeTitle}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    
                    {/* Active Title */}
                    <h3 className="font-poppins font-semibold text-neutral-900 text-lg sm:text-xl leading-snug mb-3 tracking-tight">
                      {step.activeTitle}
                    </h3>

                    {/* Description Paragraph */}
                    <p className="font-poppins text-neutral-600 text-xs sm:text-[13px] leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="inactive"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="flex flex-col justify-between min-h-[216px]"
                  >
                    {/* Top right large faint number */}
                    <div className="absolute top-6 right-8 font-poppins font-semibold text-4xl sm:text-5xl text-neutral-100 select-none">
                      {step.number}
                    </div>

                    {/* Icon Container */}
                    <div className="mt-8">
                      <div className="w-12 h-12 rounded-xl bg-[#1ca3c4] flex items-center justify-center text-white shadow-sm select-none">
                        <Star className="w-5 h-5 fill-current text-white" />
                      </div>
                    </div>

                    {/* Card Label / Title */}
                    <div className="mt-8">
                      <h3 className="font-poppins font-medium text-xl sm:text-2xl text-neutral-800 leading-tight">
                        {step.title}
                      </h3>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
