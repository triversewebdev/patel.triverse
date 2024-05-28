import React from 'react';
import '../HeroSlider/Slider.css';
import Container from '../Container/Index';
import Slider from '../HeroSlider/slickSlider'
import Filter from '../Filter/Index'
import Banner01 from '../../images/banner01.jpg';
import Banner02 from '../../images/banner02.jpg';
import Banner03 from '../../images/banner03.webp';
import Banner04 from '../../images/banner04.webp';
import Banner05 from '../../images/banner05.webp';

const Index = () => {
  const Data = [
    {
      imagePath: Banner01,
      imageAlt: 'jo aave so raazi jaave',
      title: '<span>FIVE</span><span>DECADES OF </span><span><strong>DEDICATION</strong></span>',
      content: '<p>Bridging Indian tradition with world class healthcare</p>'

    },
    {
      imagePath: Banner02,
      imageAlt: 'jo aave so raazi jaave',
      title: '<span>Leaders of </span><span>Medical </span> <span>Excellence in </span><span><strong>JALANDHAR</strong></span>',
    },
    {
        imagePath: Banner03,
        imageAlt: 'jo aave so raazi jaave',
        title: '<span>ROBOTIC</span><span>ACCURACY</span><span><strong>HUMAN CARE</strong></span>',
      },
      {
        imagePath: Banner04,
        imageAlt: 'jo aave so raazi jaave',
        title: '<p><strong>ADVANCED HEART CARE</strong></p><span>EVERY</span><span>HEARTBEAT</span><span><strong>MATTERS.</strong></span> ',        
      },
      {
        imagePath: Banner05,
        imageAlt: 'jo aave so raazi jaave',
        title: '<span>jo aave so </span><span><strong>raazi jaave</strong></span>',
      }
  ];
  return (
    <Container _parentClass='slider_Section'>
      <div className='slider herosection position-relative mb-3' >
       <Slider slides={Data} slidesToShow={1} slidesToScroll={1} slide__content={'slide__content'} sliderImageWidth={'806'} sliderImageHeight={'656'} sliderClass={'radius-50'} sliderImageClass={'slide__img'}/>
      </div>
      <Filter />
    </Container>
  );
};

export default Index;
