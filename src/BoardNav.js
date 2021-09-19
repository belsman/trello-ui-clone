import React from "react";
import styles from "./boardNav.module.css";

function BoardNav() {
  return (
    <nav className={styles.subNav}>
      <section className={styles.firstNav}>
        <button type="button" className={styles.clickableBtn}>Board</button>
        <h3 className={`${styles.boardName} ${styles.clickableBtn}`}>Alpha board</h3>
      </section>
      <section className={styles.secondNav}>
        <div className={styles.secondNavPart1}>
          <div className={`${styles.navAvatar}`}></div>
          <button type="button" className={`${styles.clickableBtn}`}>Invite</button>
        </div>
        <div className={styles.secondNavPart2}>
          <button type="button" className={`${styles.clickableBtn}`} id="automation-btn">Automation</button>
          <button type="button" id="show-menu" className={`${styles.clickableBtn}`}>Show menu</button>
        </div>
      </section>
    </nav>
  );
}

export default BoardNav;
