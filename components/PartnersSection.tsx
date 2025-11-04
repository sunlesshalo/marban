import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Logo: React.FC<{ src: string; alt: string; isDark: boolean }> = ({ src, alt, isDark }) => {
  const logoSrc = isDark ? src.replace('.png', '-dark.png') : src;

  return (
    <div className="flex-shrink-0 mx-6 md:mx-10">
      <img
        src={logoSrc}
        alt={alt}
        className="h-24 md:h-36 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 cursor-pointer"
      />
    </div>
  );
};

const PartnersSection: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

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

  // Triple the partners array to create a seamless infinite loop
  const extendedPartners = [...partners, ...partners, ...partners];

  return (
    <section id="partners" className="py-24 md:py-32 bg-white dark:bg-brand-primary">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
          Who We Work With
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600 dark:text-brand-secondary">
          From startups to established brands, we help businesses grow through strategic marketing
        </p>
      </div>
      <div className="mt-12 w-full overflow-hidden relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white dark:from-brand-primary to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white dark:from-brand-primary to-transparent z-10"></div>
        <div className="flex whitespace-nowrap animate-slide hover:[animation-play-state:paused]">
          {extendedPartners.map((partner, index) => <Logo key={`${partner.alt}-${index}`} src={partner.src} alt={partner.alt} isDark={isDark} />)}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;