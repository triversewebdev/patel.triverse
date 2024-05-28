import React from 'react';
import Container from '../Container/Index';
import Title from '../Title/Index';
import Horizontaltabs from '../Tabs/Horizontaltabs';
import Accordiontabs from '../Tabs/Accordiontabs';
import useWindowWidth from '../Tabs/useWindowWidth';

const Treatments = ({tabsData, snapHeading, h4Heading, _parentClass, _classh4}) => {
    const windowWidth = useWindowWidth();
  const isDesktop = windowWidth > 990;

  return (
    <>
      <Container _parentClass={_parentClass}>
        <Title firstHeading={snapHeading} secondHeading={h4Heading} _classh4={_classh4}/>
        <div className='col-lg-11 col-12 m-auto accordiontabsparent mt-3'>
          {isDesktop ? (
            <Horizontaltabs treatments={tabsData} />
          ) : (
            <Accordiontabs treatments={tabsData} />
          )}
        </div>
      </Container>
    </>
  );
};

export default Treatments;
