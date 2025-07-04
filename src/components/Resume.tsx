import React from 'react';
import { Download, FileText } from 'lucide-react';

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-white text-black dark:bg-gray-800 dark:text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gray-100 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-300 dark:border-gray-700">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <FileText size={32} className="text-white" />
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-4">My Resume</h2>
            <p className="text-lg text-gray-700 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Download my resume to learn more about my experience, skills, and achievements.
            </p>

            <a
              href="/resume.pdf"
              download="Nikhila_Resume.pdf"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:transform hover:scale-105"
            >
              <Download size={20} />
              Download Resume
            </a>

            <p className="text-sm text-gray-500 mt-4">
              PDF Format • Updated December 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
