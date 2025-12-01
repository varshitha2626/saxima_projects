import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Home, Maximize, IndianRupee, Calendar, CheckCircle } from 'lucide-react';
import Layout from '../components/Layout';
import Button from '../components/ui/Button';
import { projects } from '../data/data';
import { motion } from 'framer-motion';

const ProjectDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projects.find(p => p.id === parseInt(id));

    if (!project) {
        return (
            <Layout>
                <div className="container-custom py-20 text-center">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">Project Not Found</h1>
                    <p className="text-gray-600 mb-8">The project you're looking for doesn't exist.</p>
                    <Button to="/projects">Back to Projects</Button>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            {/* Hero Section with Image */}
            <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                <img
                    src={project.image}
                    alt={project.name || "Project"}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 container-custom pb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <span className="bg-[#D4A017] text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
                                {project.status}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            {project.name || "Project Name To Be Declared"}
                        </h1>
                        <div className="flex items-center text-white/90 text-lg">
                            <MapPin size={20} className="mr-2 text-[#D4A017]" />
                            {project.location}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Project Details Section */}
            <section className="py-16 bg-background">
                <div className="container-custom">
                    <button
                        onClick={() => navigate('/projects')}
                        className="flex items-center text-[#1F4E79] hover:text-[#D4A017] transition-colors mb-8 font-medium"
                    >
                        <ArrowLeft size={20} className="mr-2" />
                        Back to Projects
                    </button>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Description */}
                            <div className="bg-white rounded-xl p-8 shadow-md">
                                <h2 className="text-2xl font-bold text-[#1F4E79] mb-4">About This Project</h2>
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    {project.description}
                                </p>
                            </div>

                            {/* Amenities */}
                            <div className="bg-white rounded-xl p-8 shadow-md">
                                <h2 className="text-2xl font-bold text-[#1F4E79] mb-6">Amenities & Features</h2>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {project.features.map((feature, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-[#D4A017]/10 transition-colors"
                                        >
                                            <CheckCircle size={20} className="text-[#D4A017] flex-shrink-0" />
                                            <span className="text-gray-700 font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar - Key Details */}
                        <div className="space-y-6">
                            <div className="bg-white rounded-xl p-6 shadow-md sticky top-24">
                                <h3 className="text-xl font-bold text-[#1F4E79] mb-6">Key Details</h3>

                                <div className="space-y-5">
                                    {/* BHK */}
                                    <div className="flex items-start gap-4 pb-5 border-b border-gray-200">
                                        <div className="bg-[#1F4E79]/10 p-3 rounded-lg">
                                            <Home size={24} className="text-[#1F4E79]" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 mb-1">Configuration</p>
                                            <p className="text-lg font-bold text-gray-800">{project.bhk}</p>
                                        </div>
                                    </div>

                                    {/* Size */}
                                    <div className="flex items-start gap-4 pb-5 border-b border-gray-200">
                                        <div className="bg-[#1F4E79]/10 p-3 rounded-lg">
                                            <Maximize size={24} className="text-[#1F4E79]" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 mb-1">Size</p>
                                            <p className="text-lg font-bold text-gray-800">{project.size}</p>
                                        </div>
                                    </div>

                                    {/* Price */}
                                    <div className={`flex items-start gap-4 ${!project?.possession && !project?.availableFloors ? '' : 'pb-5 border-b border-gray-200'}`}>
                                        <div className="bg-[#D4A017]/10 p-3 rounded-lg">
                                            <IndianRupee size={24} className="text-[#D4A017]" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 mb-1">Price</p>
                                            <p className="text-lg font-bold text-gray-800">{project.price}</p>
                                        </div>
                                    </div>

                                    {/* Possession - Only show if data exists */}
                                    {project?.possession && (
                                        <div className={`flex items-start gap-4 ${project?.availableFloors ? 'pb-5 border-b border-gray-200' : ''}`}>
                                            <div className="bg-[#1F4E79]/10 p-3 rounded-lg">
                                                <Calendar size={24} className="text-[#1F4E79]" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500 mb-1">Possession</p>
                                                <p className="text-lg font-bold text-gray-800">{project.possession}</p>
                                            </div>
                                        </div>
                                    )}

                                    {/* Available Floors - Only show if data exists */}
                                    {project.availableFloors && (
                                        <div className="flex items-start gap-4">
                                            <div className="bg-[#D4A017]/10 p-3 rounded-lg">
                                                <Home size={24} className="text-[#D4A017]" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500 mb-1">Available Floors</p>
                                                <p className="text-lg font-bold text-gray-800">{project.availableFloors}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Contact Button */}
                                <div className="mt-8 pt-6 border-t border-gray-200">
                                    <Button to="/contact" className="w-full">
                                        Enquire Now
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default ProjectDetails;
