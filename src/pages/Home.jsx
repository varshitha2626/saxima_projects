import React from 'react';
import Layout from '../components/Layout';
import Button from '../components/ui/Button';
import ProjectCard from '../components/ProjectCard';
import { projects, services, testimonials, stats } from '../data/data';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
                        alt="Modern Architecture"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[#1F4E79]/40 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-black/30" />
                </div>

                <div className="container-custom relative z-10 text-center text-white pt-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                    >
                        <span className='text-white'>Building Trust</span> <br />
                        <span className="text-[#D4A017]">Creating Landmarks</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto"
                    >
                        Saxima Projects Pvt. Ltd. delivers premium apartments with a commitment to quality, transparency, and innovation.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col sm:flex-row justify-center gap-4"
                    >
                        <Button to="/projects" variant="secondary" className="text-lg px-8 py-4">
                            Explore Projects
                        </Button>
                        <Button to="/contact" variant="white" className="text-lg px-8 py-4">
                            Contact Us
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 bg-[#1F4E79] text-white -mt-2 relative z-20">
                <div className="container-custom grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="p-4">
                            <div className="text-4xl md:text-5xl font-bold text-[#D4A017] mb-2">{stat.value}</div>
                            <div className="text-sm md:text-base text-gray-300 uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* About Teaser */}
            <section className="py-20 bg-white">
                <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#D4A017]/20 rounded-full z-0" />
                        <img
                            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1000"
                            alt="About Saxima"
                            className="relative z-10 rounded-lg shadow-xl w-full"
                        />
                        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#1F4E79]/10 rounded-full z-0" />
                    </div>

                    <div>
                        <h4 className="text-[#D4A017] font-bold uppercase tracking-widest mb-2">Who We Are</h4>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1F4E79] mb-6">Redefining Real Estate Standards</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            At Saxima Project Pvt. Ltd., we don't just build structures; we build relationships. With over 15 years of experience, we have established ourselves as a trusted name in the real estate industry, known for our commitment to quality, transparency, and timely delivery.
                        </p>
                        <ul className="space-y-3 mb-8">
                            {['Transparent Dealings', 'Premium Quality Construction', 'On-time Delivery', 'Legal Assurance'].map((item, index) => (
                                <li key={index} className="flex items-center text-gray-700">
                                    <CheckCircle className="text-[#D4A017] mr-3" size={20} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <Button to="/about" variant="primary">
                            Learn More About Us <ArrowRight size={18} className="ml-2" />
                        </Button>
                    </div>
                </div>
            </section>

            {/* Featured Projects */}
            <section className="py-20 bg-background">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h4 className="text-[#D4A017] font-bold uppercase tracking-widest mb-2">Our Portfolio</h4>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1F4E79] mb-4">Featured Projects</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Discover our landmark developments that blend luxury, comfort, and sustainability.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Button to="/projects" variant="outline">
                            View All Projects
                        </Button>
                    </div>
                </div>
            </section>

            {/* Services Preview */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h4 className="text-[#D4A017] font-bold uppercase tracking-widest mb-2">What We Do</h4>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1F4E79] mb-4">Our Services</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {services.slice(0, 3).map((service) => (
                            <div key={service.id} className="p-8 border border-gray-100 rounded-xl hover:shadow-xl transition-shadow bg-white group">
                                <div className="w-14 h-14 bg-[#1F4E79]/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#1F4E79] transition-colors">
                                    <service.icon className="text-[#1F4E79] group-hover:text-white transition-colors" size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-[#1F4E79] mb-3">{service.title}</h3>
                                <p className="text-gray-600 mb-4">{service.description}</p>
                                <Link to="/services" className="text-[#D4A017] font-medium hover:text-[#1F4E79] transition-colors inline-flex items-center">
                                    Read More <ArrowRight size={16} className="ml-1" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-[#1F4E79] text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white blur-3xl" />
                    <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-[#D4A017] blur-3xl" />
                </div>

                <div className="container-custom relative z-10">
                    <div className="text-center mb-16">
                        <h4 className="text-[#D4A017] font-bold uppercase tracking-widest mb-2">Testimonials</h4>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10">
                                <div className="flex text-[#D4A017] mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={18} fill="currentColor" />
                                    ))}
                                </div>
                                <p className="text-gray-200 mb-6 italic">"{testimonial.content}"</p>
                                <div className="flex items-center">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-[#D4A017]"
                                    />
                                    <div>
                                        <h5 className="font-bold text-white">{testimonial.name}</h5>
                                        <span className="text-sm text-gray-400">{testimonial.role}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <div className="bg-gradient-to-r from-primary to-blue-900 rounded-2xl p-12 text-center text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4A017]/20 rounded-full -mr-16 -mt-16 blur-2xl" />
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Dream Property?</h2>
                            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                                Contact us today to schedule a site visit or discuss your real estate requirements with our experts.
                            </p>
                            <Button to="/contact" variant="secondary" className="text-lg px-8 py-4">
                                Get in Touch
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Home;
