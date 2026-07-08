import React, { useState } from 'react';
import { ArrowLeft, Phone, Clock, MapPin, Mail } from 'lucide-react';
import redLogo from '../images/r-e-d-dark-logo.svg';
import desktopBanner from '../images/r-e-d-contact-us-desktop-banner.webp';
import mobileBanner from '../images/r-e-d-contact-us-mobile-banner.webp';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('Select a service');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="w-full min-h-screen relative font-sans overflow-x-hidden pt-8">
      <link rel="preload" as="image" href={desktopBanner} media="(min-width: 768px)" fetchPriority="high" />
      <link rel="preload" as="image" href={mobileBanner} media="(max-width: 767px)" fetchPriority="high" />

      {/* Main Content Container */}
      <div className="mx-auto lg:w-[95%] max-w-[1600px] px-4 mb-20">

        {/* Back Breadcrumb */}
        <div className="mb-8">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm mt-8 font-medium text-neutral-500 hover:text-[#00a5c5] transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </a>
        </div>

        {/* Mobile Heading */}
        <div className="block md:hidden mb-6 mt-4">
          <h1 className="font-poppins justify-center text-center text-4xl font-semibold text-[#222] leading-[1.1]">
            <span className="text-[#00a5c5]">Contact</span> our<br />team today.
          </h1>
        </div>

        {/* Hero Banner Section */}
        <div className="relative w-full overflow-hidden mb-12 h-[250px] sm:h-[350px] md:h-[700px]">
          {/* Desktop Background */}
          <div
            className="hidden md:block absolute inset-0 w-full h-full bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${desktopBanner})` }}
          />
          {/* Mobile Background */}
          <div
            className="block md:hidden absolute inset-0 w-full h-full bg-contain bg-top bg-no-repeat"
            style={{ backgroundImage: `url(${mobileBanner})` }}
          />

          {/* Desktop Text Overlay */}
          <div className="hidden md:flex absolute inset-0 items-center justify-start px-8 sm:px-12 md:px-16 lg:px-24">
            <h1 className="font-poppins md:mt-24 text-3xl md:text-6xl lg:text-6xl font-semibold text-[#222] leading-[1.1] max-w-[200px] sm:max-w-sm md:max-w-md">
              <span className="text-[#00a5c5]">Contact</span> our<br />team today.
            </h1>
          </div>
        </div>

        {/* Intro Text */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="font-poppins text-neutral-800 text-base md:text-lg leading-relaxed font-medium">
            Ready to generate more leads and grow your business? Contact R-E-D today for expert digital advertising, high-converting campaigns, and measurable results. Let's turn your strategy into real performance.
          </p>
        </div>

        {/* Form Section */}
        <div className="w-full flex justify-center mb-24">
          <div className="w-full max-w-xl bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-neutral-100">
            <div className="flex flex-col items-center mb-8">
              <img loading="lazy" src={redLogo} alt="R-E-D" className="h-6 mb-4 opacity-90" />
              <h2 className="font-poppins text-2xl font-semibold text-neutral-800 text-center">
                Let's start with the basics
              </h2>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-[11px] font-semibold text-neutral-500 mb-1.5 ml-1 uppercase tracking-wider">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#f8f8f8] border border-transparent rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#00a5c5] transition-colors"
                  placeholder="Jane Doe"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-neutral-500 mb-1.5 ml-1 uppercase tracking-wider">Phone number</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-[#f8f8f8] border border-transparent rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#00a5c5] transition-colors"
                  placeholder="e.g. 082 123 4567"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-neutral-500 mb-1.5 ml-1 uppercase tracking-wider">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#f8f8f8] border border-transparent rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#00a5c5] transition-colors"
                  placeholder="jane@company.com"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-neutral-500 mb-1.5 ml-1 uppercase tracking-wider">Select a service</label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-[#f8f8f8] border border-transparent rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#00a5c5] transition-colors appearance-none text-neutral-700"
                >
                  <option>Select a service</option>
                  <option>Digital Advertising</option>
                  <option>Social Media Management</option>
                  <option>Website Development</option>
                  <option>Online Reputation</option>
                  <option>Location Listing</option>
                  <option>PostX</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-neutral-500 mb-1.5 ml-1 uppercase tracking-wider">Message</label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-[#f8f8f8] border border-transparent rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00a5c5] transition-colors resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <div className="pt-2">
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

        {/* Office Information Section */}
        <div className="text-center mb-16">
          <p className="text-[#00a5c5] text-xs font-semibold tracking-widest uppercase mb-2">CONTACT US</p>
          <h2 className="font-poppins text-3xl md:text-4xl font-semibold text-neutral-800 mb-16">Our office information</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Column 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center mb-4">
                <Phone className="w-5 h-5 text-neutral-800" />
              </div>
              <h3 className="font-poppins text-sm font-semibold text-neutral-800 mb-2 uppercase tracking-wide">Call & Whatsapp</h3>
              <p className="text-sm text-neutral-600">+27 10 300 0535</p>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center mb-4">
                <Clock className="w-5 h-5 text-neutral-800" />
              </div>
              <h3 className="font-poppins text-sm font-semibold text-neutral-800 mb-2 uppercase tracking-wide">Office hours</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Mon - Fri: 7am - 5pm<br />
                Saturday & Sunday: Closed<br />
                Public Holidays: Closed
              </p>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5 text-neutral-800" />
              </div>
              <h3 className="font-poppins text-sm font-semibold text-neutral-800 mb-2 uppercase tracking-wide">Address</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                3 Polo Crescent,<br />
                Woodmead, Sandton
              </p>
            </div>

            {/* Column 4 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center mb-4">
                <Mail className="w-5 h-5 text-neutral-800" />
              </div>
              <h3 className="font-poppins text-sm font-semibold text-neutral-800 mb-2 uppercase tracking-wide">Write to us</h3>
              <p className="text-sm text-neutral-600">hello@r-e-d.co.za</p>
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div className="flex flex-col lg:flex-col items-center lg:items-center gap-12 lg:gap-20">
          <div className="w-full mx-auto text-center lg:text-center">
            <p className="text-[#00a5c5] text-xs font-semibold tracking-widest uppercase mb-2">OUR LOCATION</p>
            <h2 className="font-poppins text-3xl md:text-4xl font-semibold text-neutral-800 mb-6">How to find us</h2>
            <p className="font-poppins px-4 md:px-48 lg:px-48 text-neutral-600 text-base leading-relaxed mb-8">
              Find your way to R-E-D with ease using our interactive map. Located in a prime business hub, we're accessible from major routes. If you need any assistance getting here, feel free to contact us for directions.
            </p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-black hover:bg-[#00a5c5] text-white font-poppins text-sm font-semibold px-8 py-3 rounded-full transition-colors shadow-sm"
            >
              Directions
            </a>
          </div>

          <div className="w-full">
            {/* Map Placeholder */}
            <div className="w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden border border-[#00A5C5] shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.09503023249!2d28.0645605!3d-26.0631388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95730a84e1b723%3A0xb3cfbfd4004c2759!2s3%20Polo%20Cres%2C%20Woodmead%2C%20Sandton%2C%202080%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="R-E-D Office Location"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
