import React from 'react';
import Header from './components/Header';
import TeamSection from './components/TeamSection';
import ApproachSection from './components/ApproachSection';
import PartnersSection from './components/PartnersSection';
import CtaSection from './components/CtaSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white dark:bg-brand-primary text-gray-700 dark:text-brand-secondary font-sans leading-relaxed">
      <Header />
      <main>
        <PartnersSection />
        <TeamSection />
        <ApproachSection />
        <CtaSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;