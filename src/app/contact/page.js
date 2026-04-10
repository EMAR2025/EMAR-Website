'use client';

import React from 'react';
import { MapPin, Phone, Mail, Clock, Wrench, Calendar, ArrowRight } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Get in Touch</h2>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Ready for mobile auto repair at your location? Book online in 2 minutes or reach out directly.
        </p>

        {/* Book Online CTA — Primary */}
        <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl shadow-xl p-12 text-center mb-16">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Book Your Service Online</h3>
            <p className="text-red-100 text-lg mb-8">
              Choose your service, pick a time, and we&apos;ll come to you.
              No phone tag — just fast, easy scheduling.
            </p>
            <a
              href="https://quotera.app/book/elite-mobile-auto-repair"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-red-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Book Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <p className="text-red-200 text-sm mt-4">
              Free estimates &bull; No obligation &bull; Same-day service available
            </p>
          </div>
        </div>

        {/* Contact Info + Emergency */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Details */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>

            <div className="space-y-6">
              <a href="tel:9733527913" className="flex items-center group">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-red-200 transition-colors">
                  <Phone className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Call or Text</p>
                  <p className="text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors">(973) 352-7913</p>
                </div>
              </a>

              <a href="mailto:eliteautorepair25@gmail.com" className="flex items-center group">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-red-200 transition-colors">
                  <Mail className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors">eliteautorepair25@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Service Area</p>
                  <p className="text-lg font-semibold text-gray-900">Morris County & Northern NJ</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <Clock className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Hours</p>
                  <p className="text-lg font-semibold text-gray-900">Opens 8 AM Daily</p>
                </div>
              </div>
            </div>
          </div>

          {/* Emergency Card */}
          <div className="bg-gray-900 rounded-2xl shadow-lg p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-4">
                  <Wrench className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Emergency Service</h3>
              </div>
              <p className="text-gray-300 text-lg mb-6">
                Broken down on the side of the road? Car won&apos;t start in your driveway?
                We offer emergency mobile repair service when you need it most.
              </p>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Roadside breakdowns
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Battery failures & jump starts
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Overheating & fluid leaks
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Brake issues & safety concerns
                </li>
              </ul>
            </div>
            <a
              href="tel:9733527913"
              className="block w-full bg-red-600 text-white text-center py-4 rounded-xl font-bold text-lg hover:bg-red-700 transform hover:scale-105 transition-all duration-300"
            >
              Call Now — (973) 352-7913
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
