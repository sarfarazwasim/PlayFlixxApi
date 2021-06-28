import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Api from "../../../assets/Api/PlayApi/VideoApi/Ad.json"

const ADSlider = (props) => {
  let setting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    touchThreshold:1000,
    autoplay: true,
    arrows:false,
    swipeToSlide:true,
    swipe:true,
  };
  return (
    <CarouselContainer>
      <Carousel {...setting}>
      {Api.map((items, index) => (
        <Wrap>
          <a href="#h">
            <img src={items.img} style={{height:"220px",width:"380px"}} alt="Loading..." />
          </a>
        </Wrap>

      ))}
      </Carousel>
    </CarouselContainer>
  );
};

const Carousel = styled(Slider)`
  margin-top: 0px;

  & > button {
    opacity: 0;
    z-index: 1;

  
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: initial;
  }
 
`;

const Wrap = styled.div`
 
    img {
    }

   
  }
`;

const CarouselContainer = styled.main`
  position: relative;
  overflow-x: hidden;
  display: block;
  padding: 0% ;
  margin:0.6%;

  &:after {
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
export default ADSlider;
