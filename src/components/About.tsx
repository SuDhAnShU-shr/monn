import React from 'react';
import { Calendar, MapPin, Heart, Code, Coffee, Music, Target, Zap } from 'lucide-react';

const About = () => {
  const timeline = [
    {
      year: '2024',
      title: 'Started BTech Journey',
      description: 'BTech journey started in 2024 - Enrolled in CSE program and discovered passion for coding',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      year: '2024',
      title: 'First Full-Stack Project',
      description: 'Built a complete web application using React and Node.js',
      color: 'from-purple-500 to-pink-500'
    },
    {
      year: '2025',
      title: 'Current Focus',
      description: 'Exploring advanced frameworks and contributing to open source',
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  const funFacts = [
    {
      icon: <Code className="w-6 h-6" />,
      text: 'Written 50,000+ lines of code',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      text: 'Powered by ☕ and curiosity',
      color: 'from-amber-500 to-orange-500'
    },
    {
      icon: <Music className="w-6 h-6" />,
      text: 'Codes better with lo-fi music',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Target className="w-6 h-6" />,
      text: 'Always learning something new',
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl mb-6 shadow-lg shadow-indigo-500/25">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 dark:from-white dark:via-indigo-100 dark:to-purple-100 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A passionate developer who loves turning ideas into reality through code
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Main Content */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 shadow-xl">
              <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-lg">
                  Hi! I'm <span className="font-bold text-indigo-600 dark:text-indigo-400">Sudhanshu</span>, a computer science student at Lovely Professional University with a deep passion for 
                  technology and innovation. My journey started in 2024 with Python, HTML, and CSS, and has evolved 
                  into exploring DevOps, Cloud Computing, and Full-Stack Development.
                </p>
                
                <p className="text-lg">
                  Currently in my <span className="font-semibold text-purple-600 dark:text-purple-400">2nd semester (Jan 2025)</span>, I'm diving deep into C programming and DBMS while 
                  preparing for my upcoming internship at <span className="font-semibold text-cyan-600 dark:text-cyan-400">Linux World in June 2025</span>, where I'll be working with 
                  Docker, Kubernetes, Jenkins, Flask, MongoDB, and AWS.
                </p>

                <p className="text-lg">
                  When I'm not coding, you can find me exploring new technologies, participating in hackathons, 
                  or sharing knowledge with fellow students. I believe in the power of continuous learning 
                  and hands-on experience to master new technologies.
                </p>
              </div>
            </div>

            {/* Fun Facts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {funFacts.map((fact, index) => (
                <div
                  key={index}
                  className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 bg-gradient-to-r ${fact.color} rounded-xl text-white shadow-lg`}>
                      {fact.icon}
                    </div>
                    <span className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                      {fact.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 flex items-center justify-center lg:justify-start">
                <Zap className="w-8 h-8 mr-3 text-yellow-500" />
                My Journey
              </h3>
              <p className="text-gray-600 dark:text-gray-400">Key milestones in my development path</p>
            </div>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-500 rounded-full"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start space-x-6 pb-12 last:pb-0">
                  {/* Timeline Dot */}
                  <div className={`relative z-10 w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center">
                      <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                      <div className="flex items-center space-x-3 mb-3">
                        <Calendar className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                        <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/30 px-3 py-1 rounded-full">
                          {item.year}
                        </span>
                      </div>
                      <h4 className="font-bold text-xl text-gray-900 dark:text-white mb-2">{item.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12">
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/25"
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