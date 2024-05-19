// src/ArtistCarousel.js
import React from 'react';
import styles from './ArtistCarousel.module.css';

const ArtistCarousel = () => {
  return (
    <div className={styles.carouselContainer}>
      <div className={`${styles.photo} ${styles.left}`}>
        <img src="/Artists/Artist1.jpg" alt="Artist 1" />
      </div>
      <div className={`${styles.photo} ${styles.center}`}>
        <img src="/Artists/Artist2.jpg" alt="Artist 2" />
      </div>
      <div className={`${styles.photo} ${styles.right}`}>
        <img src="/Artists/Artist3.jpg" alt="Artist 3" />
      </div>
    </div>
  );
};

export default ArtistCarousel;