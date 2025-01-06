import React, { Component } from 'react'
import Header from '../components/Header/header'
import Footer from '../components/Footer/footer'
import "./styles/home.css"

const Home = () => {
  return (
    <div>
      <Header />
      <div className='greetings'>
        <h1>Welcome to the store</h1>
      </div>
      <div className='recommendations'>
        <ul>
          <li>Healthy eating</li>
          <li>Seasonal</li>
          <li>Bread and pastries</li>
        </ul>
      </div>
      
    </div>
  )
}
export default Home