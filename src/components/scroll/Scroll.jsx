import React from 'react'
import './style.css'

function Scroll() {
  return (
    <marquee behavior="scroll" direction="left" className="scroll p-2" scrollamount='10'>
       <div className='d-flex gap-3'>
       <span className="fs-6 d-block text-white"><span className="text-warning">BEST OFFER ON</span> MERN FULLSTACK</span>
       <span className='fs-6 text-white'>|</span>
        <span className="fs-6 d-block text-white"><span className="text-warning">BEST OFFER ON</span> JAVA FULLSTACK</span>
        <span className='fs-6 text-white'>|</span>
        <span className="fs-6 d-block text-white"><span className="text-warning">BEST OFFER ON</span> PYTHON FULLSTACK</span>
        <span className='fs-6 text-white'>|</span>
        <span className="fs-6 d-block text-white"><span className="text-warning">BEST OFFER ON</span> MERN FULLSTACK</span>
       <span className='fs-6 text-white'>|</span>
        <span className="fs-6 d-block text-white"><span className="text-warning">BEST OFFER ON</span> JAVA FULLSTACK</span>
        <span className='fs-6 text-white'>|</span>
        <span className="fs-6 d-block text-white"><span className="text-warning">BEST OFFER ON</span> PYTHON FULLSTACK</span>
        <span className='fs-6 text-white'>|</span>
        <span className="fs-6 d-block text-white"><span className="text-warning">BEST OFFER ON</span> MERN FULLSTACK</span>
       <span className='fs-6 text-white'>|</span>
        <span className="fs-6 d-block text-white"><span className="text-warning">BEST OFFER ON</span> JAVA FULLSTACK</span>
        <span className='fs-6 text-white'>|</span>
        <span className="fs-6 d-block text-white"><span className="text-warning">BEST OFFER ON</span> PYTHON FULLSTACK</span>
       </div>
    </marquee>
  )
}

export default Scroll