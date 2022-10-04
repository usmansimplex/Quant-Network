import React from 'react'
import Banner from '../components/Elements/Banner'
import BottomBanner from '../components/Elements/BottomBanner'
import Cards from '../components/Elements/Cards'
import Grids from '../components/Elements/Grids'
import Hero from '../components/Elements/Hero'
import Section from '../components/Elements/Section'

const Home = () => {
  return (
    <>
        <Hero/>
        <Section/>
        <Banner/>
        <Cards/>
        <Grids/>
        <BottomBanner/>
    </>
  )
}

export default Home