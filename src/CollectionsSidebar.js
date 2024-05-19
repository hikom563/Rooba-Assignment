import React from 'react';
import styles from './CollectionsSidebar.module.css';
import ArtistCarousel from './ArtistCarousel';

const CollectionsSidebar = () => {
  return (
    <div className={styles.rightContent}>
      {/* Vertical Strip */}
      <div className={styles.verticalStrip}>
        <div className={styles.stripContent}>
          <div className={styles.stripText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div className={styles.stripText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
      </div>
      {/* Right side content */}
      <div className={styles.rightContentText}>
        Explore your first&nbsp;collectible
      </div>
      <div className={styles.eventName}>
        Collections
      </div>
      <div className={styles.eventDetails}>
        <span className={styles.liveInAstrix}>Live in Astrix</span>
      </div>
      <div className={styles.additionalInfo}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </div>
      <div className={styles.artistLineup}>
        Collectibles
      </div>
      <div className={styles.collectiblePhotos}>
        <img src='/collectible/collectible.jpg' alt="Collectible" className={styles.collectiblePhoto} />
        <img src='/collectible/collectible.jpg' alt="Collectible" className={styles.collectiblePhoto} />
        <img src='/collectible/collectible.jpg' alt="Collectible" className={`${styles.collectiblePhoto} ${styles.halfVisible}`} />
      </div>
      <button className={styles.joinWaitlistButton}>Join Waitlist</button> {/* Add Join Waitlist button */}
    </div>
  );
};

export default CollectionsSidebar;