
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onSectionClick: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSectionClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
      
      // Detect which section is currently in view
      const sections = ['hero', 'resume', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const handleNavClick = (section: string) => {
    setActiveSection(section);
    onSectionClick(section);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass border-b shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">
            <span className="text-primary">P</span>ortfolio
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => handleNavClick('hero')} 
            className={`nav-link ${activeSection === 'hero' ? 'active-nav-link' : ''}`}
          >
            Home
          </button>
          <button 
            onClick={() => handleNavClick('resume')} 
            className={`nav-link ${activeSection === 'resume' ? 'active-nav-link' : ''}`}
          >
            Resume
          </button>
          <button 
            onClick={() => handleNavClick('portfolio')} 
            className={`nav-link ${activeSection === 'portfolio' ? 'active-nav-link' : ''}`}
          >
            Portfolio
          </button>
          <Button 
            onClick={() => handleNavClick('contact')} 
            className="ml-4 shadow-sm"
          >
            Contact Me
          </Button>
        </nav>

        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => handleNavClick('contact')} 
            className="mr-2"
          >
            Contact
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
