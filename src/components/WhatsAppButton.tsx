import React from 'react';
import defaultCta from '../images/whatsapp-cta.svg';
import hoverCta from '../images/whatsapp-hover-cta.svg';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/27720688509"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed w-36 md:w-48 bottom-[2%] right-[2%] z-[9999] group flex items-center justify-center transition-transform hover:scale-105"
      aria-label="Contact us on WhatsApp"
    >
      <div className="relative w-full drop-shadow-2xl">
        {/* Make the first image relative so the container takes its natural height */}
        <img
          src={defaultCta}
          alt="WhatsApp"
          className="w-full h-auto object-contain transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0"
        />
        {/* The second image remains absolute, perfectly overlaying the first */}
        <img
          src={hoverCta}
          alt="WhatsApp Hover"
          className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
        />
      </div>
    </a>
  );
}
