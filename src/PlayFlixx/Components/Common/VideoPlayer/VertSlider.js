import React, { Component } from 'react';
import Slider from 'react-slick';
import Api from '../../../assets/Api/CommomApi/VideopageApi/VSlider.json';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../../assets/Css/CommonCss/Videopage/VSlider.css';
import { BsChevronDoubleDown } from "react-icons/bs";
class App extends Component {
  
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    
    
    let width = window.innerWidth;
    if(width > 768)
    {
      const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 8,
        slidesToScroll:1,
        mobileFirst:true,
        touchThreshold:1000,
        vertical:true,
        verticalSwiping: true,
        arrows:false,
        swipeToSlide:true,
        swipe:true,
  
      };
    return (
      <div style={{paddingTop:"20px",paddingLeft:"3px",paddingRight:"5px",paddingBottom:"20px",
      backgroundColor:"#5f5f5f",borderRadius:"40px",maxWidth:"70px",minWidth:"70px",margin:"0%"}}>
        
        <Slider ref={c => (this.slider = c)} {...settings}>
        {Api.map((items, index) => (
        <div>
        <div >
          <img src={items.img} style={{borderRadius:"50%",
          height:"60px",width:"60px",marginTop:"5%"}}alt="Loading..."/>
         
        </div>
        
        </div>
      ))}
        
      </Slider>
      <div style={{ textAlign: "center" }}>
          <button onClick={this.next}
          style={{backgroundColor:"transparent",zoom:"150%",
          borderColor:"transparent",border:"0px solid"}} >
            <BsChevronDoubleDown/>
          </button>
      </div>
    </div>

    );
    }
    if(width <= 768)
    {
      const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll:1,
        mobileFirst:true,
        touchThreshold:1000,
        vertical:false,
        horizontalSwiping: true,
        arrows:false,
        swipeToSlide:true,
        swipe:true,
  
      };
    return (
      <div style={{paddingLeft:"10px",paddingRight:"1px",paddingTop:"5px",
      borderRadius:"40px",
      backgroundColor:"#5f5f5f",maxWidth:"110%",minWidth:"70px",maxHeight:"70px"
      ,marginLeft:"-5%"}}>
        
        <Slider ref={c => (this.slider = c)} {...settings}>
        {Api.map((items, index) => (
        <div>
        <div >
          <img src={items.img} style={{borderRadius:"50%",
          zoom:"28%",marginTop:"5%"}}alt="Loading..."/>
         
        </div>
        
        </div>
      ))}
        
      </Slider>
      
    </div>

    );
    }
  }
}

export default App;
