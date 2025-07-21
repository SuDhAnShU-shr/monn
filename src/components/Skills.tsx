import React from 'react';
import { 
  Code, 
  Database, 
  Globe, 
  Smartphone, 
  Cloud, 
  GitBranch,
  Brain,
  Zap,
  Star,
  TrendingUp
} from 'lucide-react';

interface SkillsProps {
  onQuizOpen: (skill: string) => void;
}

const Skills: React.FC<SkillsProps> = ({ onQuizOpen }) => {
  const skillCategories = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Frontend Development',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
      level: 85,
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Backend Development',
      skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
      level: 78,
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile Development',
      skills: ['React Native', 'Flutter', 'iOS', 'Android'],
      level: 70,
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20'
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud & DevOps',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
      level: 65,
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20'
    },
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: 'Version Control',
      skills: ['Git', 'GitHub', 'GitLab', 'Bitbucket'],
      level: 90,
      gradient: 'from-indigo-500 to-purple-500',
      bgGradient: 'from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20'
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI & Machine Learning',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn'],
      level: 60,
      gradient: 'from-teal-500 to-cyan-500',
      bgGradient: 'from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20'
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl mb-6 shadow-lg shadow-indigo-500/25">
            <Star className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 dark:from-white dark:via-indigo-100 dark:to-purple-100 bg-clip-text text-transparent mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Interactive skills showcase with assessments to validate knowledge
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br ${category.bgGradient} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-white/20 dark:border-gray-700/50 backdrop-blur-sm`}
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              
              {/* Header */}
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className={`p-4 bg-gradient-to-r ${category.gradient} rounded-2xl text-white shadow-lg mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-2 bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-xl border border-gray-200/50 dark:border-gray-600/50 backdrop-blur-sm hover:scale-105 transition-transform duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 flex items-center">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      Proficiency
                    </span>
                    <span className="text-lg font-bold text-gray-900 dark:text-white">{category.level}%</span>
                  </div>
                  <div className="relative w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000 ease-out relative`}
                      style={{ width: `${category.level}%` }}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    </div>
                  </div>
                </div>

                {/* Quiz Button */}
                <button
                  onClick={() => onQuizOpen(category.title)}
                  className={`w-full bg-gradient-to-r ${category.gradient} text-white py-3 px-6 rounded-2xl font-semibold transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 flex items-center justify-center shadow-lg hover:shadow-xl`}
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Take Quiz
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Stats */}
        <div className="mt-20">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-gray-700/50">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: 'Technologies', value: '15+', icon: <Code className="w-6 h-6" />, gradient: 'from-blue-500 to-cyan-500' },
                { label: 'Projects', value: '12', icon: <Globe className="w-6 h-6" />, gradient: 'from-green-500 to-emerald-500' },
                { label: 'Experience', value: '2 Years', icon: <TrendingUp className="w-6 h-6" />, gradient: 'from-purple-500 to-pink-500' },
                { label: 'Certifications', value: '8', icon: <Star className="w-6 h-6" />, gradient: 'from-orange-500 to-red-500' }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${stat.gradient} rounded-2xl mb-4 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-black text-gray-900 dark:text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;