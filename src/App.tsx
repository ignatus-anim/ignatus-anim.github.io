import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Download, Server, Cloud, Container, GitBranch, Terminal, Database, Code, Globe, Smartphone, Lock, BarChart } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-white border-b border-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-50 mb-6">
              <span className="text-blue-600 text-2xl font-bold">IA</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-green-500 to-red-400 text-transparent bg-clip-text">Ignatus Anim</h1>
            <h2 className="text-2xl md:text-3xl mb-8 text-gray-700">Software Engineer & DevOps Engineer</h2>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="mailto:ignatusa3@gmail.com" className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors">
                <Mail size={16} /> ignatusa3@gmail.com
              </a>
              <a href="tel:+233545565863" className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-600 hover:bg-green-100 transition-colors">
                <Phone size={16} /> +233545565863
              </a>
              <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 text-gray-600">
                <MapPin size={16} /> Kumasi, Ghana
              </span>
              <a href="https://www.linkedin.com/in/ignatus-anim-688a071a0/.com" className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors">
                <Linkedin size={16} /> LinkedIn
              </a>
              <a href="https://github.com/ignatus-anim" className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 text-gray-600 hover:bg-gray-100 transition-colors">
                <Github size={16} /> GitHub
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto space-y-20">
          {/* Summary */}
          <section>
            <div className="flex items-center justify-center mb-8">
              <div className="h-1 w-16 bg-blue-400 rounded-full mr-4"></div>
              <h2 className="text-2xl font-bold text-gray-800">Professional Summary</h2>
              <div className="h-1 w-16 bg-blue-400 rounded-full ml-4"></div>
            </div>
            <p className="text-gray-700 leading-relaxed text-center max-w-3xl mx-auto text-lg">
              Software Engineer and DevOps Engineer with expertise in both software development and infrastructure management.
              Proficient in building web applications with Node.js and React, creating mobile apps with React Native, and implementing
              DevOps practices including CI/CD automation, cloud infrastructure, and container orchestration.
              Skilled in AWS, Terraform, Kubernetes, and Jenkins, with hands-on experience optimizing software 
              delivery pipelines and developing scalable applications.
            </p>
          </section>

          {/* Skills Grid */}
          <section>
            <div className="flex items-center justify-center mb-12">
              <div className="h-1 w-16 bg-green-400 rounded-full mr-4"></div>
              <h2 className="text-2xl font-bold text-gray-800">Core Technologies</h2>
              <div className="h-1 w-16 bg-green-400 rounded-full ml-4"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="skill-card group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="skill-icon backend-icon">
                    <Code size={20} />
                  </div>
                  <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">Backend Development</h3>
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
                  <h3 className="font-semibold">Containerization</h3>
                </div>
                <ul className="text-gray-600 space-y-2">
                  <li>Docker</li>
                  <li>Kubernetes (EKS)</li>
                  <li>Helm Charts</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <GitBranch className="text-blue-600" />
                  <h3 className="font-semibold">CI/CD & Version Control</h3>
                </div>
                <ul className="text-gray-600 space-y-2">
                  <li>Jenkins, GitHub Actions</li>
                  <li>ArgoCD, GitLab CI</li>
                  <li>Git, GitOps</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <Terminal className="text-blue-600" />
                  <h3 className="font-semibold">Scripting & Automation</h3>
                </div>
                <ul className="text-gray-600 space-y-2">
                  <li>Python (Advanced)</li>
                  <li>Bash, YAML, PowerShell</li>
                  <li>Ansible, Terraform</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <Database className="text-blue-600" />
                  <h3 className="font-semibold">Databases & Storage</h3>
                </div>
                <ul className="text-gray-600 space-y-2">
                  <li>PostgreSQL, MySQL</li>
                  <li>MongoDB, DynamoDB</li>
                  <li>Redis, S3</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <BarChart className="text-blue-600" />
                  <h3 className="font-semibold">Data Science & ML</h3>
                </div>
                <ul className="text-gray-600 space-y-2">
                  <li>TensorFlow, PyTorch</li>
                  <li>Computer Vision</li>
                  <li>Crop Disease Detection</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <Lock className="text-blue-600" />
                  <h3 className="font-semibold">Security & Compliance</h3>
                </div>
                <ul className="text-gray-600 space-y-2">
                  <li>IAM & Access Control</li>
                  <li>Security Best Practices</li>
                  <li>Compliance Frameworks</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Work Experience</h2>
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">Software Engineer & DevOps Engineer</h3>
                  <span className="text-gray-600">October 2024 – Present</span>
                </div>
                <h4 className="text-gray-700 mb-3">Amalitech | Kumasi, Ghana</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Developed and maintained web applications using Node.js, Express, and React</li>
                  <li>Built mobile applications with React Native for cross-platform deployment</li>
                  <li>Designed and implemented CI/CD pipelines using Jenkins & GitHub Actions</li>
                  <li>Automated AWS infrastructure provisioning with Terraform & CloudFormation</li>
                  <li>Managed Kubernetes clusters (EKS) for containerized applications</li>
                </ul>
              </div>
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">IT Technician (Internship)</h3>
                  <span className="text-gray-600">August 2023 – December 2023</span>
                </div>
                <h4 className="text-gray-700 mb-3">Samartex Timber & Plywood Company Limited</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Provided technical support for Linux-based systems and IT infrastructure</li>
                  <li>Assisted in network troubleshooting and server maintenance</li>
                  <li>Configured user access policies and security protocols</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education & Certifications */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Education & Certifications</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">BSc Computer Engineering, First Class</h3>
                <p className="text-gray-700">Kwame Nkrumah University of Science and Technology (KNUST), 2024</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Certifications</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>AWS Cloud Practitioner, AWS Academy Graduate (March 2025)</li>
                  <li>Kubernetes and Cloud Native Associate (KCNA), Linux Foundation (2024)</li>
                  <li>Networking Essentials, Cisco Skills for All (2024)</li>
                  <li>100 Days of Code: The Complete Python Pro Bootcamp, Udemy (2023)</li>
                  <li>The Complete Full-Stack Web Development Bootcamp, Udemy (2023)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Languages */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Languages</h2>
            <div className="flex gap-6">
              <div>
                <span className="font-semibold">English</span>
                <span className="text-gray-600 ml-2">Fluent</span>
              </div>
              <div>
                <span className="font-semibold">German</span>
                <span className="text-gray-600 ml-2">Basic</span>
              </div>
              <div>
                <span className="font-semibold">French</span>
                <span className="text-gray-600 ml-2">Basic</span>
              </div>
            </div>
          </section>
        </div>
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