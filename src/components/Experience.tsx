import React, { useState } from 'react';
import { 
  Briefcase, 
  Award, 
  Trophy, 
  ExternalLink, 
  Calendar,
  MapPin,
  TrendingUp,
  Star,
  Code,
  Users,
  Target
} from 'lucide-react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const experiences = [
    {
      title: 'DevOps & Cloud Intern',
      company: 'Linux World',
      location: 'Remote',
      duration: 'Jun 2025 - Aug 2025',
      type: 'Ongoing Internship',
      description: 'Currently working as a DevOps & Cloud intern, gaining hands-on experience with containerization, orchestration, and CI/CD pipelines. Working with industry-standard tools and cloud technologies.',
      achievements: [
        'Implementing containerization solutions with Docker',
        'Managing Kubernetes clusters and deployments',
        'Building CI/CD pipelines with Jenkins',
        'Deploying applications on AWS cloud infrastructure'
      ],
      technologies: ['Docker', 'Kubernetes', 'Jenkins', 'Flask', 'MongoDB', 'AWS'],
      color: 'blue'
    },
    {
      title: 'Computer Science Student',
      company: 'Lovely Professional University',
      location: 'Phagwara, Punjab',
      duration: '2024 - Present',
      type: 'Education',
      description: 'Pursuing BTech in Computer Science Engineering. Currently in 2nd semester focusing on C programming and Database Management Systems.',
      achievements: [
        'Started programming journey with Python, HTML, CSS in 2024',
        'Currently mastering C programming and DBMS concepts',
        'Preparing for advanced DevOps and Cloud Computing'
      ],
      technologies: ['Python', 'C', 'HTML', 'CSS', 'JavaScript', 'DBMS'],
      color: 'green'
    },
    {
      title: 'Self-Learner & Tech Enthusiast',
      company: 'Personal Projects',
      location: 'Self-Directed',
      duration: '2024 - Present',
      type: 'Personal Development',
      description: 'Continuously learning new technologies through online courses, tutorials, and hands-on projects. Building portfolio projects to demonstrate skills.',
      achievements: [
        'Completed multiple online courses in web development',
        'Built several portfolio projects showcasing different technologies',
        'Actively preparing for upcoming internship challenges'
      ],
      technologies: ['Python', 'HTML', 'CSS', 'JavaScript', 'Flask'],
      color: 'purple'
    }
  ];

  const achievements = [
    {
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: 'Dec 2024',
      credentialId: 'AWS-CP-12345',
      description: 'Demonstrated understanding of AWS Cloud concepts, services, and basic architecture best practices.',
      badge: 'https://images.pexels.com/photos/6758773/pexels-photo-6758773.jpeg?auto=compress&cs=tinysrgb&w=200',
      verifyUrl: '#',
      skills: ['Cloud Computing', 'AWS Services', 'Cloud Security']
    },
    {
      title: 'React Developer Certification',
      issuer: 'Meta',
      date: 'Nov 2024',
      credentialId: 'META-RD-67890',
      description: 'Advanced certification covering React fundamentals, hooks, state management, and best practices.',
      badge: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=200',
      verifyUrl: '#',
      skills: ['React', 'JavaScript', 'Frontend Development']
    },
    {
      title: 'HackerRank 5-Star JavaScript',
      issuer: 'HackerRank',
      date: 'Oct 2024',
      credentialId: 'HR-JS-5STAR',
      description: 'Achieved 5-star rating in JavaScript programming challenges and problem-solving.',
      badge: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=200',
      verifyUrl: '#',
      skills: ['JavaScript', 'Algorithms', 'Problem Solving']
    },
    {
      title: 'Google Analytics Certified',
      issuer: 'Google',
      date: 'Sep 2024',
      credentialId: 'GA-CERT-24680',
      description: 'Certification in Google Analytics for tracking and analyzing website performance.',
      badge: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=200',
      verifyUrl: '#',
      skills: ['Analytics', 'Data Analysis', 'Digital Marketing']
    }
  ];

  const competitions = [
    {
      title: 'Smart India Hackathon 2024',
      position: 'Winner',
      date: 'April 2025',
      description: 'First place in the Software Edition for developing an innovative solution that impressed the judges and fellow participants.',
      prize: '₹6,000',
      team: '4 members',
      technologies: ['React', 'Python', 'JavaScript', 'MongoDB']
    },
    {
      title: 'LPU CodeFest 2024',
      position: '2nd Runner Up',
      date: 'Mar 2024',
      description: 'Secured third place in the annual coding competition among 500+ participants.',
      prize: '₹25,000',
      team: '2 members',
      technologies: ['C++', 'Algorithms', 'Data Structures']
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '15+', icon: <Target className="w-6 h-6" />, color: 'blue' },
    { label: 'Certifications', value: '8', icon: <Award className="w-6 h-6" />, color: 'green' },
    { label: 'Competition Wins', value: '3', icon: <Trophy className="w-6 h-6" />, color: 'yellow' },
    { label: 'Open Source Contributions', value: '25+', icon: <Code className="w-6 h-6" />, color: 'purple' }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'border-blue-500 bg-blue-50 dark:bg-blue-900/20',
      green: 'border-green-500 bg-green-50 dark:bg-green-900/20',
      purple: 'border-purple-500 bg-purple-50 dark:bg-purple-900/20',
      yellow: 'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Experience & Achievements
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My professional journey, certifications, and competitive programming achievements
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className={`${getColorClasses(stat.color)} rounded-xl p-6 text-center border-l-4`}>
              <div className={`text-${stat.color}-600 dark:text-${stat.color}-400 flex justify-center mb-2`}>
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12 bg-gray-100 dark:bg-gray-800 rounded-lg p-2">
          {['experience', 'certifications', 'competitions'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 capitalize ${
                activeTab === tab
                  ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Experience Tab */}
        {activeTab === 'experience' && (
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400 mb-2">
                      <div className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-2" />
                        {exp.company}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {exp.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {exp.duration}
                      </div>
                    </div>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      exp.type === 'Internship' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400' :
                      exp.type === 'Freelance' ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' :
                      'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400'
                    }`}>
                      {exp.type}
                    </span>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {exp.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start text-gray-700 dark:text-gray-300">
                        <TrendingUp className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-lg text-sm border border-gray-200 dark:border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Certifications Tab */}
        {activeTab === 'certifications' && (
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((cert, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <img
                    src={cert.badge}
                    alt={`${cert.title} badge`}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                      {cert.issuer}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {cert.date} • {cert.credentialId}
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 mt-4">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 rounded text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <a
                  href={cert.verifyUrl}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm"
                >
                  Verify Certificate
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        )}

        {/* Competitions Tab */}
        {activeTab === 'competitions' && (
          <div className="space-y-6">
            {competitions.map((comp, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <Trophy className="w-6 h-6 text-yellow-500 mr-2" />
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {comp.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400 mb-2">
                      <span className="font-semibold text-yellow-600 dark:text-yellow-400">
                        {comp.position}
                      </span>
                      <span>{comp.date}</span>
                      <span>{comp.team} team</span>
                    </div>
                  </div>
                  <div className="bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-400 px-4 py-2 rounded-lg font-semibold">
                    {comp.prize}
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {comp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {comp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-lg text-sm border border-gray-200 dark:border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;