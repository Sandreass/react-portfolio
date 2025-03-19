import React from 'react';
import ProjectCard from './ProjectCard';

const PortfolioSection = () => {
  // Данные для проектов
  const projects = [
    {
      id: 1,
      title: 'E-commerce Website',
      description: 'Moderner Online-Shop, entwickelt auf React und Node.js',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      id: 2,
      title: 'Task Manager',
      description: 'Aufgabenverwaltungs-App mit Kollaborationsfunktionen',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Redux', 'Firebase'],
      link: '#'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Responsive Portfolio-Website mit Animationen und modernem Design',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Tailwind CSS'],
      link: '#'
    }
  ];

  return (
    <section id="portfolio" className="container mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Portfolio</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;