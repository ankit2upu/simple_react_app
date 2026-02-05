import React from 'react'
import './VideoPlayer.css'
import video from '../../assets/video.mp4'

const VideoPlayer = ( {playState, setplayState}) => {
  return (
             <div className="video_player hide">
              <video src={video}></video>
             </div>





  )
}

export default VideoPlayer





{/* <div className= {`video_Player ${playState?'' : 'hide'}`} >
    <video src={video} autoPlay muted controls></video>
      
    </div>  */}
