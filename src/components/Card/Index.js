import React from 'react';
import ImageTag from '../ImageTag/Index';

const Index = ({ cardText, cardImage, _cardClass, _cardP, cardImagewidth, cardImageHeight, cardCont, cardHeading, cardBox, childCard }) => {
  return (
    <div className={`cardParent ${_cardClass}`}>
      {cardImage && (
        <ImageTag
          ImagePath={cardImage}
          ImageAlt={cardText}
          ImageWidth={cardImagewidth}
          ImageHeight={cardImageHeight}
        />
      )}
      {cardText && <p className={`${_cardP}`}><strong>{cardText}</strong></p>}
      {cardHeading && 
      <div className={`${cardBox}`}>
        <div className={`col-lg-10 ${childCard}`}>
        <span className='text-black text-uppercase'>{cardCont}</span>
        <h5 className='m-0'>{cardHeading}</h5>        
        </div>
      </div>} 
    </div>
  );
};

export default Index;
