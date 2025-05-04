import React from 'react';
import SectionTitle from './ui/SectionTitle';
import TeamCard from './ui/TeamCard';
import BentoCard from './ui/BentoCard';

const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      name: 'Mohammed Arsalan',
      role: 'Hardware Integration and Financial Management',
      imgUrl: 'https://i.postimg.cc/hGN7kp0F/arsalan2.jpg'
    },
    {
      name: 'Mohammed Anas',
      role: 'Software, Code Logic and Sensor Engineering',
      imgUrl: 'https://i.postimg.cc/65PswYRn/Reshot.jpg',
      link: 'https://mohammedanasportfolio.netlify.app/'  // Placeholder for the URL for Mohammed Anas
    },
    {
      name: 'Sayed Muhammed Anas',
      role: 'Hardware Integration, Components Handler and Motor Automation',
      imgUrl: 'https://i.postimg.cc/T1Z0w76H/Sayed-Anas2.jpg'
    }
  ];

  return (
    <section id="team" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-10 pointer-events-none"></div>
      <div className="container-custom">
        <div className="text-center mb-12">
          <SectionTitle>The Team</SectionTitle>
          <p className="max-w-2xl mx-auto text-light-dark">
            Meet the brilliant minds behind EchoBioNiX who combined their expertise in 
            hardware integration, software development, and circuit engineering.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <TeamCard 
                key={index}
                name={member.name}
                role={member.role}
                imgUrl={member.imgUrl}
                profileUrl={member.link}  // Passing the link for the profile
              />
            ))}
          </div>
          
          <BentoCard spanCols={3} className="mt-8 p-6" delay={300}>
            <div className="text-center">
              <h3 className="bento-card-title mb-4">Our Collaboration</h3>
              <p className="mb-4">
                This interdisciplinary team came together to bridge the gap between prosthetic technology 
                and intuitive control systems. Each member brings unique expertise that made 
                EchoBioNiX possible.
              </p>
              <div className="w-full h-1 bg-gradient-to-r from-primary to-accent rounded-full my-4"></div>
              <p className="text-accent italic">
                "Technology with a human touch."
              </p>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
