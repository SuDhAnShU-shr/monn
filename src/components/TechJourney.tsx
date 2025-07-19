import React, { useState } from 'react';
import { Code, Server, Smartphone, Cloud, Database, Globe, Calendar, TrendingUp } from 'lucide-react';

const TechJourney = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const techGroups = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Frontend Development',
      founded: '2024',
      importance: 'High',
      demand: '95%',
      technologies: [
        { name: 'HTML', level: 85, color: 'bg-orange-500' },
        { name: 'CSS', level: 80, color: 'bg-blue-500' },
        { name: 'JavaScript', level: 75, color: 'bg-yellow-500' },
        { name: 'React', level: 70, color: 'bg-blue-600' }
      ],
      description: 'Markup foundation, styling with responsive layouts, and DOM manipulation for interactivity.',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Backend Development',
      founded: '2024',
      importance: 'High',
      demand: '90%',
      technologies: [
        { name: 'Python', level: 80, color: 'bg-blue-500' },
        { name: 'Flask', level: 65, color: 'bg-gray-600' },
        { name: 'MongoDB', level: 60, color: 'bg-green-600' },
        { name: 'DBMS', level: 70, color: 'bg-blue-700' }
      ],
      description: 'Python programming, lightweight Flask framework, and NoSQL databases for backend development.',
      gradient: 'from-green-500 to-teal-600'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Core Programming',
      founded: '2025',
      importance: 'Medium',
      demand: '88%',
      technologies: [
        { name: 'C Programming', level: 75, color: 'bg-blue-500' },
        { name: 'DBMS', level: 70, color: 'bg-green-500' },
        { name: 'Data Structures', level: 65, color: 'bg-purple-500' },
        { name: 'Algorithms', level: 60, color: 'bg-red-500' }
      ],
      description: 'Core programming fundamentals, database management, and algorithmic problem solving.',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud & DevOps',
      founded: '2025',
      importance: 'Growing',
      demand: '92%',
      technologies: [
        { name: 'Docker', level: 50, color: 'bg-blue-600' },
        { name: 'Kubernetes', level: 45, color: 'bg-blue-700' },
        { name: 'Jenkins', level: 40, color: 'bg-red-600' },
        { name: 'AWS', level: 50, color: 'bg-orange-500' }
      ],
      description: 'Learning containerization, orchestration, CI/CD automation, and cloud computing through upcoming Linux World internship.',
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <section id="tech-journey" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Tech Journey
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Explore my technology stack with detailed insights and market relevance
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {techGroups.map((group, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Main Card */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200 dark:border-gray-700">
                {/* Header */}
                <div className="flex items-center mb-4">
                  <div className={`bg-gradient-to-r ${group.gradient} p-3 rounded-lg text-white mr-4`}>
                    {group.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {group.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        Since {group.founded}
                      </span>
                      <span className="flex items-center">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        {group.demand} demand
                      </span>
                    </div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="space-y-3 mb-4">
                  {group.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="flex items-center justify-between">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {tech.name}
                      </span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                          <div
                            className={`${tech.color} h-2 rounded-full transition-all duration-500`}
                            style={{ width: `${tech.level}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-400 w-8">
                          {tech.level}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Importance Badge */}
                <div className="flex justify-between items-center">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    group.importance === 'High' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                      : group.importance === 'Medium'
                      ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                      : 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
                  }`}>
                    {group.importance} Priority
                  </span>
                </div>
              </div>

              {/* Hover Details */}
              {hoveredCard === index && (
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-800/95 rounded-xl p-6 flex items-center justify-center transform transition-all duration-300 z-10">
                  <div className="text-center text-white">
                    <div className="text-white mb-4">
                      {group.icon}
                    </div>
                    <h4 className="text-lg font-bold mb-2">{group.title}</h4>
                    <p className="text-gray-200 text-sm mb-4">{group.description}</p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-300">Founded:</span>
                        <div className="font-semibold">{group.founded}</div>
                      </div>
                      <div>
                        <span className="text-gray-300">Market Demand:</span>
                        <div className="font-semibold">{group.demand}</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">25+</div>
              <div className="text-gray-600 dark:text-gray-400">Technologies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">2</div>
              <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">12</div>
              <div className="text-gray-600 dark:text-gray-400">Projects Built</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">89%</div>
              <div className="text-gray-600 dark:text-gray-400">Avg. Proficiency</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechJourney;