import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import Login from '../pages/Login'
import { IoMdSunny } from "react-icons/io";
import { IoMdMoon } from "react-icons/io";
import { motion } from "framer-motion"
import { useState } from 'react';
import { usetheme } from './Theme';
import { useEffect } from 'react';
import useLocalStorage from 'use-local-storage';

function Navbar() {
     const {theme,togle}=usetheme();
     
     const handleToggle = () => {
        togle();
        
        console.log(theme)
      };
          
      
    return (
        <><div>
            <motion.nav id='navbar' initial={{y:-100}} animate={{ y: 20 }} drag='x' dragConstraints={{left:-300,right:100}} transition={{duration:0.6,delay:0.5}}>
                <ul >
                    <li> <NavLink className='navbarul' href="/">Home</NavLink></li>
                    <li> <Link activeClass="active"
                        to="test1"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={1000}
                         className='navbarul' href="/about">About</Link></li>
                    <li> <Link activeClass="active"
                        to="test2"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={2000}
                        className='navbarul' href="/contact" >Contact</Link></li>
                    <li> <NavLink className='navbarul' to="/login">Admin</NavLink></li>

                </ul>
            </motion.nav>
        </div>
        <div>
        <div>
        {theme === 'dark' ? (
          <IoMdSunny onClick={handleToggle} id='them'/>
        ) : (
          <IoMdMoon onClick={handleToggle}  id='them'/>
        )}
      </div>

        </div>
        </>
    )
}

export default Navbar
