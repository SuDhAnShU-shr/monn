import React, { useState } from 'react';
import { Award, X, ExternalLink, Calendar, Shield, Star, Trophy } from 'lucide-react';

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);

  const certificates = [
    {
      id: 1,
      title: 'One India One World',
      description: 'Cultural event management and international collaboration certificate',
      imageUrl: 'https://raw.githubusercontent.com/aahan-shr/images/325b33375cf9c833f5d7cc3df23a1ed547a27816/one%20india%20one%20world2.jpg',
      issuer: 'Lovely Professional University',
      date: 'April 2025',
      category: 'Cultural Leadership',
      skills: ['Event Management', 'Cultural Coordination', 'Leadership'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 2,
      title: 'Linux Certificate',
      description: 'Linux system administration and command line proficiency certification',
      imageUrl: 'https://raw.githubusercontent.com/aahan-shr/images/325b33375cf9c833f5d7cc3df23a1ed547a27816/linux%20certificate%20of%20sudhanshu%20.jpg',
      issuer: 'Linux Foundation',
      date: 'March 2025',
      category: 'Technical Skills',
      skills: ['Linux Administration', 'Command Line', 'System Management'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      title: 'Pradyut Foundation',
      description: 'Community service and social welfare contribution recognition',
      imageUrl: 'https://raw.githubusercontent.com/aahan-shr/images/325b33375cf9c833f5d7cc3df23a1ed547a27816/pradyut%20foundation.jpeg',
      issuer: 'Pradyut Foundation',
      date: 'February 2025',
      category: 'Social Service',
      skills: ['Community Service', 'Social Work', 'Volunteer Management'],
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const openModal = (imageUrl: string) => {
    setSelectedCertificate(imageUrl);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedCertificate(null);
    document.body.style.overflow = 'auto';
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Cultural Leadership':
        return <Trophy className="w-5 h-5" />;
      case 'Technical Skills':
        return <Shield className="w-5 h-5" />;
      case 'Social Service':
        return <Star className="w-5 h-5" />;
      default:
        return <Award className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Cultural Leadership':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400';
      case 'Technical Skills':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      case 'Social Service':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  return (
    <section id="certificates" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
            <Award className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            🎓 Certificates & Achievements
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Recognition of my dedication to learning, leadership, and community service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate) => (
            <div
              key={certificate.id}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden border border-gray-200 dark:border-gray-700"
            >
              {/* Gradient Header */}
              <div className={`h-2 bg-gradient-to-r ${certificate.color}`}></div>
              
              {/* Certificate Content */}
              <div className="p-6">
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(certificate.category)}`}>
                    {getCategoryIcon(certificate.category)}
                    <span className="ml-1">{certificate.category}</span>
                  </span>
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="text-sm">{certificate.date}</span>
                  </div>
                </div>

                {/* Certificate Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  {certificate.title}
                </h3>

                {/* Issuer */}
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                  {certificate.issuer}
                </p>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {certificate.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {certificate.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* View Certificate Button */}
                <button
                  onClick={() => openModal(certificate.imageUrl)}
                  className={`w-full bg-gradient-to-r ${certificate.color} text-white py-3 px-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 hover:shadow-lg flex items-center justify-center group-hover:shadow-xl`}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Certificate
                </button>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-4 group-hover:scale-110 transition-transform duration-200">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {certificates.length}
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Certificates Earned
              </div>
            </div>
            
            <div className="group">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4 group-hover:scale-110 transition-transform duration-200">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                3
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Different Categories
              </div>
            </div>
            
            <div className="group">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-4 group-hover:scale-110 transition-transform duration-200">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                2025
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Latest Achievement
              </div>
            </div>
          </div>
        </div>

        {/* Modal */}
        {selectedCertificate && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4"
            onClick={closeModal}
          >
            <div className="relative max-w-5xl max-h-[90vh] bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>
              
              {/* Certificate Image */}
              <img
                src={selectedCertificate}
                alt="Certificate"
                className="max-h-[90vh] max-w-full object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificates;