import React from "react";
import PHSlider from "./Play_Home-Slider/PHSlider";
import CurveSlider from "../PlaySlider/PlaySlider";
import RoundSlider from "../PlayRoundSlider/PlayRoundSlider";
import SharpSlider from "../PlaySharpSlider/PlaySharpSlider";
const PlayHome = (props) => {
  return (
    <div>
      <div>
      <PHSlider />
      </div>

      <div>
        <span style={{fontWeight:"bold",marginLeft:"5%",zoom:"130%"}}>PLAYLIST</span>
        <CurveSlider/>
      </div>
      <div>
        <span style={{fontWeight:"bold",marginLeft:"5%",zoom:"130%"}}>TRENDING</span>
        <CurveSlider/>
      </div>
      <div>
      <span style={{fontWeight:"bold",marginLeft:"5%",zoom:"130%"}}>LATEST</span>
        <RoundSlider/>
      </div>
      <div>
      <span style={{fontWeight:"bold",marginLeft:"5%",zoom:"130%"}}>RECOMMENDED</span>
        <SharpSlider/>
      </div>
    </div>
  );
};
export default PlayHome;
