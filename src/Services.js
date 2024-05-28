import React from 'react'
import WebContainer from './components/WebContainer/Index'
import Title from './components/Title/Index'
import Card from './components/Card/Index'
import "./components/Services/Services.css"
import Banner from './components/Banner/Index'
import { Link } from 'react-router-dom'
import Image01 from "./images/service01.webp";
import Image02 from "./images/service02.webp"
import Image03 from "./images/service03.webp"
import Image04 from "./images/service04.webp"
import Image05 from "./images/service05.webp"
import Image06 from "./images/service06.webp"
import Image07 from "./images/service07.webp"
import BannerImg from './images/doctor_Banner.jpg'

const Services = ({_internalExellence}) => {
    const cardData = [
        { cardHeading: 'Ambulance', cardImage: Image01},
        { cardHeading: 'Pharmacy', cardImage: Image02},
        { cardHeading: 'Blood Bank', cardImage: Image03},
        { cardHeading: 'Lab & Testing', cardImage: Image04},
        { cardHeading: 'Nuclear Medicine & Molecular Imaging', cardImage: Image05},
        { cardHeading: 'Physiotherapy', cardImage: Image06},
        { cardHeading: 'Radiology', cardImage: Image07},
      ];      
  return (
    <main className='col-12 float-start'>
        <Banner BannerImage={BannerImg} pageName={'Services'} />
        <WebContainer _parentClass={`excellence ${_internalExellence}`}>
        <Title firstHeading={'services'} secondHeading={'Latest Technology & World-Class Facilities'}/>
        <div className='col-12 float-start'>
        <div className='row'>
          {cardData.map((card, index) => (
            <div key={index} className='col-lg-4 col-xs-6 col-12' data-aos="fade-in" data-aos-offset="100" data-aos-duration="500" data-aos-once="true" data-aos-easing="ease-in-sine">
              <Link to='/services/service-detail'>
              <Card cardCont={card.cardCont} cardHeading={card.cardHeading} cardImage={card.cardImage} _cardClass={'w-100 mb-5 loadeffect'} cardBox={'serviceBox row Service_listing__height d-flex align-items-center'} childCard={'service_listing'} cardImageHeight={'360'} cardImagewidth={'536'} downButton={true} _parentButton={'d-inline position-static'} _cardHeading={'service__Heading heading3'}/>              
              </Link>
            </div>
          ))}
        </div>
      </div>
    </WebContainer>
    </main>
  )
}

export default Services;