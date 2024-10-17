import React from 'react'
import './style.css'

function Loading() {
  return (
    <section className='loading'>
        <div className="row align-items-center" style={{height:'100vh'}}>
            <div className="col-md-5 m-auto">
            <img src="https://i.pinimg.com/originals/f9/5d/76/f95d769500148e2c3698612456cf3e49.gif" alt="loading"  className='w-100'/>
            </div>
        </div>
    </section>
  )
}

export default Loading