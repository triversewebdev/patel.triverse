import React from 'react'
import { FooterCTA } from './FooterCTA'
import '../Footer/Footer.css'
import Container from '../Container/Index'
import { Facebook } from '../../images/Vectors/Facebook'
import { Twitter } from '../../images/Vectors/Twitter'
import Youtube from '../../images/Vectors/Youtube'
import { LinkedIn } from '../../images/Vectors/LinkedIn'
import call from '../../images/patel-call.png'
import mail from '../../images/patel-mail.png'
import location from '../../images/patel-location.png'
import ImageTag from '../ImageTag/Index'
import Magnetic from '../Magnetic/FramerMotion'

const Index = () => {
    const items = [
        'Heart Care',
        'Cancer Care',
        'Liver & Digestive Care',
        'Nephro-Urology',
        'Pulmonology',
        'ENT, Head and Neck',
        'Robotic Surgery',
        'General and Laparoscopic Surgery',
        'Dermatology'
      ];
  return (
    <>
        <FooterCTA />
        <Container _parentClass='p-100 pb-0'>
            <div className='col-lg-7 col-12' data-aos="fade-in" data-aos-offset="200" data-aos-duration="500" data-aos-once="true" data-aos-easing="ease-in-sine">
                <div className='footerbox col-11 float-start'>
                    <h4>Explore</h4>
                   <div className='col-12 float-start d-flex justify-content-between'>
                   <div className='footercolumn'>
                        <h5 className='text-black'>Home</h5>
                    </div>
                    <div className='footercolumn'>
                        <h5 className='text-black'>Centres of Excellence</h5>
                        <ul>
            {items.map((item, index) => (
              <li key={index}>
                {item}
              </li>
            ))}
          </ul>
                    </div>
                    <div className='footercolumn'>
                        <h5 className='text-black'> Specialities</h5>
                    </div>
                    <div className='footercolumn'>
                        <h5 className='text-black'> Services</h5>
                    </div>
                    <div className='footercolumn'>
                        <h5 className='text-black'> Doctors</h5>
                    </div>
                    <div className='footercolumn'>
                        <h5 className='text-black'> Quick Links</h5>
                        <ul>
                            <li>About Us</li>
                            <li>Patient Login</li>
                            <li>Book Appointment</li>
                            <li>Gallery</li>
                            <li>Testimonials</li>
                        </ul>
                    </div>
                   </div>
                </div>
            </div>
            <div className='col-lg-5 col-12' data-aos="fade-in" data-aos-offset="200" data-aos-duration="700" data-aos-once="true" data-aos-easing="ease-in-sine">
             <div className='row'>
                <div className='col-lg-6 col-12'>
                <div className='footerbox'>
                    <h4>CALL</h4>
                    <ul>
                        <li><Magnetic _parentClass={'d-flex'}><span><ImageTag ImagePath={call}/></span><p className='m-0'><a href='tel:91(0)1815241000'> +91-(0)-181-5241000 (24 HOURS)</a></p></Magnetic></li>
                        <li><Magnetic _parentClass={'d-flex'}><span></span><p className='m-0'><a href='tel:91(0)1815241000'> +91-(0)-181-2041000 (24 HOURS)</a></p></Magnetic></li>
                    </ul>
                </div>
                </div>
                <div className='col-lg-6 col-12'>
                <div className='footerbox'>
                    <h4>Email</h4>
                    <ul>
                        <li><Magnetic _parentClass={'d-flex'}><span><ImageTag ImagePath={mail} /></span><p><a href='mailto:care@patelhospital.com'>care@patelhospital.com</a></p></Magnetic></li>
                    </ul>
                </div>
                </div>
             </div>
             <div className='row mt-5'>
             <div className='col-lg-6 col-12'>
                <div className='footerbox'>
                    <h4>ADDRESS</h4>
                    <ul>
                        <li><Magnetic _parentClass={'d-flex'}><span><ImageTag ImagePath={location} /></span><p>Civil Lines, <br/>Jalandhar Punjab, <br/>India.</p></Magnetic></li>
                    </ul>
                </div>
                </div>
                <div className='col-lg-6 col-12'>
                <div className='footerbox'>
                    <h4>FOLLOW US</h4>
                    <ul>
                        <li><Magnetic _parentClass={'d-flex'}><a href='https://www.facebook.com/patelhospitaljalandhar/' target='_blank' rel="noreferrer"><span><Facebook /></span><p className='m-0'> FACEBOOK</p></a></Magnetic></li>
                        <li><Magnetic _parentClass={'d-flex'}><a href='https://twitter.com/hospital_patel?s=20' target='_blank' rel="noreferrer"><span><Twitter /></span><p className='m-0'>TWITTER</p></a></Magnetic></li>
                        <li><Magnetic _parentClass={'d-flex'}><a href='https://www.youtube.com/channel/UCW3_GJlmUhKhipOkmcyQFtQ/featured' target='_blank' rel="noreferrer"><span><Youtube /></span><p className='m-0'>YOUTUBE</p></a></Magnetic></li>
                        <li><Magnetic _parentClass={'d-flex'}><a href='https://in.linkedin.com/company/patelhospitaljalandhar' target='_blank' rel="noreferrer"><span><LinkedIn /></span><p className='m-0'>LINKEDIN</p></a></Magnetic></li>
                    </ul>
                </div>
                </div>
                
             </div>
            </div>
            <div className='col-12 float-start d-flex justify-content-between pt-3 mt-5 border-top copyrightcont'>
                <p>&copy; 2024 | All Rights Reserved</p>
                <p><Magnetic _parentClass={'d-flex'}><a href='https://triverseadvertising.com/' target='_blank' rel="noreferrer" >site : triverse</a></Magnetic></p>
            </div>
        </Container>
    </>
  )
}

export default Index