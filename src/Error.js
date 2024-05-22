import React from "react";
import { NavLink } from "react-router-dom";
import WebContainer from './components/WebContainer/Index'

const Error = () => {
  return (
   <WebContainer>
    <div className="col-lg-8 col-12 m-auto text-center pt-5 pb-5 mt-5 mb-5">
            <h1>404</h1>
          <h2>WE ARE SORRY, PAGE NOT FOUND!</h2>
          <p>
            THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED HAD ITS NAME
            CHANGED OR IS TEMPORARILY UNAVAILABLE.
          </p>
          <NavLink to="/" className='text-uppercase'>back to homepage</NavLink>
        </div>
   </WebContainer>
  );
};

export default Error;
