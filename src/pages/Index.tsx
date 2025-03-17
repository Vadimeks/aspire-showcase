
import React, { useRef } from "react";
import Header from "@/components/Header";
import Resume from "@/components/Resume";

const Index = () => {
  const handleSectionClick = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onSectionClick={handleSectionClick} />
      
      <main>
        {/* Hero section placeholder - will be implemented later */}
        <section id="hero" className="section pt-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
            <p className="text-xl text-gray-600 mb-8">Full Stack Developer specialized in React & Node.js</p>
            <button 
              onClick={() => handleSectionClick('portfolio')}
              className="button-primary"
            >
              View Portfolio
            </button>
          </div>
        </section>
        
        {/* Resume section */}
        <Resume />
        
        {/* Portfolio section placeholder - will be implemented later */}
        <section id="portfolio" className="section bg-background">
          <div className="text-center mb-10">
            <div className="tag mb-3">My Work</div>
            <h2 className="section-heading">Portfolio</h2>
            <p className="section-subheading">
              Check out some of my recent projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Portfolio items will be added later */}
            <div className="card-interactive">
              <h3 className="text-xl font-bold mb-2">Project 1</h3>
              <p className="text-muted-foreground mb-4">Coming soon</p>
            </div>
            <div className="card-interactive">
              <h3 className="text-xl font-bold mb-2">Project 2</h3>
              <p className="text-muted-foreground mb-4">Coming soon</p>
            </div>
            <div className="card-interactive">
              <h3 className="text-xl font-bold mb-2">Project 3</h3>
              <p className="text-muted-foreground mb-4">Coming soon</p>
            </div>
          </div>
        </section>
        
        {/* Contact section placeholder - will be implemented later */}
        <section id="contact" className="section bg-secondary/30">
          <div className="text-center mb-10">
            <div className="tag mb-3">Get In Touch</div>
            <h2 className="section-heading">Contact Me</h2>
            <p className="section-subheading">
              I'm currently available for freelance work or full-time positions
            </p>
          </div>
          
          <div className="max-w-md mx-auto">
            <div className="card p-8">
              <p className="mb-4">Email: example@domain.com</p>
              <p className="mb-4">Location: Poland / EU / Remote</p>
              <p>Looking for opportunities in Ukraine, Poland, and across the EU</p>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="py-8 text-center text-muted-foreground">
        <div className="container mx-auto">
          <p>© 2024 My Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
