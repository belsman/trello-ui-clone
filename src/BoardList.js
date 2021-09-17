import React from "react";

import styles from "./boardList.module.css";


function BoardList() {
  return (
    <div className={styles.root}>
      <h3>Your boards</h3>
      <ul className={styles.boardList}>
        <li className={styles.boardItem}>
          <div id={styles.createBoard} className={styles.boardTile}>
            <span>Create new board</span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default BoardList;
