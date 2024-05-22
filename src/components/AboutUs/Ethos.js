import React from "react";
import WebContainer from "../WebContainer/Index";
import Title from "../Title/Index";

const Ethos = ({ heading, Quote, description, TitleToShow }) => {
  return (
    <WebContainer>
      {TitleToShow && (
        <Title
          secondHeading={"A Glimpse Into What Drives Us"}
          firstHeading={"Our Ethos"}
        />
      )}
      <h4 className="heading2 flex-center secondary-color text-uppercase mt-5 ">
        <strong>{heading} </strong>
      </h4>
      <div className="col-lg-8 col-12 m-auto text-center">
        <h5
          className="heading3 d-grid mb-5"
          dangerouslySetInnerHTML={{ __html: Quote }}
        ></h5>
        {description.split(/\r\n\r\n|\r\n/).map((paragraph, index) => (
          <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }}></p>
        ))}
      </div>
    </WebContainer>
  );
};

export default Ethos;
