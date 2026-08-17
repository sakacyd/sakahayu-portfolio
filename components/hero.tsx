import React from 'react';

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-4 tracking-tight">
        Sakahayu Pribadi
      </h1>
      <p className="text-primary text-xl md:text-2xl font-lora italic">
        Software Engineer &mdash; Full Stack
      </p>
    </section>
  );
}
