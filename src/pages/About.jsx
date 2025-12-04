import React from 'react';
import Layout from '../components/Layout';
import { CheckCircle, Users, Target, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const About = () => {
    return (
        <Layout>
            {/* Enhanced Page Header */}
            <div className="relative bg-gradient-subtle text-[#1F4E79] py-20 overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#D4A017]/10 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#1F4E79]/10 to-transparent rounded-full blur-3xl" />

                <div className="container-custom text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-6"
                    >
                        <img
                            src={logo}
                            alt="Saxima Project"
                            className="h-48 mx-auto object-contain drop-shadow-xl"
                        />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-5xl font-bold mb-4 gradient-text"
                    >
                        About Us
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl text-gray-600 max-w-2xl mx-auto"
                    >
                        Building a legacy of trust and excellence in the real estate industry.
                    </motion.p>
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
                            <div className="p-6 bg-gradient-to-br from-[#D4A017]/10 to-transparent rounded-xl border-l-4 border-[#D4A017] shadow-premium hover:shadow-premium-lg transition-all duration-300">
                                <h3 className="font-bold text-[#1F4E79] text-xl mb-2">Mission</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">To create sustainable and innovative living spaces that enhance the quality of life.</p>
                            </div>
                            <div className="p-6 bg-gradient-to-br from-[#1F4E79]/10 to-transparent rounded-xl border-l-4 border-[#1F4E79] shadow-premium hover:shadow-premium-lg transition-all duration-300">
                                <h3 className="font-bold text-[#1F4E79] text-xl mb-2">Vision</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">To be the most trusted and preferred real estate developer in the region.</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-br from-[#1F4E79]/20 to-[#D4A017]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <img
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000"
                            alt="Office Team"
                            className="relative rounded-2xl shadow-premium-lg w-full group-hover:scale-[1.02] transition-transform duration-500"
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
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group bg-gradient-subtle p-8 rounded-2xl shadow-premium hover:shadow-premium-lg transition-all duration-500 text-center"
                            >
                                <div className="relative inline-block mb-6">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#1F4E79] to-[#D4A017] rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                                    <div className="relative w-20 h-20 bg-gradient-to-br from-[#1F4E79]/10 to-[#D4A017]/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-premium">
                                            <item.icon className="text-[#1F4E79] group-hover:text-[#D4A017] transition-colors duration-300" size={32} />
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-[#1F4E79] mb-3 group-hover:gradient-text transition-all duration-300">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                            </motion.div>
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
                                <div className="relative mb-6 overflow-hidden rounded-2xl aspect-[3/4] mx-auto max-w-xs shadow-premium-lg">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#1F4E79]/20 to-[#D4A017]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                    <img
                                        src={leader.img}
                                        alt={leader.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
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
