import React, { useRef } from "react";
import Banner from "./components/Banner/Index";
import Testimonials from "./components/Testimonials/Index";
import BannerImg from "./images/banner04.webp";
import Overview from "./components/AboutUs/Overview";
import ScrollTabs from "./components/ScrollTabs/Index";
import pageImage from "./images/heart-care.jpg";
import Doctors from "./components/Doctors/Index";
import Specialities from "./components/Services/Specialities";
import specialise01 from "./images/specialise-01.jpg";
import specialise02 from "./images/specialise-02.jpg";
import Treatments from "./components/Services/Treatments";
import Technology from "./components/Services/Technology";
import Image01 from "./images/primary-pci.jpg";
import Banner01 from "./images/technology-01.webp";
import Banner02 from "./images/technology-02.webp";
import Banner03 from "./images/technology-03.webp";
import pageData from "./JsonData/CoeDetail.json";

const HeartCare = () => {
  const overviewRef = useRef(null);
  const storyRef = useRef(null);
  const whyPatelRef = useRef(null);
  const healthyNumbersRef = useRef(null);
  const ethosRef = useRef(null);
  const testimonialsRef = useRef(null);
  const patientRef = useRef(null);
  const tabs = [
    { name: "Overview", ref: overviewRef },
    { name: "Our Experts", ref: storyRef },
    { name: "Specialties", ref: whyPatelRef },
    { name: "Treatments", ref: healthyNumbersRef },
    { name: "Tecnology & Facilities", ref: ethosRef },
    { name: "Why Patel Heart?", ref: testimonialsRef },
    { name: "Patient Stories", ref: patientRef },
  ];

  const handleScrollTo = (ref, offset = 0) => {
    if (ref) {
      const elementPosition =
        ref.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <main className="col-12 float-start" data-scroll-container>
        <Banner
          BannerImage={BannerImg}
          pageChildName={"Heart Care"}
          bannerContent={pageData.bannerContent}
          BannerName={"Patel Hospital Heart Care"}
          pageName={"Centres Of Excellence"}
          pageUrl={"/centres-of-excellence"}
          _bannerHeight={"bannerHeight"}
          rightPosition={"end-0 left-inherit"}
          colorClass={"text-black"}
        />
        <ScrollTabs
          handleScrollTo={handleScrollTo}
          refs={{
            overviewRef,
            storyRef,
            whyPatelRef,
            healthyNumbersRef,
            ethosRef,
            testimonialsRef,
            patientRef,
          }}
          tabs={tabs}
        />
        <div ref={overviewRef} className="col-12 float-start">
          {pageData.overview && <Overview Data={pageData.overview} />}
        </div>
        <div ref={storyRef} className="col-12 float-start">
          {pageData.doctors && <Doctors Data={pageData.doctors} />}
        </div>
        <div ref={whyPatelRef} className="col-12 float-start">
          {pageData.specialities && (
            <Specialities specialities={pageData.specialities} />
          )}
        </div>
        <div ref={healthyNumbersRef} className="col-12 float-start">
          {pageData.treatement && (
            <Treatments
              tabsData={pageData.treatement.treatments}
              snapHeading={"TREATMENTS"}
              h4Heading={pageData.treatement.title}
              _parentClass={"treatement p-100 pb-0"}
              _classh4={"text-black"}
            />
          )}
        </div>
        <div ref={ethosRef} className="col-12 float-start">
          {pageData.technologyAndFacilty && (
            <Technology Data={pageData.technologyAndFacilty} />
          )}
        </div>
        <div ref={testimonialsRef} className="col-12 float-start">
          {pageData.whypatel.Data && (
            <Treatments
              tabsData={pageData.whypatel.Data}
              snapHeading={"Why Patel heart?"}
              h4Heading={pageData.whypatel.title}
              _parentClass={"why__patel centre__align-tabs"}
            />
          )}
        </div>
        <div ref={patientRef} className="col-12 float-start">
          {pageData.testimonials && (
            <Testimonials
              Data={pageData.testimonials}
              snapHeading={"patient Stories"}
            />
          )}
        </div>
      </main>
    </>
  );
};

export default HeartCare;
