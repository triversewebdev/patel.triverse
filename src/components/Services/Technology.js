import React, { useState } from "react";
import Container from "../Container/Index";
import Title from "../Title/Index";
import SlickSlider from "../HeroSlider/slickSlider";

const Technology = ({ Data }) => {
  const [selectedSlide, setSelectedSlide] = useState(null);
  const [activeSlide, setActiveSlide] = useState(null);
  const handleSlideClick = (slide, index) => {
    setSelectedSlide(slide);
    setActiveSlide(index);
  };

  return (
    <Container _parentClass="technology mb-5">
      <Title
        firstHeading="Technology & Facilities"
        secondHeading="Latest Technology & World-Class Facilities"
      />
      <div className="col-12 position-relative slider">
        <SlickSlider
          slides={Data}
          slidesToShow={3}
          slidesToScroll={1}
          sliderClass="doctorslide"
          slide__content="doctorsinfo col-12 float-start p-4 gray-background technolog__content"
          sliderImageClass="doctorsprofile"
          sliderImageWidth="314"
          sliderImageHeight="259"
          sliderChild="d-none"
          onSlideClick={handleSlideClick}
          activeSlide={activeSlide}
          showContent={false}
          _parentButton={"d-block"}
        />
      </div>
      {selectedSlide && selectedSlide.content && (
        <div className="selected-slide-content col-12 float-start flex-center mt-5">
          <div dangerouslySetInnerHTML={{ __html: selectedSlide.content }} />
        </div>
      )}
    </Container>
  );
};

export default Technology;
