export function Contact() {
  return (
    <section id="contact" className="py-20 bg-secondary-50 dark:bg-secondary-800">
      <div className="container-section">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get In Touch</h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-secondary-600 dark:text-secondary-300 mb-8">
            Interested in collaborating or learning more about AI-powered web development? 
            Let’s connect and build something amazing together.
          </p>
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Your Name" className="p-3 rounded-md border" />
            <input type="email" placeholder="Your Email" className="p-3 rounded-md border" />
            <textarea placeholder="Your Message" rows={4} className="p-3 rounded-md border"></textarea>
            <button className="btn-primary">Send Message</button>
          </form>
          <div className="flex justify-center mt-6 gap-4">
            <a href="mailto:murtazasadriwala09@gmail.com" className="btn-secondary">Email</a>
            <a href="https://linkedin.com/in/murtaza-sadri" className="btn-secondary">LinkedIn</a>
            <a href="https://devpost.com/msadriwala9" className="btn-secondary">Devpost</a>
          </div>
        </div>
      </div>
    </section>
  );
}