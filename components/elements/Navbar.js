import React, { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react'; // Import icons for hamburger menu

const Navbar = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleNavigation = (path) => {
        setIsTransitioning(true);
        setIsMobileMenuOpen(false); // Close mobile menu when navigating
        // Toggle between paths
        const targetPath = path === '/about' && pathname === '/about' ? '/' :
            path === '/product' && pathname === '/product' ? '/' : path;

        // Change the background color based on which section is clicked
        const bgColor = targetPath === '/about' ? 'rgb(83,247,83)' :
            targetPath === '/product' ? '#43c3ff' : '#ffffff';

        document.documentElement.style.setProperty('--nav-bg-color', bgColor);

        setTimeout(() => {
            router.push(targetPath);
            setIsTransitioning(false);
        }, 1000);
    };

    // Get display text based on current path and section
    const getDisplayText = (section) => {
        if (section === 'product') {
            return pathname === '/product' ? 'Home' : 'Product';
        } else if (section === 'about') {
            return pathname === '/about' ? 'Home' : 'About';
        }
    };

    return (
        <>
            {/* Mobile Navbar */}
            <div className="md:hidden fixed top-0 left-0 w-full bg-white shadow-lg z-[999]">
                <div className="flex justify-between items-center px-4 py-3">
                    <span className="text-xl font-semibold text-[#2A6177]">Sampoorna</span>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-gray-600 hover:text-[#2A6177]"
                    >
                        {isMobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="bg-white border-t">
                        <div className="flex flex-col">
                            <button
                                onClick={() => handleNavigation('/product')}
                                className={`px-4 py-3 text-left hover:bg-gray-50 ${
                                    pathname === '/product' ? 'text-[#43c3ff] font-semibold' : 'text-gray-600'
                                }`}
                            >
                                {getDisplayText('product')}
                            </button>
                            <button
                                onClick={() => handleNavigation('/about')}
                                className={`px-4 py-3 text-left hover:bg-gray-50 ${
                                    pathname === '/about' ? 'text-[rgb(83,247,83)] font-semibold' : 'text-gray-600'
                                }`}
                            >
                                {getDisplayText('about')}
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Desktop Navbar */}
            <div className="hidden md:flex h-screen fixed top-0 left-0 w-auto">
                {/* Product section */}
                <div
                    className={`w-12/12 h-screen bg-[#43c3ff] flex items-end justify-center py-36 cursor-pointer hover:opacity-80 transition-opacity duration-300
                        ${pathname === '/products' ? 'nav-active' : ''}`}
                    onClick={() => handleNavigation('/product')}
                >
                    <span className="text-white transform rotate-[270deg] text-[3vw] font-semibold">
                        {getDisplayText('product')}
                    </span>
                </div>

                {/* About section */}
                <div
                    className={`w-12/12 h-screen bg-[rgb(83,247,83)] flex items-end justify-center py-16 cursor-pointer hover:opacity-80 transition-opacity duration-300
                        ${pathname === '/about' ? 'nav-active' : ''}`}
                    onClick={() => handleNavigation('/about')}
                >
                    <span className="text-white transform rotate-[270deg] text-[3vw] font-semibold">
                        {getDisplayText('about')}
                    </span>
                </div>

                {/* Overlay */}
                {isTransitioning && (
                    <div className="fixed inset-0 nav-overlay z-50" style={{
                        backgroundColor: 'var(--nav-bg-color, rgb(83,247,83))'
                    }} />
                )}
            </div>
        </>
    );
};

export default Navbar;