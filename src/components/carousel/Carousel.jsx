import Carousel from 'react-bootstrap/Carousel';
import './style.css'
import Hero from '../hero/Hero';


const FullstackData = {
  title1:'Full Stack Specialisation',
  title2:'In Software Development',
  points:[
    'Domain Electives for Competitive Programming & Project Management.',
    'DSA, System Design, Computer Fundamentals integrated with Full Stack Specialization.',
    'Real-world Case studies and Projects to be industry-ready with placement assistance.'
  ],
  course:'Fullstack Developer'
}

const MernstackData = {
  title1:'Mern Fullstack Specialisation',
  title2:'In Software Development',
  points:[
    'Domain Electives for Competitive Programming & Project Management.',
    'DSA, System Design, Computer Fundamentals integrated with Full Stack Specialization.',
    'Real-world Case studies and Projects to be industry-ready with placement assistance.'
  ],
  course:'Mern Fullstack Developer'
}
const javastackData = {
  title1:'Java Fullstack Specialisation',
  title2:'In Software Development',
  points:[
    'Domain Electives for Competitive Programming & Project Management.',
    'DSA, System Design, Computer Fundamentals integrated with Full Stack Specialization.',
    'Real-world Case studies and Projects to be industry-ready with placement assistance.'
  ],
  course:'Java Fullstack Developer'
}

const PythonstackData = {
  title1:'Python Fullstack Specialisation',
  title2:'In Software Development',
  points:[
    'Domain Electives for Competitive Programming & Project Management.',
    'DSA, System Design, Computer Fundamentals integrated with Full Stack Specialization.',
    'Real-world Case studies and Projects to be industry-ready with placement assistance.'
  ],
  course:'Python Fullstack Developer'
}

function HeroCarousel({click}) {
  return (
  <section id="courses">
      <Carousel>
      <Carousel.Item interval={5000}>
            <Hero data={FullstackData} click={click}/>
      </Carousel.Item>
      <Carousel.Item interval={5000} >
      <Hero data={MernstackData}  click={click}/>
      </Carousel.Item>
      <Carousel.Item  interval={5000}>
      <Hero data={javastackData}  click={click}/>
      </Carousel.Item>
      <Carousel.Item  interval={5000}>
      <Hero data={PythonstackData}  click={click}/>
      </Carousel.Item>
    </Carousel>
  </section>
  );
}

export default HeroCarousel;