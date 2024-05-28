import React, { useEffect, useRef, useState } from "react";
import Banner from "./components/Banner/Index";
import BannerImg from "./images/about-banner.png";
import Overview from "./components/AboutUs/Overview";
import QuoteBanner from "./components/AboutUs/QuoteBanner";
import OurStory from "./components/AboutUs/OurStory";
import bannerImage1 from "./images/quote.jpg";
import bannerImage2 from "./images/quote2.jpg";
import bannerImage3 from "./images/quote3.jpg";
import bannerImage4 from "./images/quote4.jpg";
import WhyPatelHospital from "./components/AboutUs/WhyPatelHospital";
import CountLoader from "./components/CountLoader/Index";
import Testimonials from "./components/Testimonials/Index";
import Ethos from "./components/AboutUs/Ethos";
import ScrollTabs from "./components/ScrollTabs/Index";
import { BASE_URL } from "./Utils/useApi";
import axios from "axios";

const AboutPatal = () => {
  const overviewRef = useRef(null);
  const storyRef = useRef(null);
  const whyPatelRef = useRef(null);
  const healthyNumbersRef = useRef(null);
  const ethosRef = useRef(null);
  const testimonialsRef = useRef(null);
  const tabs = [
    { name: "Overview", ref: overviewRef },
    { name: "Our Story", ref: storyRef },
    { name: "Why Patel Hospital?", ref: whyPatelRef },
    { name: "Our Healthy Numbers", ref: healthyNumbersRef },
    { name: "Our Ethos", ref: ethosRef },
    { name: "Patient Testimonials", ref: testimonialsRef },
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

  const [pageData, setPageData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/about.php`);
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

  console.log("image path", pageData.homeBanner[0].imagePath);
  return (
    <>
      <main className="col-12 float-start" data-scroll-container>
        <Banner
          BannerImage={pageData.homeBanner[0].imagePath}
          BannerName={"About Patel Hospital"}
          bannerContent={pageData.homeBanner[0].title}
          pageName={"About Us"}
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
          }}
          tabs={tabs}
        />
        <div ref={overviewRef} className="col-12 float-start">
          {pageData.overview && <Overview Data={pageData.overview} />}
        </div>
        <QuoteBanner
          bannerImage={pageData.overview.quote_bg_image}
          quoteText={pageData.overview.quote}
          quoteAuthor={pageData.overview.quote_name}
          _QuoteCenter={"col-lg-6 col-10"}
          _QuoteHeading={"heading2"}
        />
        <div ref={storyRef} className="col-12 float-start">
          {pageData.our_story && <OurStory Data={pageData.our_story} />}
        </div>
        <QuoteBanner
          bannerImage={pageData.our_story.story_quote2_image}
          quoteText={pageData.our_story.story_quote2}
          quoteAuthor={pageData.our_story.story_quote2_name}
          _QuoteCenter={"col-lg-6 col-10"}
          _QuoteHeading={"heading3"}
          Quote2={true}
          qouteConculsion={pageData.our_story.story_quote2_conclusion}
          quote2title={pageData.our_story.heading2}
          quoute2subheading={pageData.our_story.sub_heading2}
          qouteText={pageData.our_story.desc2}
        />
        <QuoteBanner
          bannerImage={pageData.our_story.quote3_image}
          quoteText={pageData.our_story.quote3}
          quoteAuthor={pageData.our_story.quote3_name}
          _QuoteCenter={"col-lg-8 col-10"}
          _QuoteHeading={"heading3"}
        />
        <div ref={whyPatelRef} className="col-12 float-start">
          {pageData.whypatel && <WhyPatelHospital Data={pageData.whypatel} />}
        </div>
        <div ref={healthyNumbersRef} className="col-12 float-start">
          {pageData.number && <CountLoader Data={pageData.number} />}
        </div>
        <div ref={ethosRef} className="col-12 float-start">
          {pageData.our_ethos && (
            <Ethos
              heading={pageData.our_ethos.our_mission_heading}
              Quote={pageData.our_ethos.our_mission_quote}
              description={pageData.our_ethos.our_mission_desc}
            />
          )}
        </div>
        <QuoteBanner
          bannerImage={pageData.our_ethos.our_mission_quote2_bg_image}
          quoteText={pageData.our_ethos.our_mission_quote2}
          quoteAuthor={pageData.our_ethos.our_mission_quote2_name}
          _QuoteCenter={"col-lg-5 col-10"}
          _QuoteHeading={"heading3"}
        />
        {pageData.our_ethos && (
          <Ethos
            heading={pageData.our_ethos.our_vision_heading}
            Quote={pageData.our_ethos.our_vision_quote}
            description={pageData.our_ethos.our_vision_desc}
            TitleToShow={false}
          />
        )}
        <div ref={testimonialsRef} className="col-12 float-start">
          {pageData.testimonials && (
            <Testimonials Data={pageData.testimonials} />
          )}
        </div>
      </main>
    </>
  );
};

export default AboutPatal;
