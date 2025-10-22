import { useState } from 'react';
import { StarIcon, PlayIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { testimonials } from '../data/testimonials';
import VideoModal from './VideoModal';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState('');

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const playVideo = (videoUrl) => {
    setSelectedVideo(videoUrl);
    setIsVideoOpen(true);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-neutral-50 to-primary-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
            💬 Agent Success Stories
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            Real Results From Real Agents
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            See how financial professionals are transforming their sales results with Jim Effner's proven training systems.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Featured Testimonial */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8 relative">
              {/* Testimonial Content */}
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-lg text-neutral-700 leading-relaxed mb-6">
                  "{currentTestimonial.content}"
                </blockquote>
                
                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <img 
                    src={currentTestimonial.avatar}
                    alt={currentTestimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-neutral-900">{currentTestimonial.name}</div>
                    <div className="text-sm text-neutral-600">
                      {currentTestimonial.role} at {currentTestimonial.company}
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors"
                >
                  <ChevronLeftIcon className="h-5 w-5 text-neutral-600" />
                </button>
                
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentIndex ? 'bg-primary-500' : 'bg-neutral-300'
                      }`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors"
                >
                  <ChevronRightIcon className="h-5 w-5 text-neutral-600" />
                </button>
              </div>
            </div>

            {/* Decorative Quote */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
              "
            </div>
          </div>

          {/* Right Column - Video Testimonials Grid */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-neutral-900 mb-6">
              Watch Video Testimonials
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className="relative group cursor-pointer"
                  onClick={() => testimonial.hasVideo && playVideo(`https://www.youtube.com/embed/dQw4w9WgXcQ?si=${testimonial.id}`)}
                >
                  <div className="relative overflow-hidden rounded-xl shadow-lg">
                    <img 
                      src={testimonial.videoThumbnail}
                      alt={`${testimonial.name} testimonial`}
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    {/* Video Overlay */}
                    {testimonial.hasVideo ? (
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                        <div className="bg-white rounded-full p-2 group-hover:scale-110 transition-transform">
                          <PlayIcon className="h-4 w-4 text-primary-500" />
                        </div>
                      </div>
                    ) : (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <div className="text-white text-xs bg-black/50 px-2 py-1 rounded">
                          Text Only
                        </div>
                      </div>
                    )}
                    
                    {/* Author Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                      <div className="flex items-center gap-2">
                        <img 
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-6 h-6 rounded-full border border-white/50"
                        />
                        <div className="text-white text-xs">
                          <div className="font-medium">{testimonial.name}</div>
                          <div className="opacity-80">{testimonial.company}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8 p-6 bg-white rounded-xl shadow-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-500">4.9/5</div>
                <div className="text-sm text-neutral-600">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-500">12,000+</div>
                <div className="text-sm text-neutral-600">Happy Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-500">98%</div>
                <div className="text-sm text-neutral-600">Success Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
              Ready to Transform Your Sales Results?
            </h3>
            <p className="text-neutral-600 mb-6">
              Join thousands of financial professionals who've dramatically improved their production with Jim's proven systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary px-8 py-3">
                Start Your Training
              </button>
              <button className="btn-outline px-8 py-3">
                Watch Success Stories
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal 
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoUrl={selectedVideo}
      />
    </section>
  );
};

export default TestimonialsSection;