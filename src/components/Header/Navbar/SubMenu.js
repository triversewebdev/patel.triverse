import React from "react";
import Arrow from "../../../images/Vectors/nextArrow";
import { Link } from "react-router-dom";

const SubMenu = ({ submenus }) => {
  return (
    <div className="dropdown-content">
      <div className="submenu">
        <div className="container">
          <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-8 col-12 py-5">
              <div className="submenu_Child">
                {submenus.map((submenu, index) => (
                  <div
                    className="submenu_row d-flex align-items-center col-12 float-start"
                    key={index}
                  >
                    <div className="submenuicons">{submenu.icon}</div>
                    <div className="submenucontent px-2">
                      {submenu.link ? (
                        <Link to={submenu.link}>
                          <p>{submenu.text}</p>
                        </Link>
                      ) : (
                        <p>{submenu.text}</p>
                      )}
                    </div>
                  </div>
                ))}
                <div className="submenu_row mt-4 pt-4 d-flex align-items-center col-12 float-start border-0">
                  <Link to="/centres-of-excellence">
                    <p>
                      View All Centres of Excellence{" "}
                      <Arrow themeColor="primary-color" />
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubMenu;
