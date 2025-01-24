"use client";
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useInView } from 'react-intersection-observer';
import Navbar from '@/components/elements/Navbar';
import { Button } from "@/components/ui/button"

// Use a placeholder image for now - to be replaced later
import aboutHero from '../../assets/test/1920x1281_1.jpg';
import aboutBanner1 from '../../assets/test/1400x400.jpg';
import aboutBanner2 from '../../assets/test/1400x400_1.jpg';
import img1 from '../../assets/5.jpg';
import img2 from '../../assets/6.jpg';
import img3 from '../../assets/7.jpg';
import img4 from '../../assets/8.jpg';
import Footer from '@/components/elements/Footer';

export default function About() {
    const router = useRouter();
    const videoRef = useRef(null);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const [gradientPosition, setGradientPosition] = useState(0);

    // Animation hooks
    const [sectionRef, sectionInView] = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setGradientPosition((prev) => (prev + 1) % 360);
        }, 50);

        return () => clearInterval(interval);
    }, []);

    // Video control functions
    const handleVideoControl = () => {
        const iframe = videoRef.current;
        const player = iframe.contentWindow;

        if (isVideoPlaying) {
            player.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        } else {
            player.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        }
    };

    return (
        <div className="flex relative min-h-screen">
            {/* Navbar */}
            <div className='fixed left-0 top-0 md:w-1/5 w-full h-auto md:h-screen bg-transparent z-[999]'>
                <Navbar />
            </div>

            {/* Main Content */}
            <div className="flex-1 md:ml-[20%] ml-0 mt-[60px] md:mt-0">
                {/* Hero Section */}
                <section className='relative w-full h-[30vh] md:h-screen'>
                    <div className="absolute inset-0">
                        <Image
                            src={aboutHero}
                            alt="About Us Hero"
                            fill
                            priority
                            className="object-cover brightness-75"
                        />
                    </div>
                    <div className="relative z-10 h-full flex flex-col justify-center items-center px-4">
                        <h1 className="text-4xl md:text-7xl font-bold text-white text-center mb-6">
                            Our Story
                        </h1>
                        <p className="text-lg md:text-xl text-white text-center max-w-2xl">
                            Pioneering natural wellness through traditional wisdom
                        </p>
                    </div>
                </section>

                {/* Video Section 1 */}
                <div className="w-full min-h-[50vh] md:min-h-screen relative bg-white">
                    <div className="absolute inset-0">
                        <iframe
                            ref={videoRef}
                            src="https://www.youtube.com/embed/AR0LKoBvSs0?enablejsapi=1&autoplay=1&mute=1&controls=0&rel=0&loop=1&playlist=AR0LKoBvSs0&playsinline=1"
                            title="About Us Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                        />
                    </div>
                </div>

                {/* Banner Section 1 */}
                <div className="relative w-full">
                    <div className="aspect-[16/9] md:aspect-[21/9] relative">
                        <Image
                            src={aboutBanner1}
                            alt="Our Mission"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 z-10 flex items-center">
                            <div className="p-4 md:p-10 w-full md:w-1/2 text-white">
                                <h2 className="text-2xl md:text-4xl font-bold mb-4">Our Mission</h2>
                                <p className="text-sm md:text-lg mb-6">
                                    Transforming lives through natural wellness solutions
                                </p>
                                <Button className="bg-[rgb(76,238,84)] hover:bg-[#43c3ff]">
                                    Learn More
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Team Members Section */}
                <div className="py-16 md:py-24 px-4 md:px-8 bg-[#f8f9fa]">
                    <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Meet Our Team</h2>

                    {/* Team Member 1 */}
                    <div className="max-w-7xl mx-auto mb-16 md:mb-24">
                        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                            <div className="w-full md:w-1/2">
                                <div className="relative h-[300px] md:h-[500px] rounded-2xl overflow-hidden">
                                    <Image
                                        src={img1}
                                        alt="Dr. Sarah Johnson"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 space-y-4">
                                <h3 className="text-2xl md:text-4xl font-bold text-[#2A6177]">Dr. Sarah Johnson</h3>
                                <p className="text-xl text-[#43c3ff] font-semibold">Chief Ayurvedic Officer</p>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    With over 15 years of experience in Ayurvedic medicine, Dr. Johnson leads our research
                                    and product development team. Her innovative approach to combining traditional wisdom
                                    with modern science has been instrumental in creating our effective natural solutions.
                                </p>
                                <div className="flex gap-4 pt-4">
                                    <Button className="bg-[rgb(76,238,84)] hover:bg-[#43c3ff]">Read More</Button>
                                    <Button className="bg-[#2A6177] hover:bg-[#43c3ff]">Contact</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Team Member 2 */}
                    <div className="max-w-7xl mx-auto mb-16 md:mb-24">
                        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16">
                            <div className="w-full md:w-1/2 space-y-4">
                                <h3 className="text-2xl md:text-4xl font-bold text-[#2A6177]">Dr. Michael Chen</h3>
                                <p className="text-xl text-[#43c3ff] font-semibold">Research Director</p>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    Dr. Chen specializes in integrating traditional herbal medicine with modern
                                    wellness practices. His groundbreaking research has helped establish new
                                    standards in natural digestive health solutions.
                                </p>
                                <div className="flex gap-4 pt-4">
                                    <Button className="bg-[rgb(76,238,84)] hover:bg-[#43c3ff]">Read More</Button>
                                    <Button className="bg-[#2A6177] hover:bg-[#43c3ff]">Contact</Button>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2">
                                <div className="relative h-[300px] md:h-[500px] rounded-2xl overflow-hidden">
                                    <Image
                                        src={img2}
                                        alt="Dr. Michael Chen"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Team Member 3 */}
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                            <div className="w-full md:w-1/2">
                                <div className="relative h-[300px] md:h-[500px] rounded-2xl overflow-hidden">
                                    <Image
                                        src={img3}
                                        alt="Dr. Priya Patel"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 space-y-4">
                                <h3 className="text-2xl md:text-4xl font-bold text-[#2A6177]">Dr. Priya Patel</h3>
                                <p className="text-xl text-[#43c3ff] font-semibold">Product Development Head</p>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    Dr. Patel brings her extensive knowledge of herbal formulations and modern
                                    pharmaceutical standards to ensure our products meet the highest quality
                                    benchmarks while maintaining their natural effectiveness.
                                </p>
                                <div className="flex gap-4 pt-4">
                                    <Button className="bg-[rgb(76,238,84)] hover:bg-[#43c3ff]">Read More</Button>
                                    <Button className="bg-[#2A6177] hover:bg-[#43c3ff]">Contact</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Video Section 2 */}
                <div className="w-full min-h-[50vh] relative bg-black">
                    <div className="absolute inset-0">
                        <iframe
                            src="https://www.youtube.com/embed/AR0LKoBvSs0?enablejsapi=1&autoplay=1&mute=1&controls=0&rel=0&loop=1&playlist=AR0LKoBvSs0&playsinline=1"
                            title="Our Process"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                        />
                    </div>
                </div>

                {/* Banner Section 2 */}
                <div className="relative w-full">
                    <div className="aspect-[16/9] md:aspect-[21/9] relative">
                        <Image
                            src={aboutBanner2}
                            alt="Join Our Journey"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 z-10 flex items-center justify-end">
                            <div className="p-4 md:p-10 w-full md:w-1/2 text-white">
                                <h2 className="text-2xl md:text-4xl font-bold mb-4">Join Our Journey</h2>
                                <p className="text-sm md:text-lg mb-6">
                                    Be part of our mission to promote natural wellness
                                </p>
                                <Button
                                    onClick={() => router.push('/product')}
                                    className="bg-[rgb(76,238,84)] hover:bg-[#43c3ff]"
                                >
                                    Contact Us
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
}
