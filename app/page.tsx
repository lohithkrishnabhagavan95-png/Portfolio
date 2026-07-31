"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

const projects = [
  { no: "01", code: "UAV / SYSTEMS", title: "Flight systems that make the field legible.", summary: "Live MAVLink telemetry, terrain-aware planning and fleet-specific QGroundControl work for VTOL and multirotor missions at ACCEL UAV.", tools: "MAVLink · QGroundControl · ROS · Pixhawk", className: "map" },
  { no: "02", code: "VISION / ROBOTICS", title: "A landing target the drone can understand.", summary: "OpenCV ArUco detection and a PID visual-servo loop, simulated in Gazebo then flight-tested for consistent sub-10 cm landings.", tools: "OpenCV · ArUco · Gazebo · PID", className: "target" },
  { no: "03", code: "ML / PRODUCT", title: "Medical intelligence, shaped into a product.", summary: "A CNN skin-disease classifier with 90%+ validation accuracy, paired with an accessible Figma system and Flask inference API.", tools: "TensorFlow · Flask · Figma · REST", className: "scan" },
  { no: "04", code: "EDGE / UAV", title: "Crowd sensing before crowds become danger.", summary: "A dual-Raspberry Pi drone with a custom gimbal and edge AI density pipeline. Third place, AI Hackathon 2025.", tools: "YOLO · Raspberry Pi · Pixhawk · Arduino", className: "radar" },
];

const rise = { hidden: { opacity: 0, y: 26 }, show: { opacity: 1, y: 0 } };

export default function Home() {
  const [activeProject, setActiveProject] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const stagger = reduceMotion ? {} : { transition: { staggerChildren: 0.08, delayChildren: 0.12 } };

  return <main>
    <div className="telemetry" aria-hidden="true"><span>LK/26</span><i /><span>16.6807° N</span><span>82.2600° E</span><i /><span>SYS: ONLINE</span></div>
    <motion.nav className="nav" initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .45 }}><a className="brand" href="#top">LOHITH<span>_</span></a><div className="navlinks"><a href="#work">Work</a><a href="#about">Profile</a><a href="#contact">Contact</a></div><button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen}>Index {menuOpen ? "−" : "+"}</button></motion.nav>
    <AnimatePresence>{menuOpen && <motion.div className="mobile-menu" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}><a onClick={() => setMenuOpen(false)} href="#work">Work</a><a onClick={() => setMenuOpen(false)} href="#about">Profile</a><a onClick={() => setMenuOpen(false)} href="#contact">Contact</a></motion.div>}</AnimatePresence>

    <section className="hero" id="top"><div className="crosshair" aria-hidden="true"/><motion.div className="hero-meta" initial="hidden" animate="show" variants={stagger}><motion.span variants={rise}>PORTFOLIO / 2026</motion.span><motion.span variants={rise}>VISAKHAPATNAM / INDIA</motion.span></motion.div><motion.div className="hero-title" initial="hidden" animate="show" variants={stagger}><motion.p variants={rise}>Software engineer / designer / aerial systems thinker</motion.p><motion.h1 variants={rise}>BUILDING<br/>SYSTEMS<br/><em>IN MOTION.</em></motion.h1></motion.div><motion.div className="hero-bottom" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .7 }}><span>AI/ML + COMPUTER VISION + UAV AUTONOMY</span><a href="#work">SCROLL TO EXPLORE <b>↓</b></a></motion.div></section>

    <section className="manifesto" id="about"><motion.div className="manifesto-kicker" whileInView={{ x: 0, opacity: 1 }} initial={{ x: -30, opacity: 0 }} viewport={{ once: true }}><span>01</span><p>MY PRACTICE</p></motion.div><motion.h2 initial="hidden" whileInView="show" viewport={{ once: true, amount: .35 }} variants={stagger}><motion.span variants={rise}>I turn invisible</motion.span><motion.span variants={rise}><em>intelligence</em> into</motion.span><motion.span variants={rise}>things people can</motion.span><motion.span variants={rise}>actually use.</motion.span></motion.h2><motion.p className="manifesto-note" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>A design-trained engineer working where live data, physical machines, and clear product decisions need to meet.</motion.p></section>

    <section className="work" id="work"><div className="section-label"><span>02</span><p>SELECTED TRANSMISSIONS</p><span>2022 — NOW</span></div><div className="project-grid">{projects.map((project, index) => <motion.article className={`project-card ${index === activeProject ? "active" : ""}`} key={project.no} onMouseEnter={() => setActiveProject(index)} onFocus={() => setActiveProject(index)} tabIndex={0} initial={{ opacity: 0, y: 34 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .18 }} transition={{ duration: .45, delay: index * .07 }} whileHover={reduceMotion ? undefined : { y: -7 }}><div className={`signal-art ${project.className}`}><span>{project.no}</span><div className="art-core"/><div className="art-lines"/></div><div className="project-head"><span>{project.code}</span><b>↗</b></div><h3>{project.title}</h3><p>{project.summary}</p><footer>{project.tools}</footer></motion.article>)}</div></section>

    <section className="capabilities"><div className="section-label"><span>03</span><p>CAPABILITY STACK</p><span>FULL-SPECTRUM</span></div><div className="capability-list">{[["01", "Machine intelligence", "TensorFlow, PyTorch, YOLO, Hugging Face, OpenCV"], ["02", "Autonomous flight", "ROS, MAVLink, Pixhawk, Jetson Nano, RPLIDAR"], ["03", "Digital experiences", "Figma, design systems, HTML/CSS/JS, Tailwind, Webflow"], ["04", "Production systems", "Python, Flask, Node.js, SQL, Git, AWS"]].map(([id, title, detail]) => <motion.div className="capability" key={id} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} whileHover={{ paddingLeft: 14 }}><span>{id}</span><h3>{title}</h3><p>{detail}</p><b>+</b></motion.div>)}</div></section>

    <section className="credibility"><motion.div className="award" initial={{ rotate: -8, opacity: 0 }} whileInView={{ rotate: -3, opacity: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 90 }}><small>AWARD SIGNAL</small><strong>03<sup>RD</sup></strong><span>AI HACKATHON<br/>2025</span></motion.div><div><p className="eyebrow">OPERATING NOTES</p><h2>Leading teams,<br/>testing systems,<br/><em>staying curious.</em></h2><p className="cred-copy">Team Lead, Autonomous Aerial Robotics at GITAM’s Center for Autonomous Systems. Smart India Hackathon 2024 internal edition finalist. Software Engineering Intern at ACCEL UAV.</p></div></section>

    <footer className="contact" id="contact"><div><p className="eyebrow">OPEN CHANNEL</p><h2>GOT A SYSTEM<br/>WORTH <em>BUILDING?</em></h2></div><div className="contact-data"><a href="mailto:lohithkrishnabhagavan95@gmail.com">lohithkrishnabhagavan95@gmail.com <b>↗</b></a><a target="_blank" href="https://www.linkedin.com/in/lohtith">linkedin.com/in/lohtith <b>↗</b></a><span>© 2026 DAMMU LOHITH KRISHNA BHAGAVAN</span></div></footer>
  </main>;
}
