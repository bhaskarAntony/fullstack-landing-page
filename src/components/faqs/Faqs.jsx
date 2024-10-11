import React from 'react';
import './style.css'
function Faqs() {
    const data = [
        {
            question: 'How long does it take to learn full stack programming?',
            answer: 'The time it takes to learn full stack programming can vary depending on factors such as prior programming experience, time commitment, and learning resources. Generally, it can take several months to a year to become proficient in full stack programming. Consistent practice, hands-on projects, and learning from reputable resources can expedite the learning process. However, mastery and continuous learning in full stack development are ongoing processes that evolve with technology advancements.'
        },
        {
            question: 'Can we learn full stack development in one month?',
            answer: 'While it is possible to gain some foundational knowledge in full stack development within a month, becoming proficient in all aspects of full stack development typically requires more time and practice. Full stack development encompasses various technologies and frameworks, including both front-end and back-end development. Be Practical tech solutions is a training institute in Bangalore that provides full stack developer course in Bangalore in 5 months.'
        },
        {
            question: 'Is full stack development a good career?',
            answer: 'Full stack development offers promising career prospects. With the ability to work on both front-end and back-end technologies, full stack developers are in high demand in the tech industry. They possess a versatile skill set, can contribute to entire development projects, and adapt to evolving technologies. As companies increasingly seek professionals who can handle end-to-end development, pursuing a career in full stack development can be a lucrative choice.'
        },
        {
            question: 'What subjects are needed for full stack developer?',
            answer: 'To become a full stack developer, you need a strong foundation in various subjects including databases (SQL, NoSQL), back-end programming (Python, C++), front-end development (HTML, CSS, JS), frameworks (React, Angular), mobile development (Java, Kotlin, Swift, React Native), and hosting platforms (AWS, Heroku, Apache). Proficiency in these subjects will enable you to handle both the front-end and back-end aspects of web development effectively.'
        }
    ];

    return (
        <div className="container-fluid my-5">
             <div className="d-flex flex-column align-items-center justify-content-center w-100 text-center">
            <h1 className='fs-4'>Frequently Asked Questions</h1>
            <div className="v-line"></div>
            <div className="icon mb-3"><i class="bi bi-building-check text-light"></i></div>
            <h1 className="fs-3 fw-bold text-main">FAQ's</h1>
        </div>
           <div className="row">
            <div className="col-md-6">
            <img src="https://cdni.iconscout.com/illustration/premium/thumb/web-development-illustration-download-in-svg-png-gif-file-formats--html-logo-touch-technology-laptop-software-pack-seo-illustrations-2918522.png?f=webp" alt="image" className="w-100" />
            </div>
            <div className="col-md-6">
            <h1 className="text-center mb-4"></h1>
            <div className="accordion" id="faqAccordion">
                {data.map((item, index) => (
                    <div className="accordion-item" key={index}>
                        <h2 className="accordion-header" id={`heading${index}`}>
                            <button 
                                className="accordion-button" 
                                type="button" 
                                data-bs-toggle="collapse" 
                                data-bs-target={`#collapse${index}`} 
                                aria-expanded="true" 
                                aria-controls={`collapse${index}`}>
                                {item.question}
                            </button>
                        </h2>
                        <div 
                            id={`collapse${index}`} 
                            className="accordion-collapse collapse" 
                            aria-labelledby={`heading${index}`} 
                            data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                {item.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            </div>
           </div>
        </div>
    );
}

export default Faqs;
