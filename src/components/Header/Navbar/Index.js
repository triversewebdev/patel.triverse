import React, { useEffect, useState } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import Outline from '../../Button/Outline/Index';
import Fill from '../../Button/Fill/Index';
import SubMenu from '../../Header/Navbar/SubMenu';
import '../Navbar/Navbar.css';
import Heart from '../../../images/Vectors/Heart';
import Pulmonology from '../../../images/Vectors/Pulmonology';
import Nephrology from '../../../images/Vectors/Nephrology';
import Liver from '../../../images/Vectors/Liver';
import Derma from '../../../images/Vectors/Derma';
import Breathing from '../../../images/Vectors/Breathing';
import Robotic from '../../../images/Vectors/Robotic';
import Radiology from '../../../images/Vectors/Radiology';
import { NavLink } from 'react-router-dom';
import Container from '../../Container/Index';

const menuData = [
  { name: 'Home', link: '/' },
  { 
    name: 'Centres of Excellence', link: '/centres-of-excellence',
    submenus: [
      { icon: <Heart themeColor='primary-color' />, text: 'Patel Heart Advanced Cardiac Centre' },
      { icon: <Nephrology themeColor='primary-color' />, text: 'Patel Advanced Nephro-Urology' },
      { icon: <Breathing themeColor='primary-color' />, text: 'The Head & Neck Centre of Excellence Patel Hospital' },
      { icon: <Liver themeColor='primary-color' />, text: 'Patel Center of Excellence Liver & Digestive Care' },
      { icon: <Robotic themeColor='primary-color' />, text: 'Patel Robotic Surgery Centre' },
      { icon: <Radiology themeColor='primary-color' />, text: 'Patel Advanced Cancer Institute' },
      { icon: <Pulmonology themeColor='primary-color' />, text: 'Department of Pulmonology' },
      { icon: <Radiology themeColor='primary-color' />, text: 'Patel Advanced Laparoscopy Center' },
      { icon: <Derma themeColor='primary-color' />, text: 'Patel Dermagique' }
    ]
  },
  { name: 'Services', link: '/services' },
  { name: 'Doctors', link: '/doctors' },
  { name: 'Cashless Service', link: '/cashless-service' },
  { name: 'About Us', link: '/about-us' },
  { name: 'Contact Us', link: '/contact-us' }
];

const Index = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const [menus, setActive] = useState(false);
  const handleToggle = () => {
    setActive(!menus);
  };
  
  return (
    <div className='navbar gap-3 p-0'>
      <div className='col-12 float-start d-flex justify-content-end gap-3'>
        <Outline buttonText='Book an Appointment' pageLink='/book-an-appoinment' />
        <Fill buttonText2='Emergency' buttonText1='+91-98152-90790' />
        <Outline buttonText='Login' _class={'bluebtn'} OutlineDropdown={true}/>
      </div>
      <div className='col-12 float-start navbarcolumn d-flex justify-content-end align-items-center'>
        <div className='menuStrip'>
          <ul className='d-flex'>
            {menuData.map((menu, index) => (
              <li key={index}>
                <span data-aos="fade-in" data-aos-offset="100" data-aos-duration="500" data-aos-once="true" data-aos-easing="ease-in-sine">
                  {menu.link ? <NavLink to={menu.link}>{menu.name}</NavLink> : menu.name}
                </span>
                {menu.submenus && <SubMenu submenus={menu.submenus} />}  
              </li>
            ))}
          </ul>
        </div>
        <div className='menu_second_child' data-aos="fade-in" data-aos-offset="200" data-aos-duration="800" data-aos-once="true" data-aos-easing="ease-in-sine">
          <button onClick={handleToggle} className={menus ? 'hamburger active' : 'hamburger'}>
            <span></span><span></span><span></span>
          </button>
        </div>
        <div className={menus ? 'menus active' : 'menus'}>
          <Container _parentClass={'dropdown-content'}>
              <div className='col-12 float-start flex-center justify-content-end'>
                <ul className='px-5 d-flex'>
                  <li className='text-uppercase text-white'><NavLink to='https://careers.patelhospital.com/jobs/Careers' target='_blank'>Career</NavLink></li>
                  <li className='text-uppercase text-white'><NavLink to='/media'>Media</NavLink></li>
                  <li className='text-uppercase text-white'><NavLink to='/'>Patient Room</NavLink></li>
                </ul>
              </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Index;
