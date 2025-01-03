'use client'
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/#about' },
  { title: 'Vehicles', href: '/#vehicles' },
  { title: 'Services', href: '/#services' },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      // Calculate scroll percentage
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setHasScrolled(scrollPercent >= 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 mx-auto max-w-7xl left-0 right-0 mt-3 transition-colors duration-300 rounded-lg pt-2 pb-2 ${hasScrolled ? 'bg-black' : 'bg-transparent'
      }`}>
      {/* Main Navbar */}
      <nav className={`transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
        }`}>
        <div className='px-3 py-2'>
          <div className='grid grid-cols-3'>
            {/* Menu Button */}
            <div className='flex justify-start items-center'>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className='p-2 text-white hover:text-[#D99029] transition-colors duration-200'
                aria-expanded={isMenuOpen}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X /> : <Image
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
                href='https://wa.me/+639951582171'
                className='py-2 px-4 md:border border-white text-white rounded-full hover:scale-105 
                          flex justify-center gap-1 items-center 
                          transition-all duration-300 ease-in-out transform'
              >
                Book Now <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-whatsapp" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Dropdown Menu */}
        <div
          className={`backdrop-blur-md transition-all duration-300 ease-in-out
                     overflow-hidden ${isMenuOpen ? 'max-h-96' : 'max-h-0'}
                     ${hasScrolled ? 'bg-black/20' : 'bg-black/20'}`}
        >
          {/* Desktop Menu (Horizontal) */}
          <div className='hidden lg:flex justify-center py-4 gap-8'>
            {navLinks.map((link, index) => (
              <Link
                key={link.title}
                href={link.href}
                className={`text-white transition-all duration-300 md:text-lg transform hover:scale-105 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
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
                          transform hover:scale-105 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
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