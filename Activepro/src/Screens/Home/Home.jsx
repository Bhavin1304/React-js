import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Carousel from '../../components/Carousel/Carousel'
import Album from '../../components/Album/Album'
import Footer from '../../components/Footer/Footer'




export default function Home() {
  return (
    <div>
      <Navbar/>
      <Carousel/>
      <Album/>
      <Footer/>
    </div>
  )
}
