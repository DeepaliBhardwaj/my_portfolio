import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X, Mail, Phone, MapPin, Download, ExternalLink, Github, Linkedin } from 'lucide-react';
import '@/App.css';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const App = () => {
  const [isDark, setIsDark] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  const skills = {
    'Frontend': ['React.js', 'Redux Toolkit', 'Zustand', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Mantine UI'],
    'Backend': ['Express.js', 'Node.js'],
    'Databases': ['MongoDB', 'PostgreSQL', 'MySQL'],
    'Tools': ['Git', 'VS Code', 'Postman', 'Clickup'],
    'APIs': ['REST API', 'JSON'],
    'Design': ['Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'Canva', 'Adobe XD', 'Sketch']
  };

  const projects = [
    {
      title: 'Student Information System',
      period: '08/2024 – Present',
      role: 'Full-Stack Developer',
      tech: ['Express.js', 'React.js', 'JavaScript', 'MongoDB', 'Redux Toolkit'],
      description: 'Built a scalable student management system with role-based access and an admin dashboard for real-time data. Automated reporting and optimized API performance.'
    },
    {
      title: 'AI-Powered Personal Finance Tracker',
      period: '06/2022 – 10/2022',
      role: 'Full-Stack Developer',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'OpenAI API'],
      description: 'Developed dashboard to track spending with AI suggestions for savings, secure authentication, and optimized APIs.'
    },
    {
      title: 'Real-Time Task Management System',
      period: '03/2023 – 05/2023',
      role: 'Full-Stack Developer',
      tech: ['React.js', 'Node.js', 'WebSocket', 'MongoDB', 'Tailwind CSS'],
      description: 'Designed collaborative interface with real-time task updates and role-based access. Optimized WebSocket for low-latency.'
    },
    {
      title: 'Music Streaming Website',
      period: '02/2023 – 05/2023',
      role: 'Front-End Developer',
      tech: ['JavaScript', 'HTML', 'CSS', 'Bootstrap'],
      description: 'Developed dynamic music streaming UI with playlist management, search features, and responsive layout.'
    },
    {
      title: 'Real Estate Platform',
      period: '08/2023 – 12/2023',
      role: 'Front-End Developer',
      tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
      description: 'Created property listing UI with filters, responsive card layouts, and optimized loading performance.'
    }
  ];

  const achievements = [
    'Reduced API response time by 35%',
    'Improved team efficiency by 40%',
    'Reduced bugs by 30% via code reviews',
    'Increased user interaction by 25% through WebSocket chat features',
    'Improved database performance by 50% with indexing and optimization'
  ];

  return (
    <BrowserRouter>
      <div className="portfolio-container">
        {/* Navbar */}
        <nav className="navbar" data-testid="main-navbar">
          <div className="nav-content">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="nav-logo"
              data-testid="nav-logo"
            >
              Deepali
            </motion.div>

            {/* Desktop Menu */}
            <div className="nav-menu-desktop">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  data-testid={`nav-link-${item.id}`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            <div className="nav-actions">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsDark(!isDark)}
                className="theme-toggle"
                data-testid="theme-toggle-btn"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="mobile-menu-btn"
                data-testid="mobile-menu-btn"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mobile-menu"
              data-testid="mobile-menu"
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`mobile-menu-item ${activeSection === item.id ? 'active' : ''}`}
                  data-testid={`mobile-nav-${item.id}`}
                >
                  {item.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero Section */}
        <section id="hero" className="section hero-section" data-testid="hero-section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-content"
            >
              <motion.h1 
                className="hero-title"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                data-testid="hero-title"
              >
                DEEPALI BHARDWAJ
              </motion.h1>
              <motion.p 
                className="hero-subtitle"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                data-testid="hero-subtitle"
              >
                Front-End Developer
              </motion.p>
              <motion.div 
                className="hero-location"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                data-testid="hero-location"
              >
                <MapPin size={18} />
                <span>Indore, MP</span>
              </motion.div>
              <motion.div
                className="hero-buttons"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="btn-primary"
                  data-testid="contact-me-btn"
                >
                  Contact Me
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => scrollToSection('projects')}
                  className="btn-secondary"
                  data-testid="view-work-btn"
                >
                  View Work
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section about-section" data-testid="about-section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title" data-testid="about-title">About Me</h2>
              <div className="about-content">
                <Card className="about-card">
                  <p className="about-text" data-testid="about-description">
                    Front-End Developer with expertise in the MERN stack, building scalable and user-focused web applications with seamless UI/UX and efficient integration with backend services.
                  </p>
                  <div className="contact-info">
                    <div className="contact-item" data-testid="contact-email">
                      <Mail size={18} />
                      <a href="mailto:dips21201@gmail.com">dips21201@gmail.com</a>
                    </div>
                    <div className="contact-item" data-testid="contact-phone">
                      <Phone size={18} />
                      <a href="tel:+916266244955">+91 6266244955</a>
                    </div>
                    <div className="contact-item" data-testid="contact-linkedin">
                      <Linkedin size={18} />
                      <a href="https://www.linkedin.com/in/deepali-bhardwaj-884215217" target="_blank" rel="noopener noreferrer">
                        LinkedIn Profile
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="achievements-card">
                  <h3 className="card-title" data-testid="achievements-title">Key Achievements</h3>
                  <ul className="achievements-list">
                    {achievements.map((achievement, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        data-testid={`achievement-${index}`}
                      >
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section skills-section" data-testid="skills-section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title" data-testid="skills-title">Technical Skills</h2>
              <div className="skills-grid">
                {Object.entries(skills).map(([category, items], index) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="skill-card" data-testid={`skill-category-${category.toLowerCase()}`}>
                      <h3 className="skill-category">{category}</h3>
                      <div className="skill-tags">
                        {items.map((skill, idx) => (
                          <span key={idx} className="skill-tag" data-testid={`skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section projects-section" data-testid="projects-section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title" data-testid="projects-title">Projects</h2>
              <div className="projects-grid">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="project-card" data-testid={`project-card-${index}`}>
                      <div className="project-header">
                        <h3 className="project-title" data-testid={`project-title-${index}`}>{project.title}</h3>
                        <span className="project-period">{project.period}</span>
                      </div>
                      <p className="project-role" data-testid={`project-role-${index}`}>{project.role}</p>
                      <p className="project-description" data-testid={`project-description-${index}`}>{project.description}</p>
                      <div className="project-tech">
                        {project.tech.map((tech, idx) => (
                          <span key={idx} className="tech-tag" data-testid={`project-${index}-tech-${idx}`}>{tech}</span>
                        ))}
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="section experience-section" data-testid="experience-section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title" data-testid="experience-title">Experience</h2>
              <Card className="experience-card" data-testid="experience-card">
                <div className="experience-header">
                  <div>
                    <h3 className="experience-title" data-testid="experience-job-title">UI/UX Designer</h3>
                    <p className="experience-company" data-testid="experience-company">Student Diwan</p>
                    <p className="experience-location" data-testid="experience-location">Doha, Qatar</p>
                  </div>
                  <span className="experience-period" data-testid="experience-period">08/2024 – Present</span>
                </div>
                <Separator className="my-4" />
                <ul className="experience-responsibilities">
                  <li data-testid="experience-item-0">Enhanced usability and optimized workflows</li>
                  <li data-testid="experience-item-1">Improved interface design</li>
                  <li data-testid="experience-item-2">Increased user engagement</li>
                </ul>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section contact-section" data-testid="contact-section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title" data-testid="contact-title">Get In Touch</h2>
              <Card className="contact-card">
                <p className="contact-message" data-testid="contact-message">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                <div className="contact-details">
                  <div className="contact-detail-item" data-testid="contact-detail-email">
                    <Mail size={24} />
                    <div>
                      <p className="contact-label">Email</p>
                      <a href="mailto:dips21201@gmail.com" className="contact-value">dips21201@gmail.com</a>
                    </div>
                  </div>
                  <div className="contact-detail-item" data-testid="contact-detail-phone">
                    <Phone size={24} />
                    <div>
                      <p className="contact-label">Phone</p>
                      <a href="tel:+916266244955" className="contact-value">+91 6266244955</a>
                    </div>
                  </div>
                  <div className="contact-detail-item" data-testid="contact-detail-location">
                    <MapPin size={24} />
                    <div>
                      <p className="contact-label">Location</p>
                      <p className="contact-value">Indore, MP</p>
                    </div>
                  </div>
                </div>
                <div className="contact-actions">
                  <Button 
                    className="btn-download"
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = '#';
                      link.download = 'Deepali_Bhardwaj_Resume.pdf';
                      alert('Resume download feature - Please add your PDF file to enable this.');
                    }}
                    data-testid="download-resume-btn"
                  >
                    <Download size={18} />
                    Download Resume
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => window.open('https://www.linkedin.com/in/deepali-bhardwaj-884215217', '_blank')}
                    data-testid="linkedin-profile-btn"
                  >
                    <Linkedin size={18} />
                    LinkedIn Profile
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer" data-testid="footer">
          <div className="container">
            <p data-testid="footer-text">© 2025 Deepali Bhardwaj. Built with React & Tailwind CSS.</p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;