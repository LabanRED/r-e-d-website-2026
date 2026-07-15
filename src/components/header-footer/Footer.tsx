import { Facebook, Linkedin } from 'lucide-react';
import redWhiteLogo from '../../images/r-e-d-white-logo.svg';
import postXWhiteLogo from '../../images/PostX_Web_white_Logo.png';

export default function Footer() {
  return (
    <footer className="w-full bg-transparent p-5 font-sans select-none" id="footer">
      <div className="mx-auto max-w-[1600px] rounded-[32px] bg-black text-white p-8 sm:p-12 md:p-16 lg:p-20 shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 items-start w-full">
          
          {/* Column 1: Our Services */}
          <div>
            <h3 className="font-poppins font-semibold text-2xl sm:text-3xl text-white mb-6">
              Our services
            </h3>
            <ul className="space-y-3 font-poppins text-neutral-400 text-sm sm:text-base">
              <li>
                <a href="#service-digital-advertising" className="hover:text-white transition-colors duration-200">
                  Digital advertising
                </a>
              </li>
              <li>
                <a href="#service-social-media" className="hover:text-white transition-colors duration-200">
                  Social media management
                </a>
              </li>
              <li>
                <a href="#service-website-dev" className="hover:text-white transition-colors duration-200">
                  Website development <br />& maintenance
                </a>
              </li>
              <li>
                <a href="#service-online-reputation" className="hover:text-white transition-colors duration-200">
                  Online reputation solutions
                </a>
              </li>
              <li>
                <a href="#service-location-listing" className="hover:text-white transition-colors duration-200">
                  Location listing and solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Our Products */}
          <div>
            <h3 className="font-poppins font-semibold text-2xl sm:text-3xl text-white mb-6">
              Our products
            </h3>
            <ul className="space-y-3 font-poppins text-neutral-400 text-sm sm:text-base">
              <li>
                <a href="#postx" className="hover:text-white transition-colors duration-200 inline-block mt-1">
                  <img loading="lazy" src={postXWhiteLogo} alt="PostX Logo" className="h-6 object-contain" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Socials */}
          <div>
            <h3 className="font-poppins font-semibold text-2xl sm:text-3xl text-white mb-6">
              Our socials
            </h3>
            <div className="flex items-center gap-5 mt-2">
              <a 
                href="https://www.facebook.com/ReachEngageDevelop" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-neutral-400 hover:text-white transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/company/reach-engage-develop/posts/?feedView=all" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-neutral-400 hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Column 4: Get in Touch & Logo */}
          <div className="flex flex-col justify-between h-full min-h-[220px]">
            <div>
              <h3 className="font-poppins font-semibold text-2xl sm:text-3xl text-white mb-6">
                Get in touch
              </h3>
              <ul className="space-y-3 font-poppins text-neutral-400 text-sm sm:text-base">
                <li>
                  <a href="#contact" className="hover:text-white transition-colors duration-200">
                    Contact us
                  </a>
                </li>
                <li>
                  <a href="#why-us" className="hover:text-white transition-colors duration-200">
                    About us
                  </a>
                </li>
                <li className="text-neutral-400">
                  Tel: 010 025 3560
                </li>
                <li className="text-neutral-400 leading-relaxed">
                  Address: 3 Polo Cres,<br />
                  Woodmead, Sandton, 2191
                </li>
              </ul>
            </div>

            {/* Logo container placed nicely underneath the Get in Touch section */}
            <div className="mt-8 pt-4">
              <a href="#">
                <img loading="lazy" src={redWhiteLogo} 
                  alt="R-E-D Logo" 
                  className="h-auto w-36 object-contain select-none transition-opacity hover:opacity-80 duration-200"
                  referrerPolicy="no-referrer"
                />
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

