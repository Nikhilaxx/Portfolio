import React from 'react';
import { MapPin, Calendar, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'AR-VR Instructor',
      company: 'Mysore',
      location: 'Mysore, India',
      duration: 'Feb 2025 – May 2025',
      description: 'Taught Unity development for AR/VR applications to college students.',
      type: 'Teaching',
    },
    {
      title: 'Virtual Internship - Tech Consulting',
      company: 'Deloitte Australia',
      location: 'Remote',
      duration: 'Nov 2024 – Dec 2024',
      description: 'Worked on emerging tech ,aiml and data analytics through tableau.',
      type: 'Internship',
    },
    {
      title: 'Summer Internship (AI/ML)',
      company: 'IBM SkillsBuild',
      location: 'Remote',
      duration: 'June 2024 – July 2024',
      description: 'Built ML chatbots using IBM Watson Assistant and Watsonx.',
      type: 'Internship',
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Teaching':
        return 'from-green-500 to-green-600';
      case 'Internship':
        return 'from-blue-500 to-blue-600';
      default:
        return 'from-purple-500 to-purple-600';
    }
  };

  return (
    <section id="experience" className="py-20 bg-white text-black dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and key experiences in the tech industry.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-600"></div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 border-4 border-white dark:border-gray-900 z-10"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                        <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                          <Building size={16} className="mr-2" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                      </div>
                      <div
                        className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getTypeColor(
                          exp.type
                        )} text-white`}
                      >
                        {exp.type}
                      </div>
                    </div>

                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                      <Calendar size={16} className="mr-2" />
                      <span className="text-sm">{exp.duration}</span>
                    </div>

                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                      <MapPin size={16} className="mr-2" />
                      <span className="text-sm">{exp.location}</span>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
