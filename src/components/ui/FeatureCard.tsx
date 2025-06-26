import React from 'react';
interface FeatureCardProps {
  title: string;
  iconUrl: string;
  desc: string;
}
const FeatureCard: React.FC<FeatureCardProps> = ({ title, iconUrl, desc }) => (
  <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition">
    <img src={iconUrl} alt={title} className="mx-auto w-16 h-16 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{desc}</p>
  </div>
);
export default FeatureCard; 