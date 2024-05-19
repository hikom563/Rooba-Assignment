import React, { useState } from 'react';
import styles from './App.module.css';
import Carousel from './Carousel'; // Import the Carousel component
import ToggleButton from './ToggleButton'; // Import the ToggleButton component
import RightSidebar from './RightSidebar'; // Import the RightSidebar component
import CollectionsSidebar from './CollectionsSidebar'; // Import the CollectionsSidebar component

function App() {
  const [active, setActive] = useState('events');

  return (
    <div className={styles.container}>
      {/* Main Content */}
      <div className={styles.mainContent}>
        {/* Logo */}
        <img src='/Logo/logo.png' alt="Logo" className={styles.logo} />
        
        {/* Fancy Text */}
        <div className={styles.fancyText}>
          <div>Astrix</div>
          <div>Events</div>
          <div>and Collections</div>
        </div>
        
        <div className={styles.centerContent}>
          <Carousel /> {/* Add the Carousel component here */}
        </div>
        {/* Right Side Content */}
        {active === 'events' ? <RightSidebar /> : <CollectionsSidebar />}
      </div>

      {/* Bottom Navigation */}
      <div className={styles.bottomNav}>
        <ToggleButton active={active} setActive={setActive} /> {/* Add the ToggleButton component here */}
      </div>
    </div>
  );
}

export default App;