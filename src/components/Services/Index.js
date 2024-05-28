import React from "react";
import WebContainer from "../WebContainer/Index";
import Title from "../Title/Index";
import Card from "../Card/Index";
import "../Services/Services.css";
import Outline from "../Button/Outline/Index";
import GsapMagnetic from "../Magnetic/FramerMotion";
import { Link } from "react-router-dom";

const Index = ({ Data, _internalExellence, showButton }) => {
  return (
    <WebContainer _parentClass={`excellence ${_internalExellence}`}>
      <Title
        secondHeading={"center of excellence"}
        _classh4={"mt-0"}
        _class={"mb-3"}
      />
      <p
        className="col-12 float-start text-center text-black text-uppercase"
        data-aos="fade-in"
        data-aos-offset="100"
        data-aos-duration="500"
        data-aos-once="true"
        data-aos-easing="ease-in-sine"
      >
        <strong>{Data.title}</strong>
      </p>
      <div className="col-12 float-start mt-5">
        <div className="row">
          {Data.coeData.map((card, index) => (
            <div
              key={index}
              className="col-lg-3 col-xs-6 col-12"
              data-aos="fade-in"
              data-aos-offset="100"
              data-aos-duration="500"
              data-aos-once="true"
              data-aos-easing="ease-in-sine"
            >
              <Link to={`/centres-of-excellence/${card.slug}`}>
                {console.log("slug from detail page",card.slug)}
                <Card
                  cardCont={card.cardCont}
                  cardHeading={card.cardHeading}
                  cardImage={card.cardImage}
                  _cardClass={"w-100 mb-5 loadeffect"}
                  cardBox={"serviceBox"}
                  childCard={"serviceChild"}
                  cardImageHeight={"219"}
                  cardImagewidth={"323"}
                />
              </Link>
            </div>
          ))}
          {showButton && (
            <div className="col-12 float-start mt-5 flex-center">
              <GsapMagnetic>
                <Link to="/centres-of-excellence">
                  <Outline buttonText={"View All"} _class={"secondarybtn"} />
                </Link>
              </GsapMagnetic>
            </div>
          )}
        </div>
      </div>
    </WebContainer>
  );
};

export default Index;
