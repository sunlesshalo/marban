import React from 'react';
import { FacebookIcon, InstagramIcon, TwitterIcon, LinkedInIcon } from './Icons';

const Logo: React.FC = () => (
    <div className="flex items-center font-bold text-2xl tracking-widest text-white">
        <span>MARBAN</span>
        <span className="bg-white text-black px-2 ml-2">SOLUTIONS</span>
    </div>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
                <a href="https://marbansolutions.ro" target="_blank" rel="noopener noreferrer">
                    <Logo />
                </a>
            </div>
            <div className="text-brand-secondary text-sm mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} Marban Solutions. All Rights Reserved.
            </div>
            <div className="flex justify-center space-x-4">
                <a href="#" className="text-brand-secondary hover:text-white transition-colors"><FacebookIcon className="w-6 h-6" /></a>
                <a href="https://instagram.com/marban_solutions" target="_blank" rel="noopener noreferrer" className="text-brand-secondary hover:text-white transition-colors"><InstagramIcon className="w-6 h-6" /></a>
                <a href="#" className="text-brand-secondary hover:text-white transition-colors"><TwitterIcon className="w-6 h-6" /></a>
                <a href="#" className="text-brand-secondary hover:text-white transition-colors"><LinkedInIcon className="w-6 h-6" /></a>
            </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
            <p>info@marbansolutions.com | 0732 672 889</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;