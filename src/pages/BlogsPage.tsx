import React, { useState } from 'react';
import { Search, ArrowLeft } from 'lucide-react';
import blogsHeroDesktop from '../images/blogs-hero-desktop-banner.webp';
import blogsHeroMobile from '../images/blogs-hero-mobile-banner.webp';
import redLogo from '../images/r-e-d-dark-logo.svg';
import firstBlogImg from '../images/article-3-winning-socila-media-strategies-hero-mobile-banner.webp';
import secondBlogImg from '../images/article-social-media-for-your-business-mobile-banner.webp';
import thirdBlogImg from '../images/article-ads-ads-and-more-ads-mobile-banner.webp';
import fourthBlogImg from '../images/article-innovative-and-powerful-waysmobile-banner.webp';
import fifthBlogImg from '../images/article-get-more-bang-for-your-buck-mobile-banner.webp';
import sixthBlogImg from '../images/ai-driven-advertising-target-marketing.webp';

interface BlogsPageProps {
  onCtaClick: () => void;
}

const blogsData = [
  {
    id: 1,
    title: "3 Winning Social Media Strategies For South African Car Dealers",
    date: "R-E-D | 12 May 2023",
    excerpt: "Many car shoppers are now turning to social media to begin their buying journey.",
    image: firstBlogImg,
  },
  {
    id: 2,
    title: "Social Media: For Your Business",
    date: "R-E-D | 20 January 2023",
    excerpt: "If for one second you think that social media is not for your business, you are grossly mistaken.",
    image: secondBlogImg,
  },
  {
    id: 3,
    title: "Ads, ads and more ads",
    date: "R-E-D | 2023",
    excerpt: "Facebook ads work best when you're focused on what you want to achieve.",
    image: thirdBlogImg,
  },
  {
    id: 4,
    title: "Innovative and powerful ways to tell your business story!",
    date: "R-E-D | 15 March 2023",
    excerpt: "With so many active users on Facebook and Instagram, it may be difficult for you to decide...",
    image: fourthBlogImg,
  },
  {
    id: 5,
    title: "Get more bang for your buck!",
    date: "R-E-D | 01 April 2023",
    excerpt: "Are you looking to reach & bring in new customers that are 100% interested in your products/services?",
    image: fifthBlogImg,
  },
  {
    id: 6,
    title: "AI-Driven Advertising for Smarter Targeting & Lead Generation",
    date: "R-E-D | 24 January 2025",
    excerpt: "Smarter targeting and automation driving better leads through machine learning.",
    image: sixthBlogImg,
  }
];

export default function BlogsPage({ onCtaClick }: BlogsPageProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBlogs = blogsData.filter(blog => 
    blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full bg-[#fafafa] min-h-screen relative font-sans overflow-x-hidden pt-8 pb-20">
      <link rel="preload" as="image" href={blogsHeroDesktop} media="(min-width: 1024px)" fetchPriority="high" />
      <link rel="preload" as="image" href={blogsHeroMobile} media="(max-width: 1023px)" fetchPriority="high" />

      {/* Back Breadcrumb */}
      <div className="pl-8 mx-auto lg:w-[95%] max-w-[1600px] lg:px-12 mb-6">
        <a
          href="#"
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-[#00a5c5] transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </a>
      </div>

      {/* Hero Section */}
      <section className="mx-auto lg:w-[95%] max-w-[1600px] px-4 sm:px-6 lg:px-12 mb-16">

        {/* DESKTOP LAYOUT (lg and up) */}
        <div className="hidden lg:flex relative w-full overflow-hidden min-h-[400px] sm:min-h-[700px] items-center">
          {/* Background image */}
          <div className="absolute inset-0 w-full h-full z-0">
            <img
              src={blogsHeroDesktop}
              alt="Blogs Hero Background"
              className="w-full h-full object-contain object-right md:object-center"
              fetchPriority="high"
              loading="eager"
            />
          </div>

          {/* Text Content overlay */}
          <div className="relative z-10 w-full md:w-1/2 md:mt-16 lg:mt-16 p-8 sm:p-12 lg:p-20">
            <p className="font-poppins text-neutral-600 text-sm sm:text-base mb-4 tracking-wide font-medium">
              Our blogs
            </p>
            <h1 className="font-poppins text-4xl sm:text-5xl lg:text-6xl font-semibold text-neutral-800 leading-[1.1] tracking-tight">
              Smarter Digital <br className="hidden sm:block" />
              Thinking for <span className="text-[#00a5c5]">Better <br className="hidden sm:block" />
                Conversions</span>
            </h1>
          </div>
        </div>

        {/* MOBILE & TABLET LAYOUT (below lg) - Stacked Vertically */}
        <div className="block lg:hidden w-full flex flex-col items-center text-center">
          <div className="mb-8">
            <p className="font-poppins text-neutral-600 text-sm sm:text-base mb-4 tracking-wide font-medium">
              Our blogs
            </p>
            <h1 className="font-poppins text-4xl sm:text-5xl md:text-6xl font-semibold text-neutral-800 leading-tight tracking-tight">
              Smarter Digital <br />
              Thinking for <span className="text-[#00a5c5]">Better <br />
                Conversions</span>
            </h1>
          </div>

          <div className="w-full max-w-lg sm:max-w-xl md:max-w-2xl overflow-hidden rounded-[2rem]">
            <img
              src={blogsHeroMobile}
              alt="Blogs Hero Mobile Banner"
              className="w-full h-auto object-contain mx-auto"
              fetchPriority="high"
              loading="eager"
            />
          </div>
        </div>

      </section>

      {/* All Articles Section */}
      <section className="px-6 sm:px-8 lg:px-12 max-w-[1600px] mx-auto mb-16">
        <h2 className="font-poppins text-3xl sm:text-4xl font-semibold text-neutral-800 mb-6">
          All articles
        </h2>
        <p className="font-poppins text-neutral-600 text-lg leading-relaxed max-w-4xl mb-8">
          Explore our collection of insights, ideas, and updates across design, development, and digital strategy. From practical guides to industry perspectives, these articles are designed to keep you informed, inspired, and ahead of the curve in a fast-moving digital landscape.
        </p>

        {/* Search Bar */}
        <div className="relative max-w-full">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-neutral-400" />
          </div>
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-32 py-4 bg-transparent border border-neutral-300 rounded-full focus:outline-none focus:border-[#00a5c5] font-poppins text-neutral-700"
          />
          <button className="absolute right-2 top-2 bottom-2 bg-black hover:bg-[#00a5c5] text-white px-6 rounded-full font-poppins font-medium transition-colors text-sm lowercase">
            Search
          </button>
        </div>
      </section>

      {/* Latest Blogs Section */}
      <section className="px-6 sm:px-8 lg:px-12 max-w-[1600px] mx-auto mb-20">
        <h2 className="w-full px-0 md:px-[186px] font-poppins text-3xl sm:text-4xl font-semibold text-neutral-800 mb-10">
          Latest blogs
        </h2>

        <div className="flex flex-wrap justify-center gap-8 lg:gap-10 mb-12">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => (
              <a href="#article" key={blog.id} className="flex flex-col group cursor-pointer block w-full md:w-[350px]">
                {/* Blog Image Placeholder */}
                <div className="w-full aspect-[4/3] bg-neutral-200 rounded-2xl mb-6 overflow-hidden flex items-center justify-center relative">
                  {blog.image ? (
                    <img loading="lazy" src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <span className="text-neutral-400 font-poppins text-sm">Image Placeholder</span>
                  )}
                </div>

                <div className="flex flex-col flex-1">
                  <span className="font-poppins text-xs text-neutral-500 mb-3 uppercase tracking-wider font-medium">
                    {blog.date}
                  </span>
                  <h3 className="font-poppins text-xl font-semibold text-neutral-800 mb-4 leading-snug group-hover:text-[#00a5c5] transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="font-poppins text-neutral-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                    {blog.excerpt}
                  </p>
                  <div className="mt-auto">
                    <button className="px-6 py-2 border border-[#00a5c5] text-[#00a5c5] rounded-full font-poppins text-xs hover:bg-black hover:text-[#00a5c5] transition-colors font-medium lowercase">
                      Read article
                    </button>
                  </div>
                </div>
              </a>
            ))
          ) : (
            <div className="w-full text-center py-10 font-poppins text-neutral-500">
              No articles found matching "{searchQuery}".
            </div>
          )}
        </div>

        <div className="flex justify-center">
          <button className="bg-black hover:bg-[#00a5c5] text-white px-8 py-3 rounded-full font-poppins text-sm transition-colors shadow-sm font-medium lowercase">
            Load more...
          </button>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="px-6 sm:px-8 lg:px-12 max-w-[1600px] mx-auto">
        <div className="w-full rounded-[2rem] bg-gradient-to-r from-[#e6eef5] to-[#cddbea] py-20 px-6 flex flex-col items-center text-center">
          <img loading="lazy" src={redLogo}
            alt="R-E-D Logo"
            className="h-10 sm:h-12 object-contain mb-8"
          />
          <h3 className="font-poppins text-2xl sm:text-4xl font-semibold text-neutral-800 mb-6 leading-tight max-w-2xl">
            Ready to establish your digital presences?
          </h3>
          <p className="font-poppins text-neutral-600 text-base max-w-xl mb-10 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu ex ultricies, ornare velit vel, rhoncus metus.
          </p>
          <button
            onClick={onCtaClick}
            className="bg-black hover:bg-[#00a5c5] text-white font-poppins font-medium px-8 py-4 rounded-full transition-all duration-300 shadow-md active:scale-95 text-sm lowercase"
          >
            schedule a meeting today
          </button>
        </div>
      </section>

    </div>
  );
}
