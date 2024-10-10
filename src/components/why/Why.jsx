import React from 'react';
import './style.css';

function Why({click}) {
    const data = [
        {
            icon: 'bi bi-question-circle', // Bootstrap icon for support
            title: '24/7 Expert Support',
            subtitle: 'Get immediate assistance anytime for uninterrupted learning.'
        },
        {
            icon: 'bi bi-people', // Bootstrap icon for collaboration
            title: 'Mock Interviews & Competitions',
            subtitle: 'Prepare rigorously with mock interviews and competitive challenges.'
        },
        {
            icon: 'bi bi-laptop', // Bootstrap icon for projects
            title: 'Real-World Projects',
            subtitle: 'Enhance your portfolio with hands-on, industry-relevant projects.'
        },
        {
            icon: 'bi bi-award', // Bootstrap icon for certification
            title: 'Certification of Achievement',
            subtitle: 'Receive a recognized certificate upon successful completion.'
        }
    ];

    return (
        <section className='p-3 p-md-5' id='benefits'>
              <div className="d-flex flex-column align-items-center justify-content-center w-100 text-center">
            <h1 className='fs-4'>Why Choose Be Practical?</h1>
            <div className="v-line"></div>
            <div className="icon mb-3"><i class="bi bi-building-check text-light"></i></div>
            <h1 className="fs-3 fw-bold text-main">Benefits Of Be Practical</h1>
        </div>
            <div className="row mt-4">
                {data.map((item, index) => (
                    <div className="col-md-3 mb-3" key={index}>
                        <div className="card text-center mb-4 h-100 why-card py-3">
                            <div className="card-body d-flex flex-column justify-content-between align-items-center">
                                <i className={`${item.icon} fs-1 text-main`}></i>
                               <div>
                               <h5 className="card-title text-white">{item.title}</h5>
                               <p className="card-text text-secondary">{item.subtitle}</p>
                               </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <center>
                <button className="main-btn mt-5 px-5" onClick={click}>Get Free Councelling</button>
            </center>
        </section>
    );
}

export default Why;
