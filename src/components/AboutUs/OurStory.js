import React from "react";
import WebContainer from "../WebContainer/Index";
import Title from "../Title/Index";
import ImageTag from "../ImageTag/Index";
import Patelji from "../../images/patel-ji.png";

const OurStory = ({
  firstHeading,
  secondHeading,
  description,
  imagePath,
  imageAlt,
  quote,
  quoteAuthor,
  story,
}) => {
  return (
    <WebContainer>
      <Title firstHeading={firstHeading} secondHeading={secondHeading} />
      <p className="col-lg-7 col-12 m-auto text-center">{description}</p>
      <div className="col-lg-10 col-12 m-auto row mt-5 align-items-center">
        <div className="col-lg-4 col-12 text-end">
          <ImageTag ImagePath={imagePath} ImageAlt={imageAlt} />
        </div>
        <div className="col-lg-8 col-12">
          <h3 className="heading3 text-black">{quote}</h3>
          <p className="mt-4 text-uppercase spacing3">{quoteAuthor}</p>
        </div>
      </div>
      <div className="col-12 mt-5 text-center">
        {story.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </WebContainer>
  );
};

const OurStoryPage = ({ Data }) => {
  const description =
    "Our story starts in Jalandhar in 1974, with two noble doctors and their vision of greatness, guided by the inspiring principles of the Iron Man of India.";
  const quote =
    "“There is something unique in this soil, which despite many obstacles has always remained the abode of great souls.”";
  const quoteAuthor = "Sardar Vallabhai Patel";
  const story = [
    "Dr B.S. Chopra and Dr S.K. Sharma wanted to create a medical institute that would one day become a leading multispecialty hospital. Committed to the core Indian values of selfless care and customer delight, they simultaneously sought to bring the highest standards of expertise and medical excellence to their community.",
    "Built from the bottom up by two visionary desi boys on a mission, Patel Hospital has grown up from the soil to become a renowned centre of medical excellence, equal to meet every healthcare need with world-class treatment. Our founding doctors’ unique vision, dedication, and medical skills guided Patel Hospital to the heights it has achieved today.",
    "From 20 beds to 250+ beds, from a small hospital in Jalandhar to a leading multispecialty medical centre in North West India, it has indeed been a journey of greatness. Proving that where integrity and patient care are prioritized, excellence will follow!",
    "Over the years, as technology evolved at a dizzying pace and medical innovations transformed the arena of medicine, Patel Hospital stayed abreast of the latest trends, always striving to deliver world-class medicine to patients.",
  ];

  return (
    <OurStory
      firstHeading={Data.story_heading}
      secondHeading={Data.story_title}
      description={Data.story_desc}
      imagePath={Data.story_image}
      imageAlt="Sardar Vallabhai Patel"
      quote={Data.story_quote}
      quoteAuthor={Data.story_quote_name}
      story={story}
    />
  );
};

export default OurStoryPage;
