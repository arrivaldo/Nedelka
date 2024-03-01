import React from 'react'
import Info from './Info'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './Culture.scss'

const Culture = () => {
  return (
        <>
            <Info />

            <section className='flyer-container'>

                <img style={{border: '1px solid #000'}} src='/images/g44.jpeg' effect="blur" alt='Flyer 1'></img>
                
                <img src='/images/g56.jpeg'effect="blur" alt='Flyer 2'></img>
                <img src='/images/g66.jpeg'effect="blur" alt='Flyer 3'></img>


                <img src='/images/g52.jpeg'effect="blur" alt='Flyer 4'></img>

                <img src='/images/g53.jpeg'effect="blur" alt='Flyer 5'></img>


            </section>
        </>
    )
}

export default Culture