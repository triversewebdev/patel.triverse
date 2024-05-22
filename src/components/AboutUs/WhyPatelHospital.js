import React from "react";
import WebContainer from "../WebContainer/Index";
import Title from "../Title/Index";
import Card from "../Card/Index";
import Image01 from "../../images/Legacy-Care.webp";
import Image02 from "../../images/Advanced-Excellence.webp";
import Image03 from "../../images/Tech-Innovation.webp";
import Image04 from "../../images/World-Class-Infrastructure.webp";
import Image05 from "../../images/Extraordinary-Expertise.webp";
import Image06 from "../../images/Compassionate-Care.webp";

const WhyPatelHospital = ({ Data }) => {
  const cardData = [
    { cardText: "Legacy of Care", cardImage: Image01 },
    { cardText: "Advanced Centres of Excellence", cardImage: Image02 },
    { cardText: "Tech-Driven Innovation", cardImage: Image03 },
    { cardText: "World-Class Infrastructure", cardImage: Image04 },
    { cardText: "Extraordinary Expertise", cardImage: Image05 },
    { cardText: "Compassionate Care", cardImage: Image06 },
  ];

  return (
    <WebContainer _parentClass="why_Patel">
      <Title
        firstHeading={"WHY PATEL HOSPITAL?"}
        secondHeading={Data.title}
        _class={"mb-5"}
      />
      <div className="col-lg-10 col-12 m-auto">
        <div className="row align-items-start">
          {Data.cardData.map((card, index) => (
            <div
              key={index}
              className="col-lg-4 col-xs-6 col-12 flex-center"
              data-aos="fade-in"
              data-aos-offset="100"
              data-aos-duration="500"
              data-aos-once="true"
              data-aos-easing="ease-in-sine"
            >
              <Card
                cardText={card.cardText}
                cardImage={card.cardImage}
                _cardClass={"cardbox position-relative"}
                _cardP={"text-black text-uppercase mt-2 letter1"}
                cardImageHeight={"282"}
                cardImagewidth={"303"}
              />
            </div>
          ))}
        </div>
      </div>
    </WebContainer>
  );
};

export default WhyPatelHospital;
