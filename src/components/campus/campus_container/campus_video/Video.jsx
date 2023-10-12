import React, { useState, useRef } from 'react';

import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import campus_video from '../../../../assets/campus/campus_tour.mp4'
import './Video.css'

const Video = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef();

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);

    if(playVideo){
      vidRef.current.pause();
    }
    else{
      vidRef.current.play();
    }
  }

  return(
    <div className="app__video">
      <video 
        src = {campus_video}
        ref = {vidRef}
        type = "video/mp4"
        loop
        controls = {false}
        muted
      />
      <div className="app__video-overlay">
        <div className="app__video-overlay_circle"
         onClick={handleVideo}
        >
          {playVideo 
          ? <BsPauseFill color='#fff' fontSize={30} /> 
          : <BsFillPlayFill color='#fff' fontSize={30} />}
        </div>
      </div>
    </div>
  )
}

export default Video;
