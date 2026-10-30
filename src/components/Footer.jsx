import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, ArrowUpRight } from 'lucide-react';
import InstagramIcon from './icons/InstagramIcon';
import WhatsAppIcon from './icons/WhatsAppIcon';
import { 
  ATS_DISPLAY_PHONE, ATS_PHONE, ATS_MAPS_URL, 
  ATS_INSTAGRAM_URL, getWhatsAppUrl 
} from '../utils/whatsapp';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-8 border-t border-gray-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-gray-800">
          
          {/* Column 1: Logo & Short Company Introduction */}
          <div className="space-y-3">
            <Link to="/" className="inline-block bg-white p-2 rounded-xl shadow-sm">
              <img
                src="/logo-transparent.png"
                alt="AARYA TOURIST SERVICE - Luxury On Wheels"
                className="h-10 w-auto object-contain"
                width="130"
                height="44"
              />
            </Link>
            <div className="text-xs font-bold uppercase tracking-wider text-[#FF7900]">
              LUXURY ON WHEELS
            </div>
            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              AARYA TOURIST SERVICE is a premier Indian tourist bus rental and passenger transportation provider offering verified, air-suspended luxury coaches, tempo travellers, and executive group mobility across India.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/" className="hover:text-[#FF7900] transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#FF7900] transition-colors">About Us</Link></li>
              <li><Link to="/fleet" className="hover:text-[#FF7900] transition-colors">Our Fleet</Link></li>
              <li><Link to="/services" className="hover:text-[#FF7900] transition-colors">Our Services</Link></li>
              <li><Link to="/tour-travel" className="hover:text-[#FF7900] transition-colors">Tour & Travel</Link></li>
              <li><Link to="/gallery" className="hover:text-[#FF7900] transition-colors">Vehicle Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-[#FF7900] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/services" className="hover:text-[#FF7900] transition-colors">
                  Tourist Bus Rental
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#FF7900] transition-colors">
                  Wedding Transportation
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#FF7900] transition-colors">
                  Corporate Travel
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#FF7900] transition-colors">
                  Family & Group Tours
                </Link>
              </li>
              <li>
                <Link to="/tour-travel" className="hover:text-[#FF7900] transition-colors">
                  Pilgrimage Yatra Packages
                </Link>
              </li>
              <li>
                <Link to="/tour-travel" className="hover:text-[#FF7900] transition-colors">
                  Hill Station Outstation Tours
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Number, WhatsApp, Social & Location */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs">
              {/* Phone */}
              <div className="flex items-center gap-2.5 text-gray-300">
                <div className="w-7 h-7 rounded-lg bg-gray-800 flex items-center justify-center text-[#FF7900] shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-400">Direct Calling</div>
                  <a href={`tel:${ATS_PHONE}`} className="hover:text-white font-bold">
                    {ATS_DISPLAY_PHONE}
                  </a>
                </div>
              </div>

              {/* WhatsApp Chat with Real WhatsApp Icon */}
              <div className="flex items-center gap-2.5 text-gray-300">
                <div className="w-8 h-8 rounded-lg bg-gray-800 border border-gray-700/80 flex items-center justify-center shrink-0">
                  <WhatsAppIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-400">WhatsApp Booking</div>
                  <a
                    href={getWhatsAppUrl("Hello Aarya Tourist Service, I would like to make an enquiry.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#25D366] hover:text-[#3ce67d] font-semibold flex items-center gap-1 transition-colors"
                  >
                    <span>Chat on WhatsApp</span>
                    <ArrowUpRight className="w-3 h-3 text-[#25D366]/70" />
                  </a>
                </div>
              </div>

              {/* Social & Location Links */}
              <div className="pt-2">
                <div className="text-[10px] text-gray-400 mb-2">Connect & Location</div>
                <div className="flex flex-wrap items-center gap-2">
                  {/* WhatsApp Quick Chat */}
                  <a
                    href={getWhatsAppUrl("Hello Aarya Tourist Service, I would like to make an enquiry.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-8 px-2.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-200 border border-gray-700/80 flex items-center gap-1.5 transition-colors text-xs font-semibold"
                    aria-label="Chat on WhatsApp"
                    title="Direct WhatsApp Chat"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>

                  {/* Instagram */}
                  <a
                    href={ATS_INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-8 px-2.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-pink-400 flex items-center gap-1.5 transition-colors text-xs font-medium"
                    aria-label="Instagram Profile"
                    title="Follow on Instagram"
                  >
                    <InstagramIcon className="w-3.5 h-3.5" />
                    <span>Instagram</span>
                  </a>

                  {/* Google Maps */}
                  <a
                    href={ATS_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-8 px-2.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-[#FF7900] flex items-center gap-1.5 transition-colors text-xs font-medium"
                    aria-label="Google Maps Location"
                    title="Find on Google Maps"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Google Maps</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Copyright Information */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <div>
            © {new Date().getFullYear()} <strong className="text-gray-300 font-semibold">AARYA TOURIST SERVICE</strong>. All rights reserved.
          </div>
          <div className="text-gray-400 text-[11px]">
            Brand Tagline: <span className="text-[#FF7900] font-semibold">LUXURY ON WHEELS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
