import React from 'react'
import './style.css'
import Slider from 'react-slick/lib/slider';

function Companies() {
    const companyData = [
        'https://www.mphasis.com/content/dam/mphasis-com/global/logo/mphasis-logo.png.thumb.468.468.png',
        'https://static.litecart.net/storage/images/addons/403-razorpay-payment-gateway-1.jpg?_=1628171752',
        'https://media.licdn.com/dms/image/v2/C560BAQHeJgrt1rlWPQ/company-logo_200_200/company-logo_200_200/0/1630565803651/datatemplate_logo?e=2147483647&v=beta&t=qPCREsXTpQxL3XIYJSCD7zuLsHLmD3G561oX_ZU3KzA',
        'https://media.licdn.com/dms/image/v2/C560BAQGHUM0fs-LTqQ/company-logo_200_200/company-logo_200_200/0/1679851039021/iqgateway_logo?e=2147483647&v=beta&t=ZZWCDdpxL-bndrUWYd13zMre_3xrPZ7QmyZTNzc4x74',
        'https://1000logos.net/wp-content/uploads/2021/08/Capgemini-Logo.png',
        'https://assets.upstox.com/content/assets/images/cms/202452/stacked.jpg',
        'https://mir-s3-cdn-cf.behance.net/user/276/be0f30286813829.60dc76599302f.png',
        'https://media.licdn.com/dms/image/v2/C560BAQGyKZ4EzgXxwQ/company-logo_200_200/company-logo_200_200/0/1646233294792/star_knowledge_technology_alliance_team_llc_logo?e=2147483647&v=beta&t=-Mi_qrYXXR-ZSLEBE-3Ge1z_-FQSuDrGBb0KEMPLm6w',
        'https://media.licdn.com/dms/image/v2/D560BAQGvWrbRGuYPiA/company-logo_200_200/company-logo_200_200/0/1719257407892/infinite_computer_solutions_logo?e=2147483647&v=beta&t=PXmcPAeJmJEnhXlQEXY7L19tZnstzLfWy7Iyamqqhzk',
        'https://upload.wikimedia.org/wikipedia/commons/0/0b/Revature-768x768.webp',
        'https://cdn-galdm.nitrocdn.com/FeUhUqcwbVOIFttokEalirKPFGIsbFrt/assets/images/optimized/rev-322bb8e/www.excelsoftcorp.com/wp-content/themes/excelsoft/assets/images/global/ES-new-Logo.png',

        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBhcCfyYc1tQcAatyPVoPQ5P7Jb4VHZ7qlGw&s',
        'https://mma.prnewswire.com/media/1608177/GoComet_Logo.jpg?p=facebook',
        'https://i0.wp.com/www.enggwave.com/wp-content/uploads/2019/07/Aptean-Logo.png?fit=200%2C200&ssl=1',
        'https://m.economictimes.com/thumb/msid-70565593,width-1200,height-900,resizemode-4,imgsize-150919/1.jpg',
        'https://ideyalabs.com/images/ideyaLabs-white-R.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/MediaTek_logo.svg/2560px-MediaTek_logo.svg.png',
        'https://media.glassdoor.com/sqll/1367769/technoidentity-solutions-squarelogo-1569051188945.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Redbus_logo.jpg/800px-Redbus_logo.jpg',
        'https://production-cuvette.s3.ap-south-1.amazonaws.com/company/65be2e86b3475f2bd6ebedee/logo.jpg?d=1706962991989',


    ]
    const settings = {
        dots: false, // Display dots below the carousel
        infinite: true, // Infinite looping
        speed: 2000, // Transition speed
        slidesToShow: 8, // Number of slides to show
        slidesToScroll: 1, // Number of slides to scroll
        autoplay: true, // Enable autoplay
        autoplaySpeed: 1000, // Autoplay speed
        responsive: [
            {
                breakpoint: 1024, // Screen width breakpoint
                settings: {
                    slidesToShow: 6, // Show 2 slides on medium screens
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600, // Smaller screen width breakpoint
                settings: {
                    slidesToShow: 3, // Show 1 slide on smaller screens
                    slidesToScroll: 1,
                },
            },
        ],
    };
  return (
    <section className='companies p-3 p-md-5' id='clients'>
        <div className="d-flex flex-column align-items-center justify-content-center w-100 text-center">
            <h1 className='fs-4'>Our Alumni Work at Top Companies</h1>
            <div className="v-line"></div>
            <div className="icon mb-3"><i class="bi bi-building-check text-light"></i></div>
            <h1 className="fs-3 fw-bold text-main">Our Clients</h1>
        </div>

        <div className="company-images">
            {/* <div className="row">
                {
                    companyData.map((item, index)=>(
                        <div className="col-md-2 col-3">
                            <img src={item} alt="" className="w-100" />
                        </div>
                    ))
                }
            </div> */}
            <Slider {...settings}>
                {companyData.map((company, index) => (
                   <div className="col-md-2 col-4 p-2">
                     <div key={index} className="company-slide">
                        <img src={company} alt='loading' />
                    </div>
                   </div>
                ))}
            </Slider>

            <Slider {...settings}>
                {companyData.reverse().map((company, index) => (
                   <div className="col-md-2 col-4 p-2" >
                     <div key={index} className="company-slide">
                        <img src={company} alt='loading' />
                    </div>
                   </div>
                ))}
            </Slider>

           
        </div>
    </section>
  )
}

export default Companies