import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import WhatsAppIcon from './icons/WhatsAppIcon';
import { ATS_DISPLAY_PHONE, getWhatsAppUrl } from '../utils/whatsapp';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Our Fleet', path: '/fleet' },
    { name: 'Tour & Travel', path: '/tour-travel' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-white ${
        isScrolled
          ? 'shadow-sm border-b border-gray-100 py-1.5 sm:py-2'
          : 'border-b border-gray-100/80 py-2 sm:py-2.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Prominent Logo on White Background */}
          <Link to="/" className="flex items-center focus:outline-none shrink-0 py-0.5">
            <img
              src="/logo-transparent.png"
              alt="AARYA TOURIST SERVICE - Luxury On Wheels"
              className="h-11 sm:h-12 lg:h-13 xl:h-14 w-auto object-contain transition-transform hover:scale-[1.02]"
              width="160"
              height="56"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-semibold transition-colors relative py-1 ${
                    isActive
                      ? 'text-[#FF7900]'
                      : 'text-gray-700 hover:text-[#FF7900]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF7900] rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Header Action Button - Desktop "BOOK NOW ->" */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={getWhatsAppUrl("Hello Aarya Tourist Service, I would like to book a bus.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-orange-gradient px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-md shadow-orange-500/20 hover:brightness-105 active:scale-95 transition-all"
            >
              <WhatsAppIcon className="w-4 h-4" fill="white" />
              <span>BOOK NOW</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Right Controls: Orange "Book Now" Button + Hamburger Menu */}
          <div className="flex lg:hidden items-center gap-2.5">
            <a
              href={getWhatsAppUrl("Hello Aarya Tourist Service, I would like to book a bus.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-orange-gradient px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs font-bold text-white flex items-center gap-1.5 shadow-sm active:scale-95 transition-all"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" fill="white" />
              <span>Book Now</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-gray-900 hover:bg-gray-100 focus:outline-none transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 stroke-[2.2]" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-5 space-y-3 shadow-lg">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-orange-50 text-[#FF7900]'
                      : 'text-gray-800 hover:bg-gray-50 hover:text-[#FF7900]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="pt-2 border-t border-gray-100">
            <a
              href={getWhatsAppUrl("Hello Aarya Tourist Service, I would like to book a bus.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full btn-orange-gradient py-2.5 rounded-full text-xs font-bold text-center flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4" fill="white" />
              <span>BOOK NOW ON WHATSAPP ({ATS_DISPLAY_PHONE})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
