import React from 'react';
import Header from './Header';

import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";
 
import MainPage from './Pages/pages/MainVisual';
 

export function MainVisual() {
     return (
         <>
         <Header />
         <MainPage />
         </>
     );
   }


   export default MainVisual