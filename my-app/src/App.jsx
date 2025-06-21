import React, { useState } from 'react';
import { Github, Linkedin, Mail, Phone, Instagram, MessageSquare, ExternalLink, X, ChevronLeft, ChevronRight, FileText } from 'lucide-react';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Sample project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "Criminal Detection System for ATM",
      screenshot: "https://res.cloudinary.com/dykmvhhid/image/upload/v1750450193/ATM_Login_n83xj4.bmp",
      github: "https://github.com/rohandhadke/criminal-detection-system",
      description: "The Criminal Detection System is a smart AI-powered platform that aims to enhance public safety and financial security by integrating real-time facial recognition technology with banking systems, specifically ATMs. It helps law enforcement and financial institutions identify individuals with criminal records during banking transactions, blocking their access and notifying authorities immediately.",
      technologies: ["Python", "OpenCV", "Face Recognition", "Flask", "MongoDB", "HTML/CSS", "JavaScript"],
      images: [
        "https://res.cloudinary.com/dykmvhhid/image/upload/v1750450201/ATM_Home_q2rtif.bmp",
        "https://res.cloudinary.com/dykmvhhid/image/upload/v1750450201/ATM_registration_nwli5p.bmp",
        "https://res.cloudinary.com/dykmvhhid/image/upload/v1750450193/screenshot_11_nr47up.bmp"
      ]
    },
    {
      id: 2,
      title: "GENNIE - AI-Powered Chatbot",
      screenshot: "https://res.cloudinary.com/dykmvhhid/image/upload/v1750454063/ss1_sgakxn.bmp",
      github: "https://github.com/rohandhadke/GENIE-AI-powered-academic-assistant",
      description: "This project is an AI-powered educational platform designed to assist students in learning more effectively. It allows users to upload their study materials in PDF format—such as notes, textbooks, and reference documents—which are then processed and stored in a personal digital library. The core feature of this platform is an intelligent chatbot that analyzes the uploaded content and enables users to ask questions or clarify doubts related to the material. By leveraging natural language processing (NLP), the chatbot provides contextual and accurate responses, making self-study more interactive and engaging. The system also includes user authentication for secure access, and PDFs can be viewed directly in a new browser tab for convenience. This integration of document management and AI-driven learning support creates a powerful tool for personalized education.",
      technologies: ["Python", "Flask", "ReactJS", "RestAPI", "SQLite", "OpenAI API"],
      images: [
        "https://res.cloudinary.com/dykmvhhid/image/upload/v1750454063/ss2_t7iia7.bmp",
        "https://res.cloudinary.com/dykmvhhid/image/upload/v1750454056/signup_v0y64v.bmp",
        "https://res.cloudinary.com/dykmvhhid/image/upload/v1750454055/login_nhcvwf.bmp"
      ]
    },
    {
      id: 3,
      title: "Automated Bulk Email Sender",
      screenshot: "https://res.cloudinary.com/dykmvhhid/image/upload/v1750454817/ss1_ne4wq4.bmp",
      github: "https://github.com/rohandhadke/auto-mail-sender",
      description: "This project is an automated email sender application built using React for the frontend and FastAPI for the backend. It enables users to send bulk emails efficiently by uploading a spreadsheet containing recipient email addresses and a text file containing the email body. Users can also attach optional files like PDFs or images. The system supports Gmail app password authentication to ensure secure email delivery. The interface is clean, user-friendly, and provides real-time feedback on the status of email delivery. Ideal for professionals or educators managing large-scale communication.",
      technologies: ["Python", "FastAPI", "SQLite", "ReactJS", "NumPy", "Pamdas"],
      images: [
        "https://res.cloudinary.com/dykmvhhid/image/upload/v1750454817/ss1_ne4wq4.bmp",
        "https://res.cloudinary.com/dykmvhhid/image/upload/v1750454814/ss2_fry5o0.bmp",
        "https://res.cloudinary.com/dykmvhhid/image/upload/v1750454818/ss3_qqlvhr.bmp"
      ]
    },
    {
      id: 4,
      title: "Automated Audio to Text Summarizer",
      screenshot: "",
      github: "https://github.com/yourusername/ml-pipeline",
      description: "The 'Automated Audio to Text Summarizer' is a full-stack AI-powered web application that allows users to upload or record audio files and receive both a transcription and a summarized version of the audio content. This project leverages NLP and ASR (Automatic Speech Recognition) models to enhance productivity, especially in educational, journalistic, and research domains.",
      technologies: ["Python", "Flask", "SQLite", "Transformers", "JavaScript", "HTML/CSS", "Bootstrap"],
      images: [
 
      ]
    },
    {
      id: 5,
      title: "TaskFlow - Advanced To Do List Application",
      screenshot: "https://res.cloudinary.com/dykmvhhid/image/upload/v1750455081/screenshot3_aplpot.bmp",
      github: "https://github.com/rohandhadke/task-manager-app",
      description: "This is a full-stack To-Do List Web Application designed to help users efficiently manage their daily tasks. The frontend is developed using ReactJS, providing a dynamic and responsive user interface for smooth interaction. The backend is built with Flask, a lightweight Python web framework, which handles all the server-side logic and API endpoints. The application uses PostgreSQL as the database, with SQLAlchemy ORM for seamless interaction between Python objects and database tables. It features user authentication, allowing users to register, log in, and manage tasks individually. Each task is stored with a timestamp and associated with a specific user. The application is containerized using Docker and deployed in production using Gunicorn as the WSGI server. This project is open-source, encouraging collaboration and contributions from the developer community.",
      technologies: ["Python", "FastAPI", "ReactJS", "AWS EC2 free Tier", "PostgreSQL", "JWT Authentication"],
      images: [
        "https://res.cloudinary.com/dykmvhhid/image/upload/v1750455079/screenshot1_mdyeya.bmp",
        "https://res.cloudinary.com/dykmvhhid/image/upload/v1750455084/screenshot7_cagav1.bmp",
        "https://res.cloudinary.com/dykmvhhid/image/upload/v1750455085/screenshot6_uvdcx2.bmp",
        "https://res.cloudinary.com/dykmvhhid/image/upload/v1750455091/screenshot8_pd7x5m.bmp",
        "https://res.cloudinary.com/dykmvhhid/image/upload/v1750455092/screenshot5_ji8tvz.bmp"
      ]
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const openProject = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white font-mono">
      {/* Header/Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-sm z-40 border-b border-yellow-400/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-yellow-400">
              &lt;rohandhadke /&gt;
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-yellow-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-yellow-400 transition-colors">About</a>
              <a href="#projects" className="hover:text-yellow-400 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-yellow-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Photo */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-r from-yellow-400 to-blue-500 p-1">
                  <img
                    src="https://res.cloudinary.com/dykmvhhid/image/upload/v1750447133/photo_hvaeuv.jpg"
                    alt="Profile"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Basic Info */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Hi, I'm <span className="text-yellow-400">Rohan Chimaji Dhadke</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-blue-300 mb-8">
                Python Developer
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl leading-relaxed text-lg">
                Passionate Python developer with a year of experience in building scalable web applications, 
                API development and machine learning solutions. I love turning complex problems into simple, 
                beautiful designs and creating efficient, maintainable code.
              </p>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start space-x-6">
                <a href="https://github.com/rohandhadke"target='_blank' className="p-3 bg-slate-800 rounded-full hover:bg-yellow-400 hover:text-slate-900 transition-all transform hover:scale-110">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/rohan-dhadke-774a3721a/"target='_blank' className="p-3 bg-slate-800 rounded-full hover:bg-blue-500 transition-all transform hover:scale-110">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:yourname@example.com?subject=Hello%20from%20your%20Portfolio&body=Hi%20there!%20I%20found%20your%20portfolio%20and..."target='_blank' className="p-3 bg-slate-800 rounded-full hover:bg-red-500 transition-all transform hover:scale-110">
                  <Mail size={24} />
                </a>
                <a href="https://www.instagram.com/mr.rohan_dhadke01?igsh=emo5eHYzOHlzNGtz"target='_blank' className="p-3 bg-slate-800 rounded-full hover:bg-pink-500 transition-all transform hover:scale-110">
                  <Instagram size={24} />
                </a>
                <a href="https://wa.me/9730888461?text=Hi%20there!%20I%20saw%20your%20portfolio%20and%20wanted%20to%20connect."target='_blank' className="p-3 bg-slate-800 rounded-full hover:bg-green-500 transition-all transform hover:scale-110">
                  <MessageSquare size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-yellow-400">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Personal Info */}
            <div className="bg-slate-900/50 p-6 rounded-lg border border-yellow-400/30">
              <h3 className="text-xl font-semibold mb-4 text-yellow-400">Personal Info</h3>
              <div className="space-y-3">
                <p><span className="text-blue-300">Name:</span> Rohan Chimaji Dhadke</p>
                <p><span className="text-blue-300">Age:</span> 21</p>
                <p><span className="text-blue-300">Location:</span> Nanded, Maharashtra</p>
                <p><span className="text-blue-300">Languages:</span> English, Hindi, Marathi</p>
              </div>
            </div>

            {/* Education */}
            <div className="bg-slate-900/50 p-6 rounded-lg border border-yellow-400/30">
              <h3 className="text-xl font-semibold mb-4 text-yellow-400">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-blue-300">Bachelor's in Computer Science and Engineering(BE)</h4>
                  <p className="text-sm text-gray-300">Dr. D. Y. Patil College of Engineering and Innovation, Talegaon, Pune (2022-2025)</p>
                  <p className="text-sm text-yellow-400 font-semibold">Completed with 7.8 CGPA</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-300">Diploma in Computer Engineering</h4>
                  <p className="text-sm text-gray-300">Vidya Pratishthan's Polytechnic, Indapur, Pune (2019-2022)</p>
                  <p className="text-sm text-yellow-400 font-semibold">Completed with 85%</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-300">SSC (10th)</h4>
                  <p className="text-sm text-gray-300">SGM Vidyalaya, Nanded (2018-2019)</p>
                  <p className="text-sm text-yellow-400 font-semibold">Completed with 60%</p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="bg-slate-900/50 p-6 rounded-lg border border-yellow-400/30 md:col-span-2 lg:col-span-1">
              <h3 className="text-xl font-semibold mb-4 text-yellow-400">Experience</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-blue-300">Python Developer</h4>
                  <p className="text-sm text-gray-300">
                    <a href="https://lsoysapps.com/" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                      LSOYS Games and Apps
                    </a> (2024-2025)
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-300">Application Development Intern</h4>
                  <p className="text-sm text-gray-300">
                    <a href="https://nexanova.co.in/" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                       Nexanova Protech
                    </a> (2025-2025)
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-300">Web Operation Intern</h4>
                  <p className="text-sm text-gray-300">
                    <a href="https://techgeekconnect.com/" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                      Techgeekconnect Technology
                    </a> (10/2024-12/2024)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="mt-12 bg-slate-900/50 p-8 rounded-lg border border-yellow-400/30">
            <h3 className="text-2xl font-semibold mb-8 text-yellow-400 text-center">Skills & Technologies</h3>
            
            {/* Programming Languages */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4 text-blue-300 border-b border-yellow-400/30 pb-2">
                Programming Languages
              </h4>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                <div className="bg-slate-800 p-3 rounded-lg text-center hover:bg-yellow-400 hover:text-slate-900 transition-all transform hover:scale-105 border border-yellow-400/20">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-sm font-semibold">Python</div>
                </div>
                <div className="bg-slate-800 p-3 rounded-lg text-center hover:bg-yellow-400 hover:text-slate-900 transition-all transform hover:scale-105 border border-yellow-400/20">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-sm font-semibold">JavaScript</div>
                </div>
                <div className="bg-slate-800 p-3 rounded-lg text-center hover:bg-yellow-400 hover:text-slate-900 transition-all transform hover:scale-105 border border-yellow-400/20">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-sm font-semibold">C++</div>
                </div>
                <div className="bg-slate-800 p-3 rounded-lg text-center hover:bg-yellow-400 hover:text-slate-900 transition-all transform hover:scale-105 border border-yellow-400/20">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-sm font-semibold">Java</div>
                </div>
              </div>
            </div>

            {/* Web Development */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4 text-blue-300 border-b border-yellow-400/30 pb-2">
                Web Development
              </h4>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                <div className="bg-slate-800 p-3 rounded-lg text-center hover:bg-yellow-400 hover:text-slate-900 transition-all transform hover:scale-105 border border-yellow-400/20">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" alt="Flask" className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-sm font-semibold">Flask</div>
                </div>
                <div className="bg-slate-800 p-3 rounded-lg text-center hover:bg-yellow-400 hover:text-slate-900 transition-all transform hover:scale-105 border border-yellow-400/20">
                  <img src="https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png" alt="FastAPI" className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-sm font-semibold">FastAPI</div>
                </div>
                <div className="bg-slate-800 p-3 rounded-lg text-center hover:bg-yellow-400 hover:text-slate-900 transition-all transform hover:scale-105 border border-yellow-400/20">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-sm font-semibold">React.js</div>
                </div>
                <div className="bg-slate-800 p-3 rounded-lg text-center hover:bg-yellow-400 hover:text-slate-900 transition-all transform hover:scale-105 border border-yellow-400/20">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-sm font-semibold">Bootstrap</div>
                </div>
                <div className="bg-slate-800 p-3 rounded-lg text-center hover:bg-yellow-400 hover:text-slate-900 transition-all transform hover:scale-105 border border-yellow-400/20">
                  <div className="w-8 h-8 mx-auto mb-2 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">API</span>
                  </div>
                  <div className="text-sm font-semibold">RESTful API</div>
                </div>
              </div>
            </div>

            {/* Databases */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4 text-blue-300 border-b border-yellow-400/30 pb-2">
                Databases
              </h4>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                <div className="bg-slate-800 p-3 rounded-lg text-center hover:bg-yellow-400 hover:text-slate-900 transition-all transform hover:scale-105 border border-yellow-400/20">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-sm font-semibold">MySQL</div>
                </div>
                <div className="bg-slate-800 p-3 rounded-lg text-center hover:bg-yellow-400 hover:text-slate-900 transition-all transform hover:scale-105 border border-yellow-400/20">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-sm font-semibold">MongoDB</div>
                </div>
                <div className="bg-slate-800 p-3 rounded-lg text-center hover:bg-yellow-400 hover:text-slate-900 transition-all transform hover:scale-105 border border-yellow-400/20">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" alt="SQLite" className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-sm font-semibold">SQLite</div>
                </div>
                <div className="bg-slate-800 p-3 rounded-lg text-center hover:bg-yellow-400 hover:text-slate-900 transition-all transform hover:scale-105 border border-yellow-400/20">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-sm font-semibold">PostgreSQL</div>
                </div>
              </div>
            </div>

            {/* AI & ML */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4 text-blue-300 border-b border-yellow-400/30 pb-2">
                AI & Machine Learning
              </h4>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                <div className="bg-slate-800 p-3 rounded-lg text-center hover:bg-yellow-400 hover:text-slate-900 transition-all transform hover:scale-105 border border-yellow-400/20">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" alt="OpenAI" className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-sm font-semibold">OpenAI API</div>
                </div>
                <div className="bg-slate-800 p-3 rounded-lg text-center hover:bg-yellow-400 hover:text-slate-900 transition-all transform hover:scale-105 border border-yellow-400/20">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" alt="ML" className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-sm font-semibold">Machine Learning</div>
                </div>
                <div className="bg-slate-800 p-3 rounded-lg text-center hover:bg-yellow-400 hover:text-slate-900 transition-all transform hover:scale-105 border border-yellow-400/20">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" alt="Data Science" className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-sm font-semibold">Data Science</div>
                </div>
                <div className="bg-slate-800 p-3 rounded-lg text-center hover:bg-yellow-400 hover:text-slate-900 transition-all transform hover:scale-105 border border-yellow-400/20">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikit-learn/scikit-learn-original.svg" alt="ML Libraries" className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-sm font-semibold">ML Libraries</div>
                </div>
              </div>
            </div>

            {/* Version Control */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4 text-blue-300 border-b border-yellow-400/30 pb-2">
                Version Control
              </h4>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                <div className="bg-slate-800 p-3 rounded-lg text-center hover:bg-yellow-400 hover:text-slate-900 transition-all transform hover:scale-105 border border-yellow-400/20">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-sm font-semibold">Git</div>
                </div>
                <div className="bg-slate-800 p-3 rounded-lg text-center hover:bg-yellow-400 hover:text-slate-900 transition-all transform hover:scale-105 border border-yellow-400/20">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-sm font-semibold">GitHub</div>
                </div>
              </div>
            </div>

            {/* Tools & Technologies */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4 text-blue-300 border-b border-yellow-400/30 pb-2">
                Tools & Technologies
              </h4>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                <div className="bg-slate-800 p-3 rounded-lg text-center hover:bg-yellow-400 hover:text-slate-900 transition-all transform hover:scale-105 border border-yellow-400/20">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" alt="AWS" className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-sm font-semibold">AWS</div>
                </div>
                <div className="bg-slate-800 p-3 rounded-lg text-center hover:bg-yellow-400 hover:text-slate-900 transition-all transform hover:scale-105 border border-yellow-400/20">
                  <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="Postman" className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-sm font-semibold">Postman</div>
                </div>
                <div className="bg-slate-800 p-3 rounded-lg text-center hover:bg-yellow-400 hover:text-slate-900 transition-all transform hover:scale-105 border border-yellow-400/20">
                  <div className="w-8 h-8 mx-auto mb-2 bg-green-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">API</span>
                  </div>
                  <div className="text-sm font-semibold">API Testing</div>
                </div>
                <div className="bg-slate-800 p-3 rounded-lg text-center hover:bg-yellow-400 hover:text-slate-900 transition-all transform hover:scale-105 border border-yellow-400/20">
                  <div className="w-8 h-8 mx-auto mb-2 bg-purple-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">AI</span>
                  </div>
                  <div className="text-sm font-semibold">Prompt Engineering</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-yellow-400">
            My Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-slate-900/50 rounded-lg overflow-hidden border border-yellow-400/30 hover:border-yellow-400 transition-all transform hover:scale-105 cursor-pointer"
                onClick={() => openProject(project)}
              >
                <img
                  src={project.screenshot}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-yellow-400">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-blue-300 mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-slate-800 text-xs text-gray-300 rounded border border-yellow-400/30 hover:bg-yellow-400 hover:text-slate-900 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <a
                    href={project.github}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center space-x-2 text-blue-300 hover:text-blue-400 transition-colors"
                  >
                    <Github size={16} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-yellow-400">
            Get In Touch
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-slate-900/50 p-8 rounded-lg border border-yellow-400/30">
              <h3 className="text-2xl font-semibold mb-6 text-yellow-400">Send Me a Message</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-slate-800 border border-gray-600 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-slate-800 border border-gray-600 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-slate-800 border border-gray-600 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full p-3 bg-slate-800 border border-gray-600 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors"
                  ></textarea>
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full bg-yellow-400 text-slate-900 font-semibold py-3 px-6 rounded-lg hover:bg-yellow-300 transition-colors transform hover:scale-105"
                >
                  Send Message
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-slate-900/50 p-8 rounded-lg border border-yellow-400/30">
                <h3 className="text-2xl font-semibold mb-6 text-yellow-400">Contact Information</h3>
                <div className="space-y-4">
                  <a href="mailto:rohandhadke7620@gmail.com" className="flex items-center space-x-3 hover:text-yellow-400 transition-colors">
                    <Mail size={20} />
                    <span>rohandhadke7620@gmail.com</span>
                  </a>
                  <a href="tel:+1234567890" className="flex items-center space-x-3 hover:text-yellow-400 transition-colors">
                    <Phone size={20} />
                    <span>+91 9730888461</span>
                  </a>
                </div>
              </div>

              <div className="bg-slate-900/50 p-8 rounded-lg border border-yellow-400/30">
                <h3 className="text-2xl font-semibold mb-6 text-yellow-400">Follow Me</h3>
                <div className="grid grid-cols-2 gap-4">
                  <a href="https://github.com/rohandhadke" target="_blank" className="flex items-center space-x-3 p-3 bg-slate-800 rounded-lg hover:bg-yellow-400 hover:text-slate-900 transition-all">
                    <Github size={20} />
                    <span>GitHub</span>
                  </a>
                  <a href="https://www.linkedin.com/in/rohan-dhadke-774a3721a/" target="_blank" className="flex items-center space-x-3 p-3 bg-slate-800 rounded-lg hover:bg-blue-500 transition-all">
                    <Linkedin size={20} />
                    <span>LinkedIn</span>
                  </a>
                  <a href="https://www.instagram.com/mr.rohan_dhadke01?igsh=emo5eHYzOHlzNGtz" target="_blank" className="flex items-center space-x-3 p-3 bg-slate-800 rounded-lg hover:bg-pink-500 transition-all">
                    <Instagram size={20} />
                    <span>Instagram</span>
                  </a>
                  <a href="https://wa.me/9730888461?text=Hi%20there!%20I%20saw%20your%20portfolio%20and%20wanted%20to%20connect." target="_blank" className="flex items-center space-x-3 p-3 bg-slate-800 rounded-lg hover:bg-green-500 transition-all">
                    <MessageSquare size={20} />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 px-4 sm:px-6 lg:px-8 border-t border-yellow-400/30">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 rohandhadke. Built with React & Tailwind CSS. 
            <span className="text-yellow-400"> Made with ❤️ and lots of ☕</span>
          </p>
        </div>
      </footer>

      {/* Resume Popup Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => window.open('https://drive.google.com/file/d/1D91FTt9yV-RGbwWGfpb3y7OpqIyFIuTC/view?usp=sharing', '_blank')}
          className="bg-yellow-400 text-slate-900 p-4 rounded-full shadow-lg hover:bg-yellow-300 transition-all transform hover:scale-110 hover:shadow-xl border-2 border-yellow-400/50"
          title="View Resume"
        >
          <FileText size={24} />
        </button>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-yellow-400/30">
            <div className="sticky top-0 bg-slate-900 border-b border-yellow-400/30 p-4 flex justify-between items-center">
              <h3 className="text-2xl font-semibold text-yellow-400">{selectedProject.title}</h3>
              <button
                onClick={closeProject}
                className="p-2 hover:bg-slate-800 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6">
              {/* Image Gallery */}
              <div className="relative mb-6">
                <img
                  src={selectedProject.images[currentImageIndex]}
                  alt={selectedProject.title}
                  className="w-full h-64 md:h-96 object-cover rounded-lg"
                />
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 bg-slate-800/80 rounded-full hover:bg-slate-700 transition-colors"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-slate-800/80 rounded-full hover:bg-slate-700 transition-colors"
                    >
                      <ChevronRight size={24} />
                    </button>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {selectedProject.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentImageIndex ? 'bg-yellow-400' : 'bg-gray-400'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {selectedProject.description}
              </p>

              {/* Links */}
              <div className="flex space-x-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-yellow-400 text-slate-900 px-4 py-2 rounded-lg hover:bg-yellow-300 transition-colors"
                >
                  <Github size={16} />
                  <span>View on GitHub</span>
                </a>
                <button className="inline-flex items-center space-x-2 bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors">
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;