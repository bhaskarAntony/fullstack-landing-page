import React, { useRef, useState } from 'react';
import './style.css';

const testimonials = [
    {
        video:'https://firebasestorage.googleapis.com/v0/b/be-practical-8503d.appspot.com/o/Ayaz%20testimonial.mp4?alt=media&token=32efab42-4c41-4055-972a-59b7e5bbba2a',
        title:'Ayaz'
    },
    {
        video:'https://firebasestorage.googleapis.com/v0/b/be-practical-8503d.appspot.com/o/Bavitha%20testimonial.mp4?alt=media&token=1502e505-0984-4554-8d93-98ad26ac7b38',
        title:'Bavitha'
    },
    {
        video:'https://firebasestorage.googleapis.com/v0/b/be-practical-8503d.appspot.com/o/Devarakonda%20shravya%20Testimonial.mp4?alt=media&token=938411ba-4cfe-47aa-b78b-be93f8996aae',
        title:'devarakonda shravya'
    },
    {
        video:'https://firebasestorage.googleapis.com/v0/b/be-practical-8503d.appspot.com/o/Kowsalya%20P%20Testimonial.mp4?alt=media&token=3a7911fa-90ac-410b-8c77-db9b0ee1977d',
        title:'Kowsalya'
    },
    {
        video:'https://firebasestorage.googleapis.com/v0/b/be-practical-8503d.appspot.com/o/Transition%205%20(1).mp4?alt=media&token=4fce4b6d-b95c-4477-b467-6fa06cc84232',
        title:'student'
    },
    {
        video:'https://firebasestorage.googleapis.com/v0/b/be-practical-8503d.appspot.com/o/Transition%206%20(1).mp4?alt=media&token=5c0bc8f3-0986-4588-985c-fbf16953cef7',
        title:'student'
    },
    {
        video:'https://firebasestorage.googleapis.com/v0/b/be-practical-8503d.appspot.com/o/Transition%207%20(1).mp4?alt=media&token=8e3369e2-bac8-402d-a2bd-4ea7fe760feb',
        title:'student'
    },
    {
        video:'https://firebasestorage.googleapis.com/v0/b/be-practical-8503d.appspot.com/o/Transition%208.mp4?alt=media&token=99b72cd8-5c2a-4010-bf4b-18a7c9fffc00',
        title:'student'
    },
    {
        video:'https://firebasestorage.googleapis.com/v0/b/be-practical-8503d.appspot.com/o/be%20practical%20reel%201.2.mp4?alt=media&token=f2c7fe32-96e7-4ee2-9d65-66b8a301aa03',
        title:'student'
    }
    // Add more testimonials as needed
];

function TestimonialSlider() {
    const [currentVideo, setCurrentVideo] = useState(null);
    const containerRef = useRef(null);

    const handlePlayClick = (video) => {
        setCurrentVideo(video);
    };

    const handleCloseVideo = () => {
        setCurrentVideo(null);
    };

    const scrollLeft = () => {
        containerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    };

    const scrollRight = () => {
        containerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    };

    return (

    <section className='mt-5' id='stories'>
            <div className="d-flex flex-column align-items-center justify-content-center w-100 text-center">
        <h1 className='fs-4'>Our Recently Placed Students</h1>
        <div className="v-line"></div>
        <div className="icon mb-3"><i class="bi bi-people text-light"></i></div>
        <h1 className="fs-3 fw-bold text-main">Testimonials</h1>
    </div>
        <div className="testimonial-slider py-5 mt-5">
            <div className="testimonial-container" ref={containerRef}>
                {testimonials.map((testimonial, index) => (
                    <div className="testimonial-card mt-5 p-3 d-flex flex-column justify-content-between" key={index}>
                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />
                          <h3 className='fs-5 mt-5 text-main fw-bold'>{testimonial.title}</h3>
                          <p className="fs-6">Recently Placed student</p>
                       <div className="play-video" onClick={() => handlePlayClick(testimonial.video)}>
                        <span className="fs-6 text-white">Watch Video</span>
                       <div className="play-icon" >
                            <i className="bi bi-play-circle text-white"></i>
                        </div>
                       </div>
                      
                    </div>
                ))}
            </div>

            <div className="buttons d-flex gap-3">
                <button className="tg-btn" onClick={scrollLeft}>
                    <i className="bi bi-chevron-left text-main"></i>
                </button>
                <button className="tg-btn" onClick={scrollRight}>
                    <i className="bi bi-chevron-right text-main"></i>
                </button>
            </div>

            {currentVideo && (
                <div className="video-overlay" onClick={handleCloseVideo}>
                    <video className="video-player" controls src={currentVideo} autoPlay/>
                </div>
            )}
        </div>
    </section>
    );
}

export default TestimonialSlider;
