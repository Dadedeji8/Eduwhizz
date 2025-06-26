import React from 'react';
import SectionTitle from './SectionTitle';

const GetInTouchSection: React.FC = () => (
  <section className="py-16 bg-gray-50 animate-fade-up animate-once animate-duration-1000 animate-delay-300 animate-ease-in-out">
    <div className="max-w-4xl mx-auto">
      <SectionTitle title="Get in Touch" subtitle="We'd love to hear from you!" />
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <form className="bg-white rounded-xl shadow-lg p-8 space-y-6 animate-fade-in">
          <div>
            <label className="block text-gray-700 mb-2">Name</label>
            <input type="text" className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400" placeholder="Your Name" />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input type="email" className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400" placeholder="you@email.com" />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400" rows={4} placeholder="Type your message here..." />
          </div>
          <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105 animate-bounce-in">Send Message</button>
        </form>
        <div className="flex flex-col justify-center animate-fade-in animate-delay-200 px-2">
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2 text-purple-700">Contact Information</h3>
            <p className="text-gray-700">Email: <a href="mailto:social@eduwhizz.com.ng" className="text-blue-600 hover:underline">social@eduwhizz.com.ng</a></p>
            <p className="text-gray-700">Phone: <a href="tel:+2349037598947" className="text-blue-600 hover:underline">+234-903-759-8947</a></p>
            <p className="text-gray-700">No. 1 Geoffrey Close, AbuleOsurun, Ibeshe, Ikorodu, Lagos
            </p>
          </div>
          <div className=''>
            <h3 className="text-xl font-bold mb-2 text-purple-700">Follow Us</h3>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-blue-500 hover:text-blue-700"><i className="fab fa-twitter"></i> Twitter</a>
              <a href="#" className="text-blue-700 hover:text-blue-900"><i className="fab fa-facebook"></i> Facebook</a>
              <a href="#" className="text-pink-500 hover:text-pink-700"><i className="fab fa-instagram"></i> Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default GetInTouchSection; 