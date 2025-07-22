import React from 'react';
import { Github, Linkedin, Mail, Download, ChevronDown, Code, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-indigo-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-cyan-200/30 to-blue-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-violet-100/20 to-indigo-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          {/* Icon Badge */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl mb-8 shadow-lg shadow-indigo-500/25">
            <Code className="w-8 h-8 text-white" />
          </div>

          {/* Main Content */}
          <div className="space-y-6 mb-12">
            <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 dark:from-white dark:via-indigo-100 dark:to-purple-100 bg-clip-text text-transparent leading-tight">
              Sudhanshu
            </h1>
            
            <div className="flex items-center justify-center space-x-2 text-xl md:text-2xl text-gray-600 dark:text-gray-300">
              <Sparkles className="w-6 h-6 text-indigo-500" />
              <span className="font-semibold">Student Developer</span>
              <span className="text-gray-400">•</span>
              <span className="font-semibold">Tech Enthusiast</span>
              <Sparkles className="w-6 h-6 text-purple-500" />
            </div>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Passionate about creating innovative solutions and learning cutting-edge technologies. 
              Currently pursuing BTech in Computer Science, exploring DevOps, Cloud Computing, and Full-Stack Development.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <div className="flex space-x-3">
              <a
                href="https://linkedin.com/in/yourusername"
                className="inline-flex items-center px-6 py-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold rounded-2xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
              
              <a
                href="https://github.com/yourusername"
                className="inline-flex items-center px-6 py-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold rounded-2xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={scrollToAbout}
            className="inline-flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 animate-bounce"
            aria-label="Scroll to about section"
          >
            <span className="text-sm font-medium mb-2">Scroll to explore</span>
            <div className="w-8 h-8 border-2 border-current rounded-full flex items-center justify-center">
              <ChevronDown className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;