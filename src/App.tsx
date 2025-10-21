import { Home, User, Briefcase, Mail, Github, Linkedin, ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'work', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-white">Ian Michael Robles</h1>
            <div className="flex gap-6">
              {[
                { id: 'home', icon: Home, label: 'Home' },
                { id: 'about', icon: User, label: 'About' },
                { id: 'work', icon: Briefcase, label: 'Work' },
                { id: 'contact', icon: Mail, label: 'Contact' }
              ].map(({ id, icon: Icon, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    activeSection === id
                      ? 'bg-cyan-500 text-white'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <Icon size={18} />
                  <span className="hidden sm:inline">{label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-6xl w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                  Hi, I'm
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                    Ian Michael Robles
                  </span>
                </h2>
                <p className="text-xl text-slate-300">
                  Creative Developer & Designer
                </p>
                <p className="text-slate-400 text-lg">
                  Crafting beautiful digital experiences with passion and precision
                </p>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-all transform hover:scale-105 font-medium"
                >
                  Get in Touch
                </button>
                <button
                  onClick={() => scrollToSection('work')}
                  className="px-8 py-3 border border-slate-600 text-slate-300 rounded-lg hover:bg-slate-800 hover:border-slate-500 transition-all font-medium"
                >
                  View Work
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                <img
                  src="/470050592_1257218225546493_5097316974441673586_n.jpg"
                  alt="Ian Michael Robles"
                  className="relative w-80 h-80 object-cover rounded-full border-4 border-slate-700 shadow-2xl"
                />
              </div>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="text-slate-400" size={32} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl w-full">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-8 md:p-12 border border-slate-700/50 shadow-xl">
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              I'm a passionate developer and designer dedicated to creating exceptional digital experiences.
              With a keen eye for detail and a love for clean, efficient code, I bring ideas to life through
              innovative solutions and thoughtful design.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              My journey in technology is driven by curiosity and a commitment to continuous learning.
              I believe in the power of technology to solve real-world problems and create meaningful
              impact in people's lives.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { label: 'Development', value: 'Full Stack' },
                { label: 'Design', value: 'UI/UX' },
                { label: 'Focus', value: 'Innovation' }
              ].map((item, index) => (
                <div key={index} className="bg-slate-900/50 rounded-xl p-6 text-center border border-slate-700/30">
                  <p className="text-slate-400 text-sm mb-2">{item.label}</p>
                  <p className="text-white font-semibold text-lg">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">My Work</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-4"></div>
            <p className="text-slate-400 text-lg">Projects that showcase my skills and creativity</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'E-Commerce Platform',
                description: 'Modern shopping experience with seamless checkout',
                tech: ['React', 'Node.js', 'Stripe'],
                image: '/470050592_1257218225546493_5097316974441673586_n.jpg'
              },
              {
                title: 'Portfolio Website',
                description: 'Clean and professional portfolio design',
                tech: ['React', 'Tailwind', 'Vite']
              },
              {
                title: 'Task Management App',
                description: 'Organize and track tasks efficiently',
                tech: ['TypeScript', 'Supabase', 'React']
              },
              {
                title: 'Social Media Dashboard',
                description: 'Analytics and insights at your fingertips',
                tech: ['React', 'Chart.js', 'API']
              },
              {
                title: 'Landing Page Design',
                description: 'Conversion-focused landing pages',
                tech: ['HTML', 'CSS', 'JavaScript']
              },
              {
                title: 'Mobile App UI',
                description: 'Beautiful and intuitive mobile interfaces',
                tech: ['Figma', 'React Native', 'Design']
              }
            ].map((project, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all hover:transform hover:scale-105 cursor-pointer group"
              >
                {project.image ? (
                  <div className="w-full h-40 rounded-lg mb-4 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <div className="w-full h-40 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg mb-4 flex items-center justify-center group-hover:from-cyan-600 group-hover:to-blue-600 transition-all">
                    <Briefcase size={48} className="text-slate-600 group-hover:text-white transition-colors" />
                  </div>
                )}
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-900/50 text-cyan-400 text-sm rounded-full border border-slate-700"
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

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl w-full">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-4"></div>
            <p className="text-slate-400 text-lg">Let's create something amazing together</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-8 md:p-12 border border-slate-700/50 shadow-xl">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-300 mb-2 font-medium">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-slate-300 mb-2 font-medium">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label className="block text-slate-300 mb-2 font-medium">Message</label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all transform hover:scale-105 font-medium text-lg shadow-lg"
              >
                Send Message
              </button>
            </form>
            <div className="mt-8 pt-8 border-t border-slate-700">
              <div className="flex justify-center gap-6">
                <a
                  href="#"
                  className="w-12 h-12 bg-slate-900/50 border border-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500 transition-all"
                >
                  <Github size={24} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-slate-900/50 border border-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500 transition-all"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-slate-900/50 border border-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500 transition-all"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/50 border-t border-slate-800 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-slate-400">
            © 2025 Ian Michael Robles. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
