import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Api from "../../../assets/Api/CommomApi/VideopageApi/Ad.json"

const PHSlider = (props) => {
  let setting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    arrows:false,
  };
  return (
    <CarouselContainer>
      <Carousel {...setting}>
      {Api.map((items, index) => (
        <Wrap>
          <a href="#h">
            <img src={items.img} alt="" />
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

  &:after {
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
export default PHSlider;
