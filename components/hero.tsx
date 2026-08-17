import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between min-h-[100dvh] py-32 px-4 max-w-7xl mx-auto gap-12">
      <motion.div 
        className="w-full md:w-1/2 flex flex-col items-start"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium border border-primary mb-6 inline-block">
          Welcome
        </div>
        <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-4 tracking-tight leading-tight">
          Sakahayu Pribadi.
        </h1>
        <p className="text-muted-foreground text-xl md:text-2xl font-lora italic">
          Software Engineer &mdash; Full Stack
        </p>
      </motion.div>

      <motion.div 
        className="w-full md:w-1/2"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="rounded-[2rem] bg-black/5 dark:bg-white/5 p-2 w-full max-w-md mx-auto md:max-w-none md:ml-auto">
          <div className="rounded-[calc(2rem-0.5rem)] overflow-hidden relative shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] aspect-square md:aspect-auto">
            <Image 
              src="/images/sakahayu_portrait.jpg" 
              alt="Sakahayu Pribadi"
              width={800}
              height={800}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
