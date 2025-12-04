import React from 'react';
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/data';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const Projects = () => {
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
                        Our Projects
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl text-gray-600 max-w-2xl mx-auto"
                    >
                        Discover our portfolio of residential and commercial landmarks.
                    </motion.p>
                </div>
            </div>

            {/* Projects Grid */}
            <section className="py-20 bg-background">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </section>
        </Layout >
    );
};

export default Projects;
