import { FaReact, FaNodeJs, FaPython, FaDocker, FaGithub, FaDatabase } from "react-icons/fa";
import { SiTensorflow, SiPytorch, SiNextdotjs } from "react-icons/si";

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-secondary">
      <div className="container-section">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient">Tech Stack & Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Frontend */}
          <div className="card p-6 hover:shadow-lg transition-shadow" data-testid="skills-frontend">
            <div className="text-center">
              <div className="text-4xl mb-4 text-primary">
                <FaReact className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Frontend</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><SiNextdotjs className="inline mr-2"/> Next.js 14</li>
                <li><FaReact className="inline mr-2"/> React</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Framer Motion</li>
              </ul>
            </div>
          </div>

          {/* Backend */}
          <div className="card p-6 hover:shadow-lg transition-shadow" data-testid="skills-backend">
            <div className="text-center">
              <div className="text-4xl mb-4 text-accent">
                <FaNodeJs className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Backend</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><FaNodeJs className="inline mr-2"/> Node.js</li>
                <li>Firebase (Firestore, Auth)</li>
                <li>Express.js</li>
                <li><FaDatabase className="inline mr-2"/> REST APIs, GraphQL</li>
              </ul>
            </div>
          </div>

          {/* AI / Data Science */}
          <div className="card p-6 hover:shadow-lg transition-shadow" data-testid="skills-ai">
            <div className="text-center">
              <div className="text-4xl mb-4 text-primary">
                <SiTensorflow className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-4">AI / Data Science</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><SiTensorflow className="inline mr-2"/> TensorFlow, <SiPytorch className="inline mr-2"/> PyTorch</li>
                <li><FaPython className="inline mr-2"/> Deep Learning (CNN, RNN, CRNN)</li>
                <li>Computer Vision (OpenCV, YOLO)</li>
                <li>NLP (Hugging Face, OpenAI)</li>
                <li>Vector DBs (Pinecone, FAISS)</li>
              </ul>
            </div>
          </div>

          {/* Tools */}
          <div className="card p-6 hover:shadow-lg transition-shadow" data-testid="skills-tools">
            <div className="text-center">
              <div className="text-4xl mb-4 text-accent">
                <FaGithub className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Tools & Platforms</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><FaGithub className="inline mr-2"/> Git & GitHub</li>
                <li><FaDocker className="inline mr-2"/> Docker</li>
                <li>CI/CD Pipelines</li>
                <li>Linux & Shell Scripting</li>
                <li>Vercel & Firebase Hosting</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}