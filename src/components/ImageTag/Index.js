import React from 'react';

const Index = ({ ImagePath, ImageAlt, ImageWidth, ImageHeight, ImageClass }) => {
  return (
    <img
      src={ImagePath}
      alt={ImageAlt}
      width={ImageWidth}
      height={ImageHeight}
      className={ImageClass}
      loading="lazy" 
    />
  );
};

export default Index;
