import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary-900 text-white py-8">
      <div className="container-section text-center">
        <div className="text-xl font-bold mb-4">TechTrove</div>
        <p className="text-secondary-400 mb-4">
          Built during <span className="text-primary-400">DevOne Hackathon 2025</span> with Next.js, Tailwind, and AI-ready integrations.
        </p>
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://github.com/murtaza-sadri-19"><Github size={24}/></a>
          <a href="https://linkedin.com/in/murtaza-sadri"><Linkedin size={24}/></a>
          <a href="mailto:murtazasadriwala09@gmail.com"><Mail size={24}/></a>
        </div>
        <p className="text-secondary-500 text-sm">
          © 2025 TechTrove. All rights reserved.
        </p>
      </div>
    </footer>
  );
}