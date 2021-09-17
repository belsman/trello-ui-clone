import React from "react";

import styles from "./boardList.module.css";


function BoardList() {
  return (
    <div className={styles.root}>
      <h3>Your boards</h3>
      <ul className={styles.boardList}>
        <li className={styles.boardItem}>
          <div id="create-board" className={styles.boardTile}>
            Create new board
          </div>
        </li>
      </ul>
    </div>
  );
}

export default BoardList;
