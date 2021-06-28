import React from "react";
import FHSlider from "./F_Home-Slider/FHSlider";
import FVSlider from "./F_Home-Slider/FVSlider";
import CurveSlider from "../FlixxSlider/FlixxSlider";
import RoundSlider from "../FlixxRoundSlider/FlixxRoundSlider";
import SharpSlider from "../FlixxSharpSlider/FlixxSharpSlider";
const FlixxHome = (props) => {
  return (
    <div>
      <FHSlider />
      <br />
      <span style={{fontWeight:"bold",marginLeft:"5%",zoom:"130%"}}>PLAYLIST</span>
      <RoundSlider/>
      <br /> 
      <FVSlider />
      <br />
      <span style={{fontWeight:"bold",marginLeft:"5%",zoom:"130%"}}>WEB SERIES</span>
      <CurveSlider />
      <br />
      <span style={{fontWeight:"bold",marginLeft:"5%",zoom:"130%"}}>CONTINUE WATCHING</span>
      <CurveSlider />
      <br />
      <span style={{fontWeight:"bold",marginLeft:"5%",zoom:"130%"}}>SPECIAL AND LATEST MOVIES</span>
      <CurveSlider />
      <br />
      <span style={{fontWeight:"bold",marginLeft:"5%",zoom:"130%"}}>SHOWS RECOMENDED TO YOU</span>
      <SharpSlider />

    </div>
  );
};

export default FlixxHome;
