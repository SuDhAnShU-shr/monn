import React from 'react';
import { Calendar, MapPin, Heart, Code, Coffee, Music } from 'lucide-react';

const About = () => {
  const timeline = [
    {
      year: '2023',
      title: 'Started Computer Science Journey',
      description: 'Enrolled in CSE program and discovered passion for coding'
    },
    {
      year: '2024',
      title: 'First Full-Stack Project',
      description: 'Built a complete web application using React and Node.js'
    },
    {
      year: '2025',
      title: 'Current Focus',
      description: 'Exploring advanced frameworks and contributing to open source'
    }
  ];

  const funFacts = [
    {
      icon: <Code className="w-5 h-5" />,
      text: 'Written 50,000+ lines of code'
    },
    {
      icon: <Coffee className="w-5 h-5" />,
      text: 'Powered by ☕ and curiosity'
    },
    {
      icon: <Music className="w-5 h-5" />,
      text: 'Codes better with lo-fi music'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A passionate developer who loves turning ideas into reality through code
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Main Content */}
          <div className="space-y-6">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Hi! I'm Sudhanshu, a computer science student at Lovely Professional University with a deep passion for 
                technology and innovation. My journey started in 2024 with Python, HTML, and CSS, and has evolved 
                into exploring DevOps, Cloud Computing, and Full-Stack Development.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Currently in my 2nd semester (Jan 2025), I'm diving deep into C programming and DBMS while 
                preparing for my upcoming internship at Linux World in June 2025, where I'll be working with 
                Docker, Kubernetes, Jenkins, Flask, MongoDB, and AWS.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, participating in hackathons, 
                or sharing knowledge with fellow students. I believe in the power of continuous learning 
                and hands-on experience to master new technologies.
              </p>
            </div>

            {/* Fun Facts */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Fun Facts</h3>
              <div className="space-y-3">
                {funFacts.map((fact, index) => (
                  <div key={index} className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                    <div className="text-blue-600 dark:text-blue-400">
                      {fact.icon}
                    </div>
                    <span>{fact.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">My Journey</h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start space-x-6 pb-8 last:pb-0">
                  {/* Timeline Dot */}
                  <div className="relative z-10 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center space-x-2 mb-2">
                        <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{item.year}</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-8">
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                <Heart className="w-5 h-5 mr-2" />
                View Full CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;