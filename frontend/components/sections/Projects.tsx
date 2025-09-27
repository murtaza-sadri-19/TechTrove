'use client';
import { useState } from 'react';
import { ExternalLink, Brain, Satellite, Search, Smartphone, BarChart, Trophy } from 'lucide-react';

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "OCR Research (CRNN + CTC)",
      description: "Deep learning-based OCR pipeline for French and multilingual handwritten text recognition.",
      category: ["ml", "research"],
      tags: ["TensorFlow", "CRNN", "CTC"],
      metrics: { accuracy: 96.2, inference: 15 },
      link: "https://github.com/murtaza-sadri-19/OCR-CRNN",
      icon: Brain
    },
    {
      id: 2,
      title: "6D Pose Estimation",
      description: "Research project on deep learning-based perception for space debris tracking.",
      category: ["ml", "research"],
      tags: ["PyTorch", "Computer Vision", "Research"],
      metrics: { precision: 91.7, processing: 22 },
      link: "#",
      icon: Satellite
    },
    {
      id: 3,
      title: "TLC Image Processing",
      description: "Automated plate, strip, and spot detection using YOLO + OpenCV.",
      category: ["ml"],
      tags: ["YOLO", "OpenCV", "Python"],
      metrics: { detection: 88.9, speed: 31 },
      link: "#",
      icon: Search
    },
    {
      id: 4,
      title: "CoderKabila",
      description: "Community-driven DSA practice tracker app with Firebase backend.",
      category: ["web"],
      tags: ["Flutter", "Firebase", "DSA"],
      metrics: { users: "1.2k+", uptime: 99.9 },
      link: "#",
      icon: Smartphone
    },
    {
      id: 5,
      title: "Health Survey App",
      description: "Kotlin + Firebase-based survey system for health and education policy planning.",
      category: ["web"],
      tags: ["Kotlin", "Firebase", "Google Sheets API"],
      metrics: { surveys: "5k+", analytics: "Real-time" },
      link: "https://github.com/murtaza-sadri-19/HealthSurveyAppAndroid",
      icon: BarChart
    },
    {
      id: 6,
      title: "BlueTriangle Absenteeism",
      description: "Hackathon-winning project on absenteeism prediction and analysis.",
      category: ["ml"],
      tags: ["ML", "Analytics", "Hackathon"],
      metrics: { award: "🏆", accuracy: 92.4 },
      link: "https://github.com/murtaza-sadri-19/BlueTriangle-Absenteeism",
      icon: Trophy
    }
  ];

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'ml', label: 'ML/AI' },
    { id: 'web', label: 'Web' },
    { id: 'research', label: 'Research' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category.includes(activeFilter));

  return (
    <section id="projects" className="py-20 bg-secondary">
      <div className="container-section">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gradient">Featured Projects</h2>
        
        {/* Project Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                activeFilter === filter.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card border border-border hover:bg-muted'
              }`}
              data-testid={`filter-${filter.id}`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="projects-grid">
          {filteredProjects.map((project) => {
            const IconComponent = project.icon;
            return (
              <div 
                key={project.id} 
                className="card p-6 hover:shadow-lg hover:scale-105 transition-all"
                data-testid={`project-card-${project.id}`}
              >
                <div className="flex items-center gap-2 mb-4">
                  <IconComponent className="text-primary text-xl" size={24} />
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                {/* Performance Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  {Object.entries(project.metrics).map(([key, value], index) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-bold text-primary">{value}{typeof value === 'number' && key !== 'users' && key !== 'surveys' ? (key.includes('time') || key.includes('speed') || key.includes('inference') || key.includes('processing') ? 'ms' : '%') : ''}</div>
                      <div className="text-muted-foreground capitalize">{key}</div>
                    </div>
                  ))}
                </div>
                
                <div className="flex gap-2 flex-wrap mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className={`px-3 py-1 rounded-full text-sm ${
                        tagIndex % 2 === 0 
                          ? 'bg-primary/10 text-primary' 
                          : 'bg-accent/10 text-accent'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium inline-flex items-center gap-1"
                  data-testid={`project-link-${project.id}`}
                >
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
