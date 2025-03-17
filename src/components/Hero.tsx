
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

interface HeroProps {
  onViewPortfolio: () => void;
}

const Hero: React.FC<HeroProps> = ({ onViewPortfolio }) => {
  const photoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-blur-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (photoRef.current) observer.observe(photoRef.current);
    if (textRef.current) observer.observe(textRef.current);

    return () => {
      if (photoRef.current) observer.unobserve(photoRef.current);
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  return (
    <section id="hero" className="section min-h-screen flex flex-col justify-center pt-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div 
          ref={photoRef} 
          className="order-2 lg:order-1 flex justify-center opacity-0"
          style={{ animationDelay: '0.2s' }}
        >
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-2xl">
              {/* Replace with your photo */}
              <div className="w-full h-full bg-secondary flex items-center justify-center text-secondary-foreground">
                Your Photo
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-3xl -z-10 animate-float"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/5 rounded-3xl -z-10 animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
        
        <div 
          ref={textRef} 
          className="order-1 lg:order-2 opacity-0"
          style={{ animationDelay: '0.4s' }}
        >
          <div className="tag mb-3 opacity-90">Welcome to my portfolio</div>
          <h1 className="section-heading mb-6">
            Hi, I'm <span className="text-primary">Your Name</span>
            <br />Full Stack Developer
          </h1>
          <p className="section-subheading mb-8">
            I create elegant, efficient, and user-focused applications across the entire development stack.
            My portfolio showcases projects that demonstrate my technical skills and problem-solving abilities.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button onClick={onViewPortfolio} size="lg" className="shadow-md">
              View Portfolio
            </Button>
            <Button variant="outline" size="lg">
              Download Resume
            </Button>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center mt-16 md:mt-24 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary/70" />
      </div>
    </section>
  );
};

export default Hero;
