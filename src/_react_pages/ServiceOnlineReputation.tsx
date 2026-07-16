import { ArrowLeft } from 'lucide-react';

interface ServicePageProps {
  onCtaClick: () => void;
}

export default function ServiceOnlineReputation({ onCtaClick }: ServicePageProps) {
  return (
    <div className="w-full bg-[#f8f9fa] min-h-screen relative font-sans overflow-x-hidden pt-8 sm:pt-16 pb-20">
      {/* Back Breadcrumb */}
      <div className="mx-auto lg:w-[95%] max-w-[1600px] px-8 lg:px-0 mb-6">
        <a
          href="#services"
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-[#00a5c5] transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Services
        </a>
      </div>

      <section className="px-6 sm:px-8 lg:px-12 py-12 sm:py-20 max-w-[1200px] mx-auto text-center">
        <h1 className="font-poppins text-4xl sm:text-5xl lg:text-6xl text-neutral-800 font-semibold mb-6">
          Online Reputation Solutions
        </h1>
        <p className="font-poppins text-neutral-600 text-lg sm:text-xl max-w-3xl mx-auto mb-12">
          Content coming soon...
        </p>
        <button
          onClick={onCtaClick}
          className="bg-black hover:bg-[#00a5c5] text-white font-poppins text-[14px] sm:text-[15px] px-8 py-3.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 tracking-wide font-medium lowercase"
        >
          I'm interested
        </button>
      </section>
    </div>
  );
}
