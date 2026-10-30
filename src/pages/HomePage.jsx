import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import WhatsAppIcon from '../components/icons/WhatsAppIcon';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import Destinations from '../components/Destinations';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import { createServiceEnquiryMessage, createVehicleEnquiryMessage, getWhatsAppUrl } from '../utils/whatsapp';

export default function HomePage({ onOpenLightbox }) {
  // 1. Four Main Fleet Categories
  const fleetCategories = [
    {
      name: "Luxury Traveller",
      capacity: "17, 20 & 22 Seater",
      regNo: "UK08PA-7772",
      description: "Executive Force Travellers for family tours, corporate offsites, and hill station travel.",
      image: "/images/fleet/traveller-luxury-white.jpg",
      tag: "17, 20 & 22 Seater"
    },
    {
      name: "33 Seater Business Class",
      capacity: "33 Seater AC Coach",
      regNo: "UK08 PA 5553",
      description: "Premium business class coach with executive 2x2 pushback recliners and dual AC.",
      image: "/images/fleet/coach-33s-yellow.jpg",
      tag: "Business Class 2x2"
    },
    {
      name: "27 Seater Luxury Bus",
      capacity: "27 Seater Pushback AC",
      regNo: "UK07PA4509",
      description: "Official Aarya Tourist Bus Service coach with clean white exterior and powerful AC.",
      image: "/images/fleet/coach-27s-uk08pa-0303-red.jpg",
      tag: "Pushback Coach"
    },
    {
      name: "Large Luxury Buses",
      capacity: "51, 53, 56 & 61 Seater",
      regNo: "AS01 UC -3546",
      description: "High-capacity Semi-Volvo coaches with air suspension for large wedding and pilgrim groups.",
      image: "/images/fleet/coach-53s-semi-volvo-gold.jpg",
      tag: "Semi Volvo / Deluxe"
    }
  ];

  // 3. Four Core Services
  const services = [
    {
      title: "Tourist Bus Rental",
      description: "Comfortable, air-conditioned coaches for intercity holiday tours, family sightseeing, and outstation packages.",
      image: "/images/fleet/coach-27s-aarya-official.jpg",
      alt: "Aarya Tourist Bus Rental Coach"
    },
    {
      title: "Wedding Transportation",
      description: "Punctual baraat convoys, guest hotel transfers, and luxury shuttles ensuring your celebrations run smoothly.",
      image: "/images/fleet/coach-33s-white-premium.jpg",
      alt: "Wedding Coach Transportation"
    },
    {
      title: "Corporate Travel",
      description: "Executive mobility for corporate conferences, team offsites, annual retreats, and business delegations.",
      image: "/images/fleet/coach-53s-semi-volvo-gold.jpg",
      alt: "Corporate Executive AC Coach"
    },
    {
      title: "Family & Group Tours",
      description: "Tailored chartered buses and tempo travellers for sacred pilgrimage yatras, hill station trips, and family holidays.",
      image: "/images/fleet/traveller-luxury-white.jpg",
      alt: "Family Group Travel in Force Traveller"
    }
  ];

  return (
    <div>
      {/* Hero Section – Preserved exactly as requested */}
      <Hero />

      {/* ======================================================== */}
      {/* 1. OUR FLEET (White Background)                          */}
      {/* ======================================================== */}
      <section className="py-14 sm:py-18 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#FF7900] block mb-1">
                OUR FLEET
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-gray-900 tracking-tight">
                Verified Vehicle Categories
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Actual photographs of our tourist buses and tempo travellers.
              </p>
            </div>
            <Link
              to="/fleet"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-50 text-xs font-bold text-[#FF7900] hover:bg-orange-100 transition-colors shadow-sm self-start sm:self-auto"
            >
              <span>View Complete Fleet</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 4 Vehicle Category Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {fleetCategories.map((vehicle, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Photo */}
                  <div className="relative h-44 w-full overflow-hidden bg-gray-100">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-white/95 text-[10px] font-bold text-gray-900 shadow-sm">
                      {vehicle.regNo}
                    </div>
                    <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded bg-orange-500/90 text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                      {vehicle.tag}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-4">
                    <h3 className="text-base font-bold text-gray-900 leading-tight mb-1">
                      {vehicle.name}
                    </h3>
                    <div className="text-xs font-semibold text-[#FF7900] mb-2">
                      {vehicle.capacity}
                    </div>
                    <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                      {vehicle.description}
                    </p>
                  </div>
                </div>

                {/* Actions: View Fleet & Enquire Now */}
                <div className="p-4 pt-0 flex items-center gap-2">
                  <Link
                    to="/fleet"
                    className="flex-1 py-2 px-2.5 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-700 text-xs font-semibold text-center transition-colors border border-gray-100"
                  >
                    View Details
                  </Link>
                  <a
                    href={getWhatsAppUrl(createVehicleEnquiryMessage(`${vehicle.name} (${vehicle.capacity})`))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-2.5 rounded-xl btn-orange-gradient text-white text-xs font-bold text-center flex items-center justify-center gap-1 shadow-sm hover:brightness-105 transition-all"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5" fill="white" />
                    <span>Enquire</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. WHY CHOOSE US (Light Grey Background)                 */}
      {/* ======================================================== */}
      <WhyChooseUs />

      {/* ======================================================== */}
      {/* 3. OUR SERVICES (White Background)                       */}
      {/* ======================================================== */}
      <section className="py-14 sm:py-18 bg-white border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#FF7900] block mb-1">
                OUR SERVICES
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-gray-900 tracking-tight">
                Transportation for Every Occasion
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Reliable travel solutions tailored for group mobility and outstation tours.
              </p>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF7900] hover:text-[#FF3D18] self-start sm:self-auto"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 4 Visually Attractive Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-44 w-full overflow-hidden bg-gray-100">
                    <img
                      src={service.image}
                      alt={service.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 sm:p-5">
                    <h3 className="text-base font-bold text-gray-900 mb-1.5 leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="p-4 sm:p-5 pt-0">
                  <a
                    href={getWhatsAppUrl(createServiceEnquiryMessage(service.title))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF7900] hover:text-[#FF3D18]"
                  >
                    <span>Enquire on WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. POPULAR DESTINATIONS (Light Grey Background)          */}
      {/* ======================================================== */}
      <Destinations />

      {/* ======================================================== */}
      {/* 5. GALLERY (White Background)                            */}
      {/* ======================================================== */}
      <Gallery onOpenLightbox={onOpenLightbox} />

      {/* ======================================================== */}
      {/* 6. CUSTOMER TESTIMONIALS (Light Grey Background)         */}
      {/* ======================================================== */}
      <Testimonials />

    </div>
  );
}
