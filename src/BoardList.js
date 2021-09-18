import React from "react";

import styles from "./boardList.module.css";


function BoardList() {
  return (
    <div className={styles.root}>
      <h3>Your boards</h3>
      <ul className={styles.boardList}>
        <li className={styles.boardItem}>
          <div className={styles.boardTile}>
            <span>alpha board</span>
          </div>
        </li>
        <li className={styles.boardItem}>
          <div className={styles.boardTile}>
            <span>bravo board</span>
          </div>
        </li>
        <li className={styles.boardItem}>
          <div className={styles.boardTile}>
            <span>charlie board</span>
          </div>
        </li>
        <li className={styles.boardItem}>
          <div className={styles.boardTile}>
            <span>delta board</span>
          </div>
        </li>
        <li className={styles.boardItem}>
          <div className={styles.boardTile}>
            <span>echo board</span>
          </div>
        </li>
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
