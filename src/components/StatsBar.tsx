import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'motion/react';

function AnimatedCounter({ text }: { text: string }) {
  const match = text.match(/^(\D*)(\d+)(\D*)$/);
  const prefix = match ? match[1] : '';
  const numStr = match ? match[2] : '';
  const suffix = match ? match[3] : '';

  const num = parseInt(numStr, 10);
  const isNumber = !isNaN(num);

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (inView && isNumber) {
      animate(count, num, { duration: 3.0, ease: 'easeOut' });
    }
  }, [inView, isNumber, num, count]);

  if (!isNumber) return <span>{text}</span>;

  return (
    <span ref={ref}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  const stats = [
    {
      number: '2Mil',
      labelLine1: 'Leads',
      labelLine2: 'generated',
    },
    {
      number: '500',
      labelLine1: 'Happy',
      labelLine2: 'customers',
    },
    {
      number: 'R4Mil',
      labelLine1: 'Monthly',
      labelLine2: 'ad spend',
    },
  ];

  return (
    <div className="w-full px-8 mx-auto max-w-[1600px] mb-16 relative z-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-auto bg-white rounded-[24px] sm:rounded-[32px] py-8 px-6 md:px-16 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-4"
        style={{ boxShadow: '0px 2px 80px rgba(24, 39, 75, 0.12)' }}
      >
        {stats.map((stat, idx) => (
          <div key={idx} className="flex items-center gap-4 w-full md:w-auto justify-center md:justify-start">
            {/* Number with Blue Plus */}
            <div className="flex items-baseline font-poppins">
              <span className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-neutral-900 tracking-tight">
                <AnimatedCounter text={stat.number} />
              </span>
              <span className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#1ca3c4] ml-1">
                +
              </span>
            </div>

            {/* Label text to the right */}
            <div className="flex flex-col text-left font-poppins">
              <span className="text-neutral-500 text-xs sm:text-sm font-medium leading-tight">
                {stat.labelLine1}
              </span>
              <span className="text-neutral-500 text-xs sm:text-sm font-medium leading-tight">
                {stat.labelLine2}
              </span>
            </div>

            {/* Divider for desktop, only between items */}
            {idx < stats.length - 1 && (
              <div className="hidden md:block h-12 w-[1px] bg-neutral-100 ml-8 lg:ml-12" />
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
