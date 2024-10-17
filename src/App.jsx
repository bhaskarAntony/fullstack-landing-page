import React from 'react'
import HeroCarousel from './components/carousel/Carousel'
import Header from './components/header/Header'
import './App.css'
import Home from './pages/home/Home'

function App() {
  return (
    <div className='overflow-hidden'>
      <a href="https://chat.whatsapp.com/GQbi9FTHs8D3Yb73wQPUJ3" target='_blank'>
      <img src='https://cdn-icons-png.freepik.com/256/3773/3773627.png?ga=GA1.1.1471963966.1728382128&semt=ais_hybrid' alt='chat with be practical' className='whatsapp'/>
      </a>
    

     <a href="tel:9242079119" target='_blank'>

     <div className='call-icon'>
     <img src='https://cdn-icons-png.freepik.com/256/724/724664.png?ga=GA1.1.1471963966.1728382128&semt=ais_hybrid' alt='call now'/>
     </div>
     </a>
      <Home/>
    </div>
  )
}

export default App