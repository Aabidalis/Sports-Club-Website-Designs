import React from 'react';
import { Target, Users, Award, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To provide world-class sports facilities that promote fitness, community, and excellence in athletics.'
  },
  {
    icon: Users,
    title: 'Community First',
    description: 'Building a vibrant sports community where players of all levels can thrive and grow together.'
  },
  {
    icon: Award,
    title: 'Quality Infrastructure',
    description: 'State-of-the-art facilities with professional-grade equipment and well-maintained grounds.'
  },
  {
    icon: TrendingUp,
    title: 'Easy Booking',
    description: 'Seamless booking system with flexible time slots and instant WhatsApp confirmation.'
  }
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-white mb-4">About Us</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            We are a premier multi-sport facility dedicated to providing top-notch amenities 
            for cricket, badminton, and swimming enthusiasts in the heart of the city.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-950 rounded-2xl p-8 md:p-12 border border-gray-800 mb-12">
            <h3 className="text-2xl md:text-3xl text-white mb-6">Our Story</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Founded with a vision to create a comprehensive sports hub, AM Sports Arena has become 
                the go-to destination for sports enthusiasts in the area. Located conveniently near 
                colleges and residential areas, we serve a diverse community of players ranging from 
                beginners to professionals.
              </p>
              <p>
                Our facility features professional cricket turf and nets, indoor badminton courts with 
                wooden flooring, and a clean, Olympic-size swimming pool. We pride ourselves on 
                maintaining the highest standards of cleanliness, safety, and customer service.
              </p>
              <p>
                With a team of friendly staff and a commitment to excellence, we ensure every visit 
                to AM Sports Arena is a memorable experience. Whether you're looking to practice your 
                game, stay fit, or simply have fun with friends, we've got you covered.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="bg-gray-950 rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all text-center"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h4 className="text-white text-lg mb-2">{feature.title}</h4>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}