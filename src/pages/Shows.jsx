import React from 'react'
import { motion } from "framer-motion";
import './Shows.scss'
const Shows = () => {
  return (
    <motion.section
    initial={{ y: "100%", opacity: 0 }}
        animate={{ y: "0", opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        exit={{ opacity: 0 }}
    className='flyer-container-shows'>

                <img  style={{border: '1px solid #000'}} src='/images/g44.jpeg' effect="blur" alt='Flyer 1'></img>
                
                <img src='/images/g56.jpeg'effect="blur" alt='Flyer 2'></img>
                <img src='/images/g66.jpeg'effect="blur" alt='Flyer 3'></img>


                <img src='/images/g52.jpeg'effect="blur" alt='Flyer 4'></img>

                <img src='/images/g53.jpeg'effect="blur" alt='Flyer 5'></img>


            </motion.section>
  )
}

export default Shows