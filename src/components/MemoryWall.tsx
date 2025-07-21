import React, { useState, useEffect } from 'react';
import { X, Calendar, Tag, Heart, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const MemoryWall = () => {
  const [selectedMemory, setSelectedMemory] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [filter, setFilter] = useState('All');

  const memories = [
    {
      id: 1,
      title: 'Hackathon Leadership Moment',
      image: 'https://raw.githubusercontent.com/SuDhAnShU-shr/Images-/1e8e9b22e13ed3b201e12958e1787f8aefe5f1a7/IMG-20250327-WA0031.jpg',
      caption: 'Captured with the winners after coordinating the software team for a 300+ student hackathon at LPU.',
      date: 'March 2025',
      category: 'Hackathon',
      tags: ['Leadership', 'Coordination', 'Team Management'],
      story: 'Leading a hackathon with 300+ participants was an incredible experience. The energy, innovation, and collaborative spirit of all the teams made this event truly memorable. Seeing ideas come to life in just 48 hours was inspiring.'
    },
    {
      id: 2,
      title: 'One India, One World – Cultural Event',
      image: 'https://raw.githubusercontent.com/SuDhAnShU-shr/Images-/1e8e9b22e13ed3b201e12958e1787f8aefe5f1a7/IMG-20250426-WA0007.jpg',
      caption: 'After successfully managing the international cultural event "One India, One World" with Hon. Om Birla Ji as Chief Guest.',
      date: 'April 2025',
      category: 'Cultural',
      tags: ['Event Management', 'Cultural', 'Leadership'],
      story: 'Organizing "One India, One World" was a journey of cultural discovery and unity. Having Hon. Om Birla Ji as our chief guest made the event even more special. The diversity and talent showcased by students from different backgrounds was truly remarkable.'
    },
    {
      id: 3,
      title: 'NSS Welfare Contribution',
      image: 'https://raw.githubusercontent.com/SuDhAnShU-shr/Images-/1e8e9b22e13ed3b201e12958e1787f8aefe5f1a7/IMG_2907.jpg',
      caption: 'Contributing with NSS team for national service and community welfare initiatives.',
      date: 'Ongoing',
      category: 'Social',
      tags: ['NSS', 'Community Service', 'Social Work'],
      story: 'Being part of NSS has taught me the value of giving back to society. Every community service initiative we undertake brings us closer to making a real difference in people\'s lives. It\'s not just about service, but about understanding and empathy.'
    }
  ];

  const categories = ['All', 'Hackathon', 'Cultural', 'Social'];

  const filteredMemories = memories.filter(memory => 
    filter === 'All' || memory.category === filter
  );

  // Auto-play functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlay && selectedMemory) {
      interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % memories.length);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlay, selectedMemory, memories.length]);

  const openMemoryModal = (memory: any, index: number) => {
    setSelectedMemory(memory);
    setCurrentImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedMemory(null);
    setIsAutoPlay(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % memories.length);
    setSelectedMemory(memories[(currentImageIndex + 1) % memories.length]);
  };

  const prevImage = () => {
    const newIndex = currentImageIndex === 0 ? memories.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
    setSelectedMemory(memories[newIndex]);
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Hackathon': 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white',
      'Cultural': 'bg-gradient-to-r from-purple-500 to-pink-500 text-white',
      'Social': 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
    };
    return colors[category as keyof typeof colors] || 'bg-gradient-to-r from-gray-500 to-gray-600 text-white';
  };

  return (
    <section id="memory-wall" className="py-20 bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-pink-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl mb-6 shadow-lg shadow-pink-500/25">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            Memory Wall
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Real moments from my tech journey - capturing the experiences that shaped my growth
          </p>
        </div>

        {/* Enhanced Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                filter === category
                  ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg shadow-pink-500/25'
                  : 'bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Enhanced Memory Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMemories.map((memory, index) => (
            <div
              key={memory.id}
              className="group relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer border border-white/20 dark:border-gray-700/50"
              onClick={() => openMemoryModal(memory, index)}
            >
              {/* Enhanced Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={memory.image}
                  alt={memory.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Floating Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-4 py-2 rounded-2xl text-sm font-bold shadow-lg ${getCategoryColor(memory.category)}`}>
                    {memory.category}
                  </span>
                </div>

                {/* Hover Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/50">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
              </div>

              {/* Enhanced Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {memory.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 leading-relaxed">
                  {memory.caption}
                </p>

                {/* Enhanced Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {memory.tags.slice(0, 2).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="flex items-center px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 rounded-xl text-xs font-medium border border-purple-200/50 dark:border-purple-700/50"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Enhanced Date */}
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="font-medium">{memory.date}</span>
                </div>
              </div>

              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Enhanced Modal */}
        {selectedMemory && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 p-4">
            <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-3xl max-w-6xl w-full max-h-[95vh] overflow-y-auto shadow-2xl border border-white/20 dark:border-gray-700/50">
              
              {/* Enhanced Modal Header */}
              <div className="relative">
                <img
                  src={selectedMemory.image}
                  alt={selectedMemory.title}
                  className="w-full h-96 object-cover"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                {/* Navigation Controls */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-all duration-200 border border-white/30"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-all duration-200 border border-white/30"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Auto-play Control */}
                <button
                  onClick={() => setIsAutoPlay(!isAutoPlay)}
                  className="absolute bottom-4 left-4 p-3 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-all duration-200 border border-white/30"
                >
                  {isAutoPlay ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </button>

                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 p-3 bg-black/50 backdrop-blur-sm text-white rounded-full hover:bg-black/70 transition-all duration-200 border border-white/30"
                >
                  <X className="w-6 h-6" />
                </button>
                
                {/* Category Badge */}
                <div className="absolute bottom-4 right-4">
                  <span className={`px-4 py-2 rounded-2xl text-sm font-bold shadow-lg ${getCategoryColor(selectedMemory.category)}`}>
                    {selectedMemory.category}
                  </span>
                </div>
              </div>

              {/* Enhanced Modal Content */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">
                      {selectedMemory.title}
                    </h3>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                      <Calendar className="w-5 h-5 mr-2" />
                      <span className="font-medium">{selectedMemory.date}</span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {currentImageIndex + 1} / {memories.length}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      About This Memory
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                      {selectedMemory.caption}
                    </p>
                    
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      The Story Behind
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {selectedMemory.story}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      Tags & Highlights
                    </h4>
                    <div className="flex flex-wrap gap-3 mb-6">
                      {selectedMemory.tags.map((tag: string, index: number) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 rounded-xl font-medium border border-purple-200/50 dark:border-purple-700/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Memory Navigation */}
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-6 border border-purple-200/50 dark:border-purple-700/50">
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Navigate Memories
                      </h5>
                      <div className="flex space-x-2">
                        {memories.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => {
                              setCurrentImageIndex(index);
                              setSelectedMemory(memories[index]);
                            }}
                            className={`w-3 h-3 rounded-full transition-all duration-200 ${
                              index === currentImageIndex
                                ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-125'
                                : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Close Button */}
                <div className="text-center mt-8">
                  <button
                    onClick={closeModal}
                    className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25"
                  >
                    Close Memory
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