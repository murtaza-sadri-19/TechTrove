export function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container-section">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Tech Stack</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Frontend</h3>
            <ul className="space-y-2 text-secondary-600">
              <li>Next.js 14</li>
              <li>Tailwind CSS</li>
              <li>Framer Motion</li>
              <li>TypeScript</li>
            </ul>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Backend</h3>
            <ul className="space-y-2 text-secondary-600">
              <li>Firebase</li>
              <li>Firestore</li>
              <li>Firebase Auth</li>
              <li>Cloud Functions</li>
            </ul>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">AI/ML</h3>
            <ul className="space-y-2 text-secondary-600">
              <li>OpenAI GPT-4</li>
              <li>Hugging Face</li>
              <li>Pinecone Vector DB</li>
              <li>Embeddings</li>
            </ul>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Tools</h3>
            <ul className="space-y-2 text-secondary-600">
              <li>Git & GitHub</li>
              <li>ESLint & Prettier</li>
              <li>Vercel Deployment</li>
              <li>CI/CD</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}