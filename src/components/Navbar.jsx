import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../data/data';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
            <div className="container-custom flex justify-between items-center">
                <Link to="/" className="flex items-center space-x-2">
                    <img
                        src={logo}
                        alt="Saxima Project"
                        className={`h-24 w-auto transition-all duration-300 ${(isHome || scrolled) ? 'opacity-100' : 'opacity-0'}`}
                        style={{
                            filter: (isHome && !scrolled) ? 'brightness(0) invert(1)' : 'none'
                        }}
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`font-medium transition-colors hover:text-[#D4A017] ${location.pathname === link.path
                                ? 'text-[#D4A017]'
                                : (scrolled || !isHome) ? 'text-[#4A4A4A]' : 'text-white'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="/contact"
                        className={`px-5 py-2 rounded-full font-medium transition-all ${(scrolled || !isHome)
                            ? 'bg-[#1F4E79] text-white hover:bg-opacity-90'
                            : 'bg-white text-[#1F4E79] hover:bg-gray-100'
                            }`}
                    >
                        Enquire Now
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? (
                        <X className={(scrolled || !isHome) ? 'text-[#4A4A4A]' : 'text-white'} size={28} />
                    ) : (
                        <Menu className={(scrolled || !isHome) ? 'text-[#4A4A4A]' : 'text-white'} size={28} />
                    )}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white shadow-lg overflow-hidden"
                    >
                        <div className="flex flex-col px-4 py-4 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`font-medium text-lg ${location.pathname === link.path ? 'text-[#D4A017]' : 'text-[#4A4A4A]'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                to="/contact"
                                className="bg-[#1F4E79] text-white text-center py-3 rounded-md font-medium"
                            >
                                Enquire Now
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
