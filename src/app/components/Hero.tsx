import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="src/assets/images/1st.png"
          alt="Sports Arena"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 via-gray-950/70 to-gray-950"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl text-white mb-6 tracking-tight">
          Book Your Slot. <br />
          <span className="bg-gradient-to-r from-green-400 via-blue-400 to-orange-400 bg-clip-text text-transparent">
            Play Your Game.
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12">
          Cricket | Badminton | Swimming – All in One Arena
        </p>

        <button
          onClick={scrollToBooking}
          className="px-12 py-5 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white rounded-lg text-lg shadow-2xl transform hover:scale-105 transition-all duration-300"
        >
          BOOK NOW
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
