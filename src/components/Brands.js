import Image from 'next/image';
import React from 'react';

const Brands = () => {
  const brands = [
    { name: 'Toyota', logo: '/Toyota_Logo.png' },
    { name: 'Dodge ', logo: '/Dodge_logo_2010.png' },
    { name: 'Mitsubishi', logo: '/mitsubishilogo.png' },
    { name: 'Ford', logo: '/Ford_logo.png' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Our Brands</h2>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {brands.map((brand) => (
          <div
            key={brand.name}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-center p-4 cursor-pointer"
          >
            <div className="w-full h-16 flex items-center justify-center overflow-hidden rounded-lg ">
              <Image
                src={brand.logo}
                alt={`${brand.name} logo`}
                className="w-full h-full object-contain"
                width={400}
                height={400}
              />
            </div>
            <span className="mt-3 text-sm font-medium text-gray-800">
              {brand.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;