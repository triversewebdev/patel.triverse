import React from 'react';
import Slider from 'react-slick';
import "./Slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageTag from '../ImageTag/Index';
import Fill from '../Button/Fill/Index';
import Circle from '../Circle/Circle';
import Quote from '../../images/Vectors/Quote';
import DownCircle from '../../images/Vectors/DownCircle';

const SlickSlider = ({ 
  slides, _parentButton,
  slidesToShow = 1, 
  slidesToScroll = 1, 
  slide__content, 
  sliderImageWidth, 
  sliderImageHeight, 
  sliderClass, 
  sliderImageClass, 
  showButton, 
  showCircle, 
  circlePosition, 
  showStar, 
  onSlideClick, 
  sliderChild, 
  activeSlide,
  showContent = true
}) => {
  const settings = {
    infinite: true,
    slidesToShow,
    slidesToScroll,
    autoplaySpeed: 5000,
    speed: 1000,
    lazyLoad: 'progressive',
    arrows: true,
    dots: false,
    autoplay: false,
  };

  // Items for the Circle component
  const items = [
    { icon: <Quote /> },
  ];

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => {
        const isLastSlide = index === slides.length - 1;
        return (
          <div key={index}
            className={`${activeSlide === index ? 'active' : ''}`}
            onClick={() => onSlideClick && onSlideClick(slide, index)} 
          >
            <div 
              className={`slide position-relative overflow-hidden ${sliderClass} ${isLastSlide ? 'leftPosition' : ''}`} 
              data-aos="fade-in" 
              data-aos-offset="200" 
              data-aos-duration="600" 
              data-aos-once="true" 
              data-aos-easing="ease-in-sine"
            >
              {slide.imagePath && (
                <div className={sliderImageClass}>
                  <ImageTag
                    ImagePath={slide.imagePath}
                    ImageAlt={slide.imageAlt || ''}
                    ImageWidth={sliderImageWidth}
                    ImageHeight={sliderImageHeight}
                    ImageClass="w-100 sliderClass"
                  />
                </div>
              )}
              <div className={slide__content}>
                {showCircle && (
                  <Circle items={items} circleClass={circlePosition} />
                )}
                {showStar && (
                  <div className='star'>
                    {Array.from({ length: 5 }, (_, i) => (
                      <i key={i} className='fa fa-star'></i>
                    ))}
                  </div>
                )}
                {slide.title && (
                  <h3 dangerouslySetInnerHTML={{ __html: slide.title }} />
                )}
                {showContent && slide.content && ( 
                  <div className={`col-12 float-start ${sliderChild}`} dangerouslySetInnerHTML={{ __html: slide.content }} />
                )}
                {showButton && (
                  <Fill buttonText1="Read More" buttonText2="Read More" _class="secondarybtn" pageLink="/doctors/doctor-details" />
                )}
                {slide.content && (
                  <button className={`border-0 downarrow ${_parentButton}`}>
                    <DownCircle />
                  </button>
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
