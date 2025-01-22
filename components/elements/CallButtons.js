'use client';
import { Phone } from 'lucide-react';

export default function CallButtons() {
  const handleCall = () => {
    window.location.href = 'tel:+919908526444';
  };

  return (
    <>
      {/* Mobile Fixed Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg z-[9999] flex justify-around items-center py-3 px-4 space-x-4">
        <button
          onClick={handleCall}
          className="flex-1 bg-green-500 text-white py-2 px-4 rounded-full 
                   flex items-center justify-center space-x-2 shadow-md
                   active:scale-95 transition-transform"
        >
          <Phone className="w-5 h-5" />
          <span className="text-sm font-medium">Call Now</span>
        </button>
      </div>

      {/* Desktop Floating Button */}
      <button
        onClick={handleCall}
        className="fixed bottom-6 right-6 z-[9999] bg-green-500 hover:bg-green-600 
                 text-white rounded-full p-4 shadow-lg transform hover:scale-110 
                 transition-all duration-300 hidden md:flex items-center justify-center
                 animate-bounce hover:animate-none group"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6 group-hover:animate-wiggle" />
      </button>
    </>
  );
}
