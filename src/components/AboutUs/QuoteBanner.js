import React from "react";
import ImageTag from "../ImageTag/Index";
import "../AboutUs/Aboutus.css";
import Webcontainer from "../WebContainer/Index";
import Title from "../Title/Index";

const QuoteBanner = ({
  bannerImage,
  quoteText,
  quoteAuthor,
  _QuoteCenter,
  _QuoteHeading,
  Quote2,
  panditApte,
  panditText,
  qouteConculsion,
  quote2title,
  quoute2subheading,
  qouteText,
}) => {
  return (
    <>
      <section className="col-12 float-start quote__banner position-relative">
        <ImageTag ImagePath={bannerImage} ImageAlt={quoteAuthor} />
        <div className={`${_QuoteCenter} m-auto quote_Content absoluteCenter`}>
          <div className="col-12 flex-center">
            <h3
              className={`text-white ${_QuoteHeading}`}
              dangerouslySetInnerHTML={{ __html: quoteText }}
            ></h3>
            {panditApte && (
              <h3
                className={`text-white mt-4 ${_QuoteHeading}`}
                dangerouslySetInnerHTML={{ __html: panditText }}
              ></h3>
            )}
            <p className="text-white mt-5">{quoteAuthor}</p>
          </div>
        </div>
      </section>
      {Quote2 && (
        <Webcontainer>
          <div className="col-lg-11 col-12 m-auto text-center">
            <p>{qouteConculsion}</p>
          </div>
        </Webcontainer>
      )}
      {Quote2 && (
        <Webcontainer>
          {" "}
          <div className="col-lg-8 col-12 m-auto text-center">
            <Title secondHeading={quote2title} />
            <h4 className="heading3 secondary-color">
              <strong>{quoute2subheading}</strong>
            </h4>
            {qouteText.split("\r\n\r\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </Webcontainer>
      )}
    </>
  );
};

export default QuoteBanner;
