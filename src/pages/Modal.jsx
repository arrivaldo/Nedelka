import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import './Modal.scss'

const Modal = ({ isOpen, setIsOpen, project }) => {
  const modalStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    background: "rgba(0, 0, 0, 0.5)",
    zIndex: 100,
  };

  const contentStyles = {
    background: "white",
    padding: "1rem",
    borderRadius: "8px",
    //width: "30%",
  };

  return (
    <AnimatePresence>
      {isOpen && project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          style={modalStyles}
        >
          <motion.div
          className="modal-parent"
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            style={contentStyles}
          >
            <div className="relative z-10">
              <img
                src={project.cover}
                alt={project.title}
                className="w-full rounded-lg"
              />
              <h3 style={{padding: '3% 0 ', color: "#000" }} className="text-3xl font-bold text-center mb-2">
                {project.title}
              </h3>
              <p style={{paddingBottom: '3%', color: "#000" }} className="text-center mb-6">
                {project.description}
              </p>
              <div className="flex gap-2">
                <button
                  style={{ color: "#000" }}
                  onClick={() => setIsOpen(false)}
                  className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                >
                  Nah, go back
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-white hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-full py-2 rounded"
                >
                  Understood!
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
