import React from "react";
import WebContainer from "../WebContainer/Index";
import Title from "../Title/Index";
import Card from "../Card/Index";
import "../Services/Services.css";
import Outline from "../Button/Outline/Index";
import GsapMagnetic from "../Magnetic/FramerMotion";
import Image01 from "../../images/service01.webp";
import Image02 from "../../images/service02.webp";
import Image03 from "../../images/service03.webp";
import Image04 from "../../images/service04.webp";
import Image05 from "../../images/service05.webp";
import Image06 from "../../images/service06.webp";
import Image07 from "../../images/service07.webp";
import Image08 from "../../images/service08.webp";

const Index = ({ Data }) => {
  const ServiceSubheading = [
    "Dedicated Services  |  Advanced Technology  |  Specialized Experts",
  ];
  const cardData = [
    {
      cardCont: "PATEl HEART",
      cardHeading: "Centre of Advanced Cardiac Care",
      cardImage: Image01,
    },
    {
      cardCont: "PATEl KIDNEY",
      cardHeading: "Centre of Advanced Nephro-Urology",
      cardImage: Image02,
    },
    {
      cardCont: "PATEl HEAD & NECK",
      cardHeading: "Centre of Advanced ENT Care",
      cardImage: Image03,
    },
    {
      cardCont: "PATEl Liver",
      cardHeading: "Centre of Advanced GI Care",
      cardImage: Image04,
    },
    {
      cardCont: "PATEl Robotics",
      cardHeading: "Centre of Advanced Robotic Surgery",
      cardImage: Image05,
    },
    {
      cardCont: "PATEl Cancer",
      cardHeading: "Centre of Advanced Oncology",
      cardImage: Image06,
    },
    {
      cardCont: "PATEl Lung",
      cardHeading: "Centre of Advanced Pulmonology",
      cardImage: Image07,
    },
    {
      cardCont: "PATEl HEART",
      cardHeading: "Centre of Advanced Cardiac Care",
      cardImage: Image08,
    },
  ];
  return (
    <WebContainer _parentClass="excellence">
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
            </div>
          ))}
          <div className="col-12 float-start mt-5 flex-center">
            <GsapMagnetic>
              <Outline buttonText={"View All"} _class={"secondarybtn"} />
            </GsapMagnetic>
          </div>
        </div>
      </div>
    </WebContainer>
  );
};

export default Index;
