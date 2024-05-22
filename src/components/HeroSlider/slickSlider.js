import React from "react";
import Slider from "react-slick";
import "./Slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageTag from "../ImageTag/Index";
import Fill from "../Button/Fill/Index";
import Circle from "../Circle/Circle";
import Quote from "../../images/Vectors/Quote";

const SlickSlider = ({
  slides,
  slidesToShow,
  slidesToScroll,
  slide__content,
  sliderImageWidth,
  sliderImageHeight,
  sliderClass,
  sliderImageClass,
  showButton,
  showCircle,
  circlePosition,
  showStar,
}) => {
  const settings = {
    navigation: true,
    loop: true,
    infinite: true,
    slidesToShow: slidesToShow || 1,
    slidesToScroll: slidesToScroll || 1,
    initialSlide: 0,
    autoplaySpeed: 5000,
    autoplay: false,
    speed: 1000,
    lazyLoad: "progressive",
    arrows: true,
    dots: false,
  };

  const items = [{ icon: <Quote /> }];

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => {
        const isLastSlide = index === slides.length - 1;
        return (
          <div key={index}>
            <div
              className={`slide position-relative overflow-hidden ${sliderClass} ${
                isLastSlide ? "leftPosition" : ""
              }`}
              data-aos="fade-in"
              data-aos-offset="200"
              data-aos-duration="600"
              data-aos-once="true"
              data-aos-easing="ease-in-sine"
            >
              {slide.imagePath && (
                <div className={`${sliderImageClass}`}>
                  <ImageTag
                    ImagePath={slide.imagePath}
                    ImageAlt={slide.imageAlt || ""}
                    ImageWidth={sliderImageWidth}
                    ImageHeight={sliderImageHeight}
                    ImageClass={`w-100 ${"sliderClass"}`}
                  />
                </div>
              )}
              <div className={`${slide__content}`}>
                {showCircle && (
                  <Circle items={items} circleClass={circlePosition} />
                )}
                {/* {showStar && (
                  <div className="star">
                    {Array(slides.stars).map((_, index) => (
                      <i key={index} className="fa fa-star"></i>
                    ))}
                  </div>
                )} */}
                {showStar && (
                  <div className="star">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                )}
                {slide.title && (
                  <h3 dangerouslySetInnerHTML={{ __html: slide.title }} />
                )}
                {slide.content && (
                  <div
                    className="col-12 float-start"
                    dangerouslySetInnerHTML={{ __html: slide.content }}
                  />
                )}

                {showButton && (
                  <Fill
                    buttonText1={"Read More"}
                    buttonText2={"Read More"}
                    _class={"secondarybtn"}
                  />
                )}
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default SlickSlider;
