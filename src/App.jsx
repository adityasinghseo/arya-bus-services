import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import LightboxModal from './components/LightboxModal';

// Dedicated Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import FleetPage from './pages/FleetPage';
import TourTravelPage from './pages/TourTravelPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    item: null,
    currentIndex: 0,
    itemsList: []
  });

  const handleOpenLightbox = (item, index, itemsList) => {
    setLightboxState({
      isOpen: true,
      item,
      currentIndex: index,
      itemsList
    });
  };

  const handleCloseLightbox = () => {
    setLightboxState(prev => ({ ...prev, isOpen: false, item: null }));
  };

  const handleNavigateLightbox = (newIndex) => {
    setLightboxState(prev => ({
      ...prev,
      currentIndex: newIndex,
      item: prev.itemsList[newIndex]
    }));
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-gray-900 flex flex-col font-sans selection:bg-[#FF7900] selection:text-white">
        
        {/* Consistent Sticky Header across all pages */}
        <Navbar />

        {/* Independent Page Routes */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage onOpenLightbox={handleOpenLightbox} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/fleet" element={<FleetPage />} />
            <Route path="/tour-travel" element={<TourTravelPage />} />
            <Route
              path="/gallery"
              element={<GalleryPage onOpenLightbox={handleOpenLightbox} />}
            />
            <Route path="/contact" element={<ContactPage />} />
            {/* Fallback to Home */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        {/* Consistent Footer across all pages */}
        <Footer />

        {/* Persistent Floating WhatsApp Action */}
        <FloatingWhatsApp />

        {/* Global Lightbox for Gallery */}
        {lightboxState.isOpen && (
          <LightboxModal
            item={lightboxState.item}
            currentIndex={lightboxState.currentIndex}
            itemsList={lightboxState.itemsList}
            onClose={handleCloseLightbox}
            onNavigate={handleNavigateLightbox}
          />
        )}

      </div>
    </BrowserRouter>
  );
}
