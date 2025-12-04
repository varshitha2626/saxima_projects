import React from 'react';
import { MapPin, ArrowRight, Sparkles } from 'lucide-react';
import Button from './ui/Button';

const ProjectCard = ({ project }) => {
    return (
        <div className="group relative bg-white rounded-2xl overflow-hidden shadow-premium hover:shadow-premium-lg transition-all duration-500 transform hover:-translate-y-3">
            {/* Decorative gradient blob */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-[#D4A017]/20 to-[#1F4E79]/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative h-64 overflow-hidden">
                <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Enhanced status badge with gradient */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-[#D4A017] to-[#F4C430] text-white px-4 py-2 rounded-full text-sm font-bold shadow-gold flex items-center gap-1.5">
                    <Sparkles size={14} />
                    {project.status}
                </div>

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F4E79]/80 via-[#1F4E79]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Glassmorphic info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 glass translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white text-sm font-medium">View Full Details →</p>
                </div>
            </div>

            <div className="p-6 relative">
                <h3 className="text-xl font-heading font-bold mb-2 text-[#1F4E79] group-hover:gradient-text transition-all duration-300">
                    {project.name || "Project Name To Be Declared"}
                </h3>

                <div className="flex items-center text-gray-500 mb-4 text-sm">
                    <MapPin size={16} className="mr-1 text-[#D4A017]" />
                    {project.location}
                </div>

                <p className="text-gray-600 mb-6 line-clamp-2 leading-relaxed">
                    {project.description}
                </p>

                {/* Enhanced feature tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.features.slice(0, 3).map((feature, index) => (
                        <span
                            key={index}
                            className="bg-gradient-to-r from-gray-50 to-blue-50 text-gray-700 text-xs px-3 py-1.5 rounded-lg border border-gray-200 hover:border-[#D4A017] transition-colors duration-300"
                        >
                            {feature}
                        </span>
                    ))}
                </div>

                <Button
                    to={`/projects/${project.id}`}
                    variant="outline"
                    className="w-full group-hover:bg-gradient-primary group-hover:text-white group-hover:border-transparent transition-all duration-300"
                >
                    View Details <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
            </div>
        </div>
    );
};

export default ProjectCard;
