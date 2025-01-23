import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Slider = () => {
    const ingredients = [
        {
            image: "https://swiperjs.com/demos/images/nature-1.jpg",
            title: "Ashwaganda",
            description: "Powerful adaptogenic herb that helps reduce stress and anxiety",
            alt: "Ashwaganda herb illustration"
        },
        {
            image: "https://swiperjs.com/demos/images/nature-2.jpg",
            title: "Triphala",
            description: "Ancient blend that supports digestive health and detoxification",
            alt: "Triphala blend illustration"
        },
        {
            image: "https://swiperjs.com/demos/images/nature-3.jpg",
            title: "Amla",
            description: "Rich in Vitamin C, supports immunity and digestion",
            alt: "Amla fruit illustration"
        },
        {
            image: "https://swiperjs.com/demos/images/nature-4.jpg",
            title: "Haritaki",
            description: "Natural digestive cleanser and rejuvenator",
            alt: "Haritaki fruit illustration"
        },
        {
            image: "https://swiperjs.com/demos/images/nature-5.jpg",
            title: "Tulsi",
            description: "Holy basil with powerful anti-inflammatory properties",
            alt: "Tulsi plant illustration"
        }
    ];

    return (
        <div className='w-full relative -top-8 md:-top-16 min-h-screen flex justify-center items-center flex-col px-2 md:px-20 py-16 md:py-28 bg-black/95'>
            <h1 className='text-2xl md:text-6xl text-center mb-8 md:mb-16 text-white'>KEY INGREDIENTS</h1>
            <div className='w-full h-[300px] md:h-[500px]'>
                <Swiper
                    effect="coverflow"
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true} // Enable infinite loop
                    slidesPerView={1}
                    spaceBetween={30}
                    initialSlide={2}
                    speed={800} // Smooth transition speed
                    coverflowEffect={{
                        rotate: 20, // Add slight rotation
                        stretch: 0,
                        depth: 200, // Increased depth effect
                        modifier: 1,
                        slideShadows: true,
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                        waitForTransition: true,
                    }}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true, // Dynamic bullets for better UX
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1.2,
                            spaceBetween: 20,
                            coverflowEffect: {
                                rotate: 10,
                                depth: 100,
                                modifier: 1,
                            }
                        },
                        640: {
                            slidesPerView: 1.5,
                            spaceBetween: 30,
                            coverflowEffect: {
                                rotate: 15,
                                depth: 150,
                                modifier: 1,
                            }
                        },
                        768: {
                            slidesPerView: 1.8,
                            spaceBetween: 40,
                            coverflowEffect: {
                                rotate: 20,
                                depth: 200,
                                modifier: 1,
                            }
                        },
                        1024: {
                            slidesPerView: 2.2,
                            spaceBetween: 50,
                            coverflowEffect: {
                                rotate: 20,
                                depth: 250,
                                modifier: 1,
                            }
                        }
                    }}
                    modules={[EffectCoverflow, Pagination, Autoplay]}
                    className="swiper-container !overflow-visible"
                >
                    {ingredients.map((ingredient, index) => (
                        <SwiperSlide
                            key={index}
                            className="swiper-slide !w-[280px] md:!w-[500px] !h-[250px] md:!h-[400px] relative rounded-xl overflow-hidden"
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 hover:scale-110"
                                style={{
                                    backgroundImage: `url(${ingredient.image})`,
                                }}
                                role="img"
                                aria-label={ingredient.alt}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent 
                                          flex flex-col justify-end p-4 md:p-8 transition-opacity duration-300 
                                          opacity-90 hover:opacity-100">
                                <h3 className="text-white text-lg md:text-2xl font-bold mb-2 md:mb-3 
                                             transform transition-transform duration-300 translate-y-4 
                                             group-hover:translate-y-0">
                                    {ingredient.title}
                                </h3>
                                <p className="text-white/90 text-sm md:text-base leading-relaxed 
                                            transform transition-transform duration-300 translate-y-4 
                                            group-hover:translate-y-0">
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
