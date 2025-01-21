"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button"
import Navbar from '@/components/elements/Navbar';

export default function ShippingPolicy() {
    const router = useRouter();

    const policyPoints = [
        {
            title: "1. Shipping Coverage",
            sections: [
                {
                    subtitle: "Domestic Shipping",
                    content: "We deliver to all major cities and towns across India. Pin code verification is available at checkout. Remote locations may require additional delivery time. Certain restricted areas may not be serviceable."
                },
                {
                    subtitle: "International Shipping",
                    content: "We are happy to offer international shipping to customers worldwide. Our goal is to deliver your order as quickly and efficiently as possible, no matter where you are."
                }
            ]
        },
        {
            title: "2. Shipping Methods",
            sections: [
                {
                    subtitle: "Standard Delivery",
                    content: "Delivery within 5–7 business days. Available across all serviceable locations."
                }
            ]
        },
        {
            title: "3. Shipping Partners",
            content: "We work with reputed courier partners, including:",
            list: ["Aramex", "DHL", "Blue Dart", "DTDC"]
        },
        {
            title: "4. Order Processing",
            sections: [
                {
                    subtitle: "Processing Time",
                    content: "Orders are processed within 24 hours of placement. Order confirmation is sent via email. Bulk orders may require additional processing time."
                },
                {
                    subtitle: "Order Tracking",
                    content: "A tracking number is provided via email. Customer service assistance is available for tracking queries."
                }
            ]
        },
        {
            title: "12. Customer Support",
            sections: [
                {
                    subtitle: "Email",
                    content: "israelitesshopping171@gmail.com"
                },
                {
                    subtitle: "Phone",
                    content: "990-852-6444"
                },
                {
                    subtitle: "Response time",
                    content: "Within 4 business hours during operational hours."
                }
            ]
        },
        {
            title: "13. Policy Updates",
            content: "This policy is subject to change. Updates will be posted on our website. Customers will be notified via email for significant changes at least 7 days in advance. Continued use of our services implies acceptance of the updated policy."
        }
    ];

    return (
        <div className="flex relative bg-white min-h-screen">
            <div className='fixed left-0 top-0 w-1/5 h-screen bg-transparent z-[999]'>
                <Navbar />
            </div>

            <div className="flex-1 ml-[0%] md:ml-[20%]">
                <div className="max-w-4xl mx-auto px-4 py-12">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            Shipping Policy
                        </h1>
                        <p className="text-gray-600">
                            Last Updated: December 2024
                        </p>
                    </div>

                    {/* Policy Content */}
                    <div className="space-y-8">
                        {policyPoints.map((point, index) => (
                            <div key={index} className="bg-gray-50 p-6 rounded-lg">
                                <h2 className="text-xl font-semibold text-[#2A6177] mb-4">
                                    {point.title}
                                </h2>
                                {point.sections ? (
                                    <div className="space-y-4">
                                        {point.sections.map((section, sIndex) => (
                                            <div key={sIndex}>
                                                <h3 className="font-medium text-gray-800 mb-2">
                                                    {section.subtitle}
                                                </h3>
                                                <p className="text-gray-600 leading-relaxed">
                                                    {section.content}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                ) : point.list ? (
                                    <>
                                        <p className="text-gray-600 mb-2">{point.content}</p>
                                        <ul className="pl-5 space-y-1">
                                            {point.list.map((item, lIndex) => (
                                                <li key={lIndex} className="text-gray-600">
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                ) : (
                                    <p className="text-gray-600 leading-relaxed">
                                        {point.content}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Contact Information */}
                    <div className="mt-12 bg-[#8de8f825] p-6 rounded-lg border border-[#43c3ff]/20">
                        <p className="text-gray-700 text-center">
                            For more information, contact us at{' '}
                            <a
                                href="mailto:israelitesshopping171@gmail.com"
                                className="text-[#2A6177] hover:underline"
                            >
                                israelitesshopping171@gmail.com
                            </a>
                        </p>
                    </div>

                    {/* Back Button */}
                    <div className="mt-8 text-center">
                        <Button
                            onClick={() => router.back()}
                            className="bg-[#43c3ff] hover:bg-[#43c3ff]/90 text-white"
                        >
                            Back to Previous Page
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
