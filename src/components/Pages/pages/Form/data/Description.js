import React from "react";
import { Image, TitleForm, TitleH1 } from "../style/ListStyle";

export const HomeData2 = ({ title, title2, title3, img, img2, img3 }) => {
  return (
    <>
      <Image src={img}></Image>
      <Image src={img2}></Image>
      <Image src={img3}></Image>
      <Image src={img}></Image>
      <Image src={img}></Image>
      <Image src={img}></Image>
      <TitleForm>
        <TitleH1>{title}</TitleH1>
        <TitleH1>{title2}</TitleH1>
        <TitleH1>{title3}</TitleH1>
        <TitleH1>{title}</TitleH1>
        <TitleH1>{title}</TitleH1>
        <TitleH1>{title}</TitleH1>
      </TitleForm>
    </>
  );
};

export default HomeData2;
