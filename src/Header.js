import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faHome, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.css';


function Header() {
  return (
    <nav className={styles.header}>
      <div className={styles.leftNav}>
        <button className={styles.navbtn}>
            <FontAwesomeIcon icon={faHome} />
        </button>
        <button className={styles.navbtn}>Boards</button>
        <input type="search" placeholder="Jump to..."/>
      </div>

      <div className={styles.middleNav}>
        <span>Trello</span>
      </div>

      <div className={styles.rightNav}>
        <button className={styles.navbtn}>Create</button>
        <button className={styles.navbtn}>
            <FontAwesomeIcon icon={faInfoCircle}  />
        </button>
        <button className={styles.navbtn}>
          <FontAwesomeIcon icon={faBell} />
        </button>
        <button className={styles.navbtn}>Profile Link</button>
      </div>
    </nav>
  );
}

export default Header;
