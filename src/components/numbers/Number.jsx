import React from 'react'
import './style.css'

function Number() {
    const data = [
        {
            count:'10K',
            title:'Students Enrolled'
        }
        ,
        {
            count:'8+',
            title:'Flexible Courses'
        },
        {
            count:'1.5K+',
            title:'Successfull Students'
        },
        {
            count:'36+',
            title:'Trending Languages'
        },

    ]
  return (
    <section className='container-fluid p-3 p-md-5 counts bg-light py-5'>
        <div className="row ">
            {
                data.map((item, index)=>(
                    <div className="col-md-3 count-container d-flex align-items-center justify-content-center">
                        <div className={` p-3 mb-5 ${index%2==0?'card-solid':'count-card'}`}>
                            <h1 className="fs-2 text-main">{item.count}</h1>
                            <p className="fs-6">{item.title}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Number