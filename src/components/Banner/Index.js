import React from "react";
import Container from "../Container/Index";
import ImageTag from "../ImageTag/Index";
import BannerHeading from "./BannerHeading";
import "./Banner.css";
import BreadCrumb from "../BreadCrumb/Index";

const Index = ({
  BannerImage,
  BannerName,
  BannerWidth,
  BannerHeight,
  bannerContent,
  pageName,
  pageChildName,
  pageUrl,
  _bannerHeight,
  rightPosition,
  colorClass,
}) => {
  if (!BannerImage) {
    return null;
  }

  return (
    <Container _parentClass={`banner ${_bannerHeight}`}>
      <div className="col-12 float-start position-relative">
        <ImageTag
          ImagePath={BannerImage}
          ImageAlt={BannerName}
          ImageWidth={BannerWidth}
          ImageHeight={BannerHeight}
          ImageClass={"radius-25"}
        />
        {bannerContent && (
          <BannerHeading
            bannerText={bannerContent}
            _parentBanner={`parentbanner ${rightPosition}`}
            bannerHeading={`bannerh2 text-uppercase ${colorClass}`}
          />
        )}
      </div>
      <BreadCrumb
        pageName={pageName}
        pageChildName={pageChildName}
        pageUrl={pageUrl}
      />
    </Container>
  );
};

export default Index;
