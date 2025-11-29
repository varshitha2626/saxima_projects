import { Home, Building, Key, FileText, PenTool, Briefcase } from 'lucide-react';

export const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
];

export const services = [
    {
        id: 1,
        title: 'Real Estate Development',
        icon: Building,
        description: 'Transforming visions into reality with sustainable and modern residential and commercial developments.',
        benefits: ['Sustainable Design', 'Modern Amenities', 'Prime Locations']
    },
    {
        id: 2,
        title: 'Construction Management',
        icon: Home,
        description: 'End-to-end construction management ensuring quality, safety, and timely delivery of projects.',
        benefits: ['Quality Assurance', 'Safety Standards', 'Timely Delivery']
    },
    {
        id: 3,
        title: 'Property Consulting',
        icon: Key,
        description: 'Expert advice on property investment, buying, and selling to maximize your returns.',
        benefits: ['Market Analysis', 'Investment Strategy', 'Valuation Services']
    },
    {
        id: 4,
        title: 'Land Acquisition Services',
        icon: Briefcase,
        description: 'Strategic land acquisition services for developers and investors.',
        benefits: ['Legal Due Diligence', 'Negotiation', 'Site Analysis']
    },
    {
        id: 5,
        title: 'Legal & Documentation Support',
        icon: FileText,
        description: 'Comprehensive legal support to ensure hassle-free property transactions.',
        benefits: ['Title Verification', 'Documentation', 'Regulatory Compliance']
    },
    {
        id: 6,
        title: 'Project Planning & Architecture',
        icon: PenTool,
        description: 'Collaborative planning and architectural design for functional and aesthetic spaces.',
        benefits: ['Innovative Design', 'Space Optimization', 'Cost Efficiency']
    }
];

export const projects = [
    {
        id: 1,
        name: 'Saxima Heights',
        status: 'Ongoing',
        description: 'A premium residential complex offering luxury apartments with state-of-the-art amenities.',
        location: 'City Center, Metropolis',
        features: ['Swimming Pool', 'Gym', '24/7 Security', 'Green Parks'],
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1000'
    },
    {
        id: 2,
        name: 'Saxima Plaza',
        status: 'Completed',
        description: 'A modern commercial hub designed for businesses to thrive, featuring office spaces and retail outlets.',
        location: 'Business District, Metropolis',
        features: ['High-speed Elevators', 'Ample Parking', 'Conference Rooms', 'Cafeteria'],
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000'
    },
    {
        id: 3,
        name: 'Green Valley Villas',
        status: 'Upcoming',
        description: 'Exclusive gated community villas nestled in nature, providing a serene and peaceful lifestyle.',
        location: 'Suburbs, Metropolis',
        features: ['Private Garden', 'Clubhouse', 'Jogging Track', 'Smart Home Features'],
        image: 'https://images.unsplash.com/photo-1613490493576-2f5033157979?auto=format&fit=crop&q=80&w=1000'
    }
];

export const testimonials = [
    {
        id: 1,
        name: 'Rajesh Kumar',
        role: 'Homeowner',
        content: 'Saxima Project made my dream home a reality. The quality of construction and attention to detail is unmatched.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
    },
    {
        id: 2,
        name: 'Priya Sharma',
        role: 'Investor',
        content: 'Professionalism and transparency are what define Saxima. Highly recommended for real estate investments.',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
    },
    {
        id: 3,
        name: 'Amit Patel',
        role: 'Business Owner',
        content: 'Our office space at Saxima Plaza is perfect. The location and amenities have boosted our business operations.',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
    }
];

export const stats = [
    { label: 'Years of Experience', value: '15+' },
    { label: 'Projects Completed', value: '50+' },
    { label: 'Happy Families', value: '2000+' },
    { label: 'Square Feet Developed', value: '1M+' }
];
