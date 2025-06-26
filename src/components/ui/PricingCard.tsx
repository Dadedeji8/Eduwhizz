import React from 'react';
interface PricingCardProps {
  plan: string;
  price: string;
  features: string[];
}
const PricingCard: React.FC<PricingCardProps> = ({ plan, price, features }) => (
  <div className="bg-white rounded-xl shadow-lg p-8 text-center border hover:shadow-2xl transition">
    <h3 className="text-2xl font-bold mb-2 text-purple-700">{plan}</h3>
    <div className="text-3xl font-extrabold mb-4">{price}</div>
    <ul className="text-gray-700 mb-6 space-y-2">
      {features.map((f, i) => <li key={i} className="flex items-center justify-center"><span className="mr-2 text-green-500">&#10003;</span>{f}</li>)}
    </ul>
    <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-200 transform hover:scale-105">Choose Plan</button>
  </div>
);
export default PricingCard; 