import React, { useState, useEffect, useRef } from "react";
import Plyr from "plyr";
// import "./MusicPlayer2.scss";
import "plyr/dist/plyr.css";
import { motion } from "framer-motion";
import { wrapper, item } from "../animation"
import VideoPlayer from "./VideoPlayer";
import Info from './Info'
import './MusicPlayer.scss'

const MusicPlayer = () => {
  const [activeTrack, setActiveTrack] = useState(null);
  const audioPlayer = useRef(null);

  const data = [
    {
      id: "01.",
      title: "Sie7e /Prod. Mauren Mendo",
      prod: "Prod. Voxsayab",
      name: "/songs/song1.mpeg",
      duration: "2:47",
    },
    {
      id: "02.",
      title: "Open the door /Prod. Louie Fleck",
      prod: "Prod. Voxsayab",
      name: "/songs/song2.mpeg",
      duration: "2:45",
    },
    {
      id: "03.",
      title: "Fractal /Prod. Voxsayab",
      prod: "Prod. Voxsayab",
      name: "/songs/song3.mp4",
      duration: "2:45",
    },
    {
      id: "04.",
      title: "Amor Natural / Prod. Joshua Selekter",
      prod: "Prod. Voxsayab",
      name: "/songs/song4.mpeg",
      duration: "2:45",
    },
    {
      id: "05",
      title: "Lunas /Prod. Bb Music",
      prod: "Prod. Voxsayab",
      name: "/songs/song5.mpeg",
      duration: "2:45",
    },
    // {
    //   id: "06",
    //   title: "Lunas /Prod. Bb Music",
    //   prod: "Prod. Voxsayab",
    //   name: "/songs/song5.mpeg",
    //   duration: "2:45",
    // },
  ];

  useEffect(() => {
    const player = new Plyr(audioPlayer.current, {
      controls: [
        "play",
        "restart", // Added the restart button
        "rewind", // Added the rewind button
        "seek",
        "fast-forward", // Added the fast-forward button
        "progress",
        "current-time",
        "mute",
        "volume",
      ],
    });

    // Call player.destroy() in cleanup function:
    return () => {
      if (player) {
        player.destroy();
      }
    };
  }, []);

  const playTrack = (index) => {
    setActiveTrack(index);
    audioPlayer.current.src = data[index].name;
    audioPlayer.current.load();
    audioPlayer.current.play();
  };

  return (
    <>

    <Info />

      <motion.div
      
      className="music-master-parent2"
        style={{ position: 'relative', zIndex: '10',  }}
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: "0", opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        exit={{ opacity: 0 }}
      >
        <div className="player-padding2" style={{  }}>
          <div className="music-flex-container" style={{ }}>
            <div className="music-text-container" style={{  }}>
              <div
              className="music-text-title"
                style={{
                    overflow: 'hidden'
                }}
              >
                <motion.h1
                 initial= {{y: "100%"}}
                 animate={{y:0}} 
                 transition ={{delay: '0.5', duration: 0.5}}
                  style={
                    {
                      //rotate: '270deg'
                    }
                  }
                  className="music-title highlighted2"
                >
                  Music Playlist
                </motion.h1>
              </div>
               
<div className="music-box" style={{background: '#ecebf5',  boxShadow: 'rgb(0, 0, 0) 0.3vmin 0.3vmin',
  border: '0.2vmin solid rgb(0, 0, 0)'}}>
              <audio
              
                id="player"
                controls
                ref={audioPlayer}
                onEnded={() => setActiveTrack(null)}
                style={{ display: "inline-block" }}
              ></audio>

              <div
              className="music-box-shadow"
                style={{
              
                  //background: 'red'
                }}
              >
                <div

                className="songs-map"
                  style={{
                    height: "100%",
                    width: "100%",
                    padding: "0 10%",

                    //zIndex: "-1",
                    // position: 'relative'
                  }}
                ></div>

                {data.map((song, index) => (
                  <div
               
                    className="hover-song"
                    key={song.id}
                    onClick={() => playTrack(index)}
                    style={{
                   
                      backgroundColor:
                        activeTrack === index ? "#d1d1f2" : "transparent",
                      color: activeTrack === index ? "#000" : "#000",
                    }}
                  >
                    <span>{song.id}</span>
                    <div
                      style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "space-between",
                      }}
                    >
                      <span style={{ marginLeft: "2%" }}>{song.title}</span>
                      <span style={{}}>{song.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
              </div>
            </div>

            <video
            
            className="music-video"
              style={{
                filter: 'grayscale(1)'
              }}
              src="/videos/vidIntro5.mp4"
              loop
              autoPlay
              muted
            ></video>

            {/* <h3 style={{rotate: '90deg', fontSize: '4.5rem'}}>Music Playlist</h3> */}
          </div>

          {/* <div style={{height: '800px', width: '100%'}}>
        <video style={{width: '100%', height: '100%'}} src="/videos/vidIntro5.mp4" loop autoPlay muted></video>
        </div> */}
        </div>
        {/* <div style={{height: '100vh', marginTop: '-2%', }}>
 <video style={{width: '100%', height: '100vh',
          //  boxShadow: 'rgb(0, 0, 0) 0.9vmin 0.9vmin',
          //  border: '0.2vmin solid rgb(0, 0, 0)',
      }} src="/videos/vidIntro4.mp4" autoPlay loop muted  ></video>
      </div> */}

        {/* <div className="music-layer" style={{}}></div> */}
      </motion.div>

      <VideoPlayer />
    </>
  );
};

export default MusicPlayer;
