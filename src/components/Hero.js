import React, { useEffect } from "react";
import { motion } from "framer-motion";
import bg from "../assets/hero-bg.jpg";

const Hero = () => {
  useEffect(() => {
    const hero = document.querySelector(".hero");

    const handleMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      hero.style.setProperty("--x", `${x}%`);
      hero.style.setProperty("--y", `${y}%`);
    };

    hero.addEventListener("mousemove", handleMove);

    // ✅ 清除事件监听
    return () => {
      hero.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <section id="hero" className="hero">
      {/* 背景与光效层 */}
      <div className="hero-bg">
        <img src={bg} alt="Hero background" />
        <div className="hero-overlay"></div>
      </div>

      {/* 前景内容 */}
      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1>LIUYI LI</h1>
          <h2>Designer × Front-End Developer</h2>
          <p>This portfolio focuses on my programming and engineering work,
with projects across JavaScript, Python, and C#.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

