export function Contact() {
  return (
    <section id="contact" className="py-20 bg-secondary-50">
      <div className="container-section">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get In Touch</h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-secondary-600 mb-8">
            Interested in collaborating or learning more about AI-powered web development? 
            Let's connect and build something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:contact@techtrove.dev" className="btn-primary">
              Send Email
            </a>
            <a href="https://linkedin.com/in/murtaza-sadri" className="btn-secondary">
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}