import React from 'react'
import { delay, motion } from 'framer-motion'
function About() {
    return (
        <>
        <div className='test1'>
            <motion.h2 id='abouth2' whileInView={{opacity:1,y:0}} initial={{opacity:0,y:100}} transition={{duration:0.4,delay:0.3}} >About Me</motion.h2>
            <div id='about-outer'>

                <div id='about-div'>
                    < motion.img src="/photo.jpg" alt="no"   whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:0.4,delay:0.3}} />
                </div>
                <div id='about-id'>
                    <div id='about-int'>
                        <motion.div  whileInView={{opacity:1}} initial={{opacity:0}} transition={{duration:0.3,delay:0.6}} id='about-box'>
                            <h3>Interst</h3>
                            <p>Web Development</p>
                        </motion.div>
                        <motion.div  whileInView={{opacity:1}} initial={{opacity:0}} transition={{duration:0.3,delay:0.6}} id='about-box'>
                            <h3>Education</h3>
                            <p> BCA Bachelors Degree</p>
                        </motion.div>
                    </div>
                    <motion.h2  whileInView={{opacity:1}} initial={{opacity:0}} transition={{duration:0.3,delay:0.6}}>Hey, I'm Nitin!</motion.h2>
                    <motion.p  whileInView={{opacity:1}} initial={{opacity:0}} transition={{duration:0.3,delay:0.6}}>I'm a passionate web developer with a love for crafting elegant and functional digital experiences.
                        Armed with skills in  Web Development, I'm on a mission to turn ideas into reality and make an impact in the digital landscape.
                        </motion.p>
                        <motion.p  whileInView={{opacity:1,y:0}} initial={{opacity:0,y:50}} transition={{duration:0.3,delay:0.6}}>  Let's create something awesome together!"
                    </motion.p>

                </div>
            </div>
            </div>
        </>
    )
}

export default About
