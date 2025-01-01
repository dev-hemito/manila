'use client'
import React, { useState } from 'react';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';

const LocationSearch = () => {
  const [formData, setFormData] = useState({
    pickupLocation: '',
    pickupDate: '2023-12-12',
    dropoffLocation: '',
    dropoffDate: '2023-12-12'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const message = `
🚗 Vehicle Rental Request
📍 Pick-up: ${formData.pickupLocation}
📅 Pick-up Date: ${formData.pickupDate}
📍 Drop-off: ${formData.dropoffLocation}
📅 Drop-off Date: ${formData.dropoffDate}
    `.trim();

    // Replace PHONE_NUMBER with your desired WhatsApp number (with country code, no spaces or symbols)
    const phoneNumber = '+919622944590'
    
    // Create WhatsApp URL with encoded message
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappURL, '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className="relative -top-10 flex flex-wrap gap-4 items-center p-4 bg-gray-200 backdrop-blur-lg z-10 rounded-lg mx-auto max-w-7xl">
      {/* Pick-up Location */}
      <div className="flex flex-col flex-1 min-w-[200px]">
        <label className="text-sm text-gray-600 mb-1">Pick-up Location</label>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            name="pickupLocation"
            value={formData.pickupLocation}
            onChange={handleChange}
            placeholder="Enter your location"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
        </div>
      </div>

      {/* Pick-up Date */}
      <div className="flex flex-col flex-1 min-w-[200px]">
        <label className="text-sm text-gray-600 mb-1">Pick-up date</label>
        <div className="relative">
          <Calendar className=" hidden md:block absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="date"
            name="pickupDate"
            value={formData.pickupDate}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
        </div>
      </div>

      {/* Drop-off Location */}
      <div className="flex flex-col flex-1 min-w-[200px]">
        <label className="text-sm text-gray-600 mb-1">Drop-off Location</label>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            name="dropoffLocation"
            value={formData.dropoffLocation}
            onChange={handleChange}
            placeholder="Enter a location"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
        </div>
      </div>

      {/* Drop-off Date */}
      <div className="flex flex-col flex-1 min-w-[200px]">
        <label className="text-sm text-gray-600 mb-1">Drop-off date</label>
        <div className="relative">
          <Calendar className=" hidden md:block absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="date"
            name="dropoffDate"
            value={formData.dropoffDate}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
        </div>
      </div>

      {/* Find Vehicle Button */}
      <button 
        type="submit"
        className="flex items-center gap-2 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors mt-auto"
      >
        Find a Vehicle
        <ArrowRight className="w-5 h-5" />
      </button>
    </form>
  );
};

export default LocationSearch;
