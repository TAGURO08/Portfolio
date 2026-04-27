import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { MdEmail, MdPhone } from 'react-icons/md';
import { FaDiscord, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { RiSendPlaneFill } from 'react-icons/ri';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    const SERVICE_ID = 'service_1q2r19o';
    const TEMPLATE_ID = 'template_sziy0sy';
    const PUBLIC_KEY = 'NmGjzAgw8mrV4y22V';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        toast.success('Message sent! I will get back to you soon.');
        form.current.reset();
      })
      .catch((error) => {
        toast.error(`Error: ${error.text || 'Failed to send'}. Please check your credentials.`);
        console.error('EmailJS Error Detailed:', error);
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-transparent transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-6 text-slate-900 dark:text-white"
            >
              Let's build something <span className="text-primary-600">amazing</span> together.
            </motion.h2>
            <p className="text-slate-600 dark:text-slate-400 mb-10 text-lg leading-relaxed">
              Whether you have a specific project in mind or just want to chat about code,
              my inbox is always open. I'll get back to you as soon as possible!
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: <MdEmail className="text-blue-600 dark:text-blue-400 text-xl" />, label: 'Email', value: 'eugenemarzan08@gmail.com', href: 'mailto:eugenemarzan08@gmail.com' },
                { icon: <MdPhone className="text-green-600 dark:text-green-400 text-xl" />, label: 'Phone', value: '+63 991 469 8202', href: 'tel:+639914698202' },
                { icon: <FaDiscord className="text-purple-600 dark:text-purple-400 text-xl" />, label: 'Discord', value: 'eugene3787', href: 'https://discord.com/users/779281744884924416' },
                { icon: <FaFacebookF className="text-blue-700 dark:text-blue-600 text-xl" />, label: 'Facebook', value: 'Eugene Marzan', href: 'https://www.facebook.com/eugene.marzan' },
                { icon: <FaInstagram className="text-pink-600 dark:text-pink-500 text-xl" />, label: 'Instagram', value: '@eugene_marzan', href: 'https://www.instagram.com/eugene_marzan/' },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-slate-200 dark:bg-white/5 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/30 rounded-full flex items-center justify-center shrink-0 transition-colors">
                    <div className="group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-black tracking-widest">{item.label}</p>
                    <p className="font-bold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-10 border-slate-200 dark:border-white/10 shadow-xl"
          >
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="time" value={new Date().toLocaleString()} />

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-600 dark:text-slate-300">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Eugene Marzan"
                    className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 text-slate-900 dark:text-white transition-all duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-600 dark:text-slate-300">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="eugenemarzan@gmail.com"
                    className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 text-slate-900 dark:text-white transition-all duration-300"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-600 dark:text-slate-300">Subject</label>
                <input
                  type="text"
                  name="title"
                  required
                  placeholder="How can I help you?"
                  className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 text-slate-900 dark:text-white transition-all duration-300"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-600 dark:text-slate-300">Message</label>
                <textarea
                  rows="5"
                  name="message"
                  required
                  placeholder="Tell me about your project or inquiry..."
                  className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 text-slate-900 dark:text-white transition-all duration-300 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSending}
                className={`w-full group bg-primary-600 hover:bg-primary-700 text-white flex items-center justify-center gap-2 font-black uppercase tracking-widest text-xs py-4 rounded-xl shadow-lg shadow-primary-500/20 active:scale-95 transition-all duration-300 ${isSending ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSending ? 'Sending Message...' : 'Send Message'}
                {!isSending && <RiSendPlaneFill className="text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
