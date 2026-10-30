import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import WhatsAppIcon from '../components/icons/WhatsAppIcon';
import { createServiceEnquiryMessage, getWhatsAppUrl } from '../utils/whatsapp';

export default function ServicesPage() {
  const servicesList = [
    {
      id: "tourist-bus-rental",
      title: "Tourist Bus Rental",
      tagline: "Comfortable group journeys across India",
      description: "Charter our premium Volvo, deluxe AC tourist coaches, and mini buses for seamless intercity trips, heritage tours, and outstation holiday expeditions.",
      image: "/images/hero-bus-hd.jpg",
      highlights: [
        "Plush pushback recliners with generous leg space",
        "High-capacity climate controlled air conditioning",
        "Spacious luggage boots for group baggage",
        "Chauffeured by vetted highway road captains"
      ]
    },
    {
      id: "wedding-transportation",
      title: "Wedding Transportation",
      tagline: "Reliable guest shuttles & Baraat convoys",
      description: "Make your wedding logistics effortless. We coordinate luxury coach transfers for wedding guests from airports, railway stations, hotels, and marriage venues.",
      image: "/images/fleet/coach-33s-white-premium.jpg",
      highlights: [
        "Dedicated guest shuttles between hotels & venues",
        "Baraat procession coach management",
        "Punctual pick-ups and late-night return transfers",
        "Neat, sanitized, and decorated bus support"
      ]
    },
    {
      id: "corporate-transportation",
      title: "Corporate Transportation",
      tagline: "Punctual group transit for businesses",
      description: "Dependable transportation solutions for corporate offsites, annual conferences, business delegations, team-building trips, and industrial plant visits.",
      image: "/images/fleet/coach-53s-semi-volvo-gold.jpg",
      highlights: [
        "Strict adherence to event timelines",
        "Professional chauffeurs in uniform",
        "Executive seating with quiet cabin acoustics",
        "Consolidated GST invoicing support"
      ]
    },
    {
      id: "family-group-tours",
      title: "Family & Group Tours",
      tagline: "Togetherness on the road without stress",
      description: "Travel together without the fatigue of driving multiple cars. Enjoy the freedom of customized rest stops, panoramic highway views, and relaxed family moments.",
      image: "/images/fleet/traveller-luxury-white.jpg",
      highlights: [
        "Tailored rest stops for meals & tea",
        "Safe and comfortable travel for seniors & children",
        "Ideal for 12 to 50+ passenger groups",
        "Flexible daily itineraries"
      ]
    },
    {
      id: "religious-pilgrimage-tours",
      title: "Religious & Pilgrimage Yatras",
      tagline: "Devotional journeys with peace of mind",
      description: "Dedicated charters for sacred pilgrimage circuits including Ayodhya Dham, Varanasi Kashi Vishwanath, Prayagraj Sangam, Mathura, Vrindavan, and Haridwar.",
      image: "/images/fleet/coach-27s-aarya-official.jpg",
      highlights: [
        "Easy boarding assistance for elderly devotees",
        "Coordinated stops according to temple darshan timings",
        "Clean, peaceful, and smoke-free vehicle cabins",
        "Experienced drivers familiar with temple routes"
      ]
    },
    {
      id: "outstation-airport-transfers",
      title: "Outstation & Airport Transfers",
      tagline: "Coordinated terminal pickups & drop-offs",
      description: "Punctual group pick-ups and drop-offs to international and domestic airports, railway terminals, and intercity destinations across state lines.",
      image: "/images/fleet/coach-33s-yellow.jpg",
      highlights: [
        "Ample luggage space for heavy travel bags",
        "Flight tracking and scheduled coordination",
        "Direct curb pickups for large delegations",
        "All-India permits for inter-state travel"
      ]
    }
  ];

  return (
    <div className="pt-20 sm:pt-24 bg-white">
      
      {/* Banner */}
      <div className="bg-gray-900 text-white py-16 sm:py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF7900] block mb-2">
            Aarya Tourist Service
          </span>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight mb-4">
            Our Services
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto font-normal">
            Comprehensive tourist transportation solutions tailored to your travel plans, passenger count, and itinerary.
          </p>
        </div>
      </div>

      {/* Services List */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
          
          {servicesList.map((service, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={`lg:col-span-6 ${isReversed ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-md border border-gray-100 bg-gray-100 h-72 sm:h-80">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`lg:col-span-6 space-y-4 ${isReversed ? 'lg:order-1' : ''}`}>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FF7900] block">
                    {service.tagline}
                  </span>
                  
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-gray-900">
                    {service.title}
                  </h2>
                  
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="pt-2 space-y-2">
                    {service.highlights.map((item, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-700">
                        <Check className="w-4 h-4 text-[#FF7900] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <a
                      href={getWhatsAppUrl(createServiceEnquiryMessage(service.title))}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-orange-gradient px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2"
                    >
                      <WhatsAppIcon className="w-4 h-4" fill="white" />
                      <span>Enquire for {service.title}</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </section>

    </div>
  );
}

