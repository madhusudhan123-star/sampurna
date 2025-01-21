"use client";
import { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import Image from 'next/image';

const reviews = [
    {
        name: "John Doe",
        review: "Amazing product! Really helped with my digestion.",
        rating: 5,
        designation: "Verified Buyer",
        location: "Bangalore",
        date: "2 months ago"
    },
    {
        name: "Jane Smith",
        review: "Been using for 3 months, noticed great improvement.",
        rating: 4.5,
        designation: "Regular Customer",
        location: "Mumbai",
        date: "1 month ago"
    },
    {
        name: "Mike Johnson",
        review: "Natural and effective solution.",
        rating: 5,
        designation: "Health Expert",
        location: "Delhi",
        date: "3 months ago"
    },
    {
        name: "John Doe",
        review: "Amazing product! Really helped with my digestion.",
        rating: 5,
        designation: "Verified Buyer",
        location: "Bangalore",
        date: "2 months ago"
    },
    {
        name: "Jane Smith",
        review: "Been using for 3 months, noticed great improvement.",
        rating: 4.5,
        designation: "Regular Customer",
        location: "Mumbai",
        date: "1 month ago"
    },
    {
        name: "Mike Johnson",
        review: "Natural and effective solution.",
        rating: 5,
        designation: "Health Expert",
        location: "Delhi",
        date: "3 months ago"
    },
    {
        name: "John Doe",
        review: "Amazing product! Really helped with my digestion.",
        rating: 5,
        designation: "Verified Buyer",
        location: "Bangalore",
        date: "2 months ago"
    },
    {
        name: "Jane Smith",
        review: "Been using for 3 months, noticed great improvement.",
        rating: 4.5,
        designation: "Regular Customer",
        location: "Mumbai",
        date: "1 month ago"
    },
    {
        name: "Mike Johnson",
        review: "Natural and effective solution.",
        rating: 5,
        designation: "Health Expert",
        location: "Delhi",
        date: "3 months ago"
    }
];

const StarRating = ({ rating }) => (
    <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
            <svg
                key={i}
                className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ))}
    </div>
);

export default function ReviewSection() {
    const sceneRef = useRef(null);
    const engineRef = useRef(null);

    useEffect(() => {
        const Engine = Matter.Engine,
            Render = Matter.Render,
            World = Matter.World,
            Bodies = Matter.Bodies;

        engineRef.current = Engine.create({
            gravity: { x: 0, y: 0.5 }  // Reduced gravity for slower movement
        });

        const render = Render.create({
            element: sceneRef.current,
            engine: engineRef.current,
            options: {
                width: sceneRef.current.clientWidth,
                height: 300,
                wireframes: false,
                background: 'transparent'
            }
        });

        // Create bounds with rounded corners
        const ground = Bodies.rectangle(
            render.options.width / 2,
            render.options.height + 30,
            render.options.width,
            60,
            {
                isStatic: true,
                render: { fillStyle: 'transparent' }
            }
        );

        // Create floating bubbles with brand colors
        const bubbles = Array(8).fill().map(() => {
            const size = Math.random() * 20 + 10;
            return Bodies.circle(
                Math.random() * render.options.width,
                Math.random() * render.options.height,
                size,
                {
                    restitution: 0.8,
                    friction: 0.005,
                    render: {
                        fillStyle: Math.random() > 0.5 ? '#2A6177' : '#43c3ff',
                        opacity: 0.6
                    }
                }
            );
        });

        World.add(engineRef.current.world, [ground, ...bubbles]);

        Engine.run(engineRef.current);
        Render.run(render);

        return () => {
            Render.stop(render);
            World.clear(engineRef.current.world);
            Engine.clear(engineRef.current);
            render.canvas.remove();
        };
    }, []);

    return (
        <div className="relative w-full overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div ref={sceneRef} className="w-full h-[300px]" />
            </div>

            <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl text-center mb-16 font-bold text-[#2A6177]">
                    What Our Customers Say
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-20">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className="flex flex-col h-full">
                                <div className="mb-4">
                                    <StarRating rating={review.rating} />
                                </div>

                                <p className="text-gray-700 flex-grow mb-4 text-lg font-medium">
                                    "{review.review}"
                                </p>

                                <div className="border-t pt-4">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h4 className="font-semibold text-[#2A6177]">{review.name}</h4>
                                            <p className="text-sm text-gray-500">{review.designation}</p>
                                        </div>
                                        <div className="text-right text-sm text-gray-500">
                                            <p>{review.location}</p>
                                            <p>{review.date}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
