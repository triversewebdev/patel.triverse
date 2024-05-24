import React from "react";
import Counter from "../CountLoader/Loader";
import Container from "../Container/Index";
import Title from "../Title/Index";
import "../CountLoader/Counter.css";

const Index = ({ Data }) => {
  return (
    <Container _parentClass="Number_Section  number_Bg_Image p-100">
      <Title
        secondHeading={Data.title}
        _class="text-white float-start col-12"
      />
      <div className="numberrow col-12 float-start flex-center justify-content-evenly pt-5">
        {Data &&
          Data.numberData.map((counter, index) => (
            <div key={index} className="numbercolumn primary-color">
              {counter.startValue !== undefined &&
              counter.endValue !== undefined ? (
                <div className="countercount d-flex justify-content-center">
                  <Counter
                    startValue={counter.startValue}
                    endValue={counter.endValue}
                    speed={counter.speed}
                    className="m-0 p-0"
                  />
                  <span>{counter.Plus}</span>
                  <span>{counter.Heading}</span>
                </div>
              ) : (
                <div className="countercount d-flex">
                  <span>{counter.Plus}</span>
                  <span>{counter.Heading}</span>
                </div>
              )}
              <div className="countercont m-0 text-center">
                <p className="m-0 text-white">{counter.label}</p>
              </div>
            </div>
          ))}
      </div>
    </Container>
  );
};

export default Index;
