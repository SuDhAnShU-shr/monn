import React, { useState } from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Calendar, 
  Award, 
  Users, 
  BookOpen,
  Star,
  ExternalLink,
  Play,
  Image,
  ChevronRight,
  Trophy,
  Code,
  Heart
} from 'lucide-react';

const Education = () => {
  const [showVirtualTour, setShowVirtualTour] = useState(false);
  const [activeGalleryImage, setActiveGalleryImage] = useState(0);

  const education = {
    degree: 'Bachelor of Technology in Computer Science Engineering',
    university: 'Lovely Professional University',
    location: 'Phagwara, Punjab, India',
    duration: '2022 - 2026',
    cgpa: '8.7',
    status: 'Currently Pursuing',
    description: 'Specializing in Software Development and Data Structures & Algorithms. Active participant in coding competitions and hackathons.',
    logo: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=200'
  };

  const coursework = [
    { subject: 'Data Structures & Algorithms', grade: 'A+', credits: 4 },
    { subject: 'Object-Oriented Programming', grade: 'A+', credits: 4 },
    { subject: 'Database Management Systems', grade: 'A', credits: 3 },
    { subject: 'Computer Networks', grade: 'A', credits: 3 },
    { subject: 'Software Engineering', grade: 'A+', credits: 4 },
    { subject: 'Web Technologies', grade: 'A+', credits: 3 },
    { subject: 'Machine Learning', grade: 'A', credits: 4 },
    { subject: 'Mobile App Development', grade: 'A', credits: 3 }
  ];

  const activities = [
    {
      title: 'Coding Club Member',
      role: 'Active Participant',
      duration: '2024 - Present',
      description: 'Regular participant in weekly coding contests and workshops',
      icon: <Code className="w-5 h-5" />
    },
    {
      title: 'Hackathon Team Lead',
      role: 'Team Captain',
      duration: '2024 - Present',
      description: 'Led multiple teams in university and inter-college hackathons',
      icon: <Trophy className="w-5 h-5" />
    },
    {
      title: 'Tech Society Volunteer',
      role: 'Event Organizer',
      duration: '2024 - Present',
      description: 'Organized tech talks, workshops, and coding competitions',
      icon: <Users className="w-5 h-5" />
    },
    {
      title: 'Peer Tutor',
      role: 'Programming Mentor',
      duration: '2024 - Present',
      description: 'Mentoring junior students in programming and web development',
      icon: <BookOpen className="w-5 h-5" />
    }
  ];

  const campusGallery = [
    {
      url: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'LPU Main Campus',
      description: 'The beautiful main campus with modern architecture and green spaces'
    },
    {
      url: 'https://images.pexels.com/photos/159213/university-students-university-campus-education-159213.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Library & Study Areas',
      description: 'State-of-the-art library with 24/7 study facilities'
    },
    {
      url: 'https://images.pexels.com/photos/2143203/pexels-photo-2143203.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Computer Labs',
      description: 'Modern computer labs equipped with latest technology'
    },
    {
      url: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Student Activities',
      description: 'Vibrant campus life with various clubs and events'
    },
    {
      url: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Sports Complex',
      description: 'World-class sports facilities and recreational areas'
    },
    {
      url: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Hostel Life',
      description: 'Comfortable hostel accommodation with modern amenities'
    }
  ];

  const achievements = [
    {
      title: 'Dean\'s List',
      semester: 'Fall 2023, Spring 2024',
      description: 'Recognized for academic excellence with CGPA above 8.5'
    },
    {
      title: 'Best Programming Project',
      event: 'University Tech Fest 2024',
      description: 'Won first place for innovative web application development'
    },
    {
      title: 'Coding Competition Winner',
      event: 'LPU CodeFest 2024',
      description: 'Secured 2nd position among 500+ participants'
    }
  ];

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'A+': return 'text-green-600 dark:text-green-400';
      case 'A': return 'text-blue-600 dark:text-blue-400';
      default: return 'text-yellow-600 dark:text-yellow-400';
    }
  };

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Education & Campus Life
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My academic journey at Lovely Professional University with achievements and campus experiences
          </p>
        </div>

        {/* Main Education Card */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 mb-12 shadow-xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-8">
            <div className="flex-shrink-0">
              <img
                src={education.logo}
                alt="LPU Logo"
                className="w-24 h-24 rounded-full object-cover border-4 border-blue-200 dark:border-blue-800"
              />
            </div>
            
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {education.degree}
              </h3>
              <div className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-4">
                {education.university}
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 mb-4 text-gray-600 dark:text-gray-400">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  {education.location}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  {education.duration}
                </div>
                <div className="flex items-center">
                  <Star className="w-5 h-5 mr-2 text-yellow-500" />
                  CGPA: {education.cgpa}/10
                </div>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {education.description}
              </p>
              
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 rounded-lg font-medium">
                  {education.status}
                </span>
                <button
                  onClick={() => setShowVirtualTour(true)}
                  className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Virtual Campus Tour
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Coursework */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <BookOpen className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
                Relevant Coursework
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                {coursework.map((course, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">
                        {course.subject}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {course.credits} Credits
                      </div>
                    </div>
                    <div className={`font-bold text-lg ${getGradeColor(course.grade)}`}>
                      {course.grade}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Campus Activities */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Users className="w-6 h-6 mr-3 text-purple-600 dark:text-purple-400" />
                Campus Activities
              </h3>
              
              <div className="space-y-4">
                {activities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="text-purple-600 dark:text-purple-400 mt-1">
                      {activity.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {activity.title}
                        </h4>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {activity.duration}
                        </span>
                      </div>
                      <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-1">
                        {activity.role}
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        {activity.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements & Gallery */}
          <div className="space-y-8">
            {/* Academic Achievements */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Award className="w-6 h-6 mr-3 text-yellow-600 dark:text-yellow-400" />
                Achievements
              </h3>
              
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border-l-4 border-yellow-500">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {achievement.title}
                    </h4>
                    <p className="text-yellow-700 dark:text-yellow-400 text-sm font-medium mb-1">
                      {achievement.semester || achievement.event}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      {achievement.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Campus Gallery Preview */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Image className="w-6 h-6 mr-3 text-green-600 dark:text-green-400" />
                Campus Gallery
              </h3>
              
              <div className="grid grid-cols-2 gap-2 mb-4">
                {campusGallery.slice(0, 4).map((image, index) => (
                  <img
                    key={index}
                    src={image.url}
                    alt={image.title}
                    className="w-full h-20 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity duration-200"
                    onClick={() => {
                      setActiveGalleryImage(index);
                      setShowVirtualTour(true);
                    }}
                  />
                ))}
              </div>
              
              <button
                onClick={() => setShowVirtualTour(true)}
                className="w-full flex items-center justify-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200"
              >
                View Full Gallery
                <ChevronRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Virtual Tour Modal */}
        {showVirtualTour && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    LPU Virtual Campus Tour
                  </h3>
                  <button
                    onClick={() => setShowVirtualTour(false)}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-6">
                  <img
                    src={campusGallery[activeGalleryImage].url}
                    alt={campusGallery[activeGalleryImage].title}
                    className="w-full h-96 object-cover rounded-lg"
                  />
                  <div className="mt-4">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {campusGallery[activeGalleryImage].title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {campusGallery[activeGalleryImage].description}
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-6">
                  {campusGallery.map((image, index) => (
                    <img
                      key={index}
                      src={image.url}
                      alt={image.title}
                      className={`w-full h-16 object-cover rounded cursor-pointer transition-all duration-200 ${
                        index === activeGalleryImage 
                          ? 'ring-2 ring-blue-500 opacity-100' 
                          : 'opacity-70 hover:opacity-100'
                      }`}
                      onClick={() => setActiveGalleryImage(index)}
                    />
                  ))}
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <Heart className="w-5 h-5 mr-2 text-red-500" />
                    Why I Love LPU
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
                    <div>
                      <p className="mb-2">🌟 <strong>World-class Infrastructure:</strong> Modern labs, libraries, and facilities</p>
                      <p className="mb-2">👥 <strong>Diverse Community:</strong> Students from 50+ countries</p>
                      <p>🚀 <strong>Industry Exposure:</strong> Regular workshops and industry visits</p>
                    </div>
                    <div>
                      <p className="mb-2">🏆 <strong>Research Opportunities:</strong> Active research culture and projects</p>
                      <p className="mb-2">🎯 <strong>Placement Support:</strong> 90%+ placement record</p>
                      <p>💡 <strong>Innovation Hub:</strong> Startup incubation and innovation labs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Education;