import React from "react";
import styles from "./boardNav.module.css";

function BoardNav() {
  return (
    <nav>
      <section className={styles.firstNav}>
        <button type="button">Board</button>
        <h3 className={styles.boardName}>Alpha board</h3>
      </section>
      <section className={styles.secondNav}>
        <div className={styles.secondNavPart1}>
          <div className="subnav-avatar"></div>
          <button type="button">Invite</button>
        </div>
        <div className={styles.secondNavPart2}>
          <button type="button" className="automation-btn">Automation</button>
          <button type="button" className="show-menu">Show menu</button>
        </div>
      </section>
    </nav>
  );
}

export default BoardNav;
