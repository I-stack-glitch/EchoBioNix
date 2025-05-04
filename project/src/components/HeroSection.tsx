import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Bot, Cog, Hand } from 'lucide-react';

const HeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size to match parent element
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Create particles
    const particles: { x: number; y: number; size: number; speedX: number; speedY: number; opacity: number }[] = [];
    const particleCount = Math.min(Math.floor(window.innerWidth / 10), 100);
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2
      });
    }
    
    // Draw animation
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw particles
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 179, 0, ${particle.opacity})`;
        ctx.fill();
        
        // Update particle position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Wrap around the screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
      });
      
      // Connect particles that are close to each other
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(255, 179, 0, ${0.15 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(draw);
    };
    
    draw();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center">
      {/* Background Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0"></canvas>
      
      {/* Background Image - Circuit Pattern */}
      <div className="absolute inset-0 grid-overlay z-0 opacity-20"></div>
      
      {/* Content */}
      <div className="container-custom relative z-10 pt-20">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 inline-flex items-center justify-center"
          >
            <div className="relative w-24 h-24 mb-4">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse-slow"></div>
              <div className="absolute inset-2 bg-dark rounded-full flex items-center justify-center">
                <Hand size={48} className="text-accent animate-float" />
              </div>
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-orbitron mb-4 text-glow"
          >
            <span className="text-white">Echo</span>
            <span className="text-accent">Bio</span>
            <span className="text-primary">NiX</span>
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl font-rajdhani mb-8 text-light-dark"
          >
            The Future at Your Fingertips
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg md:text-xl max-w-2xl mx-auto mb-12"
          >
            A smart prosthetic system that integrates flex-sensor glove technology 
            with servo-based bionic hand response, bringing natural movement to prosthetics.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a href="#overview" className="btn-primary flex items-center gap-2">
              <Bot size={18} />
              Explore Project
            </a>
            <a href="#demo" className="btn-secondary flex items-center gap-2">
              <Cog size={18} />
              View Demo
            </a>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          className="mt-16 relative"
        >
          <div className="w-full h-48 md:h-64 flex items-center justify-center relative">
            <div className="absolute w-full h-full bg-gradient-to-b from-transparent to-dark-light opacity-50 z-10 pointer-events-none"></div>
            <img 
              src="https://images.pexels.com/photos/8566456/pexels-photo-8566456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Bionic Hand Technology" 
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-primary bg-opacity-70 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-opacity-90 transition-all">
                <div className="w-0 h-0 border-y-8 border-y-transparent border-l-12 border-l-white ml-1"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-dark to-transparent pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;