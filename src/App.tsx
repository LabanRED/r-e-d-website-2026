import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import LogoCarousel from './components/LogoCarousel';
import TwoColumnAbout from './components/TwoColumnAbout';
import Testimonials from './components/Testimonials';
import WhyUs from './components/WhyUs';
import ServicesGrid from './components/ServicesGrid';
import RedProcess from './components/RedProcess';
import Partnerships from './components/Partnerships';
import EstablishPresence from './components/EstablishPresence';
import Footer from './components/Footer';
import { lazy, Suspense } from 'react';

const PostXPage = lazy(() => import('./pages/PostXPage'));
const InteractiveContactModal = lazy(() => import('./components/InteractiveContactModal'));
import WhatsAppButton from './components/WhatsAppButton';
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ServiceDigitalAdvertising = lazy(() => import('./pages/ServiceDigitalAdvertising'));
const ServiceSocialMedia = lazy(() => import('./pages/ServiceSocialMedia'));
const ServiceWebsiteDev = lazy(() => import('./pages/ServiceWebsiteDev'));
const ServiceOnlineReputation = lazy(() => import('./pages/ServiceOnlineReputation'));
const ServiceLocationListing = lazy(() => import('./pages/ServiceLocationListing'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const BlogsPage = lazy(() => import('./pages/BlogsPage'));
const ArticlePage = lazy(() => import('./pages/ArticlePage'));
const CareersPage = lazy(() => import('./pages/CareersPage'));
const CareerDetailedPage = lazy(() => import('./pages/CareerDetailedPage'));
const CareerDetailedSearchPage = lazy(() => import('./pages/CareerDetailedSearchPage'));
const CareerDetailedInternPage = lazy(() => import('./pages/CareerDetailedInternPage'));
const CareerDetailedDesignerPage = lazy(() => import('./pages/CareerDetailedDesignerPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
import { seoConfig } from './config/seoConfig';
import { usePageTracking } from './hooks/usePageTracking';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [view, setView] = useState<'home' | 'postx' | 'services' | 'service-digital-advertising' | 'service-social-media' | 'service-website-dev' | 'service-online-reputation' | 'service-location-listing' | 'contact' | 'blogs' | 'article' | 'careers' | 'career-detail' | 'career-detail-search' | 'career-detail-intern' | 'career-detail-designer' | 'about'>('home');

  usePageTracking(view);

  useEffect(() => {
    const seo = seoConfig[view] || seoConfig['home'];
    if (seo) {
      document.title = seo.title;
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', seo.metaDescription);
    }
  }, [view]);

  const handleOpenModal = () => {
    window.location.hash = '#contact';
  };
  const handleCloseModal = () => setIsModalOpen(false);

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#postx' || hash === '#platform') {
        setView('postx');
        window.scrollTo({ top: 0 });
      } else if (hash === '#services') {
        setView('services');
        window.scrollTo({ top: 0 });
      } else if (hash === '#service-digital-advertising') {
        setView('service-digital-advertising');
        window.scrollTo({ top: 0 });
      } else if (hash === '#service-social-media') {
        setView('service-social-media');
        window.scrollTo({ top: 0 });
      } else if (hash === '#service-website-dev') {
        setView('service-website-dev');
        window.scrollTo({ top: 0 });
      } else if (hash === '#service-online-reputation') {
        setView('service-online-reputation');
        window.scrollTo({ top: 0 });
      } else if (hash === '#service-location-listing') {
        setView('service-location-listing');
        window.scrollTo({ top: 0 });
      } else if (hash === '#contact') {
        setView('contact');
        window.scrollTo({ top: 0 });
      } else if (hash === '#blogs') {
        setView('blogs');
        window.scrollTo({ top: 0 });
      } else if (hash.startsWith('#article')) {
        setView('article');
        window.scrollTo({ top: 0 });
      } else if (hash === '#careers') {
        setView('careers');
        window.scrollTo({ top: 0 });
      } else if (hash === '#career-detail') {
        setView('career-detail');
        window.scrollTo({ top: 0 });
      } else if (hash === '#career-detail-search') {
        setView('career-detail-search');
        window.scrollTo({ top: 0 });
      } else if (hash === '#career-detail-intern') {
        setView('career-detail-intern');
        window.scrollTo({ top: 0 });
      } else if (hash === '#career-detail-designer') {
        setView('career-detail-designer');
        window.scrollTo({ top: 0 });
      } else if (hash === '#about') {
        setView('about');
        window.scrollTo({ top: 0 });
      } else {
        setView('home');
        if (hash && hash !== '#') {
          // Allow home page sections to render, then scroll
          setTimeout(() => {
            const element = document.querySelector(hash);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100);
        } else {
          window.scrollTo({ top: 0 });
        }
      }
    };

    // Check initial hash on mount
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans selection:bg-blue-600/30 selection:text-blue-200 antialiased overflow-x-hidden">
      {/* 1. Black Nav Bar (with CTA) */}
      <Navbar onCtaClick={handleOpenModal} />

      {/* Conditionally render views based on simple router state */}
      <main>
        <Suspense fallback={<div className="min-h-screen bg-[#fafafa] flex items-center justify-center"><div className="w-8 h-8 border-4 border-[#00a5c5] border-t-transparent rounded-full animate-spin"></div></div>}>
          {view === 'postx' ? (
            <PostXPage onCtaClick={handleOpenModal} />
          ) : view === 'services' ? (
            <ServicesPage onCtaClick={handleOpenModal} />
          ) : view === 'contact' ? (
            <ContactPage />
          ) : view === 'blogs' ? (
            <BlogsPage onCtaClick={handleOpenModal} />
          ) : view === 'article' ? (
            <ArticlePage onCtaClick={handleOpenModal} />
          ) : view === 'careers' ? (
            <CareersPage />
          ) : view === 'career-detail' ? (
            <CareerDetailedPage />
          ) : view === 'career-detail-search' ? (
            <CareerDetailedSearchPage />
          ) : view === 'career-detail-intern' ? (
            <CareerDetailedInternPage />
          ) : view === 'career-detail-designer' ? (
            <CareerDetailedDesignerPage />
          ) : view === 'about' ? (
            <AboutPage />
          ) : view === 'service-digital-advertising' ? (
            <ServiceDigitalAdvertising onCtaClick={handleOpenModal} />
          ) : view === 'service-social-media' ? (
            <ServiceSocialMedia onCtaClick={handleOpenModal} />
          ) : view === 'service-website-dev' ? (
            <ServiceWebsiteDev onCtaClick={handleOpenModal} />
          ) : view === 'service-online-reputation' ? (
            <ServiceOnlineReputation onCtaClick={handleOpenModal} />
          ) : view === 'service-location-listing' ? (
            <ServiceLocationListing onCtaClick={handleOpenModal} />
          ) : (
            <>
              {/* 2. Hero Banner Section */}
              <Hero onCtaClick={handleOpenModal} />

              {/* Stats Bar (Responsive Metrics) */}
              <StatsBar />

              {/* 3. Trusted by Clients Logo Carousel */}
              <LogoCarousel />

              {/* Testimonials Section */}
              <Testimonials />

              {/* Why Us / Comparison Section */}
              <WhyUs onCtaClick={handleOpenModal} />

              {/* Services Section */}
              <ServicesGrid onCtaClick={handleOpenModal} />

              {/* PostX Platform preview */}
              <TwoColumnAbout onCtaClick={handleOpenModal} />

              {/* R-E-D Process Section */}
              <RedProcess onCtaClick={handleOpenModal} />

              {/* Meta & Google Partnerships Section */}
              <Partnerships onCtaClick={handleOpenModal} />

              {/* Establish Digital Presence Center CTA Section */}
              <EstablishPresence onCtaClick={handleOpenModal} />
            </>
          )}
        </Suspense>
      </main>

      {/* Footer component */}
      <Footer />

      {/* Interactive Floating Leads Form Modal */}
      <InteractiveContactModal isOpen={isModalOpen} onClose={handleCloseModal} />

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}
