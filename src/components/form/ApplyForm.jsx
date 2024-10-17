import React, { Fragment, useState } from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import './style.css';
import Loading from '../loading/Loading';

function ApplyForm() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phonenumber: '',
    experience: 'student',
    course: 'mern'
  });
  const [isLoading, setIsLoading] = useState(false);
 
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    console.log("Submitting form with data:", formData); // Log the form data
    try {
      const response = await axios.post('https://fullstack-landing-page-backend.onrender.com/api/new/lead', formData);
      console.log('Response:', response.data);
      setIsLoading(false)
      setShowModal(true);
    } catch (error) {
      setIsLoading(false)
      console.error('Error submitting form:', error); // Log the error for better debugging
    }
  };
  
  if(isLoading){
    return <Loading/>
  }


  const handleClose = () => setShowModal(false);

  return (
    <Fragment>
      <div className="apply-form p-3">
        <h1 className="fs-4 mb-3 fw-bold">Apply For Free Counselling</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group mt-1">
            <label htmlFor="fullname" className="form-label">Full Name<span className="text-danger">*</span></label>
            <input 
              type="text" 
              className="form-control" 
              name='fullname' 
              value={formData.fullname} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className="form-group mt-1">
            <label htmlFor="email" className="form-label">Email<span className="text-danger">*</span></label>
            <input 
              type="email" 
              className="form-control" 
              name='email' 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className="form-group mt-1">
            <label htmlFor="phonenumber" className="form-label">Phone Number<span className="text-danger">*</span></label>
            <input 
              type="text" 
              className="form-control" 
              name='phonenumber' 
              value={formData.phonenumber} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className="form-group mt-1">
            <label htmlFor="experience" className="form-label">Work Experience<span className="text-danger">*</span></label>
            <select 
              name="experience" 
              className="form-select" 
              value={formData.experience} 
              onChange={handleChange}
            >
              <option value="student">Student</option>
              <option value="fresher">Fresher/0 years</option>
              <option value="0-1">0-1 Year</option>
              <option value="1-2">1-2 Years</option>
            </select>
          </div>

          <div className="form-group mt-1">
            <label htmlFor="course" className="form-label">Interested Course<span className="text-danger">*</span></label>
            <select 
              name="course" 
              className="form-select" 
              value={formData.course} 
              onChange={handleChange}
            >
              <option value="mern">MERN Fullstack</option>
              <option value="java">Java Fullstack</option>
              <option value="python">Python Fullstack</option>
              <option value="others">Others</option>
            </select>
          </div>
          
          <button type="submit" className="main-btn mt-3 rounded w-100 fw-bold">APPLY</button>
        </form>
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={handleClose} centered>
        
        <Modal.Body className='text-center'>
            <img src="https://i.pinimg.com/originals/48/a2/93/48a293976e2c10478e2eebf754ee8d25.gif" alt="" className="w-100" />

            <h3 className="fs-4 mt-3">Your application has been submitted successfully!</h3>
        </Modal.Body>
      
      </Modal>
    </Fragment>
  );
}

export default ApplyForm;
