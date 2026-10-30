import React from 'react';
import WhatsAppIcon from './icons/WhatsAppIcon';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <a
        href={getWhatsAppUrl("Hello Aarya Tourist Service, I would like to enquire about renting a tourist bus.")}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl shadow-green-900/20 transition-all duration-200 hover:scale-108 active:scale-95 focus:outline-none ring-4 ring-white/20"
        aria-label="Chat with Aarya Tourist Service on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7 fill-white" />
      </a>
    </div>
  );
}
