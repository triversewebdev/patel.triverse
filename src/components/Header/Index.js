import React, { useRef } from 'react';
import '../Header/header.css';
import Container from '../Container/Index';
import Logo from '../Header/Logo/Index';
import Navbar from '../Header/Navbar/Index';
import useStickyHeader from './useStickyHeader';
import { NavLink } from 'react-router-dom';

const Index = () => {
  const headerRef = useRef(null);
  useStickyHeader(headerRef);

  return (
    <header className="col-12 float-start">
            <Container ref={headerRef} _parentClass="header">
        <div className="col-lg-3 col-6 d-flex align-items-center">
          <div className="logo" data-aos="zoom-in" data-aos-offset="100" data-aos-duration="500" data-aos-once="true" data-aos-easing="ease-in-sine">
           <NavLink to='/'>
           <Logo />
           </NavLink>
          </div>
        </div>
        <div className="col-lg-9 col-6">
          <Navbar />
        </div>
      </Container>
    </header>
  );
};

export default Index;
