import React from "react";
import styles from './Header.module.css';

function Header() {
  return (
    <nav className={styles.header}>
      <div className={styles.leftNav}>
        <button className="navbtn">Home</button>
        <button className="navbtn">Boards</button>
        <input type="search" placeholder="Jump to..."/>
      </div>

      <div className={styles.middleNav}>
        <span>Trello</span>
      </div>

      <div className={styles.rightNav}>
        <button className="navbtn">Create</button>
        <button className="navbtn">Info</button>
        <button className="navbtn">Bell</button>
        <button className="navbtn">Profile Link</button>
      </div>
    </nav>
  );
}

export default Header;
