import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faHome, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.css';


function Header() {
  return (
    <nav className={styles.header}>
      <div className={styles.leftNav}>
        <button className={`${styles.navbtn} ${styles.navIconBtn}`}>
            <FontAwesomeIcon icon={faHome} />
        </button>
        <button className={styles.navbtn}><span className={styles.bolder}>Boards</span></button>
        <input className={styles.navFormControl} type="search" placeholder="Jump to..."/>
      </div>

      <div className={styles.middleNav}>
        <span class={styles.brandLogo}></span>
      </div>

      <div className={styles.rightNav}>
        <button className={styles.navbtn}>Create</button>
        <button className={`${styles.navbtn} ${styles.navIconBtn}`}>
            <FontAwesomeIcon icon={faInfoCircle}  />
        </button>
        <button className={`${styles.navbtn} ${styles.navIconBtn}`}>
          <FontAwesomeIcon icon={faBell} />
        </button>
        <div className={styles.headerAvatar}></div>
      </div>
    </nav>
  );
}

export default Header;
