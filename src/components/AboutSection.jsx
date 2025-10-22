import { CheckIcon, AcademicCapIcon, TrophyIcon, UsersIcon } from '@heroicons/react/24/outline';

const AboutSection = () => {
  const milestones = [
    { year: 'Early Career', title: 'Financial Advisor', description: 'Jim began his career as a financial advisor and became a lifetime Million Dollar Round Table (MDRT) qualifier' },
    { year: 'Top 5%', title: 'Forum Qualifier', description: 'Three-time Forum qualifier, representing the top 5% of all Northwestern Mutual advisors' },
    { year: 'Record Breaker', title: 'Youngest Forum Member', description: 'Became the youngest person to make Forum the first two times he qualified' },
    { year: 'Leadership', title: 'Managing Partner', description: 'Led the Effner Financial Group, one of the largest Northwestern Mutual offices with 117 advisors' },
    { year: 'Present', title: 'P2P Group President', description: 'Now shares his proven systems for success with financial professionals nationwide' }
  ];

  const achievements = [
    { icon: AcademicCapIcon, title: 'MDRT', subtitle: 'Lifetime Qualifier' },
    { icon: TrophyIcon, title: '3x', subtitle: 'Forum Qualifier' },
    { icon: UsersIcon, title: '117', subtitle: 'Advisors Managed' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium mb-4">
            👨‍💼 Meet Your Instructor
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            About Jim Effner
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Learn from a proven industry leader with over two decades of experience in financial services and sales training.
          </p>
        </div>

        {/* Achievements */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-4">
                <achievement.icon className="h-8 w-8 text-primary-500" />
              </div>
              <div className="text-3xl font-bold text-neutral-900 mb-2">{achievement.title}</div>
              <div className="text-neutral-600">{achievement.subtitle}</div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          <h3 className="text-2xl font-semibold text-neutral-900 mb-12 text-center">Our Journey</h3>
          
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-neutral-200"></div>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6">
                    <div className="text-primary-500 font-bold text-lg mb-2">{milestone.year}</div>
                    <h4 className="font-semibold text-neutral-900 mb-2">{milestone.title}</h4>
                    <p className="text-neutral-600 text-sm">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Jim's Story */}
        <div className="mt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://scontent.flos3-2.fna.fbcdn.net/v/t1.6435-9/51771452_2232877820259433_1308236820634402816_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=lddBKpQ8jeoQ7kNvwHdVmIg&_nc_oc=AdmduzMmPb-18AM6Lpz6sFXoYxl-u680fMk2d4FMWhdaD8g9rQBH73M8TYkbrvkRCqg&_nc_zt=23&_nc_ht=scontent.flos3-2.fna&_nc_gid=npKQJSFk0W3UwmHb9wIjLQ&oh=00_AfeTWne87hlKn5HHgrCTkLnb-Xf4rnG5ALk9gxpbSJ8fXw&oe=692078A5" 
                alt="Jim Effner"
                className="w-full h-150 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-neutral-900 mb-6">Jim's Remarkable Journey</h3>
              <div className="space-y-4 text-lg text-neutral-700 leading-relaxed">
                <p>
                  Jim began the first 12 years of his career as an advisor and is a <strong className="text-primary-500">lifetime Million Dollar Round Table (MDRT) qualifier</strong>.
                </p>
                <p>
                  He was also a <strong className="text-primary-500">three-time Forum qualifier</strong>, representing the top 5% of all Northwestern Mutual advisors, and the youngest person to make Forum the first two times he qualified.
                </p>
                <p>
                  Formerly, Jim was Managing Partner of the <strong className="text-primary-500">Effner Financial Group</strong>, one of the largest Northwestern Mutual offices in the country, consisting of 117 full-time advisors, insuring over 65,000 policyholders with a face amount of nearly $27 billion.
                </p>
                <p>
                  Jim has overcome numerous life challenges, including <strong className="text-secondary-400">losing his hearing just 30 days after taking his managing partner contract</strong>.
                </p>
                <p>
                  Now, as <strong className="text-primary-500">President of P2P Group, Inc.</strong>, he shares his proven systems for success with financial professionals around the country.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;