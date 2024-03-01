import { useEffect, useState, useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import portfolioData from "../data/portfolio.json";// Import ScrollTrigger from gsap/all
import Modal from "./Modal"; // Import the Modal component
import { wrapper, item } from "../animation"
import Info from "./Info";
import "./Acting.scss";


const Acting = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });


  const renderPortfolio = (portfolio) => {
    return (
      <>
        <motion.div 
         variants={wrapper} initial="hidden" animate= "show"
        className=" images-container">
          {portfolio.map((port, idx) => {
            return (
              <motion.div variants={item} className="image-box" key={idx}>
                <img
                style={{}}
                  src={port.cover}
                  className="portfolio-image gallery__img"
                  alt="portfolio"
                />
                <div  className=" content">
                  <p className="card-date">{port.date}</p>
                  <h4 className="title">{port.title}</h4>

                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                     // justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >

                    <button 
                      className="btn"
                      onClick={() => {
                        setSelectedProject(port);
                        setIsModalOpen(true);
                      }}
                    >
                      View Project
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </>
    );
  };

  return (
    <>
      <div style={{}} className="portfolio-page2" ref={targetRef}>
        <div className="portfolio-titles">
            {/* <div style={{overflow: 'hidden'}}>
          <motion.h2
             initial= {{y: "100%"}}
             animate={{y:0}} 
             transition ={{delay: '0.5', duration: 0.5}}
          className="">What I have done so far...</motion.h2>
          </div> */}
{/* 
          <div style={{overflow: 'hidden'}}>
             <motion.h1
                   initial= {{y: "100%"}}
                   animate={{y:0}} 
                   transition ={{delay: '0.5', duration: 0.5}}
             className="page-title">
    
           Acting 
          </motion.h1>
          </div> */}

        </div>
        <div>{renderPortfolio(portfolioData.portfolio)}</div>
      </div>
      <Modal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        project={selectedProject}
      />
    </>
  );
};

export default Acting;
