import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Layout, Server, Database, X } from 'lucide-react';
import CertiportImage from '../assets/logos/Certiport.png';

const About = () => {
  const [isCertOpen, setIsCertOpen] = useState(false);
  const services = [
    {
      icon: <Layout className="text-blue-400" />,
      title: 'Frontend Development',
      desc: 'Creating responsive, interactive interfaces with React and modern CSS frameworks.'
    },
    {
      icon: <Server className="text-purple-400" />,
      title: 'Backend Systems',
      desc: 'Architecting scalable server-side solutions and RESTful / GraphQL APIs.'
    },
    {
      icon: <Database className="text-green-400" />,
      title: 'Database Management',
      desc: 'Designing and optimizing database schemas for performance and reliability.'
    },
    {
      icon: <Code className="text-orange-400" />,
      title: 'Code Performance',
      desc: 'Optimizing applications for speed, accessibility, and SEO best practices.'
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8 text-slate-900 dark:text-white leading-tight">
              Driven by <span className="text-primary-600">Passion</span>,<br />
              Defined by <span className="text-purple-600">Code</span>.
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              I'm a solution-oriented developer with a deep love for creating elegant code and meaningful user experiences. My journey in tech is fueled by curiosity and a commitment to continuous learning.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12 pb-10 border-b border-slate-200 dark:border-white/5">
              {[
                { label: 'Birthday', value: ' November 08, 2002' },
                { label: 'Age', value: '23 Years Old' },
                { label: 'Gender', value: 'Male' },
                { label: 'Status', value: 'Single' },
                { label: 'Nationality', value: 'Filipino' },
                { label: 'Language', value: 'English, Tagalog' },
              ].map((info, i) => (
                <div key={i} className="glass-card p-4 rounded-2xl hover:border-primary-500/30 transition-all hover:-translate-y-1 shadow-sm group">
                  <p className="text-[10px] font-black uppercase tracking-widest text-primary-500/70 mb-1 group-hover:text-primary-500 transition-colors">{info.label}</p>
                  <p className="font-bold text-slate-900 dark:text-white text-sm">{info.value}</p>
                </div>
              ))}
            </div>

            <div className="space-y-8 text-left">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <span className="text-emerald-600 dark:text-emerald-400 text-lg">💼</span>
                </div>
                Work Experience
              </h3>

              <div className="relative pl-8 border-l-2 border-slate-200 dark:border-white/5 space-y-8">
                {[
                  {
                    role: 'Full-Stack Developer Intern',
                    company: 'Municipal Accounting Office of Talavera',
                    period: 'Feb 2025 - June 2025',
                    desc: 'Developed the user interface for a standalone Municipal Accounting System using Java and NetBeans IDE, focusing on creating an efficient and intuitive desktop experience for internal accounting workflows.'
                  },
                  {
                    role: 'Freelance Software Developer',
                    company: 'Self-Employed',
                    period: '2024 - Present',
                    desc: 'Specialized in developing software solutions for local businesses and assisting students with academic capstone projects, delivering complete systems from requirement analysis to final deployment.'
                  }
                ].map((exp, i) => (
                  <div key={i} className="relative group">
                    <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-emerald-500 border-4 border-white dark:border-slate-900 transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.6)]" />
                    <p className="text-xs font-black uppercase tracking-[0.1em] text-emerald-600 dark:text-emerald-400 mb-1">{exp.period}</p>
                    <h4 className="font-extrabold text-slate-900 dark:text-white text-xl mb-1 transition-colors group-hover:text-emerald-600 dark:group-hover:text-emerald-400">{exp.role}</h4>
                    <p className="text-slate-500 font-bold text-sm mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {exp.company}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">{exp.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8 mt-16 pt-16 border-t border-slate-200 dark:border-white/5">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center">
                  <span className="text-primary-600 dark:text-primary-400 text-lg">🎓</span>
                </div>
                Education & Background
              </h3>

              <div className="relative pl-8 border-l-2 border-slate-200 dark:border-white/5 space-y-8">
                {[
                  {
                    degree: 'Bachelor of Science in Information Technology',
                    major: 'Major in Database System Technology',
                    school: 'Nueva Ecija University of Science and Technology',
                    period: '2021 - 2025',
                    desc: 'Graduated with Academic Distinction Award. Specialized in designing, implementing, and managing complex database architectures and high-performance server systems.'
                  }
                ].map((edu, i) => (
                  <div key={i} className="relative group">
                    <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-primary-500 border-4 border-white dark:border-slate-900 transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.6)]" />
                    <p className="text-xs font-black uppercase tracking-[0.1em] text-primary-600 dark:text-primary-400 mb-1">{edu.period}</p>
                    <h4 className="font-extrabold text-slate-900 dark:text-white text-xl mb-1 transition-colors group-hover:text-primary-600 dark:group-hover:text-primary-400">{edu.degree}</h4>
                    {edu.major && <p className="text-primary-500 font-bold text-sm mb-2">{edu.major}</p>}
                    <p className="text-slate-500 font-semibold mb-2">{edu.school}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">{edu.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8 mt-16 pt-16 border-t border-slate-200 dark:border-white/5 text-left">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                  <span className="text-indigo-600 dark:text-indigo-400 text-lg">🏆</span>
                </div>
                Certifications
              </h3>

              <div className="relative pl-8 border-l-2 border-slate-200 dark:border-white/5 space-y-8">
                <div className="relative">
                  <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-indigo-500 border-4 border-white dark:border-slate-900" />
                  <p className="text-sm font-bold text-indigo-600 dark:text-indigo-400 mb-1">Nov 2024</p>
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg">IT Specialist - Databases</h4>
                  <p className="text-slate-500 font-semibold mb-4">Certiport</p>
                  <div
                    onClick={() => setIsCertOpen(true)}
                    className="glass-card p-4 inline-block bg-white dark:bg-white/5 hover:scale-105 transition-transform duration-300 cursor-pointer"
                  >
                    <img src={CertiportImage} alt="Certiport Certification" className="h-[70px] w-auto object-contain" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-6 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-primary-500/10 to-emerald-500/10 rounded-full blur-[80px] -z-10" />

            {[
              { icon: '🚀', title: 'Performance', color: 'bg-blue-500' },
              { icon: '🎨', title: 'UX Design', color: 'bg-purple-500' },
              { icon: '📱', title: 'Responsive', color: 'bg-indigo-500' },
              { icon: '⚙️', title: 'Maintainable', color: 'bg-emerald-500' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 flex flex-col items-center text-center group hover:border-primary-500/50 transition-all cursor-default"
              >
                <span className="text-4xl mb-4 transform group-hover:scale-125 transition-transform">{item.icon}</span>
                <p className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs">{item.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Certification Image Modal */}
      <AnimatePresence>
        {isCertOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCertOpen(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-4 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-4xl w-full bg-white dark:bg-slate-900 rounded-3xl p-4 shadow-2xl overflow-hidden cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsCertOpen(false)}
                className="absolute top-6 right-6 z-10 p-2 bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-slate-600 dark:text-white rounded-full transition-colors"
              >
                <X size={24} />
              </button>
              <img
                src={CertiportImage}
                alt="Certiport Certification Full"
                className="w-full h-auto rounded-2xl object-contain"
                style={{ maxHeight: '80vh' }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;
