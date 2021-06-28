import React, { Component } from 'react';
import Api from '../../../assets/Api/CommomApi/VideopageApi/Playlist.json';
import '../../../assets/Css/CommonCss/Videopage/Playlist.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class App extends Component {
  
  render() {
    let width = window.innerWidth;
    if(width > 768)
    {
    return (
      <div style={{paddingBottom:"7%",marginLeft:"-5%",maxWidth:"100%"}}>
        <span align="center" style={{fontWeight:"bold",textAlign:"center"}}>PLAYLIST</span>
        
        {Api.slice(0, 7).map((items, index) => (
        <div>
        <div className="zoomer"  style={{paddingTop:"%"}}>
          <img src={items.img}  className="sharper" alt="Loading..." style={{borderRadius:"0px"}}/>
          
        </div>
        
        </div>
      ))}
        
    </div>

    );
   }
    
    if(width <= 768)
    {
      const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 2,
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
      <div >
        <br></br>
         <span align="center" style={{fontWeight:"bold",textAlign:"center"}}>PLAYLIST</span>
        <Slider ref={c => (this.slider = c)} {...settings}>
        {Api.map((items, index) => (
        <div>
        <div >
          <img src={items.img} style={{ marginTop:"5%"}}alt="Loading..."/>
         
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
