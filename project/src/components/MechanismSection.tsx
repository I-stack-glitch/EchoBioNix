import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Code } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';
import BentoCard from './ui/BentoCard';

const MechanismSection: React.FC = () => {
  return (
    <section id="mechanism" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-10 pointer-events-none"></div>
      <div className="container-custom">
        <div className="text-center mb-12">
          <SectionTitle>Working Mechanism</SectionTitle>
          <p className="max-w-2xl mx-auto text-light-dark">
            The EchoBioNiX system uses a three-stage process to translate finger movements
            into bionic hand motions with precision and low latency.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <BentoCard className="p-6" delay={100}>
            <div className="flex flex-col h-full">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mr-3">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="text-xl font-orbitron text-accent">Input</h3>
              </div>
              <p className="mb-auto">
                Flex sensors mounted on glove detect finger movement. As the user bends their 
                fingers, the resistance of each sensor changes proportionally.
              </p>
              <div className="mt-4 p-4 bg-dark-lighter rounded-lg">
                <h4 className="text-accent mb-2 font-semibold">Sensor Reading</h4>
                <p className="text-sm text-light-dark">
                  Each flex sensor produces an analog value that ranges from 610-645 when bent.
                  These values are read through the Arduino's analog pins.
                </p>
              </div>
            </div>
          </BentoCard>
          
          <BentoCard className="p-6" delay={200}>
            <div className="flex flex-col h-full">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mr-3">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="text-xl font-orbitron text-accent">Processing</h3>
              </div>
              <p className="mb-auto">
                Arduino maps analog values to servo angles using the map() function. This converts 
                the flex sensor readings into appropriate angles for each servo motor.
              </p>
              <div className="mt-4 bg-dark-lighter rounded-lg overflow-hidden">
                <div className="bg-dark-light px-4 py-2 flex items-center justify-between">
                  <span className="text-accent">Code Snippet</span>
                  <Code size={18} className="text-accent" />
                </div>
                <div className="p-4">
                  <pre className="text-sm text-light-dark overflow-x-auto">
                    <code>
                      {`int flexValue = analogRead(A1);
int angle = map(flexValue, 610, 645, 0, 180);
servo1.write(angle);`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </BentoCard>
          
          <BentoCard className="p-6" delay={300}>
            <div className="flex flex-col h-full">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mr-3">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="text-xl font-orbitron text-accent">Output</h3>
              </div>
              <p className="mb-auto">
                Each corresponding servo motor actuates the linked finger on the bionic hand.
                The servos move to match the exact angle of the user's fingers in real-time.
              </p>
              <div className="mt-4 p-4 bg-dark-lighter rounded-lg">
                <h4 className="text-accent mb-2 font-semibold">Response Time</h4>
                <p className="text-sm text-light-dark">
                  The system achieves a response time of approximately 50ms from finger movement
                  to bionic hand actuation, creating a near real-time experience.
                </p>
              </div>
            </div>
          </BentoCard>
          
          <BentoCard spanCols={3} className="p-6 mt-4" delay={400}>
            <h3 className="bento-card-title mb-4">Finger Mapping Table</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="table-header rounded-tl-lg">Finger</th>
                    <th className="table-header">Flex Sensor</th>
                    <th className="table-header">Analog Pin</th>
                    <th className="table-header">Servo Pin</th>
                    <th className="table-header rounded-tr-lg">Threshold (Open → Bent)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="table-cell table-cell-accent">Thumb</td>
                    <td className="table-cell table-cell-accent">FLEX1</td>
                    <td className="table-cell table-cell-accent">A1</td>
                    <td className="table-cell table-cell-accent">D2</td>
                    <td className="table-cell table-cell-accent">610 → 645</td>
                  </tr>
                  <tr>
                    <td className="table-cell">Index</td>
                    <td className="table-cell">FLEX2</td>
                    <td className="table-cell">A2</td>
                    <td className="table-cell">D4</td>
                    <td className="table-cell">590 → 615</td>
                  </tr>
                  <tr>
                    <td className="table-cell table-cell-accent">Middle</td>
                    <td className="table-cell table-cell-accent">FLEX3</td>
                    <td className="table-cell table-cell-accent">A3</td>
                    <td className="table-cell table-cell-accent">D6</td>
                    <td className="table-cell table-cell-accent">621 → 642</td>
                  </tr>
                  <tr>
                    <td className="table-cell">Ring</td>
                    <td className="table-cell">FLEX4</td>
                    <td className="table-cell">A4</td>
                    <td className="table-cell">D8</td>
                    <td className="table-cell">668 → 700</td>
                  </tr>
                  <tr>
                    <td className="table-cell table-cell-accent">Pinky</td>
                    <td className="table-cell table-cell-accent">FLEX5</td>
                    <td className="table-cell table-cell-accent">A5</td>
                    <td className="table-cell table-cell-accent">D10</td>
                    <td className="table-cell table-cell-accent">624 → 644</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </BentoCard>
          
          <BentoCard className="p-6" delay={500}>
            <h3 className="bento-card-title mb-4">Challenges Faced</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">●</span>
                <span>Servo flutter from unstable input voltage</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">●</span>
                <span>Misaligned sensor-to-servo mapping</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">●</span>
                <span>Delay in real-time gesture processing</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">●</span>
                <span>Space limitations on breadboard</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">●</span>
                <span>Noise/interference from adjacent wires</span>
              </li>
            </ul>
          </BentoCard>
          
          <BentoCard className="p-6" delay={600}>
            <h3 className="bento-card-title mb-4">Solutions Implemented</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-accent mr-2 mt-1">✓</span>
                <span>Voltage divider circuit tuning for each sensor</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2 mt-1">✓</span>
                <span>Software calibration with trial & error method</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2 mt-1">✓</span>
                <span>Use of stable power source and separate GNDs</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2 mt-1">✓</span>
                <span>Modular pin assignment for easier debugging</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2 mt-1">✓</span>
                <span>Shielded wires and resistors for noise filtering</span>
              </li>
            </ul>
          </BentoCard>
          
          <BentoCard className="p-6" delay={700}>
            <h3 className="bento-card-title mb-4">Calibration Process</h3>
            <div className="relative">
              <Activity className="absolute right-2 top-2 text-accent animate-pulse" />
              <div className="bg-dark-lighter p-4 rounded-lg">
                <h4 className="text-accent mb-3">Threshold Values</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Thumb</span>
                      <span className="text-accent">610 - 645</span>
                    </div>
                    <div className="w-full bg-dark-light rounded-full h-2">
                      <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full w-[80%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Index</span>
                      <span className="text-accent">590 - 615</span>
                    </div>
                    <div className="w-full bg-dark-light rounded-full h-2">
                      <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full w-[75%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Middle</span>
                      <span className="text-accent">621 - 642</span>
                    </div>
                    <div className="w-full bg-dark-light rounded-full h-2">
                      <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full w-[85%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Ring</span>
                      <span className="text-accent">668 - 700</span>
                    </div>
                    <div className="w-full bg-dark-light rounded-full h-2">
                      <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full w-[70%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Pinky</span>
                      <span className="text-accent">624 - 644</span>
                    </div>
                    <div className="w-full bg-dark-light rounded-full h-2">
                      <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full w-[65%]"></div>
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

export default MechanismSection;