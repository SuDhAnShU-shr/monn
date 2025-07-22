import React, { useState, useEffect } from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Calendar, 
  Award, 
  Users, 
  BookOpen,
  Star,
  Code,
  Trophy,
  Cpu,
  Database,
  Globe,
  Brain,
  Zap,
  Target,
  ChevronRight,
  Play,
  Pause,
  Monitor
} from 'lucide-react';

const Education = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [animatedStats, setAnimatedStats] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Animation trigger for stats
  useEffect(() => {
    const timer = setTimeout(() => setAnimatedStats(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Auto-play for gallery
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlay) {
      interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const education = {
    degree: 'Bachelor of Technology',
    specialization: 'Computer Science Engineering',
    university: 'Lovely Professional University',
    location: 'Phagwara, Punjab, India',
    duration: '2024 - 2028',
    currentYear: '1st Year (2024)',
    cgpa: '8.7',
    percentage: '87%',
    status: 'Currently Pursuing',
    description: 'Specializing in Software Development, Data Structures & Algorithms, and emerging technologies. Active participant in coding competitions, hackathons, and technical workshops.',
    logo: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=200'
  };

  const coreSubjects = [
    { 
      subject: 'Programming Fundamentals (C)', 
      grade: 'A+', 
      credits: 4, 
      icon: <Code className="w-5 h-5" />,
      description: 'Core programming concepts, algorithms, and problem-solving'
    },
    { 
      subject: 'Database Management Systems', 
      grade: 'A+', 
      credits: 4, 
      icon: <Database className="w-5 h-5" />,
      description: 'SQL, database design, normalization, and data modeling'
    },
    { 
      subject: 'Data Structures & Algorithms', 
      grade: 'A', 
      credits: 4, 
      icon: <Brain className="w-5 h-5" />,
      description: 'Arrays, linked lists, trees, graphs, and algorithmic complexity'
    },
    { 
      subject: 'Web Technologies', 
      grade: 'A+', 
      credits: 3, 
      icon: <Globe className="w-5 h-5" />,
      description: 'HTML, CSS, JavaScript, and modern web frameworks'
    },
    { 
      subject: 'Computer Networks', 
      grade: 'A', 
      credits: 3, 
      icon: <Monitor className="w-5 h-5" />,
      description: 'Network protocols, OSI model, and network security'
    },
    { 
      subject: 'Software Engineering', 
      grade: 'A+', 
      credits: 4, 
      icon: <Cpu className="w-5 h-5" />,
      description: 'SDLC, project management, and software design patterns'
    }
  ];

  const technicalSkills = [
    {
      category: 'Programming Languages',
      skills: ['Python', 'C', 'JavaScript', 'HTML', 'CSS'],
      icon: <Code className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      category: 'Web Technologies',
      skills: ['React', 'Node.js', 'Express', 'MongoDB'],
      icon: <Globe className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      category: 'Tools & Frameworks',
      skills: ['Git', 'VS Code', 'Flask', 'Bootstrap'],
      icon: <Cpu className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      category: 'Databases',
      skills: ['MySQL', 'MongoDB', 'PostgreSQL'],
      icon: <Database className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const academicProjects = [
    {
      title: 'Student Management System',
      description: 'Full-stack web application for managing student records with CRUD operations',
      technologies: ['Python', 'Flask', 'MySQL', 'HTML/CSS'],
      grade: 'A+',
      semester: 'Semester 1'
    },
    {
      title: 'E-Commerce Website',
      description: 'Responsive e-commerce platform with shopping cart and payment integration',
      technologies: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
      grade: 'A',
      semester: 'Semester 2'
    },
    {
      title: 'Data Structure Visualizer',
      description: 'Interactive tool for visualizing various data structures and algorithms',
      technologies: ['C++', 'JavaScript', 'HTML5 Canvas'],
      grade: 'A+',
      semester: 'Semester 2'
    }
  ];

  const achievements = [
    {
      title: 'Dean\'s List Recognition',
      description: 'Achieved Dean\'s List for academic excellence in first semester',
      date: '2024',
      icon: <Trophy className="w-5 h-5" />,
      color: 'text-yellow-600'
    },
    {
      title: 'Best Programming Project',
      description: 'Won first place in university programming competition',
      date: '2024',
      icon: <Award className="w-5 h-5" />,
      color: 'text-blue-600'
    },
    {
      title: 'Coding Club Member',
      description: 'Active member of university coding club and hackathon participant',
      date: '2024',
      icon: <Users className="w-5 h-5" />,
      color: 'text-green-600'
    }
  ];

  const stats = [
    { label: 'Current CGPA', value: '8.7', suffix: '/10', icon: <Star className="w-6 h-6" />, color: 'from-yellow-400 to-orange-500' },
    { label: 'Projects Completed', value: '12', suffix: '+', icon: <Target className="w-6 h-6" />, color: 'from-blue-500 to-cyan-500' },
    { label: 'Programming Languages', value: '5', suffix: '+', icon: <Code className="w-6 h-6" />, color: 'from-green-500 to-emerald-500' },
    { label: 'Certifications', value: '8', suffix: '', icon: <Award className="w-6 h-6" />, color: 'from-purple-500 to-pink-500' }
  ];

  const galleryImages = [
    {
      url: 'https://raw.githubusercontent.com/SuDhAnShU-shr/Images-/1e8e9b22e13ed3b201e12958e1787f8aefe5f1a7/IMG-20250426-WA0007.jpg',
      title: 'One India One World Cultural Event',
      description: 'Successfully managed international cultural event with Hon. Om Birla Ji as Chief Guest'
    },
    {
      url: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'LPU Campus Life',
      description: 'Beautiful campus with modern infrastructure and learning facilities'
    },
    {
      url: 'https://images.pexels.com/photos/2143203/pexels-photo-2143203.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Computer Labs',
      description: 'State-of-the-art computer labs with latest technology'
    }
  ];

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'A+': return 'text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/20';
      case 'A': return 'text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/20';
      default: return 'text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900/20';
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'coursework', label: 'Coursework', icon: <GraduationCap className="w-4 h-4" /> },
    { id: 'projects', label: 'Projects', icon: <Code className="w-4 h-4" /> },
    { id: 'skills', label: 'Skills', icon: <Zap className="w-4 h-4" /> }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl mb-8 shadow-2xl shadow-blue-500/25">
            <GraduationCap className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Academic Excellence
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Pursuing Bachelor of Technology in Computer Science Engineering with focus on innovation and practical application
          </p>
        </div>

        {/* Main Education Card */}
        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 mb-12 shadow-2xl border border-white/20 dark:border-gray-700/50">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* University Logo & Info */}
            <div className="lg:col-span-2">
              <div className="flex items-start space-x-6 mb-6">
                <div className="flex-shrink-0">
                  <img
                    src={education.logo}
                    alt="LPU Logo"
                    className="w-20 h-20 rounded-2xl object-cover border-4 border-blue-200 dark:border-blue-800 shadow-lg"
                  />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                    {education.degree}
                  </h3>
                  <h4 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
                    {education.specialization}
                  </h4>
                  <div className="text-xl text-gray-700 dark:text-gray-300 font-medium mb-4">
                    {education.university}
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 text-gray-600 dark:text-gray-400">
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-blue-500" />
                      {education.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 mr-2 text-green-500" />
                      {education.duration}
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                {education.description}
              </p>
              
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold shadow-lg">
                  {education.status}
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold shadow-lg">
                  {education.currentYear}
                </span>
              </div>
            </div>

            {/* Stats Section */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-6 border border-blue-200/50 dark:border-blue-700/50">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Academic Performance
              </h4>
              <div className="space-y-4">
                {stats.slice(0, 2).map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${stat.color} rounded-2xl mb-3 shadow-lg`}>
                      <div className="text-white">
                        {stat.icon}
                      </div>
                    </div>
                    <div className={`text-3xl font-black text-gray-900 dark:text-white mb-1 ${animatedStats ? 'animate-pulse' : ''}`}>
                      {stat.value}{stat.suffix}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 font-medium text-sm">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-2 shadow-xl border border-white/20 dark:border-gray-700/50">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 m-1 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg transform scale-105'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              {tab.icon}
              <span className="ml-2">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[500px]">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Gallery Section */}
              <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 dark:border-gray-700/50">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Campus Highlights
                  </h3>
                  <button
                    onClick={() => setIsAutoPlay(!isAutoPlay)}
                    className="p-2 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/40 transition-colors duration-200"
                  >
                    {isAutoPlay ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  </button>
                </div>
                
                <div className="relative mb-4">
                  <img
                    src={galleryImages[currentImageIndex].url}
                    alt={galleryImages[currentImageIndex].title}
                    className="w-full h-64 object-cover rounded-xl shadow-lg"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm text-white p-3 rounded-lg">
                    <h4 className="font-semibold">{galleryImages[currentImageIndex].title}</h4>
                    <p className="text-sm opacity-90">{galleryImages[currentImageIndex].description}</p>
                  </div>
                </div>
                
                <div className="flex justify-center space-x-2">
                  {galleryImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        index === currentImageIndex
                          ? 'bg-blue-600 scale-125'
                          : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Achievements Section */}
              <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 dark:border-gray-700/50">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Key Achievements
                </h3>
                
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 rounded-xl border border-gray-200/50 dark:border-gray-700/50">
                      <div className={`p-2 rounded-lg ${achievement.color} bg-opacity-10`}>
                        {achievement.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                          {achievement.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                          {achievement.description}
                        </p>
                        <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                          {achievement.date}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Coursework Tab */}
          {activeTab === 'coursework' && (
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-white/20 dark:border-gray-700/50">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Core Subjects & Performance
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {coreSubjects.map((course, index) => (
                  <div key={index} className="group bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg">
                          {course.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                            {course.subject}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {course.credits} Credits
                          </p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-bold ${getGradeColor(course.grade)}`}>
                        {course.grade}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {course.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Projects Tab */}
          {activeTab === 'projects' && (
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-white/20 dark:border-gray-700/50">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Academic Projects
              </h3>
              
              <div className="space-y-6">
                {academicProjects.map((project, index) => (
                  <div key={index} className="group bg-gradient-to-r from-gray-50 to-indigo-50 dark:from-gray-800 dark:to-indigo-900/20 rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
                          {project.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          {project.description}
                        </p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">
                          {project.semester}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm font-bold ${getGradeColor(project.grade)}`}>
                          {project.grade}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 rounded-lg text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skills Tab */}
          {activeTab === 'skills' && (
            <div className="grid md:grid-cols-2 gap-8">
              {technicalSkills.map((skillGroup, index) => (
                <div key={index} className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 dark:border-gray-700/50">
                  <div className="flex items-center mb-6">
                    <div className={`p-3 bg-gradient-to-r ${skillGroup.color} rounded-xl text-white mr-4 shadow-lg`}>
                      {skillGroup.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {skillGroup.category}
                    </h3>
                  </div>
                  
                  <div className="space-y-3">
                    {skillGroup.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
                        <span className="font-medium text-gray-900 dark:text-white">
                          {skill}
                        </span>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className={`text-4xl font-black mb-2 ${animatedStats ? 'animate-pulse' : ''}`}>
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-blue-100 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;