"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from '@/components/elements/Navbar';
import product1 from '../../assets/product_des.jpg';
import { Star, Minus, Plus } from 'lucide-react';

export default function Product() {
    const [quantity, setQuantity] = useState(1);
    const [gradientPosition, setGradientPosition] = useState(0);

    // Product details (you can replace with actual data)
    const product = {
        name: "Sampoorna Digestive Health Supplement",
        price: 499.00,
        description: "A natural supplement that promotes digestive health and overall wellness. Made with premium Ayurvedic ingredients.",
        features: [
            "100% Natural Ingredients",
            "Clinically Tested",
            "No Side Effects",
            "GMP Certified"
        ],
        ingredients: [
            "Triphala",
            "Yashtimadhu",
            "Amalaki",
            "Haritaki"
        ]
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
            <div className='fixed left-0 top-0 w-1/5 h-screen bg-[#8de8f825] shadow-lg z-[999]'>
                <Navbar />
            </div>

            {/* Main Content */}
            <div className="flex-1 ml-[0%] md:ml-[20%]">
                <div className="max-w-7xl mx-auto px-4 py-8">
                    {/* Product Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Product Image */}
                        <div className="relative h-[500px] rounded-2xl overflow-hidden">
                            <Image
                                src={product1}
                                alt={product.name}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Product Details */}
                        <div className="flex flex-col justify-between">
                            <div>
                                <h1 className="text-4xl font-bold mb-4">{product.name}</h1>

                                {/* Rating */}
                                <div className="flex items-center mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                    ))}
                                    <span className="ml-2 text-gray-600">(125 reviews)</span>
                                </div>

                                {/* Price */}
                                <div className="mb-6">
                                    <span className="text-3xl font-bold">₹{product.price}</span>
                                </div>

                                {/* Description */}
                                <p className="text-gray-600 mb-6">
                                    {product.description}
                                </p>

                                {/* Quantity Selector */}
                                <div className="flex items-center mb-6">
                                    <span className="mr-4">Quantity:</span>
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="p-2 border rounded-l"
                                    >
                                        <Minus className="w-4 h-4" />
                                    </button>
                                    <span className="px-4 py-2 border-t border-b">
                                        {quantity}
                                    </span>
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="p-2 border rounded-r"
                                    >
                                        <Plus className="w-4 h-4" />
                                    </button>
                                </div>

                                {/* Add to Cart Button */}
                                <button className="w-full bg-[#43c3ff] hover:bg-[#43c3ff]/90 text-white py-3 rounded-lg text-lg mb-6">
                                    Add to Cart - ₹{(product.price * quantity).toFixed(2)}
                                </button>
                            </div>

                            {/* Features */}
                            <div className="border-t pt-6">
                                <h3 className="font-semibold mb-3">Key Features:</h3>
                                <ul className="grid grid-cols-2 gap-2">
                                    {product.features.map((feature, index) => (
                                        <li key={index} className="flex items-center">
                                            <span className="w-2 h-2 bg-[#43c3ff] rounded-full mr-2"></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Additional Information */}
                    <div className="mt-16">
                        <h2 className="text-2xl font-bold mb-6">Product Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="font-semibold mb-4">Key Ingredients</h3>
                                <ul className="space-y-2">
                                    {product.ingredients.map((ingredient, index) => (
                                        <li key={index} className="flex items-center">
                                            <span className="w-2 h-2 bg-[#43c3ff] rounded-full mr-2"></span>
                                            {ingredient}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="font-semibold mb-4">How to Use</h3>
                                <p className="text-gray-600">
                                    Take 1-2 capsules daily with warm water after meals or as directed by your healthcare professional. For best results, use consistently for at least 3 months.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
