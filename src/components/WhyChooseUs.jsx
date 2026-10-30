import React from 'react';
import { Armchair, UserCheck, ShieldCheck } from 'lucide-react';
import WhatsAppIcon from './icons/WhatsAppIcon';

export default function WhyChooseUs() {
  const benefits = [
    {
      title: "Comfortable & Spacious Vehicles",
      description: "Air-suspended tourist coaches with generous legroom, ergonomic pushback recliners, and dual-zone air conditioning.",
      icon: Armchair
    },
    {
      title: "Professional Drivers",
      description: "Courteous, verified road captains with deep expertise in highway navigation, tourist routes, and mountain terrain driving.",
      icon: UserCheck
    },
    {
      title: "Reliable Travel Service",
      description: "Strict on-time departures, transparent operations, and thoroughly inspected coaches with all valid tourist permits.",
      icon: ShieldCheck
    },
    {
      title: "Easy WhatsApp Booking",
      description: "Fast quotations, vehicle availability checks, and direct coordination over WhatsApp at +91 75005 91700.",
      icon: WhatsAppIcon
    }
  ];

  return (
    <section className="py-14 sm:py-18 bg-gray-50/70 border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#FF7900] block mb-1">
            WHY AARYA
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-gray-900 tracking-tight mb-2">
            Why Choose Us
          </h2>
          <p className="text-xs sm:text-sm text-gray-600">
            Dedicated to providing dependable, safe, and comfortable group travel on every journey.
          </p>
        </div>

        {/* 4 Compact Benefit Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-orange-200 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 text-[#FF7900] group-hover:bg-[#FF7900] group-hover:text-white flex items-center justify-center mb-4 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
