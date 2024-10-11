import React, { Fragment } from 'react'
import Header from '../../components/header/Header'
import Hero from '../../components/hero/Hero'
import HeroCarousel from '../../components/carousel/Carousel'
import AboutSalary from '../../components/tabs/AboutSalary'
import Companies from '../../components/companies/Companies'
import Stories from '../../components/stories/Stories'
import Modules from '../../components/timeline/Modules'
import Projects from '../../components/projects/Projects'
import Program from '../../components/program/Program'
import TestimonialSlider from '../../components/testimonials/TestimonialSlider'
import Why from '../../components/why/Why'
import Scroll from '../../components/scroll/Scroll'
import { usePopup } from '../../context/PopupContext'
import Footer from '../../components/footer/Footer'
import Faqs from '../../components/faqs/Faqs'
import Number from '../../components/numbers/Number'
import Languages from '../../components/languages/Languages'

function Home() {
  const { openPopup } = usePopup();

    const handleClick = () => {
        openPopup();
    };
  return (
    <Fragment>
        <Header/> 
        <div className="hiring p-4 p-md-5 container-fluid" id='home'>
          <div className="row align-items-center">
            <div className="col-md-6">
                  <h1 className="fs-1 text-main">
                  <span className="fw-400 text-main">Get Placed in <br /></span>
                 <span className="fw-bold text-main"> Top Tech  Companies</span>
                  </h1>
                  <p className="fs-4">390+ Hiring Companies with <br /> Best CTC</p>
                  <button className="main-btn" onClick={handleClick}>Apply Now</button>
            </div>
            <div className="col-md-6 mt-3">
              <img src="https://www.bosscoderacademy.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fglp_desktop_img.30f3c769.webp&w=3840&q=75" alt="image" className='w-100' />
            </div>
          </div>
        </div>
        {/* <Stories/> */}
        <Scroll click={handleClick}/>
        <HeroCarousel click={handleClick}/>
        <AboutSalary click={handleClick}/>
        
        <Modules click={handleClick}/>
        <Program click={handleClick}/>
        <TestimonialSlider click={handleClick}/>
        <Why click={handleClick}/>
        <Number/>
        <Languages/>
        <section className="container-fluid p-3 p-md-5 text-center bg-main">
          <h1 className='text-white fs-2 fw-bold my-4'>At <u className='text-warning'>Be Practical</u> Tech Solutions “<span className="text-warning">We are the creators of coding legends</span>”</h1>
          <button className="btn btn-light px-5 rounded-1 p-3 fs-5 fw-bold text-main" onClick={handleClick}>Ask More Doubts</button>
        </section>
        <Companies click={handleClick}/>
        <Faqs click={handleClick}/>
       
        {/* <Projects/> */}
        <Footer/>
    </Fragment>
  )
}

export default Home