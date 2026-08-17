import React from 'react';
import { Badge } from '@/components/ui/badge';

export function About() {
  const techStack = [
    "C++", "Javascript", "Typescript", "React.js", "Next.js", 
    "Laravel", "SQL", "Flutter", "Supabase"
  ];

  return (
    <section className="max-w-4xl mx-auto py-16 px-4">
      <div className="bg-[#f9f7f1] dark:bg-zinc-900/50 rounded-xl shadow-sm border border-border p-8 md:p-12 relative overflow-hidden">
        {/* Subtle texture/parchment effect */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
        
        <div className="relative z-10">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-8 text-center md:text-left">About</h2>
          
          <div className="space-y-10">
            <div>
              <h3 className="font-semibold text-xl mb-3 flex items-center gap-2">
                <span className="text-primary">🎓</span> Education
              </h3>
              <div className="flex flex-col border-l-2 border-primary/30 pl-4 py-1">
                <p className="font-medium text-lg">Universitas Pancasila</p>
                <p className="text-muted-foreground">Informatics Engineering / Software Engineering</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
                <span className="text-primary">💻</span> Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="px-4 py-1.5 text-sm rounded-md hover:bg-primary/20 transition-colors">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
