import React from 'react';
import { services } from '../lib/data';
import { Phone, Clock, Wrench } from 'lucide-react';

export const metadata = {
  title: 'Mobile Auto Repair Services | Elite Mobile Auto Repair',
  description: 'Professional mobile automotive services in Morris County NJ: engine diagnostics, brake repair, oil changes, battery service, and emergency repairs at your location.',
};

export default function ServicesPage() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Mobile Auto Repair Services</h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow group">
              <service.icon className="w-12 h-12 text-red-600 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mb-16 bg-gradient-to-r from-red-50 to-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Complete Mobile Automotive Services</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Diagnostic & Repair Services</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Computer diagnostics and code scanning</li>
                <li>• Engine performance troubleshooting</li>
                <li>• Electrical system diagnostics</li>
                <li>• Check engine light diagnosis</li>
                <li>• Transmission service and repair</li>
                <li>• Cooling system service</li>
                <li>• Starter and alternator replacement</li>
                <li>• Fuel system cleaning and repair</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Maintenance & Prevention</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Oil changes (conventional & synthetic)</li>
                <li>• Brake pad and rotor replacement</li>
                <li>• Battery testing and replacement</li>
                <li>• Tire rotation and balancing</li>
                <li>• Air filter replacement</li>
                <li>• Fluid top-offs and replacements</li>
                <li>• Scheduled maintenance services</li>
                <li>• Pre-purchase vehicle inspections</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Book Now CTA */}
        <div className="bg-gray-900 rounded-2xl p-10 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Schedule Your Service?</h3>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Pick a service, choose a time, and we&apos;ll come to your location. It only takes 2 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://quotera.app/book/elite-mobile-auto-repair"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-700 transform hover:scale-105 transition-all duration-300"
            >
              Book Online
            </a>
            <a
              href="tel:9733527913"
              className="border-2 border-gray-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:border-white transition-all duration-300"
            >
              Call (973) 352-7913
            </a>
          </div>
        </div>

        {/* Service Guarantee Section */}
        <div className="mt-16 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Professional Mobile Service Throughout Morris County
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Wrench className="w-6 h-6 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg">Convenient Location Service</h4>
                  <p className="text-red-100">We come to your home, office, or roadside location - no need to visit a shop or wait in line.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-6 h-6 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg">Professional Equipment</h4>
                  <p className="text-red-100">Fully equipped mobile service vehicle with professional-grade tools and diagnostic equipment.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Clock className="w-6 h-6 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg">Fast Response Time</h4>
                  <p className="text-red-100">Same-day service available with emergency roadside assistance when you need it most.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">💯</span>
                <div>
                  <h4 className="font-semibold text-lg">Quality Guaranteed</h4>
                  <p className="text-red-100">All work backed by our satisfaction guarantee and competitive pricing with no hidden fees.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}