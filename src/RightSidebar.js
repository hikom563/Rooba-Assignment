// src/RightSidebar.js
import React from 'react';
import styles from './App.module.css';
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import ArtistCarousel from './ArtistCarousel';

const RightSidebar = () => {
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
        Explore your first&nbsp;event
      </div>
      <div className={styles.eventName}>
        Event Name
      </div>
      <div className={styles.eventDetails}>
        <div className={styles.detailItem}>
          <FaMapMarkerAlt className={styles.icon} />
          <span>Venue</span>
        </div>
        <div className={styles.detailItem}>
          <FaClock className={styles.icon} />
          <span>04/03/2024 @19:00</span>
        </div>
      </div>
      <div className={styles.additionalInfo}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </div>
      <div className={styles.artistLineup}>
        Artist Lineup
      </div>
      <ArtistCarousel /> {/* Add the ArtistCarousel component here */}
      <img src='/QR/QR.jpg' alt="QR Code" className={styles.qrImage} /> {/* Add QR image */}
      <button className={styles.joinWaitlistButton}>Join Waitlist</button> {/* Add Join Waitlist button */}
    </div>
  );
};

export default RightSidebar;