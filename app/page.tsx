"use client";

import { useEffect, useState } from "react";

const projects = [
  { number: "01", title: "Autonomous flight, with a human in mind.", type: "UAV SYSTEMS / COMPUTER VISION", body: "At ACCEL UAV, I work across the interfaces that make missions clearer and safer - from live MAVLink telemetry and terrain-aware path planning to flight guidance for VTOL and multirotor systems.", tags: ["MAVLink", "QGroundControl", "ROS", "Pixhawk"] },
  { number: "02", title: "Precision landing on an ArUco array.", type: "ROBOTICS / VISUAL SERVOING", body: "A downward-facing camera, OpenCV markers and a PID loop work together to steer descent. Simulated in Gazebo, then proven in flight with consistent sub-10 cm static-array landings.", tags: ["OpenCV", "ArUco", "Gazebo", "PID"] },
  { number: "03", title: "Skin intelligence, made approachable.", type: "ML / FULL-STACK PRODUCT", body: "A CNN-powered dermatology classifier designed as a real product experience - 90%+ validation accuracy, an accessible Figma system, and a Flask API for real-time image inference.", tags: ["TensorFlow", "Flask", "Figma", "REST API"] },
  { number: "04", title: "Crowd sensing at the edge.", type: "AI / UAV / HACKATHON", body: "A 3-foot H-frame drone with dual Raspberry Pis, Pixhawk and a custom Arduino gimbal. Built to recognise density patterns and surface stampede-risk zones in real time. 3rd place, AI Hackathon 2025.", tags: ["Raspberry Pi", "YOLO", "Edge AI", "Arduino"] },
];

const skillGroups = [
  ["Machine intelligence", "TensorFlow · PyTorch · YOLO · Hugging Face · OpenCV"],
  ["Flight & robotics", "ROS · MAVLink · Pixhawk · Jetson Nano · RPLIDAR"],
  ["Digital products", "Figma · Design systems · HTML/CSS/JS · Tailwind · Webflow"],
  ["Build & ship", "Python · Flask · Node.js · SQL · Git · AWS"],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const reveal = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")), { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((el) => reveal.observe(el));
    return () => reveal.disconnect();
  }, []);

  return (
    <main>
      <nav className="nav"><a className="monogram" href="#top" aria-label="Back to top">LKB<span>°</span></a><div className={menuOpen ? "links open" : "links"}><a href="#work" onClick={() => setMenuOpen(false)}>Selected work</a><a href="#about" onClick={() => setMenuOpen(false)}>About</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></div><button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? "Close" : "Menu"}</button></nav>

      <section className="hero" id="top">
        <div className="eyebrow">Portfolio / 2026 <span>Visakhapatnam, India</span></div>
        <div className="hero-copy"><p className="intro">I’m Lohith - an engineer who likes to move between <i>intelligence, interfaces</i> and things that fly.</p><h1>Making complex<br/><em>systems</em> feel clear.</h1></div>
        <div className="hero-foot"><span>Software engineer · AI/ML · Drone autonomy · Product design</span><a href="#work" className="scroll-link">Explore the work <b>↓</b></a></div>
        <div className="orbit orbit-a"/><div className="orbit orbit-b"/><div className="signal">01<br/><small>signal<br/>found</small></div>
      </section>

      <section className="statement reveal"><p className="kicker">A hybrid practice</p><h2>I build where software,<br/>spatial thinking and <em>real-world</em><br/>constraints meet.</h2><p className="side-note">From an autonomous drone’s point of view to a thoughtful product interface, I care about the moment complicated technology becomes intuitive.</p></section>

      <section className="work" id="work"><div className="section-head reveal"><p className="kicker">Selected work</p><span>04 / projects with purpose</span></div><div className="project-list">{projects.map((project, index) => <article className="project reveal" key={project.number}><div className="project-index">{project.number}</div><div className={`project-art art-${index + 1}`}><div className="art-label">{project.tags[0]}<br/>{project.tags[1]}</div><div className="art-shape"/></div><div className="project-copy"><p className="project-type">{project.type}</p><h3>{project.title}</h3><p>{project.body}</p><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>)}</div></section>

      <section className="about" id="about"><div className="about-grid"><div className="about-main reveal"><p className="kicker">The person behind the systems</p><h2>Equal parts <em>builder</em>,<br/>designer, and curious<br/>field tester.</h2><p>I’m a Computer Science Engineering student at GITAM and a software engineering intern at ACCEL UAV. My work shifts happily from a Figma canvas to a flight stack - because the best outcomes need both precision and empathy.</p><a className="text-link" href="mailto:lohithkrishnabhagavan95@gmail.com">Start a conversation <b>↗</b></a></div><div className="note-card reveal"><span className="pin"/><p>Currently</p><strong>Designing autonomous flight experiences & building AI that earns its place in the real world.</strong><small>ACCEL UAV / 2025 - present</small></div></div><div className="skills reveal">{skillGroups.map(([name, detail], index) => <div className="skill" key={name}><span>0{index + 1}</span><strong>{name}</strong><p>{detail}</p></div>)}</div></section>

      <section className="recognition reveal"><p className="kicker">A few markers along the way</p><div><h2>3rd place<br/><em>AI Hackathon</em><br/>2025</h2><p>Team lead, Smart India Hackathon 2024 internal edition. Python Full-Stack Developer and UI/UX Design certified.</p></div></section>

      <footer id="contact"><div><p className="kicker">Have a problem worth solving?</p><h2>Let’s make it<br/><em>move.</em></h2></div><div className="contact-links"><a href="mailto:lohithkrishnabhagavan95@gmail.com">lohithkrishnabhagavan95@gmail.com <b>↗</b></a><a href="https://www.linkedin.com/in/lohtith" target="_blank">LinkedIn <b>↗</b></a><span>© 2026 Dammu Lohith Krishna Bhagavan</span></div></footer>
    </main>
  );
}
