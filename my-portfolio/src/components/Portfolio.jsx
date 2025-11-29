import React, { useState } from "react";
import Navbar from "./Navbar";
import { useEffect } from "react";

export default function Portfolio() {
  const [modalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-scroll");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeUp");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-500">
      <Navbar />

      {/* Profile Image + Click Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50"
          onClick={() => setModalOpen(false)}
        >
          <img
            src="/profile.jpg"
            alt="Murali Dharan V"
            className="max-w-[85vw] max-h-[85vh] rounded-2xl shadow-2xl border-4 border-blue-400"
          />
        </div>
      )}

      {/* HERO SECTION */}
      <section className="section py-16 flex flex-col md:flex-row items-center gap-10">

        {/* Small profile image */}
        <div className="relative">
          <div
            className="w-40 h-40 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
            onClick={() => setModalOpen(true)}
          >
            <img
              src="/profile.jpg"
              alt="Murali Dharan V"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Text + Buttons + Icons */}
        <div>
          <p className="text-sm uppercase tracking-wide text-gray-500 dark:text-gray-400">
            Profile
          </p>
          <h1 className="text-4xl font-bold mb-2">
            Murali Dharan V
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Information Technology undergraduate (B.Tech, 2022–2026) with a
            strong interest in backend development, REST APIs, and blockchain
            integrations. Motivated to design efficient backend services and
            scalable software solutions.
          </p>

          {/* Buttons */}
          <div className="mt-5 flex flex-wrap gap-4 text-sm">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="#contact" className="btn-outline">Contact</a>

            {/* View Resume */}
            <a
              href="/Murali_Dharan_V_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              View Resume
            </a>

            {/* Download Resume */}
            <a
              href="/Murali_Dharan_V_Resume.pdf"
              download
              className="btn-primary"
            >
              Download Resume
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 mt-5 text-2xl justify-center animate-on-scroll">

            <a
              href="https://github.com/murali4878"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition-transform duration-200"
            >
              <img
                src="https://img.icons8.com/ios-glyphs/50/github.png"
                alt="GitHub"
                className="w-8 h-8"
              />
            </a>

            <a
              href="https://linkedin.com/in/murliz"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition-transform duration-200"
            >
              <img
                src="https://img.icons8.com/color/48/linkedin.png"
                alt="LinkedIn"
                className="w-8 h-8"
              />
            </a>

            <a
              href="mailto:murliz0407@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition-transform duration-200"
            >
              <img
                src="https://img.icons8.com/color/48/gmail-new.png"
                alt="Email"
                className="w-8 h-8"
              />
            </a>

          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section mt-16 animate-on-scroll">
        <h2 className="section-title">About Me</h2>
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          I am a motivated and detail-oriented Information Technology undergraduate seeking an entry-level opportunity to apply my technical skills. I enjoy designing efficient backend services, building REST APIs, and working on scalable, real-world software solutions.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section mt-16 animate-on-scroll">
        <h2 className="section-title">Technical Skills</h2>

        {/* Old Skills (Kept) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm mb-10">
          <div className="card">
            <h3 className="font-semibold mb-2">Programming</h3>
            <ul className="text-gray-600 dark:text-gray-300 space-y-1">
              <li>HTML, CSS</li>
              <li>Python</li>
              <li>JavaScript (Node.js)</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="font-semibold mb-2">Frameworks & Tools</h3>
            <ul className="text-gray-600 dark:text-gray-300 space-y-1">
              <li>Express.js</li>
              <li>Spring Boot (basic)</li>
              <li>Postman, REST APIs</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="font-semibold mb-2">Databases</h3>
            <ul className="text-gray-600 dark:text-gray-300 space-y-1">
              <li>MySQL</li>
              <li>MongoDB</li>
            </ul>
          </div>
        </div>

        {/* NEW Icons Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 text-center">

          <div className="skill-card">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="skill-icon" />
            <p>HTML</p>
          </div>

          <div className="skill-card">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="skill-icon" />
            <p>CSS</p>
          </div>

          <div className="skill-card">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="skill-icon" />
            <p>JavaScript</p>
          </div>

          <div className="skill-card">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="skill-icon" />
            <p>Python</p>
          </div>

          <div className="skill-card">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="skill-icon" />
            <p>Node.js</p>
          </div>

          <div className="skill-card">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" className="skill-icon dark:invert" />
            <p>Express.js</p>
          </div>

          <div className="skill-card">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" className="skill-icon" />
            <p>MySQL</p>
          </div>

          <div className="skill-card">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className="skill-icon" />
            <p>MongoDB</p>
          </div>

          <div className="skill-card">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" className="skill-icon" />
            <p>Postman</p>
          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section mt-16 animate-on-scroll">
        <h2 className="section-title">Projects</h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
          Projects will be added soon — currently in development 🚀
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">

          {/* Project 1 */}
          <div className="card relative">
            <span className="absolute top-2 right-2 bg-yellow-400 text-black text-xs px-2 py-1 rounded">
              Coming Soon
            </span>
            <h3 className="text-lg font-semibold">Instagram Clone with NFT Marketplace</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              A full-stack social media app with NFT integration.
            </p>
            <div className="flex gap-3 mt-4 text-xs text-gray-400">
              <button disabled className="bg-gray-300 dark:bg-gray-700 px-3 py-1 rounded opacity-60 cursor-not-allowed">
                View Code
              </button>
              <button disabled className="bg-gray-300 dark:bg-gray-700 px-3 py-1 rounded opacity-60 cursor-not-allowed">
                Live Demo
              </button>
            </div>
          </div>

          {/* Project 2 */}
          <div className="card relative">
            <span className="absolute top-2 right-2 bg-yellow-400 text-black text-xs px-2 py-1 rounded">
              Coming Soon
            </span>
            <h3 className="text-lg font-semibold">Movie Recommendation System</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Personalized movie suggestions using APIs and database.
            </p>
            <div className="flex gap-3 mt-4 text-xs text-gray-400">
              <button disabled className="bg-gray-300 dark:bg-gray-700 px-3 py-1 rounded opacity-60 cursor-not-allowed">
                View Code
              </button>
              <button disabled className="bg-gray-300 dark:bg-gray-700 px-3 py-1 rounded opacity-60 cursor-not-allowed">
                Live Demo
              </button>
            </div>
          </div>

        </div>
      </section>


      {/* INTERNSHIP */}
      <section id="experience" className="section mt-16 text-sm animate-on-scroll">
        <h2 className="section-title">Internship</h2>

        <div className="card flex gap-4 items-start">

          {/* Company Logo */}
          <img
            src="/fabc-logo.png"
            alt="FABC Logo"
            className="w-14 h-14 rounded-lg object-contain border border-gray-300 dark:border-gray-700"
          />

          <div>
            <h3 className="font-semibold">
              Blockchain Intern – FABC (First Academy of Blockchain Council)
            </h3>

            {/* Website Link */}
            <a
              href="https://fabc.global"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline text-xs"
            >
              fabc.global
            </a>

            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
              Jan 2025 – Feb 2025
            </p>

            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
              <li>Worked on backend services in blockchain-powered applications</li>
              <li>Smart contract testing using Hardhat</li>
              <li>Integrating blockchain APIs with Node.js & Express.js</li>
              <li>Improving DApp performance & security</li>
            </ul>

            {/* View Certificate Button */}
            <div className="mt-4">
              <a
                href="/FABC_Certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                View Internship Certificate
              </a>
            </div>
          </div>

        </div>
      </section>
      {/* EDUCATION */}
      <section id="education" className="section mt-16 animate-on-scroll">

        <h2 className="section-title flex items-center justify-center gap-3 text-xl font-bold">
          <img
            src="cap.png"
            alt="Education Icon"
            className="w-8 h-8"
          />
          Education
        </h2>


        {/* College */}
        <div className="card flex gap-6 items-center mb-6">
          <img
            src="/kalasalingam-logo.png"
            alt="KARE Logo"
            className="w-16 h-16 object-contain rounded-lg border border-gray-300 dark:border-gray-700 shadow"
          />
          <div>
            <h3 className="font-semibold text-lg">B.Tech – Information Technology</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Kalasalingam Academy of Research and Education (KARE)
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              2022 – 2026 | Tamil Nadu, India
            </p>
          </div>
        </div>

        {/* School */}
        <div className="card flex gap-6 items-center">
          <img
            src="/school-logo.png"
            alt="USP School Logo"
            className="w-16 h-16 object-contain rounded-lg border border-gray-300 dark:border-gray-700 shadow"
          />
          <div>
            <h3 className="font-semibold text-lg">USP Matric Hr Sec School</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Tenkasi, Tamil Nadu
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SSLC – 2020 | HSC – 2022
            </p>
          </div>
        </div>
      </section>




      {/* CONTACT */}
      <section id="contact" className="section mt-16 mb-20 text-sm animate-on-scroll">

        <h2 className="section-title flex items-center justify-center gap-3 text-xl font-bold">
          <img
            src="call-logo.png"
            alt="Contact Icon"
            className="w-8 h-8"
          />
          Contact
        </h2>

        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Reach out for internships, backend or blockchain projects, or collaborations.
        </p>
        <div className="space-y-2 mb-4">
          <div>📞 +91 86105 39830</div>
          <div>📧 murliz0407@gmail.com</div>
          <div>🔗 linkedin.com/in/murliz</div>
          <div>💻 github.com/murali4878</div>
        </div>
        <a href="mailto:murliz0407@gmail.com" className="btn-primary">Email Me</a>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/918610539830"
        className="fixed bottom-6 right-6 bg-white dark:bg-gray-800 w-14 h-14 
             rounded-full shadow-lg flex items-center justify-center 
             border border-gray-300 hover:scale-110 transition-transform"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="/walogo.png"
          alt="WhatsApp"
          className="w-8 h-8"
        />
      </a>

      <footer className="py-6 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Murali Dharan V — Portfolio
      </footer>
    </div>
  );
}
