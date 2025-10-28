import React from 'react';
import { FacebookIcon, InstagramIcon, ArrowDownIcon, ChevronRightIcon } from './Icons';
import ParticleBackground from './ParticleBackground';
import ThemeToggle from './ThemeToggle';

const Logo: React.FC = () => (
    <div className="flex items-center font-black text-2xl tracking-widest text-gray-900 dark:text-white">
        <span>MARBAN</span>
        <span className="bg-gray-900 text-white dark:bg-white dark:text-black px-2 ml-2">SOLUTIONS</span>
    </div>
);

const Header: React.FC = () => {
    return (
        <header className="relative min-h-screen flex flex-col overflow-hidden bg-gray-50 dark:bg-brand-primary p-6 md:p-8">
            {/* Backgrounds & Overlays */}
            <ParticleBackground />
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1589995169335-a4e8d35a3a0e?q=80&w=2574&auto=format&fit=crop')",
                    filter: 'grayscale(50%) brightness(0.6)'
                }}
            ></div>
            <div className="absolute inset-0 bg-white/30 dark:bg-transparent z-[5]"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-accent/90 via-transparent to-transparent dark:via-brand-primary/70 z-10"></div>

            {/* Top Bar */}
            <div className="relative z-20 w-full flex justify-between items-center">
                <Logo />
                <ThemeToggle />
            </div>

            {/* Main Content */}
            <div className="relative z-20 flex-grow w-full flex items-center my-8">
                <div className="w-full flex justify-between items-stretch gap-4">
                    
                    {/* Left: Text, CTA, Contact */}
                    <div className="flex flex-col h-full">
                        <div className="flex-grow">
                            <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                                MAKING<br />SOCIAL MEDIA
                            </h1>
                            <p className="mt-4 text-xl md:text-2xl text-gray-700 dark:text-brand-secondary animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                                for business owners & brands easy
                            </p>
                            <a
                                href="#contact"
                                className="mt-8 inline-flex items-center bg-brand-accent text-white font-bold py-3 px-8 uppercase hover:bg-red-800 transition duration-300 transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: '0.6s' }}
                            >
                                JOIN US!
                                <ChevronRightIcon className="w-5 h-5 ml-2" />
                            </a>
                        </div>
                        <div className="mt-auto pt-8">
                             <p className="text-sm text-gray-600 dark:text-brand-secondary">info@marbansolutions.com</p>
                             <p className="text-sm text-gray-600 dark:text-brand-secondary">0732 672 889</p>
                        </div>
                    </div>

                    {/* Right: Vertical Social Bar */}
                    <div className="hidden md:flex flex-shrink-0 flex-col items-center justify-between">
                         <div className="w-px h-16 bg-gray-400 dark:bg-gray-600/50"></div>
                         <div className="flex flex-col items-center">
                            <a href="https://instagram.com/marban_solutions" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-brand-secondary hover:text-brand-accent dark:hover:text-white transition-colors my-4">
                                <InstagramIcon className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-gray-600 dark:text-brand-secondary hover:text-brand-accent dark:hover:text-white transition-colors my-4">
                                <FacebookIcon className="w-6 h-6" />
                            </a>
                         </div>
                        <div className="flex-grow w-px bg-gray-400 dark:bg-gray-600/50"></div>
                        <a href="#partners" className="mt-4">
                            <ArrowDownIcon className="w-8 h-8 animate-bounce text-gray-800 dark:text-white" />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;