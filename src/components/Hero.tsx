
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 pb-32 px-4"
    >
      <div className="max-w-7xl mx-auto text-center">
        <div className="space-y-8 animate-fade-up">
          <div className="inline-block">
            <span className="inline-flex animate-fade-in items-center px-4 py-2 text-sm font-medium rounded-full bg-primary/10 text-primary">
              Available for opportunities
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold">
            Hi, I'm{" "}
            <span className="text-gradient">Neeraj Randhir Singh Saini</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Full-Stack Developer & Cloud Enthusiast
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors duration-200"
            >
              View My Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center px-6 py-3 rounded-full glass-card hover:bg-primary/5 transition-colors duration-200"
            >
              About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
