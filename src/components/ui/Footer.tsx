import React from 'react';

const Footer: React.FC = () => (
  <footer className="py-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center mt-12">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
      <div className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} EduWhizz. All rights reserved.</div>
      <div className="space-x-6 mb-4 md:mb-0">
        <a href="/" className="hover:underline">Home</a>
        <a href="/features" className="hover:underline">Features</a>
        <a href="/pricing" className="hover:underline">Pricing</a>
        <a href="/contact" className="hover:underline">Contact</a>
      </div>
      <div className="flex space-x-4">
        <a href="#" aria-label="Twitter" className="hover:text-blue-300"><i className="fab fa-twitter"></i></a>
        <a href="#" aria-label="Facebook" className="hover:text-blue-300"><i className="fab fa-facebook"></i></a>
        <a href="#" aria-label="Instagram" className="hover:text-blue-300"><i className="fab fa-instagram"></i></a>
      </div>
    </div>
  </footer>
);

export default Footer; 