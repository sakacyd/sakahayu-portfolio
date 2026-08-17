import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function Experience() {
  return (
    <section className="max-w-4xl mx-auto py-16 px-4">
      <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-8 text-center md:text-left">Experience</h2>
      
      <Card className="border shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-1.5 h-full bg-primary/80 group-hover:bg-primary transition-colors"></div>
        <CardHeader className="pb-3 pl-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-1 gap-2">
            <CardTitle className="text-2xl font-bold">PT. Indotech Energi Persada</CardTitle>
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-muted-foreground">
              March 2025 &ndash; June 2025
            </div>
          </div>
          <CardDescription className="text-lg text-primary font-medium">
            Internship
          </CardDescription>
        </CardHeader>
        <CardContent className="pl-8 pt-2">
          <p className="text-muted-foreground leading-relaxed">
            During my internship at PT. Indotech Energi Persada, I contributed to software development processes, 
            working alongside experienced engineers to build and maintain robust applications. My responsibilities 
            included developing frontend and backend features, collaborating on system design, and ensuring 
            the delivery of high-quality software solutions.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
