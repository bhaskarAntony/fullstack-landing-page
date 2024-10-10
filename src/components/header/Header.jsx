import React, { useState } from 'react';
import './style.css';
import { Offcanvas } from 'react-bootstrap';
import { usePopup } from '../../context/PopupContext';

function Header() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);

  const { openPopup } = usePopup();

  const handleClick = () => {
    openPopup(<div>This is your popup content!</div>); // Customize popup content here
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      handleClose(); // Close the offcanvas when a link is clicked
    }
  };

  return (
    <header className='position-sticky top-0'>
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="https://bepractical.s3.us-east-2.amazonaws.com/brand-logo.cc6e3cf088a8fd3005b1.jpg" alt="" width="180" />
          </a>
          <button className="navbar-toggler" type="button" aria-expanded="false" aria-label="Toggle navigation" onClick={handleOpen}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end d-lg-flex d-none gap-2 align-items-center" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" onClick={() => scrollToSection('home')}>Home</a>
              </li>
              <li className="nav-item">
                <button className="nav-link btn" onClick={() => scrollToSection('fullstack')}>Why Fullstack</button>
              </li>
              <li className="nav-item">
                <button className="nav-link btn" onClick={() => scrollToSection('courses')}>Courses</button>
              </li>
              <li className="nav-item">
                <button className="nav-link btn" onClick={() => scrollToSection('stories')}>Success Stories</button>
              </li>
              <li className="nav-item">
                <button className="nav-link btn" onClick={() => scrollToSection('clients')}>Our Clients</button>
              </li>
              <li className="nav-item">
                <button className="nav-link btn" onClick={() => scrollToSection('benefits')}>Benefits</button>
              </li>
            </ul>
            <form className="d-flex gap-2">
              <button className="main-btn" type="button" onClick={handleClick}>Apply Now</button>
            </form>
          </div>
        </div>
      </nav>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <a className="navbar-brand" href="#">
              <img src="https://bepractical.s3.us-east-2.amazonaws.com/brand-logo.cc6e3cf088a8fd3005b1.jpg" alt="" width="180" />
            </a>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className='offcanvas-nav'>
            <li><a href="#" onClick={() => scrollToSection('home')}>Home</a></li>
            <li><a href="#" onClick={() => scrollToSection('fullstack')}>Why Fullstack</a></li>
            <li><a href="#" onClick={() => scrollToSection('courses')}>Courses</a></li>
            <li><a href="#" onClick={() => scrollToSection('stories')}>Success Stories</a></li>
            <li><a href="#" onClick={() => scrollToSection('clients')}>Our Clients</a></li>
            <li><a href="#" onClick={() => scrollToSection('benefits')}>Benefits</a></li>
          </ul>
          <button className="main-btn w-100" onClick={handleClick}>Apply Now</button>
          <div className="bg-light p-3 mt-3">
            <h3 className="fs-6 fw-bold mt-3">Contact Us</h3>
            <hr />
            <p className='fs-6'>+91-9242079119</p>
            <p className="fs-6">info@be-practical.com</p>
            <p className="fs-6">
              <address>
                #737C, 1st Floor, 1st Cross, 3rd Stage, 4th Block, Basaveshwara Nagar, Bengaluru - 560079
              </address>
            </p>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
}

export default Header;
