import React from 'react'
import WebContainer from '../WebContainer/Index'
import Ambulance from '../../images/Vectors/Ambulance'
import Magnetic from '../Magnetic/FramerMotion'
import Appoinment from '../../images/Vectors/Appoinment'
import Emergency from '../../images/Vectors/Emergency'

export const FooterCTA = () => {
  return (
    <WebContainer _parentClass='ctasection'>
        <div className='col-12 flaot-start' data-aos="fade-up" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine">
            <div className='row'>
                <div className='col-lg-4 col-xs-6 col-12'>
                <div className='ctabtn flex-center'>
                <Magnetic _parentClass={'d-flex align-items-center'}>
                        <div className='ctacomponent flex-center'>
                        <Appoinment />
                        </div>
                        <div className='ctacont'>
                            <span className='opacity-50'>FOR APPOINTMENTS</span>
                            <p><a href='tel:1815241000'>181-5241000 </a></p>
                        </div>
                    </Magnetic>
                    </div>
                </div>
                <div className='col-lg-4 col-xs-6 col-12'>
                    <div className='ctabtn flex-center'>
                    <Magnetic _parentClass={'d-flex align-items-center'}>
                        <div className='ctacomponent flex-center'>
                            <Ambulance />
                        </div>
                        <div className='ctacont'>
                            <span className='opacity-50'>AMBULANCE</span>
                            <p><a href='tel:+919815290790'>+91-98152-90790</a></p>
                        </div>
                        </Magnetic>
                    </div>
                </div>
                <div className='col-lg-4 col-xs-6 col-12'>
                <div className='ctabtn flex-center'>
                <Magnetic _parentClass={'d-flex align-items-center'}>
                        <div className='ctacomponent flex-center'>
                        <Emergency />
                        </div>
                        <div className='ctacont'>
                            <span className='opacity-50'>EMERGENCY</span>
                            <p><a href='tel:1815241000'>181-5241000 </a></p>
                        </div>
                        </Magnetic>
                    </div>
                </div>
            </div>
        </div>
    </WebContainer>
  )
}
