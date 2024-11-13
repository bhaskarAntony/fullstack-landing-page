import React from 'react'
import HeroCarousel from './components/carousel/Carousel'
import Header from './components/header/Header'
import './App.css'
import Home from './pages/home/Home'
import { usePopup } from './context/PopupContext'

function App() {
  const { openPopup } = usePopup();

  const handleClick = () => {
      openPopup();
  };

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

     <section className='diwali-offer p-3 p-md-5'>
              <h1 className='fs-2 text-white fw-bold'>Diwali Dhamaka Offer on Course Fees!</h1>
              <p className='fs-6 text-white'>This festive season, ignite your career with our special Diwali discounts on all course fees! Enroll now to unlock exciting savings and start your journey toward success. Offer valid for a limited time only—don't miss out on this bright opportunity!</p>

              <button className="btn btn-light d-flex flex-column align-items-center px-5 py-2" onClick={handleClick}>
              <span className="fs-4 font-weight-bold">🎉 Apply Now</span>
              <small className="text-dark mt-1">Offer Ends Soon! Hurry Up!</small>
          </button>

          </section>
      <Home/>
    </div>
  )
}

export default App