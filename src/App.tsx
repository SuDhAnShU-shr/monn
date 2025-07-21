import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import TechJourney from './components/TechJourney';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certificates from './components/Certificates';
import MemoryWall from './components/MemoryWall';
import Blog from './components/Blog';
import Contact from './components/Contact';
import QuizModal from './components/QuizModal';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDark);
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const openQuiz = (skill: string) => {
    setSelectedSkill(skill);
    setShowQuiz(true);
  };

  const navItems = [
    'About', 'Skills', 'Tech Journey', 'Projects', 'Experience', 
    'Education', 'Certificates', 'Memory Wall', 'Blog', 'Contact'
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-2xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Portfolio
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Right Side Controls */}
            <div className="flex items-center space-x-4">
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-700" />
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-3 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                ) : (
                  <Menu className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200/50 dark:border-gray-700/50">
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Skills onQuizOpen={openQuiz} />
        <TechJourney />
        <Projects />
        <Experience />
        <Education />
        <Certificates />
        <MemoryWall />
        <Blog />
        <Contact />
      </main>

      {/* Quiz Modal */}
      {showQuiz && (
        <QuizModal
          skill={selectedSkill}
          onClose={() => setShowQuiz(false)}
        />
      )}

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 border-t border-gray-200/50 dark:border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <h3 className="text-2xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Sudhanshu
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md leading-relaxed">
                Student Developer passionate about creating innovative solutions and learning cutting-edge technologies.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com/yourusername" className="p-3 bg-white dark:bg-gray-800 rounded-xl text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 shadow-lg">
                  GitHub
                </a>
                <a href="https://linkedin.com/in/yourusername" className="p-3 bg-white dark:bg-gray-800 rounded-xl text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 shadow-lg">
                  LinkedIn
                </a>
                <a href="mailto:your.email@example.com" className="p-3 bg-white dark:bg-gray-800 rounded-xl text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 shadow-lg">
                  Email
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {['About', 'Skills', 'Projects', 'Certificates'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 font-medium"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
                Contact
              </h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li className="font-medium">Phagwara, Punjab, India</li>
                <li className="font-medium">your.email@example.com</li>
                <li className="font-medium">+91 98765 43210</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200/50 dark:border-gray-700/50 mt-12 pt-8 text-center">
            <p className="text-gray-600 dark:text-gray-400 font-medium">
              © 2025 Sudhanshu. Built with React, TypeScript & Tailwind CSS. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;