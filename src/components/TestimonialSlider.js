'use client'

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "I was really impressed with the level of service I received. The process was smooth and easy, and the quality exceeded my expectations. The staff was incredibly professional and attentive to my needs.",
    author: "Sarah Johnson",
    location: "New York",
    avatar: "/api/placeholder/40/40"
  },
  {
    id: 2,
    content: "Outstanding experience from start to finish! The attention to detail and customer service were exceptional. I particularly appreciated how responsive the team was to all my questions.",
    author: "Michael Chen",
    location: "California",
    avatar: "/api/placeholder/40/40"
  },
  {
    id: 3,
    content: "What sets this company apart is their commitment to excellence. They went above and beyond to ensure everything was perfect. I couldn't be happier with the results.",
    author: "Emma Thompson",
    location: "London",
    avatar: "/api/placeholder/40/40"
  },
  {
    id: 4,
    content: "Reliable, professional, and efficient. The entire experience was seamless from beginning to end. Their expertise in the field is evident in every interaction.",
    author: "David Rodriguez",
    location: "Miami",
    avatar: "/api/placeholder/40/40"
  },
  {
    id: 5,
    content: "Five stars all around! The quality of service was exceptional, and the team was incredibly knowledgeable and helpful. I'll definitely be using their services again.",
    author: "Lisa Anderson",
    location: "Seattle",
    avatar: "/api/placeholder/40/40"
  }
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
      
      <div className="relative bg-white rounded-lg shadow-lg p-8">
        <div className="flex flex-col items-center text-center min-h-[300px]">
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            "{testimonials[currentIndex].content}"
          </p>
          
          <div className="flex items-center mt-auto">
            <img
              src={testimonials[currentIndex].avatar}
              alt={testimonials[currentIndex].author}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="ml-4 text-left">
              <p className="font-semibold text-gray-800">
                {testimonials[currentIndex].author}
              </p>
              <p className="text-gray-500">
                From {testimonials[currentIndex].location}
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;