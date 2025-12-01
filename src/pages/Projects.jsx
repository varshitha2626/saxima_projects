import React from 'react';
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/data';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const Projects = () => {
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
                        Our Projects
                    </motion.h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Discover our portfolio of residential and commercial landmarks.
                    </p>
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
