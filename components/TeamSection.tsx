import React from 'react';

interface TeamMember {
  name: string;
  role: string;
}

const teamMembers: TeamMember[] = [
  { name: 'Alex Marban', role: 'Founder & CEO' },
  { name: 'Jessica Lane', role: 'Head of Strategy' },
  { name: 'Markus Reign', role: 'Creative Director' },
  { name: 'Samira Chen', role: 'Lead Developer' },
];

const TeamMemberCard: React.FC<TeamMember> = ({ name, role }) => (
  <div className="relative group overflow-hidden aspect-[3/4]">
    <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
      <span className="text-gray-500 text-lg">Team Member</span>
    </div>
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