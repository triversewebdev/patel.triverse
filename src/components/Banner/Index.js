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
}) => {
  if (!BannerImage) {
    return null;
  }

  return (
    <Container _parentClass={"Banner"}>
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
            _parentBanner={"parentbanner"}
            bannerHeading={"bannerh2 text-uppercase"}
          />
        )}
      </div>
      <BreadCrumb />
    </Container>
  );
};

export default Index;
