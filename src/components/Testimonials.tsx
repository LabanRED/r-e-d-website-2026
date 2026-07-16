import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import quotesTestimonial from '../images/quotes-testimonial.webp';

export default function Testimonials() {
  const testimonials = [
    {
      text: "Before R-E-D, we had leads, but not the right ones. Now quality's improved, and we're closing more deals consistently than ever before.",
      name: "John Henderson",
      company: "Luxury Motors",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80"
    },
    {
      text: "R-E-D feels like part of our team, constantly improving our ads and content. You can see real progress week by week.",
      name: "Jessica Thomson",
      company: "Noble Motor Traders",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80"
    },
    {
      text: "There's a clear before and after. Stronger presence, steady enquiries, and real confidence in where our business is heading now.",
      name: "Fiona Anderson",
      company: "Prime Auto Group",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80"
    }
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    // Calculate the active index based on scroll position and item width
    const containerWidth = scrollRef.current.clientWidth;
    // We assume items are roughly 85vw on mobile
    const newIndex = Math.round(scrollLeft / containerWidth);
    if (newIndex !== activeIndex && newIndex >= 0 && newIndex < testimonials.length) {
      setActiveIndex(newIndex);
    }
  };

  const scrollTo = (index: number) => {
    if (!scrollRef.current) return;
    const child = scrollRef.current.children[index] as HTMLElement;
    if (child) {
      const scrollPos = child.offsetLeft - (scrollRef.current.clientWidth - child.clientWidth) / 2;
      scrollRef.current.scrollTo({ left: scrollPos, behavior: 'smooth' });
      setActiveIndex(index);
    }
  };

  const scrollNext = () => {
    if (activeIndex < testimonials.length - 1) {
      scrollTo(activeIndex + 1);
    }
  };

  const scrollPrev = () => {
    if (activeIndex > 0) {
      scrollTo(activeIndex - 1);
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-[#fafafa]" id="testimonials">
      <div className="mx-auto max-w-[1600px] px-8 sm:px-8 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="font-poppins text-sm sm:text-base font-regular text-[#1ca3c4] tracking-wide block mb-3">
            What our clients say
          </span>
          <h2 className="font-poppins font-semibold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight max-w-3xl md:w-[500px] lg:w-[500px] mx-auto">
            Honest feedback from valued clients
          </h2>
        </div>

        {/* Testimonials Grid / Scrollable Row on Mobile */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 pb-8 md:pb-0 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden -mx-4 px-4 sm:-mx-8 sm:px-8 md:mx-0 md:px-0"
        >
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className="flex-shrink-0 w-[85vw] sm:w-[400px] md:w-auto snap-center bg-white rounded-[24px] p-8 sm:p-10 shadow-[0px_4px_30px_rgba(0,0,0,0.03)] border border-neutral-100 flex flex-col justify-between transition-all duration-300"
            >
              <div>
                {/* Quotes Icon & Stars - Left Aligned */}
                <div className="flex flex-row items-start gap-4 mb-6">
                  <img loading="lazy" src={quotesTestimonial}
                    alt="Quote Icon"
                    className="h-4 w-auto opacity-90 object-contain select-none"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Star Rating */}
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-[18px] h-[18px] fill-[#FBBF24] text-[#FBBF24]" />
                    ))}
                  </div>
                </div>

                {/* Supporting Text */}
                <p className="font-poppins text-neutral-700 text-sm sm:text-base leading-relaxed mb-8">
                  {item.text}
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 border-t border-neutral-50 pt-6">
                <img loading="lazy" src={item.avatar}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full object-cover border-2 border-neutral-100"
                />
                <div className="flex flex-col text-left font-poppins">
                  <span className="font-semibold text-neutral-900 text-sm sm:text-base">
                    {item.name}
                  </span>
                  <span className="text-neutral-500 text-xs sm:text-sm">
                    {item.company}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Scroller Controls */}
        <div className="flex md:hidden flex-col items-center gap-6 mt-4">
          {/* Dots */}
          <div className="flex justify-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollTo(idx)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeIndex === idx ? 'bg-[#00a5c5]' : 'bg-neutral-200'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          
          {/* Arrows */}
          <div className="flex justify-center gap-8">
            <button
              onClick={scrollPrev}
              disabled={activeIndex === 0}
              className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${
                activeIndex === 0 
                  ? 'bg-neutral-200 text-neutral-400' 
                  : 'bg-[#00a5c5] text-white hover:bg-[#0092af] active:scale-95 shadow-md'
              }`}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={scrollNext}
              disabled={activeIndex === testimonials.length - 1}
              className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${
                activeIndex === testimonials.length - 1 
                  ? 'bg-neutral-200 text-neutral-400' 
                  : 'bg-[#00a5c5] text-white hover:bg-[#0092af] active:scale-95 shadow-md'
              }`}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
