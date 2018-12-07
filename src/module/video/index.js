import React from 'react';
// import videojs from 'video.js';
import './index.less';

class VideoContent extends React.Component {
  componentDidMount() {
    // var myPlayer = videojs('my-player');
    // videojs('my-player').ready(function() {
    //   var myPlayer = this;
    //   myPlayer.play();
    // });
  }
  render() {
    return (
      <div className="alive-video">
        <video
          id="video"
          data-niu="true"
          webkit-playsinline="true"
          playsinline="true"
          preload="meta"
          style={{ background: '#000', width: '100%' }}
          poster="https://aliimg.changba.com/cache/photo/848631087_640_640.jpg"
          x-webkit-airplay="allow"
          src="http://qiniuuwmp3.changba.com/1058687148.mp4"
          controls="controls"
        />
      </div>
    );
  }
}

export default VideoContent;
