import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './ui/SectionTitle';
import BentoCard from './ui/BentoCard';

const HardwareSection: React.FC = () => {
  const components = [
    {
      name: "Arduino Uno",
      description: "Microcontroller, reads sensor input & controls servos",
      image: "https://wallpapercave.com/wp/wp12081241.jpg"
    },
    {
      name: "Flex Sensors (x5)",
      description: "Bending-resistance sensors mounted on glove",
      image: "https://th.bing.com/th/id/R.8c8944544ef763da30c9f4edcfeeb181?rik=YRogSy5f0n1VBA&riu=http%3a%2f%2fupsats.com%2fContent%2fProduct%2fimg%2fProduct%2fLarge%2fFlex4.5-C88.jpg&ehk=ofWot3mPgoTr06RRPj8%2bMBgCcgLdOjrJtzkfPXo3irU%3d&risl=&pid=ImgRaw&r=0"
    },
    {
      name: "Servo Motors (x5)",
      description: "Actuate finger movement (MG90S or equivalent)",
      image: "https://i.postimg.cc/Gh87Pr8T/Chat-GPT-Image-May-1-2025-11-36-06-PM.png"
    },
    {
      name: "MPU6050",
      description: "(Optional) Measures hand orientation & motion",
      image: "https://www.electronicwings.com/storage/PlatformSection/TopicContent/138/icon/MPU6050.jpg"
    },
    {
      name: "3D-Printed Bionic Hand",
      description: "Lightweight PLA/ABS hand frame",
      image: "https://i.postimg.cc/y86J46mk/arm.jpg"
    },
    {
      name: "Power Bank",
      description: "9V external power source",
      image: "https://i.postimg.cc/fL1Hpg1R/Chat-GPT-Image-May-1-2025-11-39-24-PM.png"
    }
  ];

  return (
    <section id="hardware" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-10 pointer-events-none"></div>
      <div className="container-custom">
        <div className="text-center mb-12">
          <SectionTitle>Hardware & Tools</SectionTitle>
          <p className="max-w-2xl mx-auto text-light-dark">
            The EchoBioNiX system is built using a variety of hardware components that work together
            to create a responsive, gesture-controlled bionic hand.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {components.map((component, index) => (
            <BentoCard 
              key={index} 
              className="overflow-hidden"
              delay={index * 100}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={component.image} 
                  alt={component.name} 
                  className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-orbitron text-accent mb-2">{component.name}</h3>
                <p className="text-light-dark">{component.description}</p>
              </div>
            </BentoCard>
          ))}
        </div>
        
        <BentoCard spanCols={3} className="mt-8 p-6" delay={600}>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="table-header rounded-tl-lg">Component</th>
                  <th className="table-header">Description</th>
                  <th className="table-header">Quantity</th>
                  <th className="table-header rounded-tr-lg">Est. Cost (AED)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="table-cell table-cell-accent">Arduino Uno</td>
                  <td className="table-cell table-cell-accent">Microcontroller</td>
                  <td className="table-cell table-cell-accent">1</td>
                  <td className="table-cell table-cell-accent">40</td>
                </tr>
                <tr>
                  <td className="table-cell">Flex Sensors</td>
                  <td className="table-cell">Bending-resistance sensors</td>
                  <td className="table-cell">5</td>
                  <td className="table-cell">30</td>
                </tr>
                <tr>
                  <td className="table-cell table-cell-accent">MPU6050</td>
                  <td className="table-cell table-cell-accent">Orientation sensor</td>
                  <td className="table-cell table-cell-accent">NA</td>
                  <td className="table-cell table-cell-accent">NA</td>
                </tr>
                <tr>
                  <td className="table-cell">Bluetooth Module</td>
                  <td className="table-cell">HC-05</td>
                  <td className="table-cell">NA</td>
                  <td className="table-cell">NA</td>
                </tr>
                <tr>
                  <td className="table-cell table-cell-accent">Servo Motors</td>
                  <td className="table-cell table-cell-accent">MG90S or equivalent</td>
                  <td className="table-cell table-cell-accent">5</td>
                  <td className="table-cell table-cell-accent">30</td>
                </tr>
                <tr>
                  <td className="table-cell">OLED Display</td>
                  <td className="table-cell">Visual feedback</td>
                  <td className="table-cell">NA</td>
                  <td className="table-cell">NA</td>
                </tr>
                <tr>
                  <td className="table-cell table-cell-accent">Buzzer</td>
                  <td className="table-cell table-cell-accent">Audible response</td>
                  <td className="table-cell table-cell-accent">NA</td>
                  <td className="table-cell table-cell-accent">NA</td>
                </tr>
                <tr>
                  <td className="table-cell">3D Printed Hand</td>
                  <td className="table-cell">PLA/ABS frame</td>
                  <td className="table-cell">1</td>
                  <td className="table-cell">100</td>
                </tr>
                <tr>
                  <td className="table-cell table-cell-accent">Resistors/Jumpers</td>
                  <td className="table-cell table-cell-accent">13000(ohm) and Jumper Wires</td>
                  <td className="table-cell table-cell-accent">40+</td>
                  <td className="table-cell table-cell-accent">30</td>
                </tr>
                <tr>
                  <td className="table-cell">Soldering Tools</td>
                  <td className="table-cell">Complete set</td>
                  <td className="table-cell">1</td>
                  <td className="table-cell">30</td>
                </tr>
                <tr>
                  <td className="table-cell table-cell-accent">Miscellaneous</td>
                  <td className="table-cell table-cell-accent">Various components</td>
                  <td className="table-cell table-cell-accent">-</td>
                  <td className="table-cell table-cell-accent">20</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td className="table-cell font-bold" colSpan={3}>Total Estimated Cost</td>
                  <td className="table-cell font-bold text-accent">300-350 AED</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </BentoCard>
      </div>
    </section>
  );
};

export default HardwareSection;