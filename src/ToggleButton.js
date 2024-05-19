import React from 'react';
import styles from './ToggleButton.module.css';

function ToggleButton({ active, setActive }) {
  const handleToggle = (button) => {
    setActive(button);
  };

  return (
    <div className={styles.toggleContainer}>
      <button
        className={`${styles.button} ${active === 'events' ? styles.active : ''}`}
        onClick={() => handleToggle('events')}
      >
        Events
      </button>
      <button
        className={`${styles.button} ${active === 'collections' ? styles.active : ''}`}
        onClick={() => handleToggle('collections')}
      >
        Collections
      </button>
      <div className={`${styles.slider} ${active === 'events' ? styles.sliderEvent : styles.sliderCollection}`}></div>
    </div>
  );
}

export default ToggleButton;