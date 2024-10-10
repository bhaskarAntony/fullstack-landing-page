import React from 'react';
import './style.css';

function Program({click}) {
    const data = [
        {
            icon: 'bi bi-laptop', // Bootstrap icon for coding
            title: 'Python Full Stack',
            subtitle: 'Become a versatile developer with Python, Django, and modern front-end technologies.'
        },
        {
            icon: 'bi bi-code-slash', // Bootstrap icon for coding
            title: 'MERN Stack',
            subtitle: 'Master the MERN stack and build robust web applications using MongoDB, Express, React, and Node.js.'
        },
        {
            icon: 'bi bi-filetype-java', // Bootstrap icon for Java
            title: 'Java Full Stack',
            subtitle: 'Learn Java and popular frameworks to create scalable web applications.'
        }
    ];

    return (
        <section className='container-fluid p-4 p-md-5 program'>
            <div className="row">
                <div className="col-md-5">
                    <div className="program-left">
                        <h1 className="display-3 fw-bold text-white">Is this program for you?</h1>
                        <p className="fs-6 text-white mt-4">Whether you’re a beginner or an intermediate professional seeking to upskill, transition, or broaden your horizons in the field, our program is designed to help you succeed.</p>
                        <button className="btn btn-light p-3 px-5 fw-bold mt-3 text-main" onClick={click}>Apply Now</button>
                    </div>
                </div>
                <div className="col-md-7 mt-5 m-md-0">
                    <div className="program-right">
                        {data.map((course, index) => (
                            <div key={index} className="program-card gap-3">
                               <div className="icon">
                               <i className={`${course.icon} fs-3 text-main`}></i>
                               </div>
                                <div>
                                <h3 className="text-white fs-5 fw-bold">{course.title}</h3>
                                <p className="text-white">{course.subtitle}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Program;
