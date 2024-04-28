import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
function Nav() {
    
    return (
        <><div>
            <motion.nav id='nav'  whileInView={{opacity:1,x:0}} drag='x' dragConstraints={{left:-300,right:100}}   initial={{opacity:0,x:-200}} transition={{duration:0.5,delay:0.9}}>
                <ul >
                    <li > <Link to="/skills" id='navli'>Skills</Link></li>
                    <li> <Link to="/exp" id='navli'>Experience</Link></li>
                </ul>
            </motion.nav>
        </div>
        </>
    )
}

export default Nav
