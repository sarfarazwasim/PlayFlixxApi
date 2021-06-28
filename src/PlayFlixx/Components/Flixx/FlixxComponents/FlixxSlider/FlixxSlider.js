import React, { Component } from 'react';
import Slider from 'react-slick';
import Api from '../../../../assets/Api/PlayApi/SliderApi/PlaySlider.json';
import { MdPlayCircleFilled } from "react-icons/md";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../../../assets/Css/PlayCss/PlaySlider/PlaySlider.css';

class App extends Component {
  
  render() {
    const settings = {
      dots: false,
      autoplay: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll:1,
      mobileFirst:true,
      touchThreshold:1000,
      variableWidth: true,
     
    };
    return (
      <div>
      <div style={{paddingLeft:"6.5%",paddingRight:"6.5%",width:"100%",paddingBottom:"7%"}}>
        
        <Slider {...settings}>
        {Api.map((items, index) => (
        <div>
        <div className="zoom"  style={{paddingTop:"6.5%"}}>
          <img src={items.img} style={{borderRadius:"30px"}} className="card" alt="Loading..."/>
          <div className="containerplay" style={{width:"100%",height:"100%"}}>
            <button class="btnplay" 
              style={{marginTop:"-66%",height:"250px",width:"180px"
              ,marginLeft:"-2%"}}>
                  <span style={{zoom:"300%"}}><MdPlayCircleFilled/></span>
            </button> 
          </div>
            <span style={{color:"white"}}>{items.title}</span>
        </div>
        
        </div>
      ))}
        
      </Slider>
    </div>

    </div>
    );
  }
}

export default App;
