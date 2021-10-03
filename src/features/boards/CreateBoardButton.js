import React, { useState } from "react";
import Modal from "react-modal";

const NewBoardForm = () => {
  const [ newBoardTitle, setNewBoardTitle ] = useState('');

  return (
    <div>
      <form>
        <input
          type="text"
          name="newboard"
          placeholder="Add board title"
          value={newBoardTitle}
          onChange={setNewBoardTitle}
        />
        <button type="button">Create</button>
      </form>
    </div>
  );
};

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
