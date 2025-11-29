import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "projects", "experience", "contact", "education"];
      let found = "";
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop - 100 <= window.scrollY) {
          found = id;
        }
      });
      setActive(found);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Internship", link: "#experience" },
    { name: "Education", link: "#education" },
    { name: "Contact", link: "#contact" }
  ];

  return (
    <nav className="fixed w-full backdrop-blur bg-white/60 dark:bg-gray-900/60 shadow z-50">
      <div className="max-w-5xl mx-auto flex justify-between p-4">
        <h1 className="font-bold text-lg">Murali</h1>

        <div className="flex gap-6">
          {navItems.map((item) => (
            <a
              key={item.link}
              href={item.link}
              className={
                active === item.link.replace("#", "")
                  ? "text-blue-600 font-semibold"
                  : "hover:text-blue-600"
              }
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
