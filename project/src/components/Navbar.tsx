import React, { useState, useEffect } from 'react';
import { Cpu, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const navLinks = [
    { name: 'Overview', href: '#overview' },
    { name: 'Team', href: '#team' },
    { name: 'Hardware', href: '#hardware' },
    { name: 'Mechanism', href: '#mechanism' },
    { name: 'Demo', href: '#demo' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-dark bg-opacity-80 backdrop-blur' : 'bg-transparent'
    }`}>
      <div className="container-custom flex justify-between items-center py-4">
        <a href="#" className="flex items-center gap-2">
          <Cpu className="text-accent w-7 h-7" />
          <span className="font-orbitron font-bold text-xl">EchoBioNiX</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="font-rajdhani text-light-dark hover:text-accent transition-colors px-1 py-2 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-accent"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-dark-light backdrop-blur-md transform transition-transform duration-300 ease-in-out ${
        isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <ul className="flex flex-col p-4">
          {navLinks.map((link) => (
            <li key={link.name} className="border-b border-dark-lighter">
              <a
                href={link.href}
                className="block py-3 px-4 font-rajdhani text-light-dark hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;