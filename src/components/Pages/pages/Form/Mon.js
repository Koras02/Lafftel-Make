import React from "react";
import { Img } from "./style/ImagesStyle";
import "./style/MondayWrapper.scss";

const HomeData1 = ({ name, img }) => {
  return (
    <>
      <div className="MondayWrapper">
        <form className="MondayWrapperForm">
          <Img src={img}></Img>
        </form>
        <form className="MondayWrapperForm">
          <Img src={img}></Img>
        </form>
        <form className="MondayWrapperForm">
          <Img src={img}></Img>
        </form>
        <form className="MondayWrapperForm">
          <Img src={img}></Img>
        </form>
        <form className="MondayWrapperForm">
          <Img src={img}></Img>
        </form>
        <form className="MondayWrapperForm">
          <Img src={img}></Img>
        </form>
        <form className="MondayWrapperForm">
          <Img src={img}></Img>
        </form>
      </div>
    </>
  );
};

export default HomeData1;
