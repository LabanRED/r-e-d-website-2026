import React from 'react';
import { ArrowLeft, Facebook, Twitter, Linkedin, Link2 } from 'lucide-react';
import redLogo from '../images/r-e-d-dark-logo.svg';
import redWhiteLogo from '../images/r-e-d-white-logo.svg';
import heroDesktop from '../images/article-3-winning-socila-media-strategies-hero-desktop-banner.webp';
import heroMobile from '../images/article-3-winning-socila-media-strategies-hero-mobile-banner.webp';
import midBannerDesktop from '../images/mid-article-social-media-strategy-banner-desktop-banner.webp';
import midBannerMobile from '../images/mid-article-social-media-strategy-banner-mobile-banner.webp';

interface ArticlePageProps {
  onCtaClick: () => void;
}

export default function ArticlePage({ onCtaClick }: ArticlePageProps) {
  return (
    <div className="w-full bg-[#fafafa] min-h-screen relative font-sans overflow-x-hidden pt-8 pb-20">
      <link rel="preload" as="image" href={heroDesktop} media="(min-width: 769px)" fetchPriority="high" />
      <link rel="preload" as="image" href={heroMobile} media="(max-width: 768px)" fetchPriority="high" />

      {/* Back Breadcrumb */}
      <div className="mx-auto lg:w-[95%] max-w-[1600px] px-6 sm:px-8 lg:px-12 mb-8">
        <a
          href="#blogs"
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-[#00a5c5] transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to blogs
        </a>
      </div>

      {/* Article Header */}
      <article className="max-w-[1600px] mx-auto px-6 sm:px-8">
        <header className="mb-10 text-center">
          <h1 className="w-full md:w-[1100px] lg:w-[1100px] mx-auto font-poppins text-4xl sm:text-5xl lg:text-6xl font-medium text-neutral-900 leading-tight tracking-tight mb-6">
            3 Winning Social Media Strategies For South African Car Dealers
          </h1>
        </header>

        {/* Article Hero Image */}
        <div className="w-full bg-neutral-100 rounded-[2rem] overflow-hidden flex items-center justify-center mb-16 relative shadow-sm">
          <picture className="w-full">
            <source media="(max-width: 768px)" srcSet={heroMobile} />
            <img
              src={heroDesktop}
              alt="3 Winning Social Media Strategies Hero"
              className="w-full h-auto object-cover"
              fetchPriority="high"
              loading="eager"
            />
          </picture>
        </div>

        {/* Two Column Layout for Body */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column: Author & Meta Info */}
          <aside className="w-full lg:w-[250px] flex-shrink-0">
            <div className="sticky top-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                  <img loading="lazy" src={redWhiteLogo} alt="R-E-D" className="w-6 h-6 object-contain" />
                </div>
                <div>
                  <p className="font-poppins text-xs font-semibold text-neutral-900 uppercase">Author: R-E-D</p>
                  <p className="font-poppins text-xs text-neutral-500">19 May 2021</p>
                </div>
              </div>
              <hr className="border-neutral-200 mb-6" />
              <div>
                <p className="font-poppins text-xs font-semibold text-neutral-900 uppercase">Reading time</p>
                <p className="font-poppins text-xs text-neutral-500">5 Minutes</p>
              </div>
            </div>
          </aside>

          {/* Right Column: Article Content */}
          <div className="flex-1 min-w-0">
            <div className="prose prose-lg sm:prose-xl prose-neutral max-w-none font-poppins text-neutral-700 leading-relaxed mb-16 text-base sm:text-lg">
              <p className="mb-6">
                Many car shoppers are now turning to social media to begin their buying journeys. There are vast amounts of information customers can gather from social media, from basic contact information to recommendations.
              </p>
              <p className="mb-10">
                It is evident that social media is playing an increasingly important role in the purchase decisions of car buyers, and dealerships must respond to this shift. With recommendations and instant availability of information massively impacting car purchases, dealerships can leverage social media to improve their sales figures.
              </p>

              <h2 className="text-xl sm:text-2xl font-medium text-[#00a5c5] mt-12 mb-6">
                1. Facebook Advertising for Your Dealership
              </h2>
              <p className="mb-6">
                Facebook is the largest social media platform in the world (over 2 billion users) and in South Africa (over 29 million users), so it's a good bet that your target audience are on Facebook. Facebook has extremely accurate targeting options which would allow you to dive into the timelines of your target audience.
              </p>
              <p className="mb-6">
                Moreover, Facebook has several different advertising objectives and formats to best suite your dealerships current objectives. Objectives range from; lead generation, awareness, website traffic and much more. The advertising formats include; videos, images, slideshows and interactive dynamic layouts which can be delivered in single posts or carousels.
              </p>
              <p className="mb-10">
                This is only scratching the surface of what Facebook can do for your dealership, so it might be a good idea to look at Facebook advertising to leverage social media and increase your dealerships sales.
              </p>

              {/* Mid Article Image */}
              <div className="w-full rounded-[2rem] overflow-hidden flex items-center justify-center my-12 relative shadow-sm">
                <picture className="w-full">
                  <source media="(max-width: 768px)" srcSet={midBannerMobile} />
                  <img loading="lazy" src={midBannerDesktop}
                    alt="Social Media Strategy"
                    className="w-full h-auto object-cover"
                  />
                </picture>
              </div>

              <h2 className="text-xl sm:text-2xl font-medium text-[#00a5c5] mt-12 mb-6">
                2. Instagram Stories for Your Dealership
              </h2>
              <p className="mb-6">
                With 6.8 Million users in South Africa, Instagram is a social media titan. Instagram has a relatively young user base and has superseded Snap Chat as the king of stories. Stories were originally developed by Snap Chat and are short videos or photos that last a maximum of 24 hours.
              </p>
              <p className="mb-6">
                Instagram's stories are a great place for your dealership to connect with its customers by posting stories of staff, happy customers or promotions. Using this strategy will give your dealership a more personal and trusting image.
              </p>
              <p className="mb-10">
                Instagram has enabled a function called highlights, which are albums where selected stories are kept after the 24-hour period. This could be a great way to display your inventory to your Instagram followers.
              </p>

              <h2 className="text-xl sm:text-2xl font-medium text-[#00a5c5] mt-12 mb-6">
                3. YouTube Videos for Your Dealership
              </h2>
              <p className="mb-10">
                YouTube is the go-to platform for reviews and recommendations from sources other than the buyer's family and friends. Therefore, YouTube is a great place to capture potential customers who are actively looking for information on which car to purchase. Your dealership could post comparison videos on vehicles you are currently stocking, or other kinds of information packed videos. You are also able to capture this information seeking audience through targeted advertisements on YouTube and Google.
              </p>

              <hr className="border-neutral-200 my-8" />

              <p className="text-[#00a5c5] font-medium">
                Social media marketing for car dealerships in South Africa can be challenging, so if you are ever looking for a partner to help you through the process don't hesitate to give R-E-D a call!
              </p>
            </div>

            {/* Share Section */}
            <div className="border-t border-b border-neutral-200 py-8 mb-20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="font-poppins font-semibold text-neutral-800">Share this article:</span>
              <div className="flex items-center gap-4">
                <button className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-black hover:text-[#00a5c5] transition-colors font-poppins font-medium lowercase">
                  <Facebook className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-black hover:text-[#00a5c5] transition-colors font-poppins font-medium lowercase">
                  <Twitter className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-black hover:text-[#00a5c5] transition-colors font-poppins font-medium lowercase">
                  <Linkedin className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-black hover:text-[#00a5c5] transition-colors font-poppins font-medium lowercase">
                  <Link2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>

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
