import React from "react";

function CreateBoardButton({ styles }) {
  return (
    <div
      id={styles.createBoard}
      className={styles.boardTile}
      onClick={() => alert("Show me! The add form modal!")}
    >
      <span>Create new board</span>
    </div>
  );
}

export default CreateBoardButton;
