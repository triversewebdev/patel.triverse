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
  const Data1 = [
    {
      imagePath: Banner01,
      imageAlt: "Dr. Amber Aggrwal",
      title: "Dr. Amber Aggrwal",
      content:
        "<p>MBBS, DNB (Obstetrics & Gynaecology)</p> <p>MCh. Reproductive Medicine (IVF), UK</p>",
    },
    {
      imagePath: Banner02,
      imageAlt: "Dr. Nitish Kohli",
      title: "Dr. Nitish Kohli",
      content:
        "<p>MBBS, MS (Orthopedics) Consultant Orthopedics & Joint Replacement Surgeon</p>",
    },
    {
      imagePath: Banner03,
      imageAlt: "Dr. Shikha Chawla",
      title: "Dr. Shikha Chawla",
      content:
        "<p>M.B.B.S. D.N.B (Radiation Oncology). HoD, Dept. of Radiation Oncology Patel Hospital, Jalandhar</p>",
    },
    {
      imagePath: Banner04,
      imageAlt: "Dr. Nishant Saini",
      title: "Dr. Nishant Saini",
      content:
        "<p>MBBS, MD (GMCH, Chandigarh) Transfusion Medicine Specialist</p>",
    },
  ];
  return (
    <Container _parentClass="doctors p-100 gray_Background">
      <Title secondHeading={Data.title} _class={"mt-0"} />
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
