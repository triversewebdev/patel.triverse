import React from "react";
import "../../Button/Button.css";

const Index = ({ buttonText, _class, pageLink, OutlineDropdown }) => {
  return (
    <a href={pageLink} className="outline-button">
      <div
        className={`btn-8 ${_class}`}
        data-aos="zoom-in"
        data-aos-offset="50"
        data-aos-duration="500"
        data-aos-once="true"
        data-aos-easing="ease-in-sine"
      >
        {buttonText}
      </div>
      {OutlineDropdown && (
        <div className="dropdown-content">
          <ul>
            <li>Patient Login</li>
            <li>Doctor Login</li>
            <li>Employee Login</li>
          </ul>
        </div>
      )}
    </a>
  );
};

export default Index;
