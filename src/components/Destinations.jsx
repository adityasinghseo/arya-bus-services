import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl, createDestinationEnquiryMessage } from '../utils/whatsapp';

export default function Destinations() {
  const destinations = [
    {
      id: "haridwar",
      name: "Haridwar",
      state: "Uttarakhand",
      category: "Spiritual Yatra",
      description: "Sacred gateway to the Himalayas. Experience evening Ganga Aarti at Har Ki Pauri and holy temple circuits.",
      image: "/images/destinations/haridwar.jpg"
    },
    {
      id: "rishikesh",
      name: "Rishikesh",
      state: "Uttarakhand",
      category: "Yoga & Adventure",
      description: "The Yoga capital of the world. Scenic Himalayan foothills, river rafting, Ram Jhula, and peaceful ashrams.",
      image: "/images/destinations/rishikesh.jpg"
    },
    {
      id: "ayodhya",
      name: "Ayodhya",
      state: "Uttar Pradesh",
      category: "Pilgrimage",
      description: "Eternal city of Lord Rama. Visit the magnificent Shri Ram Janmabhoomi Mandir, Hanuman Garhi, and Saryu Ghat.",
      image: "/images/destinations/ayodhya.jpg"
    },
    {
      id: "mussoorie",
      name: "Mussoorie",
      state: "Uttarakhand",
      category: "Hill Station",
      description: "The Queen of the Hills. Spectacular mountain views, cool pine breeze, Kempty Falls, and scenic Mall Road walks.",
      image: "/images/destinations/mussoorie.jpg"
    },
    {
      id: "nainital",
      name: "Nainital",
      state: "Uttarakhand",
      category: "Lake District",
      description: "The iconic City of Lakes. Enjoy tranquil boat rides on Naini Lake, Naina Devi Temple, and snow-capped viewpoints.",
      image: "/images/destinations/nainital.jpg"
    }
  ];

  return (
    <section className="py-14 sm:py-18 bg-gray-50/70 border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#FF7900] block mb-1">
              TRAVEL ROUTES
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-gray-900 tracking-tight">
              Popular Destinations
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Top pilgrimage yatras, heritage circuits, and scenic hill station tours.
            </p>
          </div>
          <a
            href={getWhatsAppUrl("Hello Aarya Tourist Service, I would like to enquire about bus travel to popular destinations.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF7900] hover:text-[#FF3D18] self-start sm:self-auto"
          >
            <span>Custom Route Enquiry</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 5 Destination Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5">
          {destinations.map((dest) => (
            <div
              key={dest.id}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Real Destination Photo */}
                <div className="relative h-44 sm:h-40 w-full overflow-hidden bg-gray-100">
                  <img
                    src={dest.image}
                    alt={`${dest.name}, ${dest.state}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-white/95 text-[10px] font-bold text-gray-900 shadow-sm">
                    {dest.category}
                  </div>

                  {/* Destination Name Overlay */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                    <div className="flex items-center gap-1 text-[11px] font-semibold text-orange-300">
                      <MapPin className="w-3 h-3 text-[#FF7900]" />
                      <span>{dest.state}</span>
                    </div>
                    <h3 className="text-base font-bold text-white drop-shadow leading-tight">
                      {dest.name}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-3.5">
                  <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
                    {dest.description}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-3.5 pt-0">
                <a
                  href={getWhatsAppUrl(createDestinationEnquiryMessage(dest.name))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded-xl bg-orange-50 hover:bg-orange-100 text-[#FF7900] text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Enquire Tour</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
