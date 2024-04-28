import React from 'react'
import { motion } from 'framer-motion'
function Exp() {
    return (

        <div id='exp'>
            <h3 >Experience</h3>
            <motion.p  whileInView={{opacity:1}} initial={{opacity:0}} transition={{duration:0.3,delay:0.6}}> full stack internship at Allsoft Solutions,
                New Delhi
            </motion.p>
            <motion.h5  whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-90}} transition={{duration:0.3,delay:0.6}}>august 2023-september 2023</motion.h5>
        </div>

    )
}

export default Exp
