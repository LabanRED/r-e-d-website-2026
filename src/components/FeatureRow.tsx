import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { SquarePen, Link, MessageSquare, GitBranch, ChevronLeft, ChevronRight } from 'lucide-react';

export default function FeatureRow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const cards = [
    {
      icon: SquarePen,
      headline: 'Create',
      bullets: [
        'Controlled Access',
        'Omni-channel Posting & Scheduling',
        'Brand Frames & Delivery Photos',
        'Content Approval',
        'AI Post Polisher & Moderator'
      ],
      shadowColor: '#2ca8cb',
      iconColor: 'text-[#2ca8cb]',
    },
    {
      icon: Link,
      headline: 'Connect',
      bullets: [
        'Website, Meta & Google ads integration',
        'Omni-channel Posting & Scheduling',
        'Offline Activations & Events',
        'Reviews, Ratings & CSI',
        'Internal Cross Department Communication.'
      ],
      shadowColor: '#1d7a96',
      iconColor: 'text-[#1d7a96]',
    },
    {
      icon: MessageSquare,
      headline: 'Comms',
      bullets: [
        'Customer communication via WhatsApp or Social Platforms',
        'Leads via WhatsApp & 24/7 AI Lead Assistance',
        'Omni-channel inbox',
        'Smart Routing & SLA Monitoring',
        'Service Bookings & Reminders'
      ],
      shadowColor: '#2ca8cb',
      iconColor: 'text-[#2ca8cb]',
    },
    {
      icon: GitBranch,
      headline: 'Control',
      bullets: [
        'Lead Routing & Escalations',
        'Reporting Dashboard',
        'Team Activity',
        'Leads integrated to CRM/CMS',
        'Customer Data & Access Control'
      ],
      shadowColor: '#1d7a96',
      iconColor: 'text-[#1d7a96]',
    },
  ];

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const children = container.children;
    let closestIndex = 0;
    let minDistance = Infinity;

    for (let i = 0; i < children.length; i++) {
      const child = children[i] as HTMLElement;
      const distance = Math.abs(child.offsetLeft - container.scrollLeft - container.offsetLeft);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = i;
      }
    }
    setActiveIndex(closestIndex);
  };

  const scrollToCard = (index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const targetChild = container.children[index] as HTMLElement;
    if (targetChild) {
      container.scrollTo({
        left: targetChild.offsetLeft - container.offsetLeft,
        behavior: 'smooth'
      });
      setActiveIndex(index);
    }
  };

  return (
    <section className="bg-white py-20 sm:py-24 text-neutral-900 border-b border-neutral-100" id="capabilities">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="font-sans leading-tight mb-3">
            <span className="text-[36px] sm:text-[56px] font-light italic text-[#00A5C5] tracking-tight mr-2 sm:mr-3">
              One platform.
            </span>
            <span className="text-[36px] sm:text-[48px] font-medium text-neutral-950 tracking-tight">
              Four Pillars.
            </span>
          </h2>
          <p className="font-sans text-[16px] sm:text-[20px] font-normal text-neutral-700 max-w-2xl mx-auto leading-relaxed">
            Every department. Every Conversation. Every post. One Place.
          </p>
        </div>

        {/* Desktop Version: 4 Cards Grid Layout (md and larger) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={card.headline}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                style={{
                  boxShadow: `8px 8px 0px ${card.shadowColor}`,
                }}
                className="flex flex-col rounded-[24px] border border-neutral-200/80 bg-white p-8 sm:p-9 min-h-[460px] transition-all duration-300 hover:-translate-y-1"
              >
                {/* Header with Icon and Headline */}
                <div className="flex items-center gap-3.5 mb-8">
                  <IconComponent className={`h-7 w-7 ${card.iconColor} shrink-0`} />
                  <h3 className="font-sans text-[26px] font-medium text-neutral-950 tracking-tight leading-none">
                    {card.headline}
                  </h3>
                </div>

                {/* Bullets with Solid Dot Indicators */}
                <ul className="space-y-4 flex-grow">
                  {card.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-[15px] sm:text-[16px] text-neutral-700 font-sans leading-snug">
                      <span className="h-2 w-2 rounded-full bg-[#2ca8cb] shrink-0 mt-[7px]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Version: Touch Scroll/Carousel Layout (under md) */}
        <div className="md:hidden flex flex-col">
          {/* Scroll container */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-6 px-1 pb-8"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {cards.map((card) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={card.headline}
                  style={{
                    boxShadow: `8px 8px 0px ${card.shadowColor}`,
                  }}
                  className="w-full shrink-0 snap-center flex flex-col rounded-[24px] border border-neutral-200/80 bg-white p-8 min-h-[460px]"
                >
                  {/* Header with Icon and Headline */}
                  <div className="flex items-center gap-3.5 mb-8">
                    <IconComponent className={`h-7 w-7 ${card.iconColor} shrink-0`} />
                    <h3 className="font-sans text-[26px] font-medium text-neutral-950 tracking-tight leading-none">
                      {card.headline}
                    </h3>
                  </div>

                  {/* Bullets with Solid Dot Indicators */}
                  <ul className="space-y-4 flex-grow">
                    {card.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-[15px] sm:text-[16px] text-neutral-700 font-sans leading-snug">
                        <span className="h-2 w-2 rounded-full bg-[#2ca8cb] shrink-0 mt-[7px]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Pagination Controls */}
          <div className="flex items-center justify-between mt-6 px-1">
            {/* Number of available cards & current page indicator */}
            <div className="rounded-full border border-[#2ca8cb]/60 px-6 py-2.5 text-[15px] sm:text-[16px] font-normal text-[#2ca8cb] bg-white shadow-sm font-sans tracking-wide">
              {activeIndex + 1} - 4
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => scrollToCard(activeIndex - 1)}
                disabled={activeIndex === 0}
                className={`flex h-12 w-12 items-center justify-center rounded-full text-white transition-all duration-300 ${
                  activeIndex === 0 
                    ? 'bg-[#2ca8cb]/30 cursor-not-allowed text-white/50' 
                    : 'bg-[#2ca8cb] hover:bg-[#209bbd] active:scale-95 shadow-md shadow-[#2ca8cb]/10'
                }`}
                aria-label="Previous card"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={() => scrollToCard(activeIndex + 1)}
                disabled={activeIndex === 3}
                className={`flex h-12 w-12 items-center justify-center rounded-full text-white transition-all duration-300 ${
                  activeIndex === 3 
                    ? 'bg-[#2ca8cb]/30 cursor-not-allowed text-white/50' 
                    : 'bg-[#2ca8cb] hover:bg-[#209bbd] active:scale-95 shadow-md shadow-[#2ca8cb]/10'
                }`}
                aria-label="Next card"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

