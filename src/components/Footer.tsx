import React from 'react';
import { Github, Linkedin, Mail, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Nikhilaxx', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/nikhila-s-510598263', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:Nikhish07@gmail.com', label: 'Email' },
    { icon: Twitter, href: 'https://x.com/Nikhila07x', label: 'Twitter' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-black dark:bg-gray-900 dark:text-white border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="mb-8">
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold text-black dark:text-white hover:text-blue-500 transition-colors duration-200"
            >
              Nikhila S
            </button>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('mailto') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors duration-200 hover:scale-110 transform"
                >
                  <Icon size={24} />
                </a>
              );
            })}
          </div>

          <div className="flex items-center justify-center text-gray-600 dark:text-gray-400 text-sm">
            <span>© {currentYear} Nikhila S. Made with</span>
            <Heart size={16} className="mx-1 text-GREY-500" />
          </div>

          <div className="mt-4 text-xs text-gray-500 dark:text-gray-400">
            <p>Full-Stack Developer • Web3 Enthusiast • Open to Opportunities</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
