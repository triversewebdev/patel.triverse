import React from 'react';
import WebContainer from '../WebContainer/Index';
import Title from '../Title/Index';
import Image from '../ImageTag/Index';

const Specialities = ({ specialities }) => {
  return (
    <WebContainer>
      <Title firstHeading={'SPECIALITIES'} secondHeading={'Know More About Our Specialties'} />
      <div className='col-lg-10 col-12 m-auto'>
        <div className='row'>
          {specialities.map((speciality, index) => (
            <div key={index} className='col-lg-6 col-12'>
              <Image ImagePath={speciality.image} ImageAlt={speciality.title} />
              <h4 className='heading5 fw-400 text-uppercase secondary-color'>{speciality.title}</h4>
              {speciality.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </WebContainer>
  );
};

export default Specialities;
