import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Cloud, Container, GitBranch, Terminal, Database, Code, Globe, Smartphone, Lock, BarChart } from 'lucide-react';

type Tab = 'home' | 'about' | 'skills' | 'services' | 'contact';

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('home');

  const tabs = [
    { id: 'home' as Tab, label: 'Home' },
    { id: 'about' as Tab, label: 'About' },
    { id: 'skills' as Tab, label: 'Skills' },
    { id: 'services' as Tab, label: 'Services' },
    { id: 'contact' as Tab, label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = tabs.map(tab => document.getElementById(tab.id));
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveTab(tabs[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 fixed top-0 w-full z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <img 
                src="/profile_pic.jpg" 
                alt="Ignatus Anim" 
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="text-xl font-bold text-gray-800">Ignatus Anim</span>
            </div>
            
            {/* Tab Navigation */}
            <nav className="flex gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => scrollToSection(tab.id)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {/* Home Section */}
        <section id="home" className="min-h-screen flex items-center justify-center bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <img 
                src="/profile_pic.jpg" 
                alt="Ignatus Anim" 
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-blue-100"
              />
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-green-500 to-red-400 text-transparent bg-clip-text">Ignatus Anim</h1>
              <h2 className="text-2xl md:text-3xl mb-8 text-gray-700">Software Engineer & DevOps Engineer</h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                Passionate about building scalable applications and robust infrastructure. 
                Specializing in full-stack development and cloud technologies.
              </p>
              <div className="flex justify-center gap-4">
                <button 
                  onClick={() => scrollToSection('about')}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Learn More
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center bg-gray-50">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-5xl mx-auto space-y-12">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-6">About Me</h2>
                <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto text-lg">
                  Software Engineer and DevOps Engineer with expertise in both software development and infrastructure management.
                  Proficient in building web applications with Node.js and React, creating mobile apps with React Native, and implementing
                  DevOps practices including CI/CD automation, cloud infrastructure, and container orchestration.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Experience</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold">Software Engineer & DevOps Engineer</h4>
                      <p className="text-gray-600">Amalitech | Oct 2024 – Present</p>
                      <p className="text-sm text-gray-600 mt-1">Full-stack development and infrastructure automation</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">IT Technician (Internship)</h4>
                      <p className="text-gray-600">Samartex Timber & Plywood | Aug 2023 – Dec 2023</p>
                      <p className="text-sm text-gray-600 mt-1">Linux systems and network support</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Education</h3>
                  <div>
                    <h4 className="font-semibold">BSc Computer Engineering, First Class</h4>
                    <p className="text-gray-600">KNUST, 2024</p>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 mt-6">Languages</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>English</span>
                      <span className="text-gray-600">Fluent</span>
                    </div>
                    <div className="flex justify-between">
                      <span>German</span>
                      <span className="text-gray-600">Basic</span>
                    </div>
                    <div className="flex justify-between">
                      <span>French</span>
                      <span className="text-gray-600">Basic</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-screen flex items-center bg-white">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <Code className="text-blue-600" />
                    <h3 className="font-semibold">Backend Development</h3>
                  </div>
                  <ul className="text-gray-600 space-y-2">
                    <li>Node.js, Express.js</li>
                    <li>RESTful APIs, GraphQL</li>
                    <li>Authentication & Authorization</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <Globe className="text-blue-600" />
                    <h3 className="font-semibold">Frontend Development</h3>
                  </div>
                  <ul className="text-gray-600 space-y-2">
                    <li>React, Redux</li>
                    <li>TypeScript, JavaScript</li>
                    <li>HTML5, CSS3, Tailwind CSS</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <Smartphone className="text-blue-600" />
                    <h3 className="font-semibold">Mobile Development</h3>
                  </div>
                  <ul className="text-gray-600 space-y-2">
                    <li>React Native</li>
                    <li>Expo</li>
                    <li>Mobile UI/UX</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <Cloud className="text-blue-600" />
                    <h3 className="font-semibold">Cloud & Infrastructure</h3>
                  </div>
                  <ul className="text-gray-600 space-y-2">
                    <li>AWS (ECS, EKS, Lambda)</li>
                    <li>GCP, Azure</li>
                    <li>Terraform, CloudFormation</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <Container className="text-blue-600" />
                    <h3 className="font-semibold">DevOps & Automation</h3>
                  </div>
                  <ul className="text-gray-600 space-y-2">
                    <li>Docker, Kubernetes</li>
                    <li>Jenkins, GitHub Actions</li>
                    <li>Python, Bash</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <Database className="text-blue-600" />
                    <h3 className="font-semibold">Databases</h3>
                  </div>
                  <ul className="text-gray-600 space-y-2">
                    <li>PostgreSQL, MySQL</li>
                    <li>MongoDB, DynamoDB</li>
                    <li>Redis, S3</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="min-h-screen flex items-center bg-gray-50">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Services</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                  <Globe className="text-blue-600 mb-4" size={32} />
                  <h3 className="text-xl font-semibold mb-4">Web Development</h3>
                  <p className="text-gray-600 mb-4">
                    Full-stack web applications using modern technologies like React, Node.js, and cloud services.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Responsive web applications</li>
                    <li>• RESTful API development</li>
                    <li>• Database design & optimization</li>
                  </ul>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                  <Smartphone className="text-blue-600 mb-4" size={32} />
                  <h3 className="text-xl font-semibold mb-4">Mobile Development</h3>
                  <p className="text-gray-600 mb-4">
                    Cross-platform mobile applications using React Native for iOS and Android.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Cross-platform development</li>
                    <li>• Native performance optimization</li>
                    <li>• App store deployment</li>
                  </ul>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                  <Cloud className="text-blue-600 mb-4" size={32} />
                  <h3 className="text-xl font-semibold mb-4">Cloud Infrastructure</h3>
                  <p className="text-gray-600 mb-4">
                    AWS cloud infrastructure setup, automation, and optimization for scalable applications.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Infrastructure as Code</li>
                    <li>• Auto-scaling & load balancing</li>
                    <li>• Cost optimization</li>
                  </ul>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                  <GitBranch className="text-blue-600 mb-4" size={32} />
                  <h3 className="text-xl font-semibold mb-4">DevOps & CI/CD</h3>
                  <p className="text-gray-600 mb-4">
                    Automated deployment pipelines, containerization, and infrastructure monitoring.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• CI/CD pipeline setup</li>
                    <li>• Docker & Kubernetes</li>
                    <li>• Monitoring & logging</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen flex items-center bg-white">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Mail className="text-blue-600" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:ignatusa3@gmail.com" className="text-blue-600 hover:underline">
                        ignatusa3@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Phone className="text-blue-600" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a href="tel:+233545565863" className="text-blue-600 hover:underline">
                        +233545565863
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <MapPin className="text-blue-600" />
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-gray-600">Kumasi, Ghana</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Linkedin className="text-blue-600" />
                    <div>
                      <p className="font-semibold">LinkedIn</p>
                      <a href="https://www.linkedin.com/in/ignatus-anim-688a071a0/" target="_blank" className="text-blue-600 hover:underline">
                        Connect with me
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Github className="text-blue-600" />
                    <div>
                      <p className="font-semibold">GitHub</p>
                      <a href="https://github.com/ignatus-anim" target="_blank" className="text-blue-600 hover:underline">
                        View my projects
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2025 Ignatus Anim. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;