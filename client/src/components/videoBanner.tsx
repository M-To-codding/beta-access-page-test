import React from 'react';
import YouTube from "react-youtube";

function VideoBanner() {

  const options: any = {
    height: '450',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  return <section className="video-banner-content">
    <YouTube videoId="D0I1LbX4YD0" opts={options}/>
  </section>
}

export default VideoBanner;