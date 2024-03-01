import React, { useState } from 'react';
import { motion } from "framer-motion";
 import './VideoPlayer.scss'; // Import the corresponding CSS file

const VideoPlayer = () => {
  const [activeVideo, setActiveVideo] = useState(0);
  const data = [
    {
        'id': 'a1',
        'title': 'Amor Natural / Prod. Joshua Selekter',
        'name': 'Nede3.mp4',
        'duration': '3:54',
    },
    {
      'id': 'a2',
      'title':'Kinpak "Circus System" ft Son Fino (Video Oficial)',
      'name': 'Nede21.mp4',
      'duration': '4:12',
  },

    {
        'id': 'a3',
        'title': 'Lunas (Live at Foro Los Alcatraces CDMX) ',
        'name': 'Nede1.mp4',
        'duration': '4:27',
    },
  


   
      {
        'id': 'a4',
        'title': 'Selva Negra (Corona Session 2) ',
        'name': 'Nede19.mp4',
        'duration': '5:17',
   },

   {
    'id': 'a5',
    'title': 'Juntas Chicas - "Detras de mi la noche" ',
    'name': 'Nede20.mp4',
    'duration': '6:22',
},
{
  'id': 'a6',
  'title': 'Carnaval del Barrio ',
  'name': 'Nede23.mp4',
  'duration': '4:12',
},
// {
//   'id': 'a5',
//   'title': 'Con La Luz Prendida (Detras De Mi La Noche) (feat. Nedelka Sotelo) ',
//   'name': 'Nede16.mp4',
//   'duration': '3:59',
// },
{
  'id': 'a7',
  'title': 'We Live in Babylon ',
  'name': 'Nede22.mp4',
  'duration': '4:00',
},

{
  'id': 'a8',
  'title': 'Kinich Pakal el mismo de antes acústico ',
  'name': 'Nede18.mp4',
  'duration': '4:04',
},
{
  'id': 'a9',
  'title': 'POSEIDÓN BY PHOTOLOGIE PHOTO (NEDELKA SOTELO - TETIS) CAPITULO 14',
  'name': 'Nede15.mp4',
  'duration': '3:01',
},
{
  'id': 'a10',
  'title': 'Piel De Bronce Entrevista Nedelka',
  'name': 'Nede4.mp4',
  'duration': '3:58',
},

// {
//   'id': 'a9',
//   'title': 'Con La Luz Prendida (Detras De Mi La Noche) (feat. Nedelka Sotelo) ',
//   'name': 'Nede16.mp4',
//   'duration': '3:59',
// },
{
  'id': 'a11',
  'title': 'A Mexican Affair - You Belong To My Heart ',
  'name': 'Nede17.mp4',
  'duration': '4:25',
},


    // {
    //     'id': 'a6',
    //     'title': 'embed google map to contact form',
    //     'name': 'embed google map to contact form.mp4',
    //     'duration': '5:33',
    // },
    // {
    //     'id': 'a7',
    //     'title': 'password strength checker javascript web app',
    //     'name': 'password strength checker javascript web app.mp4',
    //     'duration': '0:29',
    // },

    // {
    //     'id': 'a8',
    //     'title': 'custom range slider',
    //     'name': 'Nede1.mp4',
    //     'duration': '1:12',
    // },
    // {
    //     'id': 'a9',
    //     'title': 'animated shopping cart',
    //     'name': 'Nede5.mp4',
    //     'duration': '3:38',
    // },

];


  const handleVideoClick = (index) => {
    setActiveVideo(index);
  };

  return (
    <>


    <motion.section
        initial= {{y: "100%",opacity: 0}}
        animate= {{y: "0",opacity: 1, }}
        transition={{duration: 1, ease: 'easeOut'}}
        exit={{opacity: 0}}
    >

          {/* <h1 style={{ fontSize: "3.5rem", marginTop: '7%', fontWeight: "600", marginLeft: '10%'}}>Video Playlist</h1> */}
          <div
  className="videoCont2"
  style={{
  //   position: "relative",
  //   zIndex: "100000000",
  //  // background: "#fff",
  //   height: "78vh",
  //   padding: '12% 0',
  //   width: "100%",
  //   display: "flex",
  //   justifyContent: "flex-start",
  //   alignItems: "center",
  //   flexDirection: "column",
   
  //   marginTop: "0%",
   // background: '#fdf5f2',
   // background: '#ecebf5'
  }}
>
    <main className="containerVideo">
      <section className="main-video">
        <video src={`/videos/${data[activeVideo].name}`} controls></video>
        <h3 className="titleVid">{data[activeVideo].title}</h3>
      </section>

      <section className="video-playlist">
        <h3 className="playlist-title">Video Playlist</h3>
        <p>{data.length} lessons &nbsp; . &nbsp; {calculateTotalDuration(data)}</p>
        <div className="videos">
          {data.map((video, index) => (
            <div
              key={video.id}
              className={`video video-track ${index === activeVideo ? 'active' : ''}`}
              onClick={() => handleVideoClick(index)}
            >
              {/* <img src={`images/${index === activeVideo ? 'pause' : 'play'}.svg`} alt="" /> */}
             
              <div
                    className="song-item"
                      style={{
                       
                      }}
                    >
                      <p className="video-index" style={{ marginLeft: "-10%" }}>
                        {index + 1 > 9 ? index + 1 : "0" + (index + 1)}.{" "}
                      </p>
                      <h3 style={{}} className=" title">
                        {video.title}
                      </h3>
                      <p className='time' style={{ marginLeft: "0%" }} >
                        {video.duration}
                      </p>
                    </div>

            </div>
          ))}
        </div>
      </section>
    </main>
    </div>
    </motion.section>

    </>
  );
};

// Helper function to calculate the total duration of all videos
const calculateTotalDuration = (videos) => {
  const totalSeconds = videos.reduce((acc, video) => {
    const [minutes, seconds] = video.duration.split(':').map(Number);
    return acc + minutes * 60 + seconds;
  }, 0);

  const totalMinutes = Math.floor(totalSeconds / 60);
  const remainingSeconds = totalSeconds % 60;

  return `${totalMinutes}m ${remainingSeconds}s`;
};

export default VideoPlayer;
