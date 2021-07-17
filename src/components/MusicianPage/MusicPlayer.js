import React, { useState, useEffect } from 'react';
import Iframe from 'react-iframe';

const MusicPlayer = ({ songs }) => {
  const [songsArr, setSongsArr] = useState([]);

  useEffect(() => {
    let songBox = [];
    const EmbeddedURLRoot = "https://open.spotify.com/embed/";
    for (const song in songs ) {
      if (songs[song]) {
        songs[song] = decodeURI(songs[song]);
        const startPosition = songs[song].indexOf(EmbeddedURLRoot) + EmbeddedURLRoot.length;
        const endPosition = songs[song].indexOf('"', startPosition);
        const EmbeddedURLEnds = songs[song].substring(startPosition, endPosition);  
    
        songBox.push(EmbeddedURLRoot + EmbeddedURLEnds);
      }
    }
    setSongsArr(songBox);
  }, [songs])
  
  return (
    <React.Fragment>
      <p className="player-title">Music Player</p>
      <div className="player-wrapper">
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
      </div>
    </React.Fragment>
  )
};

export default MusicPlayer;