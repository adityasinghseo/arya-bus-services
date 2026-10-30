import React, { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import WhatsAppIcon from '../components/icons/WhatsAppIcon';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function GalleryPage({ onOpenLightbox }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const galleryItems = [
    {
      id: 1,
      title: "Official Aarya Tourist Coach",
      category: "fleet",
      categoryLabel: "Our Fleet",
      image: "/images/fleet/coach-27s-aarya-official.jpg",
      caption: "Official Aarya Tourist Bus Service 27 seater pushback coach (UK07PA4509)."
    },
    {
      id: 2,
      title: "Luxury Pushback Coach Interior",
      category: "interior",
      categoryLabel: "Interiors",
      image: "/images/fleet/coach-27s-interior.jpg",
      caption: "Plush 2x2 executive pushback recliners, wide legroom, and ambient lighting."
    },
    {
      id: 3,
      title: "33 Seater Business Class Coach",
      category: "fleet",
      categoryLabel: "Our Fleet",
      image: "/images/fleet/coach-33s-yellow.jpg",
      caption: "Executive 33 seater luxury coach (UK08 PA 5553) with dual air-conditioning."
    },
    {
      id: 4,
      title: "BharatBenz Luxury Highway Coach",
      category: "fleet",
      categoryLabel: "Our Fleet",
      image: "/images/hero-bus-hd.jpg",
      caption: "Aarya Tourist Service BharatBenz luxury touring coach (UK08PA8881)."
    },
    {
      id: 5,
      title: "53 Seater 2*2 Semi Volvo Coach",
      category: "fleet",
      categoryLabel: "Our Fleet",
      image: "/images/fleet/coach-53s-semi-volvo-gold.jpg",
      caption: "High-capacity Semi Volvo tourist coach (AS01 UC -3546) with air suspension."
    },
    {
      id: 6,
      title: "Executive Force Traveller",
      category: "fleet",
      categoryLabel: "Our Fleet",
      image: "/images/fleet/traveller-luxury-white.jpg",
      caption: "Clean, air-conditioned 17, 20 & 22 seater Force Traveller (UK08PA-7772)."
    },
    {
      id: 7,
      title: "33 Seater Pushback AC Coach",
      category: "fleet",
      categoryLabel: "Our Fleet",
      image: "/images/fleet/coach-33s-white-premium.jpg",
      caption: "White business class coach (UK08 PA 8883) for corporate and wedding travel."
    },
    {
      id: 8,
      title: "27 Seater Pushback Coach",
      category: "fleet",
      categoryLabel: "Our Fleet",
      image: "/images/fleet/coach-27s-uk08pa-0303-red.jpg",
      caption: "27 seater pushback coach (UK08 PA 0303) for family and hill station trips."
    },
    {
      id: 9,
      title: "51 Seater AC Deluxe Coach",
      category: "fleet",
      categoryLabel: "Our Fleet",
      image: "/images/fleet/coach-51s-aarya-yellow.jpg",
      caption: "Aarya 51 seater AC deluxe coach (UK08PA 5051) for large tour groups."
    },
    {
      id: 10,
      title: "Haridwar - Har Ki Pauri Ganga Aarti",
      category: "destinations",
      categoryLabel: "Destinations",
      image: "/images/destinations/haridwar.jpg",
      caption: "Sacred gateway to Uttarakhand and evening Ganga Aarti at Har Ki Pauri."
    },
    {
      id: 11,
      title: "Rishikesh - Trayambakeshwar & River Ganga",
      category: "destinations",
      categoryLabel: "Destinations",
      image: "/images/destinations/rishikesh.jpg",
      caption: "Himalayan foothills, Ram Jhula, and scenic spiritual destinations."
    },
    {
      id: 12,
      title: "Ayodhya Dham - Shri Ram Janmabhoomi",
      category: "destinations",
      categoryLabel: "Destinations",
      image: "/images/destinations/ayodhya.jpg",
      caption: "Divine pilgrimage yatra to Shri Ram Janmabhoomi Mandir and Saryu Ghat."
    },
    {
      id: 13,
      title: "Mussoorie - Queen of the Hills",
      category: "destinations",
      categoryLabel: "Destinations",
      image: "/images/destinations/mussoorie.jpg",
      caption: "Breathtaking mountain views and hill station tours in Uttarakhand."
    },
    {
      id: 14,
      title: "Nainital - Naini Lake & Hills",
      category: "destinations",
      categoryLabel: "Destinations",
      image: "/images/destinations/nainital.jpg",
      caption: "Tranquil lake boating and scenic Kumaon hill station tours."
    },
    {
      id: 15,
      title: "Agra - Taj Mahal Heritage Route",
      category: "destinations",
      categoryLabel: "Destinations",
      image: "/images/destinations/agra.jpg",
      caption: "Golden Triangle and heritage monuments via Yamuna Expressway."
    }
  ];

  const categories = [
    { key: 'all', label: 'All Photos' },
    { key: 'fleet', label: 'Our Coaches' },
    { key: 'interior', label: 'Coach Interiors' },
    { key: 'destinations', label: 'Travel Destinations' }
  ];

  const filteredItems = galleryItems.filter(item => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <div className="pt-20 sm:pt-24 bg-white">
      
      {/* Banner */}
      <div className="bg-gray-900 text-white py-14 sm:py-18 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#FF7900] block mb-1.5">
            AARYA TOURIST SERVICE
          </span>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight mb-3">
            Vehicle & Tour Gallery
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto font-normal">
            Actual photographs of our verified tourist coaches, luxury pushback interiors, and scenic destinations across India.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-7">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === cat.key
                    ? 'btn-orange-gradient text-white shadow-md'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* Gallery Grid */}
      <section className="py-14 sm:py-18 bg-gray-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => onOpenLightbox && onOpenLightbox(item, index, filteredItems)}
                className="group relative rounded-2xl overflow-hidden bg-white border border-gray-200/80 shadow-sm hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between"
              >
                <div className="relative h-60 w-full overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/95 text-[10px] font-bold uppercase tracking-wider text-gray-900 shadow-sm">
                    {item.categoryLabel}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex items-end justify-between">
                    <span className="text-xs text-white font-medium flex items-center gap-1.5">
                      <Maximize2 className="w-4 h-4 text-[#FF7900]" />
                      <span>Click to Enlarge</span>
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-base font-bold text-gray-900 mb-1 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-600 line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom WhatsApp CTA */}
          <div className="mt-12 text-center p-6 rounded-2xl bg-white border border-gray-100 shadow-sm max-w-xl mx-auto">
            <h4 className="text-sm font-bold text-gray-900 mb-1">
              Want to Book a Bus from Our Gallery?
            </h4>
            <p className="text-xs text-gray-500 mb-4">
              Send us the vehicle name or photograph on WhatsApp to check date availability and get an instant quote.
            </p>
            <a
              href={getWhatsAppUrl("Hello Aarya Tourist Service, I saw your vehicle gallery and would like to enquire about bus availability.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-orange-gradient px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4" fill="white" />
              <span>Enquire on WhatsApp</span>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
