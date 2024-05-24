import React, { useState, useEffect } from "react";
import axios from "axios";
import HeroSlider from "./components/HeroSlider/Index";
import AboutUs from "./components/AboutUs/Index";
import CountLoader from "./components/CountLoader/Index";
import WhyPatelHospital from "./components/AboutUs/WhyPatelHospital";
import Services from "./components/Services/Index";
import Doctors from "./components/Doctors/Index";
import Circle from "./components/Circle/Index";
import Testimonials from "./components/Testimonials/Index";
import CashLess from "./components/Services/CashLess";
import Accreditation from "./components/Accreditation/Index";
import LocomotiveScroll from "locomotive-scroll";
import { BASE_URL } from './Utils/useApi';

const Home = () => {
  const [pageData, setPageData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/home.php`);
        setPageData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      {pageData && (
        <main className="col-12 float-start" data-scroll-container>
          {pageData.homeBanner && <HeroSlider Data={pageData.homeBanner} />}
          {pageData.aboutUs && <AboutUs Data={pageData.aboutUs} />}
          {pageData.number && <CountLoader Data={pageData.number} />}
          {pageData.whypatel && <WhyPatelHospital Data={pageData.whypatel} />}
          {pageData.coe && <Services Data={pageData.coe} />}
          {pageData.doctors && <Doctors Data={pageData.doctors} />}
          {pageData.serviecs && <Circle Data={pageData.serviecs} />}
          {pageData.testimonials && (
            <Testimonials Data={pageData.testimonials} />
          )}
          {pageData.cashless && <CashLess Data={pageData.cashless} />}
          {pageData.accreditation && (
            <Accreditation Data={pageData.accreditation} />
          )}
        </main>
      )}
    </>
  );
};

export default Home;
