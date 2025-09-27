export function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container-section">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Tech Stack & Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Frontend */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Frontend</h3>
            <ul className="space-y-2 text-secondary-600">
              <li>Next.js 14</li>
              <li>React</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Framer Motion</li>
            </ul>
          </div>

          {/* Backend */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Backend</h3>
            <ul className="space-y-2 text-secondary-600">
              <li>Node.js</li>
              <li>Firebase (Firestore, Auth, Cloud Functions)</li>
              <li>Express.js</li>
              <li>REST APIs</li>
              <li>GraphQL (basics)</li>
            </ul>
          </div>

          {/* AI / Data Science */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">AI / Data Science</h3>
            <ul className="space-y-2 text-secondary-600">
              <li>Deep Learning (CNN, RNN, CRNN, UNet)</li>
              <li>Computer Vision (OpenCV, YOLO, HOG)</li>
              <li>Natural Language Processing</li>
              <li>OpenAI GPT, Hugging Face</li>
              <li>Pinecone Vector DB & Embeddings</li>
              <li>TensorFlow & PyTorch</li>
              <li>Scikit-Learn & NumPy/Pandas</li>
            </ul>
          </div>

          {/* Tools & Platforms */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Tools & Platforms</h3>
            <ul className="space-y-2 text-secondary-600">
              <li>Git & GitHub</li>
              <li>Docker (basics)</li>
              <li>Vercel & Firebase Hosting</li>
              <li>CI/CD Pipelines</li>
              <li>Linux / Shell Scripting</li>
              <li>Jupyter & Google Colab</li>
              <li>CAD for Hardware Prototyping</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}