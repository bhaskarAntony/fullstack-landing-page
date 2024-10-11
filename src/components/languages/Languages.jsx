import React from 'react'
import './style.css'

function Languages() {
    const data = [
        {
            image:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png',
            title:'HTML'
        },
        {
            image:'https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg',
            title:'CSS'
        },
        {
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkt5wzZ1LZXdBJSY1lele-BsBxzSxDph8TQA&s',
            title:'Bootstrap'
        },
        {
            image:'https://i.pinimg.com/736x/13/40/7c/13407c12f50f08d328800c3caef43f61.jpg',
            title:'Javascript'
        },
        {
            image:'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
            title:'REACT JS'
        },
        {
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBwzWqFVu66ck-2u_nDBgLTZbR3cNjpUCbWg&s',
            title:'Node js'
        },
        {
            image:'https://img.icons8.com/color/512/express-js.png',
            title:'Express Js'
        },
        {
            image:'https://marketplacedesignoye.s3.ap-south-1.amazonaws.com/mongodb-branding-icon-symbol-logo-vector-_1540.png',
            title:'MongoDB'
        },
        {
            image:'https://bepractical.s3.us-east-2.amazonaws.com/python.png',
            title:'Python'
        },
        {
            image:'https://bepractical.s3.us-east-2.amazonaws.com/sql.png',
            title:'MySQL'
        },
        {
            image:'https://bepractical.s3.us-east-2.amazonaws.com/django.png',
            title:'django'
        },
        {
            image:'https://bepractical.s3.us-east-2.amazonaws.com/java.png',
            title:'Java'
        },
        {
            image:'https://bepractical.s3.us-east-2.amazonaws.com/tomcat.png',
            title:'Apache'
        },
        {
            image:'https://bepractical.s3.us-east-2.amazonaws.com/hibernate.png',
            title:'HIBERNATE'
        }
    ]

    const additionalData = [
        {
            image:'https://bepractical.s3.us-east-2.amazonaws.com/github.png',
            title:'Github'
        },
        {
            title:'Git',
            image:'https://bepractical.s3.us-east-2.amazonaws.com/GIT.png'
        },
        {
            title:'Postman',
            image:'https://bepractical.s3.us-east-2.amazonaws.com/postman.png'
        },
        {
            image:'https://bepractical.s3.us-east-2.amazonaws.com/vercel.png',
            title:'Vercel'
        },
        {
            image:'https://media.licdn.com/dms/image/v2/D4E0BAQGGDoFoqHtOvA/company-logo_200_200/company-logo_200_200/0/1702595267620/renderco_logo?e=2147483647&v=beta&t=ZYrxKUyruOEupgw5Lr5amgwgBCJq8VXH8r05Qr5CeQc',
            title:'Render'
        },
        {
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY4vqLg6MNrdg0uxEmnUlIVRrSyepDM3-new&s',
            title:'Cyclic'
        },
        {
            image:'https://www.cdnlogo.com/logos/n/75/netlify.svg',
            title:'Netlify'
        },
        {
            image:'https://www.gstatic.com/devrel-devsite/prod/v030bcccda96ffbfc45363010bea8ba52e77f80d8de5da28f6cb7329ed55ead3b/firebase/images/touchicon-180.png',
            title:'Google Firebase'
        }
    ]
  return (
    <section className="container-fluid p-4 p-md-5">
        <div className="d-flex flex-column align-items-center justify-content-center w-100 text-center">
            <h1 className='fs-4'>Learn Latest Tech Languages</h1>
            <div className="v-line"></div>
            <div className="icon mb-3"><i class="bi bi-braces text-light"></i></div>
            <h1 className="fs-3 fw-bold text-main">Latest Version Languages</h1>
        </div>
        <div className="row mt-3">
            <div className="col-md-6 mb-3">
                <div className="card p-4 bg-light h-100 border-0">
                    <h1 className="fs-4 mb-4 text-center">Programming Languages</h1>
                    <div className="row">
                        {
                            data.map((item, index)=>(
                                <div className="col-md-3 mb-3 col-6">
                                    <div className="language-card text-center h-100 p-2">
                                        <img src={item.image} alt="" className="w-50 m-auto" />
                                        <p className="fs-6 text-main fw-bold">{item.title}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="col-md-6 mb-3">
            <div className="card p-4 bg-light h-100 border-0">
                <h4 className="fs-4 mb-4 text-center">Additional Tools</h4>
                    <div className="row">
                        {
                            additionalData.map((item, index)=>(
                                <div className="col-md-3 mb-3 col-6">
                                    <div className="language-card text-center h-100 p-2">
                                        <img src={item.image} alt="" className="w-50 m-auto" />
                                        <p className="fs-6 text-main fw-bold">{item.title}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Languages