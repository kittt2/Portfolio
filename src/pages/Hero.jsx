import React from 'react'
import { motion } from 'framer-motion'

const container =(delay)=>({
    hidden:{x:-100, opacity:0},
    visible:{
        x:0,
        opacity:1,
        transition:{duration:0.5 ,delay:delay}

    }
})
function Hero() {
    return (
        <>
            <div id='hero' className='absolute'>
                <div className='hero-heading'>
                    <motion.h1 variants={container(0.4)} initial="hidden" whileInView="visible">"Hello World!</motion.h1>
                    <motion.p variants={container(0.7)} initial="hidden" whileInView="visible">I'm Nitin, an aspiring web developer with a passion for crafting digital experiences that captivate and inspire. As an emerging force in the world of coding, I'm fueled by curiosity and a relentless drive to learn and create.

                        From experimenting with HTML and CSS to diving into the depths of JavaScript and React, every line of code is a step closer to turning my dreams into reality.
                    </motion.p>
                    <motion.p variants={container(1)} initial="hidden" whileInView="visible"> Through my portfolio, I invite you to explore my projects, witness my growth, and join me on this exhilarating journey of discovery.

                        Together, let's embark on a quest to push boundaries, challenge norms, and build a web that's as beautiful as it is functional.
                    </motion.p>
                    <motion.h2 variants={container(1.5)} initial="hidden" whileInView="visible">The adventure begins here!"</motion.h2>
                </div>
                <div className='hero-img'>
                    <motion.img src='./src/assets/photo.jpg' alt="g"  initial={{y:-150 ,opacity:0}} whileInView={{ y: 0 ,opacity:1 }}   transition={{duration:0.6,delay:0.5}}/>
                </div>
            </div>
        </>
    )
}

export default Hero
