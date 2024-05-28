import React, { useState } from 'react';
import ImageTag from '../ImageTag/Index';

const Accordiontabs = ({treatments}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? index : index);
  };

   return (
        <div className='col-12 m-auto position-relative overflow-hidden mb-5'>
          {treatments.map((treatment, index) => (
            <div className='row' key={index}>
              <div className='accordiontitle col-12 h-auto' onClick={() => toggleAccordion(index)}>
                <p className='col-12 float-start text-start w-100'>{treatment.title}</p>
              </div>
                <div className='accordiontabchild d-flex align-items-center col-12'>
                {activeIndex === index && (
                    <div className='row flex-center text-center p-5'>
                  <div className='accordionimg col-12 text-center'>
                    <span className='m-auto mb-3 flex-center'><ImageTag ImagePath={treatment.image} /></span>
                  </div>
                  <div className='accordioncont col-12 text-center'>
                    <p>{treatment.content}</p>
                  </div>
                  </div>
              )}
                </div>
            </div>
          ))}
        </div>
  );
};

export default Accordiontabs;