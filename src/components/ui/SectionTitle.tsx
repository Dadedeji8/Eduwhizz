import React from 'react';
interface SectionTitleProps {
  title: string;
  subtitle?: string;
}
const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => (
  <div className="text-center mb-8">
    <h2 className="text-3xl font-bold mb-2 text-gray-800">{title}</h2>
    {subtitle && <p className="text-lg text-gray-500">{subtitle}</p>}
  </div>
);
export default SectionTitle; 