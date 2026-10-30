import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, Armchair, UserCheck, MessageSquare, 
  Clock, Compass, Sparkles, HeartHandshake, CheckCircle2 
} from 'lucide-react';
import WhatsAppIcon from '../components/icons/WhatsAppIcon';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function AboutPage() {
  const pillars = [
    {
      title: "Comfortable Travel",
      description: "Ergonomically designed recliners, air-suspension ride quality, and effective climate control for relaxed travel across any distance.",
      icon: Armchair
    },
    {
      title: "Professional Chauffeurs",
      description: "Experienced, verified highway drivers with in-depth knowledge of intercity expressways, tourist circuits, and hill terrains.",
      icon: UserCheck
    },
    {
      title: "Well-Maintained Coaches",
      description: "Sanitized interiors, scheduled mechanical upkeep, and regular safety inspections prior to every road departure.",
      icon: ShieldCheck
    },
    {
      title: "Flexible Travel Options",
      description: "Customized boarding points, flexible stopovers, and tailored group schedules for weddings, corporate tours, and family holidays.",
      icon: Compass
    },
    {
      title: "Customer-First Service",
      description: "Transparent tariff discussions, polite communication, and attentive coordination before and throughout your journey.",
      icon: HeartHandshake
    },
    {
      title: "Simple Booking",
      description: "Instant assistance over WhatsApp or phone with fast quotations and clear reservation processes.",
      icon: MessageSquare
    }
  ];

  return (
    <div className="pt-20 sm:pt-24 bg-white">
      
      {/* Page Header Banner */}
      <div className="bg-gray-900 text-white py-16 sm:py-20 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF7900] block mb-2">
            Aarya Tourist Service
          </span>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight mb-4">
            About Our Company
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto font-normal">
            Dedicated to providing dependable, premium tourist bus rentals and group transportation across India with a focus on passenger comfort and peace of mind.
          </p>
        </div>
      </div>

      {/* Story & Philosophy */}
      <section className="py-16 sm:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF7900] block">
                Brand Philosophy
              </span>
              <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-gray-900 tracking-tight leading-tight">
                Your Journey, Our Responsibility.
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                At <strong className="text-gray-900 font-semibold">AARYA TOURIST SERVICE</strong>, we believe every group journey should be an enjoyable experience from the moment you board until you reach your destination. Whether you are traveling for a sacred pilgrimage, organizing a multi-day corporate conference, or coordinating conveyance for a wedding, our coaches are prepared to deliver maximum comfort.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                We take pride in our well-kept fleet of Volvo coaches, deluxe AC buses, and Force Travellers, paired with courteous chauffeurs who respect your itinerary and passenger safety.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  to="/fleet"
                  className="btn-orange-gradient px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider"
                >
                  Explore Our Fleet
                </Link>
                <Link
                  to="/contact"
                  className="px-6 py-2.5 rounded-xl border border-gray-300 hover:border-gray-400 text-gray-800 text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Contact Our Team
                </Link>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <img
                src="/images/hero-bus-hd.jpg"
                alt="Aarya Tourist Service Luxury Coach"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <span className="text-xs uppercase text-orange-400 font-bold block mb-1">
                  Fleet Standards
                </span>
                <p className="text-sm font-semibold">
                  Meticulously maintained and sanitized prior to every departure.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Six Pillars of Excellence */}
      <section className="py-16 sm:py-20 bg-gray-50/70 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF7900] block mb-2">
              Our Core Strengths
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-gray-900">
              Why Travellers Rely on Aarya
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#FF7900] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Commitment Strip */}
      <section className="py-14 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-base text-gray-700 italic mb-6">
            &ldquo;Every seat booked with AARYA TOURIST SERVICE represents our personal commitment to punctual, respectful, and safe transportation.&rdquo;
          </p>
          <a
            href={getWhatsAppUrl("Hello Aarya Tourist Service, I would like to enquire about bus rental.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-orange-gradient px-7 py-3 rounded-xl text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2"
          >
            <WhatsAppIcon className="w-4 h-4 fill-white" />
            <span>Talk With Our Team on WhatsApp</span>
          </a>
        </div>
      </section>

    </div>
  );
}

