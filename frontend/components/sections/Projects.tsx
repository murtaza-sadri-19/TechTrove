export function Projects() {
  return (
    <section id="projects" className="py-20 bg-secondary-50">
      <div className="container-section">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card">
            <h3 className="text-xl font-semibold mb-4">AI-Powered Portfolio</h3>
            <p className="text-secondary-600 mb-4">
              This very portfolio, showcasing AI integrations and modern web development.
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm">Next.js</span>
              <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm">OpenAI</span>
              <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm">Firebase</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}