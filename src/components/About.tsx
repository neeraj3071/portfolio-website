import { GraduationCap, Briefcase, Award, Database } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen py-20 px-4 relative overflow-hidden bg-gradient-to-b from-background to-background/50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold text-gradient">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I am an innovative and dedicated software developer, passionate about creating scalable and
            efficient solutions that make a real impact. Currently pursuing my Master's degree, I combine
            academic excellence with practical industry experience to deliver high-quality software solutions.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="glass-card p-8 space-y-6">
            <div className="flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-medium">Master of Science in Computer and Information Science</h4>
                <p className="text-muted-foreground">University of Michigan, Dearborn</p>
                <p className="text-primary font-medium">GPA: 3.9</p>
              </div>
              <div>
                <h4 className="text-xl font-medium">Bachelor of Engineering in Computer Engineering</h4>
                <p className="text-muted-foreground">Pimpri Chinchwad College of Engineering and Research</p>
                <p className="text-primary font-medium">GPA: 3.7</p>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 space-y-6">
            <div className="flex items-center gap-3">
              <Briefcase className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-semibold">Professional Experience</h3>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-medium">Software Developer Engineer</h4>
                <p className="text-muted-foreground">Reliance Jio Platforms Limited</p>
                <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                  <li>Designed and deployed 20+ scalable microservices</li>
                  <li>Enhanced CI/CD pipelines for improved deployment efficiency</li>
                  <li>Implemented comprehensive testing processes</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-medium">Software Development Intern</h4>
                <p className="text-muted-foreground">The Entrepreneurship Network</p>
                <p className="text-muted-foreground mt-2">Developed a scalable inventory management system</p>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 space-y-6">
            <div className="flex items-center gap-3">
              <Database className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-semibold">Technical Expertise</h3>
            </div>
            <div className="grid gap-6">
              <div>
                <h4 className="font-medium mb-2">Programming Languages</h4>
                <p className="text-muted-foreground">Java, Python, C++, JavaScript, TypeScript</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Frameworks & Technologies</h4>
                <p className="text-muted-foreground">Spring Boot, React.js, Node.js</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Cloud Platforms</h4>
                <p className="text-muted-foreground">AWS, Azure</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Other Skills</h4>
                <p className="text-muted-foreground">Microservices, Machine Learning, CI/CD</p>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 space-y-6">
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-semibold">Achievements</h3>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Certificate of Appreciation for Innovation at Jio</li>
              <li>• Consistently maintained high academic performance</li>
              <li>• Successfully led multiple cross-functional team projects</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;