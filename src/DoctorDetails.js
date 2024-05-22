import React from 'react'
import Banner from './components/Banner/Index'
import BannerImg from './images/doctor_Banner.jpg'
import LocomotiveScroll from 'locomotive-scroll';
import WebContainer from './components/WebContainer/Index'
import doctorImage from './images/doctoer02.webp'
import ImageTag from './components/ImageTag/Index';
import Fill from './components/Button/Fill/Index'
import GsapMagnetic from './components/Magnetic/FramerMotion'

const DoctorDetails = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <main className='col-12 float-start' data-scroll-container>
        <Banner BannerImage={BannerImg} />
        <WebContainer _parentClass={'doctorsBio p-100 pt-0'}>
          <div className='row'>
            <div className='col-lg-4 col-12'>
              <ImageTag ImagePath={doctorImage} />
            </div>
            <div className='col-lg-8 col-12'>
              <div className='doctorName mb-3 col-12 float-start'>
                <h3 className='heading4 fw-600 text-black'>Dr. Naveen Khanna</h3>
                <p className='m-0'>Consultant Cardiologist</p>
              </div>
              <div className='doctorInfo mt-4 col-12 float-start'>
                <div className='doctorTitle position-relative mb-3'>
                  <h4 className='heading4 fw-600 secondary-color bg-white'>Education</h4>
                </div>
                <div className='doctorCont'>
                  <p>MBBS – GMC, Amritsar (and associated hospitals)</p><p>
                    Post-Graduation – MLN Medical College, Allahabad</p><p>
                    MD (Medicine) – AIIMS</p><p>
                    DM (Cardiology) – AIIMS</p>
                </div>
              </div>
              <div className='doctorInfo mt-4 col-12 float-start'>
                <div className='doctorTitle position-relative mb-3'>
                  <h4 className='heading4 fw-600 secondary-color bg-white'>Expertise</h4>
                </div>
                <div className='doctorCont'>
                  <p>Angiography and Angioplasty | Primary Percutaneous Coronary Intervention (PCI) Valve 
Insertions | Intra-Aortic Balloon Pump (IABP) & Other Interventional Procedures</p>
                </div>
              </div>
              <div className='doctorInfo mt-4 col-12 float-start'>
                <div className='doctorTitle position-relative mb-3'>
                  <h4 className='heading4 fw-600 secondary-color bg-white'>Experience</h4>
                </div>
                <div className='doctorCont'>
                  <p>Dr. Naveen Khanna has worked for more than five years at Escort Hospital, New Delhi before joining the Patel Hospital team as a Consultant Cardiologist. He is an expert in various diseases of the heart as well as many non-invasive and invasive procedures like Echocardiography, TMT, 24 Hours Holter Monitoring, Coronary Angiography, Coronary Stenting and Pacemakers. </p>
                </div>
              </div>
             <div className='col-lg-4 col-12 float-start mt-5'>
             <GsapMagnetic>
             <Fill buttonText1={'Book an appointment'} buttonText2={'Book an appointment'} _class={'secondarybtn w-auto '}/>
             </GsapMagnetic>
             </div>
            </div>
          </div>
        </WebContainer>
      </main>
    </>
  )
}

export default DoctorDetails