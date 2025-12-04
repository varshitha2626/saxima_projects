import React from 'react';
import Layout from '../components/Layout';
import { services } from '../data/data';
import { Check, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const Services = () => {
    return (
        <Layout>
            {/* Enhanced Page Header with gradient */}
            <div className="relative bg-gradient-subtle text-[#1F4E79] py-20 overflow-hidden">
                {/* Decorative elements */}
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
                        Our Services
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl text-gray-600 max-w-2xl mx-auto"
                    >
                        Comprehensive real estate solutions tailored to your needs.
                    </motion.p>
                </div>
            </div>

            {/* Enhanced Services List */}
            <section className="py-20 bg-white relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-1/4 left-0 w-72 h-72 bg-[#1F4E79]/5 rounded-full blur-3xl float" />
                <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-[#D4A017]/5 rounded-full blur-3xl float-delayed" />

                <div className="container-custom space-y-16 relative z-10">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`group flex flex-col md:flex-row gap-8 items-center bg-gradient-subtle p-10 rounded-2xl shadow-premium hover:shadow-premium-lg transition-all duration-500 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                                }`}
                        >
                            <div className="w-full md:w-1/3 flex justify-center">
                                <div className="relative">
                                    {/* Gradient glow effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#1F4E79] to-[#D4A017] rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />

                                    <div className="relative w-40 h-40 bg-gradient-to-br from-[#1F4E79]/10 to-[#D4A017]/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                        <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-premium">
                                            <service.icon className="text-[#1F4E79] group-hover:text-[#D4A017] transition-colors duration-300" size={56} />
                                        </div>
                                    </div>

                                    {/* Sparkle decoration */}
                                    <Sparkles className="absolute -top-2 -right-2 text-[#D4A017] opacity-0 group-hover:opacity-100 transition-opacity duration-500" size={24} />
                                </div>
                            </div>

                            <div className="w-full md:w-2/3">
                                <h3 className="text-3xl font-bold text-[#1F4E79] mb-4 group-hover:gradient-text transition-all duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                                    {service.description}
                                </p>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    {service.benefits.map((benefit, idx) => (
                                        <div key={idx} className="flex items-center text-gray-700 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-100 hover:border-[#D4A017] transition-colors duration-300">
                                            <div className="bg-gradient-to-br from-[#D4A017] to-[#F4C430] p-1.5 rounded-full mr-3 shadow-sm">
                                                <Check size={14} className="text-white" />
                                            </div>
                                            <span className="font-medium">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </Layout>
    );
};

export default Services;
