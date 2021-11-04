import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

import CreateBoardButton from "./CreateBoardButton";

import { selectAllBoard, fetchBoards } from "./boardsSlice";
import styles from "./BoardList.module.css";


function BoardList() {
  const boards = useSelector(selectAllBoard);
  const boardStatus = useSelector(state => state.boards.status);
  const error = useSelector(state => state.boards.error);

  const dispatch = useDispatch();

  useEffect(() => {
    if (boardStatus === 'idle') {
      dispatch(fetchBoards());
    }
  }, [boardStatus, dispatch]);

  const BoardTile = ({ board }) => {
    const history = useHistory();
    const { name, id: boardId } = board;

    return (
      <div
        className={styles.boardTile}
        onClick={() => history.push(`/boards/${boardId}`)}
      >
        <span>{name}</span>
      </div>
    );
  };

  let content;

  if (boardStatus === 'loading') {
    content = <div className="loader">Loading....</div>;
  } else if (boardStatus === 'succeeded') {
    const renderedBoard = boards.map(item => {
      return (
        <li className={styles.boardItem} key={item.id}>
          <BoardTile board={item} />
        </li>
      )
    });

    content = (
      <ul className={styles.boardList}>
        {renderedBoard}
        <li key='board-creator' className={styles.boardItem}>
          <CreateBoardButton styles={styles} />
        </li>
      </ul>
    );
  } else if (boardStatus === 'failure') {
    content = <div className="error">{error}</div>
  }

  return (
    <div className={styles.root}>
      <h3>Your boards</h3>
      {content}
    </div>
  );
}

export default BoardList;
