import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'Cricket Enthusiast',
    rating: 5,
    text: 'Amazing cricket facilities! The turf is well-maintained and the booking process is super smooth. Highly recommend for anyone looking to practice.',
    image: '👨‍💼'
  },
  {
    name: 'Priya Patel',
    role: 'Badminton Player',
    rating: 5,
    text: 'The badminton courts are excellent with proper lighting and flooring. Staff is friendly and the whole place is very clean. Great value for money!',
    image: '👩‍💼'
  },
  {
    name: 'Arjun Reddy',
    role: 'Swimming Coach',
    rating: 5,
    text: 'One of the best swimming facilities in the area. Clean pool, professional staff, and well-organized time slots. Perfect for both beginners and pros.',
    image: '👨‍🏫'
  },
  {
    name: 'Sneha Gupta',
    role: 'Fitness Enthusiast',
    rating: 4,
    text: 'Great sports complex with multiple facilities under one roof. The booking system via WhatsApp is convenient and the pricing is very reasonable.',
    image: '👩‍🎓'
  },
  {
    name: 'Vikram Singh',
    role: 'Sports Manager',
    rating: 5,
    text: 'Professional setup with top-notch equipment. We regularly book slots for our team practice sessions. The management is very accommodating.',
    image: '👨‍💻'
  },
  {
    name: 'Ananya Iyer',
    role: 'College Student',
    rating: 5,
    text: 'Perfect location near our college! The facilities are modern and well-maintained. Great place to unwind and stay fit after classes.',
    image: '👩‍🎨'
  }
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-white mb-4">What Our Members Say</h2>
          <p className="text-gray-400 text-lg">
            Real feedback from our satisfied customers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center text-2xl">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="text-white">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < testimonial.rating ? 'fill-yellow-500 text-yellow-500' : 'text-gray-600'}
                  />
                ))}
              </div>

              <div className="relative">
                <Quote className="absolute -top-2 -left-2 text-gray-700 opacity-50" size={24} />
                <p className="text-gray-300 pl-6">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
