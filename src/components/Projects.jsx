import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Full Stack',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
      description: 'A robust e-commerce solution with real-time inventory and Stripe integration.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe']
    },
    {
      title: 'AI Content Generator',
      category: 'AI / ML',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
      description: 'Leveraging OpenAI API to generate high-quality marketing copy and images.',
      tags: ['Next.js', 'OpenAI', 'Tailwind', 'PostgreSQL']
    },
    {
      title: 'Real Estate Dashboard',
      category: 'Data Viz',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      description: 'Interactive map and analytics for tracking property market trends.',
      tags: ['React', 'Leaflet', 'Recharts', 'Express']
    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-4 text-slate-900 dark:text-white"
            >
              Projects
            </motion.h2>
            <p className="text-slate-600 dark:text-slate-400">A collection of my recent work and open-source contributions.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-900/40 backdrop-blur-[2px]">
                  <a href="#" className="p-3 bg-white text-slate-900 rounded-full hover:scale-110 transition-transform"><Code size={20} /></a>
                  <a href="#" className="p-3 bg-white text-slate-900 rounded-full hover:scale-110 transition-transform"><ExternalLink size={20} /></a>
                </div>
              </div>

              <div className="p-6">
                <div className="flex gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-black uppercase tracking-widest px-2 py-1 bg-primary-500/10 text-primary-600 dark:text-primary-400 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
