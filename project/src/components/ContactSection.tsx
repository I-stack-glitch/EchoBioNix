import React from 'react';
import { Mail, Github, Linkedin, MessageSquare } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';
import BentoCard from './ui/BentoCard';
import Button from './ui/Button';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-10 pointer-events-none"></div>
      <div className="container-custom">
        <div className="text-center mb-12">
          <SectionTitle>Get In Touch</SectionTitle>
          <p className="max-w-2xl mx-auto text-light-dark">
            Interested in our project or have questions? We'd love to hear from you.
            Reach out to our team or connect with us on social media.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <BentoCard className="p-6" delay={100}>
            <h3 className="bento-card-title mb-4">Contact Us</h3>
            <p className="mb-4 text-light-dark">
              Have questions about the EchoBioNiX project or interested in collaborating?
              Send us a message and we'll get back to you soon.
            </p>
            
            <div className="space-y-4 mt-6">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-dark-lighter flex items-center justify-center mr-3">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-light-dark">Email</p>
                  <p className="text-accent">ff2974247@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-dark-lighter flex items-center justify-center mr-3">
                  <MessageSquare className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-light-dark">Support</p>
                  <p className="text-accent">aanasmohaamed@gmail.com</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-dark-lighter flex items-center justify-center transition-colors hover:bg-accent hover:text-dark">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark-lighter flex items-center justify-center transition-colors hover:bg-accent hover:text-dark">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark-lighter flex items-center justify-center transition-colors hover:bg-accent hover:text-dark">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </BentoCard>
          
          <BentoCard spanCols={2} className="p-6" delay={200}>
            <h3 className="bento-card-title mb-4">Send Us a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-1 text-light-dark">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-dark-lighter border border-dark-light rounded p-2 focus:border-accent focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1 text-light-dark">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-dark-lighter border border-dark-light rounded p-2 focus:border-accent focus:outline-none transition-colors"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-1 text-light-dark">Subject</label>
                <input 
                  type="text" 
                  className="w-full bg-dark-lighter border border-dark-light rounded p-2 focus:border-accent focus:outline-none transition-colors"
                  placeholder="Subject"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-1 text-light-dark">Message</label>
                <textarea 
                  className="w-full bg-dark-lighter border border-dark-light rounded p-2 focus:border-accent focus:outline-none transition-colors min-h-[120px]"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <div className="flex justify-end">
                <Button variant="primary" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Send Message
                </Button>
              </div>
            </form>
          </BentoCard>
          
          <BentoCard spanCols={3} className="p-6 mt-4" delay={300}>
            <h3 className="bento-card-title mb-4">Team Members</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent p-0.5">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img 
                      src="https://i.postimg.cc/hGN7kp0F/arsalan2.jpg" 
                      alt="Mohammed Arsalan" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="text-accent font-semibold">Mohammed Arsalan</h4>
                  <p className="text-sm text-light-dark">Hardware Integration</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent p-0.5">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img 
                      src="https://i.postimg.cc/65PswYRn/Reshot.jpg" 
                      alt="Mohammed Anas" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="text-accent font-semibold">Mohammed Anas</h4>
                  <p className="text-sm text-light-dark">Software & Code Logic</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent p-0.5">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img 
                      src="https://i.postimg.cc/T1Z0w76H/Sayed-Anas2.jpg" 
                      alt="Sayed Mohammed Anas" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="text-accent font-semibold">Sayed Muhammed Anas</h4>
                  <p className="text-sm text-light-dark">Circuit Engineering</p>
                </div>
              </div>
            </div>
          </BentoCard>
        </div>
      </div>
      
      <div className="mt-16 border-t border-dark-lighter">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-light-dark">© 2025 EchoBioNiX. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-light-dark hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="text-light-dark hover:text-accent transition-colors">Terms of Service</a>
              <a href="#" className="text-light-dark hover:text-accent transition-colors">Documentation</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;