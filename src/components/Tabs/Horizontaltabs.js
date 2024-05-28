import React, { useState } from 'react';
import ImageTag from '../ImageTag/Index';
import classNames from 'classnames';
import '../Tabs/Tabs.css';

const Horizontaltabs = ({treatments}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className='row'>
        <div className='accordiontitle col-lg-3 col-12'>
          <ul>
            {treatments.map((treatment, index) => (
              <li
                key={index}
                onClick={() => setActiveIndex(index)}
                className={classNames({ 'active': activeIndex === index })}
              >
                {treatment.title}
              </li>
            ))}
          </ul>
        </div>
        <div className='accordiontabchild d-flex flex-wrap align-items-center col-lg-9 position-relative'>
          {treatments.map((treatment, index) => (
            <div
              key={index}
              className={classNames('row accordionposition d-flex justify-content-start align-items-center w-100', {
                'active': activeIndex === index,
                'hidden': activeIndex !== index
              })}
            >
              <div className='accordionimg col-lg-5 col-12'>
                <span className='flex-center'><ImageTag ImagePath={treatment.image} /></span>
              </div>
              <div className='accordioncont col-lg-7 col-12'>
                <p>{treatment.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Horizontaltabs;
