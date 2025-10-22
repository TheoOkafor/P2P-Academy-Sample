import { StarIcon, CheckIcon } from '@heroicons/react/24/solid';
import { courses } from '../data/courses';

const CoursesSection = () => {
  return (
    <section id="courses" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
            🎓 Training Courses
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            Master Your Sales Skills with Proven Training
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Access our complete library of sales training courses designed specifically for financial professionals. Over 7 hours of in-depth video training.
          </p>
        </div>

        {/* Subscription Pricing Card */}
        <div className="max-w-md mx-auto mb-16">
          <div className="card p-8 text-center border-2 border-primary-500 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <div className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                All Access Pass
              </div>
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Monthly Subscription</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-primary-500">$49.95</span>
              <span className="text-neutral-600">/month</span>
            </div>
            <p className="text-neutral-600 mb-6">
              Instant access to all courses, new content added regularly
            </p>
            <button className="btn-primary w-full mb-4">
              Start Your Training
            </button>
            <p className="text-sm text-neutral-500">
              Cancel anytime • 30-day money-back guarantee
            </p>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={course.id} className={`card group relative ${course.popular ? 'ring-2 ring-primary-500' : ''}`}>
              {/* Popular Badge */}
              {course.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Course Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1">
                  <span className="text-sm font-medium text-neutral-800">{course.level}</span>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon 
                        key={i} 
                        className={`h-4 w-4 ${i < Math.floor(course.rating) ? 'text-yellow-400' : 'text-neutral-300'}`} 
                      />
                    ))}
                    <span className="text-sm text-neutral-600 ml-1">({course.rating})</span>
                  </div>
                  <span className="text-sm text-neutral-500">{course.students} students</span>
                </div>

                <h3 className="text-xl font-semibold text-neutral-900 mb-2 group-hover:text-primary-500 transition-colors">
                  {course.title}
                </h3>
                
                <p className="text-neutral-600 mb-4 text-sm leading-relaxed">
                  {course.description}
                </p>

                {/* Course Features */}
                <div className="space-y-2 mb-6">
                  {course.features.slice(0, 2).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-neutral-600">
                      <CheckIcon className="h-4 w-4 text-primary-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Duration */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm text-neutral-500">Duration: {course.duration}</span>
                </div>

                {/* Access Badge */}
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
                    ✓ Included in Subscription
                  </div>
                </div>

                {/* CTA Button */}
                <button className="btn-primary w-full">
                  Access This Course
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-neutral-600 mb-6">
            All courses included in your monthly subscription. New training added regularly.
          </p>
          <button className="btn-outline">
            View Complete Course Library
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;