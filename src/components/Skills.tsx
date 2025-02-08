
const skillCategories = [
  {
    title: "Programming Languages",
    icon: "🔧",
    skills: [
      "Java",
      "Python",
      "C++",
      "ASP.NET",
      "C#",
      ".NET Core",
      "XML/YAML/JSON",
    ],
  },
  {
    title: "Web Development",
    icon: "🌐",
    skills: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
  },
  {
    title: "Frameworks & Libraries",
    icon: "📚",
    skills: [
      "Spring Boot",
      "React.js",
      "Node.js",
      "Angular",
      "React Native",
      "TensorFlow",
      "Keras",
      "Flask",
    ],
  },
  {
    title: "Machine Learning",
    icon: "🤖",
    skills: [
      "CNNs",
      "NLP",
      "GenAI",
      "LLMs",
      "Feature Extraction",
      "NumPy",
      "Pandas",
    ],
  },
  {
    title: "Tools & Platforms",
    icon: "🛠",
    skills: [
      "Git",
      "Docker",
      "Kubernetes",
      "Apache Kafka",
      "Jira",
      "Linux",
      "Postman",
    ],
  },
  {
    title: "Databases & Cloud",
    icon: "☁️",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Azure", "AWS"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center">Technical Skills</h2>
        <p className="section-subtitle text-center">
          A comprehensive overview of my technical expertise and professional capabilities
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="skill-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-xl font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 text-sm glass-card text-foreground/80 rounded-full"
                  >
                    {skill}
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

export default Skills;
