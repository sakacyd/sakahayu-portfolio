"use client";

import React from 'react';
import { motion } from 'motion/react';

const projects = [
  {
    title: "Kovalen",
    description: "Matchmaking app for study partners using a swipe interface. Built with Flutter and Supabase.",
    tags: ["Flutter", "Supabase", "Mobile App"],
    gradient: "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100 via-blue-50 to-slate-50 dark:from-blue-900/40 dark:via-background dark:to-background",
  },
  {
    title: "Indotech Teknisi App",
    description: "A mobile app for technicians to view schedules, manage tasks, and submit logs. Built with Flutter and Supabase.",
    tags: ["Flutter", "Supabase", "Mobile App"],
    gradient: "bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-100 via-orange-50 to-slate-50 dark:from-amber-900/40 dark:via-background dark:to-background",
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center mb-20 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-playfair font-bold tracking-tight">Projects</h2>
      </motion.div>

      <div className="space-y-32">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="rounded-[2rem] bg-black/5 p-2 dark:bg-white/5 w-full"
          >
            <div className="rounded-[1.5rem] bg-background shadow-inner overflow-hidden flex flex-col md:flex-row min-h-[500px]">
              
              {/* Details Section */}
              <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center order-2 md:order-1">
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 rounded-full border text-xs font-bold tracking-wider uppercase text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-playfair text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                  {project.title}
                </h3>
                <p className="font-lora text-lg md:text-xl text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Abstract Asset Section */}
              <div className={`w-full md:w-1/2 h-64 md:h-auto order-1 md:order-2 ${project.gradient} relative overflow-hidden flex items-center justify-center border-b md:border-b-0 md:border-l border-border/50`}>
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black/20 via-transparent to-transparent mix-blend-overlay"></div>
                <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center bg-white/20 dark:bg-black/20 backdrop-blur-sm shadow-xl">
                  <span className="font-playfair text-xl md:text-2xl font-bold opacity-50">App</span>
                </div>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
