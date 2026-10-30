import React from 'react';
import { Star, MessageSquare, MapPin, ExternalLink } from 'lucide-react';
import { ATS_MAPS_URL } from '../utils/whatsapp';

export default function Testimonials() {
  const placeholderFeedback = [
    {
      category: "Wedding Group Travel",
      route: "Haridwar to Delhi NCR",
      vehicle: "33 Seater Business Class Coach",
      text: "Customer feedback placeholder — Verified client review will be published here upon receipt. Guests appreciated on-time coordination and clean recliners."
    },
    {
      category: "Family Pilgrimage Tour",
      route: "Ayodhya & Varanasi Yatra",
      vehicle: "27 Seater Pushback AC Coach",
      text: "Customer feedback placeholder — Verified client review will be published here upon receipt. Highly satisfied with safe mountain driving and dual AC cooling."
    },
    {
      category: "Corporate Team Offsite",
      route: "Dehradun to Rishikesh Retreat",
      vehicle: "Executive Force Traveller (22 Seater)",
      text: "Customer feedback placeholder — Verified client review will be published here upon receipt. Punctual airport pickup, spacious boot space, and polite road captain."
    }
  ];

  return (
    <section className="py-14 sm:py-18 bg-gray-50/70 border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#FF7900] block mb-1">
            CLIENT EXPERIENCES
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-gray-900 tracking-tight mb-2">
            Customer Testimonials
          </h2>
          <p className="text-xs sm:text-sm text-gray-600">
            Authentic traveller feedback from wedding ceremonies, corporate outings, and sacred pilgrimage yatras.
          </p>
        </div>

        {/* 3 Placeholder Feedback Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {placeholderFeedback.map((item, index) => (
            <div
              key={index}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Category & Rating */}
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-orange-50 text-[10px] font-bold text-[#FF7900] uppercase tracking-wider">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Feedback Body */}
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed italic mb-4">
                  "{item.text}"
                </p>
              </div>

              {/* Author & Route Info */}
              <div className="pt-3 border-t border-gray-100">
                <div className="text-xs font-bold text-gray-900">
                  Verified Client Review
                </div>
                <div className="text-[11px] text-gray-500 mt-0.5">
                  Route: {item.route} • {item.vehicle}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Share Review / Google Maps Action Strip */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-gray-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-full bg-orange-50 border border-orange-100 text-[#FF7900] flex items-center justify-center shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-gray-900">
                Have You Travelled with Aarya Tourist Service?
              </h4>
              <p className="text-[11px] text-gray-500">
                Share your journey experience with fellow travellers on Google Maps.
              </p>
            </div>
          </div>

          <a
            href={ATS_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-orange-gradient px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl text-xs font-bold text-white flex items-center gap-1.5 shadow-sm shrink-0"
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Review Us on Google Maps</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

      </div>
    </section>
  );
}
