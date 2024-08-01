import React from 'react'
import Navbaar from './Components/Navbaar'
import Hero from './Components/Work'
import Frammer from './Components/Frammer'
import VideosData from './last/VideosData'
import Dbllines from './last/Dbllines'
import Heading from './last/Heading'
import Footerr from './last/Footeres'
import LocomotiveScroll from 'locomotive-scroll';






const App = () => {
const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className=' sm:w-full sm:h-screen md:w-[100vw] xl[100vw] bg-black '>
      
        <Navbaar/>
        <Hero/>
        <Frammer/>
        <VideosData/>
        <Dbllines/>
        <Heading/>
        <Footerr/>



      

    </div>
  )
}

export default App