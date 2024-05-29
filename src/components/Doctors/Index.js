import React from "react";
import Container from "../Container/Index";
import Title from "../Title/Index";
import "../Doctors/Doctors.css";
import SlickSlider from "../HeroSlider/slickSlider";
import Banner01 from "../../images/doctoer01.webp";
import Banner02 from "../../images/doctoer02.webp";
import Banner03 from "../../images/doctoer03.webp";
import Banner04 from "../../images/doctoer04.webp";

const Index = ({ Data }) => {
  return (
    <Container _parentClass="doctors p-100 gray_Background">
      <Title
        firstHeading={"Our Expert"}
        secondHeading={"MEET OUR DOCTORS"}
        _class={"mt-0"}
      />
      <div className="col-lg-11 m-auto position-relative slider mt-5">
        <SlickSlider
          slides={Data.doctorData}
          slidesToShow={4}
          slidesToScroll={1}
          sliderClass={"doctorslide"}
          slide__content={"doctorsinfo col-12 float-start bg-white border p-4"}
          sliderImageClass={"doctorsprofile"}
          sliderImageWidth={"314"}
          sliderImageHeight={"259"}
          showButton={true}
        />
      </div>
    </Container>
  );
};

export default Index;
