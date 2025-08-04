import React, { useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Download,
  Server,
  Cloud,
  Database,
  Code,
  Smartphone,
  GitBranch,
  Shield,
  Brain,
  Award,
  Calendar,
  CheckCircle
} from 'lucide-react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

// Skill categories with icons and colors
const skillCategories = [
  {
    title: "Backend Development",
    icon: Server,
    color: "backend",
    skills: ["Python", "Java", "Node.js", "Spring Boot", "Django", "Flask", "Express.js"]
  },
  {
    title: "Frontend Development", 
    icon: Code,
    color: "frontend",
    skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"]
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    color: "mobile", 
    skills: ["React Native", "Flutter", "Android (Java/Kotlin)", "iOS (Swift)"]
  },
  {
    title: "Cloud Platforms",
    icon: Cloud,
    color: "cloud",
    skills: ["AWS", "Google Cloud Platform", "Microsoft Azure", "Heroku", "Vercel"]
  },
  {
    title: "DevOps & Containerization",
    icon: Server,
    color: "container",
    skills: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Terraform", "Ansible"]
  },
  {
    title: "CI/CD & Automation",
    icon: GitBranch,
    color: "cicd",
    skills: ["GitHub Actions", "Jenkins", "GitLab CI", "CircleCI", "Travis CI", "Azure DevOps"]
  },
  {
    title: "Scripting & Automation",
    icon: Code,
    color: "script",
    skills: ["Bash", "PowerShell", "Python Scripts", "Automation Tools"]
  },
  {
    title: "Databases",
    icon: Database,
    color: "db",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQLite", "DynamoDB"]
  },
  {
    title: "Machine Learning & MLOps",
    icon: Brain,
    color: "ml",
    skills: ["MLflow", "Apache Airflow", "Prometheus", "Grafana", "A/B Testing", "Model Deployment"]
  },
  {
    title: "Security & Monitoring",
    icon: Shield,
    color: "security",
    skills: ["OAuth", "JWT", "SSL/TLS", "Security Best Practices", "Monitoring", "Logging"]
  }
];

// Certifications data
const certifications = [
  {
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services (AWS)",
    issued: "Jul 2025",
    expires: "Jul 2028",
    logo: "/assets/aws.svg",
    credentialId: null,
    verificationUrl: null
  }
];

// Projects data
const projects = [
  {
    title: "Bangalore Home Prices - MLOps Pipeline",
    description: "A production-ready MLOps pipeline for continuous model training, A/B testing, and automated rollbacks. Built with Apache Airflow, MLflow, Docker, and AWS S3 to demonstrate end-to-end machine learning operations at scale.",
    longDescription: `Developed a comprehensive MLOps system that automatically trains machine learning models, tests them against production models using A/B testing, and performs intelligent rollbacks based on performance metrics. The system handles the complete ML lifecycle from data ingestion to model deployment with zero-downtime updates.`,
    technologies: ["Apache Airflow", "MLflow", "Docker", "AWS S3", "Flask", "Prometheus", "Grafana", "PostgreSQL", "Nginx", "pytest"],
    github: "https://github.com/ignatus-anim/mlops",
    demo: null,
    category: "MLOps",
    features: [
      "Automated Training Pipeline with MLflow experiment tracking",
      "A/B Testing Infrastructure with 80/20 traffic splitting",
      "Intelligent Rollbacks based on performance metrics",
      "Real-time Monitoring with Prometheus + Grafana",
      "Data Drift Detection with automated alerts",
      "100% test coverage with comprehensive testing"
    ],
    results: [
      "90% Requirements Completion - All core MLOps features implemented",
      "100% Test Coverage - 11/11 tests passing",
      "Zero-downtime deployments with automated container management",
      "Sub-millisecond prediction latency"
    ],
    impact: [
      "Risk Mitigation: Automated rollbacks prevent deployment of underperforming models",
      "Continuous Improvement: A/B testing enables data-driven model enhancement", 
      "Operational Efficiency: Fully automated pipeline reduces manual intervention",
      "Scalability: Container-based architecture ready for production workloads"
    ]
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React frontend, Node.js backend, and PostgreSQL database. Features include user authentication, product catalog, shopping cart, and payment integration.",
    longDescription: "Built a comprehensive e-commerce platform from scratch with modern web technologies. Implemented secure user authentication, dynamic product catalog, real-time inventory management, and integrated payment processing.",
    technologies: ["React", "Node.js", "Express.js", "PostgreSQL", "JWT", "Stripe API", "Docker"],
    github: "https://github.com/ignatus-anim/ecommerce-platform",
    demo: "https://ecommerce-demo.ignatusanim.com",
    category: "Full Stack",
    features: [
      "User authentication and authorization",
      "Product catalog with search and filtering",
      "Shopping cart and checkout process",
      "Payment integration with Stripe",
      "Admin dashboard for inventory management",
      "Responsive design for mobile and desktop"
    ],
    results: [
      "Successfully deployed to production",
      "Handles 1000+ concurrent users",
      "99.9% uptime achieved",
      "Positive user feedback on UX"
    ]
  },
  {
    title: "DevOps Infrastructure Automation",
    description: "Automated infrastructure deployment using Terraform and Ansible. Includes CI/CD pipelines, monitoring setup, and container orchestration with Kubernetes.",
    longDescription: "Designed and implemented a complete DevOps infrastructure automation solution. Created Infrastructure as Code templates, automated deployment pipelines, and comprehensive monitoring solutions.",
    technologies: ["Terraform", "Ansible", "Kubernetes", "Docker", "Jenkins", "Prometheus", "Grafana", "AWS"],
    github: "https://github.com/ignatus-anim/devops-automation",
    demo: null,
    category: "DevOps",
    features: [
      "Infrastructure as Code with Terraform",
      "Configuration management with Ansible",
      "Container orchestration with Kubernetes",
      "Automated CI/CD pipelines",
      "Comprehensive monitoring and alerting",
      "Auto-scaling and load balancing"
    ],
    results: [
      "Reduced deployment time by 80%",
      "Improved system reliability to 99.9%",
      "Automated 95% of manual processes",
      "Significant cost optimization achieved"
    ]
  }
];

function App() {
  const [activeTab, setActiveTab] = useState('about');

  const generatePDF = () => {
    const pdf = new jsPDF();
    
    // Header
    pdf.setFontSize(24);
    pdf.setFont(undefined, 'bold');
    pdf.text('Ignatus Anim', 20, 30);
    
    pdf.setFontSize(12);
    pdf.setFont(undefined, 'normal');
    pdf.text('Software Engineer & DevOps Engineer', 20, 40);
    
    // Contact Info
    pdf.setFontSize(10);
    pdf.text('Email: ignatus.anim@example.com', 20, 55);
    pdf.text('Phone: +233 XX XXX XXXX', 20, 65);
    pdf.text('Location: Accra, Ghana', 20, 75);
    pdf.text('LinkedIn: linkedin.com/in/ignatus-anim', 20, 85);
    pdf.text('GitHub: github.com/ignatus-anim', 20, 95);
    
    // Skills Section
    let yPosition = 115;
    pdf.setFontSize(16);
    pdf.setFont(undefined, 'bold');
    pdf.text('Technical Skills', 20, yPosition);
    
    yPosition += 15;
    pdf.setFontSize(10);
    pdf.setFont(undefined, 'normal');
    
    skillCategories.forEach(category => {
      if (yPosition > 250) {
        pdf.addPage();
        yPosition = 30;
      }
      
      pdf.setFont(undefined, 'bold');
      pdf.text(category.title + ':', 20, yPosition);
      pdf.setFont(undefined, 'normal');
      pdf.text(category.skills.join(', '), 20, yPosition + 8);
      yPosition += 20;
    });
    
    // Certifications Section
    if (yPosition > 220) {
      pdf.addPage();
      yPosition = 30;
    }
    
    pdf.setFontSize(16);
    pdf.setFont(undefined, 'bold');
    pdf.text('Certifications', 20, yPosition);
    yPosition += 15;
    
    certifications.forEach(cert => {
      pdf.setFontSize(12);
      pdf.setFont(undefined, 'bold');
      pdf.text(cert.title, 20, yPosition);
      pdf.setFontSize(10);
      pdf.setFont(undefined, 'normal');
      pdf.text(`${cert.issuer} | Issued: ${cert.issued} | Expires: ${cert.expires}`, 20, yPosition + 8);
      yPosition += 20;
    });
    
    // Projects Section
    if (yPosition > 200) {
      pdf.addPage();
      yPosition = 30;
    }
    
    pdf.setFontSize(16);
    pdf.setFont(undefined, 'bold');
    pdf.text('Key Projects', 20, yPosition);
    yPosition += 15;
    
    projects.forEach(project => {
      if (yPosition > 220) {
        pdf.addPage();
        yPosition = 30;
      }
      
      pdf.setFontSize(12);
      pdf.setFont(undefined, 'bold');
      pdf.text(project.title, 20, yPosition);
      pdf.setFontSize(10);
      pdf.setFont(undefined, 'normal');
      
      const descriptionLines = pdf.splitTextToSize(project.description, 170);
      pdf.text(descriptionLines, 20, yPosition + 8);
      
      pdf.text('Technologies: ' + project.technologies.join(', '), 20, yPosition + 8 + (descriptionLines.length * 5) + 5);
      yPosition += 30 + (descriptionLines.length * 5);
    });
    
    pdf.save('Ignatus_Anim_CV.pdf');
  };

  const TabButton = ({ id, label, isActive, onClick }) => (
    <button
      onClick={() => onClick(id)}
      className={`px-6 py-3 font-medium text-sm rounded-lg transition-all duration-300 ${
        isActive
          ? 'bg-blue-600 text-white shadow-lg'
          : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
      }`}
    >
      {label}
    </button>
  );

  const SkillCard = ({ category }) => {
    const IconComponent = category.icon;
    return (
      <div className="skill-card group">
        <div className="flex items-start gap-4">
          <div className={`skill-icon ${category.color}-icon group-hover:scale-110 transition-transform duration-300`}>
            <IconComponent className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-800 mb-3">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const CertificationCard = ({ cert }) => (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0">
          <img src={cert.logo} alt={`${cert.issuer} logo`} className="w-10 h-10 object-contain" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-800 mb-2">{cert.title}</h3>
          <p className="text-gray-600 mb-3">{cert.issuer}</p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>Issued: {cert.issued}</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Expires: {cert.expires}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ProjectCard = ({ project }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 group">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
              {project.title}
            </h3>
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
              {project.category}
            </span>
          </div>
          <div className="flex gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all duration-200"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

        {project.longDescription && (
          <p className="text-gray-600 mb-4 leading-relaxed text-sm">{project.longDescription}</p>
        )}

        {project.features && (
          <div className="mb-4">
            <h4 className="font-medium text-gray-800 mb-2">Key Features:</h4>
            <ul className="space-y-1">
              {project.features.map((feature, index) => (
                <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.results && (
          <div className="mb-4">
            <h4 className="font-medium text-gray-800 mb-2">Results Achieved:</h4>
            <ul className="space-y-1">
              {project.results.map((result, index) => (
                <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                  <Award className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.impact && (
          <div className="mb-4">
            <h4 className="font-medium text-gray-800 mb-2">Business Impact:</h4>
            <ul className="space-y-1">
              {project.impact.map((impact, index) => (
                <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                  <Brain className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span>{impact}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2.5 py-0.5 bg-gray-100 text-gray-700 text-xs rounded border border-gray-200 hover:bg-gray-200 transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                IA
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Ignatus Anim</h1>
                <p className="text-gray-600">Software Engineer & DevOps Engineer</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>ignatus.anim@example.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+233 XX XXX XXXX</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Accra, Ghana</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/ignatus-anim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all duration-200"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/ignatus-anim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <button
                  onClick={generatePDF}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  <Download className="w-4 h-4" />
                  <span className="hidden sm:inline">Download CV</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex gap-1 overflow-x-auto py-4">
            <TabButton id="about" label="About" isActive={activeTab === 'about'} onClick={setActiveTab} />
            <TabButton id="skills" label="Skills" isActive={activeTab === 'skills'} onClick={setActiveTab} />
            <TabButton id="certifications" label="Certifications" isActive={activeTab === 'certifications'} onClick={setActiveTab} />
            <TabButton id="projects" label="Projects" isActive={activeTab === 'projects'} onClick={setActiveTab} />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {activeTab === 'about' && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/4 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-4xl mx-auto mb-4 shadow-2xl">
                      IA
                    </div>
                    <h2 className="text-xl font-semibold text-gray-800">Ignatus Anim</h2>
                    <p className="text-gray-600 mt-1">Solutions Architect</p>
                  </div>
                </div>
                <div className="md:w-3/4 p-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">About Me</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      I'm a passionate Software Engineer and DevOps Engineer with expertise in building scalable, 
                      production-ready applications and infrastructure. Recently certified as an AWS Solutions Architect Associate, 
                      I specialize in cloud architecture, MLOps, and end-to-end software development.
                    </p>
                    <p>
                      My experience spans across full-stack development, cloud platforms, containerization, 
                      and modern DevOps practices. I have a strong background in machine learning operations, 
                      having built comprehensive MLOps pipelines with automated training, A/B testing, and intelligent rollbacks.
                    </p>
                    <p>
                      I'm particularly interested in solving complex technical challenges, optimizing system performance, 
                      and implementing best practices for software delivery and infrastructure management. 
                      My goal is to bridge the gap between development and operations while ensuring robust, 
                      scalable, and maintainable solutions.
                    </p>
                  </div>
                  
                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h3 className="font-semibold text-gray-800">Core Expertise</h3>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          Cloud Architecture & AWS Solutions
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          MLOps & Machine Learning Pipelines
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          DevOps & Infrastructure Automation
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          Full-Stack Development
                        </li>
                      </ul>
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="font-semibold text-gray-800">Recent Achievements</h3>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-center gap-2">
                          <Award className="w-4 h-4 text-yellow-500" />
                          AWS Certified Solutions Architect
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          Production MLOps Pipeline Deployment
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          100% Test Coverage Achievement
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          Zero-Downtime Deployment Implementation
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'skills' && (
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Technical Skills</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A comprehensive overview of my technical expertise across various domains of software engineering and DevOps.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category, index) => (
                <SkillCard key={index} category={category} />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'certifications' && (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Certifications</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Professional certifications that validate my expertise in cloud technologies and software architecture.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              {certifications.map((cert, index) => (
                <CertificationCard key={index} cert={cert} />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Projects</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A showcase of my recent work demonstrating expertise in MLOps, full-stack development, and DevOps automation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 mt-16">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2025 Ignatus Anim. All rights reserved.</p>
            <p className="mt-2 text-sm">Built with React, TypeScript, and Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;