import React from 'react';
import { Code, Database, Globe, Server, Wrench, Brain } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['Python', 'JavaScript', 'Java', 'HTML5 & CSS3', 'C & C++', 'SQL'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Frameworks & Libraries',
      icon: Globe,
      skills: ['React.js', 'Next.js', 'Node.js', 'Flask', 'Express.js', 'Bootstrap', 'Tailwind CSS'],
      color: 'from-green-500 to-green-600',
    },
    {
      title: 'Machine Learning',
      icon: Brain,
      skills: ['Scikit-learn', 'TensorFlow', 'Keras', 'OpenCV', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Web Development',
      icon: Server,
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'RESTful APIs', 'Responsive Design'],
      color: 'from-orange-500 to-orange-600',
    },
    {
      title: 'DevOps & Deployment',
      icon: Wrench,
      skills: ['Git & GitHub', 'GitHub Actions (CI/CD)', 'Jenkins', 'Docker', 'Heroku'],
      color: 'from-red-500 to-red-600',
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'Firebase', 'Supabase'],
      color: 'from-indigo-500 to-indigo-600',
    },
  ];

  return (
    <section id="skills" className="py-24 bg-white text-black dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A peek into my tech toolbox — organized, upgraded, and ever-expanding.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-b from-gray-100/70 to-gray-200/80 dark:from-gray-800/80 dark:to-gray-900/90 rounded-2xl p-6 shadow-lg border border-gray-300 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mr-4`}>
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-gray-200 dark:bg-gray-800 text-sm text-gray-800 dark:text-gray-300 px-3 py-1 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
