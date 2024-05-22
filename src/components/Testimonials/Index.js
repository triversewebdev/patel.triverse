import React from "react";
import Container from "../Container/Index";
import Title from "../Title/Index";
import "../Testimonials/Testimonials.css";
import SlickSlider from "../HeroSlider/slickSlider";

const Index = ({ Data }) => {
  return (
    <Container _parentClass="doctors p-100 gray_Background">
      <Title secondHeading={Data.title} />
      <div className="col-lg-10 m-auto position-relative slider">
        <SlickSlider
          slides={Data.testimonialsData}
          slidesToShow={3}
          slidesToScroll={1}
          sliderClass={"doctorslide testimonialslide mt-3"}
          slide__content={
            "testimonialcont col-12 float-start bg-white d-flex flex-column-reverse"
          }
          showCircle={true}
          circlePosition={"circlePosition position-absolute"}
          showStar={true}
        />
      </div>
    </Container>
  );
};

export default Index;
