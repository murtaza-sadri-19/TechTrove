// sections/Experience.tsx
/**
 * Experience timeline, collapsible bullets.
 * Inspired by InBio/WOP for layout, accessible.
 */
'use client';
import React, { useState } from 'react'
const jobs = [
  {
    company: 'Startup Inc.',
    role: 'Lead ML Engineer',
    period: '2023–2025',
    bullets: ['Headed ML commerce engine', 'Built GANs for image generation', 'Mentored 3 engineers'],
  },
  // ...more jobs
];
export default function Experience() {
  const [open, setOpen] = useState<number|null>(0);
  return (
    <section id="experience" className="py-16 bg-gradient-to-r from-blue-50 to-white">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Experience & Timeline</h2>
        <ol className="border-l-4 border-blue-200">
          {jobs.map((j, i) => (
            <li key={j.company + j.role} className="mb-6 ml-6 relative">
              <button
                className="absolute -left-7 top-2 w-6 h-6 rounded-full bg-blue-600 text-white shadow"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                tabIndex={0}
              >{open === i ? '-' : '+'}</button>
              <div className="flex items-center font-semibold text-lg">{j.role} @ {j.company}</div>
              <div className="text-sm text-gray-500">{j.period}</div>
              {open === i && (
                <ul className="mt-2 ml-2 text-base list-disc">
                  {j.bullets.map(b => <li key={b}>{b}</li>)}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}