import React from 'react';

interface AppShowcaseSectionProps {
  title: string;
  desc: string;
  imgUrl: string;
  reverse?: boolean;
  bgClass?: string;
}

const AppShowcaseSection: React.FC<AppShowcaseSectionProps> = ({ title, desc, imgUrl, reverse = false, bgClass = '' }) => (
  <section className={`py-20 ${bgClass} animate-fade-in animate-once animate-duration-1000 animate-ease-in-out`}>
    <div className={`max-w-6xl mx-auto flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 px-4`}>
      <div className="md:w-1/2 animate-slide-in-left animate-once animate-duration-1000 animate-delay-200 animate-ease-in-out">
        <img src={imgUrl} alt={title} className="rounded-3xl shadow-2xl w-full hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="md:w-1/2 animate-slide-in-right animate-once animate-duration-1000 animate-delay-300 animate-ease-in-out">
        <h2 className="text-4xl font-bold mb-4 text-gray-800 drop-shadow-lg">{title}</h2>
        <p className="text-lg text-gray-600 mb-6">{desc}</p>
        <a href="#get-in-touch" className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-2xl transition-all duration-200 transform hover:scale-105 font-semibold">Learn More</a>
      </div>
    </div>
  </section>
);

export default AppShowcaseSection; 