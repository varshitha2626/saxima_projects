import { Home, Building, Key, FileText, PenTool, Briefcase } from 'lucide-react';
import akshayaImg from '../assets/Akshaya projects.jpg';
import gaganImg from '../assets/saxima gagana.jpg';
import shreeImg from '../assets/Shree_Towers.jpg';
import nenkampurImg from '../assets/Neknampur project.jpg';
import venkateswaraImg from '../assets/venkateswara colony project.jpg';
import saximaAdithiImg from '../assets/saxima adithi.png';
import saximaSarayuImg from '../assets/saxima sarayu.png';


export const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
];

// Shared amenities for all projects
export const commonAmenities = [
    'Car Parking',
    'Power Backup 24x7',
    'CCTV Surveillance',
    'Lift',
    'Bore',
    'Play Area at Ground Level',
    'Party Hall at Terrace'
];

// Amenities for Akshaya project (without Play Area and Party Hall)
export const akshayaAmenities = [
    'Car Parking',
    'Power Backup 24x7',
    'CCTV Surveillance',
    'Lift',
    'Bore'
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
        name: 'Saxima Adithi',
        status: 'Completed',
        description: '3BHK premium apartments with G+4 floors + 1 TDR. East facing units of 1535 sqft and North facing units of 1575 sqft. Each floor has 2 flats.',
        location: 'Vinayaka Nagar, Puppalaguda, Manikonda',
        bhk: '3 BHK',
        size: '1535 sqft & 1575 sqft',
        price: 'Sold Out',
        possession: 'Completed',
        features: akshayaAmenities,
        image: saximaAdithiImg
    },
    {
        id: 2,
        name: 'Saxima Sarayu',
        status: 'Completed',
        description: 'Total 5 floors with 4 flats per floor. 2 BHK apartments of 1110 & 1075 sqft and 3 BHK apartments of 1620 & 1400 sqft. East & North facing units.',
        location: 'LIC Colony, Puppalaguda, Manikonda',
        bhk: '2 & 3 BHK',
        size: '1075 - 1620 sqft',
        price: 'Sold Out',
        possession: 'Completed',
        features: akshayaAmenities,
        image: saximaSarayuImg,
    },
    {
        id: 3,
        name: 'Saxima Gagana',
        status: 'Ready to Occupy',
        description: '3BHK premium apartments with sizes ranging from 1575 sqft. East & West facing units with 2 flats per floor. 2nd and 3rd floors are available. Price starting from ₹1 crore 2 lakhs.',
        location: 'Narsingi',
        bhk: '3BHK',
        size: '1575 sqft',
        price: '₹1 Crore 2 Lakhs',
        possession: 'Ready to Occupy',
        availableFloors: '2nd and 3rd floors',
        features: akshayaAmenities,
        image: gaganImg
    },
    {
        id: 4,
        name: 'Akshaya',
        status: 'Ready to Occupy',
        description: '2 & 3 BHK apartments with sizes from 1140 sqft to 1405 sqft. East & West facing units. Price starts from ₹75 lakhs.',
        location: 'Alkapur Township, Rdno-04',
        bhk: '2 & 3 BHK',
        size: '1140 - 1405 sqft',
        price: 'Starts from ₹75 Lakhs',
        // possession: '',
        features: akshayaAmenities,
        image: akshayaImg
    },
    {
        id: 5,
        name: '', // Will display "Project Name To Be Declared"
        status: 'Upcoming',
        description: 'Semi-gated community with total 5 floors and 2BHK apartments. Sizes ranging from 1100 to 1315 sqft. East, West & North facing. Each floor has 5 flats. Price at ₹5800/- per sqft with 15 months possession.',
        location: 'Neknampur, Manikonda',
        bhk: '2 BHK',
        size: '1100 - 1315 sqft',
        price: '₹5800/- per sqft',
        possession: '15 months',
        features: commonAmenities,
        image: nenkampurImg
    },
    {
        id: 6,
        name: 'Shree Towers',
        status: 'Ongoing',
        description: 'Total 5 floors with 2BHK apartments sized at 1195 sqft. East and West facing with 4 flats per floor. Price at ₹6300/- per sqft with 4 year possession.',
        location: 'Manikonda',
        bhk: '2 BHK',
        size: '1195 sqft',
        price: '₹6300/- per sqft',
        possession: '1 year',
        features: akshayaAmenities,
        image: shreeImg
    },
    {
        id: 7,
        name: '', // Will display "Project Name To Be Declared"
        status: 'Upcoming',
        description: 'Total 5 floors with 2 & 3 BHK apartments. Sizes from 1175 sqft to 1815 sqft. East & West facing with 4 flats each floor. Price at ₹5800/- per sqft with 12 months possession (3 months Grace Period).',
        location: 'Venkateswara Colony, Manikonda',
        bhk: '2 & 3 BHK',
        size: '1175 - 1815 sqft',
        price: '₹5800/- per sqft',
        possession: '12 months (3 months Grace Period)',
        features: akshayaAmenities,
        image: venkateswaraImg
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
