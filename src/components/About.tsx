
const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen py-20 px-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      <div className="max-w-4xl mx-auto space-y-8 relative">
        <h2 className="section-title text-center">About Me</h2>
        <div className="space-y-6 text-lg text-foreground/80">
          <div className="glass-card p-8 animate-fade-up">
            <p>
              I am a passionate software developer pursuing a Master of Science in
              Computer and Information Science at the University of Michigan,
              Dearborn, with a GPA of 3.9. My journey in technology began with a
              Bachelor of Engineering in Computer Engineering from Pimpri Chinchwad
              College of Engineering and Research, where I maintained a GPA of 3.7.
            </p>
          </div>
          <div className="glass-card p-8 animate-fade-up delay-100">
            <p>
              Throughout my academic and professional journey, I have developed strong
              expertise in full-stack development, microservices architecture, and
              cloud technologies. My technical proficiency spans across multiple
              programming languages and frameworks, enabling me to create robust and
              scalable solutions.
            </p>
          </div>
          <div className="glass-card p-8 animate-fade-up delay-200">
            <p>
              At Reliance Jio Platforms Limited, I had the opportunity to design and
              deploy over 20 scalable microservices, integrate CI/CD pipelines, and
              enhance testing processes. This experience, combined with my internship
              at The Entrepreneurship Network where I developed a scalable inventory
              management system, has strengthened my problem-solving abilities and
              practical knowledge.
            </p>
          </div>
          <div className="glass-card p-8 animate-fade-up delay-300">
            <p>
              I am particularly proud of receiving the Certificate of Appreciation for
              Innovation at Jio, which reflects my commitment to pushing boundaries
              and creating innovative solutions. I am constantly learning and staying
              updated with the latest technologies to deliver efficient and
              cutting-edge software solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
