import React from 'react'
import "../../Button/Button.css"
const Index = ({ buttonText2, buttonText1, _class}) => {
  return (
    <div className={`button-container-1 border-0 ${_class}`} data-aos="zoom-in" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine">
      <span className="mas">{buttonText1}</span>
    <button type="button" name="Hover">{buttonText2}</button>
  </div>
  )
}

export default Index