import React from 'react';
import { motion } from 'framer-motion';

interface TeamCardProps {
  name: string;
  role: string;
  imgUrl?: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, role, imgUrl }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bento-card p-6 flex flex-col items-center text-center"
    >
      <div className="w-32 h-32 rounded-full bg-gradient-to-r from-primary to-accent p-1 mb-4">
        <div className="w-full h-full rounded-full overflow-hidden bg-dark flex items-center justify-center">
          {imgUrl ? (
            <img 
              src={imgUrl} 
              alt={name} 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-5xl font-bold text-accent">
              {name.charAt(0)}
            </div>
          )}
        </div>
      </div>
      
      <h3 className="text-xl font-orbitron font-semibold text-accent mb-2">{name}</h3>
      <p className="text-light-dark text-lg">{role}</p>
      
      <div className="mt-4 w-full h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
    </motion.div>
  );
};

export default TeamCard;