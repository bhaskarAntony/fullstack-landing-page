import React from 'react'
import HeroCarousel from './components/carousel/Carousel'
import Header from './components/header/Header'
import './App.css'
import Home from './pages/home/Home'

function App() {

  const handleWhatsappShare = () => {
    const messageContent = `
          I am intrested to learn *fullstack development*, can you help me with that.
          Thank you.
    `
    const encodedMessage = encodeURIComponent(messageContent);
    window.open(`https://wa.me/+919242079119/?text=${encodedMessage}`, '_blank');
};
  return (
    <div className='overflow-hidden'>
    <img src='https://cdn-icons-png.freepik.com/256/3773/3773627.png?ga=GA1.1.1471963966.1728382128&semt=ais_hybrid' alt='chat with be practical' className='whatsapp' onClick={handleWhatsappShare}/>
    

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