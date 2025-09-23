export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-section">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About TechTrove</h2>
        <div className="max-w-4xl mx-auto text-lg text-secondary-600 space-y-6">
          <p>
            TechTrove represents the cutting edge of developer portfolio design, showcasing 
            the seamless integration of modern web technologies with advanced AI capabilities.
          </p>
          <p>
            Built with Next.js 14, styled with Tailwind CSS, and animated with Framer Motion, 
            this portfolio demonstrates the power of combining traditional web development 
            with artificial intelligence services from OpenAI, Hugging Face, and Pinecone.
          </p>
        </div>
      </div>
    </section>
  );
}