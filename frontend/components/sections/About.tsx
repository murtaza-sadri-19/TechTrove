export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container-section">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient">About Me</h2>
        <div className="max-w-4xl mx-auto text-lg text-muted-foreground space-y-6">
          <p>
            <strong className="text-foreground">TechTrove</strong> is my personal portfolio platform — a space where 
            technology, creativity, and impact converge. It reflects my journey in 
            data science, deep learning, and applied research.
          </p>
          <p>
            I've contributed to <strong className="text-foreground">OCR research (CRNN + CTC)</strong>, worked on 
            <strong className="text-foreground"> 6D Pose Estimation of Space Objects</strong>, and developed applied 
            pipelines like <strong className="text-foreground">TLC plate detection</strong> using YOLO. Beyond research, 
            I build scalable apps like <strong className="text-foreground">CoderKabila</strong> and survey platforms in 
            Flutter & Kotlin.
          </p>
          <p>
            Achievements include leading my team to victory at <strong className="text-foreground">Skillathon</strong>, 
            interning in <strong className="text-foreground">handwritten image-to-text translation</strong>, and 
            participating in ISRO's <strong className="text-foreground">IRoC 2024</strong>.
          </p>
          <p className="text-center font-medium">
            Explore my{" "}
            <a href="https://github.com/murtaza-sadri-19" target="_blank" className="text-primary hover:underline" data-testid="link-github">
              GitHub
            </a>{" "} or download my{" "}
            <a href="/resume.pdf" target="_blank" className="text-primary hover:underline" data-testid="link-resume">
              Resume
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}