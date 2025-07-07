import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white/10 backdrop-blur-md border-t border-tennis-green/20 mt-16">
      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-700 text-sm mb-4 md:mb-0">
            © Alle Rechte vorbehalten Tennis Club Wehen e.V. 2024
          </div>
          <div className="flex space-x-6">
            <a 
              href="/datenschutz" 
              className="text-tennis-green hover:text-tennis-green-dark transition-colors duration-200 text-sm"
            >
              Datenschutz
            </a>
            <span className="text-gray-400">|</span>
            <a 
              href="/impressum" 
              className="text-tennis-green hover:text-tennis-green-dark transition-colors duration-200 text-sm"
            >
              Impressum
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;