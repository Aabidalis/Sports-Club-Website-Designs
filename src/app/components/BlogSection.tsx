import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const blogPosts = [
  {
    id: 1,
    title: '5 Essential Cricket Training Drills for Beginners',
    excerpt: 'Master the fundamentals with these proven cricket training techniques that will improve your game significantly.',
    image: 'https://images.unsplash.com/photo-1687709644584-61d98a60dcb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwZ3JvdW5kJTIwZmFjaWxpdHl8ZW58MXx8fHwxNzY1ODc1NjgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    author: 'Coach Rajesh',
    date: 'Dec 10, 2025',
    category: 'Cricket'
  },
  {
    id: 2,
    title: 'Badminton Footwork: The Key to Winning Matches',
    excerpt: 'Learn how proper footwork can transform your badminton game and give you the competitive edge you need.',
    image: 'https://images.unsplash.com/photo-1624024834874-2a1611305604?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWRtaW50b24lMjBjb3VydCUyMGluZG9vcnxlbnwxfHx8fDE3NjU4MTQ5NTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    author: 'Priya Sharma',
    date: 'Dec 8, 2025',
    category: 'Badminton'
  },
  {
    id: 3,
    title: 'Swimming Techniques for Better Endurance',
    excerpt: 'Discover professional swimming techniques that will help you build stamina and swim longer distances.',
    image: 'https://images.unsplash.com/photo-1758426637893-2854f23fe846?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2ltbWluZyUyMHBvb2wlMjBmYWNpbGl0eXxlbnwxfHx8fDE3NjU4MzkyMDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    author: 'Vikram Singh',
    date: 'Dec 5, 2025',
    category: 'Swimming'
  },
  {
    id: 4,
    title: 'The Benefits of Multi-Sport Training',
    excerpt: 'Why playing multiple sports can enhance your overall athletic performance and reduce injury risk.',
    image: 'https://images.unsplash.com/photo-1758227231013-8cff978f1dae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBhcmVuYSUyMHN0YWRpdW18ZW58MXx8fHwxNzY1ODY5NDM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    author: 'Dr. Ananya Iyer',
    date: 'Dec 3, 2025',
    category: 'Fitness'
  },
  {
    id: 5,
    title: 'Nutrition Tips for Athletes',
    excerpt: 'Fuel your body right with these essential nutrition guidelines for optimal sports performance.',
    image: 'https://images.unsplash.com/photo-1632077804406-188472f1a810?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBmaXRuZXNzJTIwZXF1aXBtZW50fGVufDF8fHx8MTc2NTg3NTY4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    author: 'Nutritionist Meera',
    date: 'Dec 1, 2025',
    category: 'Health'
  },
  {
    id: 6,
    title: 'How to Choose the Right Sports Facility',
    excerpt: 'A comprehensive guide to selecting the perfect sports arena for your training and practice needs.',
    image: 'https://images.unsplash.com/photo-1761775446030-5e1fdd4166a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW5uaXMlMjBzcG9ydHMlMjBmYWNpbGl0eXxlbnwxfHx8fDE3NjU4NzU2ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    author: 'Team AM Sports',
    date: 'Nov 28, 2025',
    category: 'Tips'
  }
];

export function BlogSection() {
  return (
    <section id="blog" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-white mb-4">Latest from Our Blog</h2>
          <p className="text-gray-400 text-lg">
            Tips, tricks, and insights from sports professionals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-gray-950 rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:transform hover:-translate-y-2 group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-blue-500 text-white text-xs rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3 text-sm text-gray-400">
                  <div className="flex items-center gap-1.5">
                    <User size={14} />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                </div>

                <h3 className="text-xl text-white mb-3 group-hover:text-green-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-2">{post.excerpt}</p>

                <button className="flex items-center gap-2 text-green-500 hover:text-green-400 transition-colors group/btn">
                  Read More
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
