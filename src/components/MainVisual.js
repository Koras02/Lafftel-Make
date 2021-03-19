import React from "react";
import Header from "./Header";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MainPage from "./Pages/pages/MainVisual";
import NewAnime from "./Pages/pages/NewAnime";
import ListForm from "./Pages/pages/Form/ListForm";

export function MainVisual() {
  return (
    <>
      <Header />
      <MainPage />
      <NewAnime {...ListForm} />
    </>
  );
}

export default MainVisual;
