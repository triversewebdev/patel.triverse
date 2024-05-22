import React from 'react';

const BannerHeading = ({ bannerText, _parentBanner, bannerHeading }) => {
  return (
    <div className={`banner-heading ${_parentBanner}`}>
      <h2 dangerouslySetInnerHTML={{ __html: bannerText }} className={`position-relative ${bannerHeading}`}/>
    </div>
  );
};

export default BannerHeading;
