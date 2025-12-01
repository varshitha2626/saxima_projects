import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import Button from './ui/Button';

const ProjectCard = ({ project }) => {
    return (
        <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="relative h-64 overflow-hidden">
                <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-[#D4A017] text-white px-3 py-1 rounded-full text-sm font-bold shadow-md">
                    {project.status}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="p-6">
                <h3 className="text-xl font-heading font-bold mb-2 text-[#1F4E79] group-hover:text-[#D4A017] transition-colors">
                    {project.name || "Project Name To Be Declared"}
                </h3>

                <div className="flex items-center text-gray-500 mb-4 text-sm">
                    <MapPin size={16} className="mr-1 text-[#D4A017]" />
                    {project.location}
                </div>

                <p className="text-gray-600 mb-6 line-clamp-2">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.features.slice(0, 3).map((feature, index) => (
                        <span
                            key={index}
                            className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-md"
                        >
                            {feature}
                        </span>
                    ))}
                </div>

                <Button to={`/projects/${project.id}`} variant="outline" className="w-full group-hover:bg-[#1F4E79] group-hover:text-white group-hover:border-[#1F4E79]">
                    View Details <ArrowRight size={16} className="ml-2" />
                </Button>
            </div>
        </div>
    );
};

export default ProjectCard;
