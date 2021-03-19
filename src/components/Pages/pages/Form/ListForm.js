import React from "react";
import { HomeData2 } from "./data/Data";
import Description from "./data/Description";
import { Tab1 } from "./style/ListStyle";

export const HomeData1 = ({ name }) => {
  return (
    <>
      <Tab1>
        <Description {...HomeData2} />
      </Tab1>
    </>
  );
};

export default HomeData1;
