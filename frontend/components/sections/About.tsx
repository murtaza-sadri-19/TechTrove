export function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-secondary-900">
      <div className="container-section">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="max-w-4xl mx-auto text-lg text-secondary-600 dark:text-secondary-300 space-y-6">
          <p>
            <strong>TechTrove</strong> is my personal portfolio platform — a space where 
            technology, creativity, and impact converge. It reflects my journey in 
            data science, deep learning, and applied research.
          </p>
          <p>
            I’ve contributed to <strong>OCR research (CRNN + CTC)</strong>, worked on 
            <strong> 6D Pose Estimation of Space Objects</strong>, and developed applied 
            pipelines like <strong>TLC plate detection</strong> using YOLO. Beyond research, 
            I build scalable apps like <strong>CoderKabila</strong> and survey platforms in 
            Flutter & Kotlin.
          </p>
          <p>
            Achievements include leading my team to victory at <strong>Skillathon</strong>, 
            interning in <strong>handwritten image-to-text translation</strong>, and 
            participating in ISRO’s <strong>IRoC 2024</strong>.
          </p>
          <p className="text-center font-medium">
            Explore my{" "}
            <a href="https://github.com/murtaza-sadri-19" target="_blank" className="text-primary-600 hover:underline">
              GitHub
            </a>{" "} or download my{" "}
            <a href="/resume.pdf" target="_blank" className="text-primary-600 hover:underline">
              Resume
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}