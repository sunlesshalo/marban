import React from 'react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  { name: 'Márton Áron', role: 'Founder', image: '/images/team/márton-áron---founder.png' },
  { name: 'Márton Ágnes', role: 'Creative Director', image: '/images/team/márton-ágnes---creative-director.png' },
  { name: 'Rámay Zsolt', role: 'Sales Director', image: '/images/team/rámay-zsolt---sales-director.png' },
  { name: 'Csuszner Ferencz', role: 'Strategic Advisor', image: '/images/team/csuszner-ferencz---strategic-advisor.png' },
];

const TeamMemberCard: React.FC<TeamMember> = ({ name, role, image }) => (
  <div className="relative group overflow-hidden aspect-[3/4] rounded-lg shadow-lg">
    <img
      src={image}
      alt={name}
      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-30"
    />
    <div className="absolute inset-0 bg-brand-accent p-8 flex flex-col justify-end text-left opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <h3 className="text-2xl font-bold text-white">{name}</h3>
      <p className="text-white text-opacity-80">{role}</p>
    </div>
  </div>
);

const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-16 md:py-24 bg-white dark:bg-brand-primary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
            Meet The Minds Behind Your Success
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-brand-secondary">
            A passionate collective of strategists, creatives, and digital experts dedicated to transforming your vision into reality.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;