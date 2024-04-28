import React from 'react'
import { motion } from 'framer-motion'
function Footer() {
    return (
        <div id='footer'>
            <motion.h4 whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:0.4,delay:0.5}}>Thanks for visiting!</motion.h4>
            <p>Reach out at nitinformal3@gmail.com for  questions or fill the above form.
            </p>
            <p>Let's connect and create together!"</p>
        </div>
    )
}

export default Footer
