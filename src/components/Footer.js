import React from 'react';
import { Github, Twitter, Linkedin, Mail, Facebook } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 w-full py-8 relative overflow-hidden">


      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Image
              src='/logo.png'
              width={500}
              height={500}
              className='md:h-12 w-auto h-auto'
              alt='logo'
              priority
            />
            <p className="text-sm">
              Creating digital experiences that inspire and innovate.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/#about" className="text-white">About</Link>
              <Link href="/#vehicles" className="text-white">Vehicles</Link>
              <Link href="/#services" className="text-white">Services</Link>
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect with us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200">
                <Twitter size={20} />
              </a>
             
              <a href="#" className="hover:text-white transition-colors duration-200">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">© 2024 Manila rent a car. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-sm hover:text-white transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-sm hover:text-white transition-colors duration-200">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;