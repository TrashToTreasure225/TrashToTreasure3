import React from 'react';
import { Instagram, Mail, Heart, Leaf } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Leaf className="mr-2 text-primary-400" size={24} />
              <h3 className="text-xl font-bold">Trash to Treasure</h3>
            </div>
            <p className="text-gray-300 mb-4">
              A youth-led initiative transforming school waste into meaningful impact across Bali.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/trashtotreasure.bali/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="mailto:contact@trashtotreasure.org" 
                className="text-gray-300 hover:text-primary-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Video', 'Transparency', 'Gallery'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contact Us</h3>
            <p className="text-gray-300 mb-2">
              <Instagram className="inline-block mr-2" size={16} />
              <a 
                href="https://www.instagram.com/trashtotreasure.bali/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary-400 transition-colors"
              >
                @trashtotreasure.bali
              </a>
            </p>
            <p className="text-gray-300">
              <Mail className="inline-block mr-2" size={16} />
              <a 
                href="mailto:contact@trashtotreasure.org"
                className="hover:text-primary-400 transition-colors"
              >
                contact@trashtotreasure.org
              </a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p className="mb-2">
            Made with <Heart className="inline-block text-red-500 mx-1" size={14} /> by student developers
          </p>
          <p>
            &copy; {new Date().getFullYear()} Trash to Treasure Bali. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
