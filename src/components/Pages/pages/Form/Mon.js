import React from "react";
import { Img } from "./style/ImagesStyle";
import "./style/MondayWrapper.scss";

const HomeData1 = ({
  name,
  name2,
  img,
  img2,
  name3,
  img3,
  name4,
  name5,
  img4,
  img5,
}) => {
  return (
    <>
      <div className="MondayWrapper">
        <form className="MondayWrapperForm">
          <Img src={img}></Img>
        </form>
        <form className="MondayWrapperForm">
          <Img src={img2}></Img>
        </form>
        <form className="MondayWrapperForm">
          <Img src={img3}></Img>
        </form>
        <form className="MondayWrapperForm">
          <Img src={img4}></Img>
        </form>
        <form className="MondayWrapperForm">
          <Img src={img5}></Img>
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
        <div className="Name">
          <h1 className="MondayWrapperH1">
            <p className="p1">{name}</p>
            <p className="p2">{name2}</p>
            <p className="p3">{name3}</p>
            <p className="p4">{name4}</p>
            <p className="p5">{name5}</p>
            <p className="p6">{name}</p>
          </h1>
        </div>
      </div>
    </>
  );
};

export default HomeData1;
