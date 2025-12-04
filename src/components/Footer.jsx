import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { navLinks } from '../data/data';
import logo from '../assets/logo.jpeg';



const Footer = () => {
    return (
        <footer className="bg-[#1F4E79] text-white pt-16 pb-8">
            <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                {/* Brand Info */}
                <div>
                    <img src={logo} alt="Saxima Project" className="h-16 w-auto mb-4" />
                    <p className="text-gray-300 mb-6 leading-relaxed">
                        Building trust and creating landmarks. We are committed to delivering premium real estate solutions with transparency and quality.
                    </p>
                    <div className="flex space-x-4">
                        <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-[#D4A017] transition-colors">
                            <Facebook size={20} />
                        </a>
                        <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-[#D4A017] transition-colors">
                            <Twitter size={20} />
                        </a>
                        <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-[#D4A017] transition-colors">
                            <Instagram size={20} />
                        </a>
                        <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-[#D4A017] transition-colors">
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-lg font-bold mb-6 border-b-2 border-[#D4A017] inline-block pb-1">Quick Links</h4>
                    <ul className="space-y-3">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link to={link.path} className="text-gray-300 hover:text-[#D4A017] transition-colors flex items-center">
                                    <span className="mr-2">›</span> {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h4 className="text-lg font-bold mb-6 border-b-2 border-[#D4A017] inline-block pb-1">Our Services</h4>
                    <ul className="space-y-3">
                        <li className="text-gray-300 hover:text-[#D4A017] transition-colors cursor-pointer">
                            <span className="mr-2">›</span> Real Estate Development
                        </li>
                        <li className="text-gray-300 hover:text-[#D4A017] transition-colors cursor-pointer">
                            <span className="mr-2">›</span> Construction Management
                        </li>
                        <li className="text-gray-300 hover:text-[#D4A017] transition-colors cursor-pointer">
                            <span className="mr-2">›</span> Property Consulting
                        </li>
                        <li className="text-gray-300 hover:text-[#D4A017] transition-colors cursor-pointer">
                            <span className="mr-2">›</span> Land Acquisition
                        </li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-lg font-bold mb-6 border-b-2 border-[#D4A017] inline-block pb-1">Contact Us</h4>
                    <ul className="space-y-4">
                        <li className="flex items-start">
                            <MapPin className="text-[#D4A017] mr-3 mt-1 flex-shrink-0" size={20} />
                            <span className="text-gray-300">
                                Aryamitra Crest, Block A, Flat no: 101,<br />
                                Sai Gautham Colony Rd, Puppalaguda,<br />
                                Manikonda, Hyderabad, Telangana 500089
                            </span>
                        </li>
                        <li className="flex items-center">
                            <Phone className="text-[#D4A017] mr-3 flex-shrink-0" size={20} />
                            <span className="text-gray-300">+91 90940 93333</span>
                        </li>
                        <li className="flex items-center">
                            <Mail className="text-[#D4A017] mr-3 flex-shrink-0" size={20} />
                            <span className="text-gray-300">saximaprojectsales@gmail.com</span>
                        </li>
                        <li className="flex items-start">
                            <Clock className="text-[#D4A017] mr-3 mt-1 flex-shrink-0" size={20} />
                            <div className="text-gray-300">
                                <div className="font-semibold">Business Hours:</div>
                                <div>Wednesday - Monday: 10:00 AM - 6:00 PM</div>
                                <div>Tuesday: Closed</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-white/10 pt-8 mt-8">
                <div className="container-custom flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Saxima Project Pvt. Ltd. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
