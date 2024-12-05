import React from 'react';
import "./style.css";

function AudioTrack(props) {
  const {track} = props; 
  return (
    <div className='trackContainer'>
      <div className='thumbnailContainer'>
        <img src={track.imgSrc} className='thumbnailImg' alt={track.title}/>  
      </div>
      <p className='trackText'>{track.title}</p>
      <p className='trackText'>\\</p>
      <p className='trackText'>{track.artist}</p>
      <button className='buttonDark'>Play Song</button>
      <button className='buttonDark'>Play Horn Excerpt</button>
    </div>
  )
}

export default AudioTrack
