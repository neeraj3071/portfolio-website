
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-20 px-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto relative">
        <h2 className="section-title text-center">Contact Me</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="space-y-8">
            <div className="glass-card p-8">
              <p className="text-lg text-foreground/80">
                Feel free to reach out! I'm always open to discussing new projects,
                creative ideas, or opportunities to be part of your visions.
              </p>
              <div className="space-y-4 mt-8">
                <div className="flex items-center gap-3 text-foreground/80">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Dearborn, Michigan, USA</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/80">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+1 313-674-7597</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/80">
                  <Mail className="h-5 w-5 text-primary" />
                  <a
                    href="mailto:neerajsa@umich.edu"
                    className="hover:text-primary transition-colors"
                  >
                    neerajsa@umich.edu
                  </a>
                </div>
              </div>
              <div className="flex gap-4 mt-8">
                <a
                  href="https://github.com/neeraj3071"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://linkedin.com/in/neerajsaini07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="glass-card p-8">
            <div className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/50 dark:bg-gray-800/50 border border-white/20 dark:border-gray-700/20 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/50 dark:bg-gray-800/50 border border-white/20 dark:border-gray-700/20 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/50 dark:bg-gray-800/50 border border-white/20 dark:border-gray-700/20 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-white/50 dark:bg-gray-800/50 border border-white/20 dark:border-gray-700/20 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
