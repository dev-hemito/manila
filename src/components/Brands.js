import React from 'react';

const Brands = () => {
  const brands = [
    { name: 'Toyota', logo: '/api/placeholder/160/160' },
    { name: 'Dodge ', logo: '/api/placeholder/160/160' },
    { name: 'Mitsubishi', logo: '/api/placeholder/160/160' },
    { name: 'Ford', logo: '/api/placeholder/160/160' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Our Brands</h2>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {brands.map((brand) => (
          <div
            key={brand.name}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-center p-4 cursor-pointer"
          >
            <div className="w-16 h-16 flex items-center justify-center overflow-hidden rounded-lg bg-gray-50">
              <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                className="w-12 h-12 object-contain"
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