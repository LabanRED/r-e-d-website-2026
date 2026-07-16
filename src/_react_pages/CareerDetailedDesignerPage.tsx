import React, { useState } from 'react';
import { ArrowLeft, Upload } from 'lucide-react';

export default function CareerDetailedDesignerPage() {
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
            Digital <span className="text-[#00a5c5]">Designer</span>
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
            R-E-D is a Google and Facebook Partner servicing approximately 500 active clients. We have experienced substantial growth over the past few years and market conditions indicate continued growth in the forthcoming years. We are a proudly South African home-grown company with aspirations of expanding our services and products on a global scale. With the future growth and expansion we foresee, we have no doubt that there will be plenty opportunity for individual growth.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-12 text-neutral-800">

          <section>
            <h2 className="font-poppins text-2xl sm:text-3xl font-semibold mb-4">About the role</h2>
            <div className="space-y-4 font-poppins text-neutral-700 text-sm sm:text-base leading-relaxed">
              <p>This vacancy is for a Mid-Weight Digital Designer. As a Digital Designer, you will be responsible for designing still and animated images for use across digital and print.</p>
            </div>
          </section>

          <section>
            <h2 className="font-poppins text-2xl sm:text-3xl font-semibold mb-6">Key responsibilities</h2>
            <ul className="list-disc pl-5 space-y-2 font-poppins text-neutral-700 text-sm sm:text-base leading-relaxed">
              <li>Creating stills or animated pieces in accordance with the brief and CI</li>
              <li>Artwork used for Social Media, Google Ads, Websites, Emailers, Flyers, Print Media</li>
              <li>Maintaining asset libraries</li>
              <li>Ensuring all activities are tracked and billed accordingly</li>
            </ul>
          </section>

          <section>
            <h2 className="font-poppins text-2xl sm:text-3xl font-semibold mb-4">What we're looking for</h2>
            <ul className="list-disc pl-5 space-y-2 font-poppins text-neutral-700 text-sm sm:text-base leading-relaxed">
              <li>Attention to detail</li>
              <li>Photoshop and Illustrator</li>
              <li>Proficiency in Microsoft Office 365 Suite</li>
              <li>Ability to work under pressure - average of 2 briefs per hour</li>
              <li>Time management</li>
            </ul>
          </section>

          <section>
            <h2 className="font-poppins text-2xl sm:text-3xl font-semibold mb-4">Required Qualifications / Experience</h2>
            <ul className="list-disc pl-5 space-y-2 font-poppins text-neutral-700 text-sm sm:text-base leading-relaxed">
              <li>Minimum of 2 years' experience in digital design</li>
              <li>Experience in Adobe Creative Cloud, particularly Photoshop and Illustrator</li>
            </ul>
          </section>

          <section>
            <h2 className="font-poppins text-2xl sm:text-3xl font-semibold mb-4">Preferred Qualifications</h2>
            <ul className="list-disc pl-5 space-y-2 font-poppins text-neutral-700 text-sm sm:text-base leading-relaxed">
              <li>Tertiary Qualification in Design or Marketing</li>
            </ul>
          </section>

          <section>
            <h2 className="font-poppins text-2xl sm:text-3xl font-semibold mb-4">Remuneration</h2>
            <p className="font-poppins text-neutral-700 text-sm sm:text-base leading-relaxed">
              Negotiable based on qualifications and experience
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
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
