import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import proj1 from "../assets/project1.jpg";
import proj2 from "../assets/project2.jpg";
import proj3 from "../assets/project3.jpg";
import proj4 from "../assets/project4.jpg";
import proj5 from "../assets/project5.jpg";

const projects = [
  {
    title: "Food Decider",
    year: "2024",
    description:
      "A playful React web app that helps users decide what to eat, drink, or snack on when they can’t make up their mind.",
    tech: ["React", "Vite", "Tailwind CSS"],
    img: proj3,
    link: "https://liuyili2000.github.io/Food-Decider/",
    process: {
      problem: "Decision fatigue when choosing food/snacks.",
      approach:
        "Built a lightweight flow with randomized suggestions and category-based choices.",
      decisions:
        "Kept interactions minimal for speed; used component structure + utility styling for fast iteration.",
    },
  },
  {
    title: "Smart Budget Console App",
    year: "2025",
    description:
      "A menu-driven C# console app for tracking personal budgets with auto-save and a one-click reset.",
    tech: ["C#", "Console App", ".NET 8"],
    img: proj4,
    link: "https://replit.com/@lulu2020xo/csharp-menu-system",
    process: {
      problem: "A simple offline way to log income/expenses without UI overhead.",
      approach:
        "Designed an intuitive menu system with safe input handling and persistent storage.",
      decisions:
        "Separated menu/data/storage logic; added validation + auto-save to reduce user errors, plus reset for fresh sessions.",
    },
  },
  {
    title: "Vancouver Weather Trends Dashboard",
    year: "2025",
    description:
      "A Python dashboard exploring Vancouver weather trends using Streamlit, Meteostat API, and Plotly.",
    tech: ["Python", "Streamlit", "Plotly"],
    img: proj5,
    link: "https://huggingface.co/spaces/lulu2020xo/Vancouver-Weather-Trends-Dashboard",
    process: {
      problem: "Historical weather data is hard to interpret without trend views.",
      approach:
        "Fetched and transformed data via API, then built interactive charts for exploration.",
      decisions:
        "Prioritized clarity: consistent units, readable defaults, and focused controls rather than excessive filters.",
    },
  },
  {
    title: "Toto Park Website",
    year: "2023",
    description:
      "A responsive landing page introducing Toronto parks using vanilla HTML, CSS, and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    img: proj1,
    link: "https://liuyili2000.github.io/TotoPark/GreenSpace/",
    process: {
      problem: "Present park information in a friendly, scannable landing page.",
      approach:
        "Built responsive sections with clean DOM structure and lightweight interactions.",
      decisions:
        "Stayed framework-free to strengthen fundamentals; used reusable CSS patterns and minimal JS to keep the page fast.",
    },
  },
];

const Projects = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDetails = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section id="projects" className="projects">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        PROJECTS
      </motion.h2>

      <div className="project-grid">
        {projects.map((p, i) => {
          const isOpen = openIndex === i;

          return (
            <motion.a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div
                className="project-img"
                style={{ backgroundImage: `url(${p.img})` }}
              />

              <div className="project-info">
                <div className="project-header">
                  <h3>
                    {p.title} <span className="year-tag">· {p.year}</span>
                  </h3>

                  <button
                    type="button"
                    className="details-btn"
                    onClick={(e) => {
                      e.preventDefault(); // stop link navigation
                      e.stopPropagation(); // stop triggering parent click
                      toggleDetails(i);
                    }}
                    aria-expanded={isOpen}
                    aria-controls={`project-details-${i}`}
                  >
                    {isOpen ? "Hide" : "Details"} →
                  </button>
                </div>

                <p>{p.description}</p>

                <div className="tech-tags">
                  {p.tech.map((t, j) => (
                    <span key={j} className="tech-pill">
                      {t}
                    </span>
                  ))}
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && p.process && (
                    <motion.div
                      id={`project-details-${i}`}
                      className="project-details"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="detail-row">
                        <span className="detail-label">Problem</span>
                        <span className="detail-text">{p.process.problem}</span>
                      </div>

                      <div className="detail-row">
                        <span className="detail-label">Approach</span>
                        <span className="detail-text">{p.process.approach}</span>
                      </div>

                      <div className="detail-row">
                        <span className="detail-label">Key decisions</span>
                        <span className="detail-text">
                          {p.process.decisions}
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;



