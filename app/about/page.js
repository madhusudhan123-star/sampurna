"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/elements/Navbar';
import about1 from '../../assets/product_des.jpg'; // Add your images
import about2 from '../../assets/product_des.jpg';
import mission from '../../assets/heart.svg';
import vision from '../../assets/heart.svg';
import values from '../../assets/heart.svg';

export default function About() {
    const [gradientPosition, setGradientPosition] = useState(0);
    const router = useRouter();

    useEffect(() => {
        const interval = setInterval(() => {
            setGradientPosition((prev) => (prev + 1) % 360);
        }, 50);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex relative bg-white min-h-screen">
            {/* Navbar */}
            <div className='fixed left-0 top-0 w-1/5 h-screen bg-transparent z-[999]'>
                <Navbar />
            </div>

            {/* Main Content */}
            <div className="flex-1 ml-[0%] md:ml-[20%] overflow-y-auto">
                {/* Hero Section */}
                <div className="relative h-screen">
                    {/* Gradient Background */}
                    <div
                        className="absolute inset-0 z-0 transition-all duration-1000 ease-in-out"
                        style={{
                            background: `linear-gradient(${gradientPosition}deg, 
                                rgba(83,247,83,0.4), 
                                rgba(42,104,122,0.4), 
                                rgba(131,247,83,0.4)
                            )`,
                            filter: 'blur(100px)',
                            transform: 'scale(1.2)',
                        }}
                    />

                    <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 md:px-8">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-6">
                            Our Journey to
                            <br />
                            <span className="text-[rgb(83,247,83)]">Natural Wellness</span>
                        </h1>
                        <p className="text-lg md:text-xl text-center max-w-2xl mx-auto">
                            Discover the story behind Sampoorna Arogya and our commitment to holistic health through natural ingredients.
                        </p>
                    </div>
                </div>

                {/* Story Section */}
                <div className="py-16 md:py-24 px-4 md:px-8 bg-[#f8f9fa]">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
                                <p className="text-gray-600 mb-4">
                                    Founded with a vision to revolutionize digestive health care, Sampoorna Arogya began its journey in the heart of traditional Ayurvedic medicine.
                                </p>
                                <p className="text-gray-600">
                                    We combined ancient wisdom with modern science to create natural, effective solutions for common digestive issues that affect millions worldwide.
                                </p>
                            </div>
                            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                                <Image
                                    src={about1}
                                    alt="Our Story"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mission, Vision, Values Section */}
                <div className="py-16 md:py-24 px-4 md:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: mission,
                                    title: "Our Mission",
                                    description: "To provide natural, effective solutions for digestive health while promoting overall wellness through traditional wisdom."
                                },
                                {
                                    icon: vision,
                                    title: "Our Vision",
                                    description: "To become the world's most trusted name in natural digestive health solutions, improving lives globally."
                                },
                                {
                                    icon: values,
                                    title: "Our Values",
                                    description: "Quality, transparency, sustainability, and commitment to customer well-being guide everything we do."
                                }
                            ].map((item, index) => (
                                <div key={index} className="text-center p-6 rounded-lg bg-[#f8f9fa] hover:shadow-lg transition-shadow duration-300">
                                    <div className="w-16 h-16 mx-auto mb-4">
                                        <Image
                                            src={item.icon}
                                            alt={item.title}
                                            width={64}
                                            height={64}
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Team Section */}
                <div className="py-16 md:py-24 px-4 md:px-8 bg-[#f8f9fa]">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Expert Team</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[1, 2, 3, 4].map((member) => (
                                <div key={member} className="text-center">
                                    <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden relative">
                                        <Image
                                            src={about2}
                                            alt={`Team Member ${member}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">Dr. John Doe</h3>
                                    <p className="text-gray-600">Ayurvedic Expert</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="py-16 md:py-24 px-4 md:px-8 bg-[rgb(83,247,83)]">
                    <div className="max-w-4xl mx-auto text-center text-white">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Journey</h2>
                        <p className="text-xl mb-8">
                            Experience the power of natural healing with Sampoorna Arogya
                        </p>
                        <button
                            onClick={() => router.push('/')}
                            className="bg-white text-[rgb(83,247,83)] px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors duration-300"
                        >
                            Explore Our Products
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
