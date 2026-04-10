'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Clock, Wrench } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Convert pathname to current page for styling
  const getCurrentPage = () => {
    if (pathname === '/') return 'home';
    return pathname.slice(1); // Remove leading slash
  };

  const currentPage = getCurrentPage();

  const navItems = [
    { name: 'home', href: '/', label: 'Home' },
    { name: 'services', href: '/services', label: 'Services' },
    { name: 'service-areas', href: '/service-areas', label: 'Service Areas' },
    { name: 'reviews', href: '/reviews', label: 'Reviews' },
    { name: 'contact', href: '/contact', label: 'Contact' }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="w-12 h-12 mr-3 bg-red-600 rounded-full flex items-center justify-center">
              <Wrench className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Elite Mobile Auto Repair</h1>
              <p className="text-sm text-gray-600 hidden sm:block">Professional Mobile Mechanics</p>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <nav className="flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`capitalize font-medium transition-colors ${
                    currentPage === item.name
                      ? 'text-red-600 border-b-2 border-red-600'
                      : 'text-gray-700 hover:text-red-600'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            
            {/* Contact Info */}
            <div className="flex items-center space-x-4 border-l border-gray-200 pl-6">
              <div className="flex items-center text-gray-600">
                <Phone className="w-4 h-4 mr-2" />
                <a 
                  href="tel:(973) 352-7913"
                  className="font-medium hover:text-red-600 transition-colors"
                >
                  (973) 352-7913
                </a>
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="w-4 h-4 mr-2" />
                <span className="text-sm">Opens 8 AM</span>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left py-2 capitalize text-gray-700 hover:text-red-600"
              >
                {item.label}
              </Link>
            ))}
            
            {/* Mobile Contact Info */}
            <div className="pt-4 border-t border-gray-200 mt-4 space-y-2">
              <a 
                href="tel:(973) 352-7913"
                className="flex items-center text-gray-600 hover:text-red-600"
              >
                <Phone className="w-4 h-4 mr-2" />
                <span className="font-medium">(973) 352-7913</span>
              </a>
              <div className="flex items-center text-gray-600">
                <Clock className="w-4 h-4 mr-2" />
                <span className="text-sm">Opens 8 AM Daily</span>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}