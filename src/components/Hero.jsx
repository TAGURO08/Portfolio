import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Share2, User } from 'lucide-react';
import HeroImage from '../assets/hero.png';
import { FaGithub } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Full-Stack Developer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.substring(0, index + 1));
      index++;
      if (index === fullText.length) {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="bg-mesh" />

      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary-600/10 dark:bg-primary-600/20 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/5 dark:bg-purple-600/10 rounded-full blur-[128px] animate-pulse" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-2 text-slate-900 dark:text-white">
              Eugene Marzan
            </h1>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-2xl md:text-4xl font-extrabold mb-8 flex items-center"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-purple-500 to-indigo-500 animate-gradient">
                {text}
              </span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                className="inline-block w-1 h-8 md:h-10 bg-primary-500 ml-1"
              />
            </motion.h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-lg leading-relaxed"
          >
            I'm a developer specialized in building modern, scalable, and visually stunning applications that deliver exceptional user experiences from end to end.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center gap-6 mb-10"
          >
            <div className="flex items-center gap-4 px-2">
              <a href="https://github.com/TAGURO08" className="p-3 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 rounded-xl transition-all text-slate-600 dark:text-slate-300"><FaGithub size={20} /></a>
              <a href="#" className="p-3 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 rounded-xl transition-all text-slate-600 dark:text-slate-300"><SiIndeed size={20} /></a>
            </div>
          </motion.div>

          {/* <div className="flex items-center gap-8 border-t border-slate-200 dark:border-white/5 pt-10">
            <div>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">5+</p>
              <p className="text-sm text-slate-500 uppercase tracking-widest">Years Experience</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">50+</p>
              <p className="text-sm text-slate-500 uppercase tracking-widest">Projects Done</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">20+</p>
              <p className="text-sm text-slate-500 uppercase tracking-widest">Happy Clients</p>
            </div>
          </div> */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, type: 'spring', bounce: 0.4 }}
          className="relative hidden md:block"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[105%] bg-gradient-to-tr from-primary-500/30 to-purple-500/30 rounded-[3rem] blur-[60px] -z-10" />

          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="relative z-10 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(37,99,235,0.15)] bg-gradient-to-t from-slate-900 to-transparent group"
          >
            <img
              src={HeroImage}
              alt="Eugene Marzan"
              className="w-full h-[520px] object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700" />

            <div className="absolute top-6 left-6 flex gap-2.5 opacity-80">
              <div className="w-3.5 h-3.5 rounded-full bg-red-500 shadow-sm shadow-red-500/50" />
              <div className="w-3.5 h-3.5 rounded-full bg-yellow-500 shadow-sm shadow-yellow-500/50" />
              <div className="w-3.5 h-3.5 rounded-full bg-green-500 shadow-sm shadow-green-500/50" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
