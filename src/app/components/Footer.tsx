import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Phone } from 'lucide-react';

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-12">
      <div className="container mx-auto px-25">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
               <img className='h-20 border-4 rounded-2xl' src="src/assets/images/logo/footlogo.jpeg" alt="" />
              <span className="text-xl text-white">AM Sports Arena</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Premier multi-sport facility offering cricket, badminton, and swimming with world-class amenities.
            </p>
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-gray-900 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 transition-all">
                <Facebook size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-gray-900 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 transition-all">
                <Twitter size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-gray-900 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 transition-all">
                <Instagram size={18} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-gray-900 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 transition-all">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['home', 'sports', 'pricing', 'gallery', 'blog'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(link)}
                    className="text-gray-400 hover:text-white transition-colors text-sm capitalize"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-white mb-4">About</h4>
            <ul className="space-y-2">
              {['testimonials', 'about', 'contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(link)}
                    className="text-gray-400 hover:text-white transition-colors text-sm capitalize"
                  >
                    {link === 'about' ? 'About Us' : link === 'contact' ? 'Contact Us' : link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-gray-400">
               DMM Garden, 1st Main Rd, Vidya Nagar, T. Dasarahalli, Bengaluru, Karnataka 560057
              </li>
              <li className="text-gray-400">
                +91 6362205879
              </li>
              <li className="text-gray-400">
                amsportsarena@gmail.com
              </li>
              <li>
                <a
                  href="https://wa.me/916362205879"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-500 hover:text-green-400 transition-colors"
                >
                  <Phone size={16} />
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} AM Sports Arena. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}