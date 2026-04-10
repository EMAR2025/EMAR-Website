'use client';

import React from 'react';
import Link from 'next/link';
import { Wrench, Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  const footerLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Service Areas', href: '/service-areas' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Contact', href: '/contact' }
  ];

  const services = [
    'Engine Diagnostics',
    'Brake Service', 
    'Oil Changes',
    'Battery Service',
    'Preventive Maintenance',
    'Emergency Repairs'
  ];

  return (
    <>
      {/* Main Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 mr-2 bg-red-600 rounded-full flex items-center justify-center">
                  <Wrench className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-xl font-bold">Elite Mobile Auto Repair</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Professional mobile automotive repair and maintenance services throughout Morris County and Northern New Jersey. We bring expertise and convenience directly to your location.
              </p>
              <div className="flex items-center text-gray-400 mb-2">
                <Clock className="w-4 h-4 mr-2" />
                <span className="text-sm">Opens 8 AM Daily</span>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2 text-gray-400">
                {services.map((service) => (
                  <li key={service} className="text-sm">
                    {service}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <div className="space-y-3 text-gray-400">
                <p className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <a 
                    href="tel:(973) 352-7913"
                    className="hover:text-white transition-colors"
                  >
                    (973) 352-7913
                  </a>
                </p>
                <p className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <a 
                    href="mailto:eliteautorepair25@gmail.com"
                    className="hover:text-white transition-colors"
                  >
                    eliteautorepair25@gmail.com
                  </a>
                </p>
                <p className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Morris County & Northern NJ
                </p>
              </div>
              
              {/* Emergency Service Notice */}
              <div className="mt-6 p-4 bg-red-600 rounded-lg">
                <h5 className="font-semibold text-white mb-2">Emergency Service Available</h5>
                <p className="text-red-100 text-sm">
                  Call us anytime for roadside assistance and emergency repairs.
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Elite Mobile Auto Repair LLC. All rights reserved.</p>
            <p className="text-sm mt-2">
              Licensed and Insured Mobile Automotive Services
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}