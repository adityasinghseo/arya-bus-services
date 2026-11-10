import React, { useState } from 'react';
import { 
  Bus, Users, Wind, CheckCircle2, 
  ChevronRight, ArrowRight, ShieldCheck, Sparkles, Filter, Camera 
} from 'lucide-react';
import WhatsAppIcon from '../components/icons/WhatsAppIcon';
import { fleetCategories } from '../data/actualFleetData';
import { getWhatsAppUrl } from '../utils/whatsapp';

function VehicleCard({ vehicle, onOpenLightbox, createWhatsAppLink }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const photos = vehicle.gallery && vehicle.gallery.length > 0 ? vehicle.gallery : [vehicle.image];

  const handleOpenPhoto = () => {
    if (onOpenLightbox) {
      const lightboxItems = photos.map((img, i) => ({
        image: img,
        title: `${vehicle.name} (${vehicle.regNo})`,
        subtitle: `Photo ${i + 1} of ${photos.length} • ${vehicle.capacity} • ${vehicle.ac}`
      }));
      onOpenLightbox(lightboxItems[activeIdx], activeIdx, lightboxItems);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200/90 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
      <div>
        {/* Standardized 1200x800 Bus Photograph Container */}
        <div 
          className="relative h-56 sm:h-60 w-full overflow-hidden bg-gray-950 group cursor-pointer select-none"
          onClick={handleOpenPhoto}
          title="Click to view full photo"
        >
          <img
            src={photos[activeIdx]}
            alt={`${vehicle.name} - ${vehicle.regNo}`}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          
          {/* Registration Number Badge */}
          {vehicle.regNo && (
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-sm border border-gray-200 text-[11px] font-bold tracking-wider text-gray-900 shadow-sm">
              {vehicle.regNo}
            </div>
          )}

          {/* Multiple Photos Indicator Badge */}
          {photos.length > 1 && (
            <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-black/75 backdrop-blur-sm text-[10px] font-bold text-white flex items-center gap-1 shadow hover:bg-black/90 transition-colors">
              <Camera className="w-3 h-3 text-[#FF7900]" />
              <span>{photos.length} Photos</span>
            </div>
          )}

          {/* AC Badge */}
          <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-sm text-[10px] font-bold text-white flex items-center gap-1">
            <Wind className="w-3 h-3 text-[#91BBD9]" />
            <span>{vehicle.ac}</span>
          </div>

          {/* Interactive Thumbnail Dots Switcher */}
          {photos.length > 1 && (
            <div 
              className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2 py-1 rounded-full bg-black/60 backdrop-blur-sm z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {photos.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => setActiveIdx(dotIdx)}
                  className={`h-2 rounded-full transition-all ${
                    activeIdx === dotIdx ? 'bg-[#FF7900] w-4' : 'bg-white/70 hover:bg-white w-2'
                  }`}
                  aria-label={`View photo ${dotIdx + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Card Content with consistent min-height */}
        <div className="p-5">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="text-base font-bold text-gray-900 leading-snug">
              {vehicle.name}
            </h3>
          </div>

          {/* Specs Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-3 text-[11px]">
            <span className="px-2 py-0.5 rounded bg-gray-100 text-gray-700 font-semibold flex items-center gap-1">
              <Users className="w-3 h-3 text-[#FF7900]" />
              {vehicle.capacity}
            </span>
            <span className="px-2 py-0.5 rounded bg-orange-50 text-orange-800 font-semibold">
              {vehicle.seatingType}
            </span>
            <span className={`px-2 py-0.5 rounded font-semibold ${
              vehicle.ac === 'AC' ? 'bg-blue-50 text-blue-700' : 'bg-gray-100 text-gray-600'
            }`}>
              {vehicle.ac}
            </span>
          </div>

          <p className="text-xs text-gray-600 leading-relaxed min-h-[38px]">
            {vehicle.description}
          </p>

          {photos.length > 1 && (
            <button
              type="button"
              onClick={handleOpenPhoto}
              className="mt-2 text-[11px] font-semibold text-[#FF7900] hover:text-[#FF3D18] flex items-center gap-1 transition-colors"
            >
              <Camera className="w-3 h-3" />
              <span>View all {photos.length} photos</span>
            </button>
          )}
        </div>
      </div>

      {/* Card Footer: Booking note & WhatsApp Enquiry */}
      <div className="p-5 pt-0 space-y-2.5 border-t border-gray-100 mt-2">
        <div className="pt-2 text-center text-xs font-semibold text-gray-700 bg-gray-50 py-1.5 px-2 rounded-lg border border-gray-100">
          Contact Us for Booking & Availability
        </div>

        <a
          href={createWhatsAppLink(vehicle.name, vehicle.regNo)}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full btn-orange-gradient py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm hover:brightness-105 transition-all"
        >
          <WhatsAppIcon className="w-3.5 h-3.5" fill="white" />
          <span>Enquire on WhatsApp</span>
        </a>
      </div>
    </div>
  );
}

export default function FleetPage({ onOpenLightbox }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Helper to construct contextual WhatsApp message
  const createWhatsAppLink = (vehicleName, regNo) => {
    let text = `Hello Aarya Tourist Service, I would like to enquire about booking and availability for *${vehicleName}*`;
    if (regNo && regNo !== 'Verified Fleet') {
      text += ` (Reg: ${regNo})`;
    }
    text += `.\n\nPlease share booking details and availability for our upcoming journey.`;
    return getWhatsAppUrl(text);
  };

  const createCategoryWhatsAppLink = (catName) => {
    const text = `Hello Aarya Tourist Service, I am interested in checking availability and booking for the *${catName}* category.\n\nPlease share options and booking process.`;
    return getWhatsAppUrl(text);
  };

  // Get filtered categories or all
  const displayedCategories = selectedCategory === 'all'
    ? fleetCategories
    : fleetCategories.filter(c => c.id === selectedCategory);

  const totalVehiclesCount = fleetCategories.reduce((acc, cat) => acc + cat.vehicles.length, 0);

  return (
    <div className="pt-20 sm:pt-24 bg-white text-gray-900 font-sans">
      
      {/* Page Header */}
      <div className="bg-gray-900 text-white py-16 sm:py-20 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-[#FF7900] text-xs font-bold uppercase tracking-wider mb-3 border border-orange-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Official Fleet Catalogue ({totalVehiclesCount} Verified Vehicles)</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight mb-4">
            Our Luxury Fleet
          </h1>
          
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto font-normal">
            Explore our actual fleet of luxury Travellers, 27-seater executive buses, 33-seater business coaches, and large semi-volvo heavy coaches.
          </p>

          {/* Quick Category Navigation Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                selectedCategory === 'all'
                  ? 'btn-orange-gradient text-white shadow-md'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              All Vehicles ({totalVehiclesCount})
            </button>
            {fleetCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                  selectedCategory === cat.id
                    ? 'btn-orange-gradient text-white shadow-md'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {cat.name} ({cat.vehicles.length})
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* Main 4 Fleet Category Cards Section */}
      <section className="py-14 sm:py-16 bg-gray-50/70 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF7900] block mb-1">
              Vehicle Classification
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-gray-900">
              Browse by Category
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fleetCategories.map((cat) => (
              <div
                key={cat.id}
                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden shadow-sm hover:shadow-md flex flex-col justify-between ${
                  selectedCategory === cat.id ? 'border-[#FF7900] ring-2 ring-orange-500/20' : 'border-gray-200/80'
                }`}
              >
                <div>
                  {/* Category Image - Standardized 1200x800 */}
                  <div className="relative h-48 w-full overflow-hidden bg-gray-900">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-sm text-[11px] font-bold text-white shadow">
                      {cat.capacityBadge}
                    </div>
                  </div>

                  {/* Category Info */}
                  <div className="p-5">
                    <h3 className="text-base font-bold text-gray-900 mb-1.5">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed mb-3">
                      {cat.description}
                    </p>
                    <span className="inline-block text-[11px] font-semibold text-[#FF7900]">
                      {cat.vehiclesCount}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="p-5 pt-0 space-y-2">
                  <button
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      const el = document.getElementById(`cat-${cat.id}`);
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full py-2.5 px-3 rounded-xl bg-gray-900 hover:bg-black text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>View All {cat.vehicles.length} Vehicles</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={createCategoryWhatsAppLink(cat.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-3 rounded-xl btn-orange-gradient text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5" fill="white" />
                    <span>WhatsApp Enquiry</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Detailed Vehicles Gallery Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {displayedCategories.map((category) => (
            <div key={category.id} id={`cat-${category.id}`} className="scroll-mt-28">
              
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 mb-8 border-b border-gray-200">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF7900]" />
                    <span className="text-xs font-bold uppercase tracking-widest text-[#FF7900]">
                      {category.capacityBadge}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-gray-900">
                    {category.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">
                    {category.description} ({category.vehicles.length} distinct vehicles available in fleet)
                  </p>
                </div>

                <a
                  href={createCategoryWhatsAppLink(category.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-orange-gradient px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 self-start sm:self-auto shrink-0"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5" fill="white" />
                  <span>Enquire All in Category</span>
                </a>
              </div>

              {/* Vehicle Cards Grid - Strictly Uniform Sizes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
                {category.vehicles.map((vehicle) => (
                  <VehicleCard
                    key={vehicle.id}
                    vehicle={vehicle}
                    onOpenLightbox={onOpenLightbox}
                    createWhatsAppLink={createWhatsAppLink}
                  />
                ))}
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* Bottom Booking Notice Strip */}
      <section className="py-12 bg-gray-50 border-t border-gray-200/80 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#FF7900] uppercase tracking-wider mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>Verified Fleet of Aarya Tourist Service</span>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed mb-5">
            All {totalVehiclesCount} buses shown above are our verified fleet with registered commercial permits. Contact our transport team on WhatsApp (+91 75005 91700) for instant tariff quotes, availability, and confirmed allotment for your travel dates.
          </p>
          <a
            href={getWhatsAppUrl("Hello Aarya Tourist Service, I would like to check bus availability.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-orange-gradient px-7 py-3 rounded-xl text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2"
          >
            <WhatsAppIcon className="w-4 h-4" fill="white" />
            <span>Enquire on WhatsApp (+91 75005 91700)</span>
          </a>
        </div>
      </section>

    </div>
  );
}
