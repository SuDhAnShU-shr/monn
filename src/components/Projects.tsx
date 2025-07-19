import React, { useState } from 'react';
import { Github, ExternalLink, Star, GitFork, Calendar, X, Filter, Search } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const projects = [
    {
      id: 1,
      title: 'Rajasthani Di Rasoi',
      description: 'Traditional Rajasthani food ordering platform with authentic recipes',
      longDescription: 'A beautiful food ordering platform showcasing traditional Rajasthani cuisine. Built with modern web technologies, featuring an intuitive user interface, recipe details, and ordering system. Celebrates the rich culinary heritage of Rajasthan with a modern digital approach.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Fullstack',
      tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP'],
      github: 'https://github.com/SuDhAnShU-shr/rajasthani-di-rasoi',
      live: 'https://rajasthani-di-rasoi.vercel.app',
      stars: 12,
      forks: 3,
      date: '2024-08-15',
      features: ['Traditional Recipe Showcase', 'Food Ordering System', 'Responsive Design', 'Cultural Heritage Focus', 'User-Friendly Interface'],
      challenges: 'Creating an authentic design that represents Rajasthani culture while maintaining modern usability',
      learned: 'Frontend development, cultural design principles, and user experience optimization'
    },
    {
      id: 2,
      title: 'Public Toilet Locator',
      description: 'Smart solution for finding nearby public restrooms with real-time data',
      longDescription: 'A practical web application that helps users locate nearby public toilets with real-time availability and cleanliness ratings. Built to solve a real-world problem with features like GPS integration, user reviews, and accessibility information.',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Frontend',
      tech: ['HTML', 'CSS', 'JavaScript', 'Google Maps API', 'Geolocation'],
      github: 'https://github.com/SuDhAnShU-shr/public-toilet-locator',
      live: 'https://public-toilet-locator.vercel.app',
      stars: 18,
      forks: 5,
      date: '2024-10-20',
      features: ['GPS Location Services', 'Real-time Availability', 'User Reviews & Ratings', 'Accessibility Information', 'Offline Support'],
      challenges: 'Integrating GPS services and ensuring accurate real-time data for public facilities',
      learned: 'API integration, geolocation services, and solving real-world problems through technology'
    },
    {
      id: 3,
      title: 'Personal Portfolio Website',
      description: 'Modern, responsive portfolio showcasing my development journey',
      longDescription: 'A comprehensive portfolio website built with React and Tailwind CSS, featuring interactive elements, dark mode, project showcases, and a complete overview of my technical journey. Includes quiz systems, project modals, and responsive design.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Frontend',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      github: 'https://github.com/SuDhAnShU-shr/portfolio',
      live: 'https://sudhanshu-portfolio.vercel.app',
      stars: 25,
      forks: 8,
      date: '2024-12-15',
      features: ['Interactive UI Elements', 'Dark/Light Mode', 'Responsive Design', 'Quiz System', 'Project Showcases'],
      challenges: 'Creating smooth animations and ensuring cross-browser compatibility',
      learned: 'Advanced React patterns, animation libraries, and modern web development practices'
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === 'All' || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const categories = ['All', 'Frontend', 'Fullstack', 'Hackathon'];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of my technical journey through real-world applications
          </p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 space-y-4 md:space-y-0">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  filter === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
              >
                <Filter className="w-4 h-4 inline mr-2" />
                {category}
              </button>
            ))}
          </div>

          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.category === 'Frontend' ? 'bg-blue-100 text-blue-800' :
                    project.category === 'Fullstack' ? 'bg-green-100 text-green-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>

                {/* Project Stats */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      {project.stars}
                    </div>
                    <div className="flex items-center">
                      <GitFork className="w-4 h-4 mr-1" />
                      {project.forks}
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors duration-200"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No projects found matching your criteria.
            </p>
          </div>
        )}

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-black bg-opacity-50 text-white rounded-lg hover:bg-opacity-70 transition-colors duration-200"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="absolute bottom-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    selectedProject.category === 'Frontend' ? 'bg-blue-100 text-blue-800' :
                    selectedProject.category === 'Fullstack' ? 'bg-green-100 text-green-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {selectedProject.category}
                  </span>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {selectedProject.title}
                    </h3>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(selectedProject.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long'
                      })}
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                      <Star className="w-5 h-5 mr-1 text-yellow-500" />
                      {selectedProject.stars}
                    </div>
                    <div className="flex items-center">
                      <GitFork className="w-5 h-5 mr-1" />
                      {selectedProject.forks}
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                  {selectedProject.longDescription}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Key Features
                  </h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {selectedProject.features.map((feature: string, index: number) => (
                      <div key={index} className="flex items-center text-gray-700 dark:text-gray-300">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.tech.map((tech: string, index: number) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 rounded-lg font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Challenges & Learning */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Challenges Faced
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {selectedProject.challenges}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      What I Learned
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {selectedProject.learned}
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    View Live Demo
                  </a>
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors duration-200"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    View Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;