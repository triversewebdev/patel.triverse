import React from 'react';

const Index = ({ firstHeading, secondHeading, _class, _classh4 }) => {
  return (
    <div className={`title text-center ${_class}`}>
      {firstHeading && <span data-aos="zoom-in" data-aos-offset="100" data-aos-duration="500" data-aos-once="true" data-aos-easing="ease-in-sine">{firstHeading}</span>}
      {secondHeading && <h4 className={`${_classh4}`} data-aos="flip-down" data-aos-offset="100" data-aos-duration="500" data-aos-once="true" data-aos-easing="ease-in-sine">{secondHeading}</h4>}
    </div>
  );
};

export default Index;
