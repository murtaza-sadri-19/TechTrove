export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-section">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About TechTrove</h2>
        <div className="max-w-4xl mx-auto text-lg text-secondary-600 space-y-6">
          <p>
            <strong>TechTrove</strong> is my personal portfolio platform — a space where 
            technology, creativity, and impact converge. It goes beyond a simple 
            resume website, serving as a living showcase of my journey, projects, 
            and research in data science, deep learning, and real-world applications.
          </p>
          <p>
            Designed with <strong>Next.js 14</strong>, styled through <strong>Tailwind CSS</strong>, 
            and enhanced with <strong>Framer Motion</strong>, the site blends clean UI with 
            engaging interactions. Its foundation is built to be <strong>AI-ready</strong>, 
            integrating services like <strong>OpenAI</strong>, <strong>Hugging Face</strong>, and 
            <strong>Firebase</strong> for scalable and intelligent extensions.
          </p>
          <p>
            TechTrove reflects my belief in building solutions that are not only 
            technically strong but also forward-looking — bridging today’s web 
            development with tomorrow’s intelligent systems.
          </p>
          <p className="text-center font-medium">
            Explore more of my work on{" "}
            <a
              href="https://github.com/murtaza-sadri-19"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:underline"
            >
              GitHub
            </a>{" "}
            and download my{" "}
            <a
              href="<!-- Add your resume link here -->"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:underline"
            >
              Resume
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}