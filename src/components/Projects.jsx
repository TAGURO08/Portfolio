import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code, X, ImageIcon, ChevronLeft, ChevronRight } from 'lucide-react';

import RCEFHome from '../assets/Image/Project/RCEF/Home.png';
import RCEFHome2 from '../assets/Image/Project/RCEF/Home2.png';
import RCEFDashboard from '../assets/Image/Project/RCEF/Dashboard.png';
import RCEFLogin from '../assets/Image/Project/RCEF/Login.png';
import RCEFQueries from '../assets/Image/Project/RCEF/Queries.png';
import RCEFResponse from '../assets/Image/Project/RCEF/Response.png';
import RCEFSendQueries from '../assets/Image/Project/RCEF/Send_Queries.png';
import RCEFUser from '../assets/Image/Project/RCEF/User.png';

import TradersLanding from '../assets/Image/Project/Traders_Portal/Landing_Page.png';
import TradersAbout from '../assets/Image/Project/Traders_Portal/About.png';
import TradersLogin from '../assets/Image/Project/Traders_Portal/Login.png';
import TradersMap from '../assets/Image/Project/Traders_Portal/Map.png';
import TradersPlanting from '../assets/Image/Project/Traders_Portal/Planting.png';
import TradersHarvest from '../assets/Image/Project/Traders_Portal/Harvest.png';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      title: 'RCEF Ticketing System',
      category: 'Enterprise Application',
      image: RCEFHome,
      description: 'A professional ticketing system with a modern dashboard for tracking queries, monitoring response times, and managing user data.',
      tags: ['JavaScript', 'React', 'Tailwind CSS', 'Python', 'FastAPI', 'MySQL', 'Firebase'],
      gallery: [
        { src: RCEFHome, title: 'Landing Page' },
        { src: RCEFHome2, title: 'Home Features' },
        { src: RCEFLogin, title: 'Login Screen' },
        { src: RCEFDashboard, title: 'Admin Dashboard' },
        { src: RCEFQueries, title: 'Manage Queries' },
        { src: RCEFSendQueries, title: 'Submit Query Form' },
        { src: RCEFResponse, title: 'Ticket Response' },
        { src: RCEFUser, title: 'User Management' },
      ]
    },
    {
      title: 'RCEF Seed Variety Distribution',
      category: 'Front-End Development',
      image: TradersLanding,
      description: 'A comprehensive web for seed variety distribution and tracking. I spearheaded the Front-End Development for this project, building interactive data visualizations and modern user interfaces.',
      tags: ['Ionic Framework', 'TypeScript', 'CSS', 'Tailwind CSS', 'Python', 'Firebase'],
      gallery: [
        { src: TradersLanding, title: 'Landing Page' },
        { src: TradersAbout, title: 'About Details' },
        { src: TradersLogin, title: 'Login Interface' },
        { src: TradersMap, title: 'Geographic Map View' },
        { src: TradersPlanting, title: 'Planting Data Module' },
        { src: TradersHarvest, title: 'Harvest Tracking' },
      ]
    }
  ];

  const handleOpenModal = (project) => {
    if (project.gallery) {
      setSelectedProject(project);
      setCurrentImageIndex(0);
    }
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev < selectedProject.gallery.length - 1 ? prev + 1 : 0
    );
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev > 0 ? prev - 1 : selectedProject.gallery.length - 1
    );
  };

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
              className="group relative bg-white dark:bg-slate-900 rounded-3xl shadow-lg border border-slate-200 dark:border-white/5 overflow-hidden flex flex-col"
            >
              <div
                className="relative aspect-[4/3] overflow-hidden cursor-pointer"
                onClick={() => handleOpenModal(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-900/40 backdrop-blur-[2px]">
                  {project.gallery ? (
                    <button className="p-3 bg-white text-slate-900 rounded-full hover:scale-110 transition-transform">
                      <ImageIcon size={20} />
                    </button>
                  ) : (
                    <>
                      <a href="#" onClick={(e) => e.stopPropagation()} className="p-3 bg-white text-slate-900 rounded-full hover:scale-110 transition-transform"><Code size={20} /></a>
                      <a href="#" onClick={(e) => e.stopPropagation()} className="p-3 bg-white text-slate-900 rounded-full hover:scale-110 transition-transform"><ExternalLink size={20} /></a>
                    </>
                  )}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex gap-2 mb-4 flex-wrap">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-black uppercase tracking-widest px-2 py-1 bg-primary-500/10 text-primary-600 dark:text-primary-400 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3
                  className="text-xl font-bold mb-2 text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors cursor-pointer"
                  onClick={() => handleOpenModal(project)}
                >
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex-1">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && selectedProject.gallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-slate-950/90 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-slate-900 w-full max-w-6xl max-h-[90vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-slate-200 dark:border-white/10"
            >
              <div className="p-4 md:p-6 border-b border-slate-200 dark:border-white/10 flex justify-between items-center bg-slate-50 dark:bg-slate-900/50">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">{selectedProject.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm mt-1">UI Gallery & Screenshots</p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="relative flex-1 flex flex-col p-4 md:p-8 bg-slate-100 dark:bg-slate-950/50 overflow-hidden min-h-[500px]">
                <div className="flex w-full justify-between items-center mb-6">
                  <h4 className="text-lg md:text-xl font-bold text-slate-800 dark:text-slate-200 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-500/20 text-primary-600 dark:text-primary-400 flex items-center justify-center text-sm">
                      {currentImageIndex + 1}/{selectedProject.gallery.length}
                    </span>
                    {selectedProject.gallery[currentImageIndex].title}
                  </h4>
                  <div className="flex gap-2">
                    <button
                      onClick={handlePrevImage}
                      className="p-2 md:p-3 rounded-full bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-colors shadow-md border border-slate-200 dark:border-white/5"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="p-2 md:p-3 rounded-full bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-colors shadow-md border border-slate-200 dark:border-white/5"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>

                <div className="relative flex-1 flex items-center justify-center overflow-hidden rounded-2xl border border-slate-200 dark:border-white/5 shadow-inner bg-slate-200 dark:bg-slate-900/50 p-2">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImageIndex}
                      src={selectedProject.gallery[currentImageIndex].src}
                      alt={selectedProject.gallery[currentImageIndex].title}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                      className="max-w-full max-h-full object-contain rounded-xl"
                    />
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
