import React, { useState } from 'react';
import { Video, Camera, Share2 } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';
import BentoCard from './ui/BentoCard';

const DemoSection: React.FC = () => {
  const [activeImage, setActiveImage] = useState(0);
  
  const demoImages = [
    {
      url: "https://i.postimg.cc/3xYFWDG1/Prototype-Testing.jpg",
      caption: "EchoBioNiX Prototype Testing"
    },
    {
      url: "https://i.postimg.cc/0NNG0RcJ/Servo-Motors-Config.jpg",
      caption: "Servo Motor Configuration"
    },
    {
      url: "https://i.postimg.cc/YSy6XnsD/Gesture.jpg",
      caption: "Gesture Control Testing"
    },
    {
      url: "https://i.postimg.cc/HnbbkpsF/Workspace.jpg",
      caption: "Workspace"
    }
  ];

  return (
    <section id="demo" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-10 pointer-events-none"></div>
      <div className="container-custom">
        <div className="text-center mb-12">
          <SectionTitle>Project Demo</SectionTitle>
          <p className="max-w-2xl mx-auto text-light-dark">
            See the EchoBioNiX system in action, from prototype development to real-time gesture control.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <BentoCard spanCols={2} className="p-6" delay={100}>
            <div className="relative h-full">
              <div className="absolute top-4 right-4 z-10 flex space-x-2">
                <span className="w-3 h-3 rounded-full bg-accent animate-pulse"></span>
                <span className="w-3 h-3 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0.5s' }}></span>
              </div>
              
              <h3 className="bento-card-title mb-4">See It In Action</h3>
              <p className="mb-6">
                The EchoBioNiX project demonstrates how flex sensors on a glove can control the 
                movement of a 3D-printed prosthetic hand in real-time. Watch as the system 
                translates finger movements into precise servo motor actuation.
              </p>
              
              <div className="aspect-video rounded-lg overflow-hidden mt-auto">
                <iframe
                  src="https://www.youtube.com/embed/E9-lOHdABlI"
                  title="EchoBioNiX Demo Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </BentoCard>
          
          <BentoCard className="p-0 overflow-hidden" delay={200}>
            <div className="flex flex-col h-full">
              <div className="relative h-full">
                <img 
                  src={demoImages[activeImage].url} 
                  alt={demoImages[activeImage].caption} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-70"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-light font-semibold">{demoImages[activeImage].caption}</p>
                </div>
                
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button 
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-dark-light bg-opacity-50 backdrop-blur-sm hover:bg-accent transition-colors"
                    aria-label="Share"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                  <button 
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-dark-light bg-opacity-50 backdrop-blur-sm hover:bg-accent transition-colors"
                    aria-label="More photos"
                  >
                    <Camera className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="p-3 bg-dark-lighter grid grid-cols-4 gap-1">
                {demoImages.map((image, index) => (
                  <button 
                    key={index}
                    className={`h-14 overflow-hidden rounded ${activeImage === index ? 'ring-2 ring-accent' : 'opacity-70 hover:opacity-100'}`}
                    onClick={() => setActiveImage(index)}
                  >
                    <img src={image.url} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </BentoCard>
          
          <BentoCard spanCols={3} className="p-6 mt-4" delay={300}>
            <h3 className="bento-card-title mb-4">Development Journey</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-dark-lighter rounded-lg">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mb-3">
                  <span className="text-white font-semibold">1</span>
                </div>
                <h4 className="text-accent text-lg font-orbitron mb-2">Prototyping</h4>
                <p className="text-light-dark">
                  Initial prototype development with 3D printing and testing of mechanical components.
                </p>
              </div>
              
              <div className="p-4 bg-dark-lighter rounded-lg">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mb-3">
                  <span className="text-white font-semibold">2</span>
                </div>
                <h4 className="text-accent text-lg font-orbitron mb-2">Construction</h4>
                <p className="text-light-dark">
                  Building the control glove with flex sensors and assembling the bionic hand with servo motors.
                </p>
              </div>
              
              <div className="p-4 bg-dark-lighter rounded-lg">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mb-3">
                  <span className="text-white font-semibold">3</span>
                </div>
                <h4 className="text-accent text-lg font-orbitron mb-2">Integration</h4>
                <p className="text-light-dark">
                  Programming Arduino to map sensor input to servo output with precise calibration.
                </p>
              </div>
            </div>
          </BentoCard>
          
          <BentoCard spanCols={3} className="p-6 mt-4" delay={400}>
            <h3 className="bento-card-title mb-4">Project Results</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-semibold text-accent mb-3">Achievements</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Responsive finger movement with ~50ms latency</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Accurate 1:1 mapping of human to bionic hand gestures</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Stable operation without servo flutter or signal noise</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Easy calibration for different users and hand sizes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Complete system for under 500 AED total cost</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-accent mb-3">Future Improvements</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">→</span>
                    <span>Wireless operation via Bluetooth or ESP32 WiFi</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">→</span>
                    <span>Machine learning for adaptive gesture recognition</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">→</span>
                    <span>Haptic feedback system for improved user experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">→</span>
                    <span>Integration with EMG sensors for direct muscle control</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">→</span>
                    <span>Smartphone app for custom gesture programming</span>
                  </li>
                </ul>
              </div>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
