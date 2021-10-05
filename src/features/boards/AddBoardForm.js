import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { unwrapResult } from '@reduxjs/toolkit';
import { addNewBoard } from "./boardsSlice";
import styles from "./CreateBoard.module.css";

function AddBoardForm({ closeFn }) {
  const [ newBoardTitle, setNewBoardTitle ] = useState('');
  const [ addRequestStatus, setAddRequestStatus] = useState('');
  const dispatch = useDispatch();
  
  const newBoardHandler = e => {
    e.preventDefault();
    try {
      setAddRequestStatus('pending');
      const resultAction = dispatch(addNewBoard({ name: newBoardTitle }));
      unwrapResult(resultAction);
      setNewBoardTitle('');
    } catch (err) {
      console.error(err);
    } finally {
      setAddRequestStatus('idle');
    }
    closeFn();
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
