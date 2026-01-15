import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center mb-12 animate-slide-up">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
      {subtitle && (
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className="w-20 h-1 bg-white mx-auto mt-6"></div>
    </div>
  );
}
