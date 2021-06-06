import React, { useState, useEffect } from 'react';
import Iframe from 'react-iframe';

const MusicPlayer = ({ songs }) => {
  const [songsArr, setSongsArr] = useState([]);

  useEffect(() => {
    let songBox = [];
    for (const key in songs ) {
      songs[key] && songBox.push(songs[key]);
    }
    setSongsArr(songBox);
  }, [])
  
  return (
    <React.Fragment>
      <p className="player-title">Music Player</p>
      { 
        songsArr.map((song, index) => (
          <Iframe
            key={index}
            url={song}
            width="300" 
            height="380" 
            frameBorder="0" 
            allow="encrypted-media" 
          />
        ))
      }
    </React.Fragment>
  )
};

export default MusicPlayer;