import React from "react";
import Header from "./Header";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MainPage from "./Pages/pages/MainVisual";
import NewAnime from "./Pages/pages/NewAnime";

export function MainVisual() {
  return (
    <>
      <Header />
      <MainPage />
      <NewAnime />
    </>
  );
}

export default MainVisual;
