
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Software Developer Engineer",
    company: "Reliance Jio Platforms Limited",
    location: "Mumbai, India",
    period: "Nov 2023 - Aug 2024",
    achievements: [
      "Designed and deployed 20+ scalable microservices for an HR Workflow Management System using Spring Boot, MySQL, and Kafka, increasing scalability by 30% and enabling real-time data streaming.",
      "Improved CI/CD deployment pipelines with Jenkins, Kubernetes, and Azure Cloud, reducing deployment time by 25%.",
      "Developed and integrated a React.js frontend with a robust backend, optimizing API communication and enhancing user interactions.",
      "Increased testing coverage by 35% and reduced defect rates by 20% using JUnit, Postman, and complex MySQL query optimizations.",
    ],
  },
  {
    title: "Java Intern",
    company: "The Entrepreneurship Network",
    location: "India",
    period: "Feb 2022 - Jun 2022",
    achievements: [
      "Designed and built a scalable inventory management system using Spring Boot, MySQL, and React, reducing operational errors by 20%.",
      "Enhanced system performance by 30% with SonarQube and IntelliJ IDEA while improving automation & reliability through JMeter load testing, CI/CD integration, and Postman API testing.",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen py-20 px-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />
      <div className="max-w-4xl mx-auto space-y-8 relative">
        <h2 className="section-title text-center">Work Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="glass-card p-8 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row justify-between mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-gradient">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-primary mt-1">{exp.company}</p>
                </div>
                <div className="flex flex-col items-start md:items-end text-foreground/70 mt-2 md:mt-0">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                {exp.achievements.map((achievement, achievementIndex) => (
                  <li key={achievementIndex} className="leading-relaxed">
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
