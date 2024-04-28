import React from 'react'
import { Link } from 'react-router-dom';
import { SiExpress,SiTailwindcss,SiMongodb } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { RiReactjsLine} from "react-icons/ri";
import { TiCss3,TiHtml5 } from "react-icons/ti";
import { animate, motion } from 'framer-motion';
import { GiDuration } from 'react-icons/gi';

const icon =(duration)=>({
   initial :{y:-10},
   animate:{
    y:[10,-10],
    transition:{
        duration:duration,
        ease:"linear",
        repeat:Infinity,
        repeatType:"reverse"
    },
   },

})

function Skills() {
    return (
        <div id='skill-div'>
            <h3>Technologies</h3>
            <motion.div id='skill-tg' whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1.5 }}>
                <motion.div  variants={icon(2.5)} initial="initial" animate="animate"  id='reacticon'><RiReactjsLine /></motion.div>
                <motion.div variants={icon(3)} initial="initial" animate="animate" id='expressicon'><SiExpress /></motion.div>
                <motion.div variants={icon(6)} initial="initial" animate="animate" id='htmlicon'>< TiHtml5/></motion.div>
                <motion.div variants={icon(3)} initial="initial" animate="animate" id='cssicon'><TiCss3/></motion.div>
                <motion.div variants={icon(6)} initial="initial" animate="animate" id='jsicon'><TbBrandJavascript/></motion.div>
                <motion.div variants={icon(2.5)} initial="initial" animate="animate" id='mongoicon'><SiMongodb /></motion.div>
                <motion.div variants={icon(3)} initial="initial" animate="animate" id='tailwindicon'><SiTailwindcss /></motion.div>
            </motion.div>
           
        </div>
    )
}

export default Skills
