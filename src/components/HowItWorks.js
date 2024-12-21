import Image from 'next/image';
import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: "Browse and select",
      description: "Choose from our wide range of premium cars, select the pickup and return dates and locations that suit you best."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Book and confirm",
      description: "Book your desired car with just a few clicks and receive an instant confirmation via email or SMS."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Enjoy your ride",
      description: "Pick up your car at the designated location and enjoy your premium driving experience with our top-quality service."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8" id='about'>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">How it works</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Renting a luxury car has never been easier. Our streamlined process makes it simple for you to book and confirm your vehicle of choice online
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-gray-100 p-3 rounded-lg">
                {step.icon}
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative h-96 lg:h-auto">
          <Image
            src="/cars/dodgegreen.jpg"
            alt="dodge"
            className="rounded-lg object-cover w-full h-full"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;