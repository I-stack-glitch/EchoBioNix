import React, { useState, useEffect, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  spanCols?: 1 | 2 | 3;
  spanRows?: 1 | 2;
  delay?: number;
}

const BentoCard: React.FC<BentoCardProps> = ({ 
  children, 
  className = '', 
  spanCols = 1,
  spanRows = 1,
  delay = 0 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  const getSpanClass = () => {
    let spanClass = '';
    
    if (spanCols === 2) {
      spanClass += ' md:col-span-2';
    } else if (spanCols === 3) {
      spanClass += ' md:col-span-2 lg:col-span-3';
    }
    
    if (spanRows === 2) {
      spanClass += ' row-span-2';
    }
    
    return spanClass;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      className={`relative bento-card ${getSpanClass()} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="w-full h-full grid-overlay"></div>
      </div>
      
      <div className={`relative z-10 h-full transition-all duration-300 ${isHovered ? 'scale-[1.02]' : 'scale-100'}`}>
        {children}
      </div>
      
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[var(--accent)] opacity-70 rounded-tl"></div>
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[var(--accent)] opacity-70 rounded-tr"></div>
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[var(--accent)] opacity-70 rounded-bl"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[var(--accent)] opacity-70 rounded-br"></div>
    </motion.div>
  );
}

export default BentoCard;