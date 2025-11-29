import React, { useState } from 'react';
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/data';
import { motion } from 'framer-motion';

const Projects = () => {
    const [filter, setFilter] = useState('All');

    const categories = ['All', 'Ongoing', 'Completed', 'Upcoming'];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.status === filter);

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
                        Our Projects
                    </motion.h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Discover our portfolio of residential and commercial landmarks.
                    </p>
                </div>
            </div>

            {/* Projects Grid */}
            <section className="py-20 bg-background">
                <div className="container-custom">
                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-2 rounded-full font-medium transition-all ${filter === cat
                                        ? 'bg-[#D4A017] text-white shadow-md'
                                        : 'bg-white text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.length > 0 ? (
                            filteredProjects.map((project) => (
                                <ProjectCard key={project.id} project={project} />
                            ))
                        ) : (
                            <div className="col-span-full text-center py-12">
                                <p className="text-xl text-gray-500">No projects found in this category.</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Projects;
