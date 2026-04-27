import React from 'react';
import { motion } from 'framer-motion';
import PythonLogo from '../assets/logos/python.png';
import JSLogo from '../assets/logos/js.png';
import ReactLogo from '../assets/logos/react.png';
import TSLogo from '../assets/logos/typescript.png';
import JavaLogo from '../assets/logos/java.png';
import PHPLogo from '../assets/logos/php.png';
import FigmaLogo from '../assets/logos/figma.png';
import GitLogo from '../assets/logos/git.png';
import TailwindLogo from '../assets/logos/tailwind.png';
import IonicLogo from '../assets/logos/ionic.png';
import BootstrapLogo from '../assets/logos/bootstrap.png';
import CanvaLogo from '../assets/logos/canva.png';
import OfficeLogo from '../assets/logos/office.png';
import MongoDBLogo from '../assets/logos/mongodb.png';
import FirebaseLogo from '../assets/logos/firebase.png';
import MySQLLogo from '../assets/logos/mysql.png';
import SQLLogo from '../assets/logos/sql.png';
import HTMLLogo from '../assets/logos/html.png';
import CSSLogo from '../assets/logos/css.png';
import CiscoLogo from '../assets/logos/cisco.png';

const TechData = {
  Python: { logo: PythonLogo, color: 'text-[#3776AB]' },
  JavaScript: { logo: JSLogo, color: 'text-[#F7DF1E]' },
  React: { logo: ReactLogo, color: 'text-[#61DAFB]' },
  TypeScript: { logo: TSLogo, color: 'text-[#3178C6]' },
  Java: { logo: JavaLogo, color: 'text-[#007396]' },
  PHP: { logo: PHPLogo, color: 'text-[#777BB4]' },
  Figma: { logo: FigmaLogo, color: 'text-[#F24E1E]' },
  Git: { logo: GitLogo, color: 'text-[#F05032]' },
  Tailwind: { logo: TailwindLogo, color: 'text-[#06B6D4]' },
  Ionic: { logo: IonicLogo, color: 'text-[#3880FF]' },
  Bootstrap: { logo: BootstrapLogo, color: 'text-[#7952B3]' },
  Canva: { logo: CanvaLogo, color: 'text-[#00C4CC]' },
  MongoDB: { logo: MongoDBLogo, color: 'text-[#47A248]' },
  Firebase: { logo: FirebaseLogo, color: 'text-[#FFCA28]' },
  MySQL: { logo: MySQLLogo, color: 'text-[#4479A1]' },
  SQL: { logo: SQLLogo, color: 'text-[#003B57]' },
  'Ms Office': { logo: OfficeLogo, color: 'text-[#D83B01]' },
  HTML: { logo: HTMLLogo, color: 'text-[#E34F26]' },
  CSS: { logo: CSSLogo, color: 'text-[#1572B6]' },
  Cisco: { logo: CiscoLogo, color: 'text-[#1BA0D7]' },
};

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind', 'Bootstrap', 'Ionic']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Python', 'PHP']
    },
    {
      title: 'Databases & Cloud',
      skills: ['MySQL', 'MongoDB', 'SQL', 'Firebase']
    },
  ];

  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4 text-slate-900 dark:text-white"
          >
            Technical Expertise
          </motion.h2>
          <p className="text-slate-600 dark:text-slate-400">The tools and technologies I use to bring ideas to life.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card p-8 rounded-[2rem] border border-white/5 dark:border-white/10 shadow-lg hover:shadow-[0_10px_40px_-15px_rgba(37,99,235,0.2)] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group bg-white dark:bg-slate-900/40"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <h3 className="text-2xl font-black mb-8 text-slate-900 dark:text-white flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-500/20 text-primary-600 dark:text-primary-400 flex items-center justify-center text-sm font-bold border border-primary-500/20">
                  {i + 1}
                </span>
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3 relative z-10">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 group-hover:border-primary-500/30 hover:bg-primary-500/10 rounded-xl text-xs font-black text-slate-700 dark:text-slate-300 uppercase tracking-widest transition-all shadow-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-28 py-10 overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 dark:from-slate-900/50 to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 dark:from-slate-900/50 to-transparent z-20 pointer-events-none" />

          <div className="flex animate-marquee whitespace-nowrap min-w-max">
            {[
              'Python', 'JavaScript', 'React', 'TypeScript', 'Java',
              'PHP', 'Tailwind', 'Ionic', 'Bootstrap',
              'MongoDB', 'Firebase', 'MySQL', 'SQL',
              'HTML', 'CSS'
            ].concat([
              'Python', 'JavaScript', 'React', 'TypeScript', 'Java',
              'PHP', 'Tailwind', 'Ionic', 'Bootstrap',
              'MongoDB', 'Firebase', 'MySQL', 'SQL',
              'HTML', 'CSS'
            ]).concat([
              'Python', 'JavaScript', 'React', 'TypeScript', 'Java',
              'PHP', 'Tailwind', 'Ionic', 'Bootstrap',
              'MongoDB', 'Firebase', 'MySQL', 'SQL',
              'HTML', 'CSS'
            ]).map((tech, i) => (
              <div key={i} className="flex items-center gap-5 mx-12 cursor-default opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300">
                <div className="w-14 h-14 flex items-center justify-center filter drop-shadow-md">
                  <img src={TechData[tech].logo} alt={tech} className="w-full h-full object-contain" />
                </div>
                <span className={`text-5xl font-black ${TechData[tech].color} tracking-tighter uppercase filter drop-shadow-sm`}>
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
