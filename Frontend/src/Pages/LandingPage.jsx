import React from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Feature from '../components/Feature'
import Cta from '../components/Cta'
import About from '../components/About'
import Works from '../components/Works'
import { Outlet } from 'react-router-dom'

const LandingPage = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Feature />
      <About />
      <Works />
      <Cta />
      <Outlet />
    </>
  )
}

export default LandingPage