import React, { useState, useMemo } from 'react';
import { 
  Bus, Users, Wind, CheckCircle2, 
  ChevronRight, ArrowRight, ShieldCheck, Sparkles, Filter, Camera,
  X, Search, Phone, Luggage, Music, SlidersHorizontal, Eye, ChevronLeft,
  Calendar, Check, Shield, Award, Fuel
} from 'lucide-react';
import WhatsAppIcon from '../components/icons/WhatsAppIcon';
import { fleetCategories } from '../data/actualFleetData';
import { getWhatsAppUrl } from '../utils/whatsapp';

// Modal component for viewing comprehensive vehicle details and full photo gallery
function VehicleDetailModal({ vehicle, onClose, onOpenLightbox, createWhatsAppLink }) {
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);
  const photos = vehicle.gallery && vehicle.gallery.length > 0 ? vehicle.gallery : [vehicle.image];

  if (!vehicle) return null;

  const handlePrevPhoto = (e) => {
    e.stopPropagation();
    setActivePhotoIdx((prev) => (prev > 0 ? prev - 1 : photos.length - 1));
  };

  const handleNextPhoto = (e) => {
    e.stopPropagation();
    setActivePhotoIdx((prev) => (prev < photos.length - 1 ? prev + 1 : 0));
  };

  const handleOpenFullscreen = () => {
    if (onOpenLightbox) {
      const lightboxItems = photos.map((img, i) => ({
        image: img,
        title: `${vehicle.name} (${vehicle.regNo})`,
        subtitle: `Photo ${i + 1} of ${photos.length} • ${vehicle.capacity} • ${vehicle.ac}`
      }));
      onOpenLightbox(lightboxItems[activePhotoIdx], activePhotoIdx, lightboxItems);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-sm overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl my-auto border border-gray-200 text-gray-900 transition-all max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 bg-gray-900 text-white flex items-center justify-between border-b border-gray-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FF7900]/20 border border-[#FF7900]/40 flex items-center justify-center text-[#FF7900]">
              <Bus className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg sm:text-xl font-bold font-display text-white">
                  {vehicle.name}
                </h3>
                {vehicle.regNo && (
                  <span className="px-2.5 py-0.5 rounded-md bg-white/10 text-[#FF7900] text-xs font-mono font-bold tracking-wider border border-white/20">
                    {vehicle.regNo}
                  </span>
                )}
              </div>
              <p className="text-xs text-gray-300">
                {vehicle.category} • {vehicle.capacity} • {vehicle.ac}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-5 sm:p-7 space-y-6">
          
          {/* Main Photo Gallery Carousel */}
          <div>
            <div className="relative h-64 sm:h-80 md:h-96 w-full rounded-2xl overflow-hidden bg-gray-950 group">
              <img
                src={photos[activePhotoIdx]}
                alt={`${vehicle.name} - Photo ${activePhotoIdx + 1}`}
                className="w-full h-full object-cover object-center"
              />

              {/* Prev / Next controls if multiple photos */}
              {photos.length > 1 && (
                <>
                  <button
                    onClick={handlePrevPhoto}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-sm transition-all"
                    aria-label="Previous photo"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNextPhoto}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-sm transition-all"
                    aria-label="Next photo"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Badges on main image */}
              <div className="absolute top-3 left-3 flex items-center gap-2">
                <span className="px-3 py-1 rounded-lg bg-black/75 backdrop-blur-sm text-xs font-bold text-white shadow">
                  Photo {activePhotoIdx + 1} of {photos.length}
                </span>
                <span className={`px-2.5 py-1 rounded-lg text-xs font-bold text-white backdrop-blur-sm shadow flex items-center gap-1 ${
                  vehicle.ac === 'AC' ? 'bg-blue-600/90' : 'bg-gray-700/90'
                }`}>
                  <Wind className="w-3.5 h-3.5" />
                  {vehicle.ac}
                </span>
              </div>

              {/* Fullscreen Trigger */}
              <button
                onClick={handleOpenFullscreen}
                className="absolute top-3 right-3 px-3 py-1.5 rounded-lg bg-black/75 hover:bg-black text-white text-xs font-semibold backdrop-blur-sm flex items-center gap-1.5 transition-all shadow"
              >
                <Eye className="w-3.5 h-3.5 text-[#FF7900]" />
                <span>Fullscreen</span>
              </button>
            </div>

            {/* Thumbnail Filmstrip */}
            {photos.length > 1 && (
              <div className="flex items-center gap-3 mt-3 overflow-x-auto pb-1 scrollbar-thin">
                {photos.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePhotoIdx(idx)}
                    className={`relative w-20 h-14 sm:w-24 sm:h-16 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                      activePhotoIdx === idx 
                        ? 'border-[#FF7900] ring-2 ring-orange-500/30 scale-105' 
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Key Specifications Grid */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-[#FF7900]" />
              <span>Technical Specifications & Details</span>
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-2xl bg-gray-50 border border-gray-100">
                <span className="text-[11px] font-semibold text-gray-500 block uppercase">Seating Capacity</span>
                <span className="text-sm font-bold text-gray-900 flex items-center gap-1.5 mt-0.5">
                  <Users className="w-4 h-4 text-[#FF7900]" />
                  {vehicle.capacity}
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-gray-50 border border-gray-100">
                <span className="text-[11px] font-semibold text-gray-500 block uppercase">Seating Arrangement</span>
                <span className="text-sm font-bold text-gray-900 block mt-0.5">
                  {vehicle.seatingType || 'Pushback Recliner'}
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-gray-50 border border-gray-100">
                <span className="text-[11px] font-semibold text-gray-500 block uppercase">Climate Control</span>
                <span className="text-sm font-bold text-gray-900 flex items-center gap-1.5 mt-0.5">
                  <Wind className="w-4 h-4 text-blue-600" />
                  {vehicle.ac === 'AC' ? 'Dual AC Units' : 'Natural Airflow (Non-AC)'}
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-gray-50 border border-gray-100">
                <span className="text-[11px] font-semibold text-gray-500 block uppercase">Registration Plate</span>
                <span className="text-sm font-bold font-mono text-gray-900 block mt-0.5">
                  {vehicle.regNo || 'Commercial Plate'}
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-gray-50 border border-gray-100">
                <span className="text-[11px] font-semibold text-gray-500 block uppercase">Luggage Capacity</span>
                <span className="text-sm font-bold text-gray-900 flex items-center gap-1.5 mt-0.5">
                  <Luggage className="w-4 h-4 text-[#FF7900]" />
                  Rear & Underfloor Boot
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-gray-50 border border-gray-100">
                <span className="text-[11px] font-semibold text-gray-500 block uppercase">Permit Scope</span>
                <span className="text-sm font-bold text-gray-900 flex items-center gap-1.5 mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  All-India Tourist Permit
                </span>
              </div>
            </div>
          </div>

          {/* Description & Overview */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">
              Vehicle Overview
            </h4>
            <p className="text-sm text-gray-700 leading-relaxed bg-orange-50/40 p-4 rounded-2xl border border-orange-100/80">
              {vehicle.description}
            </p>
          </div>

          {/* Included Amenities Checklist */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3">
              Included Amenities & Guarantees
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-gray-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Pushback reclining seats with generous legroom</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Dedicated USB & mobile charging points</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>High-output stereo audio system & guide mic</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Emergency exits, first aid box & fire extinguisher</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Sanitized & deep cleaned before dispatch</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Uniformed, experienced commercial route driver</span>
              </div>
            </div>
          </div>

          {/* Ideal Travel Types */}
          <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
              Ideal For
            </h4>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="px-3 py-1 rounded-lg bg-white border border-gray-200 text-gray-800 font-medium">Family Vacations</span>
              <span className="px-3 py-1 rounded-lg bg-white border border-gray-200 text-gray-800 font-medium">Wedding Baraat & Guest Transit</span>
              <span className="px-3 py-1 rounded-lg bg-white border border-gray-200 text-gray-800 font-medium">Haridwar / Rishikesh / Char Dham Yatras</span>
              <span className="px-3 py-1 rounded-lg bg-white border border-gray-200 text-gray-800 font-medium">Corporate Offsites & Conferences</span>
              <span className="px-3 py-1 rounded-lg bg-white border border-gray-200 text-gray-800 font-medium">Outstation Group Tours</span>
            </div>
          </div>

        </div>

        {/* Modal Sticky Bottom Action Footer */}
        <div className="p-4 sm:p-5 bg-gray-50 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-gray-600 hidden sm:block">
            <span className="font-semibold text-gray-900">Need immediate booking?</span> Call +91 75005 91700 or message on WhatsApp.
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <a
              href="tel:+917500591700"
              className="py-2.5 px-4 rounded-xl border border-gray-300 hover:bg-white text-gray-800 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#FF7900]" />
              <span>Call Us</span>
            </a>

            <a
              href={createWhatsAppLink(vehicle.name, vehicle.regNo)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-orange-gradient py-2.5 px-5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 flex-grow sm:flex-grow-0 shadow-md hover:brightness-105 transition-all"
            >
              <WhatsAppIcon className="w-4 h-4" fill="white" />
              <span>Book / Enquire on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

// Vehicle Card component
function VehicleCard({ vehicle, onOpenLightbox, onOpenDetail, createWhatsAppLink }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const photos = vehicle.gallery && vehicle.gallery.length > 0 ? vehicle.gallery : [vehicle.image];

  const handleOpenPhoto = (e) => {
    e.stopPropagation();
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
    <div className="bg-white rounded-2xl border border-gray-200/90 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
      <div>
        {/* Standardized 1200x800 Bus Photograph Container */}
        <div 
          className="relative h-56 sm:h-60 w-full overflow-hidden bg-gray-950 cursor-pointer select-none"
          onClick={() => onOpenDetail(vehicle)}
          title="Click to view vehicle details and photos"
        >
          <img
            src={photos[activeIdx]}
            alt={`${vehicle.name} - ${vehicle.regNo}`}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          
          {/* Registration Number Badge */}
          {vehicle.regNo && (
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-sm border border-gray-200 text-[11px] font-bold tracking-wider text-gray-900 shadow-sm font-mono">
              {vehicle.regNo}
            </div>
          )}

          {/* Multiple Photos Indicator Badge */}
          {photos.length > 1 && (
            <div 
              onClick={handleOpenPhoto}
              className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-black/75 hover:bg-black/90 backdrop-blur-sm text-[10px] font-bold text-white flex items-center gap-1 shadow transition-colors cursor-pointer"
              title="Click to view all photos"
            >
              <Camera className="w-3 h-3 text-[#FF7900]" />
              <span>{photos.length} Real Photos</span>
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

        {/* Card Content */}
        <div className="p-5">
          <div className="flex items-start justify-between gap-2 mb-2">
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

          <p className="text-xs text-gray-600 leading-relaxed line-clamp-2 min-h-[32px] mb-3">
            {vehicle.description}
          </p>

          <div className="flex items-center justify-between pt-1">
            <button
              type="button"
              onClick={() => onOpenDetail(vehicle)}
              className="text-xs font-bold text-[#FF7900] hover:text-[#FF3D18] flex items-center gap-1 transition-colors"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Inspect Vehicle & Specs</span>
            </button>

            {photos.length > 1 && (
              <button
                type="button"
                onClick={handleOpenPhoto}
                className="text-[11px] font-medium text-gray-500 hover:text-gray-900 flex items-center gap-1 transition-colors"
              >
                <Camera className="w-3 h-3" />
                <span>{photos.length} photos</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Card Footer: View Details & WhatsApp Action */}
      <div className="p-5 pt-0 space-y-2 border-t border-gray-100 mt-2">
        <div className="grid grid-cols-2 gap-2 pt-2.5">
          <button
            type="button"
            onClick={() => onOpenDetail(vehicle)}
            className="py-2.5 px-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-900 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
          >
            <Eye className="w-3.5 h-3.5 text-[#FF7900]" />
            <span>Details</span>
          </button>

          <a
            href={createWhatsAppLink(vehicle.name, vehicle.regNo)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-orange-gradient py-2.5 px-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm hover:brightness-105 transition-all"
          >
            <WhatsAppIcon className="w-3.5 h-3.5" fill="white" />
            <span>Enquire</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function FleetPage({ onOpenLightbox }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [capacityFilter, setCapacityFilter] = useState('all');
  const [acFilter, setAcFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedVehicleForDetail, setSelectedVehicleForDetail] = useState(null);

  // Helper to construct contextual WhatsApp message
  const createWhatsAppLink = (vehicleName, regNo) => {
    let text = `Hello Aarya Tourist Service, I would like to check availability and tariff for *${vehicleName}*`;
    if (regNo && regNo !== 'Verified Fleet') {
      text += ` (Reg: ${regNo})`;
    }
    text += `.\n\nPlease share booking rates and details for our travel dates.`;
    return getWhatsAppUrl(text);
  };

  const createCategoryWhatsAppLink = (catName) => {
    const text = `Hello Aarya Tourist Service, I am interested in checking availability and booking for the *${catName}* category.\n\nPlease share options and booking process.`;
    return getWhatsAppUrl(text);
  };

  // Flatten all vehicles for global filtering and stats
  const allVehicles = useMemo(() => {
    const list = [];
    fleetCategories.forEach((cat) => {
      cat.vehicles.forEach((v) => {
        list.push({ ...v, categoryId: cat.id, categoryName: cat.name });
      });
    });
    return list;
  }, []);

  const totalVehiclesCount = allVehicles.length;

  // Filter logic across category, capacity, AC, and search
  const filteredVehicles = useMemo(() => {
    return allVehicles.filter((v) => {
      // Category filter
      if (selectedCategory !== 'all' && v.categoryId !== selectedCategory) {
        return false;
      }

      // Capacity filter
      if (capacityFilter !== 'all') {
        if (capacityFilter === '17-22' && (v.seatingNum < 17 || v.seatingNum > 22)) return false;
        if (capacityFilter === '26-29' && (v.seatingNum < 26 || v.seatingNum > 29)) return false;
        if (capacityFilter === '33' && v.seatingNum !== 33) return false;
        if (capacityFilter === '49-61' && v.seatingNum < 49) return false;
      }

      // AC filter
      if (acFilter !== 'all') {
        if (acFilter === 'AC' && v.ac !== 'AC') return false;
        if (acFilter === 'Non-AC' && v.ac !== 'Non-AC') return false;
      }

      // Search Query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase().trim();
        const matchName = v.name.toLowerCase().includes(q);
        const matchReg = v.regNo && v.regNo.toLowerCase().includes(q);
        const matchCap = v.capacity.toLowerCase().includes(q);
        const matchCat = v.categoryName.toLowerCase().includes(q);
        const matchType = v.seatingType && v.seatingType.toLowerCase().includes(q);
        if (!matchName && !matchReg && !matchCap && !matchCat && !matchType) {
          return false;
        }
      }

      return true;
    });
  }, [allVehicles, selectedCategory, capacityFilter, acFilter, searchQuery]);

  // Group displayed vehicles by category if 'all' is selected and no deep search is active
  const groupedVehicles = useMemo(() => {
    const groups = {};
    fleetCategories.forEach((cat) => {
      const vehiclesInCat = filteredVehicles.filter((v) => v.categoryId === cat.id);
      if (vehiclesInCat.length > 0) {
        groups[cat.id] = {
          category: cat,
          vehicles: vehiclesInCat
        };
      }
    });
    return groups;
  }, [filteredVehicles]);

  const hasActiveFilters = selectedCategory !== 'all' || capacityFilter !== 'all' || acFilter !== 'all' || searchQuery.trim() !== '';

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setCapacityFilter('all');
    setAcFilter('all');
    setSearchQuery('');
  };

  return (
    <div className="pt-20 sm:pt-24 bg-white text-gray-900 font-sans">
      
      {/* Page Header Banner */}
      <div className="bg-gray-950 text-white py-14 sm:py-18 relative overflow-hidden">
        {/* Background Subtle Gradient & Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-950 to-black opacity-90" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#FF7900]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#FF7900] text-xs font-bold uppercase tracking-wider mb-4 border border-white/15 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#FF7900]" />
            <span>Official Fleet Catalogue • {totalVehiclesCount} Verified Commercial Buses</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight mb-4 text-white">
            Our Luxury Fleet
          </h1>
          
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Every vehicle below is an actual bus from the AARYA TOURIST SERVICE fleet. Browse by category, inspect seating layouts, check real exterior & interior photos, and enquire directly on WhatsApp.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto mt-8 pt-6 border-t border-white/10 text-center">
            <div className="p-2.5">
              <span className="text-xl sm:text-2xl font-extrabold text-[#FF7900] block">4 Categories</span>
              <span className="text-xs text-gray-400">Traveller to Heavy Coach</span>
            </div>
            <div className="p-2.5">
              <span className="text-xl sm:text-2xl font-extrabold text-[#FF7900] block">17 - 61 Seats</span>
              <span className="text-xs text-gray-400">Small to Large Groups</span>
            </div>
            <div className="p-2.5">
              <span className="text-xl sm:text-2xl font-extrabold text-[#FF7900] block">AC & Pushback</span>
              <span className="text-xs text-gray-400">Superior Ride Comfort</span>
            </div>
            <div className="p-2.5">
              <span className="text-xl sm:text-2xl font-extrabold text-[#FF7900] block">All-India Permit</span>
              <span className="text-xs text-gray-400">Pan-India Tourism Allowed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Sticky Filter & Search Control Console */}
      <section className="sticky top-16 sm:top-20 z-30 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider shrink-0 transition-all ${
                selectedCategory === 'all'
                  ? 'btn-orange-gradient text-white shadow-sm'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Fleet ({totalVehiclesCount})
            </button>
            {fleetCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider shrink-0 transition-all ${
                  selectedCategory === cat.id
                    ? 'btn-orange-gradient text-white shadow-sm'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.name} ({cat.vehicles.length})
              </button>
            ))}
          </div>

          {/* Sub-Filters: Search + Capacity + AC Status */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 pt-1">
            
            {/* Search Input */}
            <div className="relative flex-grow max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by registration (e.g. 4509, 8881) or capacity..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-9 py-2 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF7900] focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Quick Filters Pill Group */}
            <div className="flex flex-wrap items-center gap-2">
              {/* Capacity Selector */}
              <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-xl text-xs">
                <span className="text-[10px] font-bold text-gray-400 uppercase px-1.5 hidden sm:inline">Seats:</span>
                <button
                  onClick={() => setCapacityFilter('all')}
                  className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                    capacityFilter === 'all' ? 'bg-white text-gray-900 shadow-xs' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setCapacityFilter('17-22')}
                  className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                    capacityFilter === '17-22' ? 'bg-white text-gray-900 shadow-xs' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  17-22S
                </button>
                <button
                  onClick={() => setCapacityFilter('26-29')}
                  className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                    capacityFilter === '26-29' ? 'bg-white text-gray-900 shadow-xs' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  26-29S
                </button>
                <button
                  onClick={() => setCapacityFilter('33')}
                  className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                    capacityFilter === '33' ? 'bg-white text-gray-900 shadow-xs' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  33S
                </button>
                <button
                  onClick={() => setCapacityFilter('49-61')}
                  className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                    capacityFilter === '49-61' ? 'bg-white text-gray-900 shadow-xs' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  49-61S
                </button>
              </div>

              {/* AC Filter */}
              <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-xl text-xs">
                <span className="text-[10px] font-bold text-gray-400 uppercase px-1.5 hidden sm:inline">AC:</span>
                <button
                  onClick={() => setAcFilter('all')}
                  className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                    acFilter === 'all' ? 'bg-white text-gray-900 shadow-xs' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setAcFilter('AC')}
                  className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                    acFilter === 'AC' ? 'bg-white text-blue-700 shadow-xs' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  AC
                </button>
                <button
                  onClick={() => setAcFilter('Non-AC')}
                  className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                    acFilter === 'Non-AC' ? 'bg-white text-gray-900 shadow-xs' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Non-AC
                </button>
              </div>

              {/* Reset Button */}
              {hasActiveFilters && (
                <button
                  onClick={handleResetFilters}
                  className="px-3 py-1.5 rounded-xl bg-orange-100 text-[#FF7900] hover:bg-orange-200 text-xs font-bold transition-colors flex items-center gap-1"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              )}
            </div>

          </div>

          {/* Active Status Line */}
          <div className="flex items-center justify-between text-xs text-gray-500 pt-1">
            <div>
              Showing <span className="font-bold text-gray-900">{filteredVehicles.length}</span> of {totalVehiclesCount} vehicles
              {selectedCategory !== 'all' && (
                <span> in <span className="font-semibold text-[#FF7900]">{fleetCategories.find(c => c.id === selectedCategory)?.name}</span></span>
              )}
              {capacityFilter !== 'all' && <span> • ({capacityFilter} Seats)</span>}
              {acFilter !== 'all' && <span> • ({acFilter})</span>}
              {searchQuery && <span> • Matching &quot;{searchQuery}&quot;</span>}
            </div>

            <div className="hidden sm:flex items-center gap-2 text-[11px] text-gray-600">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>All 28 vehicles ready for booking</span>
            </div>
          </div>

        </div>
      </section>

      {/* Main Vehicle Listings Section */}
      <section className="py-12 sm:py-16 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* No results empty state */}
          {filteredVehicles.length === 0 && (
            <div className="text-center py-20 bg-white rounded-3xl border border-gray-200 p-8 max-w-lg mx-auto shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-orange-100 text-[#FF7900] flex items-center justify-center mx-auto mb-4">
                <Bus className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                No matching vehicles found
              </h3>
              <p className="text-xs text-gray-600 mb-6">
                We couldn't find any vehicle matching your current filters. Try resetting the filters or check another category.
              </p>
              <button
                onClick={handleResetFilters}
                className="btn-orange-gradient px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5"
              >
                <span>Reset All Filters</span>
              </button>
            </div>
          )}

          {/* Display grouped by category or single view */}
          {selectedCategory === 'all' && !searchQuery ? (
            // Grouped view by category for clear hierarchical browsing
            Object.values(groupedVehicles).map(({ category, vehicles }) => (
              <div key={category.id} id={`cat-${category.id}`} className="scroll-mt-36">
                
                {/* Category Header Banner with Quick Enquire */}
                <div className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-200/90 shadow-xs mb-8 flex flex-col md:flex-row md:items-center justify-between gap-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#FF7900] shrink-0">
                      <Bus className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF7900] bg-orange-50 px-2.5 py-0.5 rounded-md border border-orange-200">
                          {category.capacityBadge}
                        </span>
                        <span className="text-xs text-gray-500 font-semibold">
                          ({vehicles.length} distinct vehicles)
                        </span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-gray-900">
                        {category.name}
                      </h2>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-2xl leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 shrink-0 self-start md:self-auto">
                    <a
                      href={createCategoryWhatsAppLink(category.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-orange-gradient px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 shadow-sm"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5" fill="white" />
                      <span>Enquire Category</span>
                    </a>
                  </div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
                  {vehicles.map((vehicle) => (
                    <VehicleCard
                      key={vehicle.id}
                      vehicle={vehicle}
                      onOpenLightbox={onOpenLightbox}
                      onOpenDetail={(v) => setSelectedVehicleForDetail(v)}
                      createWhatsAppLink={createWhatsAppLink}
                    />
                  ))}
                </div>

              </div>
            ))
          ) : (
            // Flat grid when searching or specific category selected
            <div>
              {/* Category Subhead if specific category chosen */}
              {selectedCategory !== 'all' && (
                <div className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-200/90 shadow-xs mb-8 flex flex-col md:flex-row md:items-center justify-between gap-5">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF7900] bg-orange-50 px-2.5 py-0.5 rounded-md border border-orange-200 inline-block mb-1">
                      {fleetCategories.find(c => c.id === selectedCategory)?.capacityBadge}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-gray-900">
                      {fleetCategories.find(c => c.id === selectedCategory)?.name}
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-2xl">
                      {fleetCategories.find(c => c.id === selectedCategory)?.description}
                    </p>
                  </div>

                  <a
                    href={createCategoryWhatsAppLink(fleetCategories.find(c => c.id === selectedCategory)?.name || 'Fleet')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-orange-gradient px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 shadow-sm shrink-0"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5" fill="white" />
                    <span>Enquire This Category</span>
                  </a>
                </div>
              )}

              {/* Grid of filtered results */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
                {filteredVehicles.map((vehicle) => (
                  <VehicleCard
                    key={vehicle.id}
                    vehicle={vehicle}
                    onOpenLightbox={onOpenLightbox}
                    onOpenDetail={(v) => setSelectedVehicleForDetail(v)}
                    createWhatsAppLink={createWhatsAppLink}
                  />
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Verified Fleet Quality & Assurance Strip */}
      <section className="py-14 sm:py-16 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF7900] block mb-1">
              Quality Assurance
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-gray-900">
              Why Book Directly with Aarya Tourist Service?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200/80 text-left">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#FF7900] flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">
                100% Verified Commercial Permits
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                All 28 vehicles operate on valid All-India Tourist Permits, comprehensive commercial passenger insurance, and fitness certifications.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200/80 text-left">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#FF7900] flex items-center justify-center mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">
                Actual Bus Guarantee
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                No surprises on travel day. The exact bus registration, model, and seating configuration agreed during booking is dispatched to your pickup.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200/80 text-left">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#FF7900] flex items-center justify-center mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">
                Vetted Highway Drivers
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Courteous, uniformed drivers with 10+ years of hill station (Uttarakhand, Himachal) and Golden Triangle interstate driving experience.
              </p>
            </div>
          </div>

          {/* Bottom WhatsApp Booking Callout */}
          <div className="mt-12 p-8 rounded-3xl bg-gray-950 text-white text-center relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                Ready to Book Your Bus?
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Share your journey dates, pickup city, and passenger count. We will send you photos, registration details, and the lowest all-inclusive tariff quote within minutes.
              </p>
              <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={getWhatsAppUrl("Hello Aarya Tourist Service, I would like to book a bus. Please share availability and rates.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-orange-gradient px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 shadow-md hover:brightness-105 transition-all"
                >
                  <WhatsAppIcon className="w-4 h-4" fill="white" />
                  <span>Enquire on WhatsApp (+91 75005 91700)</span>
                </a>
                <a
                  href="tel:+917500591700"
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 border border-white/20 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#FF7900]" />
                  <span>Call +91 75005 91700</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Detailed Vehicle Modal */}
      {selectedVehicleForDetail && (
        <VehicleDetailModal
          vehicle={selectedVehicleForDetail}
          onClose={() => setSelectedVehicleForDetail(null)}
          onOpenLightbox={onOpenLightbox}
          createWhatsAppLink={createWhatsAppLink}
        />
      )}

    </div>
  );
}
