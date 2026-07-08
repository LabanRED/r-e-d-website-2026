import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import redWhiteLogo from '../images/r-e-d-white-logo.svg';
import postXWhiteLogo from '../images/PostX_Web_white_Logo.png';

interface NavbarProps {
  onCtaClick: () => void;
}

const links = [
  { label: 'PostX', href: '#postx', isImage: true },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Services', href: '#services' },
  { label: 'Blogs', href: '#blogs' },
  { label: 'Careers', href: '#careers' },
  { label: 'About', href: '#about' },
];

export default function Navbar({ onCtaClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-4 z-50 w-full px-4 sm:px-6 lg:px-8 bg-transparent">
      {/* Black Floating Capsule Container */}
      <div className="mx-auto max-w-[1600px] h-16 md:h-24 lg:h-24 rounded-full bg-black border px-6 sm:px-8 shadow-2xl flex items-center">
        <div className="flex items-center justify-between w-full">
          
          {/* Logo: R-E-D White Logo */}
          <a href="#" className="flex items-center group">
            <img 
              src={redWhiteLogo} 
              alt="R-E-D Logo" 
              className="h-8 md:h-16 lg:h-10 object-contain select-none opacity-90 group-hover:opacity-100 transition-opacity"
              referrerPolicy="no-referrer"
            />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-sans text-base font-normal tracking-wide text-neutral-300 transition-colors duration-200 hover:text-white flex items-center"
              >
                {link.isImage ? (
                  <img
                    src={postXWhiteLogo}
                    alt={link.label}
                    className="h-5 md:h-6 object-contain select-none opacity-85 hover:opacity-100 transition-opacity duration-200"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  link.label
                )}
              </a>
            ))}
          </div>

          {/* CTA (Desktop) - Vibrant Cyan Pill Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={onCtaClick}
              className="h-[42px] inline-flex items-center justify-center rounded-full bg-[#00a2ca] hover:bg-[#00b5e2] px-7 text-sm text-white shadow-md shadow-cyan-500/10 transition-all duration-300 hover:scale-[1.02] active:scale-95 font-poppins font-medium lowercase"
            >
              Contact us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-full p-2 text-neutral-400 hover:bg-neutral-900 hover:text-white focus:outline-none transition-colors"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-5 w-5" /> : <Menu className="block h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-3 mx-2 rounded-2xl border border-neutral-900 bg-black/95 backdrop-blur-md p-5 shadow-xl"
          >
            <div className="space-y-2 flex flex-col">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-3 py-2 text-base font-normal text-neutral-300 hover:bg-neutral-900 hover:text-white transition-colors flex items-center"
                >
                  {link.isImage ? (
                    <img
                      src={postXWhiteLogo}
                      alt={link.label}
                      className="h-5 object-contain select-none"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    link.label
                  )}
                </a>
              ))}
              <div className="pt-4 border-t border-neutral-900 mt-2">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onCtaClick();
                  }}
                  className="w-full rounded-full bg-[#00a2ca] py-3 text-base font-semibold text-white text-center shadow-lg hover:bg-[#00b5e2] transition-colors"
                >
                  Contact us
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
