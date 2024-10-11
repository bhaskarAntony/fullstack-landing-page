import React from 'react'
import './style.css'
import ApplyForm from '../form/ApplyForm'
import Graph from '../graph/Graph'

function Hero({data, click}) {
  return (
    <div className='p-3 p-md-5 container-fluid hero py-5'>
        <h1 className='display-5 fw-bold'>{data.title1} <h1 className="text-main">{data.title2}</h1></h1>
            <ul className='route mt-3'>
              <li className="fs-6">Fundamentals of IT</li>
              <li className="fs-6">Foundations of Web (HTML, CSS, BootStrap, JS, TS)</li>
              <li className="fs-6">React Framework</li>
              <li className="fs-6">Java Full Stack ( React & Java)</li>
              <li className="fs-6">MERN Stack ( React & Node)</li>
              <li className="fs-6">Python Full Stack ( React & Python)</li>
            </ul>
            <ul className='points'>
            {
              data.points.map((item, index)=>(
                <li className={`mb-3 fs-6 ${index==2?'text-main':null}`}>{item}</li>
              ))
            }
            </ul>
            <button className="main-btn mt-5 px-5" onClick={click}>Know More About Courses</button>
    </div>
  )
}

export default Hero