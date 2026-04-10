import React from 'react';
import Link from 'next/link';
import { reviews, renderStars } from '../lib/data';

export const metadata = {
  title: 'Customer Reviews | Elite Mobile Auto Repair - 5.0 Star Rating',
  description: 'Read authentic customer reviews for Elite Mobile Auto Repair. 5.0-star rating from satisfied customers throughout Morris County NJ. See why customers trust our mobile mechanics.',
};

export default function ReviewsPage() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Customer Reviews</h2>
        
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            {renderStars(5)}
          </div>
          <p className="text-3xl font-bold text-gray-900">5.0 out of 5</p>
          <p className="text-gray-600">Based on 32 Google Reviews</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg flex flex-col h-full">
              <div className="mb-4">
                <div className="flex mb-2">
                  {renderStars(review.rating)}
                </div>
                <p className="text-sm font-semibold text-red-600">{review.googleRating}</p>
                {review.service && (
                  <p className="text-xs text-gray-500 mt-1">Service: {review.service}</p>
                )}
              </div>
              <p className="text-gray-700 mb-4 italic text-sm flex-grow">&ldquo;{review.comment}&rdquo;</p>
              <div className="border-t pt-4 mt-auto">
                <p className="font-semibold text-gray-900">{review.name}</p>
                <p className="text-sm text-gray-500">{review.date}</p>
                {review.serviceType && (
                  <p className="text-xs text-gray-400 mt-1">{review.serviceType}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white text-center mb-16">
          <h3 className="text-2xl font-bold mb-4">
            Why Customers Choose Elite Mobile Auto Repair
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold mb-2">5.0</div>
              <div className="text-red-100">Star Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">32+</div>
              <div className="text-red-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-red-100">Satisfaction Rate</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Experience 5-Star Service?
          </h3>
          <p className="text-gray-600 mb-6">
            Join our satisfied customers and experience the convenience of professional mobile auto repair.
          </p>
          <Link 
            href="/contact"
            className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-full font-semibold hover:from-red-700 hover:to-red-800 transform hover:scale-105 transition-all duration-300"
          >
            Schedule Your Service
          </Link>
        </div>
      </div>
    </div>
  );
}