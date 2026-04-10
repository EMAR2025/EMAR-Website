import { Wrench, Car, Clock, Shield, MapPin, Star, Phone, Settings, Zap, CheckCircle } from 'lucide-react';

// Auto repair services
export const services = [
  { 
    icon: Settings, 
    name: 'Engine Diagnostics', 
    description: 'Complete computer diagnostics and troubleshooting at your location' 
  },
  { 
    icon: Wrench, 
    name: 'Brake Service', 
    description: 'Brake pad replacement, rotor service, and brake system repair' 
  },
  { 
    icon: Car, 
    name: 'Oil Changes', 
    description: 'Full synthetic and conventional oil changes with filter replacement' 
  },
  { 
    icon: Zap, 
    name: 'Battery Service', 
    description: 'Battery testing, replacement, and electrical system diagnostics' 
  },
  { 
    icon: CheckCircle, 
    name: 'Preventive Maintenance', 
    description: 'Scheduled maintenance to keep your vehicle running smoothly' 
  },
  { 
    icon: Shield, 
    name: 'Emergency Repairs', 
    description: 'Mobile emergency repair service when you need it most' 
  }
];

// Customer reviews (adapted from villa reviews)
export const reviews = [
  {
    name: 'Michael R.',
    rating: 5,
    service: 'Brake Repair',
    comment: 'Elite Mobile came to my office and fixed my brakes right in the parking lot. Professional, fast, and saved me a whole day at the shop. The technician was knowledgeable and explained everything clearly. Highly recommend!',
    googleRating: '5/5 stars',
    date: 'Feb 10, 2026',
    serviceType: 'Brake pad replacement and rotor service'
  },
  {
    name: 'Sarah M.',
    rating: 5,
    service: 'Oil Change',
    comment: 'Incredibly convenient! They came to my house while I was working from home. Quality service, fair pricing, and I didn\'t have to waste time driving to a shop. Will definitely use them again.',
    googleRating: '5/5 stars',
    date: 'Jan 22, 2026',
    serviceType: 'Full synthetic oil change'
  },
  {
    name: 'David L.',
    rating: 5,
    service: 'Engine Diagnostics',
    comment: 'My car was making strange noises and they diagnosed the problem quickly. Fixed it the same day and explained exactly what was wrong. Great communication and honest pricing.',
    googleRating: '5/5 stars',
    date: 'Jan 15, 2026',
    serviceType: 'Engine diagnostic and repair'
  },
  {
    name: 'Jennifer K.',
    rating: 5,
    service: 'Emergency Service',
    comment: 'Car broke down on my way to an important meeting. Elite Mobile came out within an hour and got me back on the road. Saved my day! Professional and reliable service.',
    googleRating: '5/5 stars',
    date: 'Dec 18, 2025',
    serviceType: 'Emergency roadside repair'
  },
  {
    name: 'Robert T.',
    rating: 5,
    service: 'Preventive Maintenance',
    comment: 'Regular maintenance at my home is so convenient. They check everything and keep detailed records. It\'s like having a personal mechanic. Great service!',
    googleRating: '5/5 stars',
    date: 'Dec 5, 2025',
    serviceType: 'Scheduled maintenance service'
  }
];

export const renderStars = (rating) => {
  return Array.from({ length: 5 }, (_, i) => (
    <Star
      key={i}
      className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
    />
  ));
};

// Service area locations (adapted from Disney map locations)
export const serviceAreaLocations = [
  {
    id: 'morris-headquarters',
    name: 'Elite Mobile Auto Repair',
    type: 'headquarters',
    coordinates: [40.7956, -74.4814], // Morris County approximate center
    description: 'Mobile auto repair service covering Morris County and surrounding areas',
    driveTime: 'Service Hub',
    icon: '🔧'
  },
  {
    id: 'morristown',
    name: 'Morristown',
    type: 'service-area',
    coordinates: [40.7968, -74.4815],
    description: 'Full mobile auto repair services available',
    driveTime: '15 minutes coverage',
    icon: '🚗'
  },
  {
    id: 'parsippany',
    name: 'Parsippany',
    type: 'service-area',
    coordinates: [40.8584, -74.4299],
    description: 'Complete automotive services at your location',
    driveTime: '20 minutes coverage',
    icon: '🚗'
  },
  {
    id: 'randolph',
    name: 'Randolph',
    type: 'service-area',
    coordinates: [40.8418, -74.5810],
    description: 'Mobile mechanic services for all vehicle types',
    driveTime: '25 minutes coverage',
    icon: '🚗'
  },
  {
    id: 'dover',
    name: 'Dover',
    type: 'service-area',
    coordinates: [40.8845, -74.5627],
    description: 'Professional mobile auto repair and maintenance',
    driveTime: '25 minutes coverage',
    icon: '🚗'
  },
  {
    id: 'madison',
    name: 'Madison',
    type: 'service-area',
    coordinates: [40.7595, -74.4171],
    description: 'Convenient mobile auto services in your driveway',
    driveTime: '20 minutes coverage',
    icon: '🚗'
  },
  {
    id: 'florham-park',
    name: 'Florham Park',
    type: 'service-area',
    coordinates: [40.7881, -74.3854],
    description: 'Mobile automotive repair and diagnostics',
    driveTime: '15 minutes coverage',
    icon: '🚗'
  },
  {
    id: 'denville',
    name: 'Denville',
    type: 'service-area',
    coordinates: [40.8959, -74.4899],
    description: 'Professional mobile mechanic services',
    driveTime: '20 minutes coverage',
    icon: '🚗'
  },
  {
    id: 'chatham',
    name: 'Chatham',
    type: 'service-area',
    coordinates: [40.7409, -74.3854],
    description: 'Mobile auto repair and maintenance services',
    driveTime: '20 minutes coverage',
    icon: '🚗'
  },
  {
    id: 'summit',
    name: 'Summit',
    type: 'extended-area',
    coordinates: [40.7162, -74.3654],
    description: 'Extended service area - mobile auto repair available',
    driveTime: '30 minutes coverage',
    icon: '🔧'
  }
];

// Color scheme for different location types (automotive theme)
export const locationColors = {
  headquarters: '#CC3333',    // Red for main location (from logo)
  'service-area': '#2563EB', // Blue for primary service areas
  'extended-area': '#059669', // Green for extended coverage areas
  'emergency': '#DC2626'      // Darker red for emergency services
};