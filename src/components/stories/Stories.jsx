import React from 'react'
import './style.css'

function Stories() {
    const data = [
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
    ]
  return (
    <section className='stories'>
        {
            data.map((item, index)=>(
                <div className="story">
                    <video src={item.video}  autoPlay muted></video>
                </div>
            ))
        }
    </section>
  )
}

export default Stories