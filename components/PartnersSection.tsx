import React from 'react';

const Logo: React.FC<{ name: string }> = ({ name }) => (
  <div className="flex-shrink-0 mx-4 md:mx-8">
    <div className="text-2xl font-semibold text-slate-400 dark:text-slate-500 filter grayscale hover:grayscale-0 hover:text-gray-900 dark:hover:text-white transition-all duration-300 cursor-pointer">
      {name}
    </div>
  </div>
);

const PartnersSection: React.FC = () => {
  const partners = [
    'TechCorp',
    'Innovate LLC',
    'Quantum Inc.',
    'NextGen',
    'Apex Global',
    'Synergy Co.'
  ];

  // Duplicate the partners array to create a seamless loop
  const extendedPartners = [...partners, ...partners];

  return (
    <section id="partners" className="py-16 md:py-24 bg-white dark:bg-brand-primary">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
          Trusted by Industry Leaders
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600 dark:text-brand-secondary">
          We're proud to have partnered with a diverse range of businesses, helping them achieve their marketing objectives and surpass expectations.
        </p>
      </div>
      <div className="mt-12 w-full overflow-hidden relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white dark:from-brand-primary to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white dark:from-brand-primary to-transparent z-10"></div>
        <div className="flex whitespace-nowrap animate-slide hover:[animation-play-state:paused]">
          {extendedPartners.map((name, index) => <Logo key={`${name}-${index}`} name={name} />)}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;