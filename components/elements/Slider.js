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
            description: "Powerful adaptogenic herb that helps reduce stress and anxiety"
        },
        {
            image: "https://swiperjs.com/demos/images/nature-2.jpg",
            title: "Triphala",
            description: "Ancient blend that supports digestive health and detoxification"
        },
        {
            image: "https://swiperjs.com/demos/images/nature-3.jpg",
            title: "Amla",
            description: "Rich in Vitamin C, supports immunity and digestion"
        },
        {
            image: "https://swiperjs.com/demos/images/nature-4.jpg",
            title: "Haritaki",
            description: "Natural digestive cleanser and rejuvenator"
        },
        {
            image: "https://swiperjs.com/demos/images/nature-5.jpg",
            title: "Tulsi",
            description: "Holy basil with powerful anti-inflammatory properties"
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
                    slidesPerView={'auto'}
                    initialSlide={2}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                        slideShadows: false,
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1.2,
                            coverflowEffect: {
                                stretch: 50,
                                depth: 100,
                                modifier: 1.5,
                            }
                        },
                        768: {
                            slidesPerView: 1.8,
                            coverflowEffect: {
                                stretch: 100,
                                depth: 150,
                                modifier: 1.5,
                            }
                        }
                    }}
                    modules={[EffectCoverflow, Pagination, Autoplay]}
                    className="swiper-container !overflow-visible"
                >
                    {ingredients.map((ingredient, index) => (
                        <SwiperSlide
                            key={index}
                            className="swiper-slide !w-[280px] md:!w-[500px] !h-[250px] md:!h-[400px]"
                            style={{
                                background: `url(${ingredient.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-4 md:p-8">
                                <h3 className="text-white text-lg md:text-2xl font-bold mb-2 md:mb-3">
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
