import React from 'react';
const Circle = ({ items, circleClass }) => {
  return (
    <div className={`circle d-flex flex-wrap justify-content-between col-lg-10 col-12 m-auto ${circleClass}`}>
      {items.map((item, index) => (
        <div key={index} className='iconcircle col-lg-3 col-xs-6 col-12 flex-center text-center gap-3 mt-5'>
          <span data-aos="fade-in" data-aos-offset="100" data-aos-duration="500" data-aos-once="true" data-aos-easing="ease-in-sine">{item.icon}</span>
         {item.text &&
 <p className='col-12 float-start' data-aos="fade-up" data-aos-offset="100" data-aos-duration="500" data-aos-once="true" data-aos-easing="ease-in-sine"><strong dangerouslySetInnerHTML={{__html: item.text}} className='text-black text-uppercase'/></p>
         }
        </div>
      ))}
    </div>
  );
};

export default Circle;
