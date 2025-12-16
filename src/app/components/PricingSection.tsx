import React from 'react';
import { Check } from 'lucide-react';

const pricingPlans = [
  {
    sport: 'Cricket',
    price: '₹500',
    duration: 'per hour',
    features: [
      'Professional turf ground',
      'Net practice available',
      'Equipment provided',
      'Flexible hourly booking',
      'Floodlight facility'
    ],
    color: 'from-green-500 to-emerald-500',
    popular: false
  },
  {
    sport: 'Badminton',
    price: '₹300',
    duration: 'per hour',
    features: [
      'Indoor wooden courts',
      'Premium flooring',
      'Rackets available',
      'Air-conditioned hall',
      'Professional lighting'
    ],
    color: 'from-blue-500 to-cyan-500',
    popular: true
  },
  {
    sport: 'Swimming',
    price: '₹200',
    duration: 'per session',
    features: [
      'Olympic-size pool',
      'Trained lifeguards',
      'Clean facilities',
      'Timed batches',
      'Locker rooms'
    ],
    color: 'from-orange-500 to-red-500',
    popular: false
  }
];

export function PricingSection() {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-white mb-4">Pricing Plans</h2>
          <p className="text-gray-400 text-lg">
            Affordable rates for premium facilities
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan) => (
            <div
              key={plan.sport}
              className={`relative bg-gray-900 rounded-2xl p-8 border transition-all duration-300 hover:transform hover:-translate-y-2 ${
                plan.popular
                  ? 'border-blue-500 shadow-2xl shadow-blue-500/20'
                  : 'border-gray-800 hover:border-gray-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-full text-sm">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl text-white mb-4">{plan.sport}</h3>
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className={`text-5xl bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                    {plan.price}
                  </span>
                </div>
                <p className="text-gray-400">{plan.duration}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300">
                    <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                      <Check size={14} className="text-white" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToBooking}
                className={`w-full px-6 py-4 bg-gradient-to-r ${plan.color} text-white rounded-lg hover:shadow-lg transition-all transform hover:scale-105`}
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
