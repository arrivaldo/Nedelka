import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import "./TeachingGallery.scss";

const TeachingGallery = () => {
  return (
    <section className="teaching-gallery-section">
      <div className="row">
        <div className="column">
          <LazyLoadImage
            alt="Teaching Image 1"
            src="/images/g22.jpeg"
            effect="blur"
          />
          <LazyLoadImage
            alt="Teaching Image 2"
            src="/images/g23.jpeg"
            effect="blur"
          />
          <LazyLoadImage
            alt="Teaching Image 3"
            src="/images/g31.jpeg"
            effect="blur"
          />
          <LazyLoadImage
            alt="Teaching Image 4"
            src="/images/g32.jpeg"
            effect="blur"
          />
          <LazyLoadImage
            alt="Teaching Image 5"
            src="/images/g65.jpeg"
            effect="blur"
          />
        </div>
        <div className="column">
          <LazyLoadImage
            alt="Teaching Image 6"
            src="/images/g47.jpeg"
            effect="blur"
          />
          <LazyLoadImage
            alt="Teaching Image 7"
            src="/images/vf8.jpg"
            effect="blur"
          />
          <LazyLoadImage
            alt="Teaching Image 8"
            src="/images/g55.jpeg"
            effect="blur"
          />
          <LazyLoadImage
            alt="Teaching Image 9"
            src="/images/vf5.jpg"
            effect="blur"
          />
        </div>
        <div className="column">
          <LazyLoadImage
            alt="Teaching Image 10"
            src="/images/g68.jpeg"
            effect="blur"
          />
          <LazyLoadImage
            alt="Teaching Image 11"
            src="/images/g60.jpeg"
            effect="blur"
          />
          <LazyLoadImage
            alt="Teaching Image 12"
            src="/images/vf21.jpg"
            effect="blur"
          />
          <LazyLoadImage
            alt="Teaching Image 13"
            src="/images/g59.jpeg"
            effect="blur"
          />
          <LazyLoadImage
            alt="Teaching Image 14"
            src="/images/nede4.jpeg"
            effect="blur"
          />
        </div>
        <div className="column">
          <LazyLoadImage
            alt="Teaching Image 15"
            src="/images/g33.jpeg"
            effect="blur"
          />
          <LazyLoadImage
            alt="Teaching Image 16"
            src="/images/g45.jpeg"
            effect="blur"
          />
          <LazyLoadImage
            alt="Teaching Image 17"
            src="/images/g46.jpeg"
            effect="blur"
          />
          <LazyLoadImage
            alt="Teaching Image 18"
            src="/images/vf29.jpg"
            effect="blur"
          />
        </div>
      </div>
    </section>
  );
};

export default TeachingGallery;
