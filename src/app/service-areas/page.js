import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

export const metadata = {
  title: 'Service Areas | Elite Mobile Auto Repair - Morris County NJ',
  description: 'Elite Mobile Auto Repair serves Morris County and Northern New Jersey with professional mobile automotive services. See our complete service area coverage.',
};

export default function ServiceAreasPage() {
  const serviceAreas = [
    { name: 'Morristown', distance: '15 minutes', type: 'primary' },
    { name: 'Parsippany', distance: '20 minutes', type: 'primary' },
    { name: 'Randolph', distance: '25 minutes', type: 'primary' },
    { name: 'Dover', distance: '25 minutes', type: 'primary' },
    { name: 'Madison', distance: '20 minutes', type: 'primary' },
    { name: 'Florham Park', distance: '15 minutes', type: 'primary' },
    { name: 'Denville', distance: '20 minutes', type: 'primary' },
    { name: 'Chatham', distance: '20 minutes', type: 'primary' },
    { name: 'Summit', distance: '30 minutes', type: 'extended' },
    { name: 'Boonton', distance: '25 minutes', type: 'primary' },
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Service Areas</h2>
        
        <div className="text-center mb-12">
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Elite Mobile Auto Repair provides professional mobile automotive services throughout Morris County and surrounding areas in Northern New Jersey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {serviceAreas.map((area, index) => (
            <div key={index} className={`p-6 rounded-xl shadow-lg ${
              area.type === 'primary' ? 'bg-red-50 border border-red-200' : 'bg-gray-50 border border-gray-200'
            }`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <MapPin className={`w-5 h-5 mr-2 ${
                    area.type === 'primary' ? 'text-red-600' : 'text-gray-600'
                  }`} />
                  <h3 className="font-semibold text-gray-900">{area.name}</h3>
                </div>
                <span className={`text-sm font-medium ${
                  area.type === 'primary' ? 'text-red-600' : 'text-gray-600'
                }`}>
                  {area.distance}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Mobile Service Throughout Morris County
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Clock className="w-8 h-8 mx-auto mb-4" />
              <h4 className="font-semibold text-lg mb-2">Fast Response</h4>
              <p className="text-red-100">Same-day service available throughout our coverage areas</p>
            </div>
            <div>
              <MapPin className="w-8 h-8 mx-auto mb-4" />
              <h4 className="font-semibold text-lg mb-2">Wide Coverage</h4>
              <p className="text-red-100">Serving all of Morris County and expanding to nearby areas</p>
            </div>
            <div>
              <Phone className="w-8 h-8 mx-auto mb-4" />
              <h4 className="font-semibold text-lg mb-2">Emergency Service</h4>
              <p className="text-red-100">24/7 emergency roadside assistance available</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Don't See Your Area Listed?
          </h3>
          <p className="text-gray-600 mb-6">
            We're always expanding our service areas. Call us to check if we can serve your location.
          </p>
          <a 
            href="tel:(973) 352-7913"
            className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-full font-semibold hover:from-red-700 hover:to-red-800 transform hover:scale-105 transition-all duration-300"
          >
            Call (973) 352-7913
          </a>
        </div>
      </div>
    </div>
  );
}