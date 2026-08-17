"use client";

import React from 'react';
import { motion } from 'motion/react';

export function Experience() {
  return (
    <section className="max-w-4xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center mb-16 text-center"
      >
        <span className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground mb-4">
          Career Trajectory
        </span>
        <h2 className="font-playfair text-4xl md:text-5xl font-bold tracking-tight">Experience</h2>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="rounded-[2rem] bg-black/5 p-2 dark:bg-white/5"
      >
        <div className="rounded-[1.5rem] bg-background shadow-inner p-8 md:p-12 relative overflow-hidden">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <div>
              <h3 className="text-2xl md:text-3xl font-playfair font-bold">PT. Indotech Energi Persada</h3>
              <p className="text-lg text-muted-foreground font-lora mt-2">Internship</p>
            </div>
            <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium">
              March 2025 &ndash; June 2025
            </div>
          </div>
          <div className="prose prose-lg dark:prose-invert font-lora text-muted-foreground leading-relaxed">
            <p>
              During my internship at PT. Indotech Energi Persada, I contributed to software development processes, 
              working alongside experienced engineers to build and maintain robust applications. My responsibilities 
              included developing frontend and backend features, collaborating on system design, and ensuring 
              the delivery of high-quality software solutions.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
