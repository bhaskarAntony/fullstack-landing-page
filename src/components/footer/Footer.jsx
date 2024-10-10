import React from 'react'
import './style.css'

function Footer() {
  return (
    <footer className='p-4 p-md-5'>
        <div className="row">
            <div className="col-md-6">
                <img src="https://bepractical.s3.us-east-2.amazonaws.com/brand-logo.cc6e3cf088a8fd3005b1.jpg" alt="" width={180} />
                <p className="fs-6 text-white mt-3">
                Since its establishment in 2012, Be Practical Tech Solutions is training predominantly in IT courses. It has pioneered as a diversified entrepreneurship tapping into the necessities of the internet market in India, with its in-depth understanding of customers and companies
                </p>
            </div>
            <div className="col-md-3 col-6 mt-4 mt-md-0">
                <h4 className="fs-4 fw-bold text-white">Quick Links</h4>
                <ul className="mt-4">
                    <li className='fs-6'><a href="">Home</a></li>
                    <li className='fs-6'><a href="">Why Fullstack</a></li>
                    <li className='fs-6'><a href="">Courses</a></li>
                    <li className='fs-6'><a href="">Success Stories</a></li>
                    <li className='fs-6'><a href="">Our Clients</a></li>
                    <li className='fs-6'><a href="">Benifits</a></li>
                </ul>
            </div>
            <div className="col-md-3 col-6 mt-4 mt-md-0">
            <h4 className="fs-4 fw-bold text-white">Contact Us</h4>
            <p className="fs-6 text-white mt-4"><span className="fw-bold text-warning">Email:</span> info@be-practicle.com</p>
            <p className="fs-6 text-white mt-4"><span className="fw-bold text-warning">Phone:</span> +91-9242079119</p>
            <p className="fs-6 text-white mt-4"><span className="fw-bold text-warning">Location:</span> #737C,1stFloor,1st cross 3rd Stage,4th Block Basaveshwara nagar Bengaluru-560079</p>
            </div>
        </div>
        <div className="devider"></div>
        <div className="row">
            <div className="col-md-6 mt-4 mt-md-0">
                <p className="fs-6 text-white"><span className="text-warning">&copy; </span>Copyright {new Date().getFullYear()} Be Practical Tech Solutions. All rights reserved.</p>
            </div>
            <div className="col-md-6">
                <p className="fs-6 text-white d-flex gap-2 justify-content-end">
                    <a href="#">Linkedin</a>
                    <span className='text-white'>|</span>
                    <a href="#">Blog</a>
                    <span className='text-white'>|</span>
                    <a href="#">Youtube</a>
                    <span className='text-white'>|</span>
                    <a href="#">Instagram</a>
                </p>
            </div>
        </div>

    </footer>
  )
}

export default Footer