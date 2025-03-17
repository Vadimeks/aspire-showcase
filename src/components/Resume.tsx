
import React, { useEffect, useRef } from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { User, GraduationCap, Briefcase, Code, Download } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

interface Skill {
  name: string;
  level?: string;
}

const Resume: React.FC = () => {
  const resumeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Apply the animation class right away to ensure content is visible
    if (resumeRef.current) {
      resumeRef.current.classList.add('animate-fade-in');
      resumeRef.current.classList.remove('opacity-0');
    }
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.1, rootMargin: '-100px' }
    );

    if (resumeRef.current) observer.observe(resumeRef.current);

    return () => {
      if (resumeRef.current) observer.unobserve(resumeRef.current);
    };
  }, []);

  const experiences: Experience[] = [
    {
      title: "Full Stack Developer",
      company: "Tech Company Ltd.",
      period: "2022 - Present",
      description: [
        "Developed and maintained full-stack applications using React, Node.js, and PostgreSQL",
        "Implemented responsive UI components with a focus on accessibility and performance",
        "Collaborated with cross-functional teams to deliver high-quality software solutions"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency Inc.",
      period: "2020 - 2022",
      description: [
        "Created responsive and interactive web applications using React and TypeScript",
        "Optimized website performance achieving 30% improvement in load time",
        "Collaborated with designers to implement pixel-perfect UI components"
      ]
    }
  ];

  const education: Education[] = [
    {
      degree: "BSc in Computer Science",
      institution: "University Name",
      period: "2016 - 2020",
      description: "Focused on software engineering, web development, and data structures & algorithms"
    }
  ];

  const frontendSkills: Skill[] = [
    { name: "HTML5/CSS3", level: "Expert" },
    { name: "JavaScript", level: "Expert" },
    { name: "TypeScript", level: "Advanced" },
    { name: "React", level: "Advanced" },
    { name: "Redux", level: "Advanced" },
    { name: "Next.js", level: "Intermediate" },
    { name: "Tailwind CSS", level: "Advanced" },
  ];

  const backendSkills: Skill[] = [
    { name: "Node.js", level: "Advanced" },
    { name: "Express.js", level: "Advanced" },
    { name: "RESTful APIs", level: "Advanced" },
    { name: "GraphQL", level: "Intermediate" },
    { name: "PostgreSQL", level: "Intermediate" },
    { name: "MongoDB", level: "Intermediate" },
  ];

  const mobileSkills: Skill[] = [
    { name: "React Native", level: "Intermediate" },
    { name: "Flutter", level: "Basic" },
  ];

  return (
    <section id="resume" className="section bg-secondary/30 py-16" ref={resumeRef}>
      <div className="container mx-auto transition-opacity duration-500" style={{ transitionDelay: '0.2s' }}>
        <div className="text-center mb-8">
          <div className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-3">
            Professional Experience
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Resume</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Optimized for ATS systems and highlighting key skills and experiences
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/3 flex flex-col items-center">
            <Avatar className="w-48 h-48 rounded-full mb-4">
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Profile picture" />
              <AvatarFallback className="text-4xl">
                <User size={64} />
              </AvatarFallback>
            </Avatar>
            <h3 className="text-2xl font-bold">John Smith</h3>
            <p className="text-muted-foreground mb-4">Full Stack Developer</p>
            <div className="flex flex-wrap gap-2 mb-4 justify-center">
              <Badge variant="outline" className="py-1.5">React</Badge>
              <Badge variant="outline" className="py-1.5">Node.js</Badge>
              <Badge variant="outline" className="py-1.5">TypeScript</Badge>
            </div>
            <p className="text-center text-muted-foreground">
              Passionate about creating elegant solutions to complex problems with modern web technologies.
            </p>
          </div>
          <div className="md:w-2/3">
            <Tabs defaultValue="experience" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="experience" className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  <span>Experience</span>
                </TabsTrigger>
                <TabsTrigger value="education" className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" />
                  <span>Education</span>
                </TabsTrigger>
                <TabsTrigger value="skills" className="flex items-center gap-2">
                  <Code className="w-4 h-4" />
                  <span>Skills</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="experience" className="space-y-6">
                {experiences.map((exp, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardHeader className="bg-background p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b">
                      <div>
                        <h3 className="text-xl font-bold">{exp.title}</h3>
                        <p className="text-muted-foreground">{exp.company}</p>
                      </div>
                      <Badge variant="outline" className="self-start sm:self-center whitespace-nowrap">
                        {exp.period}
                      </Badge>
                    </CardHeader>
                    <CardContent className="p-6">
                      <ul className="list-disc pl-5 space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              
              <TabsContent value="education" className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardHeader className="bg-background p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b">
                      <div>
                        <h3 className="text-xl font-bold">{edu.degree}</h3>
                        <p className="text-muted-foreground">{edu.institution}</p>
                      </div>
                      <Badge variant="outline" className="self-start sm:self-center whitespace-nowrap">
                        {edu.period}
                      </Badge>
                    </CardHeader>
                    <CardContent className="p-6">
                      <p>{edu.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              
              <TabsContent value="skills">
                <Card>
                  <CardContent className="p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Frontend Development</h3>
                      <div className="space-y-4">
                        {frontendSkills.map((skill, index) => (
                          <div key={index} className="flex justify-between items-center">
                            <span>{skill.name}</span>
                            <Badge variant="secondary">{skill.level}</Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Backend Development</h3>
                      <div className="space-y-4">
                        {backendSkills.map((skill, index) => (
                          <div key={index} className="flex justify-between items-center">
                            <span>{skill.name}</span>
                            <Badge variant="secondary">{skill.level}</Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Mobile Development</h3>
                      <div className="space-y-4">
                        {mobileSkills.map((skill, index) => (
                          <div key={index} className="flex justify-between items-center">
                            <span>{skill.name}</span>
                            <Badge variant="secondary">{skill.level}</Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Button variant="outline" className="shadow-sm flex items-center gap-2">
            <Download className="h-4 w-4" />
            Download Full Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Resume;
