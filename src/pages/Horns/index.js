import React, {useState} from "react";
import AudioTrack from "../../components/AudioTrack";

import tromPic from "./img/trombone.jpg";
import stairsPic from "./img/meStairsRiverRoom.jpg";
import moonPic from "./img/meMoonRiverRoom.jpg";
import AudioPlayer from 'react-h5-audio-player';
import './audioStyle.css';
import "./style.css";
import audios from './audio/audios';


function Horns(props) {
  const [audio, setAudio] = useState(audios[0].audio)
  const [startPosition, setStartPosition] = useState(100);
  const [selectedSong, setSelectedSong] = useState(audios[0])
  const playerRef = React.createRef()

  const audioHeader = (
  <div >
    <p >{selectedSong.title}</p>
  </div>);

  return (
    <main className="body">
      <div id="bodyOne" style={{display:"flex", flexDirection:'row'}}>
        <div className="imgDiv">
          <img className={"tromImg"} src={tromPic} alt="Me on the stairs" />
        </div>
        <div id="columnRight">
          <div className="headerDiv">
            <h3>Can I play horns on your track?</h3>
          </div>
          <div className="subHeadingDiv">
            <h1 style={{color:"#FFECD1"}}>Check out some of my work :D</h1>
          </div>
          <div className="audioDiv">
            <div className="tracksDiv">
              {audios.map(track => <AudioTrack track={track}/>)}
            </div>
            <div className="playerDiv">
            <AudioPlayer 
            header={audioHeader}
            onLoadedData={()=> playerRef.current.audio.current.currentTime = startPosition}
            ref={playerRef}
            src={audio}
            />
            </div>
            </div>
        </div>  
      </div>

    </main>
  );
}

export default Horns;