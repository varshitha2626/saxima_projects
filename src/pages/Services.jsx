import React from 'react';
import Layout from '../components/Layout';
import { services } from '../data/data';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
    return (
        <Layout>
            {/* Page Header */}
            <div className="bg-[#1F4E79] text-white py-20">
                <div className="container-custom text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        Our Services
                    </motion.h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Comprehensive real estate solutions tailored to your needs.
                    </p>
                </div>
            </div>

            {/* Services List */}
            <section className="py-20 bg-background">
                <div className="container-custom space-y-12">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className={`flex flex-col md:flex-row gap-8 items-center bg-white p-8 rounded-xl shadow-md ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                                }`}
                        >
                            <div className="w-full md:w-1/3 flex justify-center">
                                <div className="w-32 h-32 bg-[#1F4E79]/5 rounded-full flex items-center justify-center">
                                    <service.icon className="text-[#1F4E79]" size={64} />
                                </div>
                            </div>

                            <div className="w-full md:w-2/3">
                                <h3 className="text-2xl font-bold text-[#1F4E79] mb-4">{service.title}</h3>
                                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                                    {service.description}
                                </p>

                                <div className="grid sm:grid-cols-2 gap-3">
                                    {service.benefits.map((benefit, idx) => (
                                        <div key={idx} className="flex items-center text-gray-700">
                                            <div className="bg-[#D4A017]/20 p-1 rounded-full mr-3">
                                                <Check size={14} className="text-[#D4A017]" />
                                            </div>
                                            {benefit}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </Layout>
    );
};

export default Services;
