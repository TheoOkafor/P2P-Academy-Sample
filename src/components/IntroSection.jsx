import { CheckIcon } from '@heroicons/react/24/outline';

const IntroSection = () => {
  const challenges = [
    "Are You Tired Of \"Winging It?\"",
    "Do you want to stop \"winging it\" and instead build consistent systems in each aspect of your sales process?",
    "Would you like to get off the \"roller coaster\" and generate more consistent results – both in your activity and your production?",
    "Do you want to see transformational growth in your business AND your income?"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-neutral-50 to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
              💡 Stop Winging It
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-8">
              Are You Tired Of "Winging It?"
            </h2>
          </div>

          {/* Challenge Questions */}
          <div className="space-y-6 mb-12">
            {challenges.slice(1).map((challenge, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-neutral-200">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mt-1">
                  <CheckIcon className="h-5 w-5 text-primary-500" />
                </div>
                <p className="text-lg text-neutral-700 leading-relaxed">
                  {challenge}
                </p>
              </div>
            ))}
          </div>

          {/* Call to Action Content */}
          <div className="bg-white rounded-2xl shadow-lg border border-neutral-200 p-8 lg:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-neutral-900 mb-6">
                The Reality Check
              </h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                The truth is – it's easy to answer <strong className="text-primary-500">YES</strong> to these questions, but the reality is that very few reps are willing to make the significant changes necessary to achieve and sustain that level of growth.
              </p>
            </div>

            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-8 border-l-4 border-primary-500">
              <h4 className="text-xl font-semibold text-neutral-900 mb-4">
                Here's My Challenge To You:
              </h4>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                You bring your <strong>motivation</strong>, your <strong>energy</strong>, and your <strong>commitment</strong>, and I'll give everything I've got through this website. Together, we can improve your practice so that it will benefit you, your family, and your clients for generations to come.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary px-8 py-3">
                  Accept the Challenge
                </button>
                <button className="btn-outline px-8 py-3">
                  Learn More About P2P
                </button>
              </div>
            </div>
          </div>

          {/* Introduction to P2P Academy */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium mb-6">
              🎓 Introducing the P2P Academy
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-6">
              The Industry's Leading Sales Training Platform
            </h3>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                The P2P Academy is the industry's leading sales training website for financial professionals. It is all about improving your sales skills.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                This growing library of in-depth training currently features <strong className="text-primary-500">over seven hours of video</strong> to help you master the art of sales – and it will be continually added to over time.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed">
                It covers everything from <strong>sales systems</strong>, to <strong>prospecting</strong>, to <strong>phone skills</strong>, to <strong>fact finding</strong>, <strong>annual reviews</strong>, and more. It provides you with the specific language and systems that you need to follow to reach your full potential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;