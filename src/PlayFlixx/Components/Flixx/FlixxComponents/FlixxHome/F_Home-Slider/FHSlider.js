import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

//images import
import f1 from "../../../../../assets/Images/FlixxImages/F_Slider_Img/flix-slider1.jpg";
import f2 from "../../../../../assets/Images/FlixxImages/F_Slider_Img/flixx-slider2.jpg";
import f3 from "../../../../../assets/Images/FlixxImages/F_Slider_Img/flix-slider3.jpg";
import f4 from "../../../../../assets/Images/FlixxImages/F_Slider_Img/flix-slider4.jpg";

const FHSlider = (props) => {
  let setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
  };
  return (
    <CarouselContainer>
      <Carousel {...setting}>
        <Wrap>
          <a href="#h">
            <img src={f1} alt="" />
          </a>
        </Wrap>

        <Wrap>
          <a href="#h">
            <img src={f2} alt="" />
          </a>
        </Wrap>

        <Wrap>
          <a href="#h">
            <img src={f3} alt="" />
          </a>
        </Wrap>

        <Wrap>
          <a href="#h">
            <img src={f4} alt="" />
          </a>
        </Wrap>
      </Carousel>
    </CarouselContainer>
  );
};

const Carousel = styled(Slider)`
  margin-top: 0px;

  & > button {
    opacity: 0;
    height: 100%;
    width: 15vw;
    z-index: 1;

    &:hover {
      opacity: 1;
      height: 100%;
      transition: opacity 0.2s ease 0s;
    }
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
  .slick-prev {
    left: -75px;
  }
  .slick-next {
    right: -75px;
  }
`;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;

    img {
      width: 100%;
      height: 100%;
    }

    &:hover {
      padding: 0;
      border: 2px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }
  }
`;

const CarouselContainer = styled.main`
  position: relative;
  /* min-height: calc(100vh - 550px); */
  height: 75vh;
  overflow-x: hidden;
  display: block;
  top: 20px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
export default FHSlider;
