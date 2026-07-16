import React, { useState } from 'react';
import { ArrowLeft, Upload } from 'lucide-react';

export default function CareerDetailedPage() {
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
            Head of <span className="text-[#00a5c5]">social media</span>
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
              <p>We are looking for an experienced and strategic Head of Social Media to lead our social media department and agency advertising work for our clients. This person will manage a team of social media planners and coordinators, overseeing the development, activation, and performance tracking of both organic and paid social media campaigns for clients.</p>
              <p>The ideal candidate will bring deep expertise in social media strategy, team leadership, and client management, with a strong focus on operational efficiency, creative innovation, and measurable performance.</p>
            </div>
          </section>

          <section>
            <h2 className="font-poppins text-2xl sm:text-3xl font-semibold mb-6">Key responsibilities</h2>

            <div className="space-y-8">
              <div>
                <h3 className="font-poppins text-xl font-medium mb-3">Strategic Leadership</h3>
                <ul className="list-disc pl-5 space-y-2 font-poppins text-neutral-700 text-sm sm:text-base leading-relaxed">
                  <li>Develop integrated organic and paid social strategies for multiple clients, aligned with their specific business objectives and audiences.</li>
                  <li>Act as the senior strategic lead on key accounts, advising clients on best practices, platform innovation, and campaign opportunities.</li>
                  <li>Ensure all social content is on-brand, brand-sensitive, well-managed, and cross-channel marketing strategies.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-poppins text-xl font-medium mb-3">Client Management</h3>
                <ul className="list-disc pl-5 space-y-2 font-poppins text-neutral-700 text-sm sm:text-base leading-relaxed">
                  <li>Build trusted relationships with clients, serving as the senior point of contact for all social media work.</li>
                  <li>Lead client presentations, performance reviews, and strategic planning sessions.</li>
                  <li>Collaborate with client service teams to proactively identify growth opportunities and ensure satisfaction.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-poppins text-xl font-medium mb-3">Team & Operational Management</h3>
                <ul className="list-disc pl-5 space-y-2 font-poppins text-neutral-700 text-sm sm:text-base leading-relaxed">
                  <li>Lead, inspire, and mentor a growing team of social media coordinators and planners.</li>
                  <li>Establish efficient processes to streamline content planning, approvals, publishing, and reporting.</li>
                  <li>Ensure fast and effective turnaround times in content production and campaign execution, meeting agency service standards.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-poppins text-xl font-medium mb-3">Performance, Reporting & Optimization</h3>
                <ul className="list-disc pl-5 space-y-2 font-poppins text-neutral-700 text-sm sm:text-base leading-relaxed">
                  <li>Oversee the development of monthly campaign reports, providing actionable insights and optimization recommendations.</li>
                  <li>Track and analyze performance metrics across all social campaigns, driving ongoing improvements.</li>
                  <li>Guide the team in budget allocation, bid strategies, and performance optimization.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-poppins text-xl font-medium mb-3">Collaboration & Integration</h3>
                <ul className="list-disc pl-5 space-y-2 font-poppins text-neutral-700 text-sm sm:text-base leading-relaxed">
                  <li>Work closely with the SEO and paid search teams to align social strategy with broader digital marketing campaigns.</li>
                  <li>Collaborate with web developers, designers, and copywriters to produce high-quality, conversion-focused creative assets.</li>
                  <li>Guide account and project managers on providing accurate timelines and resource requirements for social campaigns.</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-poppins text-2xl sm:text-3xl font-semibold mb-4">What we're looking for</h2>
            <ul className="list-disc pl-5 space-y-2 font-poppins text-neutral-700 text-sm sm:text-base leading-relaxed">
              <li>Proven experience (5+ years) in a senior social media role within an agency setting.</li>
              <li>Deep expertise in social media strategy, both organic and paid, across platforms (Facebook, Instagram, LinkedIn, TikTok, X, etc.).</li>
              <li>Strong leadership skills with experience managing and developing a team.</li>
              <li>Excellent communication and presentation skills, with the ability to articulate complex strategies to clients.</li>
              <li>Proficiency in social media management, analytics, and reporting tools.</li>
              <li>Analytical mindset with a strong focus on data-driven decision-making and ROI.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-poppins text-2xl sm:text-3xl font-semibold mb-4">Key Performance Indicators</h2>
            <ul className="list-disc pl-5 space-y-2 font-poppins text-neutral-700 text-sm sm:text-base leading-relaxed">
              <li>Client satisfaction and retention.</li>
              <li>Campaign performance (reach, engagement, ROI).</li>
              <li>Team productivity and development.</li>
              <li>Operational efficiency and adherence to timelines.</li>
              <li>Contribution to agency growth and thought leadership.</li>
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
