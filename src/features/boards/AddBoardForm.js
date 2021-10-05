import React, { useState } from "react";
import styles from "./CreateBoard.module.css";

function AddBoardForm({ closeFn }) {
  const [ newBoardTitle, setNewBoardTitle ] = useState('');
  
  const newBoardHandler = e => {
    e.preventDefault();
    alert(`The name of the board is => ${newBoardTitle}`);
  };

  return (
    <div className={styles.root}>
      <form onSubmit={newBoardHandler}>
        <input
          type="text"
          name="newboard"
          placeholder="Add board title"
          value={newBoardTitle}
          onChange={e => setNewBoardTitle(e.target.value)}
          className={styles.titleInput}
          required
        />
        <div className={styles.actionButton}>
          <button className={styles.submit} type="submit">Create</button>
          <button
            className={styles.cancel}
            type="button"
            onClick={() => closeFn()}
          >
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBoardForm;
