import React, { useState } from 'react';
import { Calendar, Clock, MessageCircle } from 'lucide-react';

const timeSlots = [
  '06:00 AM', '07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM',
  '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM',
  '06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM'
];

export function BookingSection() {
  const [selectedSport, setSelectedSport] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleBooking = () => {
    if (!selectedSport || !selectedDate || !selectedTime) {
      alert('Please fill all booking details');
      return;
    }

    const message = `Hi! I would like to book:\n\nSport: ${selectedSport}\nDate: ${selectedDate}\nTime: ${selectedTime}`;
    const whatsappUrl = `https://wa.me/916362205879?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="booking" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl text-white mb-4">Book Your Slot</h2>
            <p className="text-gray-400 text-lg">
              Select your sport, date, and time to get started
            </p>
          </div>

          <div className="bg-gray-950 rounded-2xl p-8 border border-gray-800">
            {/* Sport Selection */}
            <div className="mb-6">
              <label className="block text-white mb-3 text-lg">Select Sport</label>
              <select
                value={selectedSport}
                onChange={(e) => setSelectedSport(e.target.value)}
                className="w-full px-4 py-4 bg-gray-900 text-white rounded-lg border border-gray-700 focus:border-green-500 focus:outline-none transition-colors"
              >
                <option value="">Choose a sport...</option>
                <option value="Cricket">Cricket</option>
                <option value="Badminton">Badminton</option>
                <option value="Swimming">Swimming</option>
              </select>
            </div>

            {/* Date Picker */}
            <div className="mb-6">
              <label className="block text-white mb-3 text-lg flex items-center gap-2">
                <Calendar size={20} />
                Select Date
              </label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-4 bg-gray-900 text-white rounded-lg border border-gray-700 focus:border-green-500 focus:outline-none transition-colors"
              />
            </div>

            {/* Time Slot Selection */}
            <div className="mb-8">
              <label className="block text-white mb-3 text-lg flex items-center gap-2">
                <Clock size={20} />
                Select Time Slot
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`px-3 py-3 rounded-lg border transition-all ${
                      selectedTime === time
                        ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white border-transparent'
                        : 'bg-gray-900 text-gray-300 border-gray-700 hover:border-gray-600'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Book Button */}
            <button
              onClick={handleBooking}
              className="w-full px-8 py-5 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white rounded-lg text-lg shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <MessageCircle size={24} />
              Proceed to Book via WhatsApp
            </button>

            <p className="text-center text-gray-500 mt-4 text-sm">
              Your booking will be confirmed via WhatsApp chat
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}