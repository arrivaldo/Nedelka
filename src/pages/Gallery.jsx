import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import "./Gallery.scss";

const Gallery = () => {
  return (
    <section className="gallery-section" aria-label="Image Gallery">
      <div className="row">
        {/* Each image should have appropriate alt text for accessibility */}
        <div className="column">
          <LazyLoadImage src="/images/g6.jpeg"  alt="Gallery Image 1" loading="lazy" effect="blur" />
          <LazyLoadImage src="/images/g24.jpeg" alt="Gallery Image 2" loading="lazy" effect="blur" />
          <LazyLoadImage src="/images/vf16.jpg" alt="Gallery Image 3" loading="lazy" effect="blur" />
          <LazyLoadImage src="/images/vf26.jpg" alt="Gallery Image 4" loading="lazy" effect="blur" />
          <LazyLoadImage src="/images/vf7.jpg" alt="Gallery Image 5" loading="lazy" effect="blur" />
          <LazyLoadImage src="/images/nede3.jpeg" alt="Gallery Image 6" loading="lazy" effect="blur" />
          <LazyLoadImage src="/images/nede1.jpeg" alt="Gallery Image 7" loading="lazy" effect="blur" />
        </div>
        <div className="column">
          <LazyLoadImage src="/images/g25.jpeg" alt="Gallery Image 8" loading="lazy" effect="blur" />
          <LazyLoadImage src="/images/nede5.jpeg" alt="Gallery Image 9" loading="lazy" effect="blur" />
          <LazyLoadImage src="/images/nede3.jpeg" alt="Gallery Image 10" loading="lazy" effect="blur" />
          <LazyLoadImage src="/images/g49.jpeg" alt="Gallery Image 11" loading="lazy" effect="blur" />
          <LazyLoadImage src="/images/g63.jpeg" alt="Gallery Image 12" loading="lazy" effect="blur" />
          <LazyLoadImage src="/images/g33.jpeg" alt="Gallery Image 13" loading="lazy" effect="blur" />
        </div>
        <div className="column">
          <LazyLoadImage src="/images/vf54.png" alt="Gallery Image 14" loading="lazy" effect="blur" />
          <LazyLoadImage src="/images/g63.jpeg" alt="Gallery Image 15" loading="lazy" effect="blur" />
          <LazyLoadImage src="/images/g9.jpeg" alt="Gallery Image 16" loading="lazy" effect="blur" />
          <LazyLoadImage src="/images/g6.jpeg" alt="Gallery Image 17" loading="lazy" effect="blur" />
          <LazyLoadImage src="/images/g8.jpeg" alt="Gallery Image 18" loading="lazy" effect="blur" />
          <LazyLoadImage src="/images/g9.jpeg" alt="Gallery Image 19" loading="lazy" effect="blur" />
          <LazyLoadImage src="/images/g19.jpeg" alt="Gallery Image 20" loading="lazy" effect="blur" />
        </div>
        <div className="column">
          <LazyLoadImage src="/images/g58.jpeg" alt="Gallery Image 21" loading="lazy" effect="blur" />
          <LazyLoadImage src="/images/g1.jpeg" alt="Gallery Image 22" loading="lazy" effect="blur" />
          <LazyLoadImage src="/images/g18.jpeg" alt="Gallery Image 23" loading="lazy" effect="blur" />
          <LazyLoadImage src="/images/g16.jpeg" alt="Gallery Image 24" loading="lazy" effect="blur" />
          <LazyLoadImage src="/images/g54.jpeg" alt="Gallery Image 25" loading="lazy" effect="blur" />
          <LazyLoadImage src="/images/g62.jpeg" alt="Gallery Image 26" loading="lazy" effect="blur" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
