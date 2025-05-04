import React from 'react';
import { motion } from 'framer-motion';
import { Hand, Braces, Monitor, Cpu } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';
import BentoCard from './ui/BentoCard';

const OverviewSection: React.FC = () => {
  const features = [
    {
      icon: <Hand className="w-8 h-8 text-accent" />,
      title: "Gesture Control",
      description: "Prosthetic hand mimics finger movements detected by flex sensors."
    },
    {
      icon: <Braces className="w-8 h-8 text-accent" />,
      title: "Arduino Powered",
      description: "Controlled by Arduino Uno, reading sensor input & controlling servos."
    },
    {
      icon: <Monitor className="w-8 h-8 text-accent" />,
      title: "Educational Model",
      description: "Perfect for robotics R&D, assistive tech, and educational purposes."
    },
    {
      icon: <Cpu className="w-8 h-8 text-accent" />,
      title: "Affordability",
      description: "Designed to be an affordable, functional option for amputees and learners."
    }
  ];

  return (
    <section id="overview" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-10 pointer-events-none"></div>
      <div className="container-custom">
        <div className="text-center mb-12">
          <SectionTitle>Project Overview</SectionTitle>
          <p className="max-w-2xl mx-auto text-light-dark">
            EchoBioNiX is a gesture-controlled prosthetic hand system that creates a natural
            bridge between human movement and robotic response.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <BentoCard spanCols={2} className="p-6" delay={100}>
            <div>
              <h3 className="bento-card-title">What is EchoBioNiX?</h3>
              <p className="mb-4">
                EchoBioNiX is a smart prosthetic system that integrates flex-sensor glove 
                technology with servo-based bionic hand response. The system reads the bending 
                of fingers via flex sensors mounted on a glove, then mirrors those movements 
                on a 3D-printed prosthetic hand using servo motors.
              </p>
              <p>
                The project aims to create an affordable, functional prosthetic option for 
                amputees, while also serving as an educational platform for students and 
                researchers in robotics and biomedical engineering.
              </p>
            </div>
          </BentoCard>
          
          <BentoCard className="flex items-center justify-center p-6" delay={200}>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Robotic Hand" 
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-70"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-lg font-orbitron text-accent">Bionic Future</h3>
                <p className="text-sm text-light">Bridging human-machine interaction</p>
              </div>
            </div>
          </BentoCard>
          
          <BentoCard spanCols={3} className="mt-4" delay={300}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bento-card-content flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 bg-dark-lighter rounded-full flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-orbitron text-accent mb-2">{feature.title}</h3>
                  <p className="text-light-dark">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </BentoCard>
          
          <BentoCard spanCols={3} className="p-6 mt-4" delay={400}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="bento-card-title mb-4">Mission Statement</h3>
                <p>
                  Our mission is to develop affordable, functional prosthetic solutions that 
                  bridge the gap between advanced robotics and accessibility. We believe that 
                  everyone deserves access to technology that enhances mobility and independence.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Create intuitive control systems for prosthetics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Reduce cost barriers through innovative design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Provide educational platforms for future engineers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Advance the field of assistive technology</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="w-full h-64 bg-dark-lighter rounded-lg p-4">
                  <div className="bg-dark-light h-full w-full rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <h4 className="font-orbitron text-accent mb-2">Applications</h4>
                      <ul className="space-y-3">
                        <li className="flex items-center justify-center">
                          <span className="w-3 h-3 bg-primary rounded-full mr-2"></span>
                          <span>Robotics Research & Development</span>
                        </li>
                        <li className="flex items-center justify-center">
                          <span className="w-3 h-3 bg-primary rounded-full mr-2"></span>
                          <span>Assistive Technology</span>
                        </li>
                        <li className="flex items-center justify-center">
                          <span className="w-3 h-3 bg-primary rounded-full mr-2"></span>
                          <span>Educational Models</span>
                        </li>
                        <li className="flex items-center justify-center">
                          <span className="w-3 h-3 bg-primary rounded-full mr-2"></span>
                          <span>Prototype Testing</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;