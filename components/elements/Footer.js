"use client"
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import logo from '@/app/just_logo.png';

export default function Footer() {
    const router = useRouter();

    return (
        <footer className="w-full bg-white px-4 md:px-20 py-12">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo and Description */}
                    <div className="col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <Image
                                src={logo}
                                alt="Logo"
                                className='w-16'
                                width={64}
                                height={64}
                                priority
                            />
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
                                <button
                                    onClick={() => router.push('/')}
                                    className="text-gray-600 hover:text-[#43c3ff] transition-colors duration-200"
                                >
                                    Home
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => router.push('/about')}
                                    className="text-gray-600 hover:text-[#43c3ff] transition-colors duration-200"
                                >
                                    About Us
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => router.push('/product')}
                                    className="text-gray-600 hover:text-[#43c3ff] transition-colors duration-200"
                                >
                                    Products
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 mr-5">Contact</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>Email: israelitesshopping171@gmail.com</li>
                            <li>Phone: +91 990-852-6444</li>
                            <li>Location: Bangalore, India</li>
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2">
                            <li>
                                <button
                                    onClick={() => router.push('/private')}
                                    className="text-gray-600 hover:text-[#43c3ff] transition-colors duration-200"
                                >
                                    Privacy Policy
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => router.push('/term')}
                                    className="text-gray-600 hover:text-[#43c3ff] transition-colors duration-200"
                                >
                                    Terms of Service
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => router.push('/shipping')}
                                    className="text-gray-600 hover:text-[#43c3ff] transition-colors duration-200"
                                >
                                    Shipping Policy
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => router.push('/cancel')}
                                    className="text-gray-600 hover:text-[#43c3ff] transition-colors duration-200"
                                >
                                    Cancellation Policy
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => router.push('/return')}
                                    className="text-gray-600 hover:text-[#43c3ff] transition-colors duration-200"
                                >
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
    );
}