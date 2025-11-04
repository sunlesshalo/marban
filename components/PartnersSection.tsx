import React from 'react';

const Logo: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <div className="flex-shrink-0 mx-4 md:mx-8">
    <img
      src={src}
      alt={alt}
      className="h-12 md:h-16 w-auto object-contain filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
    />
  </div>
);

const PartnersSection: React.FC = () => {
  const partners = [
    { src: '/images/logos/agrowest.png', alt: 'AgroWest' },
    { src: '/images/logos/hbt-5.png', alt: 'HBT Beton' },
    { src: '/images/logos/kinder-dance.png', alt: 'Kinder Dance' },
    { src: '/images/logos/oteluri-3.png', alt: 'Oteluri' },
    { src: '/images/logos/sipcarp.png', alt: 'Sipcarp' },
    { src: '/images/logos/sovidek-4.png', alt: 'Sovidek' },
    { src: '/images/logos/junius.png', alt: 'Junius' },
    { src: '/images/logos/jupanu-(6).png', alt: 'Jupanu' }
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
          {extendedPartners.map((partner, index) => <Logo key={`${partner.alt}-${index}`} src={partner.src} alt={partner.alt} />)}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;