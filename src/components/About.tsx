import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white text-black dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-16 text-center">About Me</h2>

        {/* 2-column layout */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center grid-cols-1">

          {/* Right Column: Profile Image (appears first on mobile) */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/pfp.jpg"
              alt="Nikhila S"
              className="w-100 h-100 object-cover shadow-2xl border-4 border-white dark:border-white-500"
            />
          </div>

          {/* Left Column: Intro + Education */}
          <div className="space-y-8">
            {/* Intro Card */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-300 dark:border-gray-700">
              <h3 className="text-2xl font-semibold mb-4">Hii, I'm Nikhila</h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm always curious and driven to learn new technologies and tools.  
                I love diving into unfamiliar domains and expanding my skill set.  
                <br />
                Open to exciting opportunities where I can grow and contribute meaningfully!
              </p>
            </div>

            {/* Education Card */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-300 dark:border-gray-700">
              <h3 className="text-2xl font-semibold mb-4">🎓 Education</h3>
              <ul className="text-lg text-gray-700 dark:text-gray-300 space-y-2">
                <li><span className="text-black dark:text-white font-medium">College:</span> Vidyavardhaka College of Engineering</li>
                <li><span className="text-black dark:text-white font-medium">Course:</span> B.E. in Computer Science</li>
                <li><span className="text-black dark:text-white font-medium">Year:</span> 4th Year, 7th Semester</li>
                <li><span className="text-black dark:text-white font-medium">CGPA:</span> 8.99</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
