"use client";

import React from 'react';
import { motion } from 'motion/react';
import { Badge } from '@/components/ui/badge';

export function About() {
  const frameworksAndLanguages = [
    "C++", "Javascript", "Typescript", "React.js", "Next.js", "Laravel"
  ];
  
  const mobileAndInfra = [
    "Flutter", "Supabase", "Docker", "Kubernetes"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="max-w-6xl mx-auto py-24 px-4">
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Cell 1: Main bio */}
        <motion.div variants={itemVariants} className="md:col-span-2 md:row-span-2">
          <div className="rounded-[2rem] bg-black/5 dark:bg-white/5 p-2 h-full">
            <div className="rounded-[calc(2rem-0.5rem)] bg-card text-card-foreground p-8 md:p-12 h-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] border border-border/50">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">About Me</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Fresh graduate from Universitas Pancasila, Informatics Engineering. 
                  Passionate about building scalable web and mobile applications with a strong foundation in software engineering principles.
                </p>
                <p>
                  I focus on creating elegant solutions to complex problems, combining technical excellence with an eye for design and user experience.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Cell 2: Frameworks & Languages */}
        <motion.div variants={itemVariants} className="md:col-span-1">
          <div className="rounded-[2rem] bg-black/5 dark:bg-white/5 p-2 h-full">
            <div className="rounded-[calc(2rem-0.5rem)] bg-card text-card-foreground p-6 md:p-8 h-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] border border-border/50">
              <h3 className="font-semibold text-xl mb-4 text-foreground">Languages & Web</h3>
              <div className="flex flex-wrap gap-2">
                {frameworksAndLanguages.map((tech) => (
                  <Badge key={tech} variant="secondary" className="px-3 py-1 text-sm rounded-md hover:bg-primary/20 transition-colors">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Cell 3: Mobile & Infra */}
        <motion.div variants={itemVariants} className="md:col-span-1">
          <div className="rounded-[2rem] bg-black/5 dark:bg-white/5 p-2 h-full">
            <div className="rounded-[calc(2rem-0.5rem)] bg-card text-card-foreground p-6 md:p-8 h-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] border border-border/50">
              <h3 className="font-semibold text-xl mb-4 text-foreground">Mobile & Infra</h3>
              <div className="flex flex-wrap gap-2">
                {mobileAndInfra.map((tech) => (
                  <Badge key={tech} variant="secondary" className="px-3 py-1 text-sm rounded-md hover:bg-primary/20 transition-colors">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
