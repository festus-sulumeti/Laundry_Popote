import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LaundryImage from '../assets/images/1.png';
import ServiceImage from '../assets/images/service.png';
import EcoFriendlyImage from '../assets/images/eco-friendly.png';

const LaundryLanding = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
            {/* Navigation Bar */}
            <nav className="w-full flex justify-between items-center p-4 bg-white shadow-md">
                <h1 className="text-2xl font-bold text-blue-600">Laundry Popote</h1>
                <div className="lg:hidden">
                    <button
                        className="text-gray-600 focus:outline-none"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                       {menuOpen ? "✖" : "☰"}
                    </button>
                </div>
                <div className={`${menuOpen ? "flex" : "hidden"} md:flex md:space-x-6`}>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600" onClick={() => navigate('/login')}>Sign In</button>
                    <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600" onClick={() => navigate('/signup')}>Sign Up</button>
                </div>
            </nav>
            
            {/* Hero Section */}
            <div className="flex flex-col lg:flex-row items-center mt-10 w-full max-w-6xl">
                <div className="lg:w-1/2 text-center lg:text-left p-6">
                    <h2 className="text-4xl font-bold text-gray-800">Get your laundry & dry cleaning within 24 hours</h2>
                    <p className="text-lg text-gray-600 mt-4">A convenient laundry solution that helps protect the environment.</p>
                    <button className="mt-6 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">Learn More</button>
                </div>
                <div className="lg:w-1/2 p-6 flex justify-center">
                    <img src={LaundryImage} alt="Laundry Service" className="w-full max-w-md rounded-lg shadow-md" />
                </div>
            </div>
            
            {/* About Section */}
            <div className="bg-white p-6 rounded-lg shadow-md mt-10 w-full max-w-4xl text-center">
                <h3 className="text-2xl font-semibold text-gray-800">Why Choose Laundry Popote?</h3>
                <p className="text-gray-600 mt-4">Laundry Popote is your go-to solution for fast, affordable, and eco-friendly laundry services. We provide pickup and delivery, so you never have to worry about laundry again.</p>
                <div className="mt-6 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
                    <div className="flex-1 flex flex-col items-center text-center">
                        <img src={ServiceImage} alt="Convenient Service" className="w-48 h-48 rounded-lg shadow-md" />
                        <h4 className="text-lg font-semibold mt-2">Convenient Service</h4>
                        <p className="text-gray-600">Pickup & delivery at your doorstep.</p>
                    </div>
                    <div className="flex-1 flex flex-col items-center text-center">
                        <img src={EcoFriendlyImage} alt="Eco-Friendly" className="w-48 h-48 rounded-lg shadow-md" />
                        <h4 className="text-lg font-semibold mt-2">Eco-Friendly</h4>
                        <p className="text-gray-600">We use biodegradable detergents.</p>
                    </div>
                </div>
            </div>
            
            {/* Booking Section */}
            <div className="bg-white p-6 rounded-lg shadow-md mt-10 w-full max-w-4xl">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Schedule Your Collection</h3>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <div className="flex-1">
                        <label className="block text-gray-600">Earliest</label>
                        <input type="time" className="border p-2 rounded w-full" />
                    </div>
                    <div className="flex-1">
                        <label className="block text-gray-600">Latest</label>
                        <input type="time" className="border p-2 rounded w-full" />
                    </div>
                    <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">Search Slot</button>
                </div>
            </div>
        </div>
    );
};

export default LaundryLanding;
