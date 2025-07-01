import React, { useCallback, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { ArrowUpCircle } from "lucide-react";
import profileImage from "./assets/arijit.jpg";

export default function Home() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white font-sans scroll-smooth overflow-x-hidden">
      {/* ✅ Animated Particle Background - corrected */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 w-full h-full z-0"
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "transparent" } },
          particles: {
            number: { value: 80, density: { enable: true, area: 800 } },
            color: { value: "#00ffff" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: { min: 1, max: 4 } },
            links: {
              enable: true,
              distance: 150,
              color: "#00ffff",
              opacity: 0.3,
              width: 1,
            },
            move: { enable: true, speed: 1.2, outModes: { default: "bounce" } },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "grab" },
              resize: true,
            },
            modes: {
              grab: { distance: 140, line_linked: { opacity: 0.5 } },
            },
          },
          detectRetina: true,
        }}
      />

      {/* 🔽 Foreground content starts here */}

      {/* Sticky Navbar */}
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md shadow-xl px-4 sm:px-6 py-4 flex justify-between items-center border-b border-cyan-400">
        <span className="text-xl sm:text-2xl font-bold text-cyan-300 tracking-wide">Arijit</span>
        <div className="space-x-4 sm:space-x-6 text-xs sm:text-sm font-medium">
          <a href="#home" className="hover:text-cyan-300 transition">Home</a>
          <a href="#developer" className="hover:text-cyan-300 transition">Profile</a>
          <a href="#experience" className="hover:text-cyan-300 transition">Experience</a>
          <a href="#projects" className="hover:text-cyan-300 transition">Projects</a>
          <a href="#certs" className="hover:text-cyan-300 transition">Certifications</a>
          <a href="#contact" className="hover:text-cyan-300 transition">Contact</a>
        </div>
      </nav>

      {/* 🔼 Scroll to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-2 rounded-full bg-cyan-500 hover:bg-cyan-400 transition-all"
          aria-label="Scroll to top"
        >
          <ArrowUpCircle className="text-white w-8 h-8" />
        </button>
      )}

      {/* Hero Section */}
      <motion.section
        id="home"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 flex flex-col items-center justify-center text-center py-28 px-4 sm:px-6 md:px-10"
      >
        <img
          src={profileImage}
          alt="Arijit Ghosh"
          className="w-32 sm:w-40 h-32 sm:h-40 rounded-full shadow-2xl mb-6 border-4 border-white object-cover hover:scale-105 transition-transform"
        />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-cyan-400 to-blue-500 mb-4">
          Hi, I'm Arijit Ghosh
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-slate-200 max-w-2xl mb-6">
          Java Backend Developer | Software Engineer
        </p>
        <div className="flex flex-wrap justify-center gap-6 mt-2">
          <a
            href="https://github.com/arijitrishi"
            target="_blank"
            rel="noreferrer noopener"
            className="hover:scale-110 transition text-teal-300 underline"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/arijit-ghosh-033257190"
            target="_blank"
            rel="noreferrer noopener"
            className="hover:scale-110 transition text-teal-300 underline"
          >
            LinkedIn
          </a>
        </div>
      </motion.section>

     {/* Developer Profile */}
      <motion.section id="developer" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 border-b-4 border-cyan-400 inline-block">🚀 Developer Profile</h2>
        <div className="bg-slate-800 shadow-lg p-8 rounded-xl text-slate-200">
          <ul className="list-disc ml-6 space-y-3">
            <li>2+ years experience in Java, Spring Boot, REST APIs</li>
            <li>Proficient in Microservices, Hibernate, AWS (Lambda, Cognito, S3, RDS)</li>
            <li>Tools: Docker, Git, Maven, Redis, Terraform, MySQL, MongoDB</li>
            <li>Projects: Gift Card Platform, Epidemic Simulator</li>
          </ul>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section id="experience" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 border-b-4 border-cyan-400 inline-block">💼 Experience</h2>
        <div className="space-y-8 text-slate-300">
          <div>
            <h3 className="text-xl font-semibold text-cyan-300">Java Developer – Klizo Solutions Pvt Ltd (May 2024 – Sep 2024)</h3>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Developed RESTful APIs integrated with ReactJS</li>
              <li>Improved backend response times by 20%</li>
              <li>Participated in Agile scrums and optimized development workflow using Docker</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-cyan-300">Software Engineer – Persistent Systems Ltd (Sep 2021 – Sep 2023)</h3>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Designed scalable Java microservices integrated with AngularJS</li>
              <li>Improved API performance by 25% through backend optimization</li>
              <li>Led automation project with Amazon CodeWhisperer and AWS for CI/CD pipelines</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section id="projects" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 border-b-4 border-cyan-400 inline-block">🎞️ Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-800 shadow-md rounded-xl p-5 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">Gift Card Inventory Platform (Ncentiva - GCIP)</h3>
            <p className="text-sm text-slate-300 mb-2">Java 11 · Spring Boot · MySQL · AWS Cognito · Redis</p>
            <p className="text-sm text-slate-400 mb-4">Managed B2B gift card disbursements, secured APIs with Cognito, optimized performance with Redis.</p>
          </div>
          <div className="bg-slate-800 shadow-md rounded-xl p-5 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">EXCEADS – UVA (University of Virginia)</h3>
            <p className="text-sm text-slate-300 mb-2">Java · Spring Boot · Hibernate · AngularJS · MySQL</p>
            <p className="text-sm text-slate-400 mb-4">Developed a simulation tool for epidemiology models with full-stack integration.</p>
          </div>
        </div>
      </motion.section>

{/* Certifications & Education */}
      <motion.section id="certs" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="py-20 px-6 max-w-5xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-center mb-10 border-b-4 border-cyan-400 inline-block">🎓 Education & Certifications</h2>
        <ul className="list-disc ml-6 text-slate-200 space-y-4">
          <li className="leading-relaxed">B.Tech in Computer Science & Engineering – MAKAUT (2017–2021) – CGPA: 8.26</li>
          <li><a href="https://certx.in/certificate/0270772f-3809-4400-b29b-1e1c61cd0997416660" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">AI Tools Workshop – Be10x</a></li>
          <li><a href="https://drive.google.com/file/d/1nKm9UQC2Sa7hnVhI-bBd7Mlj7ihQBfui/view" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">AWS CI/CD Pipeline – Great Learning</a></li>
          <li><a href="https://drive.google.com/file/d/1VGRsB7c48ybprBzg43f9yMAbZy2g5mNQ/view" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Power BI for Business – Skill Nation</a></li>
          <li><a href="https://drive.google.com/file/d/1337F7U87zmWic5CUteRIc19geQ5ZRX4J/view" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Java Basic Assessment – LearnTube.ai</a></li>
        </ul>
      </motion.section>

      {/* Contact Section with working buttons */}
      <motion.section id="contact" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="py-20 px-6 max-w-2xl mx-auto text-center relative z-10">
        <h2 className="text-4xl font-bold text-center mb-10 border-b-4 border-cyan-400 inline-block">📩 Get In Touch</h2>
        <p className="text-cyan-300 mb-2">📧 <strong>arijit.g499@gmail.com</strong></p>
        <p className="text-cyan-300 mb-4">📞 <strong>+91 8013159053</strong></p>
        <a href="https://drive.google.com/file/d/1xGkcD29VBoYzTA5eCViuNhigYwi6r82X/view?usp=drive_link" target="_blank" rel="noreferrer noopener" className="inline-block bg-cyan-500 text-white px-6 py-3 rounded-md hover:bg-cyan-600 transition mb-4">📄 Download My Resume</a>
        <br />
        <a href="https://drive.google.com/file/d/17shkULmdPOvxGQoRVyZPj78sbniiuAKp/view?usp=sharing" target="_blank" rel="noreferrer noopener" className="inline-block text-cyan-300 underline mt-2">🎓 View Engineering Degree</a>
      </motion.section>
     
    </div>
  );
}