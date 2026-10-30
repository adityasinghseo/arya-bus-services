import React, { useState } from 'react';
import { 
  User, Phone, MapPin, Calendar, Users, Bus, 
  ChevronDown, ArrowRight, Camera
} from 'lucide-react';
import WhatsAppIcon from './icons/WhatsAppIcon';
import { ATS_DISPLAY_PHONE, ATS_PHONE, getWhatsAppUrl } from '../utils/whatsapp';

export default function Hero() {
  // Right Side Compact Fast Enquiry Form State
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    pickup: '',
    destination: '',
    journeyDate: '',
    passengers: '',
    vehicleCategory: '33 Seater Business Class Coach'
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Mobile Number is required';
    } else if (!/^[0-9+ -]{10,14}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Enter valid 10-digit mobile';
    }
    if (!formData.pickup.trim()) newErrors.pickup = 'Pickup is required';
    if (!formData.destination.trim()) newErrors.destination = 'Destination is required';
    if (!formData.journeyDate) newErrors.journeyDate = 'Date is required';
    if (!formData.passengers.trim()) newErrors.passengers = 'Passengers required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    let msg = `*NEW BOOKING ENQUIRY - AARYA TOURIST SERVICE*\n\n`;
    msg += `👤 *Full Name:* ${formData.fullName.trim()}\n`;
    msg += `📞 *Mobile Number:* ${formData.phone.trim()}\n`;
    msg += `📍 *Pickup Location:* ${formData.pickup.trim()}\n`;
    msg += `🏁 *Destination:* ${formData.destination.trim()}\n`;
    msg += `📅 *Journey Date:* ${formData.journeyDate}\n`;
    msg += `👥 *Number of Passengers:* ${formData.passengers.trim()}\n`;
    msg += `🚌 *Vehicle Category:* ${formData.vehicleCategory}\n`;
    msg += `\n_Please share vehicle availability, allotment and best quotation._`;

    const whatsappUrl = getWhatsAppUrl(msg);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="pt-16 sm:pt-18 lg:pt-18 pb-5 sm:pb-6 bg-[#FAFAFC] overflow-hidden">
      
      {/* ========================================================================= */}
      {/* HERO SECTION: Left Bus Image touches screen left edge; Form overlaps on right */}
      {/* ========================================================================= */}
      <div className="w-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          
          {/* ===================================================================== */}
          {/* 1. LEFT BUS IMAGE: Extends edge-to-edge from left browser boundary    */}
          {/* ===================================================================== */}
          <div className="lg:col-span-7 xl:col-span-8 relative h-[310px] sm:h-[390px] lg:h-[475px] xl:h-[485px] w-full overflow-hidden rounded-b-2xl sm:rounded-b-3xl lg:rounded-b-none lg:rounded-r-[32px] xl:rounded-r-[38px] shadow-lg">
            
            {/* Real HD Bus Photograph – High quality, no slider, no badge */}
            <img
              src="/images/hero-bus-hd.jpg"
              alt="AARYA TOURIST SERVICE BharatBenz Luxury Bus"
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
            
            {/* Dark gradient overlay for bottom-left text visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />

            {/* Heading & Supporting Text Over Lower-Left of Bus Image (Moved slightly up & single line on desktop) */}
            <div className="absolute bottom-8 sm:bottom-10 lg:bottom-12 xl:bottom-14 left-5 sm:left-8 lg:left-12 xl:left-16 right-5 z-10">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] xl:text-[34px] font-display font-extrabold text-white leading-[1.18] mb-1.5 drop-shadow-md">
                Every Journey,<br />
                <span className="text-[#FF7900]">
                  A Better Experience
                </span>
              </h1>
              
              {/* Supporting text stays on a single line on desktop */}
              <p className="text-xs sm:text-sm lg:text-[13.5px] text-gray-200/95 font-medium whitespace-normal lg:whitespace-nowrap drop-shadow">
                Comfortable buses for family trips, weddings and group travel.
              </p>
            </div>

          </div>

          {/* ===================================================================== */}
          {/* 2. RIGHT ENQUIRY FORM: Slightly moved left for a natural image overlap */}
          {/* ===================================================================== */}
          <div className="lg:col-span-5 xl:col-span-4 lg:-ml-20 xl:-ml-28 z-20 px-3.5 sm:px-6 lg:px-0 lg:pr-6 xl:pr-10 mt-3.5 sm:mt-4 lg:mt-0">
            <div className="bg-white rounded-[24px] sm:rounded-[28px] border border-gray-100 shadow-2xl shadow-gray-200/70 p-4 sm:p-5 lg:p-5 flex flex-col justify-between max-w-lg mx-auto lg:max-w-none">
              
              {/* Form Title & Subtitle */}
              <div>
                <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest text-[#FF7900] block mb-0.5">
                  FAST ENQUIRY
                </span>
                <h2 className="text-xl sm:text-2xl font-display font-extrabold text-gray-900 tracking-tight leading-tight">
                  Plan Your Journey
                </h2>
                <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5">
                  Get a quick travel quote. Our team will contact you on WhatsApp.
                </p>
              </div>

              {/* Form Fields – 2 Column Grid */}
              <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-2.5 mt-2.5">
                
                {/* Row 1: Full Name & Mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-700 mb-0.5">
                      Full Name <span className="text-[#FF3D18]">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g. Ramesh Verma"
                        className={`w-full pl-8 pr-2 py-1.5 sm:py-2 rounded-xl border text-[11px] sm:text-xs text-gray-900 placeholder-gray-400 focus:outline-none transition-colors ${
                          errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-gray-200 focus:border-[#FF7900] bg-gray-50/40 hover:bg-white focus:bg-white'
                        }`}
                      />
                    </div>
                    {errors.fullName && (
                      <p className="text-[10px] text-red-500 mt-0.5">{errors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-700 mb-0.5">
                      Mobile Number <span className="text-[#FF3D18]">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        className={`w-full pl-8 pr-2 py-1.5 sm:py-2 rounded-xl border text-[11px] sm:text-xs text-gray-900 placeholder-gray-400 focus:outline-none transition-colors ${
                          errors.phone ? 'border-red-500 bg-red-50/20' : 'border-gray-200 focus:border-[#FF7900] bg-gray-50/40 hover:bg-white focus:bg-white'
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-[10px] text-red-500 mt-0.5">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Row 2: Pickup & Destination */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-700 mb-0.5">
                      Pickup Location <span className="text-[#FF3D18]">*</span>
                    </label>
                    <div className="relative">
                      <MapPin className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="text"
                        name="pickup"
                        value={formData.pickup}
                        onChange={handleInputChange}
                        placeholder="e.g. Delhi"
                        className={`w-full pl-8 pr-2 py-1.5 sm:py-2 rounded-xl border text-[11px] sm:text-xs text-gray-900 placeholder-gray-400 focus:outline-none transition-colors ${
                          errors.pickup ? 'border-red-500 bg-red-50/20' : 'border-gray-200 focus:border-[#FF7900] bg-gray-50/40 hover:bg-white focus:bg-white'
                        }`}
                      />
                    </div>
                    {errors.pickup && (
                      <p className="text-[10px] text-red-500 mt-0.5">{errors.pickup}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-700 mb-0.5">
                      Destination <span className="text-[#FF3D18]">*</span>
                    </label>
                    <div className="relative">
                      <MapPin className="w-3.5 h-3.5 text-[#FF7900] absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="text"
                        name="destination"
                        value={formData.destination}
                        onChange={handleInputChange}
                        placeholder="e.g. Haridwar"
                        className={`w-full pl-8 pr-2 py-1.5 sm:py-2 rounded-xl border text-[11px] sm:text-xs text-gray-900 placeholder-gray-400 focus:outline-none transition-colors ${
                          errors.destination ? 'border-red-500 bg-red-50/20' : 'border-gray-200 focus:border-[#FF7900] bg-gray-50/40 hover:bg-white focus:bg-white'
                        }`}
                      />
                    </div>
                    {errors.destination && (
                      <p className="text-[10px] text-red-500 mt-0.5">{errors.destination}</p>
                    )}
                  </div>
                </div>

                {/* Row 3: Journey Date & No. of Passengers */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-700 mb-0.5">
                      Journey Date <span className="text-[#FF3D18]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        name="journeyDate"
                        value={formData.journeyDate}
                        onChange={handleInputChange}
                        className={`w-full px-2.5 py-1.5 sm:py-2 rounded-xl border text-[11px] sm:text-xs text-gray-900 focus:outline-none transition-colors ${
                          errors.journeyDate ? 'border-red-500 bg-red-50/20' : 'border-gray-200 focus:border-[#FF7900] bg-gray-50/40 hover:bg-white focus:bg-white'
                        }`}
                      />
                    </div>
                    {errors.journeyDate && (
                      <p className="text-[10px] text-red-500 mt-0.5">{errors.journeyDate}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-700 mb-0.5">
                      No. of Passengers <span className="text-[#FF3D18]">*</span>
                    </label>
                    <div className="relative">
                      <Users className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="text"
                        name="passengers"
                        value={formData.passengers}
                        onChange={handleInputChange}
                        placeholder="e.g. 15, 27, 33, 50+"
                        className={`w-full pl-8 pr-2 py-1.5 sm:py-2 rounded-xl border text-[11px] sm:text-xs text-gray-900 placeholder-gray-400 focus:outline-none transition-colors ${
                          errors.passengers ? 'border-red-500 bg-red-50/20' : 'border-gray-200 focus:border-[#FF7900] bg-gray-50/40 hover:bg-white focus:bg-white'
                        }`}
                      />
                    </div>
                    {errors.passengers && (
                      <p className="text-[10px] text-red-500 mt-0.5">{errors.passengers}</p>
                    )}
                  </div>
                </div>

                {/* Row 4: Choose Vehicle Category */}
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-700 mb-0.5">
                    Choose Vehicle Category <span className="text-[#FF3D18]">*</span>
                  </label>
                  <div className="relative">
                    <Bus className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      name="vehicleCategory"
                      value={formData.vehicleCategory}
                      onChange={handleInputChange}
                      className="w-full pl-8 pr-7 py-1.5 sm:py-2 rounded-xl border border-gray-200 text-[11px] sm:text-xs text-gray-900 focus:outline-none focus:border-[#FF7900] bg-gray-50/40 hover:bg-white focus:bg-white appearance-none cursor-pointer"
                    >
                      <option value="33 Seater Business Class Coach">33 Seater Business Class Coach</option>
                      <option value="27 Seater Luxury Coach (Pushback AC)">27 Seater Luxury Coach (Pushback AC)</option>
                      <option value="Luxury Traveller (17, 20 & 22 Seater)">Luxury Traveller (17, 20 & 22 Seater)</option>
                      <option value="Large Luxury Bus (51, 53, 56 & 61 Seater Semi Volvo)">Large Luxury Bus (51, 53, 56 & 61 Seater Semi Volvo)</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-1">
                  <button
                    type="submit"
                    className="w-full py-2.5 sm:py-3 px-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#FF7900] to-[#FF3D18] text-white text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/35 hover:brightness-105 active:scale-[0.99] transition-all cursor-pointer"
                  >
                    <WhatsAppIcon className="w-4 h-4" fill="white" />
                    <span>Send Enquiry on WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </form>

              {/* Direct WhatsApp Callout */}
              <div className="text-center pt-2 border-t border-gray-100 text-[10.5px] text-gray-400">
                Direct WhatsApp Helpline: <strong className="text-gray-700">{ATS_DISPLAY_PHONE}</strong>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. FEATURE STRIP (Centered below hero with 3 items)                       */}
      {/* ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 sm:mt-5">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          
          {/* Feature 1 */}
          <div className="flex items-center gap-3.5 p-3 sm:p-3.5 rounded-2xl bg-white border border-gray-100 shadow-sm">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center text-[#FF7900] shrink-0">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-gray-900 leading-tight">
                Verified Fleet Photos
              </h4>
              <p className="text-[11px] text-gray-500 leading-tight mt-0.5">
                See our actual vehicles
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center gap-3.5 p-3 sm:p-3.5 rounded-2xl bg-white border border-gray-100 shadow-sm">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-gray-900 leading-tight">
                Flexible Group Travel
              </h4>
              <p className="text-[11px] text-gray-500 leading-tight mt-0.5">
                For family, corporate & events
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center gap-3.5 p-3 sm:p-3.5 rounded-2xl bg-white border border-gray-100 shadow-sm">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 shrink-0">
              <WhatsAppIcon className="w-5 h-5" fill="#9333ea" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-gray-900 leading-tight">
                Quick WhatsApp Enquiry
              </h4>
              <p className="text-[11px] text-gray-500 leading-tight mt-0.5">
                Fast response from our team
              </p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
