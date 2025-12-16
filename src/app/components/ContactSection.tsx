import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      alert('Please fill all fields');
      return;
    }

    const whatsappMessage = `New Contact Form Submission:\n\nName: ${formData.name}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/916362205879?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-white mb-4">Contact Us</h2>
          <p className="text-gray-400 text-lg">
            Get in touch with us for any queries or bookings
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl text-white mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Your Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg border border-gray-700 focus:border-green-500 focus:outline-none transition-colors"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg border border-gray-700 focus:border-green-500 focus:outline-none transition-colors"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg border border-gray-700 focus:border-green-500 focus:outline-none transition-colors resize-none"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl text-white mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="text-white mb-1">Address</h4>
                  <p className="text-gray-400">
                   DMM Garden, 1st Main Rd, Vidya Nagar, T. Dasarahalli, Bengaluru, Karnataka 560057
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="text-white mb-1">Phone</h4>
                  <p className="text-gray-400">+91 6362205879</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="text-white mb-1">Email</h4>
                  <p className="text-gray-400">amsportsarena@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="text-white mb-1">Opening Hours</h4>
                  <p className="text-gray-400">Monday - Sunday</p>
                  <p className="text-gray-400">05:00 AM - 11:00 PM</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
               <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.9015706174173!2d77.50677347512404!3d13.04193688727991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d0038bd2049%3A0x7f81d2884a8b3b9b!2sAM%20SPORTS%20ARENA%20-%20SPORTS%20CLUB!5e0!3m2!1sen!2sin!4v1765913616999!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}