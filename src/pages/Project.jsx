import React from 'react'
import { SiExpress, SiTailwindcss, SiMongodb } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";
import { TiCss3, TiHtml5 } from "react-icons/ti";
import { motion } from 'framer-motion';


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

function Project() {

    return (
        <>
            <hr id='hr-tag' />
            <div id='projecth2'>
                <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:100}} transition={{duration:0.4,delay:0.3}} ><span id='nitin'>Projects</span></motion.h2>
            </div>
            <motion.div id='project-div' whileInView={{opacity:1,y:0}} initial={{opacity:0,y:100}} transition={{duration:0.4,delay:0.3}} >

                <motion.div id='project-box'  variants={icon(1)} initial="initial" animate="animate" >
                    <div id='project-img'>
                        <img src="/project3.png" alt="" />
                    </div>
                    <div id='project-p'>
                        <p>This is  a fully functional ecommerce site with feature search,categories,admin panel,Crud operation on products,order status and admin panel</p>
                    </div>
                    <div>
                        <h3>Technologies used</h3>
                        <div id='projecttech'>
                            <div id='reacticon-p'><RiReactjsLine /></div>
                            <div id='expressicon-p'><SiExpress /></div>
                            <div id='htmlicon-p'>< TiHtml5 /></div>
                            <div id='cssicon-p'><TiCss3 /></div>
                            <div id='jsicon-p'><TbBrandJavascript /></div>
                            <div id='mongoicon-p'><SiMongodb /></div>
                        </div>
                        <div>
                            <button id='project-btn'> <a href="https://mern-project-frontend-one.vercel.app/"> Live demo</a></button>
                        </div>
                    </div>
                </motion.div>
                <motion.div id='project-box'  variants={icon(2)} initial="initial" animate="animate" >
                    <div id='project-img'>
                        <img src="/project2.png" alt="" />
                    </div>
                    <div id='project-p'>
                        <p>This is  a  basic ecommerce site with feature products,cart system ,login,signin(without react).</p>
                    </div>
                    <div>
                    <h3>Technologies used</h3>
                        <div id='projecttech'>
                            
                            
                            <div id='expressicon-p'><SiExpress /></div>
                            <div id='htmlicon-p'>< TiHtml5 /></div>
                            <div id='cssicon-p'><TiCss3 /></div>
                            <div id='jsicon-p'><TbBrandJavascript /></div>
                            <div id='mongoicon-p'><SiMongodb /></div>
                        </div>
                        <div >
                            <button id='project-btn'><a href="https://kostyle-rnaf.vercel.app/">live demo</a></button>
                        </div>
                    </div>
                </motion.div>
                <motion.div id='project-box'  variants={icon(1)} initial="initial" animate="animate" >
                    <div id='project-img'>
                        <img src="/project1.png" alt="" />
                    </div>
                    <div id='project-p'>
                        <p>This is  a react based portfolio project with dark and light theme and form coonect with database(responsive for mobile and laptop only).</p>
                    </div>
                    <div>
                    <h3>Technologies used</h3>
                        <div id='projecttech'>
                            <div id='reacticon-p'><RiReactjsLine /></div>
                            <div id='expressicon-p'><SiExpress /></div>
                            <div id='htmlicon-p'>< TiHtml5 /></div>
                            <div id='cssicon-p'><TiCss3 /></div>
                            <div id='jsicon-p'><TbBrandJavascript /></div>
                            <div id='mongoicon-p'><SiMongodb /></div>
                        </div>
                        <div>
                            <button id='project-btn'><a href="https://portfolio-kappa-eight-64.vercel.app/">live demo</a></button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </>
    )
}

export default Project
