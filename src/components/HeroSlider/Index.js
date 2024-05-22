import React from "react";
import "../HeroSlider/Slider.css";
import Container from "../Container/Index";
import Slider from "../HeroSlider/slickSlider";
import Filter from "../Filter/Index";
import Banner01 from "../../images/banner01.jpg";
import Banner02 from "../../images/banner02.jpg";
import Banner03 from "../../images/banner03.webp";
import Banner04 from "../../images/banner04.webp";
import Banner05 from "../../images/banner05.webp";

const Index = ({Data}) => {
  
  return (
    <Container _parentClass="slider_Section">
      <div className="slider herosection position-relative mb-3">
        <Slider
          slides={Data }
          slidesToShow={1}
          slidesToScroll={1}
          slide__content={"slide__content"}
          sliderImageWidth={"806"}
          sliderImageHeight={"656"}
          sliderClass={"radius-50"}
          sliderImageClass={"slide__img"}
        />
      </div>
      <Filter />
    </Container>
  );
};

export default Index;
