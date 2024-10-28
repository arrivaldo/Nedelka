import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import About from './About'
import './Home.scss'
import Gallery from "./Gallery";
const Home = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  return (
    <>
      <motion.section
        style={{
          // background: "#fdf5f2",
          background: "#fff",
        }}
        ref={targetRef}
        className=" h-[200vh]"
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: "0", opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        exit={{ opacity: 0 }}
      >
        <div
          style={{
            height: "100vh",
            background: "#fff",
            // padding: "7% 10%",
            top: "50px",
          }}
          className="main-padding sticky z-0 grid grid-cols-3 grid-rows-3 gap-4 "
        >
          <div
            style={{ height: "100vh" }}
            className="absolute top-0 -z-10 h-full w-full bg-white"
          >
            <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
          </div>


          <Copy scrollYProgress={scrollYProgress} />
          <Images scrollYProgress={scrollYProgress} />

          <Circles />
        </div>
      </motion.section>
      
      <About />

      <Gallery />

    </>
  );
};

const Copy = ({ scrollYProgress }) => {
  const copyScale = useTransform(scrollYProgress, [0, 0.75], [1, 0.5]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const copyY = useTransform(scrollYProgress, [0, 0.75], ["0%", "7.5%"]);

  return (
    <motion.div
      style={{
        scale: copyScale,
        opacity: copyOpacity,
        y: copyY,
        height: "95vh",
      }}
      className="main-header-container absolute w-full z-20 flex flex-col items-center justify-center"
    >
      <div style={{ overflow: "hidden" }}>
        <motion.h1
          animate={{ y: 0 }}
          initial={{ y: "100%" }}
          transition={{ delay: "0.9", duration: 0.8 }}
          className="main-header text-stone-950  font-bold text-center max-w-xl"
        >
          Nedelka Sotelo
        </motion.h1>
      </div>

      <div
        style={{
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <motion.p
          className="main-text text-stone-600  text-center "
          animate={{ y: 0 }}
          initial={{ y: "150%" }}
          transition={{ delay: "1.2", duration: 0.8 }}
        >
          Mexican singer-songwriter, actress, and curator with over 20 years of
          experience in the performing arts.
        </motion.p>
      </div>

      <div className="buttons"
            
      >
        <Link to="/music">
          <motion.button 
           animate={{ opacity: 1 }}
           initial={{ opacity: 0 }}
           transition={{ delay: "1.7", duration: 0.9 }}
          className="neumorphic">
            <span>MUSIC</span>
          </motion.button>
        </Link>
        <Link to="/acting">
          <motion.button
           animate={{ opacity: 1 }}
           initial={{ opacity: 0 }}
           transition={{ delay: "1.7", duration: 0.9 }}
          className="neumorphic">
            <span>ACTING</span>
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

const Images = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  const image1Offset = useTransform(scrollYProgress, [0, 1], ["-35%", "0%"]);

  const image2OffsetX = useTransform(scrollYProgress, [0, 1], ["30%", "0%"]);
  const image2OffsetY = useTransform(scrollYProgress, [0, 1], ["-30%", "0%"]);

  const image3OffsetX = useTransform(scrollYProgress, [0, 1], ["-25%", "0%"]);
  const image3OffsetY = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);

  const image4OffsetX = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);
  const image4OffsetY = useTransform(scrollYProgress, [0, 1], ["-145%", "0%"]);

  const image5OffsetX = useTransform(scrollYProgress, [0, 1], ["-25%", "0%"]);
  const image5OffsetY = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);

  const image6OffsetX = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);
  const image6OffsetY = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);

  return (
    <>
      <motion.div
        className="col-span-2 relative z-10"
        style={{
          backgroundImage: "url(/images/nede421.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "top",
          scale,
          x: image1Offset,
          y: image1Offset,
        }}
      />
      <motion.div
        className="row-span-2 relative z-10"
        style={{
          backgroundImage: "url(/images/nede11.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          x: image2OffsetX,
          y: image2OffsetY,
        }}
      />

      <motion.div
        className="row-span-2 relative z-10"
        style={{
          backgroundImage: "url(/images/nede131.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          x: image3OffsetX,
          y: image3OffsetY,
        }}
      />
      <motion.div
        className="relative z-10"
        style={{
          backgroundImage: "url(/images/vf42.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          x: image4OffsetX,
          y: image4OffsetY,
        }}
      />

      <motion.div
        className="relative z-10"
        style={{
          backgroundImage: "url(/images/nede5.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          x: image5OffsetX,
          y: image5OffsetY,
        }}
      />
      <motion.div
        className="relative z-10"
        style={{
          backgroundImage: "url(/images/nede8.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          x: image6OffsetX,
          y: image6OffsetY,
        }}
      />
    </>
  );
};

const Circles = () => (
  <>
    <div className="w-3/5 max-w-[850px] min-w-[400px] aspect-square border-[8px] border-slate-200 rounded-full absolute z-0 left-0 top-0 -translate-x-[50%] -translate-y-[50%]" />
    <div
      style={{ zIndex: "10000" }}
      className="hidden second-circle w-1/2 max-w-[600px] min-w-[300px] aspect-square border-[8px] border-slate-200 rounded-full absolute z-0 right-0 bottom-0 translate-x-[50%] translate-y-[50%]  "
    />
  </>
);

export default Home;
