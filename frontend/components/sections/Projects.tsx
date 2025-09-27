export function Projects() {
  const projects = [
    {
      title: "OCR Research (CRNN + CTC)",
      desc: "Deep learning-based OCR pipeline for French and multilingual handwritten text recognition.",
      tags: ["TensorFlow", "CRNN", "CTC"],
      link: "https://github.com/murtaza-sadri-19/OCR-CRNN"
    },
    {
      title: "6D Pose Estimation of Space Objects",
      desc: "Research project on deep learning-based perception for space debris tracking.",
      tags: ["PyTorch", "Computer Vision", "Research"],
      link: "#"
    },
    {
      title: "TLC Image Processing Pipeline",
      desc: "Automated plate, strip, and spot detection using YOLO + OpenCV.",
      tags: ["YOLO", "OpenCV", "Python"],
      link: "#"
    },
    {
      title: "CoderKabila",
      desc: "Community-driven DSA practice tracker app with Firebase backend.",
      tags: ["Flutter", "Firebase", "DSA"],
      link: "#"
    },
    {
      title: "Health Survey & Analytics App",
      desc: "Kotlin + Firebase-based survey system for health and education policy planning.",
      tags: ["Kotlin", "Firebase", "Google Sheets API"],
      link: "https://github.com/murtaza-sadri-19/HealthSurveyAppAndroid"
    },
    {
      title: "Skillathon Absenteeism Project",
      desc: "Hackathon-winning project on absenteeism prediction and analysis.",
      tags: ["ML", "Analytics", "Hackathon"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary-50 dark:bg-secondary-800">
      <div className="container-section">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <div key={i} className="card hover:shadow-lg hover:scale-105 transition p-6 bg-white dark:bg-secondary-900 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4">{proj.title}</h3>
              <p className="text-secondary-600 dark:text-secondary-300 mb-4">{proj.desc}</p>
              <div className="flex gap-2 flex-wrap mb-4">
                {proj.tags.map((tag, j) => (
                  <span key={j} className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm">{tag}</span>
                ))}
              </div>
              <a href={proj.link} target="_blank" className="text-primary-600 hover:underline">View Project →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}