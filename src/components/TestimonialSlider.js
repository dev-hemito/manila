'use client'

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "I was really impressed with the level of service I received. The process was smooth and easy, and the quality exceeded my expectations. The staff was incredibly professional and attentive to my needs.",
    author: "Sarah Johnson",
    location: "New York",
  },
  {
    id: 2,
    content: "Outstanding experience from start to finish! The attention to detail and customer service were exceptional. I particularly appreciated how responsive the team was to all my questions.",
    author: "Michael Chen",
    location: "California",
  },
  {
    id: 3,
    content: "What sets this company apart is their commitment to excellence. They went above and beyond to ensure everything was perfect. I couldn't be happier with the results.",
    author: "Emma Thompson",
    location: "London",
  },
  {
    id: 4,
    content: "Reliable, professional, and efficient. The entire experience was seamless from beginning to end. Their expertise in the field is evident in every interaction.",
    author: "David Rodriguez",
    location: "Miami",
  },
  {
    id: 5,
    content: "Five stars all around! The quality of service was exceptional, and the team was incredibly knowledgeable and helpful. I'll definitely be using their services again.",
    author: "Lisa Anderson",
    location: "Seattle",
  }
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);

  useEffect(() => {
    if (!autoplayEnabled) return;

    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, autoplayEnabled]);

  const handlePrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 md:py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-800">
        What Our Customers Say
      </h2>
      
      <div className="relative bg-white rounded-xl shadow-lg overflow-hidden">
        <div 
          className="p-4 md:p-8"
          onMouseEnter={() => setAutoplayEnabled(false)}
          onMouseLeave={() => setAutoplayEnabled(true)}
        >
          <div className="flex flex-col items-center text-center min-h-[200px] md:min-h-[200px] transition-all duration-500 ease-in-out">
            <div className="mb-6 md:mb-8">
              <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl">
                "{testimonials[currentIndex].content}"
              </p>
            </div>
            
            <div className="flex flex-col items-center space-y-1">
              <p className="font-semibold text-gray-800">
                {testimonials[currentIndex].author}
              </p>
              <p className="text-sm text-gray-500">
                From {testimonials[currentIndex].location}
              </p>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex 
                    ? 'w-4 h-2 bg-blue-600' 
                    : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 shadow-md hover:bg-gray-50 transition-all duration-200 border border-gray-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-gray-600" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 shadow-md hover:bg-gray-50 transition-all duration-200 border border-gray-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;