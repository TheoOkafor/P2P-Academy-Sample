import { useState } from 'react';
import { CheckIcon, BuildingOfficeIcon, UsersIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import { enterpriseFeatures } from '../data/courses';
import EnterpriseContactModal from './EnterpriseContactModal';

const EnterpriseSection = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const stats = [
    { icon: BuildingOfficeIcon, label: 'Companies Trained', value: '200+' },
    { icon: UsersIcon, label: 'Agents Coached', value: '5,000+' },
    { icon: ChartBarIcon, label: 'Average Production Increase', value: '75%' }
  ];

  return (
    <section id="enterprise" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
          <div className="inline-flex items-center px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium mb-6">
            🏢 Enterprise Training Solutions
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
            Transform Your Entire Company's Performance
          </h2>
          
          <p className="text-lg text-neutral-600 mb-8">
            Empower your agency with comprehensive sales training programs. From independent agencies to large firms, we've helped teams nationwide dramatically improve their production and profitability.
          </p>            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="h-8 w-8 text-secondary-400" />
                  </div>
                  <div className="text-2xl font-bold text-neutral-900">{stat.value}</div>
                  <div className="text-sm text-neutral-600">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {enterpriseFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckIcon className="h-5 w-5 text-primary-500 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="btn-secondary px-8 py-3"
              >
                Contact Sales
              </button>
              <button className="btn-outline px-8 py-3">
                Download Brochure
              </button>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&crop=center" 
                alt="Enterprise team training"
                className="w-full h-80 object-cover"
              />
              
              {/* Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-neutral-900">Live Training Session</div>
                    <div className="text-sm text-neutral-600">Advanced Smart Contracts</div>
                  </div>
                  <div className="flex -space-x-2">
                    <img src="https://images.unsplash.com/photo-1494790108755-2616b612b494?w=32&h=32&fit=crop&crop=face" className="w-8 h-8 rounded-full border-2 border-white" alt="Participant" />
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" className="w-8 h-8 rounded-full border-2 border-white" alt="Participant" />
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face" className="w-8 h-8 rounded-full border-2 border-white" alt="Participant" />
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-neutral-100 flex items-center justify-center text-xs font-medium text-neutral-600">
                      +12
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 animate-slide-in">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-500">24/7</div>
                <div className="text-sm text-neutral-600">Support</div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 animate-slide-in delay-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckIcon className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <div className="font-medium text-neutral-900">Certified</div>
                  <div className="text-sm text-neutral-500">Industry Standard</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted By Section */}
        <div className="mt-20 text-center">
          <p className="text-neutral-500 mb-8">Trusted by leading insurance companies and financial firms</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-neutral-400">Northwestern Mutual</div>
            <div className="text-2xl font-bold text-neutral-400">State Farm</div>
            <div className="text-2xl font-bold text-neutral-400">Allstate</div>
            <div className="text-2xl font-bold text-neutral-400">Farmers</div>
            <div className="text-2xl font-bold text-neutral-400">New York Life</div>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <EnterpriseContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </section>
  );
};

export default EnterpriseSection;