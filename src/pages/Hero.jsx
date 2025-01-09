import React from 'react';
import { motion } from 'framer-motion';

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

function Hero() {
  return (
    <>
      <div id="hero" className="absolute">
        <div className="hero-heading">
          <motion.h1 variants={container(0.4)} initial="hidden" whileInView="visible">
            Hi! I AM NITIN
          </motion.h1>
          <motion.p variants={container(0.7)} initial="hidden" whileInView="visible">
            I'm <span id="nitin">Nitin</span>, an aspiring <span id="nitin">web developer</span> with a passion for crafting digital experiences that captivate and inspire. 
            From experimenting with <span id="nitinportfolio">HTML</span> and <span id="nitinportfolio">CSS</span> to diving into the depths of <span id="nitinportfolio">JavaScript</span> and <span id="nitinportfolio">React</span>, every line of code is a step closer to turning my dreams into reality.
          </motion.p>
          <motion.p variants={container(1)} initial="hidden" whileInView="visible">
            Through my <span id="nitinportfolio">portfolio</span>, I invite you to explore my <span id="nitin">projects</span>, witness my growth, and join me on this exhilarating journey of discovery.
            
          </motion.p>
          <motion.h2 variants={container(1.5)} initial="hidden" whileInView="visible">
            The adventure begins here!
          </motion.h2>
        </div>
        <div className="hero-img">
          <motion.img
            src="/p1.jpg"
            alt="Hero"
            className="heroimage"
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
