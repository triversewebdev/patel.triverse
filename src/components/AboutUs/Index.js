import React from "react";
import WebContainer from "../WebContainer/Index";
import Title from "../Title/Index";
import Fill from "../Button/Fill/Index";
import GsapMagnetic from "../Magnetic/FramerMotion";

const Index = ({ Data }) => {
  return (
    <WebContainer _parentClass="About_Section">
      <div
        className="col-lg-8 col-12 m-auto text-center"
        data-aos="fade-up"
        data-aos-offset="500"
        data-aos-duration="500"
        data-aos-once="true"
        data-aos-easing="ease-in-sine"
      >
        <Title
          firstHeading={"About Us"}
          secondHeading={Data.title}
          _class={"flex-center"}
        />
        {Data.aboutData.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        <div className="col-12 float-start mt-5 flex-center">
          <GsapMagnetic>
            <Fill
              buttonText1={"Read More"}
              buttonText2={"Read More"}
              _class={"secondarybtn"}
            />
          </GsapMagnetic>
        </div>
      </div>
    </WebContainer>
  );
};

export default Index;
