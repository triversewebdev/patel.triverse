import React, { useEffect, useState } from "react";
import Banner from "./components/Banner/Index";
import BannerImg from "./images/doctor_Banner.jpg";
import WebContainer from "./components/WebContainer/Index";
import ImageTag from "./components/ImageTag/Index";
import Fill from "./components/Button/Fill/Index";
import GsapMagnetic from "./components/Magnetic/FramerMotion";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "./Utils/useApi";

const DoctorDetails = () => {
  const { slug } = useParams();
  const [pageData, setPageData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/doctor_details.php?url=${slug}`
        );
        if (response.data.error) {
          setError(response.data.error);
        } else {
          setPageData(response.data.doctorDetails);
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [slug]);
  console.log("doctorData", pageData);
  if (isLoading)
    return (
      <div className="  mx-auto p-100 w-100 d-flex justify-content-center">
        Loading...
      </div>
    );
  if (!pageData)
    return (
      <div className="  mx-auto p-100 w-100 d-flex justify-content-center">
        No data found
      </div>
    );
  if (error)
    return (
      <div className="  mx-auto p-100 w-100 d-flex justify-content-center">
        Error: {error}
      </div>
    );
  const slugToText = (slug) => {
    let text = slug.replace(/[-_]/g, " ");
    text = text.replace(/\b\w/g, (char) => char.toUpperCase());

    return text;
  };

  return (
    <>
      <main className="col-12 float-start" data-scroll-container>
        <Banner
          BannerImage={BannerImg}
          pageChildName={slugToText(slug)}
          pageName={"Doctors"}
          pageUrl={"/doctors"}
        />
        <WebContainer _parentClass={"doctorsBio p-100 pt-0"}>
          <div className="row">
            <div className="col-lg-4 col-12">
              {pageData.imagePath && (
                <ImageTag ImagePath={pageData.imagePath} />
              )}
            </div>
            <div className="col-lg-8 col-12">
              <div className="doctorName mb-3 col-12 float-start">
                {pageData.name && (
                  <h3 className="heading4 fw-600 text-black">
                    {pageData.name}
                  </h3>
                )}
                {pageData.designation && (
                  <p className="m-0">{pageData.designation}</p>
                )}
              </div>
              {pageData.education && (
                <div className="doctorInfo mt-4 col-12 float-start">
                  <div className="doctorTitle position-relative mb-3">
                    <h4 className="heading4 fw-600 secondary-color bg-white">
                      Education
                    </h4>
                  </div>
                  <div className="doctorCont">
                    {pageData.education.map((edu, index) => (
                      <p key={index}>{edu.trim()}</p>
                    ))}
                  </div>
                </div>
              )}
              {pageData.expertise && (
                <div className="doctorInfo mt-4 col-12 float-start">
                  <div className="doctorTitle position-relative mb-3">
                    <h4 className="heading4 fw-600 secondary-color bg-white">
                      Expertise
                    </h4>
                  </div>
                  <div className="doctorCont">
                    <p>{pageData.expertise}</p>
                  </div>
                </div>
              )}
              {pageData.experience ||
                (!pageData.experience("") && (
                  <div className="doctorInfo mt-4 col-12 float-start">
                    <div className="doctorTitle position-relative mb-3">
                      <h4 className="heading4 fw-600 secondary-color bg-white">
                        Experience
                      </h4>
                    </div>
                    <div className="doctorCont">
                      <p>{pageData.experience}</p>
                    </div>
                  </div>
                ))}
              <div className="col-lg-4 col-12 float-start mt-5 ">
                <GsapMagnetic>
                  <Fill
                    buttonText1={"Book an appointment"}
                    buttonText2={"Book an appointment"}
                    _class={"secondarybtn w-auto "}
                  />
                </GsapMagnetic>
              </div>
            </div>
          </div>
        </WebContainer>
      </main>
    </>
  );
};

export default DoctorDetails;
