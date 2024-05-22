import React, { useState } from 'react';
import '../Filter/Filter.css';
import Fill from '../Button/Fill/Index';
import { Dropdown } from 'semantic-ui-react';

const Index = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  const specialitiesOptions = [
    { key: 'af', value: 'af', text: 'Specialities01' },
    { key: 'ax', value: 'ax', text: 'Specialities02' },
    { key: 'al', value: 'al', text: 'Specialities03' },
    { key: 'dz', value: 'dz', text: 'Specialities04' },
  ];
  const doctorsOptions = [
    { key: 'af', value: 'af', text: 'Doctors01' },
    { key: 'ax', value: 'ax', text: 'Doctors02' },
    { key: 'al', value: 'al', text: 'Doctors03' },
    { key: 'dz', value: 'dz', text: 'Doctors04' },
  ];

  return (
    <div className='app-WebContainer radius-50' data-aos="fade-up" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine">
      <div className="col-lg-7 col-12 m-auto">
        <div className="tabs">
          <button onClick={() => handleTabClick('tab1')} className={activeTab === 'tab1' ? 'active' : ''}>Find a Doctor</button>
          <button onClick={() => handleTabClick('tab2')} className={activeTab === 'tab2' ? 'active' : ''}>Book an Appointment</button>
        </div>

        <div className="tab-content">
          {activeTab === 'tab1' && (
            <form onSubmit={handleSubmit}>
                <div className='col-lg-12 col-12'>
                <div className='row'>
                <div className='col-lg-5 col-12'>
                    <Dropdown
                      placeholder='Select Specialities'
                      fluid
                      search
                      selection
                      options={specialitiesOptions}
                      className='radius-50'
                    />
                  </div>
                  <div className='col-lg-5 col-12'>
                    <Dropdown
                      placeholder='Select Doctors'
                      fluid
                      search
                      selection
                      options={doctorsOptions}
                    />
                  </div>
               
                <div className='col-lg-2 col-12'>
                  <Fill buttonText1={'Submit'} buttonText2={'Submit'} _class={'secondarybtn'} />
                </div>
                </div>
                </div>
            </form>
          )}
          {activeTab === 'tab2' && (
            <div>
              <h2>Tab 2 Content</h2>
              <p>This is the content for the second tab.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
