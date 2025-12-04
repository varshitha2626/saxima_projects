import React from 'react';
import Layout from '../components/Layout';
import Button from '../components/ui/Button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const Contact = () => {
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
                        Contact Us
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl text-gray-600 max-w-2xl mx-auto"
                    >
                        Get in touch with us for any inquiries or to schedule a site visit.
                    </motion.p>
                </div>
            </div>

            <section className="py-20 bg-background">
                <div className="container-custom grid lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-3xl font-bold text-[#1F4E79] mb-8">Get In Touch</h2>
                        <div className="space-y-8">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex items-start group"
                            >
                                <div className="bg-gradient-to-br from-[#D4A017]/10 to-[#D4A017]/5 p-4 rounded-xl shadow-premium group-hover:shadow-premium-lg transition-all duration-300 mr-6">
                                    <MapPin className="text-[#D4A017]" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#1F4E79] mb-2">Our Office</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Aryamitra crest, Block A, Flat no: 101,<br />
                                        Sai Gautham Colony Rd, Puppalaguda,<br />
                                        Manikonda, Hyderabad, Telangana 500089
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="flex items-start group"
                            >
                                <div className="bg-gradient-to-br from-[#D4A017]/10 to-[#D4A017]/5 p-4 rounded-xl shadow-premium group-hover:shadow-premium-lg transition-all duration-300 mr-6">
                                    <Phone className="text-[#D4A017]" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#1F4E79] mb-2">Phone</h3>
                                    <p className="text-gray-600">+91 90940 93333</p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="flex items-start group"
                            >
                                <div className="bg-gradient-to-br from-[#D4A017]/10 to-[#D4A017]/5 p-4 rounded-xl shadow-premium group-hover:shadow-premium-lg transition-all duration-300 mr-6">
                                    <Mail className="text-[#D4A017]" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#1F4E79] mb-2">Email</h3>
                                    <p className="text-gray-600">saximaprojectsales@gmail.com</p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="flex items-start group"
                            >
                                <div className="bg-gradient-to-br from-[#D4A017]/10 to-[#D4A017]/5 p-4 rounded-xl shadow-premium group-hover:shadow-premium-lg transition-all duration-300 mr-6">
                                    <Clock className="text-[#D4A017]" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#1F4E79] mb-2">Business Hours</h3>
                                    <p className="text-gray-600">Wednesday - Monday: 10:00 AM - 6:00 PM</p>
                                    <p className="text-gray-600">Tuesday: Closed</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Enhanced Contact Form */}
                    <div className="bg-gradient-subtle p-10 rounded-2xl shadow-premium-lg border border-white/50">
                        <h2 className="text-2xl font-bold text-[#1F4E79] mb-6">Send us a Message</h2>
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1F4E79] focus:border-transparent outline-none transition-all"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                                    <input
                                        type="tel"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1F4E79] focus:border-transparent outline-none transition-all"
                                        placeholder="Your Phone"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1F4E79] focus:border-transparent outline-none transition-all"
                                    placeholder="Your Email"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1F4E79] focus:border-transparent outline-none transition-all"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            <Button type="submit" className="w-full">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className="h-96 w-full bg-gray-200 relative">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.0688975472578!3d28.52758200617607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1645432123456!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Office Location"
                ></iframe>
            </section>
        </Layout>
    );
};

export default Contact;
