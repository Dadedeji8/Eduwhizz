import React, { useState } from 'react';

interface Testimonial {
  name: string;
  school: string;
  image: string;
  rating: number;
  text: string;
}
interface Props {
  testimonials: Testimonial[];
}
const TestimonialCarousel: React.FC<Props> = ({ testimonials }) => {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const t = testimonials[index];
  return (
    <div className="relative flex flex-col items-center animate-fade-in animate-once animate-duration-1000 animate-ease-in-out">
      <div className="bg-white/90 rounded-3xl shadow-2xl p-10 max-w-2xl w-full text-center border-4 border-purple-200 animate-fade-in animate-once animate-duration-1000 animate-ease-in-out">
        <div className="flex justify-center mb-4">
          <img src={t.image} alt={t.name} className="w-24 h-24 rounded-full border-4 border-blue-400 shadow-lg object-cover" />
        </div>
        <div className="flex justify-center mb-2">
          {Array.from({ length: t.rating }).map((_, i) => <span key={i} className="text-yellow-400 text-2xl">★</span>)}
        </div>
        <blockquote className="text-2xl italic text-purple-800 font-semibold mb-4 animate-fade-in animate-once animate-duration-1000 animate-delay-200">“{t.text}”</blockquote>
        <div className="font-bold text-lg text-blue-700">{t.name}</div>
        <div className="text-gray-500 text-base mb-4">{t.school}</div>
      </div>
      <div className="flex justify-center gap-6 mt-8">
        <button onClick={prev} className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full p-4 shadow-lg hover:scale-110 transition-transform duration-200 animate-bounce-in">&#8592;</button>
        <button onClick={next} className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full p-4 shadow-lg hover:scale-110 transition-transform duration-200 animate-bounce-in">&#8594;</button>
      </div>
      <div className="flex justify-center mt-4 gap-2">
        {testimonials.map((_, i) => (
          <span key={i} className={`inline-block w-3 h-3 rounded-full ${i === index ? 'bg-purple-600' : 'bg-purple-200'} transition-all duration-300`}></span>
        ))}
      </div>
    </div>
  );
};
export default TestimonialCarousel; 