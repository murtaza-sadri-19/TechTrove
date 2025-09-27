'use client';
import { useState } from 'react';
import { Send, Mail, Linkedin, Code } from 'lucide-react';
import { useToast } from '../../hooks/use-toast';

export function Contact() {
const [formData, setFormData] = useState({
  name: '',
  email: '',
  message: ''
});
const [isSubmitting, setIsSubmitting] = useState(false);
const { toast } = useToast();

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  // Simulate form submission
  try {
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  } catch (error) {
    toast({
      title: "Error",
      description: "Failed to send message. Please try again.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  setFormData(prev => ({
    ...prev,
    [e.target.name]: e.target.value
  }));
};

return (
  <section id="contact" className="py-20 bg-background">
    <div className="container-section">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient">Get In Touch</h2>
      <div className="max-w-2xl mx-auto">
        <p className="text-lg text-muted-foreground mb-8 text-center">
          Interested in collaborating or learning more about AI-powered web development? 
          Let's connect and build something amazing together.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6 mb-8" data-testid="contact-form">
          <div>
            <input 
              type="text" 
              name="name"
              placeholder="Your Name" 
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
              data-testid="input-name"
            />
          </div>
          <div>
            <input 
              type="email" 
              name="email"
              placeholder="Your Email" 
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
              data-testid="input-email"
            />
          </div>
          <div>
            <textarea 
              name="message"
              placeholder="Your Message" 
              rows={4} 
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-4 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
              data-testid="input-message"
            />
          </div>
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2 disabled:opacity-50"
            data-testid="submit-button"
          >
            {isSubmitting ? 'Sending...' : (
              <>
                Send Message <Send size={20} />
              </>
            )}
          </button>
        </form>
        
        <div className="flex justify-center gap-4">
          <a 
            href="mailto:murtazasadriwala09@gmail.com" 
            className="btn-secondary"
            data-testid="contact-email"
          >
            <Mail size={20} /> Email
          </a>
          <a 
            href="https://linkedin.com/in/murtaza-sadri" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-secondary"
            data-testid="contact-linkedin"
          >
            <Linkedin size={20} /> LinkedIn
          </a>
          <a 
            href="https://devpost.com/msadriwala9" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-secondary"
            data-testid="contact-devpost"
          >
            <Code size={20} /> Devpost
          </a>
        </div>
      </div>
    </div>
  </section>
);
}