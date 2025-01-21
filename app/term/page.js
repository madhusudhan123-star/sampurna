"use client";
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/elements/Navbar';
import Footer from '@/components/elements/Footer';

export default function TermsConditions() {
    const [gradientPosition, setGradientPosition] = useState(0);

    const termsData = {
        title: 'Terms & Conditions',
        lastUpdated: 'Last Updated: December 2024',
        sections: [
            {
                heading: "Welcome to Sampoorna Arogya!",
                content: "These terms and conditions outline the rules and regulations for the use of Sampoorna Arogya Website. By accessing this website we assume you accept these terms and conditions. Do not continue to use Sampoorna Arogya if you do not agree to take all of the terms and conditions stated on this page."
            },
            {
                heading: "Terminology",
                content: "The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice, and all Agreements: \"Client\", \"You\" and \"Your\" refers to you, the person who logs on to this website and is compliant with the Company's terms and conditions. \"The Company\", \"Ourselves\", \"We\", \"Our\" and \"Us\", refers to our Company. \"Party\", \"Parties\", or \"Us\", refers to both the Client and ourselves."
            },
            {
                heading: "Cookies",
                content: "We employ the use of cookies. By accessing Sampoorna Arogya, you agree to use cookies in agreement with our Privacy Policy. Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website."
            },
            // ...add other sections from your data
        ],
        footer: {
            message: "We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of any changes.",
            contact: "For any questions regarding our terms, please contact info@sampoornaarogya.com"
        }
    };

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
            <div className="flex-1 ml-[0%] md:ml-[20%]">
                <div className="max-w-4xl mx-auto px-4 py-16">
                    {/* Header with gradient */}
                    <div className="relative mb-12 p-8 rounded-lg overflow-hidden">
                        <div
                            className="absolute inset-0 z-0 transition-all duration-1000 ease-in-out opacity-20"
                            style={{
                                background: `linear-gradient(${gradientPosition}deg, 
                                    #2A6177, 
                                    #43c3ff, 
                                    #8de8f8
                                )`,
                            }}
                        />
                        <div className="relative z-10">
                            <h1 className="text-4xl font-bold text-center mb-2">{termsData.title}</h1>
                            <p className="text-center text-gray-600">{termsData.lastUpdated}</p>
                        </div>
                    </div>

                    {/* Terms Sections */}
                    <div className="space-y-12">
                        {termsData.sections.map((section, index) => (
                            <section key={index} className="prose max-w-none">
                                <h2 className="text-2xl font-semibold mb-4 text-[#2A6177]">
                                    {section.heading}
                                </h2>
                                {Array.isArray(section.content) ? (
                                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                                        {section.content.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-gray-600 leading-relaxed">
                                        {section.content}
                                    </p>
                                )}
                            </section>
                        ))}
                    </div>

                    {/* Footer Message */}
                    <div className="mt-12 space-y-4 p-6 bg-gray-50 rounded-lg">
                        <p className="text-center text-gray-600">
                            {termsData.footer.message}
                        </p>
                        <p className="text-center text-gray-600">
                            {termsData.footer.contact}
                        </p>
                    </div>

                    {/* Footer Component */}
                    <Footer />
                </div>
            </div>
        </div>
    );
}
