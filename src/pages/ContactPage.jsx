import React, { useState } from 'react';
import { Phone, MapPin, Send, ExternalLink, Clock, ShieldCheck } from 'lucide-react';
import InstagramIcon from '../components/icons/InstagramIcon';
import WhatsAppIcon from '../components/icons/WhatsAppIcon';
import { 
  ATS_DISPLAY_PHONE, ATS_PHONE, ATS_MAPS_URL, 
  ATS_INSTAGRAM_URL, getWhatsAppUrl, createBookingEnquiryMessage 
} from '../utils/whatsapp';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    pickup: '',
    destination: '',
    travelDate: '',
    returnDate: '',
    passengers: '10-25',
    vehiclePreference: 'Volvo Luxury Coach',
    tripType: 'Round Trip',
    requirements: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;

    const message = createBookingEnquiryMessage(formData);
    window.open(getWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="pt-20 sm:pt-24 bg-white">
      
      {/* Banner */}
      <div className="bg-gray-900 text-white py-16 sm:py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF7900] block mb-2">
            Aarya Tourist Service
          </span>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight mb-4">
            Contact Us
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto font-normal">
            Reach out for coach availability, custom quotations, and seamless booking assistance.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 sm:py-20 bg-gray-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Column: Direct Links & Business Profile */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* WhatsApp Card */}
              <div className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-sm">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <WhatsAppIcon className="w-6 h-6 fill-white" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
                      WhatsApp & Mobile
                    </span>
                    <a
                      href={getWhatsAppUrl("Hello Aarya Tourist Service, I would like to inquire about booking.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-bold text-gray-900 hover:text-emerald-600 block"
                    >
                      {ATS_DISPLAY_PHONE}
                    </a>
                  </div>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  Chat directly with our transport coordinator for instant quotation and coach availability.
                </p>
                <a
                  href={getWhatsAppUrl("Hello Aarya Tourist Service, I would like to inquire about booking.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-orange-gradient py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Instagram Card */}
              <div className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-sm">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 text-white flex items-center justify-center shrink-0">
                    <InstagramIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500">
                      Instagram Official
                    </span>
                    <a
                      href={ATS_INSTAGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-gray-900 hover:text-pink-600 block"
                    >
                      @arya_tourist_service
                    </a>
                  </div>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  Follow our travel journeys, highway reels, and latest vehicle fleet additions.
                </p>
                <a
                  href={ATS_INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF7900] hover:text-[#FF3D18]"
                >
                  <span>Visit Instagram Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Google Maps Profile Card */}
              <div className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-sm">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-[#FF7900] text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500">
                      Google Maps Location
                    </span>
                    <div className="text-base font-bold text-gray-900">
                      Aarya Tourist Service
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  View our verified business listing, GPS location pin, and directions on Google Maps.
                </p>
                <a
                  href={ATS_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF7900] hover:text-[#FF3D18]"
                >
                  <span>Open in Google Maps App</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

            {/* Right Column: Full Booking Enquiry Form */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-gray-200/80 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Plan Your Journey With Us
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-6">
                Fill the details below to receive a customized quote directly on WhatsApp from our transport desk.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Ramesh Sharma"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#FF7900]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-gray-700 mb-1">
                      Mobile Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#FF7900]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-gray-700 mb-1">
                      Pickup Location
                    </label>
                    <input
                      type="text"
                      value={formData.pickup}
                      onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                      placeholder="e.g. Delhi / Lucknow"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#FF7900]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-gray-700 mb-1">
                      Destination
                    </label>
                    <input
                      type="text"
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      placeholder="e.g. Ayodhya / Manali"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#FF7900]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-gray-700 mb-1">
                      Travel Date
                    </label>
                    <input
                      type="date"
                      value={formData.travelDate}
                      onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#FF7900]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-gray-700 mb-1">
                      Trip Type
                    </label>
                    <select
                      value={formData.tripType}
                      onChange={(e) => setFormData({ ...formData, tripType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#FF7900]"
                    >
                      <option value="Round Trip">Round Trip</option>
                      <option value="One Way">One Way</option>
                      <option value="Multiple Days Package">Multiple Days Package</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-gray-700 mb-1">
                      Vehicle Preference
                    </label>
                    <select
                      value={formData.vehiclePreference}
                      onChange={(e) => setFormData({ ...formData, vehiclePreference: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#FF7900]"
                    >
                      <option value="Volvo Luxury Coach">Volvo Luxury Coach</option>
                      <option value="AC Sleeper Coach">AC Sleeper Coach</option>
                      <option value="Deluxe AC Seater Bus">Deluxe AC Seater Bus</option>
                      <option value="Force Urbania Luxury Van">Force Urbania Luxury Van</option>
                      <option value="Force Tempo Traveller">Force Tempo Traveller</option>
                      <option value="Mini Tourist Bus">Mini Tourist Bus</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-gray-700 mb-1">
                      Number of Passengers
                    </label>
                    <select
                      value={formData.passengers}
                      onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#FF7900]"
                    >
                      <option value="1 - 12 Passengers">1 - 12 Passengers (Van / Traveller)</option>
                      <option value="13 - 17 Passengers">13 - 17 Passengers (Traveller / Urbania)</option>
                      <option value="18 - 26 Passengers">18 - 26 Passengers (Mini Bus)</option>
                      <option value="27 - 35 Passengers">27 - 35 Passengers (Deluxe Bus)</option>
                      <option value="36 - 45 Passengers">36 - 45 Passengers (Luxury Coach)</option>
                      <option value="46 - 55 Passengers">46 - 55 Passengers (Volvo Multi-Axle)</option>
                      <option value="55+ Passengers">55+ Passengers (Multiple Coaches)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-700 mb-1">
                    Additional Requirements
                  </label>
                  <textarea
                    rows={3}
                    value={formData.requirements}
                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                    placeholder="Wedding baraat, senior citizen group, luggage needs, special route stops..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#FF7900] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-orange-gradient py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  <span>Get Best Quote on WhatsApp</span>
                  <Send className="w-3.5 h-3.5" />
                </button>

              </form>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

