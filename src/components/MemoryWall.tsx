import React, { useState } from 'react';
import { X, Calendar, Tag, Heart } from 'lucide-react';

const MemoryWall = () => {
  const [selectedMemory, setSelectedMemory] = useState<any>(null);

  const memories = [
    {
      id: 1,
      title: 'Hackathon Leadership Moment',
      image: 'https://raw.githubusercontent.com/SuDhAnShU-shr/Images-/1e8e9b22e13ed3b201e12958e1787f8aefe5f1a7/IMG-20250327-WA0031.jpg',
      caption: 'Captured with the winners after coordinating the software team for a 300+ student hackathon at LPU.',
      date: 'March 2025',
      category: 'Hackathon',
      tags: ['Leadership', 'Coordination', 'Team Management']
    },
    {
      id: 2,
      title: 'One India, One World – Cultural Event',
      image: 'https://raw.githubusercontent.com/SuDhAnShU-shr/Images-/1e8e9b22e13ed3b201e12958e1787f8aefe5f1a7/IMG-20250426-WA0007.jpg',
      caption: 'After successfully managing the international cultural event "One India, One World" with Hon. Om Birla Ji as Chief Guest.',
      date: 'April 2025',
      category: 'Cultural',
      tags: ['Event Management', 'Cultural', 'Leadership']
    },
    {
      id: 3,
      title: 'NSS Welfare Contribution',
      image: 'https://raw.githubusercontent.com/SuDhAnShU-shr/Images-/1e8e9b22e13ed3b201e12958e1787f8aefe5f1a7/IMG_2907.jpg',
      caption: 'Contributing with NSS team for national service and community welfare initiatives.',
      date: 'Ongoing',
      category: 'Social',
      tags: ['NSS', 'Community Service', 'Social Work']
    }
  ];

  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Hackathon', 'Cultural', 'Social'];

  const filteredMemories = memories.filter(memory => 
    filter === 'All' || memory.category === filter
  );

  const getCategoryColor = (category: string) => {
    const colors = {
      'Hackathon': 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400',
      'Cultural': 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400',
      'Social': 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
  };

  return (
    <section id="memory-wall" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 flex items-center justify-center">
            <Heart className="w-10 h-10 mr-4 text-red-500" />
            Memory Wall
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Real moments from my tech journey - capturing the experiences that shaped my growth
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                filter === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Memory Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMemories.map((memory, index) => (
            <div
              key={memory.id}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group cursor-pointer"
              onClick={() => setSelectedMemory(memory)}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={memory.image}
                  alt={memory.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(memory.category)}`}>
                    {memory.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {memory.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {memory.caption}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {memory.tags.slice(0, 2).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="flex items-center px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-xs"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Date */}
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Calendar className="w-4 h-4 mr-2" />
                  {memory.date}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Memory Modal */}
        {selectedMemory && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="relative">
                <img
                  src={selectedMemory.image}
                  alt={selectedMemory.title}
                  className="w-full h-96 object-cover"
                />
                <button
                  onClick={() => setSelectedMemory(null)}
                  className="absolute top-4 right-4 p-2 bg-black bg-opacity-50 text-white rounded-lg hover:bg-opacity-70 transition-colors duration-200"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="absolute bottom-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(selectedMemory.category)}`}>
                    {selectedMemory.category}
                  </span>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {selectedMemory.title}
                    </h3>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      {selectedMemory.date}
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                  {selectedMemory.caption}
                </p>

                {/* Tags */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Tags
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedMemory.tags.map((tag: string, index: number) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 rounded-lg font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Close Button */}
                <div className="text-center">
                  <button
                    onClick={() => setSelectedMemory(null)}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MemoryWall;