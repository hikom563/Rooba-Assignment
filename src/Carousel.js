import React, { useEffect, useState } from 'react';
import styles from './Carousel.module.css';

const images = [
  '/images/elena.jpg',
  '/images/nainoa.jpg',
  '/images/noiseporn.jpg',
  '/images/teemu.jpg',
  // Add more image paths as needed
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideClass, setSlideClass] = useState(styles.active);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideClass(styles.left); // Start exit animation

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setSlideClass(styles.right); // Move next slide to starting position

        setTimeout(() => {
          setSlideClass(styles.active); // Start enter animation
        }, 50); // Small delay to ensure the slide is hidden before starting enter animation
      }, 1000); // Duration of the exit animation
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.carousel}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`${styles.slide} ${index === currentIndex ? styles.active : index === (currentIndex + 1) % images.length ? styles.right : styles.left}`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}
    </div>
  );
}

export default Carousel;