import React, { useContext } from 'react'
import NewsLetter from '../components/NewsLetter'
import Clinet from './Clinet'
import Footer from './Footer/Footer'
import Home from './Home'
import Services from './Services'

function Home1() {
 
  return (
    <div>
      <Home/>
      <Services />
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default Home1