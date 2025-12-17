import React from 'react';
import { Trophy, Waves, Zap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const sports = [
  {
    id: 'cricket',
    name: 'Cricket',
    icon: Trophy,
    description: 'Professional turf & net practice facilities with hourly slot booking',
    features: ['Turf Ground', 'Net Practice', 'Hourly Slots', 'Professional Equipment'],
    image: '/sports/cricket.jpeg',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'badminton',
    name: 'Badminton',
    icon: Zap,
    description: 'Indoor wooden courts with professional-grade flooring and lighting',
    features: ['Wooden Courts', 'Indoor Facility', 'Hour-based Booking', 'Quality Equipment'],
    image: '/sports/mainbad.jpeg',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'swimming',
    name: 'Swimming',
    icon: Waves,
    description: 'Clean, well-maintained swimming pool with trained lifeguards',
    features: ['Olympic Pool', 'Timed Batches', 'Slot System', 'Safety First'],
    image: '/sports/swimming.png',
    color: 'from-orange-500 to-red-500'
  }
];

export function SportsSection() {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="sports" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-white mb-4">Our Sports Facilities</h2>
          <p className="text-gray-400 text-lg">
            World-class facilities for every sport enthusiast
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {sports.map((sport) => {
            const Icon = sport.icon;
            return (
              <div
                key={sport.id}
                className="group bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={sport.image}
                    alt={sport.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                  <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${sport.color} rounded-full flex items-center justify-center`}>
                    <Icon className="text-white" size={24} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl text-white mb-3">{sport.name}</h3>
                  <p className="text-gray-400 mb-4">{sport.description}</p>

                  {/* Features */}
                  <ul className="mb-6 space-y-2">
                    {sport.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <button
                      onClick={scrollToBooking}
                      className={`flex-1 px-4 py-3 bg-gradient-to-r ${sport.color} text-white rounded-lg hover:shadow-lg transition-all`}
                    >
                      Book Slot
                    </button>
                    <button className="px-4 py-3 border border-gray-700 text-gray-300 rounded-lg hover:bg-gray-800 transition-all">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
