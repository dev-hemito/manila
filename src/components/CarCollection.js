import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CarCard = ({ car }) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105">
    <div className="relative h-48">
      <Image
        src={car.image}
        alt={car.name}
        className="object-cover"
        fill
      />
    </div>
    <div className="p-4">
      <h3 className="font-semibold text-lg mb-2 flex justify-between">{car.name} {car.color?<><span className='bg-gray-200 py-1 px-3 rounded-full text-sm'>{car.color}</span></>: ''} </h3>
      <div className="flex justify-between items-center mb-4">
        <span className="text-2xl font-bold">₱{car.price}<span className="text-sm text-gray-500">/day</span></span>
      </div>
      <div className="flex justify-between mb-4">
        <div className="flex items-center gap-1">
          <svg className="w-5 h-5 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span className="text-sm text-gray-500">{car.mileage}</span>
        </div>
        <div className="flex items-center gap-1">
          <svg className="w-5 h-5 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
          <span className="text-sm text-gray-500">{car.transmission}</span>
        </div>
        <div className="flex items-center gap-1">
          <svg className="w-5 h-5 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
          </svg>
          <span className="text-sm text-gray-500">{car.passengers}</span>
        </div>
        <div className="flex items-center gap-1">
          <svg className="w-5 h-5 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
          <span className="text-sm text-gray-500">{car.type}</span>
        </div>
      </div>
      <a href='https://wa.me/+917994857990' className="w-full p-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
        Rent Now
      </a>
    </div>
  </div>
);

const CarCollection = () => {
  const cars = [
    {
      name: 'Land Cruiser',
      color:'black',
      price: '4000',
      image: '/cars/landcruiser.jpg',
      mileage: '25',
      transmission: 'Automatic',
      passengers: '4 Person',
      type: 'Electric'
    },
    {
      name: 'Dodge Challenger',
      color:'green',
      price: '3000',
      image: '/cars/dodgegreen.jpg',
      mileage: '25',
      transmission: 'Automatic',
      passengers: '4 Person',
      type: 'Electric'
    },
    {
      name: 'Toyota Alphard',
      color:'black and white',
      price: '2000',
      image: '/cars/aphard.jpg',
      mileage: '25',
      transmission: 'Automatic',
      passengers: '4 Person',
      type: 'Electric'
    },
    {
      name: 'Montero Sport',
      color:'white',
      price: '2000',
      image: '/cars/montero.png',
      mileage: '25',
      transmission: 'Automatic',
      passengers: '4 Person',
      type: 'Electric'
    },
    {
      name: 'Mustang GT',
      color:'',
      price: '3000',
      image: '/cars/mustang.jpg',
      mileage: '25',
      transmission: 'Automatic',
      passengers: '4 Person',
      type: 'Electric'
    },
    {
      name: 'Hiance Super Grandia',
      color:'white and black',
      price: '800',
      image: '/cars/hiace.jpg',
      mileage: '25',
      transmission: 'Automatic',
      passengers: '4 Person',
      type: 'Electric'
    },
    
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8" id='vehicles'>
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-2">Our Impressive Collection of Cars</h1>
        <p className="text-gray-600">
          Ranging from elegant sedans to powerful sports cars, all carefully selected to provide our customers with the ultimate driving experience.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cars.map((car, index) => (
          <CarCard key={index} car={car} />
        ))}
      </div>
    </div>
  );
};

export default CarCollection;
