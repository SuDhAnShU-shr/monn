import React, { useState } from 'react';
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  ArrowRight, 
  Tag,
  Search,
  TrendingUp,
  Heart,
  MessageCircle,
  Share2,
  Filter
} from 'lucide-react';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: 'My Journey from Zero to Full-Stack Developer',
      excerpt: 'A detailed account of how I transitioned from a complete beginner to building full-stack applications, including the challenges faced and lessons learned.',
      content: 'Starting my coding journey was both exciting and overwhelming. I remember the first time I wrote "Hello World" in JavaScript - it felt like magic...',
      category: 'Career',
      readTime: '8 min read',
      publishDate: '2024-12-10',
      image: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Career', 'Learning', 'JavaScript', 'React'],
      likes: 45,
      comments: 12,
      featured: true
    },
    {
      id: 2,
      title: 'Building Scalable React Applications: Best Practices',
      excerpt: 'Learn the essential patterns and practices for building maintainable React applications that can grow with your team and user base.',
      content: 'Scalability in React isn\'t just about performance - it\'s about creating a codebase that your future self will thank you for...',
      category: 'Technology',
      readTime: '12 min read',
      publishDate: '2024-12-05',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'JavaScript', 'Architecture', 'Best Practices'],
      likes: 67,
      comments: 23,
      featured: true
    },
    {
      id: 3,
      title: 'The Future of Web Development: Trends to Watch in 2025',
      excerpt: 'Exploring emerging technologies and trends that will shape the web development landscape in the coming year.',
      content: 'As we look ahead to 2025, several key trends are emerging that will fundamentally change how we build web applications...',
      category: 'Technology',
      readTime: '10 min read',
      publishDate: '2024-11-28',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Future Tech', 'Trends', 'Web Development', 'AI'],
      likes: 89,
      comments: 34,
      featured: false
    },
    {
      id: 4,
      title: 'Acing Technical Interviews: A Student\'s Guide',
      excerpt: 'Comprehensive strategies and tips for succeeding in technical interviews, from coding challenges to system design questions.',
      content: 'Technical interviews can be nerve-wracking, but with the right preparation and mindset, you can turn them into opportunities to showcase your skills...',
      category: 'Career',
      readTime: '15 min read',
      publishDate: '2024-11-20',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Interview', 'Career', 'Coding', 'Tips'],
      likes: 56,
      comments: 18,
      featured: false
    },
    {
      id: 5,
      title: 'Open Source Contributions: How to Get Started',
      excerpt: 'A beginner-friendly guide to making your first open source contributions and becoming part of the developer community.',
      content: 'Contributing to open source can seem intimidating at first, but it\'s one of the best ways to improve your skills and give back to the community...',
      category: 'Community',
      readTime: '7 min read',
      publishDate: '2024-11-15',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Open Source', 'GitHub', 'Community', 'Collaboration'],
      likes: 72,
      comments: 29,
      featured: false
    },
    {
      id: 6,
      title: 'Building My First AI-Powered Application',
      excerpt: 'The journey of creating an AI chatbot from scratch, including the technical challenges and creative solutions.',
      content: 'Artificial Intelligence seemed like a black box to me until I decided to build my own AI-powered application...',
      category: 'Technology',
      readTime: '11 min read',
      publishDate: '2024-11-08',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['AI', 'Machine Learning', 'Python', 'Project'],
      likes: 94,
      comments: 41,
      featured: true
    }
  ];

  const categories = ['All', 'Technology', 'Career', 'Community'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Technology': 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400',
      'Career': 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
      'Community': 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
  };

  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Blog & Insights
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Sharing my thoughts on technology, career growth, and lessons learned along my development journey
          </p>
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
            <TrendingUp className="w-6 h-6 mr-3 text-yellow-500" />
            Featured Posts
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <div key={post.id} className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
                    Featured
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                    {post.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {formatDate(post.publishDate)}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-gray-500 dark:text-gray-400">
                      <div className="flex items-center">
                        <Heart className="w-4 h-4 mr-1" />
                        {post.likes}
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        {post.comments}
                      </div>
                    </div>
                    <button className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 space-y-4 md:space-y-0">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                <Filter className="w-4 h-4 inline mr-2" />
                {category}
              </button>
            ))}
          </div>

          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
            />
          </div>
        </div>

        {/* All Posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article key={post.id} className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group">
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="flex items-center px-2 py-1 bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-xs"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {formatDate(post.publishDate)}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {post.readTime}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-gray-500 dark:text-gray-400">
                    <button className="flex items-center hover:text-red-500 transition-colors duration-200">
                      <Heart className="w-4 h-4 mr-1" />
                      {post.likes}
                    </button>
                    <button className="flex items-center hover:text-blue-500 transition-colors duration-200">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      {post.comments}
                    </button>
                    <button className="flex items-center hover:text-green-500 transition-colors duration-200">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                  <button className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No posts found matching your criteria.
            </p>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Stay Updated
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Subscribe to get notified about new blog posts, project updates, and insights from my development journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
            />
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;