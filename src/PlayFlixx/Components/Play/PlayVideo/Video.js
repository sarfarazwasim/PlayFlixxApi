import { LionPlayer } from "lion-player";
import React from "react";

import "lion-player/dist/lion-skin.min.css";

const videoJsOptions = {
  autoplay: false,
  controls: true,
  loop: true,
  liveui: true,
  nativeControlsForTouch: true,
  playbackRates: [0.5, 1, 1.25, 1.5, 2],
  poster: "http://pic2.52pk.com/files/130514/1283314_143556_2145.jpg",
};

const Video = (props) => {
  const SOURCES = [
    {
      src: "	https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8",
      type: "application/x-mpegURL",
    },
    {
      src: "https://bitmovin-a.akamaihd.net/content/playhouse-vr/mpds/105560.mpd",
      type: "application/dash+xml",
    },
  ];
  return (
    <div
      style={{
        maxWidth: ""
      }}
    >
      <LionPlayer sources={SOURCES} {...videoJsOptions} />
    </div>
  );
};
export default Video;
