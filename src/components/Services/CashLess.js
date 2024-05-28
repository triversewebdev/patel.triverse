import React from 'react';
import WebContainer from '../WebContainer/Index';
import Title from '../Title/Index';
import ImageTag from '../ImageTag/Index';
import Logo01 from '../../images/logo01.webp';
import Logo02 from '../../images/logo02.webp';
import Logo03 from '../../images/logo03.webp';
import Logo04 from '../../images/logo04.webp';
import Logo05 from '../../images/logo05.webp';
import Logo06 from '../../images/logo06.webp';
import Logo07 from '../../images/logo07.webp';
import Logo08 from '../../images/logo08.webp';
import Logo09 from '../../images/logo09.webp';
import Logo10 from '../../images/logo10.webp';
import Logo11 from '../../images/logo11.webp';
import Logo12 from '../../images/logo12.webp';
import Logo13 from '../../images/logo13.webp';
import Logo14 from '../../images/logo14.webp';
import Logo15 from '../../images/logo15.webp';
const CashLess = () => {
    const items = [
        { imagePath: Logo01, imageAlt: 'Logo 1' },
        { imagePath: Logo02, imageAlt: 'Logo 2' },
        { imagePath: Logo03, imageAlt: 'Logo 1' },
        { imagePath: Logo04, imageAlt: 'Logo 2' },
        { imagePath: Logo05, imageAlt: 'Logo 1' },
        { imagePath: Logo06, imageAlt: 'Logo 2' },
        { imagePath: Logo07, imageAlt: 'Logo 1' },
        { imagePath: Logo08, imageAlt: 'Logo 2' },
        { imagePath: Logo09, imageAlt: 'Logo 1' },
        { imagePath: Logo10, imageAlt: 'Logo 2' },
        { imagePath: Logo11, imageAlt: 'Logo 1' },
        { imagePath: Logo12, imageAlt: 'Logo 2' },
        { imagePath: Logo13, imageAlt: 'Logo 1' },
        { imagePath: Logo14, imageAlt: 'Logo 2' },
        { imagePath: Logo15, imageAlt: 'Logo 1' },
      ];
  return (
    <WebContainer _parentClass='cashLess'>
      <Title secondHeading={'Cashless Service'} />
      <div className='col-12 float-start'>
        <div className='row'>
          <ul className='flex-center serviceProvider mt-3'>
            {items.map((item, index) => (
              <li key={index} className='flex-center' data-aos="fade-in" data-aos-offset="100" data-aos-duration="500" data-aos-once="true" data-aos-easing="ease-in-sine">
                <ImageTag ImagePath={item.imagePath} ImageAlt={item.imageAlt || 'Logo'} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </WebContainer>
  );
};

export default CashLess;
