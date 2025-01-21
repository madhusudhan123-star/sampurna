"use client";
import Navbar from '../components/elements/Navbar'
import Image from 'next/image'
import logo from './just_logo.png'
import { LiaArrowDownSolid } from "react-icons/lia";
import useLocomotive from '@/hooks/useLocomotive';
import { useEffect, useRef, useState } from 'react';
import harbel from '../assets/harbel.svg'
import heart from '../assets/heart.svg'
import relief from '../assets/relief.svg'
import bloating from '../assets/bloating.svg'
import product1 from '../assets/product_des.jpg'
import one from '../assets/t_one.svg'
import two from '../assets/t_two.svg'
import three from '../assets/t_three.svg'
import four from '../assets/t_four.png'
import five from '../assets/hala.png'
import six from '../assets/t_six.png'
import seven from '../assets/t_seven.avif'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules'; // Add Autoplay
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Add this import
import { Plus, Minus } from "lucide-react"; // Add this import at the top

export default function Home() {
  const videoRef = useRef(null);
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);
  const scrollRef = useRef(null);
  const lastScrollY = useRef(0);
  const initialScrollPosition = useRef(null);
  const videoSectionReached = useRef(false);

  // Add gradient animation state
  const [gradientPosition, setGradientPosition] = useState(0);

  // Add this new state for FAQ
  const [openFaq, setOpenFaq] = useState(null);

  const faqData = [
    {
      question: "What are the main benefits of Sampoorna Arogya?",
      answer: "Sampoorna Arogya offers comprehensive digestive health support through natural ingredients, helping with issues like bloating, indigestion, and maintaining overall gut health."
    },
    {
      question: "How should I take Sampoorna Arogya products?",
      answer: "The recommended dosage varies by product. Generally, our supplements should be taken with meals. Please refer to the specific product instructions or consult with your healthcare provider."
    },
    {
      question: "Are there any side effects?",
      answer: "Our products are made from natural ingredients and are generally safe for consumption. However, as with any supplement, some individuals may experience mild digestive adjustment initially."
    },
    {
      question: "How long does it take to see results?",
      answer: "Most users report improvements within 2-3 weeks of regular use. However, individual results may vary depending on specific conditions and consistency of use."
    }
  ];

  // Add scroll instance ref
  const locomotiveScrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setGradientPosition((prev) => (prev + 1) % 360);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Cleanup function to destroy previous scroll instance
    if (locomotiveScrollRef.current) {
      locomotiveScrollRef.current.destroy();
    }

    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      locomotiveScrollRef.current = new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
        multiplier: 0.7,
        lerp: 0.07,
        resetNativeScroll: true, // Add this
        reloadOnContextChange: true // Add this
      });

      // Reset scroll position
      window.scrollTo(0, 0);

      locomotiveScrollRef.current.on("scroll", ({ scroll }) => {
        if (!videoRef.current) return;

        const rect = videoRef.current.getBoundingClientRect();
        const offsetTop = rect.top;
        const triggerPoint = window.innerHeight * 0.3;

        if (offsetTop <= triggerPoint) {
          const progress = Math.min(1, (triggerPoint - offsetTop) / triggerPoint);
          const scale = Math.max(0.4, 1 - (progress * 0.6));

          videoRef.current.style.transform = `scale(${scale})`;
          videoRef.current.style.opacity = '1';

          if (leftTextRef.current && rightTextRef.current) {
            const textOpacity = Math.min(1, progress * 1.5);
            leftTextRef.current.style.opacity = textOpacity;
            rightTextRef.current.style.opacity = textOpacity;
          }
        } else {
          videoRef.current.style.transform = 'scale(1)';
          videoRef.current.style.opacity = '1';
          if (leftTextRef.current && rightTextRef.current) {
            leftTextRef.current.style.opacity = '0';
            rightTextRef.current.style.opacity = '0';
          }
        }
      });
    })();

    return () => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy();
        locomotiveScrollRef.current = null;
      }
    };
  }, []);

  return (
    <div className="flex relative bg-[#8de8f825] overflow-x-hidden min-h-screen">
      {/* Navbar container - Updated for mobile */}
      <div className='fixed left-0 top-0 md:w-1/5 w-full md:h-screen bg-[#8de8f825] shadow-lg z-[999]'>
        <Navbar />
      </div>

      {/* Main Content - Update top margin for mobile */}
      <div className="flex-1 md:ml-[20%] ml-0 mt-[60px] md:mt-0 relative" data-scroll-container>
        <main className="w-full flex flex-col">
          {/* Hero Section */}
          <div className='min-h-screen w-full relative overflow-hidden flex-none px-4 md:px-8'>
            {/* Gradient Background */}
            <div
              className="absolute inset-0 z-0 transition-all duration-1000 ease-in-out"
              style={{
                background: `linear-gradient(${gradientPosition}deg, 
                  rgba(249, 180, 9, 0.4), 
                  rgba(42, 104, 122, 0.4), 
                  rgba(114, 162, 94, 0.4)
                )`,
                filter: 'blur(100px)',
                transform: 'scale(1.2)',
              }}
            />

            <div className='relative z-10 w-full h-full'>
              {/* Header */}
              <div className='w-full flex flex-col md:flex-row justify-between items-center py-4 hidden md:flex'>
                <div className='flex items-center'>
                  <Image src={logo} alt="Logo" className='w-20 md:w-28' width={100} height={100} />
                  <h1 className='text-sm md:text-md'>Sampoorn <br /> Arogya</h1>
                </div>
                <div className='mt-4 md:mt-0'>
                  <button className="bg-orange-500 hover:bg-orange-400">Contact Us</button>
                </div>
              </div>

              {/* Hero Content */}
              <div className='flex flex-col justify-center items-center h-[calc(100vh-200px)]'>
                <h1 className='font-bold text-center md:text-left'>
                  <span className='relative md:-left-20 left-0 block md:inline'>
                    <span className='text-[8vw] md:text-[6vw]'>Sampoorn Arogya</span>
                    <span className='text-[3vw] md:text-[1.5vw] text-black block md:inline'>Your</span>
                  </span>
                  <span className='text-[6vw] md:text-[4vw] relative md:left-48 left-0 block mt-4 md:mt-0'>
                    Digestive Health Solution
                  </span>
                </h1>
                <p className='text-sm mt-10 md:mt-20 w-full md:w-1/2 text-center'>
                  Discover the Secret to a Healthy Digestive System with Sampoorna Arogya!
                </p>
              </div>
            </div>
          </div>

          {/* Video Section - Updated for mobile stacking */}
          <div className='w-full min-h-screen flex-none relative'>
            {/* Mobile Layout - Text Content */}
            <div className="md:hidden w-full space-y-8 px-4 py-8 bg-white">
              <div className="text-center space-y-4">
                <h3 className='text-2xl font-semibold text-black'>Your Health Journey</h3>
                <p className='text-lg text-gray-600'>
                  Experience the power of natural healing with our holistic approach to digestive wellness.
                </p>
              </div>

              {/* Video Container for Mobile */}
              <div className="w-full h-[300px] relative">
                <iframe
                  src="https://www.youtube.com/embed/AR0LKoBvSs0?autoplay=1&mute=0&controls=1&rel=0&loop=1&playlist=AR0LKoBvSs0"
                  title="YouTube video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className='w-full h-full'
                ></iframe>
              </div>

              <div className="text-center space-y-4">
                <h3 className='text-2xl font-semibold text-[#2E6572]'>Natural Solutions</h3>
                <p className='text-lg text-gray-600'>
                  Discover traditional remedies combined with modern wellness practices for optimal digestive health.
                </p>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:block w-full h-full">
              {/* Left text */}
              <div
                ref={leftTextRef}
                className='absolute left-10 top-1/2 -translate-y-1/2 max-w-[300px] text-black space-y-4 opacity-0 transition-opacity duration-300 z-[60] pointer-events-none'
              >
                <h3 className='text-2xl font-semibold'>Your Health Journey</h3>
                <p className='text-lg'>
                  Experience the power of natural healing with our holistic approach to digestive wellness.
                </p>
              </div>

              {/* YouTube video */}
              <div className="absolute inset-0 pointer-events-none">
                <iframe
                  ref={videoRef}
                  src="https://www.youtube.com/embed/AR0LKoBvSs0?autoplay=1&mute=0&controls=1&rel=0&loop=1&playlist=AR0LKoBvSs0"
                  title="YouTube video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className='w-full h-full transition-transform duration-150 ease-linear'
                ></iframe>
              </div>

              {/* Right text */}
              <div
                ref={rightTextRef}
                className='absolute right-10 top-1/2 -translate-y-1/2 max-w-[300px] text-[#2E6572] space-y-4 text-right opacity-0 transition-opacity duration-300 z-[60] pointer-events-none'
              >
                <h3 className='text-2xl font-semibold'>Natural Solutions</h3>
                <p className='text-lg'>
                  Discover traditional remedies combined with modern wellness practices for optimal digestive health.
                </p>
              </div>

              {/* Scrollability overlay */}
              <div className="absolute inset-0 z-[55]"></div>
            </div>
          </div>

          {/* Features Grid - Updated for mobile */}
          <div className='flex-none px-4 md:px-20'>
            <div className='flex flex-col justify-start items-center gap-8 md:gap-10'>
              <h1 className='text-3xl md:text-5xl text-center'>The Problem which it Solves</h1>
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-20'>
                <div className='flex flex-col items-center gap-4'>
                  <div className='relative w-32 h-32 rounded-full bg-[#8de8f825] flex justify-center items-center group cursor-pointer hover:bg-[#8de8f850] transition-all duration-300'>
                    <Image
                      src={harbel}
                      alt="Herbal"
                      className='w-20 h-20 object-contain group-hover:scale-110 transition-transform duration-300'
                    />
                  </div>
                  <h3 className='text-xl font-semibold text-[#2A6177]'>Natural Herbs</h3>
                  <p className='text-center text-sm text-gray-600 max-w-[200px]'> Pure herbal ingredients sourced from nature best resources </p>
                </div>

                <div className='flex flex-col items-center gap-4'>
                  <div className='relative w-32 h-32 rounded-full bg-[#8de8f825] flex justify-center items-center group cursor-pointer hover:bg-[#8de8f850] transition-all duration-300'>
                    <Image
                      src={heart}
                      alt="Heart"
                      className='w-20 h-20 object-contain group-hover:scale-110 transition-transform duration-300'
                    />
                  </div>
                  <h3 className='text-xl font-semibold text-[#2A6177]'>Heart Health</h3>
                  <p className='text-center text-sm text-gray-600 max-w-[200px]'>
                    Supports cardiovascular health and overall well-being
                  </p>
                </div>

                <div className='flex flex-col items-center gap-4'>
                  <div className='relative w-32 h-32 rounded-full bg-[#8de8f825] flex justify-center items-center group cursor-pointer hover:bg-[#8de8f850] transition-all duration-300'>
                    <Image
                      src={relief}
                      alt="Relief"
                      className='w-20 h-20 object-contain group-hover:scale-110 transition-transform duration-300'
                    />
                  </div>
                  <h3 className='text-xl font-semibold text-[#2A6177]'>Quick Relief</h3>
                  <p className='text-center text-sm text-gray-600 max-w-[200px]'>
                    Fast-acting formula for digestive discomfort
                  </p>
                </div>

                <div className='flex flex-col items-center gap-4'>
                  <div className='relative w-32 h-32 rounded-full bg-[#8de8f825] flex justify-center items-center group cursor-pointer hover:bg-[#8de8f850] transition-all duration-300'>
                    <Image
                      src={bloating}
                      alt="Bloating"
                      className='w-20 h-20 object-contain group-hover:scale-110 transition-transform duration-300'
                    />
                  </div>
                  <h3 className='text-xl font-semibold text-[#2A6177]'>Anti-Bloating</h3>
                  <p className='text-center text-sm text-gray-600 max-w-[200px]'>
                    Reduces bloating and improves digestive comfort
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Swiper Section - Updated for mobile */}
          <div className='w-full min-h-[40vh] flex justify-center items-center flex-col px-4 md:px-20 py-8'>
            <h1 className='text-3xl md:text-5xl text-center mb-8'>KEY INGREDIENTS</h1>
            <div className='w-full md:w-[50vw] h-[40vh] md:h-[50vh]'>
              <Swiper
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView="auto"
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination, Autoplay]} // Add Autoplay to modules
                className="mySwiper w-full pt-4 pb-4" // Reduced padding more
              >
                <SwiperSlide className="swiper-slide bg-cover bg-center rounded-md w-1/4 h-[40vh] relative"> {/* Reduced width to 1/4 and height to 20vh */}
                  <img
                    src="https://swiperjs.com/demos/images/nature-1.jpg"
                    className="block w-full h-full object-cover rounded-lg"
                    alt="Nature 1"
                  />
                  <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-3"> {/* Reduced padding */}
                    <h3 className="text-white text-lg font-bold">Ingredient 1</h3> {/* Reduced text size */}
                    <p className="text-white/90 text-xs">Description of the ingredient and its benefits</p> {/* Reduced text size */}
                  </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide bg-cover bg-center rounded-md w-1/4 h-[40vh] relative">
                  <img
                    src="https://swiperjs.com/demos/images/nature-2.jpg"
                    className="block w-full h-full object-cover rounded-lg"
                    alt="Nature 2"
                  />
                  <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-3"> {/* Reduced padding */}
                    <h3 className="text-white text-lg font-bold">Ingredient 2</h3> {/* Reduced text size */}
                    <p className="text-white/90 text-xs">Description of the ingredient and its benefits</p> {/* Reduced text size */}
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide bg-cover bg-center rounded-md w-1/4 h-[40vh] relative">
                  <img
                    src="https://swiperjs.com/demos/images/nature-3.jpg"
                    className="block w-full h-full object-cover rounded-lg"
                    alt="Nature 2"
                  />
                  <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-3"> {/* Reduced padding */}
                    <h3 className="text-white text-lg font-bold">Ingredient 2</h3> {/* Reduced text size */}
                    <p className="text-white/90 text-xs">Description of the ingredient and its benefits</p> {/* Reduced text size */}
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide bg-cover bg-center rounded-md w-1/4 h-[40vh] relative">
                  <img
                    src="https://swiperjs.com/demos/images/nature-4.jpg"
                    className="block w-full h-full object-cover rounded-lg"
                    alt="Nature 2"
                  />
                  <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-3"> {/* Reduced padding */}
                    <h3 className="text-white text-lg font-bold">Ingredient 2</h3> {/* Reduced text size */}
                    <p className="text-white/90 text-xs">Description of the ingredient and its benefits</p> {/* Reduced text size */}
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide bg-cover bg-center rounded-md w-1/4 h-[40vh] relative">
                  <img
                    src="https://swiperjs.com/demos/images/nature-5.jpg"
                    className="block w-full h-full object-cover rounded-lg"
                    alt="Nature 2"
                  />
                  <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-3"> {/* Reduced padding */}
                    <h3 className="text-white text-lg font-bold">Ingredient 2</h3> {/* Reduced text size */}
                    <p className="text-white/90 text-xs">Description of the ingredient and its benefits</p> {/* Reduced text size */}
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          {/* Product Sections - Updated for mobile */}
          <div className='w-full bg-[#8de8f825] p-4 md:p-6'>
            <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-10 items-center">
              <div className='w-full md:w-1/2'>
                <Image src={product1} className='w-full' />
              </div>
              <div className='w-full md:w-1/2'>
                <h1 className='text-3xl'>Tailwind CSS Component</h1>
                <p>Yes, there are several alternative tools related to Google that can help with PPC campaign management, keyword research, and competitor analysis. These tools leverage Google’s data and insights to help businesses optimize their digital advertising strategies. Here’s a list of alternatives:</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-10 items-center mt-10">
              <div className='w-full md:w-1/2'>
                <h1 className='text-3xl'>Tailwind CSS Component</h1>
                <p>Yes, there are several alternative tools related to Google that can help with PPC campaign management, keyword research, and competitor analysis. These tools leverage Google’s data and insights to help businesses optimize their digital advertising strategies. Here’s a list of alternatives:</p>
              </div>
              <div className='w-full md:w-1/2'>
                <Image src={product1} className='w-full' />
              </div>
            </div>
          </div>

          {/* Logo of the brand section */}
          <div className="w-full bg-white py-8">
            <div className="infinite-scroll">
              <div className="logo-container">
                <div className="logo-group">
                  <Image src={one} alt="Brand 1" className="h-24 w-auto" />
                  <Image src={two} alt="Brand 2" className="h-24 w-auto" />
                  <Image src={three} alt="Brand 3" className="h-24 w-auto" />
                  <Image src={four} alt="Brand 4" className="h-24 w-auto" />
                  <Image src={five} alt="Brand 5" className="h-24 w-auto" />
                  <Image src={six} alt="Brand 6" className="h-24 w-auto" />
                  <Image src={seven} alt="Brand 6" className="h-24 w-auto" />
                </div>
                <div className="logo-group">
                  <Image src={one} alt="Brand 1" className="h-24 w-auto" />
                  <Image src={two} alt="Brand 2" className="h-24 w-auto" />
                  <Image src={three} alt="Brand 3" className="h-24 w-auto" />
                  <Image src={four} alt="Brand 4" className="h-24 w-auto" />
                  <Image src={five} alt="Brand 5" className="h-24 w-auto" />
                  <Image src={six} alt="Brand 6" className="h-24 w-auto" />
                  <Image src={seven} alt="Brand 6" className="h-24 w-auto" />
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section - Updated for mobile */}
          <div className="w-full bg-[#8de8f825] px-4 md:px-20 py-8 md:py-16 flex-none">
            <h1 className="text-3xl md:text-5xl text-center mb-8 md:mb-12">Frequently Asked Questions</h1>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-sm overflow-hidden"
                >
                  <button
                    className="w-full px-6 py-4 text-left flex items-center justify-between"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <span className="text-lg font-medium text-[#2A6177]">{faq.question}</span>
                    {openFaq === index ? (
                      <Minus className="h-5 w-5 text-[#2A6177]" />
                    ) : (
                      <Plus className="h-5 w-5 text-[#2A6177]" />
                    )}
                  </button>
                  <div
                    className={`px-6 transition-all duration-300 ease-in-out ${openFaq === index ? "max-h-40 py-4" : "max-h-0"
                      } overflow-hidden`}
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Section */}
          <footer className="w-full bg-white px-4 md:px-20 py-12">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo and Description */}
                <div className="col-span-1">
                  <div className="flex items-center gap-2 mb-4">
                    <Image src={logo} alt="Logo" className='w-16' width={64} height={64} />
                    <h3 className='text-sm font-semibold'>Sampoorn <br /> Arogya</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Your trusted partner in natural digestive health solutions.
                  </p>
                </div>

                {/* Quick Links */}
                <div>
                  <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                  <ul className="space-y-2">
                    <li>
                      <button onClick={() => router.push('/')} className="text-gray-600 hover:text-[#43c3ff]">
                        Home
                      </button>
                    </li>
                    <li>
                      <button onClick={() => router.push('/about')} className="text-gray-600 hover:text-[#43c3ff]">
                        About Us
                      </button>
                    </li>
                    <li>
                      <button onClick={() => router.push('/product')} className="text-gray-600 hover:text-[#43c3ff]">
                        Products
                      </button>
                    </li>
                  </ul>
                </div>

                {/* Contact Info */}
                <div>
                  <h4 className="text-lg font-semibold mb-4">Contact</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>Email: info@sampoornaarogya.com</li>
                    <li>Phone: +91 XXX XXX XXXX</li>
                    <li>Location: Bangalore, India</li>
                  </ul>
                </div>

                {/* Legal Links */}
                <div>
                  <h4 className="text-lg font-semibold mb-4">Legal</h4>
                  <ul className="space-y-2">
                    <li>
                      <button className="text-gray-600 hover:text-[#43c3ff]">
                        Privacy Policy
                      </button>
                    </li>
                    <li>
                      <button className="text-gray-600 hover:text-[#43c3ff]">
                        Terms of Service
                      </button>
                    </li>
                    <li>
                      <button className="text-gray-600 hover:text-[#43c3ff]">
                        Return Policy
                      </button>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Copyright */}
              <div className="border-t mt-8 pt-8 text-center text-gray-600 text-sm">
                <p>© {new Date().getFullYear()} Sampoorna Arogya. All rights reserved.</p>
              </div>
            </div>
          </footer>

        </main>
      </div>
    </div>
  )
}