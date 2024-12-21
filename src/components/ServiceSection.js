'use client'
import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      icon: "✨",
      title: "Quality Choice",
      description: "We offer a wide range of high-quality vehicles to choose from, including luxury cars, SUVs, vans, and more."
    },
    {
      icon: "💰",
      title: "Affordable Prices",
      description: "Our rental rates are highly competitive and affordable, allowing our customers to enjoy their trips without breaking the bank."
    },
    {
      icon: "🕒",
      title: "Convenient Online Booking",
      description: "With our easy-to-use online booking system, customers can quickly and conveniently reserve their rental car from anywhere, anytime."
    }
  ];

  return (
    <div className="bg-black text-white py-16 px-4" id='services'>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Our Services & Benefits
        </h2>
        
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          To make renting easy and hassle-free, we provide a variety of services and advantages. We have you covered with a variety of vehicles and flexible rental terms.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6"
            >
              <span className="text-3xl mb-4">{service.icon}</span>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;