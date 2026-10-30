import React from 'react';
import { Camera, Maximize2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Gallery({ onOpenLightbox }) {
  const galleryItems = [
    {
      title: "Official Aarya Tourist Coach",
      subtitle: "27 Seater Pushback AC (UK07PA4509)",
      image: "/images/fleet/coach-27s-aarya-official.jpg",
      tag: "Official Coach"
    },
    {
      title: "Luxury Pushback Coach Interior",
      subtitle: "Executive 2x2 Recliners & LED Lighting",
      image: "/images/fleet/coach-27s-interior.jpg",
      tag: "Interior"
    },
    {
      title: "33 Seater Business Class Coach",
      subtitle: "Lime Yellow Luxury Coach (UK08 PA 5553)",
      image: "/images/fleet/coach-33s-yellow.jpg",
      tag: "Business Class"
    },
    {
      title: "53 Seater Semi Volvo Highway Coach",
      subtitle: "Air Suspension Touring Coach (AS01 UC -3546)",
      image: "/images/fleet/coach-53s-semi-volvo-gold.jpg",
      tag: "Semi Volvo"
    },
    {
      title: "Executive Force Traveller",
      subtitle: "17, 20 & 22 Seater (UK08PA-7772)",
      image: "/images/fleet/traveller-luxury-white.jpg",
      tag: "Traveller"
    },
    {
      title: "BharatBenz Luxury Highway Coach",
      subtitle: "Mountain Expressway Tour (UK08PA8881)",
      image: "/images/hero-bus-hd.jpg",
      tag: "BharatBenz"
    }
  ];

  return (
    <section className="py-14 sm:py-18 bg-white border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#FF7900] block mb-1">
              ACTUAL FLEET PHOTOS
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-gray-900 tracking-tight">
              Vehicle Gallery
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Genuine photographs of our exterior coaches and luxury pushback interiors.
            </p>
          </div>
          <Link
            to="/gallery"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF7900] hover:text-[#FF3D18] self-start sm:self-auto"
          >
            <span>View Full Gallery</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              onClick={() => onOpenLightbox && onOpenLightbox(item, index, galleryItems)}
              className="group relative rounded-2xl overflow-hidden bg-gray-100 border border-gray-100 shadow-sm hover:shadow-md cursor-pointer transition-all aspect-[4/3]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />

              {/* Tag Badge */}
              <div className="absolute top-3 left-3 z-10 px-2.5 py-0.5 rounded-full bg-white/95 text-[10px] font-bold text-gray-900 shadow-sm">
                {item.tag}
              </div>

              {/* Hover Dark Overlay with Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-between text-white">
                <div className="flex justify-end">
                  <span className="p-2 rounded-lg bg-black/50 backdrop-blur-sm text-white hover:bg-[#FF7900] transition-colors">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white leading-tight mb-0.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-300">
                    {item.subtitle}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
