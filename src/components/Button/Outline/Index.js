import React from 'react'
import "../../Button/Button.css"

const Index = ({ buttonText, _class, pageLink }) => {
    return (
      <a href={pageLink} className='outline-button'>
      <div className={`btn-8 ${_class}`} data-aos="zoom-in" data-aos-offset="50" data-aos-duration="500" data-aos-once="true" data-aos-easing="ease-in-sine">       
      {buttonText}
      </div>
      
    </a>
    );
  };

export default Index