import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionLink = motion.create(Link);

const Button = ({ children, to, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
        primary: "bg-[#1F4E79] text-white hover:bg-opacity-90 focus:ring-[#1F4E79]",
        secondary: "bg-[#D4A017] text-white hover:bg-opacity-90 focus:ring-[#D4A017]",
        outline: "bg-transparent border-[#1F4E79] text-[#1F4E79] hover:bg-[#1F4E79] hover:text-white focus:ring-[#1F4E79]",
        white: "bg-white text-[#1F4E79] hover:bg-gray-50 focus:ring-white"
    };

    const Component = to ? MotionLink : motion.button;

    return (
        <Component
            to={to}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            {...props}
        >
            {children}
        </Component>
    );
};

export default Button;
