import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

const EnterpriseContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    teamSize: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission - for now just log and close
    console.log('Enterprise contact form submitted:', formData);
    alert('Thank you for your interest! Our sales team will contact you within 24 hours.');
    onClose();
    setFormData({
      name: '',
      email: '',
      company: '',
      role: '',
      teamSize: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white shadow-xl transition-all">
                {/* Header */}
                <div className="bg-gradient-to-r from-secondary-400 to-primary-500 px-6 py-8 text-white">
                  <div className="flex justify-between items-start">
                    <div>
                      <Dialog.Title className="text-2xl font-bold mb-2">
                        Contact Our Sales Team
                      </Dialog.Title>
                      <p className="text-white/90">
                        Get a customized training solution for your organization
                      </p>
                    </div>
                    <button
                      onClick={onClose}
                      className="text-white/70 hover:text-white p-1"
                    >
                      <XMarkIcon className="h-6 w-6" />
                    </button>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="input"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="input"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        className="input"
                        placeholder="Acme Corporation"
                      />
                    </div>

                    <div>
                      <label htmlFor="role" className="block text-sm font-medium text-neutral-700 mb-2">
                        Your Role
                      </label>
                      <input
                        type="text"
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="input"
                        placeholder="CTO, HR Director, etc."
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="teamSize" className="block text-sm font-medium text-neutral-700 mb-2">
                      Team Size
                    </label>
                    <select
                      id="teamSize"
                      name="teamSize"
                      value={formData.teamSize}
                      onChange={handleChange}
                      className="input"
                    >
                      <option value="">Select team size</option>
                      <option value="1-10">1-10 people</option>
                      <option value="11-50">11-50 people</option>
                      <option value="51-200">51-200 people</option>
                      <option value="201-1000">201-1000 people</option>
                      <option value="1000+">1000+ people</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                      Training Requirements
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="input"
                      placeholder="Tell us about your blockchain training needs, timeline, and any specific requirements..."
                    />
                  </div>

                  {/* Benefits */}
                  <div className="bg-neutral-50 rounded-lg p-4">
                    <h4 className="font-medium text-neutral-900 mb-2">What you'll get:</h4>
                    <ul className="text-sm text-neutral-600 space-y-1">
                      <li>• Free consultation with our education experts</li>
                      <li>• Customized curriculum proposal</li>
                      <li>• Pricing tailored to your team size</li>
                      <li>• 24-hour response guarantee</li>
                    </ul>
                  </div>

                  {/* Form Actions */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <button
                      type="submit"
                      className="btn-secondary flex-1"
                    >
                      Send Request
                    </button>
                    <button
                      type="button"
                      onClick={onClose}
                      className="btn-outline flex-1"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default EnterpriseContactModal;