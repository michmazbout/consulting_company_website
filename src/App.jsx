import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  BarChart3, 
  Globe, 
  Leaf, 
  Zap, 
  Database, 
  MapPin, 
  TrendingUp, 
  Award,
  Users,
  Mail,
  Phone,
  ChevronDown,
  Play,
  ExternalLink
} from 'lucide-react';
import ContactForm from './components/ContactForm';
import './App.css';

// Import images
import environmentalEngineer from './assets/images/environmental_engineer.jpg';
import windTurbines from './assets/images/wind_turbines.jpg';
import swissMountains from './assets/images/swiss_mountains.jpg';
import gisAnalyst from './assets/images/gis_analyst.jpg';
import envService from './assets/images/envProject.avif';
import glacier from './assets/images/glacier.avif';
import oilspill from './assets/images/oilspill.avif';
import sedProject from './assets/images/sedimentProject.avif';
import engService from './assets/images/engService.avif';

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  useEffect(() => {
    setIsLoaded(true);
    
    // Create floating particles
    const createParticles = () => {
      const particleContainer = document.querySelector('.liquid-bg');
      if (!particleContainer) return;
      
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particleContainer.appendChild(particle);
      }
    };

    setTimeout(createParticles, 1000);

    // Scroll animation observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in-up');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Environmental Data Analysis & Modeling",
      description: "Advanced statistical analysis and predictive modeling for environmental phenomena using machine learning and AI.",
      features: ["Predictive Modeling", "Statistical Analysis", "AI-Powered Insights"],
      image: envService
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Geospatial Solutions & Remote Sensing",
      description: "Comprehensive GIS mapping and analysis for land use planning, natural resource management, and environmental monitoring.",
      features: ["GIS Mapping", "Remote Sensing", "Spatial Analysis"],
      image: swissMountains
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Sustainability & Environmental Impact Assessment",
      description: "Thorough Environmental Impact Assessments and Life Cycle Analysis for sustainable development projects.",
      features: ["EIA Studies", "LCA Analysis", "Sustainability Strategy"],
      image: windTurbines
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "System Optimization & Engineering",
      description: "Design and optimization of mechanical systems with environmental focus, energy efficiency, and innovative design.",
      features: ["Energy Efficiency", "System Design", "Innovation"],
      image: engService
    }
  ];

  const projects = [
    {
      title: "Alpine Sediment Dynamics Study",
      description: "Advanced GIS and DTM analysis of glacial erosion patterns in Swiss alpine rivers, contributing to hydropower sustainability research.",
      technologies: ["GIS Analysis", "Remote Sensing", "Fieldwork"],
      impact: "River Health",
      image: sedProject
    },
    {
      title: "AI Oil Spill Detection",
      description: "Machine learning model achieving 97% accuracy in oil spill detection using satellite imagery and advanced computer vision techniques.",
      technologies: ["Machine Learning", "Computer Vision", "97% Accuracy"],
      impact: "Environmental Monitoring",
      image: oilspill
    },
    {
      title: "Glacier Retreat Analysis",
      description: "Multi-disciplinary glacier study with EPFL, ETH Zurich, and Eawag, tracking elevation and proglacial area changes.",
      technologies: ["GIS Analysis", "Remote Sensing", "Fieldwork"],
      impact: "Climate Research",
      image: glacier
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: <Award className="w-6 h-6" /> },
    { number: "97%", label: "AI Model Accuracy", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "15+", label: "Research Partners", icon: <Users className="w-6 h-6" /> },
    { number: "5000+", label: "Sensors Deployed", icon: <Database className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen relative">
      {/* Liquid Background */}
      <div className="liquid-bg">
        <div className="liquid-shape"></div>
        <div className="liquid-shape"></div>
        <div className="liquid-shape"></div>
      </div>

      {/* Floating Navigation */}
      <motion.nav 
        className="floating-nav"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="flex items-center space-x-8">
          <motion.div 
            className="text-xl font-bold text-reveal"
            whileHover={{ scale: 1.05 }}
          >
            Al Alam Environmental
          </motion.div>
          <div className="hidden md:flex space-x-6">
            {['Services', 'Projects', 'About', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium hover:text-[var(--liquid-teal)] transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-6 text-glow"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
            >
              Environmental
              <span className="block text-reveal">Intelligence</span>
              <span className="block text-4xl md:text-6xl">in Motion</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Leading environmental engineering consultancy in Switzerland. 
              Transforming complex environmental challenges into sustainable, data-driven solutions.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1 }}
            >
              <button className="liquid-btn text-lg px-8 py-4">
                Explore Our Solutions
              </button>
              <motion.button 
                className="glass px-8 py-4 rounded-full flex items-center space-x-2 hover:bg-white/10 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-[var(--liquid-teal)]" />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="glass-card p-6 text-center fade-in-up"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-[var(--liquid-teal)] mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-reveal mb-2">{stat.number}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16 fade-in-up"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-6 text-glow">
              Comprehensive Environmental Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge technology meets deep domain expertise to deliver 
              innovative solutions for complex environmental challenges.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card p-8 fade-in-up"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[var(--liquid-teal)] to-[var(--electric-green)] flex items-center justify-center text-[var(--ocean-blue)]">
                      {service.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-reveal">{service.title}</h3>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-white/10 rounded-full text-sm border border-white/20"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-6 h-48 rounded-lg overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16 fade-in-up"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-6 text-glow">
              Impactful Environmental Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Showcasing innovative solutions and measurable environmental impact 
              through cutting-edge research and technology.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="glass-card overflow-hidden fade-in-up"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-reveal">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 bg-[var(--liquid-teal)]/20 rounded text-xs text-[var(--liquid-teal)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[var(--electric-green)] font-semibold">{project.impact}</span>
                    <ExternalLink className="w-4 h-4 text-gray-400 hover:text-[var(--liquid-teal)] transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="fade-in-up"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold mb-6 text-glow">
                Innovation Meets Precision
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Founded on the principle that environmental challenges require 
                innovative, data-driven solutions, Al Alam Environmental Solutions 
                combines deep scientific expertise with cutting-edge technology.
              </p>
              <p className="text-gray-300 mb-8">
                Our interdisciplinary approach seamlessly integrates environmental 
                engineering knowledge with advanced data science, machine learning, 
                and geospatial analysis capabilities, delivering highly accurate insights 
                for complex environmental challenges.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="glass-card p-4 text-center">
                  <div className="text-2xl font-bold text-[var(--liquid-teal)] mb-2">2+ Years</div>
                  <div className="text-sm text-gray-400">Research Experience</div>
                </div>
                <div className="glass-card p-4 text-center">
                  <div className="text-2xl font-bold text-[var(--electric-green)] mb-2">Switzerland</div>
                  <div className="text-sm text-gray-400">Based in Lausanne</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="relative fade-in-up"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="glass-card p-8">
                <img 
                  src={environmentalEngineer} 
                  alt="Environmental Engineering"
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold mb-4 text-reveal">
                  Advanced Environmental Engineering
                </h3>
                <p className="text-gray-300">
                  Leveraging state-of-the-art technology and scientific methodologies 
                  to address the most complex environmental challenges facing our world today.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16 fade-in-up"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-6 text-glow">
              Let's Shape the Future Together
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your environmental challenges into sustainable solutions? 
              Let's discuss your project and explore innovative approaches.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              className="glass-card p-8 fade-in-up"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-reveal">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[var(--liquid-teal)] to-[var(--electric-green)] flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[var(--ocean-blue)]" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-300">contact@eliasalalam.dev</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[var(--liquid-teal)] to-[var(--electric-green)] flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[var(--ocean-blue)]" />
                  </div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-gray-300">+41 76 438 76 12</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[var(--liquid-teal)] to-[var(--electric-green)] flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[var(--ocean-blue)]" />
                  </div>
                  <div>
                    <div className="font-semibold">Location</div>
                    <div className="text-gray-300">Lausanne, Switzerland</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="glass-card p-8 fade-in-up"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-reveal">Areas of Expertise</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Environmental Engineering",
                  "Data Analysis", 
                  "GIS & Remote Sensing",
                  "Sustainability",
                  "Machine Learning",
                  "Research & Development"
                ].map((expertise, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 rounded-full bg-[var(--liquid-teal)]"></div>
                    <span className="text-sm">{expertise}</span>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8">
                <button 
                  className="liquid-btn w-full"
                  onClick={() => setIsContactFormOpen(true)}
                >
                  Start Your Project
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <motion.div 
              className="text-2xl font-bold text-reveal mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Al Alam Environmental Solutions
            </motion.div>
            <p className="text-gray-400 mb-6">
              Advanced Environmental Engineering & Data Analysis
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-400">
              <span>Environmental</span>
              <span>•</span>
              <span>Data-Driven</span>
              <span>•</span>
              <span>Global Impact</span>
            </div>
            <div className="mt-8 text-sm text-gray-500">
              © 2025 Al Alam Environmental Solutions. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* Contact Form Modal */}
      <ContactForm 
        isOpen={isContactFormOpen} 
        onClose={() => setIsContactFormOpen(false)} 
      />
    </div>
  );
};

export default App;
