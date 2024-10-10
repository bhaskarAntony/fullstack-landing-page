import React from 'react'
import SalaryBarChart from '../graph/SalaryBarChart'
import './style.css'
import Demand from '../graph/Demand'

function TabsSection({data, click}) {
  return (
    <section className='container-fluid p-3 p-md-5 salary'>
        <div className="row">
            <div className="col-md-3 mb-3">
                <div className="salary-card p-3 card h-100">
                <h1 className="fs-4 fw-bold">Designations</h1>
                    <ul className='designation-list'>
                       {
                        data.designation.map((item, index)=>(
                            <li className='fs-6 mb-3'>{item}</li>
                        ))
                       }
                    </ul>
                </div>
            </div>
            <div className="col-md-6 mb-3">
                <div className="salary-card p-3 card mb-3 h-100">
                <h1 className="fs-4 fw-bold">Anual Average Salaries</h1>
                        <SalaryBarChart datas={data}/>
                </div>
            </div>
            <div className="col-md-3 mb-3">
                <div className="salary-card p-3 card h-100 mb-3">
                    <h1 className="fs-4 fw-bold">Demand</h1>
                    <img src="https://cdn-icons-png.freepik.com/256/5170/5170027.png?ga=GA1.1.1920887484.1725306167&semt=ais_hybrid" alt="" className="w-50 m-auto mb-4 d-block" />
                       <Demand datas={data}/>
                </div>
            </div>
        </div>
        <center>
                <button className="main-btn mt-5 px-5" onClick={click}>Ask Free Councelling About Course</button>
            </center>
    </section>
  )
}

export default TabsSection