import { useState, useEffect } from "react";
import WebContainer from "../WebContainer/Index";
import Title from "../Title/Index";
import ImageTag from "../ImageTag/Index";
import Aboutus from "../../images/about-us.jpg";

const Overview = ({Data}) => {
  const overviewText = [
    "Patel Hospital is a leading multispecialty healthcare centre in Punjab, ideally located in the heart of Jalandhar. Known for providing the best of healthcare and hospitality, Patel Hospital is equipped with the latest medical technology and world-class infrastructure, spread over 150,000 sq. ft. From robotics to super-specialized surgeries, state-of-the-art diagnostic facilities to best-in-region intensive care, we offer a comprehensive range of full medical services and surgical options.",
    "Motivated by our core values of selfless service and enriched by our decades of rich experience, we stand today as Jalandhar’s pride in healthcare and the leaders of medical excellence in the region.",
  ];

  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsZoomed((prevState) => !prevState);
    }, 8000); // Toggle zoom state every 8 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <WebContainer _parentClass={"overview"}>
      <div className="col-12 float-start">
        <div className="row">
          <div className="col-lg-8 col-xs-6 col-12">
            <Title
              secondHeading={Data.title}
              _class={"text-start"}
              _classh4={"removeBand text-start m-0 justify-content-start"}
            />
            <div className="col-lg-11 col-12">
              {Data.home_desc.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
          </div>
          <div className="col-lg-4 col-xs-6 col-12 overflow-hidden">
            <ImageTag
              ImagePath={Data.image}
              ImageAlt="Jalandhars pride in healthcare"
              ImageClass={`${isZoomed ? "zoom-in" : "zoom-out"}`}
            />
          </div>
        </div>
      </div>
    </WebContainer>
  );
};

export default Overview;
