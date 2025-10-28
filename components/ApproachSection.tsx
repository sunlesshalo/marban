import React from 'react';
import { LightbulbIcon, TargetIcon, ArrowUpIcon, ChartBarIcon } from './Icons';

interface PillarProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const PillarCard: React.FC<PillarProps> = ({ icon, title, description }) => (
  <div className="bg-white dark:bg-brand-light p-8 group transition-all duration-300 hover:bg-brand-accent">
    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gray-100 dark:bg-brand-primary text-brand-accent mb-6 group-hover:bg-white group-hover:text-brand-accent">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-white">{title}</h3>
    <p className="text-gray-600 dark:text-brand-secondary group-hover:text-white">{description}</p>
  </div>
);

const ApproachSection: React.FC = () => {
  const pillars: PillarProps[] = [
    {
      icon: <LightbulbIcon />,
      title: 'Strategy & Insights',
      description: 'We build data-driven strategies that resonate with your audience.',
    },
    {
      icon: <TargetIcon />,
      title: 'Creative Execution',
      description: 'Bringing your brand story to life with compelling content and campaigns.',
    },
    {
      icon: <ArrowUpIcon />,
      title: 'Digital Optimization',
      description: 'Maximizing your reach and impact across all digital channels.',
    },
    {
      icon: <ChartBarIcon />,
      title: 'Measurable Results',
      description: 'Focused on delivering clear, quantifiable ROI that matters to your business.',
    },
  ];

  return (
    <section id="approach" className="py-16 md:py-24 bg-gray-50 dark:bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
            You Need A Strategy, Not A Sacrifice.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-brand-secondary">
            Our framework is built on precision, creativity, and relentless optimization.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, index) => (
            <PillarCard key={index} {...pillar} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;