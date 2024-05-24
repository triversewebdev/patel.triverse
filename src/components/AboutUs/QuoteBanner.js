import React from "react";
import "../AboutUs/Aboutus.css";
import Webcontainer from "../WebContainer/Index";
import Title from "../Title/Index";
import { Parallax } from "react-parallax";
import DoubleQuote from "../../images/Vectors/DoubleQuote";

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
  const getStrengthValue = () => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.platform);
    const isMac = /MacIntel/.test(navigator.platform);

    return isIOS || isMac ? 100 : 300;
  };

  return (
    <>
      <section className="col-12 float-start quote__banner position-relative">
        <Parallax
          bgImage={bannerImage}
          strength={getStrengthValue()}
          className="flex-center"
        >
          <div
            className={`${_QuoteCenter} m-auto quote_Content text-center text-white`}
          >
            <span>
              {" "}
              <DoubleQuote />
            </span>
            <div className="col-12 flex-center text-white position-relative">
              {quoteText.split("\r\n").map((paragraph, index) => (
                <h3
                  className={`text-white fw-100 mt-4 ${_QuoteHeading}`}
                  // dangerouslySetInnerHTML={{ __html: paragraph }}
                >
                  {paragraph}
                </h3>
              ))}
              {/* <h3
                className={`text-white fw-100 ${_QuoteHeading}`}
                dangerouslySetInnerHTML={{ __html: quoteText }}
              ></h3> */}
              {panditApte && (
                <>
                  {panditText.split("\r\n").map((paragraph, index) => (
                    <h3
                      className={`text-white fw-100 mt-4 ${_QuoteHeading}`}
                      // dangerouslySetInnerHTML={{ __html: paragraph }}
                    >
                      {paragraph}
                    </h3>
                  ))}
                </>
              )}
              <p className="text-white mt-5">{quoteAuthor}</p>
            </div>
          </div>
        </Parallax>
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
