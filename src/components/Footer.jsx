import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-transparent transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-bold tracking-tighter text-slate-900 dark:text-white">
            Eugene<span className="text-primary-500">.</span>
          </div>

          <div className="flex gap-6">
            <a href="#home" className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-white transition-colors text-sm font-medium">Home</a>
            <a href="#about" className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-white transition-colors text-sm font-medium">About</a>
            <a href="#projects" className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-white transition-colors text-sm font-medium">Projects</a>
            <a href="#contact" className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-white transition-colors text-sm font-medium">Contact</a>
          </div>
        </div>

        <div className="mt-8 text-center text-slate-500 dark:text-slate-600 text-xs">
          © {new Date().getFullYear()} Eugene Marzan. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
