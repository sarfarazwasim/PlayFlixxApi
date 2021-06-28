import React, { Component } from 'react';
import Slider from 'react-slick';
import Api from '../../../../assets/Api/PlayApi/SharpSliderApi/PlaySharpSlider.json';
import { MdPlayCircleFilled } from "react-icons/md";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../../../assets/Css/PlayCss/PlaySharpSlider/PlaySharpSlider.css';

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
        <div className="zoomsharp"  style={{paddingTop:"6.5%"}}>
          <img src={items.img}  className="sharp" alt="Loading..." style={{borderRadius:"0px"}}/>
          <div class="containersharp" style={{width:"100%",height:"100%"}}>
            <button class="btnsharp" 
              style={{marginTop:"-66%",height:"250px",width:"180px"
              ,paddingLeft:"10%",marginLeft:"-2%"}}>
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
