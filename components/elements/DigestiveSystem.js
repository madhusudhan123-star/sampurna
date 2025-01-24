"use client"; // Add this line at the top
import React, { useState, useEffect } from 'react'; // Add useEffect
import { motion } from 'framer-motion';
import Image from 'next/image';
import dia from './diagustive.png';

const DigestiveSystem = () => {
  const [activeOrgan, setActiveOrgan] = useState(null);
  const [isMobile, setIsMobile] = useState(false); // Add this state

  // Add this useEffect to handle window check
  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const organs = [
    {
      id: 'mouth',
      name: 'Mouth & Esophagus',
      description: 'Start of digestion - Chewing, enzyme release, and food passage.',
      position: {
        desktop: { top: '20%', left: '50%' },
        mobile: { top: '15%', left: '50%' }
      },
      color: '#FF6B6B',
      side: 'left'
    },
    {
      id: 'stomach',
      name: 'Stomach',
      description: 'Food breakdown using acid and enzymes. Key for protein digestion.',
      position: {
        desktop: { top: '42%', left: '52%' },
        mobile: { top: '35%', left: '52%' }
      },
      color: '#2A6177',
      side: 'right'
    },
    {
      id: 'smallIntestine',
      name: 'Small Intestine',
      description: 'Nutrient absorption powerhouse. 90% of digestion happens here.',
      position: {
        desktop: { top: '58%', left: '48%' },
        mobile: { top: '55%', left: '48%' }
      },
      color: '#4ECDC4',
      side: 'left'
    },
    {
      id: 'largeIntestine',
      name: 'Large Intestine',
      description: 'Water absorption and final processing. Important for gut health.',
      position: {
        desktop: { top: '72%', left: '50%' },
        mobile: { top: '70%', left: '50%' }
      },
      color: '#FF7F50',
      side: 'right'
    }
  ];

  // Skip rendering until we know if it's mobile or not
  if (typeof window === 'undefined') {
    return null;
  }

  return (
    <div className="relative w-full rounded-b-[70px] z-10 pt-10 md:pt-20 bg-gradient-to-r from-[#988967] via-[#F7E9CC] to-[#AB9C7A]">
      <div className="w-full max-w-[1920px] mx-auto px-2 md:px-8">
        <h2 className="text-2xl md:text-6xl font-bold text-center text-[#2A6177] mb-2 md:mb-4">
          Interactive Digestive System Guide
        </h2>
        <p className="text-center text-gray-600 text-sm md:text-base max-w-2xl mx-auto mb-6 md:mb-12 px-4">
          {isMobile ? 'Tap on different points to explore' : 'Explore how your digestive system works by hovering over different points'}
        </p>

        <div className="relative w-full h-[60vh] md:h-[90vh] p-2 md:p-8">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[90%] md:w-[60%] h-[95%]">
              <Image
                src={dia}
                alt="Interactive Digestive System Diagram"
                className="object-contain"
                fill
                priority
              />
            </div>
          </div>

          {organs.map((organ) => (
            <div
              key={organ.id}
              className="absolute z-20"
              style={{
                top: isMobile ? organ.position.mobile.top : organ.position.desktop.top,
                left: isMobile ? organ.position.mobile.left : organ.position.desktop.left,
              }}
            >
              <motion.div
                className="relative"
                initial="initial"
                animate="animate"
                onClick={() => setActiveOrgan(activeOrgan === organ.id ? null : organ.id)}
              >
                <motion.div
                  className="absolute -inset-4 md:-inset-6 rounded-full"
                  style={{ backgroundColor: organ.color }}
                  animate={{
                    opacity: [0.2, 0.1, 0.2],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                <div
                  className="w-8 h-8 md:w-12 md:h-12 rounded-full relative z-30"
                  style={{
                    backgroundColor: organ.color,
                    boxShadow: `0 0 30px ${organ.color}40`
                  }}
                >
                  <motion.div
                    className="absolute inset-2 rounded-full bg-white/50"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </motion.div>

              {/* Info Box - Mobile and Desktop versions */}
              {((isMobile && activeOrgan === organ.id) || !isMobile) && (
                <div
                  className={`absolute p-3 md:p-6 bg-white rounded-lg shadow-xl border-l-4
                    ${isMobile
                      ? 'w-[280px] -translate-x-1/2 left-1/2 top-[120%]'
                      : `${organ.side === 'left' ? '-left-[400px]' : '-right-[400px]'} 
                         top-1/2 -translate-y-1/2 w-[380px]`
                    } z-40`}
                  style={{
                    borderLeftColor: organ.color,
                    boxShadow: `0 4px 30px ${organ.color}30`
                  }}
                >
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3" style={{ color: organ.color }}>
                    {organ.name}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {organ.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DigestiveSystem;