import React from "react";
import { useDispatch } from "react-redux";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faHome, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'; //faInfoCircle

import { logout } from "./features/auth/authSlice";
import styles from './Header.module.css';
import { useHistory } from "react-router";

function Header() {

  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <nav className={styles.header}>
      <div className={styles.leftNav}>
        <button className={`${styles.navbtn} ${styles.navIconBtn}`}>
            <FontAwesomeIcon icon={faHome} />
        </button>
        <button
          className={styles.navbtn}
          onClick={() => history.push('/boards')}
        >
          <span className={styles.bolder}>Boards</span>
        </button>
        <input className={styles.navFormControl} type="search" placeholder="Jump to..."/>
      </div>

      <div className={styles.middleNav}>
        <span className={styles.brandLogo}></span>
      </div>

      <div className={styles.rightNav}>
        {/* <button className={styles.navbtn}>Create</button>
        <button className={`${styles.navbtn} ${styles.navIconBtn}`}>
            <FontAwesomeIcon icon={faInfoCircle}  />
        </button>
        <button className={`${styles.navbtn} ${styles.navIconBtn}`}>
          <FontAwesomeIcon icon={faBell} />
        </button> */}
        <button
          className={`${styles.navbtn} ${styles.tempLogout}`}
          onClick={() => dispatch(logout())}
        >
          <FontAwesomeIcon icon={faSignOutAlt} />
        </button>
        {/* <div className={styles.headerAvatar}></div> */}
      </div>
    </nav>
  );
}

export default Header;
