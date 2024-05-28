import React, { useState, useEffect } from "react";
import WebContainer from "./components/WebContainer/Index";
import Title from "./components/Title/Index";
import ImageTag from "./components/ImageTag/Index";
import "./components/Doctors/Doctors.css";
import Container from "./components/Container/Index";
import BreadCrumb from "./components/BreadCrumb/Index";
import Fill from "./components/Button/Fill/Index";
import axios from "axios";
import { BASE_URL } from "./Utils/useApi";

const Doctors = () => {
  const [pageData, setPageData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/doctor.php`);
        setPageData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  console.log("doctor data", pageData);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <>
      <Container _parentClass="gray_Background">
        <BreadCrumb pageName={"Doctors"} />
      </Container>
      <WebContainer _parentClass="doctors p-100 gray_Background">
        <Title secondHeading={"MEET OUR DOCTORS"} _class={"mt-0"} />
        <div className="col-12 float-start">
          <div className="row">
            {pageData.doctors &&
              pageData.doctors.map((doctor, index) => (
                <>
                  <div key={index} className="col-lg-3 col-xs-6 col-12 pb-4">
                    <div className="doctorsprofile">
                      <ImageTag
                        ImagePath={doctor.imagePath}
                        ImageClass={"w-100"}
                      />
                    </div>
                    <div className="doctorsinfo col-12 float-start bg-white border p-4">
                      <h3>{doctor.name}</h3>
                      <div
                        className="col-12 float-start"
                        dangerouslySetInnerHTML={{
                          __html: doctor.designation,
                        }}
                      />
                      <Fill
                        buttonText1={"Read More"}
                        buttonText2={"Read More"}
                        _class={"secondarybtn"}
                        pageLink={`/doctors/${doctor.slug}`}
                      />
                    </div>
                  </div>
                </>
              ))}
          </div>
        </div>
      </WebContainer>
    </>
  );
};

export default Doctors;
