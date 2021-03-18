import React, { Component } from 'react';
import Slider from 'react-slick';
import InfoSection from '../../Pages';
import { SliderNumber1,SliderNumber2, SliderNumber3,SliderNumber4} from '../data/data';
import './style/MainVisual.scss'
import 'slick-carousel/slick/slick.scss';
import "slick-carousel/slick/slick-theme.scss";
import { List } from './style/MainVisualStyle';
 

export default class MainPage extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed:1500,
            slidesToShow: 1,
            slidesToScroll: 1,
            // autoplay:true,
            autoplaySpeed: 2000,
            cssEase: "linear",
            appendDots: dots => 
               <List>
                {dots}
              </List>
            
        }
     return (
         <>
           <div className="MainVisualWrapper">
              <Slider {...settings} className="Slider">      
              <div className="slider1">
                  <InfoSection {...SliderNumber1} />
              </div>
              <div className="slider2">
                  <InfoSection {...SliderNumber2} />
              </div>
              <div className="slider2">
                  <InfoSection {...SliderNumber3} />
              </div>
              <div className="slider2">
                  <InfoSection {...SliderNumber4} />
              </div>
              </Slider>
           </div>
           
         </>
     );
   }
}

 