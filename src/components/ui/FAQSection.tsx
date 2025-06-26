import React, { useState } from 'react';

const faqs = [
  {
    q: 'How do I register a new student?',
    a: 'Go to the Student Registration section, fill in the required details, and submit. The student will be assigned a unique registration number.'
  },
  {
    q: 'How secure is the fee collection process?',
    a: 'Our payment aggregator integrates with NIBSS and CBN-licensed gateways, ensuring secure and reliable transactions.'
  },
  {
    q: 'Can I generate and share performance reports?',
    a: 'Yes, you can generate detailed performance reports and share them with parents and authorities via email or WhatsApp.'
  },
  {
    q: 'Is there support for multiple schools?',
    a: 'The Premium Plan allows you to manage multiple schools from a single dashboard.'
  },
  {
    q: 'How do I contact support?',
    a: 'Use the Get in Touch section below or email us at support@eduwhizz.com.'
  },
];

const FAQSection: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-16 bg-white animate-fade-up animate-once animate-duration-1000 animate-delay-200 animate-ease-in-out">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border rounded-lg overflow-hidden shadow-sm">
              <button
                className="w-full text-left px-6 py-4 bg-gray-50 hover:bg-purple-50 font-semibold text-lg focus:outline-none flex justify-between items-center"
                onClick={() => setOpen(open === i ? null : i)}
              >
                {faq.q}
                <span className={`ml-4 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}>▼</span>
              </button>
              <div
                className={`px-6 bg-white transition-all duration-500 ease-in-out ${open === i ? 'max-h-40 py-4 animate-fade-in' : 'max-h-0 py-0 overflow-hidden animate-fade-out'}`}
                style={{}}
              >
                <p className="text-gray-600">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 