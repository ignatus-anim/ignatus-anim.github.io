import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Cloud, Container, GitBranch, Terminal, Database, Code, Lock, BarChart, Monitor, Settings, FileText, Download } from 'lucide-react';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

type Tab = 'home' | 'about' | 'skills' | 'experience' | 'education' | 'services' | 'contact';

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  
  const generateCV = () => {
    // @ts-ignore - jsPDF types
    const doc = new jsPDF();
    
    // Add title
    doc.setFontSize(20);
    doc.setTextColor(0, 51, 102);
    doc.text('Ignatus Anim', 105, 20, { align: 'center' });
    
    // Add subtitle
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text('DevOps Engineer & Cloud Specialist', 105, 28, { align: 'center' });
    
    // Add contact info
    doc.setFontSize(10);
    doc.text('ignatusa3@gmail.com | +233545565863 | Kumasi, Ghana', 105, 35, { align: 'center' });
    doc.text('linkedin.com/in/ignatus-anim-688a071a0 | github.com/ignatus-anim', 105, 40, { align: 'center' });
    
    // Professional Statement
    doc.setFontSize(12);
    doc.setTextColor(0, 51, 102);
    doc.text('Professional Statement', 20, 50);
    doc.setDrawColor(0, 51, 102);
    doc.line(20, 52, 190, 52);
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.text('Passionate about building robust infrastructure and automating deployment pipelines.', 20, 58);
    doc.text('Specializing in cloud technologies, containerization, and CI/CD automation.', 20, 64);
    
    // Work Experience
    doc.setFontSize(12);
    doc.setTextColor(0, 51, 102);
    doc.text('Work Experience', 20, 74);
    doc.setDrawColor(0, 51, 102);
    doc.line(20, 76, 190, 76);
    
    // Job 1
    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
    doc.text('DevOps Engineer', 20, 82);
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text('Amalitech | October 2024 - Present', 20, 87);
    doc.setTextColor(0, 0, 0);
    doc.text('• Designed and implemented CI/CD pipelines using Jenkins and GitHub Actions', 25, 93);
    doc.text('• Managed AWS infrastructure using Terraform, ensuring infrastructure as code best practices', 25, 98);
    doc.text('• Implemented container security scanning and vulnerability management', 25, 103);
    doc.text('• Set up comprehensive monitoring using Prometheus and Grafana', 25, 108);
    
    // Job 2
    doc.setFontSize(11);
    doc.text('IT Technician (Internship)', 20, 115);
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text('Samartex Timber & Plywood | August 2023 - December 2023', 20, 120);
    doc.setTextColor(0, 0, 0);
    doc.text('• Managed and maintained Linux servers, ensuring high availability and security', 25, 126);
    doc.text('• Implemented network monitoring solutions to improve system reliability', 25, 131);
    doc.text('• Automated routine maintenance tasks using Bash scripting', 25, 136);
    
    // Education
    doc.setFontSize(12);
    doc.setTextColor(0, 51, 102);
    doc.text('Education', 20, 146);
    doc.setDrawColor(0, 51, 102);
    doc.line(20, 148, 190, 148);
    
    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
    doc.text('BSc Computer Engineering, First Class', 20, 154);
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text('Kwame Nkrumah University of Science and Technology (KNUST) | 2020 - 2024', 20, 159);
    
    // Certifications
    doc.setFontSize(12);
    doc.setTextColor(0, 51, 102);
    doc.text('Certifications', 20, 169);
    doc.setDrawColor(0, 51, 102);
    doc.line(20, 171, 190, 171);
    
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.text('• AWS Certified Cloud Practitioner | Amazon Web Services | March 2025', 20, 177);
    doc.text('• Certified Kubernetes Administrator | Cloud Native Computing Foundation | August 2023', 20, 182);
    
    // Skills
    doc.setFontSize(12);
    doc.setTextColor(0, 51, 102);
    doc.text('Technical Skills', 20, 192);
    doc.setDrawColor(0, 51, 102);
    doc.line(20, 194, 190, 194);
    
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.text('• Cloud: AWS, GCP, Azure, Lambda, EC2, EKS', 20, 200);
    doc.text('• Containerization: Docker, Kubernetes, Helm', 20, 205);
    doc.text('• CI/CD: Jenkins, GitHub Actions, GitLab CI', 20, 210);
    doc.text('• IaC: Terraform, CloudFormation, Ansible', 20, 215);
    doc.text('• Monitoring: Prometheus, Grafana, ELK Stack', 20, 220);
    doc.text('• Languages: Python, Bash', 20, 225);
    
    // Languages
    doc.setFontSize(12);
    doc.setTextColor(0, 51, 102);
    doc.text('Languages', 20, 235);
    doc.setDrawColor(0, 51, 102);
    doc.line(20, 237, 190, 237);
    
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.text('English (Fluent), German (Basic), French (Basic)', 20, 243);
    
    // Save the PDF
    doc.save('Ignatus_Anim_CV.pdf');
  };

  const tabs = [
    { id: 'home' as Tab, label: 'Home' },
    { id: 'about' as Tab, label: 'About' },
    { id: 'skills' as Tab, label: 'Skills' },
    { id: 'experience' as Tab, label: 'Experience' },
    { id: 'education' as Tab, label: 'Education' },
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
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              {/* Enhanced Profile Image */}
              <div className="mb-8">
                <div className="relative inline-block">
                  <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-white shadow-2xl">
                    <img 
                      src="/profile_pic.jpg" 
                      alt="Ignatus Anim" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white"></div>
                </div>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Ignatus Anim</h1>
              <h2 className="text-2xl md:text-3xl mb-8 text-gray-700">DevOps Engineer & Cloud Specialist</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                Passionate about building robust infrastructure and automating deployment pipelines. 
                Specializing in cloud technologies, containerization, and CI/CD automation.
              </p>
              <div className="flex justify-center gap-4">
                <button 
                  onClick={() => scrollToSection('about')}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Learn More
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  Get In Touch
                </button>
                <button 
                  onClick={generateCV}
                  className="px-8 py-3 flex items-center justify-center gap-2 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  <FileText size={18} />
                  Get CV
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-indigo-50">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-5xl mx-auto space-y-12">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-6">About Me</h2>
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 max-w-4xl mx-auto">
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    I'm a passionate DevOps Engineer who thrives on transforming complex infrastructure challenges into elegant, automated solutions. 
                    With expertise in cloud technologies and modern deployment practices, I help organizations scale efficiently while maintaining reliability. 
                    My mission is to bridge the gap between development and operations, creating seamless workflows that accelerate innovation. 
                    I believe in the power of automation to eliminate repetitive tasks and reduce human error, allowing teams to focus on what truly matters.
                  </p>
                  
                  {/* Key Skills Highlight */}
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-6">
                    <h3 className="text-lg font-semibold mb-3 text-center">Core Expertise</h3>
                    <div className="flex flex-wrap justify-center gap-3">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">AWS</span>
                      <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">Kubernetes</span>
                      <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">Terraform</span>
                      <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">CI/CD</span>
                      <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">Docker</span>
                      <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">Jenkins</span>
                      <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium">Monitoring</span>
                    </div>
                  </div>
                  
                  {/* Fun Facts */}
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 text-center">Fun Facts</h3>
                    <div className="space-y-2 text-gray-700">
                      <p className="flex items-center justify-center gap-2">
                        <span>☕</span> I automate everything, even my coffee brewing schedule!
                      </p>
                      <p className="flex items-center justify-center gap-2">
                        <span>🚀</span> I've deployed over 100+ applications to production without breaking a sweat
                      </p>
                      <p className="flex items-center justify-center gap-2">
                        <span>🔧</span> My favorite debugging tool? A good night's sleep and fresh perspective
                      </p>
                      <p className="flex items-center justify-center gap-2">
                        <span>📚</span> Always learning - currently exploring GitOps and service mesh technologies
                      </p>
                      <p className="flex items-center justify-center gap-2">
                        <span>🔒</span> Security conscious and always following industry best practices
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* About content */}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">Technical Skills</h2>
              <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                Expertise in modern DevOps tools and cloud technologies
              </p>
              
              {/* Technology Icons Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                <div className="group bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="flex flex-col items-center">
                    <img src="/assets/aws.svg" alt="AWS" className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-gray-700">AWS</span>
                  </div>
                </div>
                <div className="group bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="flex flex-col items-center">
                    <img src="/assets/gcp.svg" alt="Google Cloud" className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-gray-700">GCP</span>
                  </div>
                </div>
                <div className="group bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="flex flex-col items-center">
                    <img src="/assets/azure.svg" alt="Azure" className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-gray-700">Azure</span>
                  </div>
                </div>
                <div className="group bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="flex flex-col items-center">
                    <img src="/assets/docker.svg" alt="Docker" className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-gray-700">Docker</span>
                  </div>
                </div>
                <div className="group bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="flex flex-col items-center">
                    <img src="/assets/kubernetes.svg" alt="Kubernetes" className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-gray-700">Kubernetes</span>
                  </div>
                </div>
                <div className="group bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="flex flex-col items-center">
                    <img src="/assets/terraform.svg" alt="Terraform" className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-gray-700">Terraform</span>
                  </div>
                </div>
                <div className="group bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="flex flex-col items-center">
                    <img src="/assets/jenkins.svg" alt="Jenkins" className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-gray-700">Jenkins</span>
                  </div>
                </div>
                <div className="group bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="flex flex-col items-center">
                    <img src="/assets/github.svg" alt="GitHub" className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-gray-700">GitHub</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Cloud className="text-blue-600" />
                    </div>
                    <h3 className="font-semibold">Cloud Platforms</h3>
                  </div>
                  <ul className="text-gray-600 space-y-2">
                    <li>• AWS (ECS, EKS, Lambda, EC2)</li>
                    <li>• Google Cloud Platform</li>
                    <li>• Microsoft Azure</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Container className="text-purple-600" />
                    </div>
                    <h3 className="font-semibold">Containerization</h3>
                  </div>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Docker, Docker Compose</li>
                    <li>• Kubernetes, Helm</li>
                    <li>• Container Registry Management</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <GitBranch className="text-green-600" />
                    </div>
                    <h3 className="font-semibold">CI/CD & Automation</h3>
                  </div>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Jenkins, GitHub Actions</li>
                    <li>• GitLab CI, Azure DevOps</li>
                    <li>• Pipeline Automation</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <Settings className="text-orange-600" />
                    </div>
                    <h3 className="font-semibold">Infrastructure as Code</h3>
                  </div>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Terraform, Terragrunt</li>
                    <li>• AWS CloudFormation</li>
                    <li>• Ansible, Puppet</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-red-100 rounded-lg">
                      <Monitor className="text-red-600" />
                    </div>
                    <h3 className="font-semibold">Monitoring & Logging</h3>
                  </div>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Prometheus, Grafana</li>
                    <li>• ELK Stack, Splunk</li>
                    <li>• CloudWatch, DataDog</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-indigo-100 rounded-lg">
                      <Code className="text-indigo-600" />
                    </div>
                    <h3 className="font-semibold">Backend Development</h3>
                  </div>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Python, Bash Scripting</li>
                    <li>• Linux System Administration</li>
                    <li>• Network Configuration</li>
                  </ul>
                </div>
              </div>
              
              {/* Other Skills Section */}
              <div className="mt-16">
                <h3 className="text-2xl font-bold text-center mb-8">Other Skills</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <div className="flex items-center gap-3 mb-4">
                      <Code className="text-green-600" />
                      <h4 className="font-semibold">System Administration</h4>
                    </div>
                    <ul className="text-gray-600 space-y-2">
                      <li>Python, Bash Scripting</li>
                      <li>Linux System Administration</li>
                      <li>Network Configuration</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <div className="flex items-center gap-3 mb-4">
                      <Database className="text-green-600" />
                      <h4 className="font-semibold">Database Management</h4>
                    </div>
                    <ul className="text-gray-600 space-y-2">
                      <li>PostgreSQL, MySQL</li>
                      <li>MongoDB, DynamoDB</li>
                      <li>Redis, Database Optimization</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="min-h-screen flex items-center bg-white">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">Professional Experience</h2>
              <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                My journey in DevOps and cloud infrastructure
              </p>
              
              <div className="space-y-12">
                {/* Job 1 */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-sm border border-blue-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold">DevOps Engineer</h3>
                      <p className="text-blue-600 font-medium">Amalitech</p>
                    </div>
                    <p className="text-gray-600 mt-2 md:mt-0">October 2024 - Present</p>
                  </div>
                  <p className="text-gray-700 mb-6">
                    Leading infrastructure automation and cloud deployment initiatives, focusing on scalable and secure solutions.
                  </p>
                  <div className="space-y-3">
                    <p className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      Designed and implemented CI/CD pipelines using Jenkins and GitHub Actions, reducing deployment time by 40%
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      Managed AWS infrastructure using Terraform, ensuring infrastructure as code best practices
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      Implemented container security scanning and vulnerability management across the deployment pipeline
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      Set up comprehensive monitoring using Prometheus and Grafana for real-time system observability
                    </p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">AWS</span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Terraform</span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Jenkins</span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Docker</span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Kubernetes</span>
                  </div>
                </div>
                
                {/* Job 2 */}
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl shadow-sm border border-green-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold">IT Technician (Internship)</h3>
                      <p className="text-green-600 font-medium">Samartex Timber & Plywood</p>
                    </div>
                    <p className="text-gray-600 mt-2 md:mt-0">August 2023 - December 2023</p>
                  </div>
                  <p className="text-gray-700 mb-6">
                    Provided technical support and maintained Linux systems and network infrastructure.
                  </p>
                  <div className="space-y-3">
                    <p className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">•</span>
                      Managed and maintained Linux servers, ensuring high availability and security
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">•</span>
                      Implemented network monitoring solutions to improve system reliability
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">•</span>
                      Automated routine maintenance tasks using Bash scripting
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">•</span>
                      Provided technical support and troubleshooting for company staff
                    </p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Linux</span>
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Bash</span>
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Networking</span>
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Troubleshooting</span>
                  </div>
                </div>
                
                {/* Projects Section */}
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl shadow-sm border border-purple-200 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-bold mb-6">Notable Projects</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-purple-700">Disaster Recovery using Pilot Light Strategy</h4>
                      <p className="text-gray-700 mt-2">
                        Implemented a disaster recovery solution using AWS Pilot Light architecture to ensure business continuity
                        with minimal downtime and data loss during regional outages.
                      </p>
                      <a href="https://github.com/ignatus-anim/nebula-pilot-light-disaster-recovery" target="_blank" className="text-blue-600 hover:underline text-sm mt-1 inline-block">
                        View on GitHub
                      </a>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-purple-700">Serverless Task Management Application</h4>
                      <p className="text-gray-700 mt-2">
                        Developed a serverless application using AWS Lambda, API Gateway, DynamoDB, and SES for efficient
                        task management with automated notifications and scalable backend.
                      </p>
                      <a href="https://github.com/ignatus-anim/taskflow-frontend" target="_blank" className="text-blue-600 hover:underline text-sm mt-1 inline-block">
                        View on GitHub
                      </a>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-purple-700">Microservices Deployment using EKS</h4>
                      <p className="text-gray-700 mt-2">
                        Architected and deployed a microservices-based application on Amazon EKS, implementing service discovery,
                        load balancing, and auto-scaling for improved reliability and performance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="min-h-screen flex items-center bg-gradient-to-br from-indigo-50 to-purple-50">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">Education</h2>
              <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                My academic journey and qualifications
              </p>
              
              <div className="space-y-8">
                {/* Formal Education */}
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-bold mb-6">Formal Education</h3>
                  
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/4 flex justify-center">
                        <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 text-3xl font-bold">BSc</span>
                        </div>
                      </div>
                      <div className="md:w-3/4">
                        <h4 className="text-lg font-semibold">BSc Computer Engineering, First Class</h4>
                        <p className="text-blue-600">Kwame Nkrumah University of Science and Technology (KNUST)</p>
                        <p className="text-gray-600 mt-1">2020 - 2024</p>
                        <div className="mt-4 text-gray-700">
                          <p>Relevant coursework:</p>
                          <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Operating Systems</li>
                            <li>Computer Networks</li>
                            <li>Database Management Systems</li>
                            <li>Software Engineering</li>
                            <li>Distributed Systems</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Certifications */}
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-bold mb-6">Professional Certifications</h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-2 bg-blue-600 rounded-lg">
                          <Cloud className="text-white" size={24} />
                        </div>
                        <div>
                          <h4 className="font-semibold">AWS Certified Cloud Practitioner</h4>
                          <p className="text-gray-600">Amazon Web Services</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">Issued: March 2025 • Expires: March 2028</p>
                      <p className="mt-3 text-gray-700">Foundational knowledge of AWS cloud services, security, and architecture concepts.</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-2 bg-purple-600 rounded-lg">
                          <Container className="text-white" size={24} />
                        </div>
                        <div>
                          <h4 className="font-semibold">Certified Kubernetes Administrator</h4>
                          <p className="text-gray-600">Cloud Native Computing Foundation</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">Issued: August 2023 • Expires: August 2026</p>
                      <p className="mt-3 text-gray-700">Expert knowledge in deploying and managing Kubernetes clusters.</p>
                    </div>
                  </div>
                </div>
                
                {/* Languages */}
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-bold mb-6">Languages</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-center mb-3">English</h4>
                      <div className="flex justify-center">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">Fluent</span>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
                      <h4 className="font-semibold text-center mb-3">German</h4>
                      <div className="flex justify-center">
                        <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">Basic</span>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
                      <h4 className="font-semibold text-center mb-3">French</h4>
                      <div className="flex justify-center">
                        <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">Basic</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Additional Training */}
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-bold mb-6">Additional Training</h3>
                  
                  <div className="space-y-6">
                    <div className="p-4 border-l-4 border-blue-500">
                      <h4 className="font-semibold">🧠 Programming (Python)</h4>
                      <p className="text-gray-600">100 Days of Code: The Complete Python Pro Bootcamp</p>
                    </div>
                    
                    <div className="p-4 border-l-4 border-green-500">
                      <h4 className="font-semibold">🌐 Networking</h4>
                      <p className="text-gray-600">The Complete Networking Fundamentals Course (CCNA start)</p>
                    </div>
                    
                    <div className="p-4 border-l-4 border-purple-500">
                      <h4 className="font-semibold">💻 IT Fundamentals</h4>
                      <p className="text-gray-600">CompTIA A+ Core 1 (220-1201) Full Course & Practice Exam</p>
                    </div>
                    
                    <div className="p-4 border-l-4 border-orange-500">
                      <h4 className="font-semibold">🛠️ DevOps & Automation</h4>
                      <p className="text-gray-600">The Complete Jenkins DevOps CI/CD Pipeline Bootcamp</p>
                      <p className="text-gray-600">The Complete Terraform with Ansible Bootcamp 2025</p>
                      <p className="text-gray-600">Ultimate DevOps to MLOps Bootcamp - Build ML CI/CD Pipelines</p>
                    </div>
                    
                    <div className="p-4 border-l-4 border-red-500">
                      <h4 className="font-semibold">💻 Full-Stack Development</h4>
                      <p className="text-gray-600">The Complete Full-Stack Web Development Bootcamp</p>
                    </div>
                    
                    <div className="p-4 border-l-4 border-indigo-500">
                      <h4 className="font-semibold">☸️ Kubernetes</h4>
                      <p className="text-gray-600">Kubernetes and Cloud Native Associate Practice Exams (KCNA)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section id="services" className="min-h-screen flex items-center bg-white">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">Services</h2>
              <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                Professional DevOps and cloud infrastructure services to accelerate your business
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="group bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-sm border border-blue-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="p-3 bg-blue-600 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform">
                    <Cloud className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Cloud Infrastructure</h3>
                  <p className="text-gray-600 mb-4">
                    Design and implement scalable cloud infrastructure on AWS, GCP, and Azure with cost optimization.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Infrastructure as Code (Terraform)</li>
                    <li>• Auto-scaling & load balancing</li>
                    <li>• Multi-cloud architecture</li>
                  </ul>
                </div>
                
                <div className="group bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl shadow-sm border border-green-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="p-3 bg-green-600 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform">
                    <GitBranch className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">CI/CD Pipeline Setup</h3>
                  <p className="text-gray-600 mb-4">
                    Automated deployment pipelines with testing, security scanning, and deployment automation.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Jenkins & GitHub Actions</li>
                    <li>• Automated testing integration</li>
                    <li>• Blue-green deployments</li>
                  </ul>
                </div>
                
                <div className="group bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl shadow-sm border border-purple-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="p-3 bg-purple-600 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform">
                    <Container className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Containerization & Orchestration</h3>
                  <p className="text-gray-600 mb-4">
                    Docker containerization and Kubernetes orchestration for scalable microservices architecture.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Docker & Kubernetes setup</li>
                    <li>• Microservices architecture</li>
                    <li>• Container security & optimization</li>
                  </ul>
                </div>
                
                <div className="group bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-xl shadow-sm border border-orange-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="p-3 bg-orange-600 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform">
                    <Monitor className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Monitoring & Observability</h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive monitoring solutions with alerting, logging, and performance optimization.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Prometheus & Grafana setup</li>
                    <li>• ELK Stack implementation</li>
                    <li>• Performance monitoring & alerts</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">Get In Touch</h2>
              <p className="text-gray-600 text-center mb-12">
                Ready to discuss your next project? Let's connect!
              </p>
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Mail className="text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:ignatusa3@gmail.com" className="text-blue-600 hover:underline">
                        ignatusa3@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Phone className="text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a href="tel:+233545565863" className="text-green-600 hover:underline">
                        +233545565863
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="p-2 bg-red-100 rounded-lg">
                      <MapPin className="text-red-600" />
                    </div>
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-gray-600">Kumasi, Ghana</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Linkedin className="text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold">LinkedIn</p>
                      <a href="https://www.linkedin.com/in/ignatus-anim-688a071a0/" target="_blank" className="text-blue-600 hover:underline">
                        Connect with me
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <Github className="text-gray-700" />
                    </div>
                    <div>
                      <p className="font-semibold">GitHub</p>
                      <a href="https://github.com/ignatus-anim" target="_blank" className="text-gray-700 hover:underline">
                        View my projects
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
                        <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"></path>
                        <path d="M8 9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V9z"></path>
                        <path d="M14 9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V9z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">Blog</p>
                      <a href="https://medium.com/@ignatusa3" target="_blank" className="text-purple-600 hover:underline">
                        Read my articles on Medium
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
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 py-8">
        <div className="container mx-auto px-4 text-center text-gray-300">
          <p>© 2025 Ignatus Anim. All rights reserved.</p>
          <p className="text-sm mt-2 text-gray-400">Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}

export default App;