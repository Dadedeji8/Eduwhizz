import React from 'react';
interface ShowcaseImage {
  url: string;
  desc: string;
}
interface Props {
  images: ShowcaseImage[];
}
const AppShowcase: React.FC<Props> = ({ images }) => (
  <div className="grid md:grid-cols-3 gap-8">
    {images.map((img, i) => (
      <div key={i} className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
        <img src={img.url} alt={img.desc} className="w-full h-48 object-cover" />
        <div className="p-4 text-center text-gray-700">{img.desc}</div>
      </div>
    ))}
  </div>
);
export default AppShowcase; 