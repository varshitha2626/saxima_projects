import React from 'react';
import Layout from '../components/Layout';
import { CheckCircle, Users, Target, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const About = () => {
    return (
        <Layout>
            {/* Page Header */}
            <div className="bg-gray-50 text-[#1F4E79] py-16">
                <div className="container-custom text-center">
                    <img
                        src={logo}
                        alt="Saxima Project"
                        className="h-48 mx-auto mb-6 object-contain"
                    />
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        About Us
                    </motion.h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Building a legacy of trust and excellence in the real estate industry.
                    </p>
                </div>
            </div>

            {/* Company Overview */}
            <section className="py-20 bg-white">
                <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h4 className="text-[#D4A017] font-bold uppercase tracking-widest mb-2">Our Story</h4>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1F4E79] mb-6">15 Years of Excellence</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Saxima Project Pvt. Ltd. was founded with a singular vision: to transform the real estate landscape by delivering high-quality projects that stand the test of time. Over the years, we have grown from a small consultancy firm to a full-fledged real estate development company.
                        </p>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Our journey has been defined by our unwavering commitment to transparency, customer satisfaction, and ethical business practices. We believe that a home is not just a structure, but a foundation for a better life.
                        </p>
                        <div className="grid grid-cols-2 gap-6 mt-8">
                            <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-[#D4A017]">
                                <h3 className="font-bold text-[#1F4E79] text-xl mb-1">Mission</h3>
                                <p className="text-sm text-gray-600">To create sustainable and innovative living spaces that enhance the quality of life.</p>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-[#1F4E79]">
                                <h3 className="font-bold text-[#1F4E79] text-xl mb-1">Vision</h3>
                                <p className="text-sm text-gray-600">To be the most trusted and preferred real estate developer in the region.</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000"
                            alt="Office Team"
                            className="rounded-lg shadow-xl w-full"
                        />
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 bg-background">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h4 className="text-[#D4A017] font-bold uppercase tracking-widest mb-2">Our Philosophy</h4>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1F4E79] mb-4">Core Values</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Target, title: 'Transparency', desc: 'We believe in open and honest communication with our clients at every step.' },
                            { icon: Award, title: 'Quality', desc: 'We never compromise on the quality of materials and construction standards.' },
                            { icon: Users, title: 'Customer Centric', desc: 'Our customers are at the heart of everything we do and every decision we make.' }
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
                                <div className="w-16 h-16 bg-[#1F4E79]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <item.icon className="text-[#1F4E79]" size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-[#1F4E79] mb-3">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h4 className="text-[#D4A017] font-bold uppercase tracking-widest mb-2">Our Team</h4>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1F4E79] mb-4">Leadership</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: 'John Saxima', role: 'Founder & CEO', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400' },
                            { name: 'Sarah Williams', role: 'Managing Director', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400' },
                            { name: 'Michael Chen', role: 'Head of Operations', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400' }
                        ].map((leader, index) => (
                            <div key={index} className="group text-center">
                                <div className="relative mb-6 overflow-hidden rounded-xl aspect-[3/4] mx-auto max-w-xs">
                                    <img
                                        src={leader.img}
                                        alt={leader.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-[#1F4E79]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                <h3 className="text-xl font-bold text-[#1F4E79]">{leader.name}</h3>
                                <p className="text-[#D4A017] font-medium">{leader.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout >
    );
};

export default About;
