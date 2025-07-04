import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Safety Object Detection',
      description: 'AI-powered safety monitoring system using computer vision to detect safety equipment and potential hazards in real-time at construction sites.',
      techStack: ['Python', 'OpenCV', 'TensorFlow', 'YOLO', 'Flask'],
      githubUrl: 'https://github.com/Nikhilaxx/safety-object-detection',
      imageUrl: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Code Reviewer',
      description: 'Intelligent code review tool that analyzes code quality, suggests improvements, and identifies potential bugs automatically.',
      techStack: ['Python', 'NLP', 'Machine Learning', 'Flask', 'React'],
      githubUrl: 'https://github.com/Nikhilaxx/Code-Reviewer',
      imageUrl: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
    },
    {
      title: 'Academic Paper Finder',
      description: 'Smart research assistant that helps students and researchers find relevant academic papers using information retrieval techniques.',
      techStack: ['Python', 'Django', 'NLP', 'Web Scraping', 'Cosine similarity','Information Retrieval'],
      githubUrl: 'https://github.com/Nikhilaxx/Academic-Paper-Finder',
      imageUrl: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      live:'https://academic-paper-finder-2.onrender.com/',
    },
    {
      title: 'Blog Application',
      description: 'Full-featured blogging platform with user authentication, text editor, and responsive design along with basic CRUD operations using php.',
      techStack: ['php', 'html', 'vanilla css', 'sql'],
      githubUrl: 'https://github.com/Nikhilaxx/Blog-application',
      imageUrl: 'https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
    },
    {
      title: 'Handwritten Digit Recognition',
      description: 'Deep learning model that recognizes handwritten digits with high accuracy using neural networks.',
      techStack: ['Python', 'TensorFlow', 'Keras', 'NumPy', 'OpenCV'],
      githubUrl: 'https://github.com/Nikhilaxx/Handwritten-Digit-Recognition',
      imageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white text-black dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-300 dark:border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-600/20 text-blue-600 dark:text-blue-400 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">Live</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
