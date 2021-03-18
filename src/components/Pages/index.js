/* eslint-disable jsx-a11y/alt-text */
 import React from 'react';
 import './style/image.scss'
import { Background } from './style/SliderStyle';
import { BsChevronRight } from 'react-icons/bs'


const InfoSection = ({
   img,
   title,
   img2
}) =>  {
  return (
    <>
        <div>
          <div className="oh">
          <img src={img} className="img2" />
          <h1 className="h1">{title}</h1>
          <button className="button">
              <a href="./" className="Link">
                <h1 className="h2">보러가기</h1>
                <BsChevronRight className="h3" size="20px"/>
              </a>
          </button>
          </div>
          <div className="Width">
         <Background src={img2}>  
        </Background>
        </div>
        </div>
        </>
     );
 }


 export default InfoSection;