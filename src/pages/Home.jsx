import React from 'react'
import Annoucment from '../components/Annoucment'
import Catagories from '../components/Catagories'
import Footer from '../components/Footer'
import Nabvar from '../components/Nabvar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div>
    <Annoucment/>
    <Nabvar/>
    <Slider/>
    <Catagories/>
    <Products/>
    <Newsletter/>
    <Footer/>
    </div>
  )
}

export default Home