import React, { Fragment } from 'react'
import './style.css'

function ApplyForm() {
  return (
    <Fragment>
        <div className="apply-form p-3">
            <h1 className="fs-4 mb-3 fw-bold">Apply For Free Counselling</h1>
            <div className="form-group mt-1">
                <label htmlFor="username" className="form-label">FullName<span className="text-danger">*</span></label>
                <input type="text"  className="form-control" name='fullname' />
            </div>

            <div className="form-group mt-1">
                <label htmlFor="username" className="form-label">Email<span className="text-danger">*</span></label>
                <input type="text"  className="form-control" name='email' />
            </div>

            <div className="form-group mt-1">
                <label htmlFor="username" className="form-label">Phone Number<span className="text-danger">*</span></label>
                <input type="text"  className="form-control" name='phonenumber' />
            </div>

            <div className="form-group mt-1">
                <label htmlFor="username" className="form-label">Work Experience<span className="text-danger">*</span></label>
               <select name="experience" id="" className="form-select">
                <option value="student">Student</option>
                <option value="student">Fresher/0 years</option>
                <option value="student"> 0-1 Year </option>
                <option value="student">1-2 Years</option>
               </select>
            </div>

            <div className="form-group mt-1">
                <label htmlFor="username" className="form-label">Intrested Course<span className="text-danger">*</span></label>
               <select name="experience" id="" className="form-select">
                <option value="mern">Mern Fullstack</option>
                <option value="java">Java Fullstack</option>
                <option value="python">Python Fullstack</option>
                <option value="others">Others</option>
               </select>
            </div>
            <button className="main-btn mt-3 rounded w-100 fw-bold">APPLY</button>

        </div>
    </Fragment>
  )
}

export default ApplyForm