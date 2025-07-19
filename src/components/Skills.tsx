import React from 'react';
import { 
  Code, 
  Database, 
  Globe, 
  Smartphone, 
  Cloud, 
  GitBranch,
  Brain,
  Zap
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
      color: 'blue'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Backend Development',
      skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
      level: 78,
      color: 'green'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile Development',
      skills: ['React Native', 'Flutter', 'iOS', 'Android'],
      level: 70,
      color: 'purple'
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud & DevOps',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
      level: 65,
      color: 'orange'
    },
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: 'Version Control',
      skills: ['Git', 'GitHub', 'GitLab', 'Bitbucket'],
      level: 90,
      color: 'teal'
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI & Machine Learning',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn'],
      level: 60,
      color: 'pink'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'bg-blue-50 dark:bg-blue-900/20',
        icon: 'text-blue-600 dark:text-blue-400',
        progress: 'bg-blue-600',
        button: 'bg-blue-600 hover:bg-blue-700'
      },
      green: {
        bg: 'bg-green-50 dark:bg-green-900/20',
        icon: 'text-green-600 dark:text-green-400',
        progress: 'bg-green-600',
        button: 'bg-green-600 hover:bg-green-700'
      },
      purple: {
        bg: 'bg-purple-50 dark:bg-purple-900/20',
        icon: 'text-purple-600 dark:text-purple-400',
        progress: 'bg-purple-600',
        button: 'bg-purple-600 hover:bg-purple-700'
      },
      orange: {
        bg: 'bg-orange-50 dark:bg-orange-900/20',
        icon: 'text-orange-600 dark:text-orange-400',
        progress: 'bg-orange-600',
        button: 'bg-orange-600 hover:bg-orange-700'
      },
      teal: {
        bg: 'bg-teal-50 dark:bg-teal-900/20',
        icon: 'text-teal-600 dark:text-teal-400',
        progress: 'bg-teal-600',
        button: 'bg-teal-600 hover:bg-teal-700'
      },
      pink: {
        bg: 'bg-pink-50 dark:bg-pink-900/20',
        icon: 'text-pink-600 dark:text-pink-400',
        progress: 'bg-pink-600',
        button: 'bg-pink-600 hover:bg-pink-700'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Interactive skills showcase with assessments to validate knowledge
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const colorClasses = getColorClasses(category.color);
            
            return (
              <div
                key={index}
                className={`${colorClasses.bg} rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105 group`}
              >
                {/* Header */}
                <div className="flex items-center mb-4">
                  <div className={`${colorClasses.icon} mr-3`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full border border-gray-200 dark:border-gray-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Proficiency</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{category.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div
                      className={`${colorClasses.progress} h-2 rounded-full transition-all duration-500 ease-out`}
                      style={{ width: `${category.level}%` }}
                    ></div>
                  </div>
                </div>

                {/* Quiz Button */}
                <button
                  onClick={() => onQuizOpen(category.title)}
                  className={`w-full ${colorClasses.button} text-white py-2 px-4 rounded-lg font-medium transition-all duration-200 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 flex items-center justify-center`}
                >
                  <Zap className="w-4 h-4 mr-2" />
                  Take Quiz
                </button>
              </div>
            );
          })}
        </div>

        {/* Overall Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Technologies', value: '15+' },
            { label: 'Projects', value: '12' },
            { label: 'Experience', value: '2 Years' },
            { label: 'Certifications', value: '8' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;