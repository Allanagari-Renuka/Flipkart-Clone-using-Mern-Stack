import React from 'react'
import Carousuel from './Carousuel'
import Header from  './Header'
import Brands from './Brands'
import ClothingSection from './ClothingSection';


const Home = () => {
  return (
    <div>
        <Header/>
        <Brands/>
        <Carousuel/>
        <ClothingSection/>
    </div>
  )
}

export default Home