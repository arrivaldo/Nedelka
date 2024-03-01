import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Vinil from "./Vinil";
import InfoSocials from "./InfoSocials";
import Signing from "/images/signing2.png";
import "./Info.scss";


const Info = () => {

  return (
    <>
      {/* <h1 style={{padding: '0 10%', fontSize: '4rem'}}>About</h1> */}
      <motion.div
      className="about-max-parent"
        style={{  }}
        initial={{ y: "100%", }}
        animate={{ y: "0",  }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        exit={{ opacity: 0 }}

        //  initial= {{opacity: 0}}
        //  animate= {{opacity: 1}}
        //  transition={{duration: 0.75, ease: 'easeOut'}}
        //  exit={{opacity: 0}}
      >
        <div
        className="about-parent"
          style={{
           
            //  background: '#fdf5f2'
          }}
        >
          <section
          className="about-section"
            style={{
           
              //marginLeft: "10%",
              // background: '#a5b4fc',
            }}
          >
            <motion.div 
             initial= {{x: "-20%"}}
             animate={{x:0}} 
             transition ={{delay: '0.5', duration: 0.5}}
            className="vinil-container" style={{  }}>
              <Vinil />
            </motion.div>
            <div
              className="about"
              style={{
                
              }}
            >
              {/* <h2 style={{ marginBottom: '1%'} }>Hi there, I'm Nedelka</h2> */}
              <div style={{ overflow: "hidden" }}>
                <motion.h2
                  initial= {{y: "100%"}}
                  animate={{y:0}} 
                  transition ={{delay: '0.5', duration: 0.5}}
                className=" about-main-text"
                  // animate={{ y: 0 }}
                  // initial={{ y: "100%" }}
                  // transition={{ delay: "0.5", duration: 0.5 }}
                  // style={{ }}
                >
                  Singer and Actress living in NYC. finding a fusion between the
                  old and new sounds of traditional and modern{" "}
                  <span className="highlighted3">reggae.</span>
                </motion.h2>
              </div>
              <div className="social-signing">
              <InfoSocials />
              <img
            //    initial= {{y: "100%"}}
            //    animate={{y:0}} 
            //    transition ={{delay: '0.5', duration: 0.5}}
              className="signing"
                style={{
                 
                  //  marginLeft: "57%"
                }}
                src={Signing}
              ></img>
              </div>
            </div>
          </section>
          <div style={{overflow: 'hidden'}}>
          <motion.p
            initial= {{y: "100%"}}
            animate={{y:0}} 
            transition ={{delay: '0.5', duration: 0.5}}
          className=" about-description"
            style={{
              // background: '#daff00'
            }}
          >
            Inspired by the music of masters of{" "}
            <span style={{ background: "transparent" }}> Jamaican reggae</span>{" "}
            (Bob Marley, Gregory Isaacs, Peter Tosh) and Latin reggae (Cultura
            Profética, Nonpalidece, Los Cafres) she’s finding a fusion between
            the old and new sounds of traditional and modern reggae by
            adding her own{" "}
            <span style={{ background: "transparent" }}> Mexican folclore</span>
            , prehispanic instruments and different styles of sounds she’s been
            influenced by. Nedelka leads this project on vocals collaborating
            with extraordinary musicians on bass, guitar and
            keyboards and percussion.
          </motion.p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Info;
