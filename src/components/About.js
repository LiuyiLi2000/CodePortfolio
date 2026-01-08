import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="about">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>ABOUT</h2>
        <p>
       I approach front-end development from both a design and programming perspective. 
       </p>
       <p>
       I’m comfortable working close to the fundamentals — whether that means
building interfaces with React, processing and visualizing data in Python,
or structuring logic in a C# console application.
       </p>
       <p>Rather than focusing on a single stack, I’m interested in understanding
how different tools solve different problems, and choosing the right
level of abstraction for each project.
         </p>
      <p>This portfolio highlights my ability to reason through problems,
work across multiple technologies, and ship complete, working software.
         </p>
      </motion.div>
    </section>
  );
};

export default About;
