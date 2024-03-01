import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./About.scss";
import Socials from "../Socials";
import Cards from './Cards'

const About4 = () => {
  return (
    <>
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: "0", opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        exit={{ opacity: 0 }}
        className="about-layer"
        style={{}}
      ></motion.div>

      <motion.section
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: "0", opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      exit={{ opacity: 0 }}
        className="about-padding"
        style={
          {
            // position: "relative",
            // zIndex: "1000",
            // padding: "6.5% 10%",
            // width: "100vw",
            // height: '92vh',
            // marginBottom: "8%",
          }
        }
      >
        <div className="services">
          <div className="upper">
            <div className="text">
              <h4 className="about-main" style={{}}>
                Artist living in NYC finding a fusion between sounds of
                traditional and modern{" "}
                <span className="highlighted">reggae.</span>
              </h4>
            </div>

            <div className="sociales" style={{}}>
              <span className="aboutMe-text" style={{}}>
                (About Me)
              </span>
              {/* <Pop  mainText="About" popText="Me" mixBlendMode="lighten" fontSizing="2.2rem" /> */}

              <Socials />
            </div>
          </div>
          <span
            style={{ display: "block", fontSize: "1.5rem", marginTop: "1%" }}
          >
            (What i do)
          </span>
          <div style={{}} className="downder">
            <div className="portrait" style={{}}>
              <img
              className="about-pic"
                style={{
                }}
                src="/images/vf57.png"
                alt="portrait"
              />
        
            </div>

            <div className="fours">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "25px",
                }}
              >

                  <Cards />

              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default About4;
