import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-purple-100/20 dark:from-blue-900/20 dark:to-purple-900/20"></div>

      <div className="mt-6 container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Content */}
          <div className="text-center lg:text-left w-full lg:w-1/2">
          <h6 className='text-white'>Hello, I'm</h6>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Nikhila S
            </h1>

           <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 text-gray-700 dark:text-gray-300">
  Full-Stack Developer | Web3 Enthusiast
</h2>


            <div className="max-w-3xl mx-auto mb-12">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Learning Next.js, Solidity and backend development. Open to collaborating on full-stack and Web3 projects.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button
                onClick={scrollToAbout}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
              >
                Learn More
                <ArrowDown size={20} />
              </button>
              <a
                href="#contact"
                className="border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Get In Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6">
              <a
                href="https://github.com/Nikhilaxx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/nikhila-s-510598263"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:Nikhish07@gmail.com"
                className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
              >
                <Mail size={24} />
              </a>
              <a
                href="https://x.com/Nikhila07x"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* Right Card */}
         <div className="w-full lg:w-1/2 flex justify-center">
  <div className="bg-[#0f172a] dark:bg-white text-green-500 dark:text-gray-800 font-mono text-base sm:text-lg rounded-2xl shadow-xl p-10 w-[440px] sm:w-[500px] border border-green-400 dark:border-gray-300 transition-all duration-300 hover:-rotate-2 hover:shadow-2xl hover:scale-105">
    <div className="mb-3 text-sm text-gray-400 dark:text-gray-500">// developer.js</div>
    <pre>
      <code className="whitespace-pre-line leading-relaxed">
{`const developer = {
  name: 'Nikhila S',
  skills: ['Next.js', 'React', 'Python', 'Node.js'],
  focuses: ['Full-Stack', 'Web3'],
  learning: 'Always',
};`}
      </code>
    </pre>
  </div>
</div>


        </div>
      </div>
    </section>
  );
};

export default Hero;
