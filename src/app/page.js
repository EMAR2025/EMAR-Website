'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Wrench, Star, Clock, Shield, Phone } from 'lucide-react';
import SplitText from './components/SplitText';

export default function HomePage() {
  const handleAnimationComplete = () => {
    console.log('Hero text animation completed!');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
          style={{ backgroundImage: `url(/mobile-mechanic-hero.jpg)` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="text-5xl md:text-7xl font-bold mb-6 leading-tight relative z-20">
            <SplitText
              text="Expert Mobile Auto Repair at Your Location"
              className="text-white drop-shadow-lg"
              tag="h1"
              delay={40}
              duration={0.40}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 60, rotationX: -90 }}
              to={{ opacity: 1, y: 0, rotationX: 0 }}
              threshold={0.2}
              rootMargin="-50px"
              textAlign="center"
              onLetterAnimationComplete={handleAnimationComplete}
            />
          </div>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Professional automotive repair services throughout Morris County and Northern New Jersey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://quotera.app/book/elite-mobile-auto-repair"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-red-700 hover:to-red-800 transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Book Online
            </a>
            <Link
              href="/contact"
              className="bg-white bg-opacity-20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-30 transform hover:scale-105 transition-all duration-300 border border-white border-opacity-30"
            >
              Contact Us
            </Link>
          </div>
          
          {/* Emergency Contact */}
          <div className="mt-8 flex items-center justify-center text-white">
            <Phone className="w-5 h-5 mr-2" />
            <span className="text-lg">Emergency Service: (973) 352-7913</span>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Star className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">5.0</h3>
              <p className="text-gray-600">Google Rating</p>
              <p className="text-sm text-gray-500 mt-1">32 Reviews</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Clock className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">24/7</h3>
              <p className="text-gray-600">Emergency Service</p>
              <p className="text-sm text-gray-500 mt-1">When you need us</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <MapPin className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Morris</h3>
              <p className="text-gray-600">County Coverage</p>
              <p className="text-sm text-gray-500 mt-1">& Surrounding Areas</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Shield className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">100%</h3>
              <p className="text-gray-600">Satisfaction</p>
              <p className="text-sm text-gray-500 mt-1">Guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Why Choose Elite Mobile Auto Repair?
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">We Come to You</h3>
              <p className="text-gray-600">
                Save time and hassle - our mobile service brings professional auto repair directly to your home, office, or roadside location.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Wrench className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Technicians</h3>
              <p className="text-gray-600">
                ASE-certified mechanics with years of experience and professional-grade tools to handle all your automotive repair needs.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Star className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">5-Star Service</h3>
              <p className="text-gray-600">
                Consistently rated 5 stars by customers for quality workmanship, fair pricing, and exceptional customer service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Complete Mobile Auto Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Wrench className="w-10 h-10 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Engine Diagnostics</h3>
              <p className="text-gray-600">Complete computer diagnostics and troubleshooting</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Shield className="w-10 h-10 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Brake Service</h3>
              <p className="text-gray-600">Brake pad replacement and brake system repair</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Clock className="w-10 h-10 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Oil Changes</h3>
              <p className="text-gray-600">Convenient oil changes at your location</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link 
              href="/services"
              className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-full font-semibold hover:from-red-700 hover:to-red-800 transform hover:scale-105 transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Schedule Your Service?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Get professional auto repair without leaving your location. Book your appointment today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://quotera.app/book/elite-mobile-auto-repair"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
            >
              Book Online
            </a>
            <a 
              href="tel:(973) 352-7913"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-red-600 transform hover:scale-105 transition-all duration-300"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}