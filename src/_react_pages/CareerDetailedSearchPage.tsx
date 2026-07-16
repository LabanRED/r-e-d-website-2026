import React, { useState } from 'react';
import { ArrowLeft, Upload } from 'lucide-react';

export default function CareerDetailedSearchPage() {
  const [fileName, setFileName] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <div className="w-full bg-[#fafafa] min-h-screen relative font-sans overflow-x-hidden pt-8">

      {/* Main Content Container */}
      <div className="mx-auto lg:w-[85%] max-w-[1200px] px-4 sm:px-6 lg:px-12 mb-20">

        {/* Back Breadcrumb */}
        <div className="mb-8">
          <a
            href="#careers"
            className="inline-flex items-center mt-4 md:mt-12 gap-2 text-sm font-medium text-neutral-500 hover:text-[#00a5c5] transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to careers
          </a>
        </div>

        {/* Header Section */}
        <div className="mb-10">
          <h1 className="font-poppins text-4xl sm:text-5xl md:text-6xl font-semibold text-neutral-800 leading-tight mb-4">
            Head of <span className="text-[#00a5c5]">search</span>
          </h1>
          <div className="flex items-center gap-3 mb-8">
            <span className="bg-[#00a5c5] text-white text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full tracking-wide">
              Full-Time
            </span>
            <span className="bg-[#00a5c5] text-white text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full tracking-wide">
              Marketing
            </span>
          </div>
          <p className="font-poppins text-neutral-700 text-sm sm:text-base leading-relaxed">
            R-E-D is a Google and Facebook Partner servicing approximately 300 active clients. We have experienced exponential growth over the past few years and market conditions indicate continued growth in the forthcoming years. We are a dynamic South African-based growing company with aspirations of expanding our services and products on a global scale. With the future growth and expansion we foresee, we have no doubt that there is ample opportunity for individual growth.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-12 text-neutral-800">

          <section>
            <h2 className="font-poppins text-2xl sm:text-3xl font-semibold mb-4">About the role</h2>
            <div className="space-y-4 font-poppins text-neutral-700 text-sm sm:text-base leading-relaxed">
              <p>We are looking for a data-driven, performance-focused Head of Search to lead our agency's paid search and Google ecosystem strategy. This role will oversee all aspects of PPC (Google & Bing Ads), Google Business Profiles, Map listings, and web analytics, ensuring our clients' digital presence is optimized for visibility, efficiency, and ROI.</p>
              <p>The ideal candidate combines technical expertise with strategic thinking and leadership capability, able to manage a highly performing team while developing and executing campaigns that deliver measurable results across platforms.</p>
            </div>
          </section>

          <section>
            <h2 className="font-poppins text-2xl sm:text-3xl font-semibold mb-6">Key responsibilities</h2>

            <div className="space-y-8">
              <div>
                <h3 className="font-poppins text-xl font-medium mb-3">Strategic & Performance Leadership</h3>
                <ul className="list-disc pl-5 space-y-2 font-poppins text-neutral-700 text-sm sm:text-base leading-relaxed">
                  <li>Lead and optimize overall paid search strategies for multiple clients, driving ROI and targeted business performance.</li>
                  <li>Develop and implement best-in-class approaches for local SEO, Map listings, and Google Business Profile optimization.</li>
                  <li>Oversee account structure, bidding strategies, audience targeting, and creative testing for maximum ROI.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-poppins text-xl font-medium mb-3">Team & Campaign Management</h3>
                <ul className="list-disc pl-5 space-y-2 font-poppins text-neutral-700 text-sm sm:text-base leading-relaxed">
                  <li>Manage and mentor a team of paid search specialists and analysts.</li>
                  <li>Oversee the setup, tracking, and optimization of campaigns across search, display, YouTube, and shopping formats.</li>
                  <li>Implement systems for campaign reviews, performance tracking, and improvement cycles.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-poppins text-xl font-medium mb-3">Analytics & Reporting</h3>
                <ul className="list-disc pl-5 space-y-2 font-poppins text-neutral-700 text-sm sm:text-base leading-relaxed">
                  <li>Lead the setup, configuration, and optimization of Google Analytics (GA4) and Google Search Console for client sites.</li>
                  <li>Define and monitor KPIs, building dashboards and custom reports to track performance.</li>
                  <li>Translate complex data into actionable insights for clients and internal teams.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-poppins text-xl font-medium mb-3">Technical Oversight & Tools</h3>
                <ul className="list-disc pl-5 space-y-2 font-poppins text-neutral-700 text-sm sm:text-base leading-relaxed">
                  <li>Ensure proper tagging, tracking, and integration setup across all Google platforms.</li>
                  <li>Stay current with platform updates, algorithm changes, and industry best practices.</li>
                  <li>Manage API connections, data studio (Looker Studio) reporting, and CRM integrations to ensure accurate tracking.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-poppins text-xl font-medium mb-3">Client Support & Collaboration</h3>
                <ul className="list-disc pl-5 space-y-2 font-poppins text-neutral-700 text-sm sm:text-base leading-relaxed">
                  <li>Act as the senior point of contact for performance strategy and analytics conversations with clients.</li>
                  <li>Present performance reviews, insights, and recommendations clearly and confidently.</li>
                  <li>Collaborate closely with SEO, web development, and social media teams for holistic marketing integration.</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-poppins text-2xl sm:text-3xl font-semibold mb-4">What we're looking for</h2>
            <ul className="list-disc pl-5 space-y-2 font-poppins text-neutral-700 text-sm sm:text-base leading-relaxed">
              <li>Expert-level knowledge of Google Ads, GA4, Google Business Profiles, and Google Search Console.</li>
              <li>Performance-driven mindset with a track record of scaling and optimizing high-ROI campaigns.</li>
              <li>Proficiency in tracking implementation and data analysis (GTM, Looker Studio, etc.).</li>
              <li>Strong leadership skills with experience managing and developing a team.</li>
              <li>Excellent communication skills, capable of translating complex data into clear strategic narratives.</li>
              <li>Deep understanding of search intent, bidding strategies, and local SEO dynamics.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-poppins text-2xl sm:text-3xl font-semibold mb-4">Required Qualifications / Experience</h2>
            <ul className="list-disc pl-5 space-y-2 font-poppins text-neutral-700 text-sm sm:text-base leading-relaxed">
              <li>Bachelor's degree in Digital Marketing, Business, Data Analytics, or related field.</li>
              <li>5+ years of hands-on experience in paid search and analytics, with at least 2 years in a leadership or senior role.</li>
              <li>Google Ads and Google Analytics certifications.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-poppins text-2xl sm:text-3xl font-semibold mb-4">Key Performance Indicators</h2>
            <ul className="list-disc pl-5 space-y-2 font-poppins text-neutral-700 text-sm sm:text-base leading-relaxed">
              <li>Campaign ROI, CPA, CTR, and conversion rate improvements.</li>
              <li>Client satisfaction and retention on paid search accounts.</li>
              <li>Accuracy and insightfulness of reporting and analytics.</li>
              <li>Quality and completeness of tagging, tracking, and platform setup.</li>
              <li>Local SEO visibility (e.g., map pack presence, GBP completeness).</li>
              <li>Team efficiency, knowledge development, and performance.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-poppins text-2xl sm:text-3xl font-semibold mb-4">Remuneration</h2>
            <p className="font-poppins text-neutral-700 text-sm sm:text-base leading-relaxed">
              Negotiable based on qualifications and experience.
            </p>
          </section>

        </div>
      </div>

      {/* Application Form Section */}
      <div className="w-full bg-[#f2f2f2] py-20 px-4">
        <div className="mx-auto max-w-xl bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-neutral-100">
          <h2 className="font-poppins text-2xl sm:text-3xl font-bold text-center text-neutral-800 mb-8">
            Apply for this role
          </h2>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block text-xs font-semibold text-neutral-700 mb-1.5 ml-1">Name</label>
              <input
                type="text"
                id="name"
                className="w-full bg-[#f8f8f8] border border-transparent rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-neutral-300 transition-colors"
                placeholder="Jane Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-neutral-700 mb-1.5 ml-1">Email</label>
              <input
                type="email"
                id="email"
                className="w-full bg-[#f8f8f8] border border-transparent rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-neutral-300 transition-colors"
                placeholder="jane@example.com"
              />
            </div>

            <div>
              <label htmlFor="portfolio" className="block text-xs font-semibold text-neutral-700 mb-1.5 ml-1">Portfolio / LinkedIn URL</label>
              <input
                type="url"
                id="portfolio"
                className="w-full bg-[#f8f8f8] border border-transparent rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-neutral-300 transition-colors"
                placeholder="https://"
              />
            </div>

            <div>
              <label htmlFor="motivation" className="block text-xs font-semibold text-neutral-700 mb-1.5 ml-1">Motivational letter</label>
              <textarea
                id="motivation"
                rows={4}
                className="w-full bg-[#f8f8f8] border border-transparent rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-neutral-300 transition-colors resize-none"
                placeholder="Tell us why you are a great fit..."
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1.5 ml-1">Resume upload</label>
              <div className="relative w-full bg-[#f8f8f8] border-2 border-dashed border-neutral-200 rounded-xl p-6 hover:bg-neutral-50 transition-colors cursor-pointer group">
                <input
                  type="file"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                />
                <div className="flex flex-col items-center justify-center text-center gap-2">
                  <Upload className="w-5 h-5 text-neutral-400 group-hover:text-[#00a5c5] transition-colors" />
                  {fileName ? (
                    <span className="text-sm font-medium text-[#00a5c5] truncate max-w-full px-4">{fileName}</span>
                  ) : (
                    <>
                      <span className="text-sm font-medium text-neutral-600">
                        <span className="text-[#00a5c5]">Click to upload</span> or drag and drop
                      </span>
                      <span className="text-xs text-neutral-400">PDF, DOC up to 5MB</span>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-black hover:bg-[#00a5c5] text-white font-poppins text-sm py-3.5 rounded-full transition-colors shadow-sm font-medium lowercase"
              >
                Apply for this role
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
