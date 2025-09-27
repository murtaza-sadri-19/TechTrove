import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary text-foreground py-8 border-t border-border">
      <div className="container-section text-center">
        <div className="text-2xl font-bold mb-4 text-gradient">TechTrove</div>
        <p className="text-muted-foreground mb-4">
          Built during <span className="text-primary">DevOne Hackathon 2025</span> with Next.js, Tailwind, and AI-ready integrations.
        </p>
        <div className="flex justify-center gap-6 mb-4">
          <a 
            href="https://github.com/murtaza-sadri-19" 
            aria-label="GitHub" 
            className="text-xl hover:text-primary transition-colors"
            data-testid="footer-github"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://linkedin.com/in/murtaza-sadri" 
            aria-label="LinkedIn" 
            className="text-xl hover:text-primary transition-colors"
            data-testid="footer-linkedin"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="mailto:murtazasadriwala09@gmail.com" 
            aria-label="Email" 
            className="text-xl hover:text-primary transition-colors"
            data-testid="footer-email"
          >
            <Mail size={24} />
          </a>
        </div>
        <p className="text-muted-foreground text-sm">
          © 2025 TechTrove. All rights reserved.
        </p>
      </div>
    </footer>
  );
}