import React from 'react';
import { ArrowRight } from 'lucide-react';
import { createServiceEnquiryMessage, getWhatsAppUrl } from '../utils/whatsapp';

export default function Services() {
  const services = [
    {
      title: "Tourist Bus Rental",
      description: "Comfortable and spacious tourist coaches for intercity sightseeing and long-distance outstation journeys.",
      image: "/images/hero-bus-hd.jpg",
      alt: "Aarya Tourist Service Luxury Coach"
    },
    {
      title: "Wedding Transportation",
      description: "Reliable and coordinated guest conveyance, hotel shuttles, and baraat transport for your special celebrations.",
      image: "/images/fleet/coach-33s-white-premium.jpg",
      alt: "Aarya Tourist 33 Seater Premium Wedding Coach"
    },
    {
      title: "Corporate Travel",
      description: "Punctual executive coaches for company retreats, conferences, employee outings, and factory visits.",
      image: "/images/fleet/coach-53s-semi-volvo-gold.jpg",
      alt: "Aarya Tourist 53 Seater Executive Travel Coach"
    },
    {
      title: "Family & Group Tours",
      description: "Hassle-free group holiday travel across heritage circuits, pilgrimage destinations, and hill stations.",
      image: "/images/fleet/traveller-luxury-white.jpg",
      alt: "Aarya Tourist Luxury Force Traveller"
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF7900] block mb-2">
            What We Offer
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-gray-900 tracking-tight mb-3">
            Our Services
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Tailored transportation solutions for every group size and occasion.
          </p>
        </div>

        {/* 4 Clean Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <a
                  href={getWhatsAppUrl(createServiceEnquiryMessage(service.title))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF7900] hover:text-[#FF3D18] transition-colors"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
