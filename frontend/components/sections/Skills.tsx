import { FaReact, FaNodeJs, FaPython, FaDocker, FaGithub, FaDatabase } from "react-icons/fa";
import { SiTensorflow, SiPytorch, SiNextdotjs } from "react-icons/si";

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-secondary-900">
      <div className="container-section">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Tech Stack & Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Frontend */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Frontend</h3>
            <ul className="space-y-2 text-secondary-600 dark:text-secondary-300">
              <li><SiNextdotjs className="inline mr-2"/> Next.js 14</li>
              <li><FaReact className="inline mr-2"/> React</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Framer Motion</li>
            </ul>
          </div>

          {/* Backend */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Backend</h3>
            <ul className="space-y-2 text-secondary-600 dark:text-secondary-300">
              <li><FaNodeJs className="inline mr-2"/> Node.js</li>
              <li>Firebase (Firestore, Auth, Cloud Functions)</li>
              <li>Express.js</li>
              <li><FaDatabase className="inline mr-2"/> REST APIs, GraphQL</li>
            </ul>
          </div>

          {/* AI / Data Science */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">AI / Data Science</h3>
            <ul className="space-y-2 text-secondary-600 dark:text-secondary-300">
              <li><SiTensorflow className="inline mr-2"/> TensorFlow, <SiPytorch className="inline mr-2"/> PyTorch</li>
              <li><FaPython className="inline mr-2"/> Deep Learning (CNN, RNN, CRNN, UNet)</li>
              <li>Computer Vision (OpenCV, YOLO, HOG)</li>
              <li>NLP (Hugging Face, OpenAI GPT)</li>
              <li>Vector DBs (Pinecone, FAISS)</li>
            </ul>
          </div>

          {/* Tools */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Tools & Platforms</h3>
            <ul className="space-y-2 text-secondary-600 dark:text-secondary-300">
              <li><FaGithub className="inline mr-2"/> Git & GitHub</li>
              <li><FaDocker className="inline mr-2"/> Docker</li>
              <li>CI/CD Pipelines</li>
              <li>Linux & Shell Scripting</li>
              <li>Vercel & Firebase Hosting</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}