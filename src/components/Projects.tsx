import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Aura Sense - Gender and Mood Recognizer System",
    description:
      "Advanced machine learning project for real-time gender classification and mood detection. Integrates computer vision and hybrid ML models for enhanced human-computer interaction.",
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "Flask"],
    link: "#",
  },
  {
    title: "DVD Rental Database Project",
    description:
      "Database system design and optimization project with performance benchmarking and query optimization strategies.",
    technologies: ["PostgreSQL", "SQL", "ER Modeling", "ACID Transactions"],
    link: "#",
  },
  {
    title: "Chord Recognition System",
    description:
      "ML-based system for identifying guitar chords in audio files, achieving 97% accuracy with SVM (RBF kernel).",
    technologies: ["Python", "SVM", "KNN", "Decision Tree", "AdaBoost"],
    link: "#",
  },
  {
    title: "AI Chatbot Web Application",
    description:
      "Full-stack AI chatbot application automating 80% of customer query handling with optimized deployment.",
    technologies: ["Java", "React.js", "Spring Boot", "Docker", "Gemini API"],
    link: "#",
  },
  {
    title: "Cloud-Based Online Bookstore",
    description:
      "Scalable cloud-based bookstore with seamless CRUD operations and AWS architecture achieving 99.9% uptime.",
    technologies: ["Spring Boot", "React.js", "AWS (RDS, EC2, ALB, S3)"],
    link: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen py-20 px-4 bg-gradient-to-b from-background to-background/50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        <h2 className="section-title text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass-card hover:scale-[1.02] transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <a
                  href={project.link}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <ArrowUpRight className="h-5 w-5" />
                </a>
              </div>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-sm bg-primary/10 dark:bg-primary/20 text-primary rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;