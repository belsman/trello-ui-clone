import React from "react";
import styles from "./boardList.module.css";

function BoardList() {
  const boards = [ { id: 1, name: 'alpha' }, { id: 2, name: 'bravo' }, { id: 3, name: 'charlie' } ];

  const BoardTile = ({ board }) => {
    const { name } = board;

    return (
      <div className={styles.boardTile}>
        <span>{name}</span>
      </div>
    );
  };
  
  const renderedBoard = boards.map(item => {
    return (
      <li className={styles.boardItem} key={item.id}>
        <BoardTile board={item} />
      </li>
    )
  });

  return (
    <div className={styles.root}>
      <h3>Your boards</h3>
      <ul className={styles.boardList}>
        {renderedBoard}
      </ul>
    </div>
  );
}

export default BoardList;
