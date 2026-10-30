import React, { useState } from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import WhatsAppIcon from '../components/icons/WhatsAppIcon';
import { destinationsData } from '../data/destinationsData';
import { createDestinationEnquiryMessage, getWhatsAppUrl } from '../utils/whatsapp';

export default function TourTravelPage() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Pilgrimage', 'Heritage', 'Hill Station', 'Scenic & Spiritual'];

  const filteredDestinations = destinationsData.filter((dest) => {
    if (filter === 'All') return true;
    return dest.category.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div className="pt-20 sm:pt-24 bg-white">
      
      {/* Banner */}
      <div className="bg-gray-900 text-white py-16 sm:py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF7900] block mb-2">
            Aarya Tourist Service
          </span>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight mb-4">
            Tour & Travel Destinations
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto font-normal">
            Custom point-to-point group charters and tour packages to India's most celebrated sacred shrines, heritage cities, and mountain retreats.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
                  filter === cat
                    ? 'btn-orange-gradient text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* Destinations Grid */}
      <section className="py-16 sm:py-20 bg-gray-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((dest) => (
              <div
                key={dest.id}
                className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-52 w-full overflow-hidden bg-gray-100">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-white/95 text-[10px] font-bold uppercase tracking-wider text-gray-800 shadow-sm">
                      {dest.category}
                    </div>
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-black/60 text-[10px] font-semibold text-white backdrop-blur-sm">
                      {dest.state}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-1.5 text-xs text-[#FF7900] font-semibold mb-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>Suggested Destination</span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {dest.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                      {dest.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {dest.tags.map((tag, i) => (
                        <span key={i} className="text-[10px] font-medium px-2 py-0.5 rounded bg-gray-100 text-gray-700">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="text-[11px] text-gray-500 pt-3 border-t border-gray-100">
                      <span className="font-semibold text-gray-700">Recommended Vehicle:</span> {dest.popularVehicle}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <a
                    href={getWhatsAppUrl(createDestinationEnquiryMessage(dest.name))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full btn-orange-gradient py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5" fill="white" />
                    <span>Enquire for This Tour</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center text-xs text-gray-500 max-w-xl mx-auto">
            * We design customized itineraries, flexible pick-up schedules, and round-trip routes across all North Indian and Central Indian travel destinations.
          </div>

        </div>
      </section>

    </div>
  );
}

