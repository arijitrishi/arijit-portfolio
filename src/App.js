import React, { useCallback, useState, useEffect } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { motion } from "framer-motion";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { ArrowUpCircle, Menu } from "lucide-react";
import profileImage from "./assets/arijit.jpg";

export default function Home() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const [showButton, setShowButton] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white font-sans scroll-smooth overflow-x-hidden">
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

      {/* Hamburger Navbar */}
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md shadow-xl px-4 sm:px-6 py-4 flex justify-between items-center border-b border-cyan-400">
        <span className="text-xl sm:text-2xl font-bold text-cyan-300 tracking-wide">Arijit</span>
        <button onClick={toggleMenu} className="sm:hidden text-cyan-300">
          <Menu size={28} />
        </button>
       <div className="hidden sm:flex gap-6 text-sm font-medium">
  <a href="#home" className="hover:text-cyan-300 transition">Home</a>
  <a href="#developer" className="hover:text-cyan-300 transition">Profile</a>
  <a href="#skills" className="hover:text-cyan-300 transition">Skills</a> {/* ← Add this line */}
  <a href="#experience" className="hover:text-cyan-300 transition">Experience</a>
  <a href="#projects" className="hover:text-cyan-300 transition">Projects</a>
  <a href="#certs" className="hover:text-cyan-300 transition">Certifications</a>
  <a href="#contact" className="hover:text-cyan-300 transition">Contact</a>
</div>
      </nav>

{isMenuOpen && (
  <motion.div
    initial={{ x: "-100%", opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: "-100%", opacity: 0 }}
    transition={{ duration: 0.4, ease: "easeInOut" }}
    className="sm:hidden fixed top-0 left-0 w-4/5 h-full overflow-y-auto bg-gradient-to-b from-[#111827] via-[#1f2937] to-[#374151] shadow-xl z-50 p-6 rounded-r-xl"
  >
          <div className="flex justify-between items-center mb-6">
            <span className="text-cyan-300 text-xl font-semibold">Menu</span>
            <button
              onClick={toggleMenu}
              className="text-white text-2xl font-bold focus:outline-none"
              aria-label="Close menu"
            >
              &times;
            </button>
          </div>

          {/* Profile Info */}
          <div className="flex flex-col items-center text-center mb-8">
            <img src={profileImage} alt="Profile" className="w-20 h-20 rounded-full border-2 border-cyan-400 shadow-md mb-3 object-cover" />
            <h3 className="text-white font-semibold text-lg">Arijit Ghosh</h3>
            <p className="text-cyan-400 text-sm">Java Backend Developer</p>
          </div>

     <nav className="space-y-5 text-left mb-10 px-2">

            {[
              { id: "home", label: "🏠 Home" },
              { id: "developer", label: "👨‍💻 Profile" },
              { id: "skills", label: "🛠️ Skills" },
              { id: "experience", label: "💼 Experience" },
              { id: "projects", label: "📂 Projects" },
              { id: "certs", label: "🎓 Certifications" },
              { id: "contact", label: "📩 Contact" }
            ].map((item, i) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                onClick={toggleMenu}
                className="block text-lg font-medium text-white hover:text-cyan-400"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 * i, duration: 0.3 }}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>
  </motion.div>
      )}

      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-2 rounded-full bg-cyan-500 hover:bg-cyan-400 transition-all"
          aria-label="Scroll to top"
        >
          <ArrowUpCircle className="text-white w-8 h-8" />
        </button>
      )}
  <motion.section
        id="home"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 flex flex-col items-center justify-center text-center py-24 px-4 sm:px-6 md:px-10"
      >
        <img
          src={profileImage}
          alt="Arijit Ghosh"
          className="w-28 sm:w-36 h-28 sm:h-36 rounded-full shadow-2xl mb-6 border-4 border-white object-cover hover:scale-105 transition-transform"
        />
        <h1 className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-cyan-400 to-blue-500 mb-4">
          Hi, I'm Arijit Ghosh
        </h1>
        <p className="text-base sm:text-xl text-slate-200 max-w-2xl mb-6">
          Java Backend Developer | Software Engineer
        </p>
        <div className="flex flex-wrap justify-center gap-6 mt-2">
          <a href="https://github.com/arijitrishi" target="_blank" rel="noreferrer noopener" className="group hover:scale-110 transition-transform">
            <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center animate-pulse hover:shadow-lg hover:shadow-black/50">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                 <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.385.6.113.793-.26.793-.577 0-.285-.01-1.04-.016-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.09-.745.082-.73.082-.73 1.205.086 1.838 1.237 1.838 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.333-5.466-5.931 0-1.31.467-2.38 1.235-3.22-.123-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.51 11.51 0 013.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.805 5.624-5.475 5.921.43.372.823 1.103.823 2.222 0 1.606-.014 2.902-.014 3.293 0 .32.192.694.8.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </div>
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/arijit-ghosh-033257190" target="_blank" rel="noreferrer noopener" className="group hover:scale-110 transition-transform">
            <div className="w-10 h-10 rounded-full bg-[#0077B5] flex items-center justify-center animate-pulse hover:shadow-lg hover:shadow-cyan-500/50">
              <svg fill="white" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M20.447 20.452H17V14.89c0-1.327-.027-3.037-1.852-3.037-1.853 0-2.137 1.445-2.137 2.94v5.659h-3.447V9h3.311v1.561h.047c.461-.873 1.588-1.794 3.27-1.794 3.491 0 4.137 2.3 4.137 5.287v6.398zM5.337 7.433a2.003 2.003 0 1 1 0-4.006 2.003 2.003 0 0 1 0 4.006zM6.93 20.452H3.743V9h3.188v11.452zM22.225 0H1.771C.792 0 0 .775 0 1.732v20.535C0 23.225.792 24 1.771 24h20.451C23.2 24 24 23.225 24 22.267V1.732C24 .775 23.2 0 22.225 0z" />
              </svg>
            </div>
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </motion.section>

     {/* Developer Profile */}
     
      <motion.section id="developer" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="py-16 px-4 sm:px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 border-b-4 border-cyan-400 inline-block">🚀 Developer Profile</h2>
        <div className="bg-slate-800 shadow-lg p-6 sm:p-8 rounded-xl text-slate-200">
          <ul className="list-disc ml-6 space-y-3 text-sm sm:text-base">
            <li>3+ years experience in Java, Spring Boot, REST APIs</li>
            <li>Proficient in Microservices, Hibernate, AWS (Lambda, Cognito, S3, RDS)</li>
            <li>Tools: Docker, Git, Maven, Redis, Terraform, MySQL, MongoDB</li>
            <li>Projects: Gift Card Platform, Epidemic Simulator</li>
          </ul>
        </div>
      </motion.section>


      <motion.section
        id="skills"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 px-6 max-w-5xl mx-auto text-slate-100"
      >
        <h2 className="text-4xl font-bold text-center mb-10 border-b-4 border-cyan-400 inline-block">🛠️ Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm sm:text-base">
          <div>
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">Languages</h3>
            <p>Java, Python, C, SQL</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">Frameworks</h3>
            <p>Spring Boot, Hibernate, AngularJS, Node.js, ReactJS</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">Cloud & DevOps</h3>
            <p>AWS (Cognito, Lambda, API Gateway, RDS, S3, ECS Fargate), Docker, Terraform</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">Databases</h3>
            <p>MySQL, MongoDB</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">Tools & Utilities</h3>
            <p>AWS (Cognito, Lambda, API Gateway, RDS, S3, ECS Fargate)</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">Concepts</h3>
            <p>RESTful APIs, Microservices Architecture, Object-Oriented Programming (OOP), Caching, CI/CD</p>
          </div>
        </div>
      </motion.section>

      <motion.section id="experience" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="py-16 px-4 sm:px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 border-b-4 border-cyan-400 inline-block">💼 Experience</h2>
        <div className="space-y-8 text-slate-300 text-sm sm:text-base">
           <div>
            <h3 className="text-lg sm:text-xl font-semibold text-cyan-300">Freelance Backend Developer (Part-Time) – Remote (Oct 2024 – May 2025)</h3>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Worked on part-time freelance development projects while preparing for postgraduate entrance exams</li>
              <li>Delivered RESTful API services and backend modules using Java, Spring Boot, and MySQL for educational tools and small business clients</li>
              <li>Maintained code quality through JUnit and Maven, and followed Agile practices independently</li>
              <li>Balanced self-study for MTech entrance with technical consulting projects to stay hands-on and up-to-date</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-cyan-300">Java Developer – Klizo Solutions Pvt Ltd (May 2024 – Sep 2024)</h3>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Developed RESTful APIs integrated with ReactJS</li>
              <li>Improved backend response times by 20%</li>
              <li>Participated in Agile scrums and optimized development workflow using Docker</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-cyan-300">Software Engineer – Persistent Systems Ltd (Sep 2021 – Sep 2023)</h3>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Designed scalable Java microservices integrated with AngularJS</li>
              <li>Improved API performance by 25% through backend optimization</li>
              <li>Led automation project with Amazon CodeWhisperer and AWS for CI/CD pipelines</li>
            </ul>
          </div>
        </div>
      </motion.section>

      <motion.section id="projects" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="py-16 px-4 sm:px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 border-b-4 border-cyan-400 inline-block">🎞️ Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-800 shadow-md rounded-xl p-5 hover:shadow-xl transition">
            <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-2">Gift Card Inventory Platform (Ncentiva - GCIP)</h3>
            <p className="text-sm text-slate-300 mb-2">Java 11 · Spring Boot · MySQL · AWS Cognito · Redis</p>
            <p className="text-sm text-slate-400 mb-4">Managed B2B gift card disbursements, secured APIs with Cognito, optimized performance with Redis.</p>
          </div>
          <div className="bg-slate-800 shadow-md rounded-xl p-5 hover:shadow-xl transition">
            <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-2">EXCEADS – UVA (University of Virginia)</h3>
            <p className="text-sm text-slate-300 mb-2">Java · Spring Boot · Hibernate · AngularJS · MySQL</p>
            <p className="text-sm text-slate-400 mb-4">Developed a simulation tool for epidemiology models with full-stack integration.</p>
          </div>
        </div>
      </motion.section>
 <motion.section id="certs" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="py-16 px-4 sm:px-6 max-w-5xl mx-auto relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 border-b-4 border-cyan-400 inline-block">🎓 Education & Certifications</h2>
        <ul className="list-disc ml-6 text-slate-200 space-y-4 text-sm sm:text-base">
          <li className="leading-relaxed">B.Tech in Computer Science & Engineering – MAKAUT (2017–2021) – CGPA: 8.26</li>
          <li><a href="https://certx.in/certificate/0270772f-3809-4400-b29b-1e1c61cd0997416660" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">AI Tools Workshop – Be10x</a></li>
          <li><a href="https://drive.google.com/file/d/1nKm9UQC2Sa7hnVhI-bBd7Mlj7ihQBfui/view" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">AWS CI/CD Pipeline – Great Learning</a></li>
          <li><a href="https://drive.google.com/file/d/1VGRsB7c48ybprBzg43f9yMAbZy2g5mNQ/view" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Power BI for Business – Skill Nation</a></li>
          <li><a href="https://drive.google.com/file/d/1337F7U87zmWic5CUteRIc19geQ5ZRX4J/view" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Java Basic Assessment – LearnTube.ai</a></li>
        </ul>
      </motion.section>

          {/* Social Media Icons at the end of Contact section */}
      <motion.section id="contact" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="py-20 px-6 max-w-2xl mx-auto text-center relative z-10">
        <h2 className="text-4xl font-bold text-center mb-10 border-b-4 border-cyan-400 inline-block">📩 Get In Touch</h2>
        <p className="text-cyan-300 mb-2">📧 <strong>arijit.g499@gmail.com</strong></p>
        <p className="text-cyan-300 mb-4">📞 <strong>+91 8013159053</strong></p>
        <a href="https://drive.google.com/file/d/16wADXxB_kSkn0NfpMjzrtGU_8KTTQ5IZ/view?usp=sharing" target="_blank" rel="noreferrer noopener" className="inline-block bg-cyan-500 text-white px-6 py-3 rounded-md hover:bg-cyan-600 transition mb-4">📄 Download My Resume</a>
        <br />
        <a href="https://drive.google.com/file/d/17shkULmdPOvxGQoRVyZPj78sbniiuAKp/view?usp=sharing" target="_blank" rel="noreferrer noopener" className="inline-block text-cyan-300 underline mt-2">🎓 View Engineering Degree</a>

      {/* Social Media Icons with Colored Circular Backgrounds */}
      <style>
        {`
          @keyframes pulse-glow {
            0% { transform: scale(1); filter: drop-shadow(0 0 0px rgba(255, 255, 255, 0)); }
            50% { transform: scale(1.05); filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.8)); }
            100% { transform: scale(1); filter: drop-shadow(0 0 0px rgba(255, 255, 255, 0)); }
          }
        `}
      </style>
      <div className="mt-8 flex justify-center gap-6">
        <a href="https://www.facebook.com/share/1NR4Xs3xtN/" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
          <div className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center animate-[pulse-glow_2s_infinite]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" className="w-5 h-5" viewBox="0 0 320 512">
              <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S293.88 0 269.5 0c-73.14 0-121 44.38-121 124.72v70.62H89.09V288h59.41v224h92.6V288z"/>
            </svg>
          </div>
        </a>
        <a href="https://www.instagram.com/i_am_arijit1?igsh=bm9wenI4amMxZGNm" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center animate-[pulse-glow_2s_infinite]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" className="w-5 h-5" viewBox="0 0 448 512">
              <path d="M224.1 141c-63.6 0-115.1 51.5-115.1 115.1 0 63.6 51.5 115.1 115.1 115.1 63.6 0 115.1-51.5 115.1-115.1 0-63.6-51.5-115.1-115.1-115.1zm0 190.6c-41.8 0-75.5-33.8-75.5-75.5s33.8-75.5 75.5-75.5 75.5 33.8 75.5 75.5-33.7 75.5-75.5 75.5zm146.4-194.3c0 14.9-12 26.9-26.9 26.9s-26.9-12-26.9-26.9 12-26.9 26.9-26.9 26.9 12 26.9 26.9z"/>
            </svg>
          </div>
        </a>
        <a href="https://x.com/Arijitghosh3115?t=JYJ5KMM299cyTcrR-aZWAw&s=09" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
          <div className="w-10 h-10 rounded-full bg-[#1DA1F2] flex items-center justify-center animate-[pulse-glow_2s_infinite]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" className="w-5 h-5" viewBox="0 0 512 512">
              <path d="M459.4 151.7c.3 4.1.3 8.3.3 12.4 0 126.5-96.3 272.3-272.3 272.3-54.2 0-104.7-15.9-147.3-43 7.6.9 14.5 1.2 22.1 1.2 45.1 0 86.6-15.3 119.5-41.1-42.2-1-77.7-28.5-90-66.6 5.9.9 11.5 1.5 17.8 1.5 8.6 0 17.1-1.2 25.1-3.3-44.4-9.1-77.8-48.1-77.8-95v-1.2c13.1 7.3 28.2 11.8 44.1 12.4-26.4-17.6-43.8-47.5-43.8-81.3 0-18 4.9-34.9 13.4-49.5 48.7 59.8 121.5 99.3 203.2 103.4-1.5-7.3-2.4-14.9-2.4-22.7 0-54.7 44.4-99.1 99.1-99.1 28.5 0 54.2 12 72.2 31.4 22.7-4.4 44.1-12.7 63.5-24-7.6 23.7-23.7 43.8-44.7 56.4 20.1-2.1 39.3-7.6 57.2-15.3-13.4 19.8-30.1 37.3-49.3 51.3z"/>
            </svg>
          </div>
        </a>
      </div>

      </motion.section>
    </div>
  );
}