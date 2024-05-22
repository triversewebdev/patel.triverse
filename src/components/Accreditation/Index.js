import React from "react";
import Title from "../Title/Index";
import ImageTag from "../ImageTag/Index";
import Logo01 from "../../images/logo16.webp";
import Logo02 from "../../images/logo17.webp";
import Logo03 from "../../images/logo18.webp";
const Index = ({Data}) => {

  return (
    <>
      <section className="col-12 float-start accreditation">
        <div className="container">
          <div className="row">
            <div className="web-container">
              <Title secondHeading={"ACCREDITATION"} />
            </div>
          </div>
        </div>
        <div className="col-12 float-start bglayerimage p-100">
          <div className="container">
            <div className="web-container">
              <div className="col-lg-10 col-12 m-auto">
                <div className="row justify-content-center gap-5">
                  {Data.accreditationData.map((item, index) => (
                    <div
                      key={index}
                      className="col-lg-3 col-xs-6 col-12 bg-white text-center p-4 radius-25"
                      data-aos="fade-in"
                      data-aos-offset="100"
                      data-aos-duration="500"
                      data-aos-once="true"
                      data-aos-easing="ease-in-sine"
                    >
                      <ImageTag
                        ImagePath={item.imagePath}
                        ImageAlt={item.imageAlt || "Logo"}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
