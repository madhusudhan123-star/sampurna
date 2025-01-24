import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, EffectFade, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import img1 from '@/assets/ing/download.jpeg';
import img2 from '../../assets/ing/download1.jpeg';
import img3 from '../../assets/ing/download2.jpeg';
import img5 from '../../assets/ing/download4.jpeg';
import img6 from '../../assets/ing/download5.jpeg';
import img7 from '../../assets/ing/download6.jpeg';
import img8 from '../../assets/ing/download7.jpeg';
import img9 from '../../assets/ing/download8.jpeg';




const Slider = () => {
    const ingredients = [
        {
            image: img1,
            title: "Amla",
            description: "Powerful adaptogenic herb that helps reduce stress and anxiety",
            alt: "Ashwaganda herb illustration"
        },
        {
            image: img2,
            title: "Chitrak",
            description: "Ancient blend that supports digestive health and detoxification",
            alt: "Triphala blend illustration"
        },
        {
            image: img3,
            title: "Nagarmotha",
            description: "Rich in Vitamin C, supports immunity and digestion",
            alt: "Amla fruit illustration"
        },
        {
            image: img5,
            title: "Harad",
            description: "Natural digestive cleanser and rejuvenator",
            alt: "Haritaki fruit illustration"
        },
        {
            image: img6,
            title: "Giloy",
            description: "Holy basil with powerful anti-inflammatory properties",
            alt: "Tulsi plant illustration"
        },
        {
            image: img7,
            title: "Nisoth",
            description: "Holy basil with powerful anti-inflammatory properties",
            alt: "Tulsi plant illustration"
        },
        {
            image: img8,
            title: "Adrak",
            description: "Holy basil with powerful anti-inflammatory properties",
            alt: "Tulsi plant illustration"
        },
        {
            image: img9,
            title: "Jeera",
            description: "Holy basil with powerful anti-inflammatory properties",
            alt: "Tulsi plant illustration"
        },
    ];
    console.log(ingredients[0].image);

    return (
        <div className='w-full relative -top-16 pt-5 md:pt-0  flex justify-center items-center flex-col px-2 md:px-20 py-16 md:py-28 bg-black/95'>
            <h1 className='text-2xl md:text-6xl text-center mb-8 md:mb-16 text-white'>KEY INGREDIENTS</h1>
            <div className='w-full h-[300px] md:h-[500px]'>
                <Swiper
                    effect={window?.innerWidth < 768 ? "fade" : "coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true} // Enable infinite loop
                    slidesPerView={1}
                    spaceBetween={window?.innerWidth < 768 ? 0 : 30}
                    initialSlide={2}
                    speed={window?.innerWidth < 768 ? 1000 : 800} // Smooth transition speed
                    dir="rtl" // Add this to reverse direction
                    coverflowEffect={{
                        rotate: 15,
                        stretch: 0,
                        depth: 100,
                        modifier: 2,
                        slideShadows: false,
                    }}
                    fadeEffect={{
                        crossFade: true
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                        waitForTransition: true,
                        reverseDirection: true // Add this to reverse autoplay direction
                    }}
                    pagination={{
                        clickable: true,
                        dynamicBullets: window?.innerWidth >= 768, // Dynamic bullets for better UX
                    }}
                    breakpoints={{
                        768: {
                            effect: "coverflow",
                            slidesPerView: 1.8,
                            spaceBetween: 40,
                            coverflowEffect: {
                                rotate: 15,
                                stretch: 0,
                                depth: 100,
                                modifier: 2,
                                slideShadows: false,
                            }
                        },
                        1024: {
                            effect: "coverflow",
                            slidesPerView: 2.2,
                            spaceBetween: 50,
                            coverflowEffect: {
                                rotate: 15,
                                stretch: 0,
                                depth: 100,
                                modifier: 2,
                                slideShadows: false,
                            }
                        }
                    }}
                    modules={[EffectCoverflow, EffectFade, Pagination, Autoplay]}
                    className={`swiper-container ${window?.innerWidth >= 768 ? '!overflow-visible' : '!overflow-hidden'} rtl`} // Add rtl class
                >
                    {ingredients.map((ingredient, index) => (
                        <SwiperSlide
                            key={index}
                            className={`swiper-slide ${window?.innerWidth < 768
                                ? '!w-full !h-[250px] transition-opacity duration-1000 ease-in-out'
                                : '!w-[500px] !h-[400px]'
                                } relative rounded-xl overflow-hidden [transform-style:preserve-3d] [backface-visibility:hidden]`}
                        >
                            <div
                                className={`absolute inset-0 bg-cover bg-center ${window?.innerWidth < 768
                                    ? 'transition-transform duration-1000 ease-in-out scale-105'
                                    : 'transition-transform duration-300 hover:scale-110'
                                    } [transform-style:preserve-3d] [backface-visibility:hidden] [perspective:1000px]`}
                                style={{
                                    backgroundImage: `url(${ingredient.image.src})`,
                                    filter: window?.innerWidth < 768 ? 'brightness(0.9)' : 'none',
                                    willChange: 'transform'
                                }}
                                role="img"
                                aria-label={ingredient.alt}
                            />
                            <div className={`absolute inset-0 ${window?.innerWidth < 768
                                ? 'bg-gradient-to-t from-black/95 via-black/60 to-transparent'
                                : 'bg-gradient-to-t from-black/90 via-black/50 to-transparent'
                                } flex flex-col justify-end p-4 md:p-8`}>
                                <h3 className="text-white text-lg md:text-2xl font-bold mb-2">
                                    {ingredient.title}
                                </h3>
                                <p className="text-white/90 text-sm md:text-base leading-relaxed">
                                    {ingredient.description}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Slider;
