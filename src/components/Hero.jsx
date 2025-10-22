import { useState } from 'react';
import { PlayIcon } from '@heroicons/react/24/solid';
import VideoModal from './VideoModal';

const Hero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-30"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <div className="animate-fade-up">
              <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
                🎯 Proven Sales Training for Financial Professionals
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
                Transform Your{' '}
                <span className="text-primary-500">True Potential</span>
                {' '}into {' '}
                <span className="text-secondary-400">Real Performance</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-neutral-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                Proven Online Sales Training for Financial Professionals
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <button className="btn-primary text-lg px-8 py-4">
                  Start Your Training
                </button>
                <button className="btn-outline text-lg px-8 py-4">
                  Sign In
                </button>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-8 text-sm text-neutral-500">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>5,000+ Agents Trained</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span>MDRT Proven Systems</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary-400 rounded-full"></div>
                  <span>7+ Hours of Training</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Video */}
          <div className="relative animate-fade-up delay-300">
            <div className="relative">
              {/* Video Thumbnail */}
              <div 
                className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
                onClick={() => setIsVideoOpen(true)}
              >
                <img 
                  src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=600&h=400&fit=crop&crop=center" 
                  alt="Watch our introduction video"
                  className="w-full h-80 object-cover"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                  <div className="bg-white rounded-full p-4 group-hover:scale-110 transition-transform shadow-lg">
                    <PlayIcon className="h-8 w-8 text-primary-500" />
                  </div>
                </div>
                
                {/* Video Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                  <span className="text-sm font-medium text-neutral-800">▶ 2:30 min</span>
                </div>
              </div>

              {/* Floating Stats Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 animate-slide-in">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <span className="text-primary-500 font-bold">4.9</span>
                  </div>
                  <div>
                    <div className="font-medium text-neutral-900">Excellent</div>
                    <div className="text-sm text-neutral-500">Based on 12,000+ reviews</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 animate-slide-in delay-500">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <img src="https://images.unsplash.com/photo-1494790108755-2616b612b494?w=32&h=32&fit=crop&crop=face" className="w-8 h-8 rounded-full border-2 border-white" alt="Student" />
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" className="w-8 h-8 rounded-full border-2 border-white" alt="Student" />
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face" className="w-8 h-8 rounded-full border-2 border-white" alt="Student" />
                  </div>
                  <div className="ml-2">
                    <div className="text-sm font-medium text-neutral-900">2,847</div>
                    <div className="text-xs text-neutral-500">Active learners</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal 
        isOpen={isVideoOpen} 
        onClose={() => setIsVideoOpen(false)}
        videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder URL
      />
    </section>
  );
};

export default Hero;