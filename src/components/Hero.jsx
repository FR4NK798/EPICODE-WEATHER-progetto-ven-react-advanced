import React from "react";
import video from "../data/timelapse.mp4";

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


const Hero = () => {
  return (
    <div>
      <video
        autoPlay
        muted
        loop
        className="myVideo"
        src={video}
        type="video/mp4"
      >
        Your browser does not support HTML5 video.
      </video>

{/*       
      <div className="content">
        <h1>Benveuto nel meteo di EPICODE</h1>
        <p>Scegli una località</p>
      </div> */}
      {/* form ricerca */}
      
    </div>
  );
};
export default Hero;
