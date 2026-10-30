import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import WhatsAppIcon from './icons/WhatsAppIcon';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function LightboxModal({ item, currentIndex, itemsList, onClose, onNavigate }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNavigate) onNavigate((currentIndex + 1) % itemsList.length);
      if (e.key === 'ArrowLeft' && onNavigate) onNavigate((currentIndex - 1 + itemsList.length) % itemsList.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, itemsList, onClose, onNavigate]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-6 backdrop-blur-sm animate-fade-in">
      
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        aria-label="Close"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev / Next */}
      {itemsList && itemsList.length > 1 && (
        <>
          <button
            onClick={() => onNavigate((currentIndex - 1 + itemsList.length) % itemsList.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors hidden sm:block"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => onNavigate((currentIndex + 1) % itemsList.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors hidden sm:block"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Modal Content */}
      <div className="max-w-4xl w-full max-h-[90vh] flex flex-col items-center">
        <div className="relative w-full max-h-[72vh] flex items-center justify-center overflow-hidden rounded-2xl bg-black">
          <img
            src={item.image}
            alt={item.title}
            className="max-h-[72vh] w-auto max-w-full object-contain"
          />
        </div>

        <div className="w-full mt-3 p-4 rounded-xl bg-white border border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-gray-900">
          <div>
            <h3 className="text-base font-bold">
              {item.title}
            </h3>
            {item.subtitle && (
              <p className="text-xs text-gray-500">
                {item.subtitle}
              </p>
            )}
          </div>

          <a
            href={getWhatsAppUrl(`Hello Aarya Tourist Service, I saw this bus in your gallery: ${item.title}. Can you share details?`)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-orange-gradient px-4 py-2 rounded-lg text-xs font-bold text-white flex items-center gap-1.5 self-start sm:self-auto"
          >
            <WhatsAppIcon className="w-3.5 h-3.5" fill="white" />
            <span>Enquire on WhatsApp</span>
          </a>
        </div>
      </div>

    </div>
  );
}
