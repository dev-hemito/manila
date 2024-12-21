'use client'
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Vehicles', href: '/vehicles' },
  { title: 'Contact', href: '/contact' },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <header className="fixed w-full z-50 mx-auto max-w-7xl left-0 right-0 mt-5 ">
      {/* Loading Animation */}


      {/* Main Navbar */}
      <nav className={`transform transition-all duration-1000 ${
        isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
      }`}>
        <div className=' px-3 py-2'>
          <div className='grid grid-cols-3'>
            {/* Menu Button */}
            <div className='flex justify-start items-center'>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className='p-2 text-white hover:text-[#D99029] transition-colors duration-200'
                aria-expanded={isMenuOpen}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X /> :  <Image
                                    src='/menu.png'
                                    width={500}
                                    height={500}
                                    className='w-10 h-auto'
                                    alt='logo'
                                    priority
                                />}
              </button>
            </div>

            {/* Logo */}
            <div className='flex justify-center items-center'>
              <Link href='/' className='transform transition-transform duration-200'>
                <Image
                  src='/logo.png'
                  width={500}
                  height={500}
                  className='md:h-12 w-auto h-auto'
                  alt='logo'
                  priority
                />
              </Link>
            </div>

            {/* Book Now Button */}
            <div className='flex justify-end items-center'>
              <Link
                href='/book'
                className='py-2 px-4 md:border border-white text-white rounded-full hover:scale-105 
                          flex justify-center items-center 
                          transition-all duration-300 ease-in-out transform '
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>

        {/* Dropdown Menu */}
        <div 
          className={`bg-black/20 backdrop-blur-md transition-all duration-300 ease-in-out
                     overflow-hidden ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}
        >
          {/* Desktop Menu (Horizontal) */}
          <div className='hidden lg:flex justify-center py-4 gap-8'>
            {navLinks.map((link, index) => (
              <Link
                key={link.title}
                href={link.href}
                className={`text-white  transition-all duration-300 md:text-lg   transform hover:scale-105 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 '}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* Mobile Menu (Vertical) */}
          <div className='lg:hidden flex flex-col items-center py-4 gap-4'>
            {navLinks.map((link, index) => (
              <Link
                key={link.title}
                href={link.href}
                className={`text-white hover:text-[#D99029] transition-all duration-300
                          transform hover:scale-105 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;