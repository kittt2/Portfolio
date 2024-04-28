import React from 'react'
import Navbar from './Navbar'
import Hero from '../pages/Hero'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Contact from '../pages/Contact'
import About from '../pages/About'
import Skills from '../pages/Skills'
import Nav from './Nav'
import Project from '../pages/Project'
import { Toaster } from 'react-hot-toast'
function Layout() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Nav/>
    <Outlet/>
    <Toaster/>
    <Project/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default Layout
