import React from 'react';
import { ChevronRightIcon } from './Icons';
import BackgroundAnimation from './BackgroundAnimation';
import { useAnimateOnScroll } from './useAnimateOnScroll';

const CtaSection: React.FC = () => {
  const { ref, isVisible } = useAnimateOnScroll();

  return (
    <section
      id="cta"
      className="relative py-24 md:py-32 bg-cover bg-center bg-fixed overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1516549655169-98e4a2904b40?q=80&w=2070&auto=format&fit=crop')",
      }}
    >
      <div className="absolute inset-0 bg-brand-primary opacity-70"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-brand-accent to-transparent opacity-60"></div>
      <BackgroundAnimation />
      <div ref={ref} className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <h2 className={`text-3xl md:text-4xl font-bold text-white tracking-tight mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          Ready to Transform Your Marketing?
        </h2>
        <p className={`max-w-2xl mx-auto text-lg text-brand-secondary mb-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          Let's build a strategy that drives real results. Contact us today for a free consultation.
        </p>
        <a
          href="#contact"
          className={`inline-flex items-center justify-center bg-brand-accent text-white font-bold py-3 px-8 text-lg uppercase hover:bg-red-800 transition duration-300 transform hover:scale-105 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          Let's Build Something Great
          <ChevronRightIcon className="w-5 h-5 ml-2" />
        </a>
      </div>
    </section>
  );
};

export default CtaSection;